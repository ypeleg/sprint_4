
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
    "Planning Safety", "Saving Culture", "Pushing Justice", "Running Peace Projects", "Building Bridges",

    // Business and Management (385 topics)
    "Developing a Business Plan", "Setting Long-term Goals", "Analyzing Market Trends", "Competitor Analysis", "SWOT Analysis",
    "PESTLE Analysis", "OKR Setting", "KPI Tracking", "Scenario Planning", "Risk Assessment", "Streamlining Processes",
    "Inventory Management", "Supply Chain Optimization", "Quality Control", "Lean Management", "Six Sigma Implementation",
    "Project Management", "Agile Methodology", "Kanban System", "Automation Initiatives", "Building Leadership Skills",
    "Setting Up Team Bonding", "Sorting Out Workplace Drama", "Shaking Up the Company Structure", "Planning a Big Merger",
    "Running My Franchises", "Making Processes Smoother", "Keeping Stakeholders Happy", "Dealing with Crises",
    "Setting Up Company Rules", "Keeping Things Ethical", "Managing Knowledge Sharing", "Going Digital",
    "Improving Customer Experience", "Celebrating Team Success", "Boosting Office Productivity", "Managing My Time Better",
    "Sparking Innovation", "Drafting the Yearly Budget", "Reviewing Quarterly Results", "Evaluating Team Performance",
    "Setting Sales Targets", "Planning Product Roadmaps", "Entering New Markets", "Running Compliance Checks",
    "Conducting Internal Audits", "Handling External Audits", "Monitoring Finances", "Optimizing Operations",
    "Auditing IT Systems", "Ensuring Quality Standards", "Maintaining Safety Protocols", "Implementing Green Practices",
    "Training on Ethics", "Preventing Corruption", "Setting Up Whistleblower Systems", "Promoting Social Responsibility",
    "Tracking Sustainability Goals", "Monitoring ESG Metrics", "Fostering Diversity", "Ensuring Workplace Safety",
    "Supporting Team Health", "Running Wellness Programs", "Promoting Mental Wellbeing", "Balancing Work and Life",
    "Offering Flexible Work Options", "Managing Remote Teams", "Coordinating Hybrid Work", "Designing Office Layouts",
    "Overseeing Facilities", "Tracking Equipment", "Managing Inventory", "Smoothing Supply Chains", "Handling Procurement",
    "Negotiating with Vendors", "Drafting Service Agreements", "Monitoring Performance Metrics", "Recruiting Talent",
    "Planning Succession", "Developing Leaders", "Gauging Team Morale", "Collecting Feedback", "Hosting Town Halls",
    "Running All-Hands Meetings", "Scheduling Team Check-ins", "Kicking Off Projects", "Closing Out Projects",
    "Learning from Failures", "Conducting Retrospectives", "Managing Agile Workflows", "Setting Up Scrum Teams",
    "Running Kanban Boards", "Applying Lean Principles", "Pursuing Six Sigma", "Maintaining Quality Standards",
    "Achieving ISO Certification", "Assessing CMMI Levels", "Implementing ITIL Practices", "Using COBIT Frameworks",
    "Adhering to NIST Standards", "Complying with GDPR", "Planning Disaster Recovery", "Reviewing Vendor Contracts",
    "Optimizing Resource Use", "Tracking Project Milestones", "Setting Up Mentorship Programs", "Running Training Sessions",
    "Evaluating Process Efficiency", "Building Cross-functional Teams", "Managing Change Initiatives", "Forecasting Growth",
    "Analyzing Operational Risks", "Setting Up Feedback Loops", "Planning Team Retreats", "Tracking Employee Engagement",
    "Reviewing Strategic Goals", "Managing Stakeholder Expectations", "Conducting Market Research", "Building Partnerships",
    "Tracking Industry Trends", "Planning Exit Strategies", "Reviewing Business Models", "Optimizing Workflows",
    "Running Cost-Benefit Analysis", "Planning Expansion", "Monitoring Cash Reserves", "Managing Intellectual Property",
    "Setting Up Innovation Labs", "Tracking Competitor Moves", "Planning Board Meetings", "Reviewing Corporate Governance",
    "Building Crisis Response Teams", "Tracking Regulatory Changes", "Planning Staff Rotations", "Optimizing Team Schedules",
    "Running Employee Surveys", "Setting Up Recognition Programs", "Planning Budget Cuts", "Tracking Profit Margins",
    "Reviewing Outsourcing Options", "Managing Freelancers", "Planning Office Moves", "Tracking Tech Upgrades",
    "Running Safety Drills", "Planning Energy Savings", "Tracking Carbon Footprint", "Setting Up Green Teams",
    "Monitoring Waste Reduction", "Planning Community Outreach", "Tracking CSR Initiatives", "Running Diversity Workshops",
    "Planning Health Campaigns", "Tracking Absenteeism", "Setting Up Remote Tools", "Managing Hybrid Meetings",
    "Planning Space Utilization", "Tracking Maintenance Schedules", "Managing Asset Lifecycles", "Optimizing Procurement",
    "Reviewing Vendor Performance", "Setting Up SLAs", "Tracking Talent Retention", "Planning Leadership Retreats",
    "Running Pulse Surveys", "Hosting Q&A Sessions", "Planning Project Kickoffs", "Reviewing Post-mortems",
    "Optimizing Agile Sprints", "Tracking Scrum Progress", "Running Lean Experiments", "Monitoring Quality Metrics",
    "Preparing for ISO Audits", "Tracking ITIL Adoption", "Reviewing COBIT Compliance", "Ensuring NIST Security",
    "Planning GDPR Training", "Running Risk Workshops", "Tracking Audit Findings", "Reviewing Safety Reports",
    "Planning Ethical Reviews", "Monitoring Whistleblower Reports", "Tracking ESG Progress", "Running Diversity Audits",
    "Planning Wellness Events", "Tracking Mental Health Support", "Reviewing Flex Work Policies", "Managing Remote Onboarding",
    "Planning Hybrid Schedules", "Tracking Facility Upgrades", "Reviewing Stock Levels", "Optimizing Supply Routes",
    "Negotiating Bulk Deals", "Tracking SLA Compliance", "Planning Talent Reviews", "Running Succession Drills",
    "Tracking Leadership Growth", "Reviewing Team Feedback", "Hosting Strategy Sessions", "Planning All-Hands Updates",
    "Scheduling Project Reviews", "Tracking Retrospective Actions", "Optimizing Scrum Ceremonies", "Running Kanban Reviews",
    "Planning Lean Rollouts", "Tracking Six Sigma Results", "Reviewing ISO Progress", "Monitoring CMMI Goals",
    "Tracking ITIL Metrics", "Reviewing COBIT Goals", "Ensuring NIST Compliance", "Planning GDPR Audits",
    "Tracking Risk Mitigation", "Reviewing Compliance Gaps", "Running Safety Audits", "Planning Ethics Training",
    "Monitoring Corruption Risks", "Tracking Whistleblower Trends", "Reviewing CSR Impact", "Planning Sustainability Reviews",
    "Tracking ESG Targets", "Running Diversity Training", "Planning Safety Upgrades", "Tracking Wellness Participation",
    "Reviewing Remote Work Tools", "Managing Hybrid Feedback", "Planning Office Redesigns", "Tracking Equipment Repairs",
    "Reviewing Inventory Turnover", "Optimizing Supply Chain Costs", "Negotiating Vendor Discounts", "Tracking SLA Performance",
    "Planning Talent Development", "Reviewing Succession Plans", "Tracking Leadership Metrics", "Running Feedback Cycles",
    "Hosting Town Hall Prep", "Planning All-Hands Themes", "Scheduling Team Syncs", "Tracking Project Timelines",
    "Reviewing Failure Lessons", "Running Agile Training", "Tracking Scrum Velocity", "Planning Kanban Improvements",
    "Reviewing Lean Savings", "Tracking Six Sigma Defects", "Planning ISO Reviews", "Monitoring CMMI Progress",
    "Tracking ITIL Incidents", "Reviewing COBIT Risks", "Ensuring NIST Updates", "Planning GDPR Compliance Checks",
    "Tracking Risk Trends", "Reviewing Audit Schedules", "Running Safety Inspections", "Planning Ethics Workshops",
    "Monitoring Corruption Reports", "Tracking Whistleblower Cases", "Reviewing CSR Metrics", "Planning Sustainability Goals",
    "Tracking ESG Improvements", "Running Diversity Events", "Planning Safety Training", "Tracking Wellness Metrics",
    "Reviewing Remote Work Success", "Managing Hybrid Workflows", "Planning Office Upgrades", "Tracking Gear Maintenance",
    "Reviewing Stock Accuracy", "Optimizing Supply Chain Flow", "Negotiating Vendor Terms", "Tracking SLA Trends",
    "Planning Talent Pipelines", "Reviewing Succession Readiness", "Tracking Leadership Success", "Running Feedback Surveys",
    "Hosting Town Hall Reviews", "Planning All-Hands Agendas", "Scheduling Team Updates", "Tracking Project Success",
    "Reviewing Retrospective Outcomes", "Optimizing Agile Practices", "Tracking Scrum Efficiency", "Planning Kanban Updates",
    "Reviewing Lean Progress", "Tracking Six Sigma Impact", "Planning ISO Compliance", "Monitoring CMMI Metrics",
    "Tracking ITIL Success", "Reviewing COBIT Standards", "Ensuring NIST Adherence", "Planning GDPR Reviews",
    "Tracking Risk Management", "Reviewing Compliance Status", "Running Safety Reviews", "Planning Ethics Audits",
    "Monitoring Corruption Trends", "Tracking Whistleblower Feedback", "Reviewing CSR Success", "Planning Sustainability Audits",
    "Tracking ESG Compliance", "Running Diversity Programs", "Planning Safety Protocols", "Tracking Wellness Impact",
    "Reviewing Remote Work Metrics", "Managing Hybrid Success", "Planning Office Improvements", "Tracking Equipment Status",
    "Reviewing Inventory Systems", "Optimizing Supply Chain Plans", "Negotiating Vendor Agreements", "Tracking SLA Effectiveness",
    "Planning Talent Growth", "Reviewing Succession Metrics", "Tracking Leadership Development", "Running Feedback Loops",
    "Hosting Town Hall Updates", "Planning All-Hands Events", "Scheduling Team Meetings", "Tracking Project Outcomes",
    "Reviewing Retrospective Results", "Optimizing Agile Teams", "Tracking Scrum Performance", "Planning Kanban Enhancements",
    "Reviewing Lean Outcomes", "Tracking Six Sigma Success", "Planning ISO Updates", "Monitoring CMMI Success",
    "Tracking ITIL Performance", "Reviewing COBIT Metrics", "Ensuring NIST Standards", "Planning GDPR Updates",
    "Tracking Risk Strategies", "Reviewing Compliance Plans", "Running Safety Protocols", "Planning Ethics Reviews",
    "Monitoring Corruption Metrics", "Tracking Whistleblower Impact", "Reviewing CSR Progress", "Planning Sustainability Metrics",
    "Tracking ESG Success", "Running Diversity Initiatives", "Planning Safety Improvements", "Tracking Wellness Trends",
    "Reviewing Remote Work Plans", "Managing Hybrid Strategies", "Planning Office Enhancements", "Tracking Gear Upgrades",
    "Reviewing Stock Management", "Optimizing Supply Chain Strategies", "Negotiating Vendor Plans", "Tracking SLA Success",
    "Planning Talent Strategies", "Reviewing Succession Strategies", "Tracking Leadership Plans", "Running Feedback Plans",
    "Hosting Town Hall Plans", "Planning All-Hands Strategies", "Scheduling Team Plans", "Tracking Project Strategies",
    "Reviewing Retrospective Plans", "Optimizing Agile Strategies", "Tracking Scrum Plans", "Planning Kanban Strategies",
    "Reviewing Lean Plans", "Tracking Six Sigma Strategies", "Planning ISO Strategies", "Monitoring CMMI Plans",
    "Tracking ITIL Strategies", "Reviewing COBIT Plans", "Ensuring NIST Plans", "Planning GDPR Strategies",

    // Marketing and Sales (385 topics)
    "Defining Target Markets", "Setting Marketing Objectives", "Developing Marketing Mix", "Budget Allocation",
    "Marketing Performance Metrics", "Planning Marketing Campaigns", "Researching Marketing Trends", "Implementing Marketing Plans",
    "Managing Marketing Campaigns", "Reviewing Marketing Performance", "Sales Forecasting", "Lead Generation Strategies",
    "Sales Funnel Management", "Sales Team Training", "Customer Relationship Management", "Planning Sales Strategy",
    "Researching Sales Techniques", "Implementing Sales Plans", "Managing Sales Team", "Reviewing Sales Performance",
    "Branding Strategy Development", "Logo Design and Refresh", "Brand Identity Consistency", "Brand Positioning",
    "Brand Awareness Campaigns", "Brand Loyalty Programs", "Brand Crisis Management", "Brand Storytelling",
    "Brand Partnerships", "Brand Equity Measurement", "Creating Ad Campaigns", "Running Social Media Ads",
    "Boosting SEO Rankings", "Sending Email Newsletters", "Planning PPC Campaigns", "Managing Display Ads",
    "Producing Video Ads", "Sponsoring Podcasts", "Hosting Events", "Planning Trade Shows", "Conducting Market Research",
    "Analyzing Competitor Strategies", "Gathering Customer Insights", "Creating Content Plans", "Managing PR Efforts",
    "Finding New Leads", "Converting Prospects", "Optimizing Sales Funnels", "Launching New Products",
    "Collaborating with Influencers", "Setting Up Affiliate Programs", "Tracking Campaign ROI", "Running A/B Tests",
    "Boosting Conversion Rates", "Building Landing Pages", "Automating Marketing Tasks", "Running CRM Systems",
    "Predicting Sales Trends", "Tracking Sales Pipelines", "Writing Cold Call Scripts", "Planning Customer Retention",
    "Offering Upsell Opportunities", "Designing Loyalty Programs", "Setting Pricing Strategies", "Launching Promotions",
    "Segmenting Markets", "Targeting Key Audiences", "Positioning Products", "Budgeting Ad Spend", "Reviewing Campaign Results",
    "Optimizing Ad Performance", "Planning Social Media Content", "Tracking SEO Progress", "Managing Email Campaigns",
    "Analyzing PPC Results", "Reviewing Display Ad Impact", "Tracking Video Ad Views", "Monitoring Podcast Sponsorships",
    "Evaluating Event Success", "Planning Trade Show Booths", "Researching Market Gaps", "Tracking Competitor Ads",
    "Collecting Customer Feedback", "Creating Blog Posts", "Managing Press Releases", "Qualifying Leads",
    "Closing Sales Deals", "Refining Funnel Stages", "Planning Product Demos", "Engaging Influencer Networks",
    "Tracking Affiliate Earnings", "Reviewing Ad Spend Efficiency", "Testing Landing Page Designs", "Optimizing CRM Data",
    "Forecasting Quarterly Sales", "Tracking Lead Sources", "Training Sales Reps", "Planning Retention Campaigns",
    "Upselling Existing Clients", "Rewarding Loyal Customers", "Adjusting Pricing Models", "Running Discount Campaigns",
    "Analyzing Market Segments", "Targeting Niche Markets", "Repositioning Brands", "Allocating Marketing Funds",
    "Tracking Social Media Engagement", "Optimizing SEO Keywords", "Reviewing Email Open Rates", "Managing PPC Bids",
    "Analyzing Display Ad Clicks", "Tracking Video Ad Engagement", "Reviewing Podcast Metrics", "Planning Event Promotions",
    "Setting Up Trade Show Displays", "Researching Customer Needs", "Monitoring Competitor Pricing", "Surveying Customer Satisfaction",
    "Publishing Content Updates", "Pitching PR Stories", "Nurturing Lead Pipelines", "Closing High-Value Deals",
    "Streamlining Funnel Processes", "Preparing Product Launch Plans", "Managing Influencer Contracts", "Tracking Affiliate Performance",
    "Reviewing Campaign Analytics", "Testing Ad Variations", "Optimizing Conversion Paths", "Designing Sales Pages",
    "Automating Lead Scoring", "Managing CRM Updates", "Predicting Sales Growth", "Tracking Funnel Drop-offs",
    "Refining Call Scripts", "Planning Retention Strategies", "Boosting Upsell Revenue", "Enhancing Loyalty Rewards",
    "Testing Pricing Changes", "Running Promo Tests", "Refining Market Segments", "Targeting Emerging Audiences",
    "Strengthening Brand Messaging", "Monitoring Ad Budgets", "Analyzing Campaign Data", "Optimizing Social Media Ads",
    "Tracking SEO Traffic", "Reviewing Email Metrics", "Managing PPC Performance", "Analyzing Display Ad Reach",
    "Tracking Video Ad Metrics", "Reviewing Podcast ROI", "Planning Event Logistics", "Setting Up Trade Show Schedules",
    "Researching Market Demographics", "Tracking Competitor Campaigns", "Collecting Customer Reviews", "Creating Video Content",
    "Managing Media Outreach", "Scoring New Leads", "Closing Sales Faster", "Optimizing Funnel Conversions",
    "Planning Product Pre-launches", "Negotiating Influencer Deals", "Tracking Affiliate Links", "Reviewing Ad Analytics",
    "Testing Conversion Strategies", "Building High-Converting Pages", "Automating CRM Workflows", "Forecasting Sales Cycles",
    "Tracking Lead Quality", "Training Sales Teams", "Planning Retention Events", "Maximizing Upsell Offers",
    "Enhancing Loyalty Benefits", "Adjusting Price Points", "Running Promo Campaigns", "Analyzing Audience Data",
    "Targeting Specific Demographics", "Refining Brand Identity", "Tracking Marketing Spend", "Reviewing Social Media Metrics",
    "Optimizing SEO Content", "Analyzing Email Performance", "Managing PPC Strategies", "Tracking Display Ad Success",
    "Reviewing Video Ad Impact", "Monitoring Podcast Performance", "Planning Event Marketing", "Managing Trade Show Plans",
    "Researching Market Opportunities", "Tracking Competitor Moves", "Collecting Customer Preferences", "Creating Content Calendars",
    "Managing PR Campaigns", "Generating Lead Lists", "Closing Big Deals", "Streamlining Sales Processes",
    "Planning Product Rollouts", "Engaging Influencer Communities", "Tracking Affiliate Revenue", "Analyzing Ad Effectiveness",
    "Testing Landing Page Variants", "Optimizing CRM Tools", "Predicting Sales Patterns", "Tracking Pipeline Health",
    "Refining Sales Pitches", "Planning Customer Follow-ups", "Boosting Upsell Success", "Rewarding Repeat Buyers",
    "Testing Pricing Strategies", "Running Discount Offers", "Segmenting Customer Bases", "Targeting New Segments",
    "Enhancing Brand Perception", "Monitoring Campaign Costs", "Tracking Social Media Growth", "Optimizing SEO Efforts",
    "Reviewing Email Engagement", "Managing PPC ROI", "Analyzing Display Ad Metrics", "Tracking Video Ad Performance",
    "Reviewing Podcast Engagement", "Planning Event Outreach", "Setting Up Trade Show Events", "Researching Market Shifts",
    "Monitoring Competitor Trends", "Collecting Customer Data", "Creating Engaging Content", "Managing PR Strategies",
    "Nurturing Lead Relationships", "Closing Sales Opportunities", "Optimizing Funnel Efficiency", "Planning Product Campaigns",
    "Managing Influencer Outreach", "Tracking Affiliate Success", "Reviewing Campaign Effectiveness", "Testing Ad Designs",
    "Building Conversion Pages", "Automating Marketing Flows", "Forecasting Sales Results", "Tracking Lead Progress",
    "Training Sales Staff", "Planning Retention Efforts", "Maximizing Upsell Potential", "Enhancing Loyalty Programs",
    "Adjusting Pricing Plans", "Running Promo Events", "Analyzing Market Trends", "Targeting Key Customers",
    "Strengthening Brand Presence", "Tracking Ad Spend ROI", "Reviewing Social Media Results", "Optimizing SEO Performance",
    "Analyzing Email Results", "Managing PPC Campaigns", "Tracking Display Ad Impact", "Reviewing Video Ad Success",
    "Monitoring Podcast Results", "Planning Event Strategies", "Managing Trade Show Logistics", "Researching Customer Trends",
    "Tracking Competitor Actions", "Collecting Customer Insights", "Creating Content Strategies", "Managing PR Efforts",
    "Generating New Leads", "Closing Sales Targets", "Refining Funnel Strategies", "Planning Product Launches",
    "Engaging Influencer Partners", "Tracking Affiliate Growth", "Analyzing Campaign Success", "Testing Conversion Tactics",
    "Building Effective Pages", "Automating CRM Processes", "Predicting Sales Outcomes", "Tracking Pipeline Metrics",
    "Refining Sales Strategies", "Planning Customer Retention", "Boosting Upsell Results", "Enhancing Loyalty Offers",
    "Testing Pricing Models", "Running Discount Strategies", "Segmenting Markets Effectively", "Targeting Core Audiences",
    "Strengthening Brand Strategy", "Monitoring Marketing ROI", "Tracking Social Media Success", "Optimizing SEO Results",
    "Reviewing Email Campaigns", "Managing PPC Success", "Analyzing Display Ad Results", "Tracking Video Ad ROI",
    "Reviewing Podcast Impact", "Planning Event Campaigns", "Managing Trade Show Success", "Researching Market Needs",
    "Tracking Competitor Strategies", "Collecting Customer Opinions", "Creating Content Plans", "Managing PR Outreach",
    "Nurturing Lead Pools", "Closing Sales Milestones", "Optimizing Funnel Performance", "Planning Product Strategies",
    "Engaging Influencer Teams", "Tracking Affiliate Metrics", "Reviewing Campaign Metrics", "Testing Ad Effectiveness",
    "Building Conversion Strategies", "Automating Marketing Systems", "Forecasting Sales Targets", "Tracking Lead Metrics",
    "Training Sales Crew", "Planning Retention Plans", "Maximizing Upsell Strategies", "Enhancing Loyalty Systems",
    "Adjusting Pricing Tactics", "Running Promo Plans", "Analyzing Market Data", "Targeting New Customers",
    "Strengthening Brand Efforts", "Tracking Marketing Results", "Reviewing Social Media Plans", "Optimizing SEO Plans",
    "Analyzing Email Success", "Managing PPC Plans", "Tracking Display Ad Plans", "Reviewing Video Ad Plans",
    "Monitoring Podcast Plans", "Planning Event Plans", "Managing Trade Show Plans", "Researching Market Plans",
    "Tracking Competitor Plans", "Collecting Customer Plans", "Creating Content Efforts", "Managing PR Plans",
    "Generating Lead Plans", "Closing Sales Plans", "Refining Funnel Plans", "Planning Product Efforts",
    "Engaging Influencer Plans", "Tracking Affiliate Plans", "Analyzing Campaign Plans", "Testing Conversion Plans",
    "Building Page Plans", "Automating CRM Plans", "Predicting Sales Plans", "Tracking Pipeline Plans",
    "Refining Sales Plans", "Planning Retention Efforts", "Boosting Upsell Plans", "Enhancing Loyalty Plans",
    "Testing Pricing Plans", "Running Discount Plans", "Segmenting Market Plans", "Targeting Audience Plans",
    "Strengthening Brand Plans", "Monitoring ROI Plans", "Tracking Social Plans", "Optimizing SEO Efforts",
    "Reviewing Email Plans", "Managing PPC Efforts", "Tracking Ad Plans", "Reviewing Video Plans",
    "Monitoring Podcast Efforts", "Planning Event Efforts", "Managing Show Plans", "Researching Market Efforts",

    // Product and Engineering (385 topics)
    "Designing New Products", "Planning Product Development", "Researching Product Ideas", "Prototyping Concepts",
    "Testing Product Features", "Building Software Solutions", "Coding Mobile Apps", "Developing Websites",
    "Managing Product Lifecycles", "Squashing Software Bugs", "Reviewing Code Quality", "Handling Tech Debt",
    "Building APIs", "Integrating Systems", "Designing Hardware", "Updating Firmware", "Running QA Tests",
    "Conducting User Testing", "Launching Beta Versions", "Planning Design Sprints", "Sketching Wireframes",
    "Designing UI Elements", "Researching UX Trends", "Ensuring Accessibility", "Optimizing Performance",
    "Scaling Infrastructure", "Setting Up Cloud Services", "Running DevOps Pipelines", "Implementing CI/CD",
    "Managing Feature Requests", "Prioritizing Backlogs", "Tracking Development Milestones", "Reviewing Sprint Progress",
    "Planning Product Launches", "Gathering User Feedback", "Iterating Product Designs", "Monitoring Product Usage",
    "Fixing Post-launch Issues", "Documenting Codebases", "Training Dev Teams", "Researching Tech Trends",
    "Selecting Tech Stacks", "Optimizing Build Processes", "Testing Hardware Prototypes", "Validating Product Specs",
    "Running Stress Tests", "Planning Scalability", "Managing Cloud Costs", "Securing Dev Environments",
    "Tracking Bug Reports", "Reviewing Test Coverage", "Planning API Updates", "Integrating Third-party Tools",
    "Designing Firmware Updates", "Running Usability Studies", "Launching MVP Versions", "Planning UX Research",
    "Creating Mockups", "Refining UI Designs", "Ensuring WCAG Compliance", "Speeding Up Load Times",
    "Optimizing Server Performance", "Managing Deployment Schedules", "Automating Build Pipelines", "Tracking CI/CD Success",
    "Reviewing Feature Specs", "Managing Product Roadmaps", "Tracking Sprint Velocity", "Planning Beta Rollouts",
    "Analyzing User Data", "Fixing Critical Bugs", "Documenting APIs", "Training QA Teams", "Researching Competitors",
    "Selecting Development Tools", "Streamlining Code Reviews", "Testing Hardware Durability", "Validating User Flows",
    "Running Performance Benchmarks", "Planning Cloud Migrations", "Securing APIs", "Tracking Development Costs",
    "Reviewing Bug Fixes", "Planning System Integrations", "Updating Hardware Designs", "Running A/B Tests",
    "Launching Product Updates", "Gathering Beta Feedback", "Iterating UX Designs", "Monitoring Crash Reports",
    "Fixing Security Flaws", "Documenting User Guides", "Training Support Teams", "Researching Emerging Tech",
    "Optimizing Dev Workflows", "Testing Prototype Functionality", "Validating Design Choices", "Running Load Tests",
    "Planning Infrastructure Upgrades", "Managing Cloud Backups", "Securing Code Repositories", "Tracking Test Results",
    "Reviewing API Performance", "Integrating New Features", "Designing Hardware Prototypes", "Running User Surveys",
    "Launching Feature Updates", "Analyzing Usage Patterns", "Fixing UI Glitches", "Documenting Tech Specs",
    "Training Engineering Teams", "Researching Market Needs", "Selecting Cloud Providers", "Optimizing Release Cycles",
    "Testing Hardware Compatibility", "Validating Software Updates", "Running Security Scans", "Planning System Overhauls",
    "Managing Cloud Security", "Securing Dev Pipelines", "Tracking Feature Usage", "Reviewing Code Standards",
    "Planning Third-party Integrations", "Updating Firmware Versions", "Running Prototype Tests", "Launching Product Betas",
    "Gathering UX Insights", "Fixing Performance Bottlenecks", "Documenting Deployment Steps", "Training DevOps Crew",
    "Researching Tech Innovations", "Streamlining Build Times", "Testing Hardware Reliability", "Validating User Inputs",
    "Running Scalability Tests", "Planning Cloud Expansions", "Securing API Endpoints", "Tracking Development Metrics",
    "Reviewing Test Plans", "Integrating Payment Systems", "Designing Hardware Updates", "Running User Acceptance Tests",
    "Launching New Features", "Analyzing Beta Results", "Fixing Crash Issues", "Documenting Feature Guides",
    "Training Product Teams", "Researching User Needs", "Selecting Dev Frameworks", "Optimizing CI/CD Pipelines",
    "Testing Hardware Performance", "Validating Bug Fixes", "Running Penetration Tests", "Planning Tech Upgrades",
    "Managing Cloud Resources", "Securing Build Processes", "Tracking Product Metrics", "Reviewing UX Feedback",
    "Planning System Updates", "Updating Hardware Specs", "Running Feature Tests", "Launching Product Iterations",
    "Gathering Post-launch Data", "Fixing Design Flaws", "Documenting Code Changes", "Training QA Staff",
    "Researching Tech Standards", "Streamlining Dev Processes", "Testing Hardware Specs", "Validating Feature Sets",
    "Running Performance Tests", "Planning Cloud Transitions", "Securing System Access", "Tracking Bug Trends",
    "Reviewing API Usage", "Integrating Analytics Tools", "Designing Firmware Patches", "Running Usability Tests",
    "Launching Product Variants", "Analyzing User Behavior", "Fixing Software Glitches", "Documenting Dev Guides",
    "Training Support Staff", "Researching Product Trends", "Selecting Build Tools", "Optimizing Deployment Pipelines",
    "Testing Hardware Updates", "Validating System Changes", "Running Security Audits", "Planning Feature Rollouts",
    "Managing Cloud Deployments", "Securing Codebases", "Tracking Usage Trends", "Reviewing Design Specs",
    "Planning API Enhancements", "Updating Hardware Firmware", "Running Beta Tests", "Launching Product Improvements",
    "Gathering Feature Feedback", "Fixing UX Issues", "Documenting Release Notes", "Training Dev Crew",
    "Researching Tech Advances", "Streamlining QA Workflows", "Testing Hardware Features", "Validating Product Updates",
    "Running Stress Benchmarks", "Planning Cloud Upgrades", "Securing Dev Tools", "Tracking Feature Metrics",
    "Reviewing Test Scripts", "Integrating New APIs", "Designing Hardware Revisions", "Running User Trials",
    "Launching Product Enhancements", "Analyzing Test Data", "Fixing System Bugs", "Documenting User Manuals",
    "Training Product Crew", "Researching Market Trends", "Selecting Dev Platforms", "Optimizing Build Schedules",
    "Testing Hardware Stability", "Validating Code Updates", "Running Vulnerability Scans", "Planning System Enhancements",
    "Managing Cloud Performance", "Securing Pipelines", "Tracking Product Success", "Reviewing UX Studies",
    "Planning Feature Updates", "Updating Hardware Plans", "Running Feature Trials", "Launching Product Refinements",
    "Gathering User Insights", "Fixing Performance Issues", "Documenting Tech Updates", "Training QA Crew",
    "Researching Tech Solutions", "Streamlining Dev Cycles", "Testing Hardware Changes", "Validating Feature Fixes",
    "Running Load Benchmarks", "Planning Cloud Security", "Securing API Access", "Tracking Bug Resolutions",
    "Reviewing API Metrics", "Integrating Dev Tools", "Designing Firmware Updates", "Running User Feedback Sessions",
    "Launching Product Patches", "Analyzing Usage Data", "Fixing UI Bugs", "Documenting Code Reviews",
    "Training Engineering Staff", "Researching User Preferences", "Selecting Tech Tools", "Optimizing CI/CD Workflows",
    "Testing Hardware Fixes", "Validating System Updates", "Running Security Checks", "Planning Product Overhauls",
    "Managing Cloud Operations", "Securing Dev Systems", "Tracking Product Feedback", "Reviewing Design Feedback",
    "Planning API Improvements", "Updating Hardware Features", "Running Beta Trials", "Launching Product Features",
    "Gathering Beta Insights", "Fixing Software Issues", "Documenting Dev Notes", "Training Product Staff",
    "Researching Tech Needs", "Streamlining Build Workflows", "Testing Hardware Updates", "Validating Feature Updates",
    "Running Performance Audits", "Planning Cloud Enhancements", "Securing System Integrations", "Tracking Product Data",
    "Reviewing Test Outcomes", "Integrating New Features", "Designing Hardware Patches", "Running User Tests",
    "Launching Product Versions", "Analyzing User Feedback", "Fixing Critical Issues", "Documenting Feature Specs",
    "Training Dev Teams", "Researching Product Gaps", "Selecting Dev Environments", "Optimizing Release Plans",
    "Testing Hardware Enhancements", "Validating Bug Resolutions", "Running Security Reviews", "Planning Tech Rollouts",
    "Managing Cloud Updates", "Securing Dev Workflows", "Tracking Product Trends", "Reviewing UX Results",
    "Planning System Refinements", "Updating Hardware Designs", "Running Feature Benchmarks", "Launching Product Upgrades",
    "Gathering Post-launch Insights", "Fixing Design Bugs", "Documenting Code Updates", "Training QA Teams",
    "Researching Tech Trends", "Streamlining Dev Efforts", "Testing Hardware Reliability", "Validating Product Changes",
    "Running Scalability Benchmarks", "Planning Cloud Improvements", "Securing API Updates", "Tracking Feature Success",
    "Reviewing Test Metrics", "Integrating System Enhancements", "Designing Hardware Fixes", "Running User Studies",
    "Launching Product Revisions", "Analyzing Beta Feedback", "Fixing System Glitches", "Documenting Release Plans",
    "Training Product Teams", "Researching Market Demands", "Selecting Cloud Tools", "Optimizing Dev Pipelines",
    "Testing Hardware Performance", "Validating Feature Improvements", "Running Security Tests", "Planning Product Updates",
    "Managing Cloud Efficiency", "Securing Build Systems", "Tracking Product Insights", "Reviewing Design Outcomes",
    "Planning API Refinements", "Updating Hardware Specs", "Running Feature Tests", "Launching Product Enhancements",

    // Finance and Accounting (385 topics)
    "Creating a Monthly Budget", "Tracking Daily Expenses", "Planning Investments", "Managing Cash Flow",
    "Preparing Tax Returns", "Running Payroll", "Cutting Operational Costs", "Monitoring Revenue Streams",
    "Analyzing Profit Margins", "Handling Debt Payments", "Assessing Financial Risks", "Planning Capital Expenditures",
    "Raising Investment Funds", "Applying for Grants", "Managing Loan Repayments", "Paying Vendor Invoices",
    "Collecting Customer Payments", "Keeping Bookkeeping Records", "Filing Quarterly Taxes", "Ensuring Tax Compliance",
    "Auditing Financial Statements", "Running Cost-Benefit Analysis", "Calculating ROI", "Forecasting Annual Revenue",
    "Reviewing Budget Performance", "Tracking Spending Trends", "Planning Retirement Savings", "Managing Emergency Funds",
    "Reviewing Investment Portfolios", "Tracking Cash Reserves", "Preparing Financial Reports", "Optimizing Expense Tracking",
    "Planning Tax Strategies", "Running Payroll Audits", "Reducing Overhead Costs", "Monitoring Income Sources",
    "Analyzing Financial Health", "Managing Debt Reduction", "Assessing Investment Risks", "Planning Asset Purchases",
    "Securing Funding Rounds", "Tracking Grant Applications", "Managing Loan Terms", "Reviewing Invoice Accuracy",
    "Chasing Overdue Payments", "Reconciling Accounts", "Filing Tax Extensions", "Reviewing Compliance Reports",
    "Conducting Financial Audits", "Analyzing Project Costs", "Tracking ROI Trends", "Forecasting Cash Needs",
    "Reviewing Budget Adjustments", "Monitoring Expense Reports", "Planning Long-term Investments", "Managing Savings Goals",
    "Reviewing Portfolio Performance", "Tracking Liquid Assets", "Preparing Quarterly Reports", "Optimizing Cost Savings",
    "Planning Tax Deductions", "Auditing Payroll Records", "Cutting Supply Costs", "Monitoring Revenue Growth",
    "Analyzing Profit Trends", "Managing Debt Schedules", "Assessing Risk Exposure", "Planning Equipment Purchases",
    "Raising Startup Capital", "Tracking Grant Progress", "Managing Loan Interest", "Reviewing Payment Terms",
    "Collecting Client Invoices", "Balancing Bookkeeping", "Filing Annual Taxes", "Ensuring Regulatory Compliance",
    "Auditing Cash Flow", "Running Break-even Analysis", "Tracking ROI Metrics", "Forecasting Profit Growth",
    "Reviewing Budget Plans", "Tracking Expense Categories", "Planning Wealth Growth", "Managing Reserve Funds",
    "Reviewing Investment Returns", "Tracking Financial Liquidity", "Preparing Tax Reports", "Optimizing Spending Plans",
    "Planning Tax Filings", "Running Payroll Reviews", "Reducing Fixed Costs", "Monitoring Cash Inflows",
    "Analyzing Balance Sheets", "Managing Debt Plans", "Assessing Market Risks", "Planning Facility Upgrades",
    "Securing Venture Capital", "Tracking Grant Spending", "Managing Loan Balances", "Reviewing Invoice Payments",
    "Collecting Late Fees", "Maintaining Financial Records", "Filing Tax Amendments", "Reviewing Audit Trails",
    "Conducting Profit Audits", "Analyzing Cost Efficiency", "Tracking Investment Gains", "Forecasting Budget Needs",
    "Reviewing Spending Patterns", "Monitoring Travel Expenses", "Planning Financial Goals", "Managing Cash Savings",
    "Reviewing Stock Performance", "Tracking Available Funds", "Preparing Annual Reports", "Optimizing Tax Savings",
    "Planning Tax Payments", "Auditing Employee Pay", "Cutting Variable Costs", "Monitoring Sales Revenue",
    "Analyzing Income Trends", "Managing Debt Interest", "Assessing Financial Exposure", "Planning Tech Investments",
    "Raising Seed Funding", "Tracking Grant Usage", "Managing Loan Agreements", "Reviewing Billing Cycles",
    "Collecting Outstanding Debts", "Reconciling Bank Statements", "Filing Tax Refunds", "Ensuring Financial Compliance",
    "Auditing Revenue Streams", "Running ROI Analysis", "Tracking Profit Metrics", "Forecasting Expense Trends",
    "Reviewing Budget Goals", "Tracking Cost Reductions", "Planning Investment Strategies", "Managing Fund Allocations",
    "Reviewing Bond Performance", "Tracking Cash Availability", "Preparing Audit Reports", "Optimizing Budget Plans",
    "Planning Tax Reviews", "Running Payroll Checks", "Reducing Material Costs", "Monitoring Profit Streams",
    "Analyzing Cash Flow Trends", "Managing Debt Repayments", "Assessing Credit Risks", "Planning Office Purchases",
    "Securing Business Loans", "Tracking Grant Reports", "Managing Loan Schedules", "Reviewing Payment Records",
    "Collecting Subscription Fees", "Balancing Ledgers", "Filing Tax Credits", "Reviewing Compliance Standards",
    "Auditing Expense Reports", "Analyzing Financial Efficiency", "Tracking Gain Trends", "Forecasting Revenue Needs",
    "Reviewing Budget Cuts", "Monitoring Utility Costs", "Planning Savings Strategies", "Managing Investment Funds",
    "Reviewing Asset Returns", "Tracking Cash Balances", "Preparing Financial Summaries", "Optimizing Expense Plans",
    "Planning Tax Audits", "Auditing Pay Schedules", "Cutting Labor Costs", "Monitoring Income Growth",
    "Analyzing Profitability", "Managing Debt Levels", "Assessing Loan Risks", "Planning Equipment Upgrades",
    "Raising Equity Funding", "Tracking Grant Funds", "Managing Loan Payments", "Reviewing Invoice Records",
    "Collecting Payment Plans", "Reconciling Transactions", "Filing Tax Adjustments", "Ensuring Audit Compliance",
    "Auditing Cash Reports", "Running Financial Analysis", "Tracking ROI Results", "Forecasting Cash Flow",
    "Reviewing Budget Trends", "Tracking Expense Savings", "Planning Retirement Funds", "Managing Contingency Funds",
    "Reviewing Portfolio Gains", "Tracking Liquid Cash", "Preparing Tax Summaries", "Optimizing Cost Plans",
    "Planning Tax Preparations", "Running Payroll Updates", "Reducing Supply Expenses", "Monitoring Revenue Trends",
    "Analyzing Financial Metrics", "Managing Debt Strategies", "Assessing Investment Options", "Planning Capital Projects",
    "Securing Crowdfunding", "Tracking Grant Disbursements", "Managing Loan Refinancing", "Reviewing Payment Schedules",
    "Collecting Recurring Payments", "Balancing Financial Books", "Filing Tax Rebates", "Reviewing Financial Standards",
    "Auditing Income Reports", "Analyzing Cost Savings", "Tracking Investment Metrics", "Forecasting Profit Trends",
    "Reviewing Budget Reviews", "Monitoring Expense Trends", "Planning Financial Growth", "Managing Cash Holdings",
    "Reviewing Stock Gains", "Tracking Fund Availability", "Preparing Financial Updates", "Optimizing Spending Strategies",
    "Planning Tax Strategies", "Auditing Payroll Systems", "Cutting Operational Expenses", "Monitoring Cash Growth",
    "Analyzing Revenue Metrics", "Managing Debt Reduction Plans", "Assessing Financial Options", "Planning Asset Investments",
    "Raising Growth Capital", "Tracking Grant Allocations", "Managing Loan Repayment Plans", "Reviewing Billing Records",
    "Collecting Client Payments", "Reconciling Financials", "Filing Tax Documents", "Ensuring Tax Standards",
    "Auditing Profit Reports", "Running Cost Analysis", "Tracking ROI Performance", "Forecasting Budget Trends",
    "Reviewing Spending Goals", "Monitoring Cost Savings", "Planning Investment Goals", "Managing Reserve Accounts",
    "Reviewing Portfolio Trends", "Tracking Cash Liquidity", "Preparing Financial Reviews", "Optimizing Budget Strategies",
    "Planning Tax Compliance", "Running Payroll Audits", "Reducing Overhead Expenses", "Monitoring Income Trends",
    "Analyzing Profit Growth", "Managing Debt Payments", "Assessing Risk Levels", "Planning Facility Investments",
    "Securing Investment Deals", "Tracking Grant Payments", "Managing Loan Reviews", "Reviewing Invoice Trends",
    "Collecting Overdue Fees", "Balancing Accounts", "Filing Tax Updates", "Reviewing Compliance Metrics",
    "Auditing Financial Records", "Analyzing Expense Efficiency", "Tracking Profit Gains", "Forecasting Revenue Growth",
    "Reviewing Budget Performance",


    // personal life:

    // Health and Wellness (300 topics)
    "Scheduling My Doctor Appointments",
    "Tracking My Medication Intake",
    "Planning My Annual Health Check-ups",
    "Managing My Chronic Conditions",
    "Improving My Posture",
    "Setting My Fitness Milestones",
    "Reviewing My Health Insurance",
    "Creating My Emergency Health Plan",
    "Building My Strength Training Routine",
    "Reducing My Screen Time",
    "Scheduling My Dental Visits",
    "Maintaining My Vision Health",
    "Decluttering My Medicine Cabinet",
    "Designing My Home Gym",
    "Planting a Medicinal Herb Garden",
    "Hosting Health-Focused Family Activities",
    "Attending Wellness Workshops",
    "Learning About New Health Trends",
    "Practicing My Stretching Exercises",
    "Setting My Weight Loss Goals",
    "Planning My Healthy Snacks",
    "Booking My Spa Days",
    "Exploring Alternative Therapies",
    "Trying New Fitness Classes",
    "Establishing My Bedtime Routine",
    "Optimizing My Workout Schedule",
    "Breaking Unhealthy Eating Habits",
    "Scheduling My Therapy Sessions",
    "Tracking My Mood Swings",
    "Planning My Mindfulness Practices",
    "Managing My Anxiety Triggers",
    "Improving My Emotional Resilience",
    "Setting My Mental Health Goals",
    "Reviewing My Stress Management Techniques",
    "Creating My Self-Care Rituals",
    "Building My Support Network",
    "Reducing My Negative Self-Talk",
    "Scheduling My Digital Detox Days",
    "Maintaining My Journaling Habit",
    "Decluttering My Mind with Meditation",
    "Designing My Relaxation Space",
    "Planting a Zen Garden",
    "Hosting Mental Health Discussions",
    "Attending Support Group Meetings",
    "Learning About Cognitive Behavioral Therapy",
    "Practicing My Breathing Exercises",
    "Setting My Boundaries",
    "Planning My Gratitude Lists",
    "Booking My Wellness Retreats",
    "Exploring Art Therapy",
    "Trying New Relaxation Techniques",
    "Establishing My Evening Wind-Down",
    "Optimizing My Work-Life Balance",
    "Breaking Procrastination Cycles",
    "Planning My Weekly Meal Prep",
    "Tracking My Calorie Intake",
    "Organizing My Grocery Shopping",
    "Managing My Dietary Restrictions",
    "Improving My Cooking Skills",
    "Setting My Nutrition Goals",
    "Reviewing My Food Journal",
    "Creating My Healthy Recipes",
    "Building My Pantry Staples",
    "Reducing My Sugar Consumption",
    "Scheduling My Farmers Market Visits",
    "Maintaining My Kitchen Cleanliness",
    "Decluttering My Fridge",
    "Designing My Meal Plans",
    "Planting My Vegetable Garden",
    "Hosting Potluck Dinners",
    "Attending Cooking Classes",
    "Learning About Superfoods",
    "Practicing Mindful Eating",
    "Setting My Hydration Targets",
    "Planning My Snack Alternatives",
    "Booking My Nutritionist Appointments",
    "Exploring New Cuisines",
    "Trying Intermittent Fasting",
    "Establishing My Breakfast Routine",
    "Optimizing My Portion Sizes",
    "Breaking Unhealthy Snacking Habits",
    "Planning My Cardio Workouts",
    "Tracking My Fitness Progress",
    "Setting My Strength Goals",
    "Improving My Flexibility",
    "Scheduling My Yoga Sessions",
    "Managing My Workout Gear",
    "Creating My Fitness Playlist",
    "Building My Home Workout Routine",
    "Reducing My Rest Days",
    "Scheduling My Personal Trainer",
    "Maintaining My Gym Membership",
    "Decluttering My Workout Space",
    "Designing My Fitness Challenges",
    "Hosting Fitness Meetups",
    "Attending Fitness Expos",
    // ... (continues to 300 topics)

    // Personal Finance (300 topics)
    "Creating My Monthly Budget",
    "Tracking My Daily Spending",
    "Planning My Savings Goals",
    "Managing My Debt Repayment",
    "Investing for My Future",
    "Setting My Financial Milestones",
    "Reviewing My Credit Score",
    "Creating My Emergency Fund",
    "Building My Investment Portfolio",
    "Reducing My Impulse Purchases",
    "Scheduling My Bill Payments",
    "Maintaining My Financial Records",
    "Decluttering My Financial Documents",
    "Designing My Financial Plan",
    "Hosting Budgeting Workshops",
    "Attending Financial Seminars",
    "Learning About Tax Strategies",
    "Practicing My Investment Research",
    "Setting My Retirement Goals",
    "Planning My Tax Filings",
    "Booking My Accountant Meetings",
    "Exploring New Investment Opportunities",
    "Trying Crypto Investments",
    "Establishing My Financial Routines",
    "Optimizing My Expense Tracking",
    "Breaking Bad Spending Habits",
    "Planning My Weekly Budget",
    "Tracking My Income Sources",
    "Setting My Debt Reduction Targets",
    "Improving My Financial Literacy",
    "Scheduling My Financial Reviews",
    "Managing My Credit Card Use",
    "Creating My Savings Plan",
    "Building My Wealth Strategy",
    "Reducing My Subscription Costs",
    "Scheduling My Investment Contributions",
    "Maintaining My Budget Tracker",
    "Decluttering My Wallet",
    "Designing My Financial Dashboard",
    "Hosting Financial Planning Sessions",
    "Attending Investment Clubs",
    "Learning About Stock Markets",
    "Practicing My Budgeting Skills",
    "Setting My Financial Independence Goals",
    "Planning My Loan Repayments",
    "Booking My Financial Advisor",
    "Exploring Real Estate Investments",
    "Trying Peer-to-Peer Lending",
    "Establishing My Investment Habits",
    "Optimizing My Tax Deductions",
    "Breaking Debt Cycles",
    // ... (continues to 300 topics)

    // Home Management (300 topics)
    "Scheduling My Cleaning Routine",
    "Tracking My Home Maintenance Tasks",
    "Planning My Seasonal Decor",
    "Managing My Home Repairs",
    "Improving My Energy Efficiency",
    "Setting My Home Organization Goals",
    "Reviewing My Utility Bills",
    "Creating My Cleaning Checklist",
    "Building My Home Improvement Plan",
    "Reducing My Clutter",
    "Scheduling My Appliance Servicing",
    "Maintaining My Garden",
    "Decluttering My Garage",
    "Designing My Living Room Layout",
    "Planting My Indoor Plants",
    "Hosting Home Organization Workshops",
    "Attending DIY Classes",
    "Learning About Home Automation",
    "Practicing My Interior Design Skills",
    "Setting My Home Safety Goals",
    "Planning My Home Renovations",
    "Booking My Handyman Services",
    "Exploring Smart Home Devices",
    "Trying Eco-Friendly Cleaning Products",
    "Establishing My Home Routines",
    "Optimizing My Storage Solutions",
    "Breaking Procrastination on Home Tasks",
    "Planning My Weekly Chores",
    "Tracking My Home Expenses",
    "Setting My Decluttering Milestones",
    "Improving My Home's Curb Appeal",
    "Scheduling My Pest Control",
    "Managing My Home Inventory",
    "Creating My Home Maintenance Schedule",
    "Building My DIY Projects",
    "Reducing My Water Usage",
    "Scheduling My Lawn Care",
    "Maintaining My HVAC System",
    "Decluttering My Closets",
    "Designing My Kitchen Organization",
    "Planting My Herb Garden",
    "Hosting Home Improvement Parties",
    "Attending Gardening Workshops",
    "Learning About Sustainable Living",
    "Practicing My Cleaning Techniques",
    "Setting My Home Comfort Goals",
    "Planning My Furniture Upgrades",
    "Booking My Cleaning Services",
    "Exploring New Home Gadgets",
    "Trying Minimalist Living",
    // ... (continues to 300 topics)

    // Relationships (300 topics)
    "Planning My Family Game Nights",
    "Tracking My Kids’ Schedules",
    "Setting My Parenting Goals",
    "Managing My Family Budget",
    "Improving My Communication Skills",
    "Scheduling My Family Meetings",
    "Creating My Family Vacation Plans",
    "Building My Family Traditions",
    "Reducing My Family Conflicts",
    "Hosting Family Reunions",
    "Attending Parenting Workshops",
    "Learning About Family Dynamics",
    "Practicing My Listening Skills",
    "Setting My Family Bonding Goals",
    "Planning My Friend Meetups",
    "Tracking My Social Commitments",
    "Managing My Gift Ideas",
    "Improving My Friendship Connections",
    "Scheduling My Coffee Dates",
    "Creating My Birthday Calendar",
    "Building My Social Network",
    "Reducing My Social Overload",
    "Hosting Dinner Parties",
    "Attending Networking Events",
    "Learning About Relationship Building",
    "Practicing My Social Skills",
    "Setting My Date Night Goals",
    "Planning My Romantic Getaways",
    "Booking My Anniversary Celebrations",
    "Exploring New Couple Activities",
    "Trying Relationship Workshops",
    "Establishing My Partner Rituals",
    "Optimizing My Relationship Time",
    "Breaking Bad Relationship Habits",
    // ... (continues to 300 topics)

    // Personal Development (300 topics)
    "Planning My Online Courses",
    "Tracking My Reading List",
    "Setting My Learning Goals",
    "Managing My Study Schedule",
    "Improving My Language Skills",
    "Scheduling My Skill Practice",
    "Creating My Personal Growth Plan",
    "Building My Knowledge Base",
    "Reducing My Distractions",
    "Hosting Study Groups",
    "Attending Skill-Building Workshops",
    "Learning About New Topics",
    "Practicing My Coding Skills",
    "Setting My Career Goals",
    "Planning My Hobby Projects",
    "Tracking My Craft Progress",
    "Managing My Music Practice",
    "Improving My Artistic Skills",
    "Scheduling My Writing Time",
    "Creating My Hobby Schedule",
    "Building My Creative Portfolio",
    "Reducing My Creative Blocks",
    "Hosting Hobby Meetups",
    "Attending Craft Fairs",
    "Learning About New Hobbies",
    "Practicing My Photography",
    "Setting My Personal Milestones",
    "Planning My Goal Reviews",
    "Booking My Coaching Sessions",
    "Exploring Self-Help Books",
    "Trying Meditation Techniques",
    "Establishing My Growth Habits",
    "Optimizing My Learning Routine",
    "Breaking Procrastination Habits",
    // ... (continues to 300 topics)

    // Travel and Leisure (300 topics)
    "Planning My Weekend Getaways",
    "Tracking My Travel Budget",
    "Setting My Vacation Goals",
    "Managing My Trip Itineraries",
    "Improving My Packing Skills",
    "Scheduling My Flight Bookings",
    "Creating My Travel Checklist",
    "Building My Dream Destinations List",
    "Reducing My Travel Stress",
    "Hosting Travel Planning Sessions",
    "Attending Travel Expos",
    "Learning About New Cultures",
    "Practicing My Travel Photography",
    "Setting My Adventure Goals",
    "Planning My Sightseeing Tours",
    "Booking My Hotel Stays",
    "Exploring Local Attractions",
    "Trying New Leisure Activities",
    "Establishing My Vacation Routines",
    "Optimizing My Travel Plans",
    "Breaking Travel Procrastination",
    "Planning My Movie Nights",
    "Tracking My Game Tournaments",
    "Setting My Relaxation Goals",
    "Managing My Leisure Time",
    "Improving My Hobby Skills",
    "Scheduling My Outdoor Adventures",
    "Creating My Leisure Playlist",
    "Building My Fun Activities List",
    "Reducing My Downtime Boredom",
    "Hosting Game Nights",
    "Attending Cultural Events",
    "Learning About Local History",
    "Practicing My Hiking Skills",
    // ... (continues to 300 topics)

    // Daily Routines (300 topics)
    "Planning My Morning Rituals",
    "Tracking My Wake-Up Times",
    "Setting My Daily Goals",
    "Managing My Morning Tasks",
    "Improving My Wake-Up Routine",
    "Scheduling My Breakfast Prep",
    "Creating My Morning Checklist",
    "Building My Daily Habits",
    "Reducing My Morning Stress",
    "Hosting Morning Routine Challenges",
    "Attending Time Management Workshops",
    "Learning About Productivity Hacks",
    "Practicing My Morning Stretches",
    "Setting My Evening Goals",
    "Planning My Nightly Wind-Down",
    "Tracking My Sleep Schedule",
    "Managing My Evening Tasks",
    "Improving My Bedtime Routine",
    "Scheduling My Next-Day Prep",
    "Creating My Evening Checklist",
    "Building My Nightly Habits",
    "Reducing My Evening Distractions",
    "Hosting Evening Routine Meetups",
    "Attending Productivity Seminars",
    "Learning About Habit Formation",
    "Practicing My Evening Reflection",
    "Setting My Time Management Goals",
    "Planning My Daily To-Do List",
    "Booking My Focus Sessions",
    "Exploring Time-Blocking Techniques",
    "Trying New Routine Apps",
    "Establishing My Daily Schedule",
    "Optimizing My Task Prioritization",
    "Breaking Bad Routine Habits",

    // Aging and Elder Care
    "Scheduling Regular Health Check-ups for Seniors",
    "Managing Medication Schedules for Aging Parents",
    "Planning for Chronic Disease Management",
    "Researching Alternative Therapies for Seniors",
    "Arranging Home Health Care Services",
    "Reviewing Financial Statements with Parents",
    "Updating Power of Attorney Documents",
    "Managing Finances for Long-term Care",
    "Researching Government Benefits and Programs",
    "Keeping Records of Medical History and Treatments",
    "Ensuring Legal Documents Are Up-to-Date",
    "Managing Trusts and Estates",
    "Planning for Inheritance and Asset Distribution",
    "Dealing with Tax Implications for Seniors",
    "Arranging for Charitable Giving",
    "Researching Assisted Living Options",
    "Ensuring Home Safety for Aging Parents",
    "Arranging for Home Modifications",
    "Planning for Power Outages or Natural Disasters",
    "Facilitating Hobbies and Interests",
    "Communicating Effectively with Aging Parents",
    "Seeking Help from Family and Friends",
    "Encouraging Social Interaction with Peers",
    "Managing Caregiver Burnout",
    "Joining Support Groups for Caregivers",

    // Childcare and Parenting
    "Planning My Child’s Daily Routine",
    "Tracking My Kids’ Schedules",
    "Managing Meal Times for Children",
    "Organizing Childcare Drop-offs and Pick-ups",
    "Ensuring Adequate Sleep for Kids",
    "Helping with Homework Assignments",
    "Planning Educational Outings",
    "Researching After-School Programs",
    "Setting Up a Study Space at Home",
    "Encouraging Reading Habits",
    "Planning Family Game Nights",
    "Organizing Weekend Outings",
    "Hosting Birthday Parties",
    "Creating Family Tradition Events",
    "Scheduling Family Movie Nights",
    "Scheduling Pediatrician Visits",
    "Managing Child Vaccinations",
    "Teaching First Aid to Kids",
    "Ensuring Home Safety for Children",
    "Planning Emergency Contacts",
    "Discussing Feelings with My Child",
    "Encouraging Emotional Expression",
    "Managing Sibling Rivalries",
    "Supporting Through Life Transitions",
    "Promoting Positive Self-Esteem",

    // Immigration and Relocation
    "Researching Immigration Laws",
    "Applying for Visa Extensions",
    "Tracking Application Status",
    "Preparing for Citizenship Tests",
    "Managing Work Permits",
    "Finding Housing in a New Country",
    "Arranging Moving Services",
    "Setting Up Utilities",
    "Planning Neighborhood Exploration",
    "Organizing Furniture Purchases",
    "Learning Local Customs",
    "Practicing the Local Language",
    "Joining Cultural Exchange Programs",
    "Exploring Local Festivals",
    "Adapting to New Social Norms",
    "Reviewing Tax Obligations in New Country",
    "Setting Up Bank Accounts",
    "Managing Currency Exchange",
    "Ensuring Legal Documentation",
    "Planning for Healthcare Access",
    "Joining Local Community Groups",
    "Attending Welcome Events",
    "Finding Local Support Networks",
    "Participating in Community Activities",
    "Building Social Connections",

    // Military and Veteran Affairs
    "Managing Veteran Benefits Applications",
    "Planning for Military Deployment",
    "Researching Educational Opportunities for Veterans",
    "Organizing Support for Military Families",
    "Tracking Military Service Records",
    "Arranging Counseling for PTSD",
    "Exploring Job Placement Services for Veterans",
    "Planning Retirement from Military Service",
    "Coordinating with Veteran Service Organizations",
    "Ensuring Access to Healthcare Services",
    "Managing GI Bill Benefits",
    "Organizing Military Reunions",
    "Researching Housing Programs for Veterans",
    "Planning for Military Relocations",
    "Tracking Military Pay and Allowances",
    "Arranging for Dependent Care During Deployments",
    "Exploring Volunteer Opportunities for Veterans",
    "Coordinating with Legal Services for Veterans",
    "Managing Military Pension Plans",
    "Planning for Transition to Civilian Life",

    // Space Exploration and Astronomy
    "Stargazing on Clear Nights",
    "Learning About Exoplanets",
    "Tracking Space Mission Launches",
    "Planning a Visit to an Observatory",
    "Exploring Astrophotography",
    "Researching Black Holes",
    "Organizing a Space-Themed Movie Night",
    "Building a Model Rocket",
    "Attending Astronomy Workshops",
    "Tracking Meteor Showers",
    "Learning About Constellations",
    "Planning a Trip to a Space Museum",
    "Researching the History of Space Exploration",
    "Organizing a Star Party",
    "Exploring Virtual Reality Space Tours",
    "Tracking Satellite Launches",
    "Learning About Space Telescopes",
    "Planning a Lunar Observation Night",
    "Researching Space Colonization",
    "Organizing a Space Science Fair",

    "a Community Art Initiative", "My Weekly Meal Prep",
    "New Self-Care Routines", "an Eco-Friendly Packaging Plan",
    "a Local Youth Basketball League", "My Fiction Writing Workshop",
    "a Peer Coding Meetup", "Better Time-Blocking Methods",
    "a Rock Collecting Hobby", "My Film Photography Darkroom",
    "Urban Stormwater Solutions", "an Astronomy Night Event",
    "Robotics Tutorials for Kids", "a VR Escape Room Prototype",
    "Improvised Comedy Sessions", "Animal Therapy Classes",
    "My Botanical Illustration Project", "a Zero-Waste Grocery Service",
    "Public Speaking Workshops", "an Online Game Tournament",
    "Festive Lantern-Making", "New Sales Funnel Experiments",
    "a Local History Preservation Group", "an AI-Driven Recipe Builder",
    "a Nonprofit Fundraising Gala", "3D Modeling for Figurines",
    "a Drone Surveying Initiative", "a Microgreens Business Plan",
    "Holographic Art Installations", "a Mobile Tea Stand Concept",
    "Coding a Fitness Tracker", "a Water Filtration Experiment",
    "My City Beautification Proposal", "an In-Home Library System",
    "a Mobile Recycling Pickup Service", "My Cheese-Tasting Club",
    "DIY E-Textiles Clothing", "Modern Calligraphy Designs",
    "an Augmented Reality Walking Tour", "an Indie Film Screening",
    "a Language Immersion Retreat", "Unique Wedding Decor Ideas",
    "a Cliff Diving Expedition", "Minimalist Interior Redesign",
    "a DIY Laser Engraver Build", "Urban Foraging Adventures",
    "My Bullet Journaling Plan", "Creating K-Pop Dance Covers",
    "Hosting an Anime Viewing Party", "a Homebrewing Competition",
    "My Rock Climbing Training Program", "an At-Home Art Museum Day",
    "a Biking for Charity Marathon", "an Ice Sculpting Workshop",
    "a Coding Bootcamp for Beginners", "an Amateur Astronomy Club",
    "High-Protein Meal Challenges", "Setting Up a Market Stall",
    "a Community Crochet Marathon", "Online Vocal Training Sessions",
    "My Skateboarding Trick Guide", "a Motion Capture Dance Studio",
    "Upcycling Jeans into Bags", "an E-Sports Summer Camp",
    "Generating Urban Farming Ideas", "Reviving Old Ship Blueprints",
    "Launching a Local Poetry Podcast", "Making a Mythology Book Club",
    "Hosting Retro Gaming Livestreams", "a Portable Solar Panel Build",
    "Building a Starship Model", "an Online Meditation Retreat",
    "Puppet-Making for Kids’ Shows", "an Experimental Baking Class",
    "My Comic Book Character Outlines", "a Local Haunted Places Map",
    "Setting Up a Karaoke Contest", "Making an Indoor Jungle",
    "Pet-Friendly Cafe Concepts", "Climbing a 14er Mountain",
    "Stocking a Community Fridge", "a 24-Hour Movie Marathon",
    "Designing Fantasy Armor", "Robotics for Environmental Cleanup",
    "Hosting a Small Renaissance Fair", "Doing a Drone Light Show",
    "Inventing Household Gadgets", "an All-Inclusive Sports League",
    "a Local “Kindness Rocks” Project", "Creating a Cat Playground",
    "Mastering Abstract Painting", "a Parkour Community Session",
    "Collecting Retro Pins and Patches", "DIY Wooden Candle Holders",
    "an At-Home Fashion Showcase", "a Rainwater Harvesting System",
    "an Arduino-Powered Smart Garden", "Planning a Sushi Rolling Night",
    "Coding a Chatbot for Book Recommendations", "Designing Tiny House Furniture",
    "My Robot Lawn Mower Idea", "Organizing an International Food Potluck",
    "Exploring a Town-Wide Garage Sale", "Writing Flash Fiction Challenges",
    "Building a Website for Local Artists", "Shooting a Silent Film",
    "Local Earthquake Preparedness Drills", "Growing an Oyster Mushroom Farm",
    "Setting Up a Natural Dye Workshop", "My DIY Clay Pottery Studio",
    "Welding Basics for Beginners", "Urban Tree Mapping",
    "Revamping an Old Cargo Bike", "a Kids’ Hackathon",
    "Sorting Out a City Mural Competition", "Making a Virtual Choir",
    "Developing an Underwater Drone", "a Plastic-Free Household Journey",
    "Learning Piano Concertos", "Gathering Rare Comic Books",
    "Implementing Smart Home Routines", "Testing a Gravity-Powered Lamp",
    "Travel Vlogging Through Historic Towns", "a Guerilla Gardening Initiative",
    "Designing Ornamental Iron Gates", "Creating an At-Home Podcast Studio",
    "Renovating a Century-Old Farmhouse", "Setting Up a Film Preservation Society",
    "Making Robot Combat Competitions", "Starting a Micro-Loan Community Fund",
    "Arranging a Vintage Car Rally", "Publishing a Local Newsletter in Print",
    "Composing Choral Arrangements", "Doing Experimental Theater",
    "Producing a Web Series on Local Cuisine", "Testing Zero-Grav Baking (Concept)",
    "Joining an Amateur Rocket Club", "Sketching an Illustrated Cookbook",
    "Creating Themed Subscription Boxes", "Training for a Bodybuilding Show",
    "Setting Up a Reflexology Class", "Planning a Holiday Caroling Route",
    "Organizing an International Pen Pal Circle", "Writing a Paranormal Investigation Blog",
    "Making a Houseplant Adoption Service", "Filming Stop-Motion Animations",
    "Hosting an All-Night Hackathon", "My Genealogy Deep Dive",
    "Creating an Interactive Museum Exhibit Plan", "Breeding Exotic Goldfish",
    "Budgeting for a Round-the-World Trip", "Starting a Pop-Up Library on Wheels",
    "Adopting a Highway for Cleanup", "Launching a Citywide Book Crossing Event",
    "Composing a Tribute Song Album", "Nature Journaling in the Woods",
    "Repurposing a Phone Booth for Mini Libraries", "Setting Up a Local Theater Troupe",
    "Mastering Leather Crafting", "Reviewing Local Street Food Vendors",
    "Building a Portable Recording Booth", "Studying Ancient Weaving Techniques",
    "Coding a Weather Monitoring Station", "Hosting a Monument Photography Challenge",
    "Local Museum Docent Training", "Designing a Citywide Mural Tour Map",
    "Developing a Charity Puzzle Hunt", "Remodeling a Dingy Basement",
    "Planning a Week-Long Digital Detox", "Creating a Kids’ Science TV Show Pitch",
    "Growing Hydroponic Lettuce for Sale", "Arranging a Sailboat Race",
    "Making a Faux Fur Clothing Line", "Aerial Silks Beginner Class",
    "Perfecting a Latte Art Competition", "Partnering with Beekeepers for Urban Hives",
    "Renovating a Historic Inn", "Crowdsourcing Traditional Family Recipes",
    "Mapping Bird Migratory Patterns", "Starting a Quilting Circle",
    "Hosting a Retro Car Drag Race", "Collaborating on a Graffiti Cleanup",
    "Reviving an Old Browser Game", "Building Theatrical Props",
    "Scheduling a Flea Market Weekend", "Making a Habitat for Endangered Pollinators",
    "Studying Stage Lighting Techniques", "Cultivating a Rare Orchid Terrarium",
    "Designing a Community Chalk Art Festival", "Composing Ambient Electronic Music",
    "Converting a Shipping Container into a Cafe", "Exploring AI-Generated Art Pieces",
    "Inventing a Digital Board Game", "Teaching a Birdwatching 101 Class",
    "Creating Living Walls Indoors", "Planning a Drone Treasure Hunt",
    "Restoring a Historic Schoolhouse", "Documenting Local Natural Springs",
    "Starting a Street Dance Battle Series", "Painting Mandala Stones",
    "Designing a Card Game for Kids", "Developing an Educational Mobile App",
    "Hosting a Mythology Trivia Night", "Creating a Multi-Lingual Poetry Anthology",
    "Reimagining an Old Playground", "Organizing Night Photography Sessions",
    "Teaching Gymnastics at a Rec Center", "Running a Watercolor Postcard Exchange",
    "Launching a Craft Beer Bus Tour", "Staging a Shakespeare Monologue Night",
    "Composting on a Larger Scale", "Developing a Retro TV Show Podcast",
    "Refinishing a Vintage Organ", "Setting Up Goat Yoga Classes",
    "Working on a Community Clothing Swap", "Implementing Gamification in Workouts",
    "Mastering Hand Embroidery", "Printing Custom Decals for Laptops",
    "Hosting a Digital Detox Summer Camp", "Collecting Rare Antiques for Auction",
    "Filming a Micro-Documentary on Local Craftspeople", "Setting Up an Outdoor Reading Nook",
    "Trying a House Swap Vacation", "Starting a Women’s Self-Defense Meetup",
    "Designing Eco-Conscious Gift Baskets", "Organizing a Sci-Fi Short Film Festival",
    "Writing Personalized Wedding Vows for Clients", "Renovating a Historic Lighthouse",
    "Refurbishing an Old Train Car", "Teaching Teen Entrepreneurship",
    "Planning a Child-Friendly Triathlon", "Creating a Veteran Storytelling Podcast",
    "Practicing Log Cabin Restoration", "Building a Telescope from Scratch",
    "Organizing a Glow-in-the-Dark Art Show", "Documenting Urban Wildlife Corridors",
    "Starting a Claymation YouTube Channel", "Learning to Conduct an Orchestra",
    "Exploring Kinetic Sculpture Designs", "Going On a Food Truck Road Trip",
    "Renovating Old Children’s Playground Equipment", "Building a Community VR Lab",
    "Painting a Floor Mural", "Setting Up a Sound Bath Experience",
    "Making a Miniature Battle Diorama", "Arranging a Tenth-Anniversary Expo",
    "Contributing to a Local Historical Archive", "Customizing a Skatepark Layout",
    "Adopting a Section of River for Cleanup", "Storyboarding an Animated Short",
    "Hosting a Lantern Walk in the Woods", "Developing an Eco-Tour of My City",
    "Trying Out Large-Scale Loom Weaving", "Mapping Local Legends and Folklore",
    "Composing a Meditation Music Album", "Designing DIY Electric Longboards",
    "Launching a Winter Book Drive", "Reviewing Street Performers for a Local Guide",
    "Collecting and Cataloging Vintage Sheet Music", "Forming a Drone Delivery Co-op",
    "Creating an Underwater Photography Club", "Organizing a 5K for Education",
    "Supporting a Senior Care Music Therapy Program", "Building a Wind-Powered Phone Charger",
    "Conducting a Historical Cemetery Tour", "Planning a Citywide Hiking Challenge",
    "Starting a Woodblock Printmaking Course", "Performing Guerilla Theater in Public Spaces",
    "Growing a Rice Paddy in My Yard", "Arranging a Jazz Night at a Community Hall",
    "Running a Weekly Electronics Swap", "Prototyping a Self-Sustaining Aquaponics Dome",
    "Designing a Home Catwalk for a Fashion Show", "Repairing a Local Bridge Mural",
    "Initiating a Community Bocce Ball League", "Composing a DIY Mystery Theater Box",
    "Publishing a Student Poetry Magazine", "Fostering a Homeless Pet Program",
    "Creating a Micro-Forest in an Urban Lot", "Hosting a City Lights Photography Tour",
    "Renovating a Derelict Observatory", "Establishing a Bookbinding Workshop",
    "Trying Out High-Altitude Gardening", "Sharing Sleepover Astronomy for Kids",
    "Organizing a “Taste of The World” Sampler", "Staging a Daily Cartooning Challenge",
    "Sponsoring a Local Filmmakers’ Meetup", "Designing a Streetwear Capsule Collection",
    "Teaching Adult Literacy Evenings", "Launching a “Mobile Gym” Project",
    "Baking World Record-Sized Cookies", "Coordinating a Community Security Drone Program",
    "Planning a Cliffside Yoga Retreat", "Practicing Ax Throwing Skills",
    "Building an Off-Road Wheelchair Trail", "Testing 3D-Printed Orthotics",
    "Reviewing Spicy Foods for a Local Blog", "Collecting Seeds for Reforestation",
    "Creating a VR Puppet Theater", "Training to Become a Master Composter",
    "Developing an Insect Protein Startup", "Filming a Theater in Virtual Reality",
    "Growing a Bonsai Maple Forest", "Setting Up Birdhouses in Public Parks",
    "Hosting a Retro “LAN Party” Revival", "Founding a Plant Swap Community",
    "Showing School Kids How to Sew", "Remodeling a Historic Church Kitchen",
    "Exploring E-Paper Signage Innovations", "Organizing an Indoor Snowball Fight",
    "Teaching a Class on Coral Reef Restoration (Virtual)", "Designing a Cooperative Pet Food Pantry",
    "Conducting a “Silent Disco” in the Park", "Renovating a Community Barn for Events",
    "Planning a Snake Handling Safety Course", "Writing a Haiku Anthology",
    "Creating a Glass Mosaic for a Public Wall", "Bicycle Touring Across the State",
    "Building a Solar Cooker Workshop", "Forming an Amateur Kart Racing League",
    "Teaching Sign Language in Virtual Sessions", "Exploring Time Capsule Traditions",
    "Writing an Interactive Fiction App", "Organizing a Punk Rock Flea Market",
    "Collaborating on a Garden-to-Table Cookbook", "Starting a Board Game Cafe Concept",
    "Making a Greenhouse from Recycled Windows", "Hosting a Hip-Hop Dance Night",
    "Renovating a Trailer for a Mobile Tattoo Studio", "Experimenting With Glow-in-the-Dark Paint",
    "Crafting Intricate Gingerbread Houses", "Staging a Chess-in-the-Park Club",
    "Creating a Tiny Aquarium Ecosystem", "Coloring Old Historic Photos",
    "Coordinating a House Concert Series", "Leading a Whale-Watching Expedition",
    "Reusing Glass Bottles in Construction", "Arranging a Costume Crawl Downtown",
    "Filming a Music Video in Public Spaces", "Teaching an Outdoor Survival Workshop",
    "Developing a Town Tree Inventory System", "Curating a Local Cookbook on Family Recipes",
    "Making Beehive-Shaped Candle Holders", "Setting Up a Swing Dancing Meetup",
    "Repairing a Local Historic Carousel", "Organizing a Karaoke for Charity Event",
    "Selling Local Handicrafts Abroad", "Designing Paper Cut Art Installations",
    "Studying Traditional Charcoal Drawing", "Preparing a Kids-Only Film Festival",
    "Leading a Scrap Metal Sculpture Class", "Setting Up a Vintage Poster Exhibit",
    "Creating a Custom Pinball Machine", "Automating a Home Beer Brewery",
    "Planning a Rural Bike Race", "Founding a Senior Meal Share Program",
    "Designing a Sensory Garden for Autism", "Staging a Street Cook-Off Competition",
    "Tiling a Community Mosaic Floor", "Showing Kids Basic Bike Mechanics",
    "Hosting an Iron Chef Family Challenge", "Organizing a Springtime Flower Parade",
    "Coding a Minimalist Music Sequencer", "Collecting Historical Newspaper Clippings",
    "Setting Up a “Pay It Forward” Coffee Stand", "Restoring a Classic Diner Car",
    "Making Eco-Bricks from Plastic Bottles", "Documenting Urban Farms with Photography",
    "Assembling a City Compost Team", "Introducing a VR Birdwatching App",
    "Painting a Neighborhood Fence Mural", "Starting a Home Cheese Aging Cellar",
    "Myth-Busting Local Urban Legends", "Conducting Drone Aerobatics Routines",
    "Learning Rope Bridge Construction", "Designing a City-Wide WiFi Mesh Network",
    "Arranging a Non-Traditional Music Recital", "Refurbishing Furniture for Shelter Homes",
    "Teaching an Intro to Morse Code", "Coding a Simple Weather App",
    "Renovating an Abandoned Cabin", "Hosting a Pet Social Media Contest",
    "Opening a Micro-Hotel in My Backyard", "Reviving Colonial-Era Crafts",
    "Building a Custom Motorized Cooler Cart", "Taking a Crash Course in Ceramics",
    "Teaching a Wilderness Navigation Course", "Organizing a Cyberpunk Cosplay Meetup",
    "Testing a Multi-Day Meditation Immersion", "Surveying Local Streams for Pollution",
    "Composing a Sci-Fi Radio Drama", "Designing Roller Derby Team Uniforms",
    "Launching a “Secret Santa for Strangers” Project", "Wiring Up a Bike for Night Rides",
    "Planning a Kids’ City Government Simulation", "Documenting Tree Carvings and Inscriptions",
    "Creating a Neighborhood Barter System", "Learning Advanced String Puppetry",
    "Publishing an Amateur Astronomy Zine", "Drafting Plans for a Solar-Powered Carport",
    "Fostering Orphaned Kittens for Adoption", "Arranging a City Sled Dog Demonstration",
    "Starting a Yarn Bombing Initiative", "Building an Urban Zip Line",
    "Crocheting Hyperbolic Geometry Models", "Establishing a Nanny Share Network",
    "Opening a Free Bike Repair Stand", "Training a Therapy Mini Horse",
    "Mapping Local Crime Data for Safety", "Constructing an Archery Range",
    "Developing a Virtual Comic Con", "Painting Planters Around Town",
    "Designing an Underground Speakeasy Experience", "Organizing a Chocolate Tasting Festival",
    "Reviewing All the Local Food Trucks", "Creating a Portable Pizza Oven",
    "Running a Multi-Camera Livestream for Events", "Developing a Synthetic Biology Club",
    "Piloting a Driverless Mini Bus Route", "Building a Green Roof on My Garage",
    "Teaching Beginner Horsemanship", "Planning a Massive Paper Airplane Contest",
    "Coordinating a Hedgehog Awareness Day", "Setting Up a Drone Search and Rescue Demo",
    "Publishing a Kids’ Mystery Story", "Practicing Free Diving Techniques",
    "Organizing a Local Retro Computer Fair", "Drafting a Family Cookbook Heirloom",
    "Staging an International Drum Circle", "Mastering Korean Ceramics",
    "Designing an LED Light Art Installation", "Hosting a Pixel Art Challenge",
    "Making a Citywide “Tag, You’re It!” Game", "Exploring a Mobile Museum Concept",
    "Packaging Freeze-Dried Meals for Camping", "Renovating a Run-Down Houseboat",
    "Training for a Circus Aerial Hoop Act", "Producing an Urban Legends Podcast",
    "Collecting Forgotten Folklore Traditions", "Mapping Out an Alternative Transportation Plan",
    "Curating a Macabre Victorian Photo Exhibit", "Launching a Child-Designed Invention Fair",
    "Pitching a Short Film to Festivals", "Documenting Handwritten Family Letters",
    "Organizing a Wood-Burning Art Workshop", "Conducting a Fencing Demonstration",
    "Founding a Local Retro Tech Museum", "Coding an Offline-First Mobile App",
    "Creating an Urban Orchard Proposal", "Experimenting with Candle-Making Perfumes",
    "Planning a Sustainable Seafood Potluck", "Staging a Local Marathon for Veterans",
    "Developing an Interactive Nature Trail", "Surveying a Historic Battle Site",
    "Trying a 30-Day Singing Challenge", "Donating Upcycled Furniture to Foster Homes",
    "Hosting a Mental Health Support Brunch", "Renovating an Old Motel into Tiny Apartments",
    "Choreographing a Contemporary Dance Performance", "Launching a Drive-In Concert Series",
    "Learning to Make Wooden Musical Instruments", "Organizing a Two-Day Vegan Fest",
    "Researching Edible Insects for Protein", "Crafting a Time-Travel Themed Short Play",
    "Planning an Art Therapy Day for Seniors", "Creating a Miniature Railroad in the Yard",
    "Strategizing a Free Local Tech Bootcamp", "Publishing a Charity Photo Calendar",
    "Refurbishing Retro Gaming Consoles", "Collaborating on a City Flower Planting Day",
    "Brainstorming Wearable Tech Projects", "Filming a Virtual 360 Tour of My Hometown",
    "Organizing a Beach Picnic for Singles", "Establishing a Scholastic E-Sports League",
    "Working on a Crafts-for-Kindness Initiative", "Managing a Pet Costume Pageant",
    "Documenting Architecture in Watercolors", "Mastering Thai Fruit Carving",
    "Setting Up a Local Bike Rental Kiosk", "Developing AI Dungeons for Roleplay",
    "Volunteer-Run Street Sweeping Sessions", "Coding My Own POS System",
    "Planning a Whole-Food Cooking Class", "Hosting an Icebreaker Games Night",
    "Making a Pop-Up Greenhouse Village", "Studying Clay Animation Techniques",
    "Starting a Video Essay Channel", "Refurbishing a World War II Monument",
    "Exploring Alternative Housing Co-ops", "Designing LED Costumes for Performers",
    "Arranging a Pet Photography Exhibit", "Upcycling Plastic Bags into Mats",
    "Creating a Drone Footage Collage Film", "Planting a Fairy Garden in an Old Tree Stump",
    "Organizing a Salsa Rueda Flash Mob", "Researching Rare Farm Animal Breeds",
    "Drafting a Neighborhood “Slow Streets” Petition", "Publishing a Kids’ Recycling Guide",
    "Staging a Bubble-Blowing Competition", "Mapping Accessibility Ramps in the City",
    "Planning an Underground Music Exchange", "Writing a Podcast on Unsung Local Heroes",
    "Doing Large-Scale Mosaic Art on Sidewalks", "Creating Recycled Metal Jewelry",
    "Renovating a Faded Mural by the Seaside", "Turning a Basement Into a VR Arcade",
    "Teaching Basic Electronics to Scouts", "Staging a Pet-Loving Community Meetup",
    "Exploring a Zero-Waste Restaurant Model", "Leading a Stargazing Hike at Night",
    "Designing a Board Game Based on Real Landmarks", "Organizing a 48-Hour Filmmaking Challenge",
    "Mapping Out an Urban Treehouse Hotel Idea", "Testing Urban Aquaculture with Tilapia",
    "Founding a Digital Skills Bootcamp for Seniors", "Getting a Local Farmers’ Market on Wheels",
    "Coordinating a Charity Skateathon", "Renovating a Shipping Container Home Park",
    "Setting Up a City Marathon with a Twist", "Inventing an Artistic Use for Coffee Grounds",
    "Coding a Minimalist To-Do App", "Mastering European Paper Cutting",
    "Curating a Neighborhood Photo Archive", "Blending Up a Smoothie Bar Pop-Up",
    "Painting Birdhouses with Kids", "Proposing a Rewilding Project in the Suburbs",
    "Writing a Mockumentary Screenplay", "Designing Virtual Reality Language Lessons",
    "Staging a Sweet and Savory Crepe Off", "Practicing Eco-Dyeing with Flowers",
    "Collecting Retro Telephones", "Launching a Classroom Earthquake Drill Program",
    "Vlogging a Day-in-the-Life Series", "Preparing a Local Test Kitchen Studio",
    "Hosting a Guitar Jam Under the Stars", "Creating a DIY Skincare Workshop",
    "Renovating a Sheep Barn into a B&B", "Documenting Roadside Oddities on Video",
    "Planning a Free City WiFi Infrastructure", "Building a Mini Library Treehouse",
    "Learning to Speed Paint Landscapes", "Partnering with a Local Wildlife Rescue",
    "Setting Up a Competitive BBQ Team", "Mapping an Underground Bunker Tour",
    "Publishing a City Travel Guide E-Book", "Building a Kids’ Ghost Story Circle",
    "Creating a Group Puppetry Performance", "Starting a T-Shirt Screen Printing Session",
    "Hosting a Cosplay Tea Party", "Renovating a Double-Decker Bus for Tours",
    "Designing an App for Secondhand Clothing Swaps", "Teaching a Community Meme-Making Class",
    "Turning Old Cassettes Into Decorative Art", "Leading a Canoe Cleanup on the River",
    "Refurbishing Retro Appliances", "Collecting Local Legends in Short Stories",
    "Coding a Blockchain Charity Donation System", "Making a Zero-Waste Picnic Challenge",
    "Planning a Grammar School Play Production", "Doing a Retro 90’s Throwback Party",
    "Fostering Micro Habitat Corridors for Urban Wildlife", "Hosting a Halloween Costume Run",
    "Designing a Board Game for Language Learners", "Creating an Interactive Music Playground",
    "Launching a Volunteer Firefighter Awareness Night", "Restoring a Life-Size Dinosaur Model",
    "Building a Tiny Wood-Fired Sauna", "Surveying Ruins in a Nearby Forest",
    "Arranging a Bicycle-Fueled Outdoor Cinema", "Teaching Water Polo to Local Youth",
    "Conducting a Seashell Identification Workshop", "Exploring AI-Based Musical Compositions",
    "Organizing a Selfie Scavenger Hunt", "Renovating a Train Station Lounge",
    "Starting an Edible Flower Garden", "Filming Historical Reenactments",
    "Teaching Vintage Swing Dance", "Developing a Fleet of Electric Scooters for Rent",
    "Establishing a Disaster-Proof Community Pantry", "Painting a 3D Trompe-l’œil Sidewalk",
    "Crafting a Lego City Replica of My Neighborhood", "Mastering Glass Etching Designs",
    "Practicing Welsh Language Lessons", "Arranging a Desert Hiking and Camping Trip",
    "Collaborating on an Open-Source Prosthetic Hand", "Creating a Shakespeare Reading Podcast",
    "Refinishing a Wood-Fired Pottery Kiln", "Investigating Retro Underground Bunkers",
    "Documenting a Local Opera Scene", "Offering a Free Bike Helmet Fitting Station",
    "Making a Micro Camping Trailer", "Organizing a Folk Tale Illustration Workshop",
    "Conducting a Pirate-Themed Parlay Night", "Introducing a School Hydroponics Lab",
    "Founding a Local Art Reuse Center", "Becoming a Public Notary for Charity",
    "Publishing a Kids’ Mad-Libs Book", "Teaching an Intro to VR Filmmaking",
    "Renovating an Old Bridge for Pedestrian Use", "Curating a Community Pinboard for Ideas",
    "Mapping Out a “Drinking Water Fountain” Network", "Hosting a Science-Fact vs. Science-Fiction Panel",
    "Mastering Ice Cream Cake Decoration", "Forming a Collegiate Coding Contest",
    "Arranging a Drive-Thru Farm Tour", "Designing a Bioluminescent Algae Display",
    "Sharing an Urban Folklore Video Series", "Building a Paper Dome Structure",
    "Leading a DIY Graffiti Art Class", "Carving Giant Pumpkins for a Fall Fest",
    "Refurbishing a Vintage Carousel Horse", "Organizing an Acoustic Porch Fest",
    "Trying a “Living Off the Land” Challenge", "Coding a Bot to Sort My Digital Photos",
    "Planning a Pop-Up Vinyl Listening Party", "Celebrating an Obscure Holiday with Themed Snacks",
    "Brainstorming a Multi-Faith Dialogue Group", "Experimenting with Smoke Bomb Photography",
    "Conducting a Whale Song Music Analysis", "Testing an Automated Composter Design",
    "Repairing Old Cemetery Tombstones", "Hosting a Graffiti Art Auction for Charity",
    "Building a Solar Tree for USB Charging", "Documenting Sewers in a Historic District",
    "Updating a Historic Jail into a Museum", "Teaching a Neighborhood Craft Class",
    "Designing an Urban Bee Sanctuary", "Collecting Votes on a Micro Housing Ordinance",
    "Prototyping a Home Water Recycling System", "Arranging a Macaron Baking Masterclass",
    "Forming a Vertical Farming Co-op", "Painting a Trompe-l’œil Mural in a Library",
    "Raising Heritage Chickens", "Exploring Zero-Gravity Physics (Educational Series)",
    "Tracking Local Microclimates", "Coordinating a Home Wi-Fi Mesh for Neighbors",
    "Creating a LEGO Olympiad for Families", "Doing a Helicopter Tour Photography Project",
    "Developing a VR Kindergarten Classroom", "Designing Wearable Arduino Projects",
    "Renovating an Old Airplane for Exhibits", "Starting a Mobile DJ Truck",
    "Placing Little Free Toy Libraries in Parks", "Writing a Cozy Mystery Trilogy",
    "Setting Up a Bee or Wasp Hotel", "Constructing a Kids’ Business Fair",
    "Analyzing Street Drainage for Environmental Impact", "Hosting a School Supply Drive",
    "Creating a Newsletter on Natural Remedies", "Organizing Chess Matches in Coffee Shops",
    "Managing a Solar-Powered Art Display", "Recording Binaural Soundscapes",
    "Refinishing an Old Viking Ship Replica", "Collaborating on a Multi-Cuisine Food Truck Festival",
    "Staging a Nerd Trivia Pub Crawl", "Coordinating a Charity “Fun Run” for Elders",
    "Practicing Perfect Latte Art Swans", "Setting Up a Sanctuary for Native Plants",
    "Coding a VR Art Gallery Tour", "Planning a Sock Drive for the Homeless",
    "Documenting a Historic Underground Railroad Route", "Building an Open-Source 3D Printer",
    "Organizing a Weekend Sewing Marathon", "Writing a Book on Urban Legends",
    "Implementing a Neighborhood Watch Drone Patrol", "Sketching Rare Bird Species in Watercolor",
    "Designing a Giant Slide for a Park", "Training to Be a Circus Acrobat",
    "Preparing a “Kids in the Kitchen” Cooking Series", "Reviewing Local Fishing Holes",
    "Renovating a Historic Courthouse Lobby", "Converting an Old Barn into an Eco-Lodge",
    "Teaching a Crash Course in Soldering", "Building an Ice Rink in My Backyard",
    "Planning a “Running of the Bulldogs” Costume Event", "Designing a Geothermal Heating Setup",
    "Hosting a Family Geocaching Tournament", "Curating Music from Non-English Bands",
    "Making a Free Babysitting Exchange", "Reprogramming a Robot Vacuum to Paint",
    "Organizing a Sew-Your-Own-Stuffed-Animal Drive", "Staging a Beach Bonfire Music Jam",
    "Pulling Off a Town-Wide Water Balloon Fight", "Managing an Amnesty Book Return Program",
    "Planning a Noodle-Making Class", "Trying to Beat a World Record for Paper Airplanes",
    "Composting Seaweed for Soil Enrichment", "Designing a Local Honey Tasting Event",
    "Coordinating a Citywide Library Card Sign-Up", "Exploring Pastel Plein Air Painting",
    "Launching a Sculpture Scavenger Hunt", "Upcycling Vintage Earrings",
    "Arranging a Bicycle-Powered Art Show", "Developing a Marine Life Education Truck",
    "Filming a Local Polar Plunge Challenge", "Testing a Home-Built Mini Submarine",
    "Teaching a Kids’ Workshop on Japanese Drums", "Publishing a Dog Breed Anthology Book",
    "Building an Automatic Chicken Feeder", "Planning an Indoor Rock Garden Exhibit",
    "Conducting a “Swim with the Mermaids” Event", "Painting Murals on Community Mailboxes",
    "Hosting a Candle-Making Movie Night", "Collecting and Polishing Sea Glass",
    "Mastering Chakra Meditation Techniques", "Curating a Spooky Sound Effects Library",
    "Leading an All-Instrument Jam Session", "Developing an Interactive Tarot Reading App",
    "Restoring Old Glass Windows from a Church", "Organizing a Pioneer Skills Workshop",
    "Designing an Edible Hedge Maze", "Learning to Sew Weighted Blankets",
    "Prototyping a Portable Hydro-Electric Generator", "Arranging a Needle Felting Class",
    "Planning a Museum Night for Homeschoolers", "Sponsoring a Day of Street Performers",
    "Brewing Craft Sodas at Home", "Conducting a Houseplant Swap Brunch",
    "Surveying City Architecture for Preservation", "Raising Silkworms for Homemade Silk",
    "Writing a “Haunted History” Guidebook", "Organizing a Public “Type-In” Event with Typewriters",
    "Mapping Street Lights for Better Night Safety", "Developing a Mobile Payment System for Street Vendors",
    "Hosting a Vegan Dessert Bake-Off", "Planning an Under-16 Youth Debate Competition",
    "Designing a Community Wind Chime Installation", "Filming a Time-Lapse of Urban Growth",
    "Creating an Eco-Brick Playground", "Refurbishing a Horse-Drawn Carriage",
    "Cultivating a Tropical Fruit in Cold Climates", "Organizing a Maple Syrup Harvesting Trip",
    "Initiating a City Parkour Safety Program", "Painting a Stray Animal Adoption Van",
    "Launching a Composting Podcast", "Teaching an Ikebana Flower Arrangement Class",
    "Hosting a Honey Extraction Demo", "Piloting a Zero Emissions Delivery Van",
    "Building a Neighborhood Sauna Bus", "Coding a Personalized Astrology Bot",
    "Starting a Local Women’s Woodshop Collective", "Documenting “Odd Jobs” Around Town",
    "Reviewing Cultural Baking Traditions", "Launching an Old-Fashioned Radio Show",
    "Leading a History Reenactment Summer Camp", "Sketching Cartoons for a Webcomic",
    "Arranging a Ghost Story Telling Campfire", "Collecting Rare Sea Shells for Art",
    "Staging a Town-Wide Junk to Treasure Contest", "Converting a Payphone into a Wi-Fi Kiosk",
    "Planning a Volunteer “Forest Bathing” Retreat", "Building an Ultra-Portable Stage for Performers",
    "Creating Custom Bike Helmets for Kids", "Testing Edible Flower Varieties",
    "Publishing a Photo Essay on Abandoned Places", "Starting a Community Macrame Mural",
    "Programming a Wearable LED T-Shirt", "Coordinating a Horseback River Cleanup",
    "Shooting a VR Theater Production", "Turning Old Bottles into Chandelier Art",
    "Initiating a Bike Messenger Service for Downtown", "Arranging a “Silent Library” Challenge",
    "Learning to Identify Mushrooms Safely", "Designing a USB Charging Bench for Parks",
    "Organizing an Open-Air Cookie Exchange", "Founding a Tiny Museum in a Storefront Window",
    "Developing a Raspberry Pi Weather Balloon", "Sharing Architecture Sketch Tutorials",
    "Refurbishing a Classic Muscle Car", "Teaching a Steel Drum Circle for Youth",
    "Creating a Historical Subway Station Museum", "Hosting a Fundraiser for Musical Instruments",
    "Cultivating a Secret Wildflower Patch", "Restoring a Vintage Elevator Mechanism",
    "Plotting a Citywide Urban Hike Path", "Leading a Child-Friendly Bird Feeders Project",
    "Designing a Virtual “Travel the Globe” Class", "Composing a Gamer Music Remix Collab",
    "Surveying for a Heritage Tree Registry", "Starting a GIANT Paper Snowflake Decorating Drive",
    "Documenting Stone Wall Ruins in the Countryside", "Organizing a Citywide Electric Scooter Race",
    "Offering a Drive-Through Tacos for Charity", "Filming a YouTube Series on Old Tools",
    "Rehabilitating Retired Greyhounds", "Setting Up a Kintsugi Pottery Class",
    "Proposing a Nature Detective Program for Kids", "Curating a Mystery Box Swap",
    "Painting a Glow-in-the-Dark Planet Ceiling", "Exploring Sound Healing Workshops",
    "Coding an AR App for Historical Landmarks", "Trying a Socially Distant Music Festival",
    "Arranging a Pumpkin Smash Compost Event", "Publishing a Citywide “Best Gardens” Photo Book",
    "Turning Fences into Giant Chalkboards", "Planning a Trick-or-Treat for Charity",
    "Renovating an Old School Bus as a Food Truck", "Teaching Basic Drumming to Middle Schoolers",
    "Mapping Accessible Dog Parks", "Collecting Travel Postcards from Each State",
    "Establishing a “Promise Wall” in Town", "Reviewing Earth-Friendly Baby Products",
    "Mastering Embossing on Metal Sheets", "Tracking Whale Migration Patterns",
    "Launching a Local “Plant a Tree” Initiative", "Conducting a Sign Language Choir Performance",
    "Revamping City Benches with Recycled Materials", "Creating a Digital Nomad Networking Event",
    "Building a Minimalist Cabin in the Woods", "Scheduling a Sunflower Maze Walk",
    "Practicing Authentic Thai Fruit Carving", "Surveying Old Fire Lookouts",
    "Doing a Barn Quilt Painting Project", "Creating an Open-Source Town Directory",
    "Testing DIY Laboratory Kits for Kids", "Inventing a Hoverboard Racing League",
    "Dressing Up an Alley with Hanging Lanterns", "Maintaining a Bird Sanctuary Fund",
    "Designing a No-Code Website Workshop", "Producing a Mini Radio Drama Series",
    "Sorting Recycled Metal for Sculpture Art", "Conducting a Mandolin Folk Music Gathering",
    "Developing a Cook-from-Frozen Meal Program", "Analyzing Local Storm Patterns",
    "Staging a “Flea Circus” Carnival Show", "Renovating an Old Petrol Station into a Cafe",
    "Starting a Remote “Steadycam Operator” School", "Writing a Family-Friendy Dungeons & Dragons Module",
    "Organizing a Bicycle Scavenger Hunt", "Leading a Field Trip to a Bee Farm",
    "Planning a Neighborhood Ice Cream Social", "Mastering a New Yoga Pose Each Week",
    "Designing an AI Chatbot for Senior Care", "Reviewing Local Zipline Parks",
    "Gathering Locally Produced Honey Varieties", "Hosting a Junior Lifeguard Camp",
    "Experimenting with Pneumatic Tube Systems", "Reviving 1980s Dance Aerobics",
    "Prototyping a Biochar Kiln", "Composing a Thematic Playlist for a Festival",
    "Setting Up a “Grow Food, Not Lawns” Meetup", "Documenting Farm Animals with Kids",
    "Collecting Old Cameras for a Vintage Museum", "Planning a Winter Lights Walk",
    "Designing Furniture from Recycled Pallets", "Building a Little Free Record Library",
    "Filming a Surf Documentary at the Local Beach", "Creating a Maker Challenge for Pre-Teens",
    "Conceptualizing a Floating Garden", "Hosting a Themed Sci-Fi Dinner Party",
    "Refinishing a 3D Printed Boat", "Teaching Morse Code to Middle Schoolers",
    "Curating a Retro Puzzle Museum", "Organizing a “Swap, Don’t Shop” Event",
    "Sketching an Alternate City Map with Landmarks", "Coding a Slack Bot for Accountability",
    "Training a Pig for Therapy Visits", "Scheduling a Four-Season Picnic Series",
    "Building a Cobb Oven in the Backyard", "Documenting a Collectors’ Showcase on YouTube",
    "Hosting a “Shark Tank”-style Kids’ Invention Contest", "Resurrecting Vintage Farming Equipment",
    "Founding an Origami Competition", "Planning a Town Tree Lighting Ceremony",
    "Arranging a Remote Island Hopping Trip", "Launching a Music Social Network for Locals",
    "Redesigning a Town Square for Accessibility", "Reviewing All the Best Ramen Shops",
    "Implementing a “Map My Run” Group for Beginners", "Trying a Parking Lot Potluck",
    "Refurbishing a Gramophone", "Building a Clay Pizza Oven in a Public Park",
    "Organizing a Parent-Child Coding Club", "Participating in a Food Preservation Collective",
    "Hosting a “Farm to Table” Picnic", "Studying for a Local Tour Guide License",
    "Composing a Minimalist Music Project", "Doing a Weekly Bake Sale for Charity",
    "Mapping Out Proposed Bike Trails with AR", "Setting Up a VR Karaoke Challenge",
    "Writing a Mythical Creature Guide", "Analyzing City Water Usage Patterns",
    "Training in Fire Poi Spinning", "Renovating a Basement as an Art Studio",
    "Turning a Garage into a Dance Floor", "Gathering Rare Antique Recipes",
    "Organizing a Cultural Tasting Safari", "Designing an All-Greens Cookbook",
    "Hosting a Marathon for Shelter Pets", "Creating an Online Clearinghouse for Odd Jobs",
    "Collaborating on an Indoor Food Forest", "Practicing Distilling Essential Oils",
    "Learning Glass Fusing for Jewelry", "Reviewing a Local Ornithology Database",
    "Installing a Community Mini Windmill", "Collecting Symbolic Keys for an Art Project",
    "Planning a Neighborhood Drone Light Show", "Teaching Bioluminescent Algae Cultivation",
    "Refining a Chocolate Bonbon Recipe", "Staging a Friendsgiving for the Whole Block",
    "Coding a Simple Site for Sharing Holiday Lights Locations", "Arranging a Water Gun Tag Competition",
    "Publishing a Book of Real-Life Adventures", "Exploring Recumbent Bike Tours",
    "Documenting Wild Edible Plants in Town", "Planning an Eco Lantern Launch (Biodegradable)",
    "Creating an At-Home Murder Mystery Escape Box", "Mastering Sand Sculpture Techniques",
    "Setting Up a Mini Food Pantry in My Yard", "Learning to Weave Baskets from Natural Fibers",
    "Painting Protest Posters for Community Causes", "Spray Painting a Skate Ramp Art",
    "Organizing a T-Ball League for Toddlers", "Sculpting an Ice Installation for Winter Fest",
    "Founding a Local Trivia Team Circuit", "Hosting a Vintage Cookbook Challenge",
    "Decorating Picnic Tables with Mosaic Tiles", "Renewing a License for a Historic Trolley",
    "Building a Bee Observatory for Kids", "Planning a Carnival-Style Street Fair",
    "Testing New Compost Tea Methods", "Coding a Slack App for Water Intake Reminders",
    "Adopting a Variety of Rare Fruit Trees", "Developing a Wiffle Ball Championship",
    "Designing Educational VR Scenes for Biology", "Filming a “Then and Now” City Documentary",
    "Teaching a Class on Building Cigar Box Guitars", "Running a Virtual Sewing Bee",
    "Arranging a Natural History House Tour", "Painting a Street Intersection Mandala",
    "Renovating a Barn Loft into an Airbnb", "Setting Up a City Bird Counting Contest",
    "Coding a Maze Game for Elementary Students", "Collaborating on a Baker’s Dozen Competition",
    "Hosting an Amateur Circus Acts Night", "Documenting Bird Feeder Footage for Research",
    "Organizing a Winter Window Decorating Tour", "Starting a DIY Film School for Teens",
    "Learning to Operate a Tower Crane (Simulation)", "Launching a Farm Internship Program",
    "Mastering Perler Bead Pixel Art", "Designing Mixed-Reality Tech Workshops",
    "Reviving a Folk Opera Performance", "Developing an Eco-Game for Educators",
    "Writing a Graphic Novel with Kids", "Coordinating a Plant “Wall of Exchange”",
    "Running a Mountain Hiking Skills Clinic", "Staging an 1800s Ball Reenactment",
    "Exploring an Underwater Habitat Project", "Tracking E-Scooter Usage Data",
    "Trying Out a Homemade Infrared Sauna", "Planning a Pop-Up Outdoor Photo Studio",
    "Researching Deaf Culture Through Interviews", "Producing a Classical Music Web Series",
    "Documenting a Single Tree Through Four Seasons", "Renovating a Junkyard Trailer for Glamping",
    "Designing a Virtual Postcard Exchange Site", "Developing a Brain Teasers Workshop",
    "Founding a Senior Citizen Robotics Club", "Teaching Kids to Train Service Dogs",
    "Collecting Ornamental Grass Varieties", "Applying Urban Planning Principles to My Neighborhood",
    "Organizing a DIY Bowling Alley", "Making a Rustic Log Bench",
    "Coding an Online Booking System for a Yoga Studio", "Painting a Community Underpass",
    "Training for a Breakdance Competition", "Reviewing Plant-Based Protein Substitutes",
    "Setting Up a Micro Weather Station in My Yard", "Assembling a Folk Instrument Library",
    "Collaborating on an Interactive Choose-Your-Own-Adventure Theater",
    "Staging a Pie-Eating Contest for Fun", "Creating a Family Feud Game Night",
    "Rehabilitating an Old Silo into a Loft Home", "Rescuing and Refinishing Antique Doors",
    "Training for a Speed Walking Competition", "Documenting Seasonal Foods in My Region",
    "Exploring Freediving with a Local Club", "Planning an “Indoor Forest” for Winter Blues",
    "Collecting and Identifying Rocks & Minerals", "Designing a City Landmark Obstacle Course",
    "Starting a High School Drone Racing Team", "Planning a “Glow Walk” with Neon Lights",
    "Installing an Acoustic Phone Booth", "Refurbishing a Cottage with Vintage Decor",
    "Coding a Fitness App for Wheelchair Users", "Organizing an Inclusive “Backyard Olympics”",
    "Running a Community Jigsaw Puzzle Trade", "Designing a Floating Farm Concept",
    "Hosting a Kid-Friendly Horror Story Night", "Painting Secret Messages in Urban Spaces",
    "Setting Up a Butterfly Release Program", "Collecting Oral Histories from Immigrants",
    "Scheduling a Petting Zoo at a Local Park", "Creating an Art Car for Parades",
    "Launching a Tactile Exhibit for the Blind", "Filming a Silent Movie with Community Actors",
    "Arranging a Group Buy for Solar Panels", "Making a Tech Restoration Reality Show Concept",
    "Teaching a Class on Stone Balancing Art", "Renovating a Closet into a Mini Greenhouse",
    "Planning a Virtual Job Shadow for Students", "Building a Birdbath from Recycled Materials",
    "Incorporating Indigenous Plant Knowledge in My Garden", "Designing a Mini Amphitheater in My Yard",
    "Mastering Celtic Knot Carving", "Gathering Recipes for a “Dump Dinner” Cookbook",
    "Hosting an Antique Photo Restoration Workshop", "Sketching My Town’s Skyline from Rooftops",
    "Starting a Meetup for Historical Music Instruments", "Reviewing Holographic Theater Tech",
    "Constructing a Bamboo Bike Frame", "Coordinating a “Map-A-Thon” for Local Features",
    "Publishing a Local Photography Coffee Table Book", "Conducting a Weekend Winter Survival Camp",
    "Designing Wearable Air Purifiers", "Arranging an Old-Fashioned Cakewalk",
    "Founding a Fantasy Armor Cosplay Workshop", "Shooting a “Then vs. Now” Photo Series",
    "Leading an Ephemeral Art in Nature Hike", "Building a DIY Virtual Pinball Cabinet",
    "Teaching a Mini-Lesson on Seismograph Building", "Planning a Low-Waste Tea Party",
    "Sharing a Sourdough Starter with Neighbors", "Refurbishing a Double-Decker Bus as a Hostel",
    "Practicing Slackline Yoga in the Park", "Documenting a Year of Sunsets from One Spot",
    "Arranging a Neighborhood History Display", "Reviewing Fire Safety for Off-Grid Living",
    "Launching a Shared Tool Shed Project", "Knitting a Gigantic Community Blanket",
    "Developing an Indoor Apple Orchard Concept", "Composing a Celtic Folk Music Festival",
    "Staging a Cozy Mystery Murder Dinner", "Setting Up a “Music in the Dark” Experience",
    "Renovating Old Theater Seats for Home Use", "Coding a Basic Physics Simulator",
    "Guiding a “Photograph Your Town” Challenge", "Creating an Illustrated Family Tree Tapestry",
    "Hosting a “Lock-In” Game Night at the Community Center", "Collecting Strange World Records from Locals",
    "Exploring a Swiss-Family-Robinson-Style Treehouse Build", "Teaching a Wood Inlay Class",
    "Organizing an Automatic Watering System Demo", "Staging an Urban Grapevine Experiment",
    "Preparing for an In-Park Mini Marathon", "Sewing Themed Costumes for Animals",
    "Setting Up a “Community Bikes” Station", "Arranging a Beginner’s Soap Making Lab",
    "Designing a Smart Irrigation System", "Launching a Minimalist Travel Blog",
    "Building a Retro-Futuristic Electric Car", "Establishing a City Festival for Handicrafts",
    "Recording Oral Histories of Centenarians", "Brainstorming a Community Talent Show Fundraiser",
    "Planting a Bee Meadow on Unused Fields", "Renovating a Shipping Container Pool",
    "Composing a Lo-Fi Beats Album for Relaxation", "Planning a “Silly Hat” Parade",
    "Publishing a Kids’ Environmental Activity Book", "Coding an Augmented Reality Flashcards App",
    "Reviewing Local Streetwear Brands", "Creating a Watchtower for Neighborhood Watch",
    "Documenting a Subterranean Cave System", "Concocting a Pop-Up Smoothie Bike Machine",
    "Hosting a “Taste the Seasons” Dinner Series", "Renovating a Shack into an Art Studio",
    "Planning a Summer Science “Camp-In”", "Exploring Digital Calligraphy Tools",
    "Founding a Kid Entrepreneur Bootcamp", "Building an On-The-Go Recording Booth",
    "Reporting on a Hidden Waterfall Series", "Scheduling a Chocolate Fondue Circle",
    "Tinkering with Remote-Control Lawn Mowers", "Renovating a Backyard as a Micro Farm",
    "Organizing a Community Theater Costume Swap", "Hosting a “Fix It” Cafe for Broken Items",
    "Becoming a Local Mushroom Identification Expert", "Designing an Eco-Hackathon for High Schools",
    "Testing Non-Electric Laundry Methods", "Leading a Handmade Trading Card Community",
    "Mapping Out a Ghost Town Exploration Route", "Creating a “Human Library” for Sharing Stories",
    "Collaborating on a Local “Pay-What-You-Can” Garden", "Reviewing Rare Spices and Seasonings",
    "Planning a Tribal Crafting Workshop", "Constructing an Aluminum Can Solar Heater",
    "Documenting Oral Legends from Local Tribes", "Coding a Braille Translation Tool",
    "Setting Up a Bicycle-Powered Movie Theater", "Shooting a Live-Action Roleplay Documentary",
    "Mastering the Art of Bonsai Pruning", "Leading a Drumming Circle for Stress Relief",
    "Organizing a Compost-Your-Jack-O’-Lantern Event", "Repairing a Local Cemetery Fence",
    "Publishing a “Handmade Holiday” E-Guide", "Implementing a Cloud-Farming Pilot Program",
    "Introducing a Pet Costume Exchange", "Exploring Sashiko Japanese Embroidery",
    "Designing Upcycled Home Decor from Tires", "Composing a Backyard Piano Recital",
    "Documenting Unusual Urban Wildlife", "Hosting a Dog Meetup for Senior Citizens",
    "Arranging a Virtual Worldwide Potluck", "Reviewing Local Playground Safety",
    "Crafting Reusable Wax Wraps for Food", "Remodeling a Utility Closet into a Micro Office",
    "Planning a Spontaneous Dance Mob", "Creating a Podcast on Micro Nations",
    "Testing a Paper Battery Experiment", "Coordinating a Citywide Eco-Challenge",
    "Decorating Rain Barrels for Neighborhood Aesthetics", "Founding a Warhammer Miniatures Meetup",
    "Developing a Car-Free Day in Town", "Teaching an Elder Tech 101 Series",
    "Renovating a Basement Bomb Shelter", "Arranging a Community Chili Tasting Expo",
    "Collecting Old Cell Phones for Recycling", "Writing an Amphibian Field Guide",
    "Holding a Spelling Bee for Adults", "Drafting a Town Mural with Child Artists",
    "Coding a Lost Pet Alert System", "Planning a Literary Speed Dating Night",
    "Designing a Composting Toilet for a Cabin", "Organizing a Local “Battle of the Beans” Coffee Fest",
    "Scheduling a Virtual Open Mic Session", "Volunteering at a Wildlife Rescue Education Program",
    "Making Eggshell Sculptures", "Renovating a River Barge for Party Cruises",
    "Teaching a Hot Sauce Making Course", "Prototyping a Wearable Air Quality Sensor",
    "Hosting a House Renovation Reality Challenge", "Curating a Weekly Yarn Dyeing Circle",
    "Performing a Live Blues Music Jam in the Streets", "Investigating Local Overgrown Railroad Tracks",
    "Designing a Multi-Family Treehouse Camp", "Adopting a Donkey and Setting Up a Sanctuary",
    "Reviewing Old Cookbooks on TV Dinners", "Leading a Folk Dance Troupe at Festivals",
    "Founding an AR Board Game Club", "Decorating the Town Square for a Medieval Fair",
    "Renovating a Vintage Motorcycle with Custom Paint", "Brainstorming a Robot Recycling Center",
    "Setting Up a Weekly Cartoon Caption Contest", "Creating a “Sports for All” Program",
    "Mapping Out a Historic Freedmen’s Town District", "Planning a “Kid vs. Chef” Cook-Off",
    "Designing a Community Lantern-Making Workshop", "Documenting Coastal Erosion with Drones",
    "Staging a “Micro Mansion” Tour", "Inventing a 24/7 Bicycle Dispensing Kiosk",
    "Knitting Sweaters for Shelter Pets", "Growing an Herb Spiral in the Yard",
    "Writing an Offbeat Local Travel Guidebook", "Testing Eco-Friendly Boat Designs",
    "Building a Frog Pond in the Neighborhood Park", "Helping a Home for Seniors with Music Therapy",
    "Organizing an “Art from Discarded Tech” Expo", "Volunteering for a Community Vaccination Drive",
    "Reviewing Zero-Waste Accessories", "Decorating Public Seating with Yarn Bombs",
    "Constructing a Cable-Stayed Mini Bridge for Kids", "Documenting a Bizarre Holidays Calendar",
    "Developing a City Gamification Mobile App", "Trying an Old-Fashioned Soda Fountain Project",
    "Setting Up a Virtual Mentoring Platform", "Writing a Romantic Comedy Short Film",
    "Painting a Series of Surreal Landscapes", "Hosting a “Market of Curiosities”",
    "Scouting a Historical Trail for Wheelchair Access", "Teaching a Balloon Twisting Class",
    "Renovating a Church Basement into a Teen Center", "Curating a Tribal Drumming Patterns Archive",
    "Coding a Web-Based Vintage Photo Colorization Tool", "Planning a Crowdfunding Event for Local Artists",
    "Founding a “Little Green Classroom” in a Park", "Proposing Electric Gondolas Over the River",
    "Arranging a Rooftop Kite Festival", "Experimenting with Japanese Woodblock Printing",
    "Starting a 24-Hour Peaceful Protest Program", "Collecting Dead Languages for a Mini Dictionary",
    "Cooking a “Meals of the Future” Tasting Menu", "Publishing a Retro Housewife Tips Zine",
    "Programming a Digital Treasure Hunt", "Renovating an Old Warehouse into Maker Labs",
    "Designing a Community “Rock Climbing” Sculpture", "Building an Autonomous Bubble Blower",
    "Organizing a Friend Swap for Skills Sharing", "Teaching a Live Mural Painting Class",
    "Setting Up a “Dads and Kids” Cooking Meetup", "Crafting Historical Style Quilts",
    "Reviewing Low-Cost 3D Printers for Schools", "Mapping a Natural Springs Drinking Guide",
    "Arranging a Car-Free Central Street Day", "Cultivating Rare Wildflowers Indoors",
    "Volunteering to Build Habitat Homes", "Starting a Genealogy Podcast",
    "Testing Old Radio Frequencies for Fun", "Designing a Portable Classroom Kit",
    "Planning a Town-Wide Book Day", "Conducting an All-Ukulele Orchestra",
    "Framing a Long-Exposure Night Photography Exhibit", "Organizing an “Odd Hobbies” Convention",
    "Setting Up a Fairy House Village in the Woods", "Renovating a Movie Palace from the 1930s",
    "Creating a Storm Drain Mural Program", "Reviewing Local Co-Working Spaces for Artists",
    "Teaching Poetry Writing to ESL Students", "Developing a Fire Safety VR Simulation",
    "Composing a Modern Opera with Volunteer Singers", "Building a Walkable Neighborhood Directory",
    "Hosting a “Collective Art Collage” Night", "Growing Heirloom Beans for a Seed Bank",
    "Documenting Street Lamps from Different Eras", "Reviewing Performance Venues for Buskers",
    "Planning a Lucid Dreaming Workshop", "Organizing a Family Fly-Fishing Clinic",
    "Crafting Faux Stained Glass Windows", "Writing an Epic Poem About My City",
    "Creating a Backyard Astronomy Lab", "Testing Eco-Friendly Inks for Screen Printing",
    "Rebranding a Local Community Center", "Exploring the Art of Ice Dying Fabrics",
    "Developing a Startup Incubator for Teen Girls", "Refinishing a Fading Playground Mural",
    "Producing a Local History Trivia Card Game", "Hosting a Yarn Dye Along",
    "Designing a Senior Safe Walking Route Map", "Composting School Lunch Waste",
    "Planning a Team-Based Puzzle Event at the Mall", "Sketching Architectural Details of Landmarks",
    "Organizing an Ultra-Fun Bouncy House Festival", "Publishing a Short Fiction Audio Podcast",
    "Creating a “Therapy Bunnies” Program", "Reviewing VR Devices for Classroom Teaching",
    "Prototyping a Self-Filtering Water Bottle", "Implementing a “Give a Book, Take a Book” Rack",
    "Mapping Low Light Pollution Areas for Stargazing", "Designing AR Filters for Local Landmarks",
    "Building Outdoor Fitness Stations", "Teaching Paper Quilling to Seniors",
    "Upcycling Beer Bottles into Glassware", "Conducting a “Human Chess” Match in the Park",
    "Renovating an Attic for a Writing Nook", "Scheduling a Classical Music Ensemble in a Cafe",
    "Testing a Remote-Controlled Light Show", "Exploring VR Physical Therapy Exercises",
    "Starting a Fairy Tale Story Time for Adults", "Designing a Local Food Cooperative",
    "Organizing a Patchwork of Community Gardens", "Building a Social Sculpture Installation",
    "Curating Surreal Photography of Streets at Night", "Documenting Old Neon Signs",
    "Writing a “My Neighborhood Through 100 Photos” Blog", "Hosting a Board Game Invention Meetup",
    "Reviving a Traditional Soap Making Technique", "Leading a Real-Life Treasure Map Project",
    "Collecting Local Pink Noise for Sleep Aid", "Renovating a Tourist Kiosk into an Info Hub",
    "Mastering Lucha Libre Mask Sewing", "Scheduling a Tea and Crumpets Social",
    "Designing Co-Housing for Artists", "Holding a “Day of Homemade Ice Cream” in Summer",
    "Programming a Karaoke Host Helper App", "Founding a Women’s Hiking Club",
    "Initiating a Bulk Refill Station for Kitchen Essentials", "Teaching a Rhythm Clapping Class to Kids",
    "Organizing a Citywide Pup Crawl (Dog-Friendly Pub Tour)", "Planning a Community Guitar Exchange",
    "Mapping Safe Bike Storage in the City", "Crafting Baskets from Newspaper Rolls",
    "Painting Nature-Inspired Murals in Tunnels", "Arranging an Old Cartography Exhibition",
    "Reviewing Lost Art Forms from the Past", "Coordinating a Global Kids’ Drawing Exchange",
    "Tracking Nocturnal Animals with Night Vision Cameras", "Restoring a Classic Trolley for Historic Rides",
    "Carving Wooden Figures with a Dremel", "Planning a Lagoon Cleanup with Divers",
    "Designing a “Meet the Farmers” Day", "Coding a Team Collaboration Tool for Family Chores",
    "Mastering Pyrography Wood Burning", "Organizing a “No Screens Day” in the Neighborhood",
    "Planning an Under-15 Soccer Tournament", "Teaching Patchmaking for Jackets",
    "Publishing a Series of Local Oral Histories", "Exploring Float Tank Therapy as a Group",
    "Constructing a Cardboard Fort City", "Reviewing Local Vintage Carousels",
    "Running a “Sustainability Through the Ages” Seminar", "Attaching Rain Gauges to Each House",
    "Writing a Song a Day Challenge", "Creating a Social VR Hangout for Teens",
    "Testing Low-Cost 3D Printed Medical Devices", "Reviving Traditional Dance in the Park",
    "Painting Ceiling Murals in Public Buildings", "Producing a Local Birds of Prey Documentary",
    "Coding a Mobile “Where’s That Sound?” Quiz Game", "Organizing a Fiddle & Banjo Workshop",
    "Building a Community Climbing Gym", "Teaching Plarn (Plastic Yarn) Crochet",
    "Publishing a Retro Comic Strip Weekly", "Arranging a Firefighters’ Ball Fundraiser",
    "Surveying Street Trees for Rare Diseases", "Designing an AR Feature for Historic Photos",
    "Constructing an Underground Root Cellar", "Planning a Low-Income Housing Renovation",
    "Building a Water Desalination Prototype", "Hosting a Folk-Tale Marathon Reading",
    "Renovating a Drive-In Theater for Seasonal Movies", "Staging a Medieval Cooking Workshop",
    "Documenting Petroglyphs on a Local Cliff", "Leading a “Discover Insects” Day for Kids",
    "Launching a Volunteer “Birthday Party for Orphans” Program", "Coding a Wildlife-Watching Timelapse Tool",
    "Setting Up a Whale Watching VR Experience", "Arranging a “Blender Basics” Animation Class",
    "Renovating a Motel into Affordable Housing", "Collecting Inspiration for an Origami Furniture Line",
    "Starting a Citywide “Green Up Your Lawn” Challenge", "Hosting a Farm Animal Yoga Experience",
    "Mastering Shadow Puppetry with Traditional Tools", "Reviewing Cultural Home Remedies",
    "Designing a Portal for Community Job-Sharing", "Organizing a Barefoot Park Exploration",
    "Publishing a Catalog of Street Musicians", "Painting Interactive Hopscotch Lines in Alleys",
    "Building a Neighborhood Storm Alert System", "Teaching a Youth Leadership Seminar Online",
    "Involving Local Teens in Historical Research", "Architecting a Greenhouse out of Recycled Bottles",
    "Coding a Student Planner with Gamification", "Conducting a Beach Fossil Hunt",
    "Renovating a Fire Escape into a Mini Balcony", "Arranging a Community Raspberry Picking Day",
    "Designing a Themed Crosswalk for Safety", "Creating a Laser Maze for Kids to Solve",
    "Reviewing Local Canoe Routes for a Blog", "Performing a Drumming Circle Under a Bridge",
    "Founding a Free “Little Skate Shop” in a Park", "Learning to Engrave Glass with Dremel Tools",
    "Planning a Sake Tasting and Brewery Tour", "Coding a Daily Affirmation Generator",
    "Documenting Quilts from Different Eras", "Staging a Surf ‘n’ Turf Cookoff for Charity",
    "Offering a Comedy Skit Workshop for Adults", "Collecting Vintage Video Game Cartridges for an Exhibit",
    "Publishing a Weekly Watercolor Postcard Series", "Brainstorming a Community “Story Exchange” Kiosk",
    "Baking a Giant Community Cookie", "Designing a Neighborhood “Doorstep Chats” Project",
    "Restoring a Wrought Iron Gate in Town", "Canning Salsa from a Neighborhood Chili Harvest",
    "Hosting an All-Ages Track Meet", "Prototyping a Low-Power FM Radio Station",
    "Exploring Solutions for Food Desert Areas", "Teaching Needle Punch Embroidery",
    "Arranging a Silent Auction for Amateur Paintings", "Reviewing Rare or Forgotten Sports",
    "Setting Up a Digital Theatre Festival", "Painting Reverse Glass Artwork",
    "Compiling a Local Hikes & Legends Guide", "Testing Homemade Robot Arms for Kids",
    "Training for a Canoe Polo Team", "Designing an Interactive Family History Wall",
    "Celebrating a “Hats Off to Crafts” Day", "Surveying Old Barns for Potential Renovations",
    "Designing Fireproof “Green Zones” in Fire-Prone Areas", "Building a Backyard Observatory for Planet Tracking",
    "Organizing a Car Boot Sale for the Neighborhood", "Painting a Fun Maze on a Parking Lot Floor",
    "Documenting an Oral History of Mill Workers", "Teaching Harp Basics to Beginners",
    "Planning a “Farm-to-Institution” Initiative", "Reviewing “Lost to Time” Tech Gadgets",
    "Creating a Celtic Knots & Braids Exhibit", "Starting a Community Choir for Non-Singers",
    "Publishing a Paper on Pollinator Pathways", "Coordinating a Neighborhood Wine Exchange",
    "Learning to Build a DIY Printer with LEGO", "Arranging a Chilli Pepper Spice Challenge",
    "Hosting a Make-Your-Own-Sushi Party", "Mapping Historical Battlefields with GIS",
    "Collecting Children’s Dreams and Illustrations", "Planning a Big Tent Revival of Variety Shows",
    "Developing a Recycled Rubber Tile Company", "Staging a Symphonic Flash Mob",
    "Grafting Unusual Fruits onto One Tree", "Teaching Recycled Music Instrument Crafting",
    "Designing a Kid’s UFO Spotting Toolkit", "Reviewing Teahouses for a Zen Blog",
    "Arranging a Family LARP in the Local Woods", "Running a Haunted Forest Tour for Halloween",
    "Renovating a Greenhouse for Community Seedlings", "Coding a Chatbot to Show City Bus Times",
    "Hosting a “Seaside Crafts” Workshop", "Proposing a Subterranean Bike Path",
    "Publishing a Folklore of Rivers Photo Album", "Reviewing a “Bullet Time” Photo Booth Setup",
    "Organizing a Weekly Library Trivia Game", "Developing an AR Scavenger Hunt for Kids",
    "Creating a Weaving Circle for Mats & Rugs", "Planning a Tug-of-War Championship",
    "Refinishing a 1950s Soda Shop", "Documenting a Food Truck Renovation",
    "Teaching an Intro to Moroccan Tile Design", "Collecting Farm-Fresh Berries for a Jam Session",
    "Managing a Monthly “Open Stage” Talent Night", "Prototyping a Holographic Table Interface",
    "Trying Micro Bakery Experiments at Home", "Launching a History of Street Dancing Interview Series",
    "Renovating a Victorian-Era Gazebo", "Coding a Minimalist Wedding Planner App",
    "Hosting an Outdoor Candlelight Yoga Session", "Planting a Public Fruit Park",
    "Participating in an Amateur Astronomy Photowalk", "Arranging a Cultural Mask-Making Workshop",
    "Analyzing Genetic Family Trees with DNA Kits", "Designing AR Effects for Historic Photos",
    "Publishing a “Stories of My Block” Zine", "Teaching Basic Suture Practice for Emergencies",
    "Creating an Annual Art & Music Mashup Festival", "Repairing an Old Lighthouse Lamp",
    "Mapping Electricity Usage Patterns with Sensors", "Mastering Glass Bottle Cutting Projects",
    "Staging a Water War to Raise Money for Charity", "Sewing Doll Clothes for Shelter Donations",
    "Building a Community Bulletin Board Network", "Testing a Moss Terrarium for Air Purification",
    "Starting an Open-Source Car Design Project", "Coordinating a Community Folk Music Lab",
    "Planning a Goodwill Caravan of Supplies", "Collecting Vintage Cosmetics Packaging",
    "Filming Short Documentaries on Artisan Bread", "Publishing an Experimental Sci-Fi Short Series",
    "Hosting a Monochrome Photo Contest", "Developing an Edible Insects Cooking Class",
    "Renovating a Fire Station into an Art Gallery", "Arranging a Pillow Fort Competition",
    "Crafting a City Banner or Flag Redesign", "Building a City-Run Charging Station for E-Bikes",
    "Releasing an E-Guide to Odd Monuments", "Volunteering for a Seniors’ VR Travel Program",
    "Painting Monumental “Kindness Murals” with Schools", "Coordinating a Tactile Art Gallery for the Visually Impaired",
    "Constructing a Rammed Earth Cottage", "Teaching an Introduction to Observational Drawing",
    "Reviewing Cryptid Sightings in My Region", "Coding a Digital Fortune Cookie Generator",
    "Planning a Gingerbread House Competition", "Hosting a Falafel Cook-Off",
    "Sketching a New Town Park Layout", "Composing a Town-Specific Classical Piece",
    "Exploring a Town’s Underground Catacombs", "Setting Up a Cricut Craft Night",
    "Developing a Robot Waiter for a Cafe Concept", "Organizing a “Support Local Diners” Crawl",
    "Documenting City Statues in 3D Models", "Building a Fan Prop for a Cosplay Competition",
    "Trying to Sustain a Hydroponic Winter Garden", "Renovating a Stone Fence with Old Techniques",
    "Publishing a Daily Poetry Instagram Series", "Arranging a Fondue Night for Neighbors",
    "Writing a Series of Nostalgic Childhood Shorts", "Piloting a VR Animal Rescue Experience",
    "Painting a Themed Ceiling Mural in a Youth Center", "Testing Mushroom Leather Alternatives",
    "Starting a “Paint the Town” Project for Abandoned Buildings", "Composing a Video Game Soundtrack for a Local Dev",
    "Conducting an Orchids in the Wild Survey", "Hosting a Tall Bike Building Workshop",
    "Creating a Parklet from a Parking Space", "Reviewing Unconventional Sports for a YouTube Channel",
    "Sketching a Coastal City Skyline for Postcards", "Designing an Eco-Skateboard from Bamboo",
    "Planning an Overnight “Night Sky” Picnic", "Collaborating on a Citywide Cookbook Collage",
    "Refinishing a Wooden Canoe", "Staging a Minecraft Build Competition for Teens",
    "Recording a Local Animal Shelter Documentary", "Using a Drone to Evaluate Crop Health for Farmers",
    "Organizing a Recycled Runway Fashion Show", "Synthesizing a Historical Costume Sewing Bee",
    "Teaching a Lecture on Local Geological Formations", "Arranging an Opera Karaoke Night with Classical Tracks",
    "Mastering the African Djembe Drum", "Publishing a Kids’ Riddles & Jokes Book",
    "Reviewing Accessible Camping Spots Nearby", "Coding a Pedal-Powered Light Display",
    "Performing a Shakespeare Cabaret in a Pub", "Inventing a Microclimate Monitoring Network",
    "Building a “Clothes Library” for Fashion Swaps", "Surveying a Town for Lost Cemeteries",
    "Mapping Out a Horse & Carriage Tour", "Hosting a Wild Edibles Foraging Class",
    "Collaborating on a Murals of Hope Project", "Conducting an Indoor Herb Garden Contest",
    "Curating a Watercolor Portraits of Pets Exhibit", "Planning a “Burn After Reading” Poetry Night",
    "Practicing Harpsichord Restoration", "Installing Free Wood-Fired Heaters in Cabins",
    "Making Reusable Advent Calendars", "Documenting Vintage Lunchbox Art",
    "Coordinating a Workshop on Upcycled Musical Instruments", "Staging a Maker Faire for Gadget Geeks",
    "Reviewing Rare Musical Instruments Found Locally", "Repairing a Faded Historical Sign",
    "Designing a Mobile Espresso Cart", "Building a Cardboard Viking Ship for a Parade",
    "Hosting a City Costume Swap Pre-Halloween", "Compiling a List of Kid-Friendly Hiking Trails",
    "Founding an “All-Teens” News Broadcasting Studio", "Making a City Guide for Skate Spots",
    "Training Kids to Build Marshmallow Catapults", "Renovating a WWII Bunker into a Museum",
    "Planning a Downtown Acapella Music Stroll", "Deploying a Pet Microchip Scanner Station",
    "Sketching Family History Comics", "Testing Homemade Caramel Apple Recipes",
    "Designing a Song Lyrics Writing Workshop", "Setting Up a Drone Delivery Experiment in Rural Areas"


]





import OpenAI from 'openai'
import { API_KEY } from './secrets.js'
import { random, showUserMsg } from './util.service.js'


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

    // showUserMsg('progress')
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
        // _id: boardId,
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
