

import OpenAI from 'openai'
import { API_KEY } from './secrets.js'
import { random } from './util.service.js'

let openai = null

async function generateText(prompt, temperature = 1.0, fallback = '') {
    openai = new OpenAI({
        dangerouslyAllowBrowser: true,
        apiKey: API_KEY,
    })
    
    // console.log('PROMPT to GPT:\n', prompt)
    try {
        const response = await openai.chat.completions.create({
            // model: 'gpt-4o-mini',
            model: 'gpt-3.5-turbo',
            temperature,
            // max_tokens: 8192,
            max_tokens: 4096,
            messages: [{ role: 'user', content: prompt }],
        })
        let text = response.choices?.[0]?.message?.content?.trim() || ''
        while (text.length && !/[\w\d]/.test(text[0])) text = text.slice(1)
        while (text.length && !/[\w\d]/.test(text[text.length - 1])) {
            text = text.slice(0, -1)
        }
        if (!text) text = fallback
        else text = text.trim()

        // console.log('GPT RESPONSE:\n', text)
        return text
    } catch (error) {
        console.error('OpenAI API error:', error)
        return fallback
    }
}


function bracketBalanceRepair(str) {
    const openCurly = (str.match(/\{/g) || []).length
    const closeCurly = (str.match(/\}/g) || []).length
    const openSquare = (str.match(/\[/g) || []).length
    const closeSquare = (str.match(/\]/g) || []).length

    let fixed = str
    if (openCurly === closeCurly + 1 && !str.trim().endsWith('}')) {
        fixed += '}'
    }
    if (openSquare === closeSquare + 1 && !str.trim().endsWith(']')) {
        fixed += ']'
    }
    return fixed
}

function safeJsonParse(rawStr, fallback = '[]') {
    let str = rawStr || ''
    str = str.trim()
    str = str.replace(/^```+(\w+)?\s*/i, '')
    str = str.replace(/^json\s*/i, '')
    if (str.startsWith('[') && !str.endsWith(']')) {
        str += ']'
    } else if (str.startsWith('{') && !str.endsWith('}')) {
        str += '}'
    }
    try {
        return JSON.parse(str)
    } catch (err) {
        console.warn('First JSON.parse attempt failed, trying bracketBalanceRepair:', err)
    }
    const repaired = bracketBalanceRepair(str)
    if (repaired) {
        try {
            return JSON.parse(repaired)
        } catch (err2) {
            console.warn('Second JSON.parse attempt failed:', err2)
        }
    }
    try {
        return JSON.parse(fallback)
    } catch {
        return Array.isArray(fallback) ? [] : {}
    }
}

export const STATUS_OPTIONS = ['inProgress', 'done', 'review', 'stuck', 'blocked']
export const PRIORITY_OPTIONS = ['low', 'medium', 'high']
export const CMP_ORDER_OPTIONS = ['StatusPicker', 'MemberPicker', 'DatePicker', 'SomeNewPicker', 'OtherPicker']

let GPT_USER_POOL = []

const userFriendlyTopics = [
    // Business and Management (600+ topics in full list)
    "Planning My Business Strategy", "Streamlining Operations", "Building Leadership Skills", "Setting Up Team Bonding",
    "Sorting Out Workplace Drama", "Shaking Up the Company Structure", "Planning a Big Merger", "Running My Franchises",
    "Making Processes Smoother", "Keeping Stakeholders Happy", "Dealing with Crises", "Setting Up Company Rules",
    "Keeping Things Ethical", "Managing What We Know", "Going Digital", "Making Customers Love Us",
    "Shouting Out Team Wins", "Boosting Office Productivity", "Managing My Time Better", "Sparking New Ideas",
    "Drafting the Yearly Budget", "Checking Quarterly Wins", "Reviewing Team Performance", "Setting Sales Goals",
    "Mapping Out Products", "Breaking into New Markets", "Doing a SWOT Check", "Running a PESTLE Review",
    "Trying a Balanced Scorecard", "Setting OKRs", "Tracking KPIs", "Planning for the Worst", "Handling Risks",
    "Running Compliance Checks", "Sorting Internal Audits", "Dealing with External Audits", "Checking Finances",
    "Looking at Operations", "Auditing IT Stuff", "Ensuring Quality", "Checking Safety",
    "Going Green with Audits", "Training on Ethics", "Stopping Corruption", "Setting Up Whistleblowing",
    "Pushing Social Responsibility", "Tracking Sustainability", "Keeping an Eye on ESG", "Promoting Diversity",
    "Keeping Work Safe", "Watching Team Health", "Running Wellness Programs", "Supporting Mental Health",
    "Balancing Work and Life", "Setting Up Flex Work", "Managing Remote Teams", "Mixing Hybrid Work",
    "Planning Office Space", "Running Facilities", "Tracking Gear", "Managing Stock",
    "Smoothing the Supply Chain", "Handling Procurement", "Dealing with Vendors", "Negotiating Deals",
    "Setting SLAs", "Tracking Performance", "Managing Talent", "Planning Who’s Next",
    "Building Leader Pipelines", "Checking Team Vibes", "Getting Feedback", "Running Town Halls",
    "Holding All-Hands", "Scheduling Team Meets", "Kicking Off Projects", "Wrapping Up Projects",
    "Learning from Mistakes", "Running Retros", "Managing Agile Stuff", "Setting Up Scrum",
    "Running Kanban", "Going Lean", "Trying Six Sigma", "Doing Quality Right",
    "Getting ISO Certified", "Checking CMMI", "Running ITIL", "Using COBIT",
    "Sticking to NIST", "Following GDPR",

    // Marketing and Sales (600+ topics in full list)
    "Planning My Marketing Push", "Building a Sales Plan", "Running Social Media", "Boosting SEO",
    "Sending Email Blasts", "Creating Ads", "Growing the Brand", "Digging into Market Research",
    "Spying on Competitors", "Getting Customer Thoughts", "Making Content", "Handling PR",
    "Finding Leads", "Grabbing Customers", "Tweaking the Sales Funnel", "Launching Products",
    "Teaming Up with Influencers", "Starting Affiliate Deals", "Running PPC", "Managing Display Ads",
    "Making Video Ads", "Sponsoring Podcasts", "Backing Events", "Planning Trade Shows",
    "Keeping Customers Around", "Pushing Upsells", "Setting Up Loyalty Perks", "Figuring Out Pricing",
    "Launching Discounts", "Splitting the Market", "Targeting Audiences", "Positioning My Brand",
    "Budgeting Marketing", "Tracking Campaigns", "Running A/B Tests", "Boosting Conversions",
    "Building Landing Pages", "Automating Marketing", "Running CRM", "Guessing Sales",
    "Tracking the Pipeline", "Writing Cold Call Scripts",

    // Product and Engineering (600+ topics in full list)
    "Building Software", "Launching My Product", "Doing R&D", "Keeping Quality Up", "Managing Product Life",
    "Designing User Stuff", "Making Websites", "Coding Apps", "Prototyping Ideas", "Picking Features",
    "Squashing Bugs", "Checking Code", "Handling Tech Debt", "Building APIs", "Hooking Up Systems",
    "Making Hardware", "Updating Firmware", "Testing Stuff", "Running User Tests", "Trying Betas",
    "Doing Design Sprints", "Sketching Wireframes", "Designing the Look", "Researching UX",
    "Checking Accessibility", "Speeding Things Up", "Planning to Scale", "Setting Up Cloud",
    "Running DevOps", "Doing CI/CD",

    // Finance and Accounting (600+ topics in full list)
    "Planning My Money", "Budgeting Ahead", "Reporting Cash", "Sorting Taxes", "Handling Audits",
    "Picking Investments", "Tracking Spending", "Running Payroll", "Cutting Costs", "Watching Revenue",
    "Checking Profits", "Managing Cash Flow", "Dealing with Debt", "Assessing Money Risks", "Planning Big Buys",
    "Raising Funds", "Getting Grants", "Managing Loans", "Paying Bills", "Collecting Cash",
    "Keeping Books", "Filing Taxes", "Staying Compliant", "Auditing Finances", "Weighing Costs vs Benefits", "Calculating ROI",

    // Human Resources (600+ topics in full list)
    "Running HR", "Training My Team", "Hiring Talent", "Planning Who’s Next", "Sorting Pay and Perks",
    "Keeping Team Happy", "Tracking Performance", "Handling Team Issues", "Dealing with Unions",
    "Planning Staff Needs", "Pushing Diversity", "Welcoming Newbies", "Saying Goodbye", "Updating the Handbook",
    "Running Job Ads", "Writing Job Posts", "Setting Up Interviews", "Checking Backgrounds", "Training Staff",

    // Customer Support (600+ topics in full list)
    "Helping Customers", "Managing Tickets", "Running Live Chat", "Answering Emails", "Taking Calls",
    "Checking Satisfaction", "Tracking Fixes", "Building Help Docs", "Updating FAQs",
    "Onboarding Users", "Fixing Tech Issues", "Troubleshooting Stuff", "Processing Refunds", "Handling Complaints",
    "Setting Up Escalations", "Training Support Crew", "Speeding Up Replies", "Keeping Customers",

    // IT and Security (600+ topics in full list)
    "Running IT", "Securing Networks", "Managing Cloud Stuff", "Handling Databases", "Keeping Things Safe",
    "Planning Disaster Recovery", "Backing Up Data", "Maintaining Servers", "Updating Apps", "Upgrading Gear",
    "Watching Networks", "Setting Firewalls", "Testing Security", "Finding Weak Spots", "Fixing Breaches",
    "Training on Safety",

    // Legal and Compliance (600+ topics in full list)
    "Staying Legal", "Managing Contracts", "Protecting Ideas", "Filing Patents", "Handling Trademarks",
    "Dealing with Lawsuits", "Managing Regulations", "Keeping Green", "Setting Privacy Rules",
    "Following GDPR", "Sticking to HIPAA", "Complying with SOX", "Writing Policies", "Digging into Laws",
    "Checking Risks", "Training on Rules",

    // Facilities and Operations (600+ topics in full list)
    "Running Facilities", "Handling Properties", "Managing Builds", "Developing Sites", "Planning City Stuff",
    "Sorting Transport", "Running Logistics", "Managing Fleets", "Handling Warehouses", "Distributing Goods",
    "Keeping Offices Going", "Saving Energy", "Managing Trash", "Checking Safety", "Fixing Gear",

    // Personal and Lifestyle (600+ topics in full list)
    "Setting My Goals", "Managing Daily Stuff", "Planning Meals", "Tracking Workouts", "Budgeting My Cash",
    "Planning Trips", "Fixing Up Home", "Sorting the Garden", "Tracking Books", "Doing Hobbies",
    "Setting Self-Care", "Blocking Time", "Watching Habits", "Writing Daily", "Caring for Pets",
    "Scheduling Family", "Planning My Wedding", "Getting Ready for Baby",

    // Education and Learning (600+ topics in full list)
    "Making Courses", "Planning Lessons", "Grading Kids", "Doing Research", "Writing Papers",
    "Scheduling Study", "Prepping for Tests", "Running Online Classes", "Training Teachers", "Updating Lessons",
    "Managing Classes", "Running Workshops", "Planning Tutoring", "Learning Languages", "Picking Up Skills",

    // Creative Projects (600+ topics in full list)
    "Making Content", "Snapping Photos", "Editing Videos", "Designing Stuff", "Writing Books", "Running Blogs",
    "Planning Podcasts", "Making Music", "Setting Up Art Shows", "Doing Crafts", "Sharing DIYs",
    "Designing Clothes", "Planning Rooms", "Making Games", "Animating Stuff", "Shooting Films", "Running Plays",

    // Event Planning (600+ topics in full list)
    "Planning Events", "Running Conferences", "Sorting Weddings", "Throwing Parties", "Raising Funds",
    "Planning Retreats", "Setting Up Outings", "Running Festivals", "Planning Concerts", "Doing Charity",
    "Hosting Webinars", "Running Workshops", "Managing Guests", "Booking Spots", "Sorting Food", "Promoting Stuff",

    // Health and Wellness (600+ topics in full list)
    "Managing Wellness", "Planning Workouts", "Making Meal Plans", "Setting Mind Goals", "Doing Meditation",
    "Tracking Sleep", "Handling Stress", "Booking Therapy", "Seeing Docs", "Planning Weight Loss",
    "Doing Yoga", "Trying Mindfulness", "Checking Health", "Tracking Pills", "Sorting Rehab",

    // Hobbies and Interests (600+ topics in full list)
    "Running Hobbies", "Planning Garden Stuff", "Collecting Recipes", "Planning Trips", "Running Book Clubs",
    "Setting Game Nights", "Building Models", "Painting Stuff", "Knitting Projects", "Doing Woodwork",
    "Fixing Cars", "Planning Fishing", "Hiking Trips", "Camping Plans", "Watching Birds", "Collecting Stamps", "Grabbing Coins",

    // Technology and Innovation (600+ topics in full list)
    "Playing with AI", "Doing Machine Learning", "Building Blockchain", "Managing IoT", "Setting Up Smart Homes",
    "Making AR Apps", "Creating VR", "Digging into Quantum", "Building Bots", "Boosting Security",
    "Moving to Cloud", "Analyzing Data", "Hooking Up APIs", "Prototyping Apps", "Testing Hardware", "Brainstorming Startups", "Running Hackathons",

    // Community and Social Projects (600+ topics in full list)
    "Bringing People Together", "Running Volunteers", "Managing Giving", "Planning Green Projects", "Cleaning Up Locally",
    "Raising Cash", "Setting Up Watch Groups", "Mentoring Kids", "Helping Seniors", "Supporting Homeless",
    "Running Food Drives", "Teaching Outreach", "Spreading Health Info", "Saving Animals", "Growing Community Gardens",
    "Planning Safety", "Saving Culture", "Pushing Justice"
]

const USER_POOL = [
    {_id: 'u101', fullname: 'Abi Abambi', imgUrl: 'roi.png'},
    {_id: 'u102', fullname: 'Josh Ga',    imgUrl: 'roi.png'},
    {_id: 'u103', fullname: 'Nina X',     imgUrl: 'roi.png'},
    {_id: 'u104', fullname: 'Megan X',    imgUrl: ''},
    {_id: 'u105', fullname: 'Sam L',      imgUrl: ''},
    {_id: 'u106', fullname: 'Oliver Z',   imgUrl: ''}
]

const allImgs = ["01003703-be60-40c1-b151-10c0a26e852e.jpg", "32735c6d-8562-4a57-a8d8-23ee1c578889.jpg", "5480023e-a03d-456b-8959-d7c4aaf1eac9.jpg", "80cd1878-c671-4b6e-882e-eb63a3dde439.jpg", "a4cb48cf-01f2-495e-a74d-3c1ba8a52f4d.jpg", "ddb0b59f-c798-45d7-ac1f-a2f9120b07bb.jpg", "01041c3a-4128-4f84-9072-feb575883efa.jpg", "32ef8c64-1f0d-44b0-8694-b5ac4efcbe3b.jpg", "554cec01-fcea-4561-a833-bede5151e305.jpg", "826830d1-0dc7-4caa-a3ea-244a3328761b.jpg", "a7076a10-91cd-4a45-81d9-1523fd81befc.jpg", "df185262-dcee-4f92-8780-a324cff2f0ad.jpg", "019e9d85-c9ac-42fd-a27b-e36fca7ac6ee.jpg", "33816a98-8be7-4d31-bffe-fd46bef6a62e.jpg", "56dea029-a440-46a7-b1d4-f7398a4183e3.jpg", "8494c3db-b537-4e49-80fd-d4b482a76420.jpg", "a78254cb-e7bd-4a4b-b5f4-41c3bd5028a2.jpg", "e16d94b8-0396-416d-86b0-bcca41bb72da.jpg", "061d63d4-91ff-474b-9e64-fff2dadeaea4.jpg", "33fbdae2-e3dc-4ae5-a385-f18d15f9204d.jpg", "574ab23b-8b01-47b8-a1f3-ecacb23b67eb.jpg", "86e0780b-afe3-4843-9116-b071c9620e90.jpg", "a9e71cd9-1c34-4fba-b0b7-d21d5b600143.jpg", "e337ff26-f694-400d-9fc5-7ae858fe9e37.jpg", "078c780a-6d0e-4807-89c2-485ddcaa90df.jpg", "34495b0c-fed0-48c3-a253-cf034f773a79.jpg", "5830f026-27ba-4bdc-8437-c90c818984ba.jpg", "875d01d4-62f6-4fc0-b160-7b981701a0ce.jpg", "ac5c4fab-e18b-4a5f-91bc-2cd9aa844361.jpg", "e3912742-07e9-4399-a205-3db11f010278.jpg", "0831db99-4a37-45f6-94b3-05b95a07795b.jpg", "35128f02-b700-4886-ac11-1bfb6dcf1c3b.jpg", "58c0fc8a-dc13-449b-8565-265379c78803.jpg", "88520ef6-eb64-4d1e-b03b-56554c5a6391.jpg", "b03bd233-7313-457c-ad34-9b2835cd30f1.jpg", "e6ac137a-19d9-4665-9306-f39bd9979246.jpg", "0872983e-3fff-4b7b-b9a0-a990aff86c9d.jpg", "3633bf64-5769-4cfa-bf65-24d9319f84fa.jpg", "596dbff5-0aee-49ae-a8da-8013bbb15271.jpg", "88f73c06-18ea-4227-b4af-ab5b8f893a25.jpg", "b31f8833-0d78-40ef-98bf-70757fbe60a4.jpg", "e8739704-e108-42cd-8ce9-db82d8abeecc.jpg", "08af386a-9bce-4394-8c62-81a84f40a3af.jpg", "36db902f-7430-4cc8-a620-d9aa79167a6b.jpg", "5c93346d-22e5-4cfa-914d-d5cf2add9a1d.jpg", "8ac1f005-ef34-4a29-bf0d-a0eb33e7eecd.jpg", "b4951272-26f9-447b-9da0-e80d1f25c507.jpg", "ed0a60c1-1631-4086-87cf-2508bc936a79.jpg", "0ecd509e-2b30-4eb9-b45e-76f13bbe9bfa.jpg", "38056d10-0f0b-40e5-9242-865df3d352f0.jpg", "5fa54252-8f96-4bbe-9e00-0828b4230378.jpg", "8b17f7e3-7dc6-4b82-8e51-6ece15781d99.jpg", "b6b6f563-6cfd-4388-81b4-7efd864f0c73.jpg", "ed1510eb-cf80-46f6-9d7b-40ce2af4ec56.jpg", "10009400-6771-4678-bace-ecf34252ae70.jpg", "39057bae-aad1-4880-b872-ce0b1b5938e4.jpg", "5fb0902e-85ba-48e4-8335-7d7f3538c1a1.jpg", "8b53fc8a-c05f-4971-bc49-f9b41d3f8b98.jpg", "b6f34e51-5c0a-46bc-8eb0-b472a52c12b0.jpg", "ed1f5d35-d7de-4db2-99d1-6977a084f8b2.jpg", "10884029-2141-4295-a8f1-3c9c63368b95.jpg", "39fa19ed-1646-4a06-a5f8-1ffe761282e8.jpg", "5fbaaecb-b7cb-41be-9f1a-7636745a6f0d.jpg", "8b612076-a125-49b0-bf54-9ede47bb4ab2.jpg", "b8b2147a-4672-4335-91f8-875cf4a094f9.jpg", "eda91369-5d70-43b2-b29d-03e1fdc14dbd.jpg", "108e8723-2772-415a-be1e-98ade063f6b1.jpg", "3a0c5119-739c-4c49-96f4-00e2d2e697cc.jpg", "5fe8c18c-bcd7-41e4-b5f4-a4245872fcf4.jpg", "8eaa6cce-2b7d-4a2f-8c96-ad11289e1cb6.jpg", "ba25285a-9241-4559-a3f6-41777a27ce77.jpg", "edb36f31-2379-4ce6-be7d-63dd67f260cf.jpg", "12d43903-7490-49f1-858e-da12ec561fc5.jpg", "3bc024fd-1a20-4750-bf64-877a78ac5875.jpg", "625d33e5-249a-4533-a6de-73ca0996c0e5.jpg", "9174eb19-eb00-4f18-bcc6-8e4908af6aa3.jpg", "c155e63b-2b46-4102-b7cd-125a562b9f01.jpg", "ee39b7bf-c84c-4f9b-a6fe-245c845b2fed.jpg", "12d6491b-a0db-49f9-8ed8-12460bb73f00.jpg", "3c611b87-e3cd-4414-90a9-50c445c42520.jpg", "640c503d-4434-4011-bb63-e52f4f2ca6d0.jpg", "91a655ce-c91a-4243-996d-1693fcd20b4e.jpg", "c2365302-fc2f-4b69-9d24-6dcfd8395976.jpg", "ef797c08-bdb5-4db3-8b81-2d8a70898c2a.jpg", "13b95de3-6dda-41f0-83cf-6f861b3ffb65.jpg", "3d4470d6-3213-4e44-9ec4-ddea7b2c2688.jpg", "645c3161-966f-4553-b3a7-ab26bb897a24.jpg", "91dc0072-c2a8-4565-8ad7-a7f54a0d58c7.jpg", "c28c1d41-b707-47c4-ad76-d4b255ed62c2.jpg", "f1ac4127-b7f2-4a06-b27f-5ebe9e038e5d.jpg", "144e2aed-dcb7-4510-8018-bf564a81b34b.jpg", "3d6c2c5a-2f61-4246-8235-57f96410c20b.jpg", "64ef227f-223b-4c62-8b0c-f169455ed79c.jpg", "92fbe43a-f167-41cb-9542-826a302502e4.jpg", "c2a05cd9-9528-4e39-b32c-3a85812b1b28.jpg", "f24ab613-424f-4816-9add-cc8f72480a1d.jpg", "16abf83d-954e-4b4b-9b2a-0238209327ba.jpg", "3d7fbc23-3dff-43c4-8a9e-597dc6f12be8.jpg", "660eb384-e804-41a0-a6be-04cfdb29d904.jpg", "95c99efc-f444-4a7f-beb6-17747e1bac0a.jpg", "c55f8684-d820-4857-bbc2-d3b4145cc562.jpg", "f29f34b6-faf4-4880-b320-8b7c8e5c8a5b.jpg", "179d2927-bd56-44e1-babf-5c12a2235f6e.jpg", "3dfb8af6-2556-4211-9bcf-94425b3ac3a7.jpg", "666bb8fe-c88f-49da-83a9-1fe0f5c91eb9.jpg", "977f2830-4b39-4006-860b-fa3231f271e1.jpg", "c8020170-1402-412d-b8ae-2a998f2eae59.jpg", "f5fc061a-2e83-4c55-8810-eaef8e4a10ad.jpg", "18e7de16-e629-4f05-a81f-d3ee4695ac19.jpg", "400fcd6d-48fe-460a-88e8-22d93e785bfb.jpg", "689690d6-90f7-4627-9a59-894b36c31505.jpg", "98986afc-61cb-4907-bdae-22c65d27dafd.jpg", "c836557a-cb7c-4683-a6a0-cce06cf69fd7.jpg", "f6b50b5a-6479-42c3-94b6-8343cf5c0b20.jpg", "1d8ae529-f60b-4d19-bfe3-f1edb57c9107.jpg", "41354b06-ad32-46f6-ba1a-148580f6f866.jpg", "69bac244-3143-4d0c-b319-42b43c050cb9.jpg", "99bfc371-04cb-4d5b-ba8f-ad67103fdbbc.jpg", "c865a552-d336-4215-8c0c-b2ae9f4beec5.jpg", "f76b195f-0e46-4468-8ffa-38d380429fbe.jpg", "1f615a8f-abef-4e24-9e57-ddf2112f2004.jpg", "41c055fc-550e-4e65-b6ba-5e78937858f9.jpg", "69c55c37-3283-4587-8e42-d576655f586f.jpg", "99d989db-0662-4307-bf1f-a8955d96a1aa.jpg", "c8f3f5a5-e4dd-4a3c-8cf3-c292da493413.jpg", "f7b23393-1b58-4c46-9c46-316ee9015fb1.jpg", "1f7c560e-0e8a-46ad-a7e5-dca9d33881a0.jpg", "423961a7-8134-47e7-8ae0-bfbe5e5baa03.jpg", "6bd4c970-5c49-4785-95e7-8d3c660629ca.jpg", "9a4d3b98-7489-4dd7-86d7-090d2c943c77.jpg", "c932ac80-7622-4d63-9611-d5d4d7153c0c.jpg", "f8c1a593-d375-4c21-aa3e-4f75e8bf40b0.jpg", "224bc9e6-6745-4d7c-9c05-3633ebc48f02.jpg", "42c3e5eb-3bf2-4d71-a12e-e150e33225be.jpg", "6ca21177-e525-4734-98d1-ec3da0271b94.jpg", "9a87130c-ec94-49fa-990e-63b32ba93ffd.jpg", "c9f87e63-bc9d-43e2-bd71-d1a5850f5cac.jpg", "f98294ea-42f9-4bcf-9949-6c887673ef37.jpg", "228e0fa2-875a-42e3-bff7-587d259d6cc2.jpg", "42cb76d9-6f70-4737-bef4-d1fc8177e8ff.jpg", "6d1964a6-f916-4dbd-bb76-ddfdbf913aa7.jpg", "9b6a3f64-0978-4923-a61e-d1407af9d538.jpg", "cac72229-06fc-4b48-a19b-de57a4e3631e.jpg", "f99035ac-ec4e-4124-9498-2810238835bb.jpg", "238d234d-d117-459f-9619-145f99483fb5.jpg", "4612c14c-ae23-4fe6-867f-8f893efa2f7b.jpg", "757157fa-b17f-4fd5-a997-1918c3befecf.jpg", "9ca7f809-a672-4bf1-a3b5-cc2fed953aa3.jpg", "cbcc7033-01e7-48b3-99ec-bd0a739a3cbe.jpg", "fa7cf99a-145f-408a-bd77-2d6349dae0bc.jpg", "24f9a6ae-4491-44d9-9684-abca43dc7cec.jpg", "472289e4-bd4c-4ee8-b675-ef92f14dbbb1.jpg", "78a5403f-4833-4ed2-87a8-acf08778e7b6.jpg", "9dd48de2-98de-4874-8f56-cc6e6fb97a36.jpg", "ced2113e-2607-41e1-8a01-b8bf809ef3a6.jpg", "fa84d1ef-7554-495e-99ee-ea0571c9522a.jpg", "25717add-d2f8-417b-b21c-654dfd59ea13.jpg", "4917c69e-50b5-41e4-9f18-f0fb59d180ea.jpg", "7a082264-c21d-4977-bb71-87bd516e959c.jpg", "9e9668ac-2bd3-4e8a-b367-ed088a41d521.jpg", "cf4c53d9-28a8-4ce8-bf13-47cf8bf1f282.jpg", "fb2c1d94-fe24-4d76-bd36-26796a01548e.jpg", "2596530f-bd0c-43ca-aca8-88b2ada2985a.jpg", "499220bd-cf3d-4a4c-8187-1fa8df1a4b17.jpg", "7b2d6696-fafb-4d0a-8570-370f4f735e41.jpg", "9f2176a1-d878-4c60-ac1f-5157bbe02c54.jpg", "d1188a02-ac1e-4e1d-a504-96bb73054d79.jpg", "fc3ac55b-9c8e-481d-be63-714d78bca579.jpg", "28ad2fe1-1b59-4a33-ab79-0c114b90c327.jpg", "4a6c0703-db64-4dc3-925c-b17e4976bae6.jpg", "7c300b78-e023-41a9-b391-299f72f9ed8a.jpg", "a02ee1bd-8b41-4dbc-968c-e827f3478777.jpg", "d3b5e765-b4e9-46bc-b3c6-71b1e50c191a.jpg", "fe4a18e1-f169-4c15-966c-79faeeec1600.jpg", "2a4e391e-022b-4b72-b8f4-b173194e5c10.jpg", "4cdca627-d9c5-4e47-bdeb-11ab74818440.jpg", "7cc3bd2a-175b-41ac-83c8-998e26b9cb75.jpg", "a04bd4d4-80a5-4e26-8f06-f8c2e60c3563.jpg", "d4791c7f-1a58-47bd-8ec7-ff4d3ad851de.jpg", "fea95684-880c-4124-8dc8-bffc92409fd4.jpg", "2d108291-4e70-469d-9073-955786865ab7.jpg", "4ed1c920-b683-4cfc-a475-b1e4479d9a84.jpg", "7d15fe1a-ce1d-411e-9e0c-b10b1df03132.jpg", "a223d3ad-0886-48e7-90c9-a91d6874c8b1.jpg", "d5435939-751a-44c5-bdc3-498a9bc1f9a3.jpg", "2deb4dbe-1bcb-4351-a361-0540a2a8f20f.jpg", "50d8dada-82c6-4eee-bbd6-f368d518968e.jpg", "7df04b54-b021-4489-b35a-d41d491e232e.jpg", "a282e6c3-934a-4a0e-bfcf-7dcb58646162.jpg", "d7521c56-4fbb-4bf2-a119-3458ea99985d.jpg", "300334a1-e0d2-4ea5-8d9a-6c427555b75e.jpg", "5245098d-33f3-4152-990a-daba45694b75.jpg", "7e55a2bc-009f-4f5e-9088-9c8e3bdeba19.jpg", "a30cb0f4-7b7f-411a-808c-215357684eae.jpg", "d75a3062-9335-4f4c-ad15-f8db3d76f583.jpg", "30a28431-e95b-41e9-87ce-746a9671f0d1.jpg", "52a48962-78ed-490b-bebc-269f9b524526.jpg", "7f79841a-d119-40f5-8ba6-97c36815997b.jpg", "a34f1211-92bf-4384-b754-9102890c9805.jpg", "d9720755-3891-4dc6-9d7b-0c4da384458d.jpg"]
const firstNames = [
    'Aaron', 'Abigail', 'Adam', 'Aisha', 'Alan', 'Alex', 'Alice', 'Amelia', 'Andrew', 'Anna',
    'Bella', 'Benjamin', 'Blake', 'Brian', 'Caitlin', 'Carlos', 'Charlotte', 'Chloe', 'Chris', 'Clara',
    'Daniel', 'David', 'Diana', 'Diego', 'Dylan', 'Elena', 'Elijah', 'Emily', 'Ethan', 'Eva',
    'Fiona', 'Frank', 'Gabriel', 'Grace', 'Hannah', 'Henry', 'Holly', 'Ian', 'Isaac', 'Isabella',
    'Jack', 'Jacob', 'Jade', 'James', 'Jane', 'Jason', 'Jennifer', 'Jessica', 'John', 'Jonah',
    'Julia', 'Karen', 'Kate', 'Kevin', 'Kyle', 'Laura', 'Leo', 'Liam', 'Lily', 'Linda',
    'Lucas', 'Maria', 'Mason', 'Matthew', 'Mia', 'Michael', 'Natalie', 'Nathan', 'Nina', 'Noah',
    'Olivia', 'Oscar', 'Owen', 'Paige', 'Patrick', 'Paula', 'Peter', 'Quinn', 'Rachel', 'Rebecca',
    'Ryan', 'Sam', 'Sarah', 'Sean', 'Sophia', 'Steve', 'Taylor', 'Thomas', 'Tina', 'Victor',
    'Wendy', 'William', 'Xander', 'Yara', 'Yvonne', 'Zach', 'Zoe'
]

const lastNames = [
    'Adams', 'Allen', 'Alvarez', 'Anderson', 'Bailey', 'Baker', 'Barnes', 'Bell', 'Bennett', 'Brooks',
    'Brown', 'Campbell', 'Carter', 'Castillo', 'Chavez', 'Clark', 'Collins', 'Cook', 'Cooper', 'Cox',
    'Cruz', 'Davis', 'Diaz', 'Edwards', 'Ellis', 'Evans', 'Fernandez', 'Fisher', 'Flores', 'Ford',
    'Garcia', 'Gomez', 'Gonzalez', 'Gray', 'Green', 'Hall', 'Harris', 'Hernandez', 'Hill', 'Howard',
    'Hughes', 'Jackson', 'James', 'Jenkins', 'Johnson', 'Jones', 'Kim', 'King', 'Lee', 'Lewis',
    'Lopez', 'Martin', 'Martinez', 'Miller', 'Mitchell', 'Moore', 'Morales', 'Morgan', 'Murphy', 'Nelson',
    'Nguyen', 'Ortiz', 'Parker', 'Patel', 'Perez', 'Peterson', 'Phillips', 'Powell', 'Price', 'Ramirez',
    'Reed', 'Reyes', 'Rivera', 'Roberts', 'Robinson', 'Rodriguez', 'Rogers', 'Ross', 'Ruiz', 'Sanchez',
    'Sanders', 'Scott', 'Smith', 'Stewart', 'Sullivan', 'Taylor', 'Thomas', 'Thompson', 'Torres', 'Turner',
    'Walker', 'Ward', 'Watson', 'White', 'Williams', 'Wilson', 'Wood', 'Wright', 'Yang', 'Young'
]

let gUsersPool = []
for (let i = 0; i < 20; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const fullName = `${firstName} ${lastName}`
    let imgUrl = 'generated_faces/' + allImgs[Math.floor(Math.random() * allImgs.length)]
    if (Math.random() < 0.5) imgUrl = null
    gUsersPool.push({
        _id: `u${i + 1}`,
        fullname: fullName,
        imgUrl: imgUrl
    });
}

console.log(gUsersPool)

GPT_USER_POOL = gUsersPool

async function initUserPool() {
    if (GPT_USER_POOL.length) return

    const fallbackPool = [
        { _id: 'u101', fullname: 'Ava Placeholder', imgUrl: '' },
        { _id: 'u102', fullname: 'Ben Placeholder', imgUrl: '' },
        { _id: 'u103', fullname: 'Cara Placeholder', imgUrl: '' },
    ]

    const prompt = `Generate an array of 5 to 8 distinct "users" for a collaborative project tool.
Each user = {
  "_id": "unique string id",
  "fullname": "some realistic or creative full name",
  "imgUrl": "some valid image URL or empty"
}
Return only valid JSON. e.g.
[
  {"_id":"u111", "fullname":"Alice Wonderland", "imgUrl":"https://..."},
  ...
]`

    let text = await generateText(prompt, 1.0)
    let users = []
    try {
        users = safeJsonParse(text, JSON.stringify(fallbackPool))
    } catch (err) {
        console.error('Failed to parse GPT user pool. Using fallback.', err)
        users = fallbackPool
    }

    if (!Array.isArray(users) || !users.length) {
        users = fallbackPool
    }

    if (users.length < 5) {
        while (users.length < 5) {
            users.push({
                _id: 'u_' + random.id(),
                fullname: 'FallbackUser ' + random.id(),
                imgUrl: '',
            })
        }
    }
    if (users.length > 8) users = users.slice(0, 8)

    for (let u of users) {
        if (!u._id || !u.fullname) {
            u._id = 'u_' + random.id()
            if (!u.fullname) u.fullname = 'FallbackUser ' + random.id()
        }
        if (typeof u.imgUrl !== 'string') {
            u.imgUrl = ''
        }
    }

    GPT_USER_POOL = users
}

export function getUserPool() {
    return GPT_USER_POOL
}

export function getColorFromBackgroundColor(bg) {
    switch (bg) {
        case '#baf3db': return '#164b35'
        case '#f8e6a0': return '#4f3a0e'
        case '#fedec8': return '#6e3b0d'
        case '#ffd5d2': return '#6e0d0d'
        case '#dfd8fd': return '#4f3a0e'
        case '#cce0ff': return '#0d2e6e'
        case '#c6edfb': return '#0d3a4f'
        case '#fdd0ec': return '#6e0d3a'
        case '#f1f2f4': return '#3a3a3a'
        default: return '#3a3a3a'
    }
}

function getRandomColor() {
    const trelloColors = [
        '#baf3db',
        '#f8e6a0',
        '#fedec8',
        '#ffd5d2',
        '#dfd8fd',
        '#cce0ff',
        '#c6edfb',
        '#fdd0ec',
        '#f1f2f4',
    ]
    return random.choice(trelloColors)
}

function getRandomColorLabels() {
    const colors = ['#9f8fef', '#f87168', '#fea362', '#f5cd47', '#4bce97', '#579dff']
    return random.choice(colors)
}

function getRandomLocation() {
    const locations = [
        { name: 'Tel Aviv-Yafo', lat: 32.109333, lng: 34.855499, zoom: 11 },
        { name: 'New York City', lat: 40.7128, lng: -74.006, zoom: 12 },
        { name: 'Paris', lat: 48.8566, lng: 2.3522, zoom: 12 },
        { name: 'Tokyo', lat: 35.6895, lng: 139.6917, zoom: 12 },
        { name: 'London', lat: 51.5074, lng: -0.1278, zoom: 12 },
        { name: 'Sydney', lat: -33.8688, lng: 151.2093, zoom: 12 },
    ]
    return random.choice(locations)
}

async function generateLabels(boardTitle) {
    const prompt = `
Board Title: "${boardTitle}"
Generate an array of 5 short labels for a project mgmt board. 
Some examples: "Grocery", "Weekend Plans", "Work Tasks".
Return JSON:
[
  {"id":"some-id","title":"...","color":"(placeholder)"},
  ...
]
We only care about 'id', 'title', 'color'.
Return valid JSON only.
`
    const fallback = JSON.stringify([
        { id: 'lbl1', title: 'Tasks', color: '#9f8fef' },
        { id: 'lbl2', title: 'Personal', color: '#f87168' },
        { id: 'lbl3', title: 'Work', color: '#fea362' },
        { id: 'lbl4', title: 'Errands', color: '#f5cd47' },
        { id: 'lbl5', title: 'Household', color: '#4bce97' },
    ])

    const text = await generateText(prompt, 1.0, fallback)
    let rawLabels = safeJsonParse(text, fallback)
    if (!Array.isArray(rawLabels) || !rawLabels.length) {
        rawLabels = safeJsonParse(fallback)
    }

    const uniqueColors = new Set()
    return rawLabels.slice(0, 5).map((lbl) => {
        if (!lbl.id) lbl.id = 'lbl_' + random.id()
        if (!lbl.title) lbl.title = 'Label ' + random.id()
        let col = getRandomColorLabels()
        while (uniqueColors.has(col) && uniqueColors.size < 6) {
            col = getRandomColorLabels()
        }
        uniqueColors.add(col)
        lbl.color = col
        return lbl
    })
}

const BADGE_COLOR_MAP = {
    risk: '#fdddc7',
    approved: '#f8e6a0',
    priority: '#ffe2bd',
    now: '#ffc0cb',
}
const BADGE_TEXT_COLOR_MAP = {
    risk: '#6e3b0d',
    approved: '#4f3a0e',
    priority: '#6e3b0d',
    now: '#6e0d3a',
}
const BADGE_TYPE_ARRAY = ['risk', 'approved', 'priority', 'now']

async function generateBadges(boardTitle, groupTitle) {
    const prompt = `
For the group "${groupTitle}" in the board "${boardTitle}", 
Generate an array of 10 "badge" objects with selectble categories.
Example:
[
  {"categ":"Workload", "badgeOptions": ["Light", "Heavy", "Medium"], "text":"Heavy"},
  {"categ":"NeedsApproval", "badgeOptions": ["Pending", "Need Approval", "Rejected"], "text":"Pending"},
  ...
]
Return strictly valid JSON only.
`
    const fallback = '[{"categ":"NeedsApproval","text":"Pending"},{"categ":"HighRisk","text":"Proceed Carefully"}]'

    const text = await generateText(prompt, 1.0, fallback)
    let rawBadges = safeJsonParse(text, fallback)
    if (!Array.isArray(rawBadges)) {
        rawBadges = safeJsonParse(fallback)
    }

    return rawBadges.map((b) => {
        const randomType = random.choice(BADGE_TYPE_ARRAY)
        return {
            id: 'badg_' + random.id(),
            categ: b.categ || 'General',
            color: BADGE_COLOR_MAP[randomType] || '#ccc',
            textColor: BADGE_TEXT_COLOR_MAP[randomType] || '#000',
            badgeOptions: b.badgeOptions || [],
            chosenOption: b.text || 'Note',
        }
    })
}

async function generateTask(boardTitle, groupTitle) {
    const fallbackResp = `Title: Kitchen Chores; Description: Clean the fridge and wipe the counters.`
    const prompt = `
For the group "${groupTitle}" in the board "${boardTitle}", 
create a short but realistic task. Format EXACTLY as:
"Title: XYZ; Description: ABC"
Return no extra text or code blocks, just that line.
`
    const response = await generateText(prompt, 1.0, fallbackResp)
    let taskTitle = 'RandomTask'
    let taskDescription = 'No desc from GPT'
    const match = response.match(/Title:\s*(.+?);\s*Description:\s*(.+)/)
    if (match) {
        taskTitle = match[1].trim()
        taskDescription = match[2].trim()
    }

    const badges = await generateBadges(boardTitle, groupTitle)

    return {
        id: random.id(),
        title: taskTitle,
        status: random.choice(STATUS_OPTIONS),
        priority: random.choice(PRIORITY_OPTIONS),
        dueDate: random.date('2024-01-01', '2026-12-31').toISOString(),
        createdAt: random.date('2024-01-01', '2026-12-31'),
        description: taskDescription,
        checklists: await generateChecklists(boardTitle, groupTitle),
        members: random.sample(GPT_USER_POOL, random.randint(0, GPT_USER_POOL.length)),
        style: await generateTaskStyle(),
        badges,
        attachments: getRandomAttachments(),
        activity: generateTaskActivities(taskTitle),
        isUserWatching: random.choice([true, false]),
        labels: [],
        location: random.choice([null, null, null, getRandomLocation()]),
    }
}

function getRandomAttachments() {
    const cnt = random.randint(0, 2)
    return Array.from({ length: cnt }, () => ({
        path: `file-${random.randint(1, 999)}.png`,
        date: Date.now() - random.randint(0, 1_000_000_000),
        text: random.choice([
            'Photo proof!',
            'Attached doc',
            'Uploaded file',
            '',
        ]),
    }))
}

async function generateChecklists(boardTitle, groupTitle) {
    const fallback = JSON.stringify([
        {
            id: 'cl_fallback',
            title: 'Fallback Checklist',
            progress: 0,
            todos: [
                { id: 'todo1', title: 'Fallback item', isDone: false },
                { id: 'todo2', title: 'Another fallback', isDone: true },
            ],
        },
    ])
    const prompt = `
For the group "${groupTitle}" in the board "${boardTitle}", 
Generate an array of 3 short "todo" items related to the group title and board title. Return strictly JSON:
[
  {"title":"something short","isDone": true/false},
  ...
]
`

    const text = await generateText(prompt, 1.0, fallback)
    let todosArray = safeJsonParse(text, '[]')
    if (!Array.isArray(todosArray)) {
        console.warn('GPT todos not an array, using fallback.')
        todosArray = safeJsonParse(fallback)[0].todos
    }
    if (!todosArray.length) {
        todosArray = safeJsonParse(fallback)[0].todos
    }

    const cCount = random.randint(0, 2)
    const checklists = []
    for (let i = 0; i < cCount; i++) {
        const tCount = 1 + Math.floor(Math.random() * todosArray.length)
        const partialTodos = todosArray.slice(0, tCount).map((t) => ({
            id: 'todo_' + random.id(),
            title: t.title || 'UntitledTodo',
            isDone: typeof t.isDone === 'boolean' ? t.isDone : false,
        }))
        checklists.push({
            id: 'cl_' + random.id(),
            title: 'Checklist ' + random.id().slice(0, 4),
            progress: random.randint(0, 100),
            todos: partialTodos,
        })
    }
    return checklists
}

async function generateTaskStyle() {
    const styleType = random.randint(0, 2)
    if (styleType === 0) {
        return {
            backgroundColor: getRandomColorLabels(),
            coverSize: random.choice(['small', 'large']),
        }
    } else if (styleType === 1) {
        const images = [
            null,
            null,
            `https://picsum.photos/600/300?random=${random.randint(1, 1000)}`,
            'cover-img.png',
            'cover-img-1.png',
            'cover-img-2.png',
            'cover-img-3.png',
        ]
        return {
            backgroundImage: random.choice(images),
            coverSize: random.choice(['small', 'large']),
        }
    } else {
        return {}
    }
}

function generateTaskActivities(taskTitle) {
    const activityTypes = [
        `Commented: "Looks good!"`,
        `Updated title to: ${taskTitle}`,
        `Attached a new file`,
        `Status changed to ${random.choice(STATUS_OPTIONS)}`,
    ]
    const count = random.randint(1, 3)
    return Array.from({ length: count }, () => {
        const byMember = random.choice(GPT_USER_POOL) || {
            _id: 'fallback',
            fullname: 'Fallback user',
            imgUrl: '',
        }
        return {
            id: random.id(),
            title: random.choice(activityTypes),
            createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl,
            },
        }
    })
}

async function generateGroups(boardTitle) {
    const fallback = `Home; Work; Personal`
    const groupCount = random.randint(5, 8)
    const prompt = `
Board: "${boardTitle}"
Generate ${groupCount} short sub-topics/group-titles/task-lists about the topic of this board and everyday life, work or task categories realted to this board topic, separated by semicolons.
Example: "Groceries; Home Maintenance; Work Projects; Financial Plan; Everyday; Project General Goals; Wishlist"
No code blocks, just semicolons.
`
    const text = await generateText(prompt, 1.0, fallback)
    let groupTitles = text.split(';').map((t) => t.trim()).filter(Boolean)
    if (groupTitles.length < groupCount) {
        while (groupTitles.length < groupCount) {
            groupTitles.push('Group ' + random.id().slice(0, 3))
        }
    }
    groupTitles = groupTitles.slice(0, groupCount)

    const groups = []
    for (let title of groupTitles) {
        const taskCount = random.randint(3, 6)
        const tasks = []
        for (let i = 0; i < taskCount; i++) {
            tasks.push(await generateTask(boardTitle, title))
        }
        const backgroundColor = getRandomColor()
        groups.push({
            id: random.id(),
            title,
            archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
            tasks,
            style: {
                backgroundColor,
                color: getColorFromBackgroundColor(backgroundColor),
            },
            watched: random.choice([true, false]),
            isMinimaized: random.choice([true, false]),
        })
    }
    return groups
}

function getRandomBoardActivities(board) {
    const count = random.randint(2, 5)
    return Array.from({ length: count }, () => {
        const group = random.choice(board.groups)
        const task = random.choice(group.tasks)
        const activityType = random.choice(['added', 'moved', 'updated'])
        let title
        if (activityType === 'added') {
            title = `Added task '${task.title}' to group '${group.title}'`
        } else if (activityType === 'moved') {
            const otherGroup = random.choice(board.groups.filter((g) => g.id !== group.id))
            title = `Moved task '${task.title}' from '${otherGroup?.title}' to '${group.title}'`
        } else {
            title = `Updated status of task '${task.title}' to '${random.choice(STATUS_OPTIONS)}'`
        }
        const byMember = random.choice(GPT_USER_POOL) || {
            _id: 'fallback',
            fullname: 'Fallback user',
            imgUrl: '',
        }
        return {
            id: random.id(),
            title,
            createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl,
            },
            group: { id: group.id, title: group.title },
            task: { id: task.id, title: task.title },
        }
    })
}

export async function getRandomBoardAI() {

    console.log(' ---- GENERATING AI BOARD -----')

    console.log('Progress: 1')

    await initUserPool()

//     const topicsPrompt = `
// Generate a list of 100 random topics that could be the topics of a Trello tasks board.
// Return the list as a JSON array of strings.
// Return strictly JSON:
// [
//   {"topic": the_topic},
//   ...
// ]
// `
//
//     const fallbackTopics = [
//         "Project Management", "Marketing Campaign", "Product Launch", "Event Planning", "Content Creation",
//         "Software Development", "Customer Support", "Sales Strategy", "Financial Planning", "Human Resources"
//     ]
//     const topics = await generateText(topicsPrompt, 1.0, JSON.stringify(fallbackTopics))
//
//     console.log('Topic orig:', topics)
//     const parsedTopics = safeJsonParse(topics, JSON.stringify(fallbackTopics))
//     const randomTopic = parsedTopics[Math.floor(Math.random() * parsedTopics.length)]['topic']
//     console.log('Topic:', randomTopic)


    const randomTopic = random.choice(userFriendlyTopics)

    const boardTitlePrompt = `
Generate a single realistic board name for a project management system based on the topic "${randomTopic}".
Return just the name, no extra text.
`
    const fallbackBoardTitle = 'Generic Board'
    const boardTitle = await generateText(boardTitlePrompt, 1.0, fallbackBoardTitle)


    console.log('Progress: 2')

    const groups = await generateGroups(boardTitle)

    console.log('Progress: 3')
    const labels = await generateLabels(boardTitle)

    console.log('Progress: 4')
    for (const group of groups) {
        for (const task of group.tasks) {
            const labelSubset = random.sample(labels.map((lbl) => lbl.id), random.randint(0, labels.length))
            task.labelIds = labelSubset
            task.labels = labels
        }
    }

    console.log('Progress: 5')

    const createdBy = random.choice(GPT_USER_POOL) || {
        _id: 'u_fallback',
        fullname: 'Unknown user',
        imgUrl: '',
    }
    const boardId = random.id(random.randint(4, 10))
    const board = {
        id: boardId,
        title: boardTitle,
        isStarred: random.choice([true, false]),
        archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
        createdBy: {
            _id: createdBy._id,
            fullname: createdBy.fullname,
            imgUrl: createdBy.imgUrl,
        },
        style: {
            backgroundImage: `https://picsum.photos/600/300?random=${random.randint(1, 1000)}`,
        },
        labels,
        members: GPT_USER_POOL,
        groups,
        activities: [],
        cmpsOrder: random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length)),
    }

    console.log('Progress: 6')

    board.activities = getRandomBoardActivities(board)

    console.log('Progress: 7')

    console.log('Final Board from GPT:', board)

    board.generator = 'getRandomBoardAI'
    return board
}
