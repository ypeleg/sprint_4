
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

const MASSIVE_BADGE_CATALOG_NOT_SORTED_BY_CATEGORY = [

  // HEALTH & WELLNESS
  {
    category: "Appointment Type",
    values: ["Physical", "Dental", "Vision", "Specialist", "Emergency", "Follow-Up", "Vaccination", "Checkup", "Screening", "Therapy", "Prenatal", "Postnatal", "Pediatric", "Geriatric", "Lab Work", "Imaging", "Surgical", "Mental Health", "Alternative", "Canceled"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Medication Status",
    values: ["Prescribed", "OTC", "Active", "Completed", "Missed", "Refilled", "Expired", "Allergic", "Suspended", "Tapering", "PRN", "Chronic", "Acute", "Preventative", "Experimental", "Generic", "Brand", "Interacted", "Adverse", "Monitoring"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },

  // PERSONAL FINANCE
  {
    category: "Budget Category",
    values: ["Housing", "Utilities", "Food", "Transport", "Insurance", "Medical", "Debt", "Savings", "Entertainment", "Education", "Personal", "Gifts", "Donations", "Investments", "Taxes", "Childcare", "Pets", "Travel", "Emergency", "Misc"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Investment Type",
    values: ["Stocks", "Bonds", "ETF", "Mutual", "Real Estate", "Crypto", "IRA", "401k", "CD", "Annuity", "Commodities", "Forex", "Startup", "P2P", "Index", "REIT", "HSA", "529", "Pension", "Collectibles"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },

  // HOME MANAGEMENT
  {
    category: "Home Project",
    values: ["Remodel", "Repair", "Landscape", "Deep Clean", "Organize", "Renovate", "Paint", "Furnish", "Decorate", "Smart Home", "Security", "Energy", "Plumbing", "Electrical", "HVAC", "Roof", "Foundation", "Pest", "Permit", "Inspection"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Maintenance Cycle",
    values: ["Daily", "Weekly", "Monthly", "Quarterly", "Biannual", "Annual", "Seasonal", "Preventative", "Emergency", "Warranty", "Spring", "Summer", "Fall", "Winter", "Move-In", "Move-Out", "Tenant", "Owner", "Scheduled", "Overdue"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },

  // EDUCATION & LEARNING
  {
    category: "Learning Format",
    values: ["Online", "In-Person", "Hybrid", "Self-Paced", "Cohort", "Workshop", "Seminar", "Degree", "Certificate", "Bootcamp", "Tutorial", "Webinar", "MOOC", "Apprenticeship", "Internship", "Lecture", "Lab", "Fieldwork", "Study Group", "Research"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Study Method",
    values: ["Pomodoro", "Feynman", "SQ3R", "Leitner", "Mind Map", "Active Recall", "Spaced Rep", "Interleaving", "Self-Test", "Group", "Teach", "Visual", "Auditory", "Kinesthetic", "Note-Taking", "Summarize", "Practice", "Drill", "Simulate", "Immersion"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },

  // CREATIVE PROJECTS
  {
    category: "Art Medium",
    values: ["Oil", "Acrylic", "Watercolor", "Charcoal", "Pastel", "Digital", "Clay", "Wood", "Metal", "Textile", "Glass", "Paper", "Photography", "Mixed", "Collage", "Spray", "Ink", "Stone", "Found", "Ephemeral"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Writing Stage",
    values: ["Brainstorm", "Outline", "Draft", "Revise", "Edit", "Beta", "Publish", "Market", "Royalties", "Series", "Standalone", "Fiction", "Non-Fic", "Poetry", "Script", "Blog", "Technical", "Academic", "Ghost", "Collaborative"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },

  // TECHNOLOGY & INNOVATION
  {
    category: "Emerging Tech",
    values: ["AI", "Blockchain", "IoT", "AR/VR", "Quantum", "Biotech", "Robotics", "Drones", "3D Print", "Nanotech", "Energy", "Space", "Autonomous", "5G", "Edge", "Metaverse", "Web3", "SynBio", "Climate", "Neuro"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Dev Stage",
    values: ["Concept", "Prototype", "Alpha", "Beta", "RC", "Launch", "Scale", "EOL", "OpenSource", "Patent", "Incubate", "Accelerate", "Crowdfund", "Pivot", "Acquired", "Disrupt", "Monetize", "Community", "Regulate", "Ethics"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },

  // SAMPLE ADDITIONAL CATEGORIES
  {
    category: "Parenting Stage",
    values: ["Newborn", "Infant", "Toddler", "Preschool", "Elementary", "Tween", "Teen", "Adult", "Special Needs", "Homeschool", "Sports", "Arts", "College", "Empty Nest", "Multiples", "Adoption", "Foster", "Single", "Co-Parent", "Blended"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Travel Phase",
    values: ["Dreaming", "Planning", "Booking", "Packing", "Transit", "Arrival", "Exploring", "Adventure", "Relax", "Work", "Volunteer", "Study", "Cuisine", "Culture", "Nature", "Solo", "Group", "Family", "Budget", "Luxury"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
  {
    category: "Legal Status",
    values: ["Draft", "Review", "Notarize", "Execute", "Archive", "Compliance", "Violation", "Litigation", "Settlement", "Appeal", "Intellectual", "Contract", "Regulation", "Policy", "License", "Permit", "Dispute", "Mediation", "Arbitration", "Enforce"],
    colors: ["#FFB3BA", "#FFDFBA", "#BAFFC9", "#BAE1FF", "#FF6961", "#FDFD96", "#84DCC6", "#A5A5A5", "#FFD3B6", "#D4A5A5", "#FF9AA2", "#FFB7B2", "#B5EAD7", "#C7CEEA", "#E2F0CB", "#FFDAC1", "#FF9AA2", "#B5EAD7", "#FDC5F5", "#FF7575"]
  },
// PROJECT MANAGEMENT FUNDAMENTALS
{
    category: "Priority",
    values: ["Trivial", "Low", "Medium", "High", "Critical", "Blocker", "Urgent", "Emergency", "Can Wait", "ASAP", "When Possible", "Immediate", "Show-Stopper", "P0", "P1", "P2", "P3", "P4"],
    colors: ["#baf3db", "#c6edfb", "#f8e6a0", "#fedec8", "#ffd5d2", "#f87168", "#ff5630", "#ffbdad", "#79e2f2", "#ff8f73", "#c0b6f2", "#998dd9", "#ff7452", "#00c7e6", "#36b37e", "#ff5230", "#ffab00", "#6554c0"]
},
{
    category: "Status",
    values: ["Backlog", "To Do", "In Progress", "Code Review", "Testing", "Blocked", "On Hold", "Ready", "Done", "Delayed", "Pending", "Waiting", "Approved", "Rejected", "Under Review", "Deployed", "Released", "Verified", "Ready for QA", "Needs Info", "Cannot Reproduce", "Won't Fix", "Duplicate", "Implemented", "Cancelled", "Reopened", "Fixed", "Merged", "Archived", "Reviewing", "Paused", "Active", "Stalled", "Completed", "Inactive", "Not Started", "Being Tested", "Awaiting Deployment", "Awaiting Approval", "QA Failed", "QA Passed", "Deferred", "In Development", "Not Planned", "Planned"],
    colors: ["#dfd8fd", "#c6edfb", "#579dff", "#79e2f2", "#00c7e6", "#ffd5d2", "#ff8f73", "#f8e6a0", "#4bce97", "#fedec8", "#cce0ff", "#ffab00", "#36b37e", "#ff5630", "#998dd9", "#57d9a3", "#00b8d9", "#00a3bf", "#00875a", "#ffc400", "#ff7452", "#de350b", "#6554c0", "#0065ff", "#c0b6f2", "#ffe380", "#fff0b3", "#f4f5f7", "#ebecf0", "#f87168", "#ffbdad", "#79f2c0", "#2684ff", "#8777d9", "#8993a4", "#8f7ee7", "#4c9aff", "#79e2f2", "#b3d4ff", "#ffc400", "#00b8d9", "#00c7e6", "#5243aa", "#4c9aff"]
},
{
    category: "Effort",
    values: ["Trivial", "Easy", "Medium", "Hard", "Complex", "XS", "S", "M", "L", "XL", "XXL", "1 Point", "2 Points", "3 Points", "5 Points", "8 Points", "13 Points", "21 Points", "34 Points", "Minutes", "Hours", "Days", "Weeks", "Months", "Quick Win", "Major Project", "Significant", "Minimal", "Substantial", "Massive", "Tiny"],
    colors: ["#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#00c7e6", "#36b37e", "#f8e6a0", "#fedec8", "#ff8f73", "#ff5630", "#cce0ff", "#b3d4ff", "#4c9aff", "#2684ff", "#0052cc", "#172b4d", "#091e42", "#ff7452", "#79e2f2", "#4c9aff", "#ffab00", "#ff8f73", "#ff5630", "#36b37e", "#de350b", "#ff7452", "#00c7e6", "#ff8f73", "#ff5630", "#00c7e6"]
},
{
    category: "Complexity",
    values: ["Trivial", "Simple", "Moderate", "Complex", "Very Complex", "Extremely Complex", "Easy", "Challenging", "Straightforward", "Intricate", "Sophisticated", "Elementary", "Difficult", "Advanced", "Basic", "Beginner", "Intermediate", "Expert", "Low", "Medium", "High", "Rocket Science"],
    colors: ["#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#ff5630", "#36b37e", "#ffab00", "#00c7e6", "#998dd9", "#de350b", "#79e2f2", "#ff8f73", "#ff5630", "#cce0ff", "#00c7e6", "#ff8f73", "#de350b", "#baf3db", "#f8e6a0", "#ffd5d2", "#ff5630"]
},
{
    category: "Impact",
    values: ["Minimal", "Low", "Medium", "High", "Critical", "Negligible", "Moderate", "Significant", "Major", "Minor", "Severe", "Transformative", "Game-Changing", "Incremental", "Revolutionary", "Evolutionary", "Disruptive", "Market-Defining", "Company-Wide", "Team-Level", "Strategic", "Tactical", "Operational", "Global", "Local"],
    colors: ["#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#79e2f2", "#ffab00", "#ff8f73", "#de350b", "#cce0ff", "#ff5630", "#6554c0", "#0052cc", "#00c7e6", "#0065ff", "#36b37e", "#0052cc", "#172b4d", "#ff5630", "#00c7e6", "#0052cc", "#36b37e", "#cce0ff", "#0052cc", "#36b37e"]
},

// SOFTWARE DEVELOPMENT SPECIFIC
{
    category: "Bug Severity",
    values: ["Trivial", "Minor", "Major", "Critical", "Blocker", "Cosmetic", "Low", "Medium", "High", "Showstopper", "P1", "P2", "P3", "P4", "P5", "Severe", "Normal", "Enhancement", "Edge Case", "Core Functionality", "Security", "Performance", "UI/UX", "Accessibility", "Mobile", "Desktop", "Regression", "New Bug"],
    colors: ["#c6edfb", "#baf3db", "#fedec8", "#ffd5d2", "#ff5630", "#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ff5630", "#ff5630", "#ff8f73", "#ffab00", "#f8e6a0", "#c6edfb", "#ff5630", "#f8e6a0", "#c6edfb", "#f8e6a0", "#ff5630", "#ff5630", "#ff8f73", "#6554c0", "#de350b", "#36b37e", "#0052cc", "#ff5630", "#f8e6a0"]
},
{
    category: "Tech Stack",
    values: ["JavaScript", "Python", "Java", "C#", "C++", "Go", "Ruby", "PHP", "Swift", "Kotlin", "TypeScript", "React", "Angular", "Vue", "Node.js", "Django", "Flask", "Spring", "Rails", ".NET", "AWS", "Azure", "GCP", "Firebase", "MongoDB", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "Redis", "Elasticsearch", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "CircleCI", "Travis CI", "Selenium", "Cypress", "Jest", "Mocha", "Pytest", "JUnit", "Android", "iOS", "Flutter", "React Native", "Xamarin"],
    colors: ["#f7df1e", "#3572A5", "#b07219", "#178600", "#f34b7d", "#00ADD8", "#701516", "#4F5D95", "#ffac45", "#A97BFF", "#2b7489", "#61dafb", "#dd0031", "#42b883", "#68a063", "#092e20", "#000000", "#6db33f", "#cc0000", "#512bd4", "#ff9900", "#0078d7", "#4285f4", "#ffca28", "#4DB33D", "#00758f", "#336791", "#f80000", "#cc2927", "#dc382d", "#43853d", "#0db7ed", "#326ce5", "#623ce4", "#1A1918", "#f0d6b7", "#4078c0", "#343434", "#3eaaaf", "#5b9bd5", "#17202c", "#15c213", "#8d6748", "#4B8BBE", "#25A9E0", "#a4c639", "#000000", "#42d1f5", "#61dafb", "#512bd4"]
},
{
    category: "Code Review",
    values: ["Needs Review", "Reviewing", "Changes Requested", "Approved", "Merged", "Blocked", "WIP", "Ready for Review", "Review Complete", "Needs Testing", "Needs Documentation", "Ready to Merge", "Pending CI", "CI Failed", "CI Passed", "Hold", "RFC", "Experimental", "Needs Rework", "Minor Changes", "Major Changes", "Requested Changes", "No Changes Needed", "Quality Concerns", "Performance Concerns", "Security Concerns", "Best Practices", "Clean Code", "Technical Debt", "Architecture Concerns"],
    colors: ["#f8e6a0", "#0065ff", "#ff8f73", "#36b37e", "#0065ff", "#ff5630", "#6554c0", "#f8e6a0", "#36b37e", "#f8e6a0", "#f8e6a0", "#36b37e", "#f8e6a0", "#ff5630", "#36b37e", "#ff8f73", "#6554c0", "#8777d9", "#ff8f73", "#f8e6a0", "#ff8f73", "#ff8f73", "#36b37e", "#ff8f73", "#ff8f73", "#ff5630", "#f8e6a0", "#36b37e", "#ff8f73", "#ff8f73"]
},

// MARKETING & SALES
{
    category: "Campaign Status",
    values: ["Planning", "In Progress", "Live", "Completed", "On Hold", "Cancelled", "Delayed", "Scheduled", "Launching Soon", "Active", "Inactive", "Pending Approval", "Approved", "Rejected", "Draft", "Ready to Launch", "Testing", "Analyzing", "Post-Campaign", "Paused", "Restarting", "Iterating", "A/B Testing", "Final Review", "Pre-Launch", "Soft Launch", "Full Launch", "Limited", "Targeted", "Global"],
    colors: ["#f8e6a0", "#0065ff", "#36b37e", "#00b8d9", "#ff8f73", "#ff5630", "#ffab00", "#6554c0", "#f8e6a0", "#36b37e", "#ff8f73", "#f8e6a0", "#36b37e", "#ff5630", "#6554c0", "#f8e6a0", "#00b8d9", "#0065ff", "#00b8d9", "#ff8f73", "#f8e6a0", "#0065ff", "#6554c0", "#f8e6a0", "#f8e6a0", "#36b37e", "#36b37e", "#ffab00", "#0065ff", "#0052cc"]
},
{
    category: "Channel",
    values: ["Email", "Social Media", "Website", "Blog", "Podcast", "Video", "SEO", "PPC", "Display", "Mobile", "Direct Mail", "TV", "Radio", "Print", "Event", "Webinar", "Affiliate", "Influencer", "PR", "Content", "SMS", "Push Notification", "In-App", "Outdoor", "Retail", "Point of Sale", "Word of Mouth", "Community", "Partnership", "Referral"],
    colors: ["#0065ff", "#6554c0", "#36b37e", "#00b8d9", "#8777d9", "#ff8f73", "#0052cc", "#f8e6a0", "#ffab00", "#36b37e", "#ff8f73", "#ff5630", "#ffab00", "#ff8f73", "#6554c0", "#0065ff", "#f8e6a0", "#ffab00", "#ff5630", "#00b8d9", "#36b37e", "#8777d9", "#0065ff", "#36b37e", "#00b8d9", "#f8e6a0", "#6554c0", "#00b8d9", "#0065ff", "#36b37e"]
},

// CREATIVE & DESIGN
{
    category: "Design Stage",
    values: ["Research", "Ideation", "Sketching", "Wireframing", "Mockups", "Prototyping", "User Testing", "Revisions", "Final Design", "Handoff", "Development", "QA", "Live", "Archived", "Inspiration", "Concepting", "Drafting", "Feedback", "Approval", "Production", "Review", "Implementation", "Iteration", "Validation", "Exploration", "Discovery", "Planning", "Execution", "Finalization", "Delivery"],
    colors: ["#0065ff", "#8777d9", "#6554c0", "#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#ff8f73", "#00b8d9", "#36b37e", "#0065ff", "#00b8d9", "#36b37e", "#6554c0", "#8777d9", "#6554c0", "#f8e6a0", "#ff8f73", "#36b37e", "#00b8d9", "#ff8f73", "#36b37e", "#ff8f73", "#36b37e", "#8777d9", "#0065ff", "#f8e6a0", "#00b8d9", "#36b37e", "#00b8d9"]
},
{
    category: "Creative Brief",
    values: ["Received", "Reviewed", "Clarifying", "Approved", "In Progress", "Completed", "Needs Revision", "Missing Info", "Final", "Draft", "Detailed", "Vague", "Clear", "Confusing", "Inspiring", "Limiting", "Flexible", "Rigid", "Comprehensive", "Minimal", "Standard", "Custom", "Template", "Unique", "Brand Aligned", "Off-Brand", "Challenging", "Achievable", "Ambitious", "Realistic"],
    colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#0065ff", "#36b37e", "#ff8f73", "#ff5630", "#36b37e", "#6554c0", "#36b37e", "#ff8f73", "#36b37e", "#ff5630", "#8777d9", "#ff8f73", "#36b37e", "#ff8f73", "#36b37e", "#f8e6a0", "#f8e6a0", "#6554c0", "#f8e6a0", "#6554c0", "#36b37e", "#ff5630", "#ff8f73", "#36b37e", "#ff8f73", "#36b37e"]
},

// PRODUCT DEVELOPMENT
{
    category: "Product Stage",
    values: ["Concept", "Planning", "Development", "Alpha", "Beta", "RC", "GA", "Maintenance", "EOL", "Ideation", "Research", "Validation", "Prototyping", "Testing", "Launch", "Growth", "Maturity", "Decline", "Revival", "MVP", "MMP", "V1", "V2", "Major Release", "Minor Release", "Patch", "Sunset", "Discovery", "Definition", "Delivery"],
    colors: ["#8777d9", "#f8e6a0", "#0065ff", "#8777d9", "#8777d9", "#f8e6a0", "#36b37e", "#00b8d9", "#ff5630", "#8777d9", "#0065ff", "#36b37e", "#00b8d9", "#00b8d9", "#36b37e", "#00b8d9", "#00b8d9", "#ff8f73", "#8777d9", "#f8e6a0", "#0065ff", "#0065ff", "#0065ff", "#ff5630", "#f8e6a0", "#baf3db", "#ff5630", "#8777d9", "#f8e6a0", "#36b37e"]
},
{
    category: "Feature Type",
    values: ["Core", "Secondary", "Nice-to-Have", "Experimental", "Legacy", "Competitive", "Differentiator", "Parity", "Innovation", "User Request", "Compliance", "Performance", "Security", "UI/UX", "Accessibility", "Localization", "Integration", "API", "Infrastructure", "Analytics", "Reporting", "Automation", "Mobile", "Desktop", "Web", "Admin", "Customer Facing", "Internal", "Platform", "Extension"],
    colors: ["#ff5630", "#ff8f73", "#ffab00", "#8777d9", "#6554c0", "#0052cc", "#0065ff", "#00b8d9", "#8777d9", "#36b37e", "#ff5630", "#ff8f73", "#ff5630", "#6554c0", "#de350b", "#00b8d9", "#0065ff", "#0065ff", "#0052cc", "#00b8d9", "#00b8d9", "#36b37e", "#36b37e", "#0052cc", "#0065ff", "#6554c0", "#36b37e", "#6554c0", "#0052cc", "#00b8d9"]
},

// EVENT PLANNING
{
    category: "Event Phase",
    values: ["Planning", "Preparation", "Execution", "Follow-up", "Evaluation", "Conceptualization", "Budgeting", "Booking", "Marketing", "Registration", "Setup", "Live", "Teardown", "Debrief", "Reporting", "Initial Planning", "Detailed Planning", "Final Planning", "Pre-Event", "During Event", "Post-Event", "Venue Selection", "Vendor Selection", "Attendee Management", "Speaker Management", "Logistics", "Promotion", "Content Creation", "Technical Setup", "Feedback Collection"],
    colors: ["#f8e6a0", "#0065ff", "#36b37e", "#00b8d9", "#0065ff", "#8777d9", "#f8e6a0", "#0065ff", "#ff8f73", "#00b8d9", "#0065ff", "#36b37e", "#ff8f73", "#00b8d9", "#0065ff", "#f8e6a0", "#0065ff", "#00b8d9", "#f8e6a0", "#36b37e", "#00b8d9", "#f8e6a0", "#f8e6a0", "#00b8d9", "#00b8d9", "#0065ff", "#ff8f73", "#6554c0", "#0065ff", "#00b8d9"]
},
{
    category: "Event Type",
    values: ["Conference", "Workshop", "Webinar", "Meetup", "Trade Show", "Exhibition", "Seminar", "Panel", "Hackathon", "Product Launch", "Team Building", "Award Ceremony", "Networking", "Training", "Retreat", "Summit", "Symposium", "Forum", "Convention", "Festival", "Fair", "Roadshow", "Virtual Event", "Hybrid Event", "Internal", "External", "Public", "Private", "VIP", "Community"],
    colors: ["#0052cc", "#0065ff", "#0065ff", "#00b8d9", "#ff8f73", "#ff8f73", "#00b8d9", "#6554c0", "#8777d9", "#36b37e", "#00b8d9", "#6554c0", "#0065ff", "#00b8d9", "#8777d9", "#0052cc", "#0052cc", "#0065ff", "#0052cc", "#ff8f73", "#ff8f73", "#0065ff", "#6554c0", "#0065ff", "#6554c0", "#36b37e", "#36b37e", "#6554c0", "#ff8f73", "#00b8d9"]
},

// HUMAN RESOURCES
{
    category: "Recruitment Stage",
    values: ["Sourcing", "Screening", "Interviewing", "Technical Assessment", "Reference Check", "Offer Made", "Negotiation", "Accepted", "Rejected", "Onboarding", "Probation", "Hired", "Application Received", "Resume Review", "Phone Screen", "First Interview", "Second Interview", "Final Interview", "Background Check", "Offer Pending", "Offer Accepted", "Offer Declined", "Candidate Withdrew", "Position Filled", "Position On Hold", "Active", "Inactive", "Future Pipeline", "Not Qualified", "Maybe Later"],
    colors: ["#f8e6a0", "#00b8d9", "#0065ff", "#0052cc", "#00b8d9", "#36b37e", "#f8e6a0", "#36b37e", "#ff5630", "#36b37e", "#f8e6a0", "#36b37e", "#f8e6a0", "#00b8d9", "#00b8d9", "#0065ff", "#0065ff", "#0065ff", "#00b8d9", "#f8e6a0", "#36b37e", "#ff5630", "#ff8f73", "#36b37e", "#ff8f73", "#36b37e", "#ff8f73", "#00b8d9", "#ff5630", "#ff8f73"]
},
{
    category: "Performance Review",
    values: ["Exceeds Expectations", "Meets Expectations", "Needs Improvement", "Unsatisfactory", "Outstanding", "Excellent", "Good", "Satisfactory", "Fair", "Poor", "Above Average", "Average", "Below Average", "Top Performer", "High Potential", "Solid Performer", "Developing", "Underperforming", "5/5", "4/5", "3/5", "2/5", "1/5", "A", "B", "C", "D", "F", "Pass", "Fail"],
    colors: ["#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#36b37e", "#f8e6a0", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#f8e6a0", "#ff8f73", "#36b37e", "#36b37e", "#f8e6a0", "#ffab00", "#ff5630", "#36b37e", "#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#f8e6a0", "#ffab00", "#ff8f73", "#ff5630", "#36b37e", "#ff5630"]
},

// CUSTOMER SUPPORT
{
    category: "Support Ticket Status",
    values: ["New", "Open", "In Progress", "Waiting on Customer", "Waiting on Third-Party", "Resolved", "Closed", "Reopened", "Escalated", "On Hold", "Pending", "Assigned", "Unassigned", "Needs Attention", "Critical", "Urgent", "High", "Medium", "Low", "Trivial", "Bug", "Feature Request", "Question", "Problem", "Incident", "Service Request", "Complaint", "Feedback", "Compliment", "Information"],
    colors: ["#f8e6a0", "#0065ff", "#0065ff", "#ffab00", "#ffab00", "#36b37e", "#6554c0", "#ff8f73", "#ff5630", "#ff8f73", "#f8e6a0", "#0065ff", "#f8e6a0", "#ff5630", "#ff5630", "#ff5630", "#ff8f73", "#f8e6a0", "#c6edfb", "#c6edfb", "#ff5630", "#8777d9", "#00b8d9", "#ff8f73", "#ff5630", "#f8e6a0", "#ff5630", "#00b8d9", "#36b37e", "#00b8d9"]
},
{
    category: "Customer Satisfaction",
    values: ["Very Satisfied", "Satisfied", "Neutral", "Dissatisfied", "Very Dissatisfied", "Promoter", "Passive", "Detractor", "Excellent", "Good", "Average", "Poor", "Terrible", "5 Star", "4 Star", "3 Star", "2 Star", "1 Star", "Happy", "Unhappy", "Delighted", "Frustrated", "Impressed", "Disappointed", "Loyal", "At Risk", "Churned", "Recovered", "New", "Returning"],
    colors: ["#36b37e", "#57d9a3", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#f8e6a0", "#ff5630", "#36b37e", "#57d9a3", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#57d9a3", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff8f73", "#ff5630", "#57d9a3", "#00b8d9", "#36b37e"]
},

// FINANCE
{
    category: "Budget Status",
    values: ["Under Budget", "On Budget", "Over Budget", "Significantly Over", "Significantly Under", "Within Range", "Exceeded", "Not Started", "In Progress", "Completed", "Approved", "Pending Approval", "Rejected", "Needs Review", "Forecast", "Actual", "Variance", "Positive Variance", "Negative Variance", "Zero Variance", "Q1", "Q2", "Q3", "Q4", "Annual", "Monthly", "Weekly", "Daily", "YTD", "MTD"],
    colors: ["#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#f8e6a0", "#ff8f73", "#6554c0", "#0065ff", "#36b37e", "#36b37e", "#f8e6a0", "#ff5630", "#ff8f73", "#00b8d9", "#36b37e", "#f8e6a0", "#36b37e", "#ff8f73", "#f8e6a0", "#00b8d9", "#00b8d9", "#00b8d9", "#00b8d9", "#0052cc", "#00b8d9", "#00b8d9", "#00b8d9", "#0052cc", "#00b8d9"]
},
{
    category: "Financial Impact",
    values: ["High ROI", "Medium ROI", "Low ROI", "Negative ROI", "Cost Saving", "Revenue Generating", "Profit Increasing", "Loss Reducing", "Break Even", "Investment", "Expense", "Capital", "Operational", "Tax Deductible", "Non-Deductible", "Depreciating", "Appreciating", "Fixed Cost", "Variable Cost", "One-time Cost", "Recurring Cost", "High Cost", "Medium Cost", "Low Cost", "No Cost", "High Value", "Medium Value", "Low Value", "No Value", "Priceless"],
    colors: ["#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#36b37e", "#36b37e", "#36b37e", "#f8e6a0", "#00b8d9", "#ff8f73", "#0052cc", "#00b8d9", "#36b37e", "#ff8f73", "#ff8f73", "#36b37e", "#f8e6a0", "#f8e6a0", "#36b37e", "#ff8f73", "#ff5630", "#ff8f73", "#36b37e", "#36b37e", "#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#6554c0"]
},

// OPERATIONS
{
    category: "Operational Status",
    values: ["Operational", "Partial Outage", "Major Outage", "Planned Maintenance", "Degraded Performance", "Under Investigation", "Resolved", "Monitoring", "Stable", "Unstable", "Critical", "Warning", "Healthy", "Unhealthy", "Online", "Offline", "Available", "Unavailable", "Active", "Inactive", "Running", "Stopped", "Starting", "Stopping", "Restarting", "Scaling Up", "Scaling Down", "Deploying", "Rollback", "Recovery"],
    colors: ["#36b37e", "#ffab00", "#ff5630", "#f8e6a0", "#ff8f73", "#0065ff", "#36b37e", "#00b8d9", "#36b37e", "#ff8f73", "#ff5630", "#ffab00", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#f8e6a0", "#f8e6a0", "#00b8d9", "#36b37e", "#ff8f73", "#0065ff", "#ff8f73", "#00b8d9"]
},

    // SUPPLY CHAIN & LOGISTICS
    {
        category: "Shipping Status",
        values: ["Processing", "Packed", "Ready to Ship", "In Transit", "Out for Delivery", "Delivered", "Failed Delivery", "Returned", "Backordered", "Pre-Order", "Customs", "Held", "Delayed", "Expedited", "Standard", "Economy", "International", "Domestic", "Last Mile", "First Mile"],
        colors: ["#f8e6a0", "#00b8d9", "#36b37e", "#0065ff", "#ffab00", "#36b37e", "#ff5630", "#ff8f73", "#ff8f73", "#6554c0", "#ffab00", "#ff5630", "#ff8f73", "#36b37e", "#00b8d9", "#f8e6a0", "#0052cc", "#36b37e", "#ffab00", "#00b8d9"]
    },
    {
        category: "Inventory Status",
        values: ["In Stock", "Low Stock", "Out of Stock", "Discontinued", "Seasonal", "Reserved", "On Order", "Excess", "Optimal", "Damaged", "Quarantined", "Inspected", "Allocated", "Unallocated", "Expired", "Near Expiry", "Fresh", "Returned", "Recalled", "Reordered"],
        colors: ["#36b37e", "#ffab00", "#ff5630", "#6554c0", "#f8e6a0", "#00b8d9", "#0065ff", "#ff8f73", "#36b37e", "#ff5630", "#ff5630", "#36b37e", "#00b8d9", "#f8e6a0", "#ff5630", "#ffab00", "#36b37e", "#ff8f73", "#ff5630", "#0065ff"]
    },

// DATA & ANALYTICS
    {
        category: "Data Quality",
        values: ["Clean", "Dirty", "Missing", "Duplicate", "Incomplete", "Validated", "Unvalidated", "Accurate", "Inaccurate", "Consistent", "Inconsistent", "Timely", "Outdated", "Relevant", "Irrelevant", "Structured", "Unstructured", "Primary", "Secondary", "Derived"],
        colors: ["#36b37e", "#ff5630", "#ff8f73", "#ffab00", "#ff8f73", "#36b37e", "#ff8f73", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#00b8d9", "#ff8f73", "#0065ff", "#00b8d9", "#f8e6a0"]
    },
    {
        category: "Analytics Stage",
        values: ["Data Collection", "Data Cleaning", "Data Preparation", "Exploratory Analysis", "Statistical Analysis", "Modeling", "Visualization", "Interpretation", "Reporting", "Presentation", "Decision Making", "Implementation", "Monitoring", "Evaluation", "Iteration", "Hypothesis", "Testing", "Validation", "Production", "Archival"],
        colors: ["#f8e6a0", "#00b8d9", "#00b8d9", "#0065ff", "#0052cc", "#8777d9", "#6554c0", "#0065ff", "#36b37e", "#f8e6a0", "#36b37e", "#36b37e", "#00b8d9", "#0065ff", "#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#36b37e", "#6554c0"]
    },

// HEALTHCARE & MEDICAL
    {
        category: "Patient Status",
        values: ["Admitted", "Discharged", "Stable", "Critical", "Serious", "Fair", "Good", "Improving", "Deteriorating", "In Recovery", "Pre-Op", "Post-Op", "ICU", "ER", "Outpatient", "Inpatient", "Observation", "Quarantine", "Isolation", "Palliative"],
        colors: ["#ffab00", "#36b37e", "#36b37e", "#ff5630", "#ff8f73", "#ffab00", "#36b37e", "#36b37e", "#ff5630", "#36b37e", "#f8e6a0", "#00b8d9", "#ff5630", "#ff8f73", "#36b37e", "#00b8d9", "#f8e6a0", "#ff8f73", "#ff8f73", "#6554c0"]
    },
    {
        category: "Treatment Phase",
        values: ["Diagnosis", "Initial Treatment", "Ongoing Treatment", "Follow-up", "Remission", "Recurrence", "Preventative", "Palliative", "Curative", "Experimental", "Alternative", "Complementary", "Maintenance", "Escalation", "De-escalation", "First Line", "Second Line", "Emergency", "Routine", "Specialized"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#36b37e", "#ff5630", "#36b37e", "#6554c0", "#36b37e", "#8777d9", "#6554c0", "#00b8d9", "#36b37e", "#ff8f73", "#36b37e", "#0065ff", "#ff8f73", "#ff5630", "#36b37e", "#0052cc"]
    },

// EDUCATION & ACADEMIA
    {
        category: "Academic Progress",
        values: ["Enrolled", "In Progress", "Completed", "Withdrawn", "On Leave", "Probation", "Honors", "Distinction", "Passing", "Failing", "Incomplete", "Audit", "Credit", "No Credit", "Satisfactory", "Unsatisfactory", "Freshman", "Sophomore", "Junior", "Senior"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#ff8f73", "#ffab00", "#36b37e", "#36b37e", "#36b37e", "#ff5630", "#ff8f73", "#00b8d9", "#36b37e", "#ff8f73", "#36b37e", "#ff5630", "#f8e6a0", "#f8e6a0", "#00b8d9", "#36b37e"]
    },
    {
        category: "Research Phase",
        values: ["Literature Review", "Hypothesis Formation", "Methodology Design", "IRB Approval", "Data Collection", "Data Analysis", "Preliminary Results", "Peer Review", "Publication", "Presentation", "Grant Writing", "Funding Secured", "Replication", "Application", "Theory Building", "Interdisciplinary", "Collaborative", "Independent", "Longitudinal", "Cross-Sectional"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#f8e6a0", "#0065ff", "#f8e6a0", "#00b8d9", "#36b37e", "#f8e6a0", "#00b8d9", "#36b37e", "#00b8d9", "#36b37e", "#8777d9", "#6554c0", "#0065ff", "#00b8d9", "#0052cc", "#00b8d9"]
    },

// GAMING & GAMIFICATION
    {
        category: "Player Status",
        values: ["Newbie", "Casual", "Regular", "Hardcore", "Pro", "Veteran", "Legend", "Banned", "Inactive", "VIP", "Subscriber", "Free", "Premium", "Beta Tester", "Early Access", "Founder", "Guild Member", "Solo", "Team Player", "Community Leader"],
        colors: ["#f8e6a0", "#00b8d9", "#36b37e", "#ff8f73", "#ff5630", "#0052cc", "#6554c0", "#ff5630", "#ff8f73", "#ffab00", "#36b37e", "#f8e6a0", "#6554c0", "#8777d9", "#8777d9", "#0052cc", "#0065ff", "#00b8d9", "#36b37e", "#6554c0"]
    },
    {
        category: "Achievement Level",
        values: ["Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Grandmaster", "Challenger", "Beginner", "Intermediate", "Advanced", "Expert", "Novice", "Skilled", "Proficient", "Elite", "Legendary", "Mythic", "Epic", "Common"],
        colors: ["#cd7f32", "#c0c0c0", "#ffd700", "#e5e4e2", "#b9f2ff", "#8777d9", "#6554c0", "#ff5630", "#f8e6a0", "#00b8d9", "#0065ff", "#0052cc", "#f8e6a0", "#00b8d9", "#36b37e", "#ff5630", "#6554c0", "#8777d9", "#ff8f73", "#c6edfb"]
    },

// ENVIRONMENTAL & SUSTAINABILITY
    {
        category: "Sustainability Impact",
        values: ["Carbon Neutral", "Carbon Negative", "Zero Waste", "Recyclable", "Biodegradable", "Renewable", "Non-Renewable", "Energy Efficient", "Water Saving", "Eco-Friendly", "Harmful", "Neutral", "Beneficial", "Low Impact", "High Impact", "Certified", "Not Certified", "Sustainable", "Unsustainable", "In Transition"],
        colors: ["#36b37e", "#57d9a3", "#36b37e", "#57d9a3", "#57d9a3", "#36b37e", "#ff5630", "#36b37e", "#00b8d9", "#36b37e", "#ff5630", "#f8e6a0", "#36b37e", "#57d9a3", "#ff5630", "#36b37e", "#ff8f73", "#36b37e", "#ff5630", "#f8e6a0"]
    },
    {
        category: "Environmental Risk",
        values: ["Low", "Medium", "High", "Critical", "Negligible", "Managed", "Unmanaged", "Mitigated", "Unmitigated", "Monitored", "Unmonitored", "Increasing", "Decreasing", "Stable", "Variable", "Short-Term", "Long-Term", "Local", "Regional", "Global"],
        colors: ["#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#ff5630", "#36b37e", "#00b8d9", "#f8e6a0", "#00b8d9", "#0052cc", "#36b37e", "#ff8f73", "#ff5630"]
    },

// MANUFACTURING & PRODUCTION
    {
        category: "Production Stage",
        values: ["Raw Materials", "Processing", "Assembly", "Quality Control", "Packaging", "Shipping", "R&D", "Design", "Prototyping", "Testing", "Rework", "Finished Goods", "Custom Build", "Mass Production", "Batch Production", "Just-in-Time", "Made to Order", "In Spec", "Out of Spec", "Recalled"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#00b8d9", "#36b37e", "#8777d9", "#6554c0", "#8777d9", "#00b8d9", "#ff8f73", "#36b37e", "#6554c0", "#0052cc", "#00b8d9", "#f8e6a0", "#00b8d9", "#36b37e", "#ff5630", "#ff5630"]
    },
    {
        category: "Quality Rating",
        values: ["Premium", "Standard", "Economy", "Defective", "A Grade", "B Grade", "C Grade", "Rejected", "Certified", "Non-Certified", "Military Spec", "Industrial", "Consumer", "Medical", "Aerospace", "Automotive", "Food Grade", "Cosmetic Issue", "Functional Issue", "Safety Issue"],
        colors: ["#0052cc", "#00b8d9", "#f8e6a0", "#ff5630", "#36b37e", "#00b8d9", "#f8e6a0", "#ff5630", "#36b37e", "#ff8f73", "#0052cc", "#00b8d9", "#f8e6a0", "#0065ff", "#0052cc", "#00b8d9", "#36b37e", "#f8e6a0", "#ff8f73", "#ff5630"]
    },

// CONTENT CREATION & PUBLISHING
    {
        category: "Content Status",
        values: ["Draft", "Review", "Approved", "Published", "Scheduled", "Archived", "Trending", "Evergreen", "Seasonal", "Time-Sensitive", "Viral", "Promoted", "Organic", "Featured", "Premium", "Exclusive", "Members Only", "Free", "Paywalled", "Sponsored"],
        colors: ["#f8e6a0", "#00b8d9", "#36b37e", "#36b37e", "#00b8d9", "#6554c0", "#ff5630", "#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#ffab00", "#36b37e", "#0065ff", "#0052cc", "#6554c0", "#8777d9", "#36b37e", "#ff8f73", "#ffab00"]
    },
    {
        category: "Audience Engagement",
        values: ["High", "Medium", "Low", "Viral", "Growing", "Declining", "Steady", "Targeted", "Broad", "Niche", "Core", "New", "Returning", "Loyal", "Casual", "Active", "Passive", "Engaged", "Disengaged", "Converting"],
        colors: ["#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#ff8f73", "#00b8d9", "#0065ff", "#00b8d9", "#6554c0", "#0052cc", "#f8e6a0", "#36b37e", "#36b37e", "#f8e6a0", "#36b37e", "#ff8f73", "#36b37e", "#ff8f73", "#0065ff"]
    },

// LEGAL & COMPLIANCE
    {
        category: "Compliance Status",
        values: ["Compliant", "Non-Compliant", "Pending Review", "Remediation", "Waiver", "Exemption", "High Risk", "Medium Risk", "Low Risk", "No Risk", "Audit Required", "Certified", "Expired", "Renewing", "New Requirement", "Legacy", "Critical", "Important", "Advisory", "Voluntary"],
        colors: ["#36b37e", "#ff5630", "#f8e6a0", "#ff8f73", "#ffab00", "#f8e6a0", "#ff5630", "#ff8f73", "#36b37e", "#36b37e", "#ff8f73", "#36b37e", "#ff5630", "#00b8d9", "#ff8f73", "#6554c0", "#ff5630", "#ff8f73", "#f8e6a0", "#36b37e"]
    },
    {
        category: "Contract Phase",
        values: ["Drafting", "Negotiation", "Review", "Approval", "Execution", "Active", "Renewal", "Expiring", "Expired", "Terminated", "Amended", "Disputed", "Breached", "Remedied", "Template", "Custom", "Standard", "Legacy", "Auto-Renew", "Fixed Term"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#36b37e", "#36b37e", "#00b8d9", "#ffab00", "#ff5630", "#ff5630", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#6554c0", "#0065ff", "#00b8d9", "#6554c0", "#00b8d9", "#0052cc"]
    },

// INTERNATIONALIZATION & LOCALIZATION
    {
        category: "Localization Status",
        values: ["Not Started", "In Progress", "Translated", "Reviewed", "Implemented", "Live", "Needs Update", "Outdated", "Complete", "Partial", "Machine Translated", "Human Translated", "Native Review", "Cultural Adaptation", "Technical Review", "Legal Review", "Terminology Check", "Format Check", "Testing", "Approved"],
        colors: ["#ff5630", "#0065ff", "#f8e6a0", "#00b8d9", "#36b37e", "#36b37e", "#ff8f73", "#ff5630", "#36b37e", "#ff8f73", "#f8e6a0", "#36b37e", "#00b8d9", "#6554c0", "#0065ff", "#0052cc", "#f8e6a0", "#f8e6a0", "#00b8d9", "#36b37e"]
    },
    {
        category: "Market Readiness",
        values: ["Research", "Strategy", "Adaptation", "Testing", "Soft Launch", "Full Launch", "Established", "Growing", "Mature", "Declining", "Regulated", "Unregulated", "Restricted", "Open", "Competitive", "Monopolistic", "Emerging", "Developed", "Untapped", "Saturated"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#00b8d9", "#f8e6a0", "#36b37e", "#36b37e", "#36b37e", "#00b8d9", "#ff8f73", "#ff8f73", "#36b37e", "#ff5630", "#36b37e", "#ff8f73", "#ff5630", "#f8e6a0", "#36b37e", "#f8e6a0", "#ff5630"]
    },

// USER EXPERIENCE & INTERFACE DESIGN
    {
        category: "UX Stage",
        values: ["Research", "Personas", "Journey Maps", "Wireframes", "Prototypes", "User Testing", "Iteration", "Implementation", "Analysis", "Refinement", "Accessibility", "Usability", "Visual Design", "Information Architecture", "Interaction Design", "Content Strategy", "Microcopy", "Animation", "Responsive", "Mobile First"],
        colors: ["#f8e6a0", "#6554c0", "#8777d9", "#00b8d9", "#0065ff", "#36b37e", "#f8e6a0", "#36b37e", "#00b8d9", "#36b37e", "#0052cc", "#36b37e", "#6554c0", "#8777d9", "#0065ff", "#8777d9", "#00b8d9", "#6554c0", "#36b37e", "#0065ff"]
    },
    {
        category: "Design System",
        values: ["Foundation", "Components", "Patterns", "Guidelines", "Tokens", "Templates", "Icons", "Typography", "Color", "Spacing", "Grid", "Motion", "Voice & Tone", "Accessibility", "Responsive", "Interactive", "Documentation", "Versioning", "Deprecated", "Experimental"],
        colors: ["#0052cc", "#0065ff", "#00b8d9", "#f8e6a0", "#8777d9", "#00b8d9", "#6554c0", "#8777d9", "#ff8f73", "#f8e6a0", "#00b8d9", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#0065ff", "#f8e6a0", "#00b8d9", "#ff5630", "#8777d9"]
    },

// SOCIAL MEDIA & COMMUNITY
    {
        category: "Engagement Level",
        values: ["Lurker", "Observer", "Occasional", "Regular", "Active", "Super User", "Advocate", "Influencer", "Creator", "Curator", "Mentor", "Moderator", "Admin", "Newcomer", "Core Member", "Veteran", "VIP", "Banned", "Muted", "Restricted"],
        colors: ["#f8e6a0", "#00b8d9", "#f8e6a0", "#00b8d9", "#36b37e", "#0065ff", "#36b37e", "#0052cc", "#6554c0", "#8777d9", "#36b37e", "#0052cc", "#ff5630", "#f8e6a0", "#0065ff", "#0052cc", "#6554c0", "#ff5630", "#ff8f73", "#ff8f73"]
    },
    {
        category: "Content Performance",
        values: ["Viral", "High Reach", "Medium Reach", "Low Reach", "Trending", "Evergreen", "Seasonal", "Time-Sensitive", "High Engagement", "Low Engagement", "Controversial", "Popular", "Unpopular", "Educational", "Entertaining", "Informative", "Promotional", "Original", "Curated", "User-Generated"],
        colors: ["#ff5630", "#36b37e", "#f8e6a0", "#ff8f73", "#ff5630", "#36b37e", "#f8e6a0", "#ff8f73", "#36b37e", "#ff8f73", "#ff5630", "#36b37e", "#ff8f73", "#0065ff", "#6554c0", "#00b8d9", "#ffab00", "#0052cc", "#00b8d9", "#36b37e"]
    },

// CYBERSECURITY & PRIVACY
    {
        category: "Security Level",
        values: ["Critical", "High", "Medium", "Low", "Informational", "Patched", "Unpatched", "Mitigated", "Unmitigated", "Exploitable", "Theoretical", "Zero-Day", "Known", "Unknown", "Internal", "External", "Physical", "Digital", "Social", "Procedural"],
        colors: ["#ff5630", "#ff8f73", "#f8e6a0", "#36b37e", "#00b8d9", "#36b37e", "#ff5630", "#36b37e", "#ff5630", "#ff5630", "#f8e6a0", "#ff5630", "#f8e6a0", "#ff5630", "#00b8d9", "#ff5630", "#ff8f73", "#0065ff", "#f8e6a0", "#00b8d9"]
    },
    {
        category: "Privacy Compliance",
        values: ["GDPR", "CCPA", "HIPAA", "PCI DSS", "COPPA", "FERPA", "GLBA", "PIPEDA", "ePrivacy", "Compliant", "Non-Compliant", "In Process", "Exempt", "Not Applicable", "Under Review", "High Risk", "Medium Risk", "Low Risk", "No Risk", "Requires DPA"],
        colors: ["#0052cc", "#0065ff", "#0052cc", "#ff5630", "#f8e6a0", "#00b8d9", "#f8e6a0", "#00b8d9", "#0065ff", "#36b37e", "#ff5630", "#f8e6a0", "#00b8d9", "#6554c0", "#0065ff", "#ff5630", "#ff8f73", "#36b37e", "#36b37e", "#f8e6a0"]
    },

// AGRICULTURE & FARMING
    {
        category: "Crop Stage",
        values: ["Planting", "Germination", "Seedling", "Vegetative", "Flowering", "Fruiting", "Ripening", "Harvesting", "Post-Harvest", "Dormant", "Early", "Mid", "Late", "Organic", "Conventional", "Hydroponic", "Drought", "Diseased", "Pest Issue", "Thriving"],
        colors: ["#f8e6a0", "#36b37e", "#57d9a3", "#36b37e", "#6554c0", "#ffab00", "#ff8f73", "#36b37e", "#00b8d9", "#6554c0", "#f8e6a0", "#00b8d9", "#ff8f73", "#36b37e", "#f8e6a0", "#00b8d9", "#ff5630", "#ff5630", "#ff5630", "#36b37e"]
    },
    {
        category: "Livestock Status",
        values: ["Newborn", "Juvenile", "Adult", "Breeding", "Pregnant", "Lactating", "Dry", "Market Ready", "Retired", "Sick", "Treated", "Quarantined", "Vaccinated", "Organic", "Free Range", "Grass Fed", "Grain Fed", "Registered", "Commercial", "Show Quality"],
        colors: ["#f8e6a0", "#00b8d9", "#36b37e", "#6554c0", "#8777d9", "#00b8d9", "#f8e6a0", "#36b37e", "#6554c0", "#ff5630", "#ff8f73", "#ff5630", "#36b37e", "#36b37e", "#36b37e", "#36b37e", "#f8e6a0", "#0052cc", "#00b8d9", "#6554c0"]
    },

// FITNESS & WELLNESS
    {
        category: "Workout Intensity",
        values: ["Light", "Moderate", "Vigorous", "HIIT", "Recovery", "Endurance", "Strength", "Power", "Speed", "Agility", "Flexibility", "Balance", "Cardio", "Resistance", "Circuit", "CrossFit", "Yoga", "Pilates", "Functional", "Sport Specific"],
        colors: ["#c6edfb", "#f8e6a0", "#ff8f73", "#ff5630", "#00b8d9", "#0065ff", "#ff5630", "#ff5630", "#ff5630", "#ff8f73", "#00b8d9", "#00b8d9", "#0065ff", "#ff5630", "#ff8f73", "#ff5630", "#00b8d9", "#00b8d9", "#f8e6a0", "#0052cc"]
    },
    {
        category: "Wellness Dimension",
        values: ["Physical", "Mental", "Emotional", "Social", "Spiritual", "Intellectual", "Occupational", "Environmental", "Financial", "Nutritional", "Sleep", "Stress", "Energy", "Mindfulness", "Resilience", "Balance", "Purpose", "Growth", "Connection", "Happiness"],
        colors: ["#36b37e", "#0065ff", "#6554c0", "#00b8d9", "#8777d9", "#0052cc", "#f8e6a0", "#36b37e", "#ffab00", "#57d9a3", "#6554c0", "#ff8f73", "#ff8f73", "#8777d9", "#36b37e", "#00b8d9", "#8777d9", "#36b37e", "#00b8d9", "#36b37e"]
    },

// CONSTRUCTION & REAL ESTATE
    {
        category: "Construction Phase",
        values: ["Planning", "Design", "Permits", "Foundation", "Framing", "Mechanical", "Electrical", "Plumbing", "Insulation", "Drywall", "Finishing", "Landscaping", "Inspection", "Punch List", "Final", "Warranty", "Renovation", "Demolition", "Excavation", "Site Prep"],
        colors: ["#f8e6a0", "#6554c0", "#00b8d9", "#0052cc", "#0065ff", "#ff8f73", "#ff8f73", "#00b8d9", "#f8e6a0", "#f8e6a0", "#36b37e", "#36b37e", "#00b8d9", "#ff8f73", "#36b37e", "#00b8d9", "#ff8f73", "#ff5630", "#ff8f73", "#f8e6a0"]
    },
    {
        category: "Property Status",
        values: ["For Sale", "For Rent", "Under Contract", "Pending", "Closed", "Off Market", "Coming Soon", "Price Reduced", "New Listing", "Back on Market", "Foreclosure", "Short Sale", "Bank Owned", "As-Is", "Fixer Upper", "Move-In Ready", "Luxury", "Investment", "Development", "Historic"],
        colors: ["#36b37e", "#00b8d9", "#f8e6a0", "#f8e6a0", "#36b37e", "#6554c0", "#f8e6a0", "#ff8f73", "#36b37e", "#ff8f73", "#ff5630", "#ff8f73", "#ff5630", "#ff8f73", "#ff8f73", "#36b37e", "#0052cc", "#00b8d9", "#0065ff", "#6554c0"]
    },
// FREELANCE & GIG ECONOMY
    {
        category: "Freelancer Status",
        values: ["Available", "Booked", "Partial Availability", "On Project", "Between Projects", "Taking Break", "Not Available", "Looking for Work", "Exclusive Contract", "Multiple Clients", "Full-Time", "Part-Time", "Side Hustle", "Nights & Weekends", "Remote", "On-Site", "Hybrid", "Local Only", "International", "Traveling"],
        colors: ["#36b37e", "#ff5630", "#f8e6a0", "#0065ff", "#f8e6a0", "#6554c0", "#ff5630", "#f8e6a0", "#0052cc", "#00b8d9", "#0052cc", "#00b8d9", "#f8e6a0", "#00b8d9", "#36b37e", "#f8e6a0", "#00b8d9", "#f8e6a0", "#0052cc", "#0065ff"]
    },
    {
        category: "Client Relationship",
        values: ["New", "Established", "Long-Term", "Repeat", "One-Time", "VIP", "High Priority", "Regular", "Difficult", "Easy", "Collaborative", "Hands-Off", "Micromanage", "Late Payer", "Prompt Payer", "Referral Source", "High Budget", "Low Budget", "Potential", "Former"],
        colors: ["#f8e6a0", "#36b37e", "#0052cc", "#36b37e", "#f8e6a0", "#ff5630", "#ff5630", "#00b8d9", "#ff8f73", "#36b37e", "#36b37e", "#36b37e", "#ff8f73", "#ff5630", "#36b37e", "#36b37e", "#0052cc", "#ff8f73", "#f8e6a0", "#6554c0"]
    },

    // STARTUPS & ENTREPRENEURSHIP
    {
        category: "Startup Phase",
        values: ["Ideation", "Validation", "Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Bootstrapped", "Profitable", "Pre-Revenue", "Revenue", "Growth", "Scale", "Mature", "Acquisition Target", "Pre-IPO", "Public", "Pivot", "Restructuring", "Exit"],
        colors: ["#f8e6a0", "#f8e6a0", "#f8e6a0", "#00b8d9", "#0065ff", "#0052cc", "#6554c0", "#36b37e", "#36b37e", "#f8e6a0", "#36b37e", "#0065ff", "#0052cc", "#00b8d9", "#0052cc", "#ff5630", "#6554c0", "#ff8f73", "#ff8f73", "#ff5630"]
    },
    // PROJECT MANAGEMENT FUNDAMENTALS
    {
        category: "Priority",
        values: ["Trivial", "Low", "Medium", "High", "Critical", "Blocker", "Urgent", "Emergency", "Can Wait", "ASAP", "When Possible", "Immediate", "Show-Stopper", "P0", "P1", "P2", "P3", "P4"],
        colors: ["#baf3db", "#c6edfb", "#f8e6a0", "#fedec8", "#ffd5d2", "#f87168", "#ff5630", "#ffbdad", "#79e2f2", "#ff8f73", "#c0b6f2", "#998dd9", "#ff7452", "#00c7e6", "#36b37e", "#ff5230", "#ffab00", "#6554c0"]
    },
    {
        category: "Status",
        values: ["Backlog", "To Do", "In Progress", "Code Review", "Testing", "Blocked", "On Hold", "Ready", "Done", "Delayed", "Pending", "Waiting", "Approved", "Rejected", "Under Review", "Deployed", "Released", "Verified", "Ready for QA", "Needs Info", "Cannot Reproduce", "Won't Fix", "Duplicate", "Implemented", "Cancelled", "Reopened", "Fixed", "Merged", "Archived", "Reviewing", "Paused", "Active", "Stalled", "Completed", "Inactive", "Not Started", "Being Tested", "Awaiting Deployment", "Awaiting Approval", "QA Failed", "QA Passed", "Deferred", "In Development", "Not Planned", "Planned"],
        colors: ["#dfd8fd", "#c6edfb", "#579dff", "#79e2f2", "#00c7e6", "#ffd5d2", "#ff8f73", "#f8e6a0", "#4bce97", "#fedec8", "#cce0ff", "#ffab00", "#36b37e", "#ff5630", "#998dd9", "#57d9a3", "#00b8d9", "#00a3bf", "#00875a", "#ffc400", "#ff7452", "#de350b", "#6554c0", "#0065ff", "#c0b6f2", "#ffe380", "#fff0b3", "#f4f5f7", "#ebecf0", "#f87168", "#ffbdad", "#79f2c0", "#2684ff", "#8777d9", "#8993a4", "#8f7ee7", "#4c9aff", "#79e2f2", "#b3d4ff", "#ffc400", "#00b8d9", "#00c7e6", "#5243aa", "#4c9aff"]
    },
    {
        category: "Effort",
        values: ["Trivial", "Easy", "Medium", "Hard", "Complex", "XS", "S", "M", "L", "XL", "XXL", "1 Point", "2 Points", "3 Points", "5 Points", "8 Points", "13 Points", "21 Points", "34 Points", "Minutes", "Hours", "Days", "Weeks", "Months", "Quick Win", "Major Project", "Significant", "Minimal", "Substantial", "Massive", "Tiny"],
        colors: ["#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#00c7e6", "#36b37e", "#f8e6a0", "#fedec8", "#ff8f73", "#ff5630", "#cce0ff", "#b3d4ff", "#4c9aff", "#2684ff", "#0052cc", "#172b4d", "#091e42", "#ff7452", "#79e2f2", "#4c9aff", "#ffab00", "#ff8f73", "#ff5630", "#36b37e", "#de350b", "#ff7452", "#00c7e6", "#ff8f73", "#ff5630", "#00c7e6"]
    },
    {
        category: "Complexity",
        values: ["Trivial", "Simple", "Moderate", "Complex", "Very Complex", "Extremely Complex", "Easy", "Challenging", "Straightforward", "Intricate", "Sophisticated", "Elementary", "Difficult", "Advanced", "Basic", "Beginner", "Intermediate", "Expert", "Low", "Medium", "High", "Rocket Science"],
        colors: ["#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#ff5630", "#36b37e", "#ffab00", "#00c7e6", "#998dd9", "#de350b", "#79e2f2", "#ff8f73", "#ff5630", "#cce0ff", "#00c7e6", "#ff8f73", "#de350b", "#baf3db", "#f8e6a0", "#ffd5d2", "#ff5630"]
    },
    {
        category: "Impact",
        values: ["Minimal", "Low", "Medium", "High", "Critical", "Negligible", "Moderate", "Significant", "Major", "Minor", "Severe", "Transformative", "Game-Changing", "Incremental", "Revolutionary", "Evolutionary", "Disruptive", "Market-Defining", "Company-Wide", "Team-Level", "Strategic", "Tactical", "Operational", "Global", "Local"],
        colors: ["#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#79e2f2", "#ffab00", "#ff8f73", "#de350b", "#cce0ff", "#ff5630", "#6554c0", "#0052cc", "#00c7e6", "#0065ff", "#36b37e", "#0052cc", "#172b4d", "#ff5630", "#00c7e6", "#0052cc", "#36b37e", "#cce0ff", "#0052cc", "#36b37e"]
    },
    {
        category: "Size",
        values: ["XS", "S", "M", "L", "XL", "XXL", "Tiny", "Small", "Medium", "Large", "Huge", "Enormous", "Mini", "Compact", "Standard", "Expanded", "Massive", "Gigantic", "T-Shirt S", "T-Shirt M", "T-Shirt L", "T-Shirt XL", "T-Shirt XXL", "Microscopic", "Planetary"],
        colors: ["#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#ff5630", "#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#ff5630", "#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#ff5630", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#ff5630", "#c6edfb", "#ff5630"]
    },
    {
        category: "Due Date",
        values: ["Overdue", "Today", "Tomorrow", "This Week", "Next Week", "This Month", "Next Month", "This Quarter", "Next Quarter", "This Year", "Future", "ASAP", "No Rush", "End of Day", "End of Week", "End of Month", "End of Quarter", "End of Year", "Now", "Later", "Soon", "Eventually", "Immediately", "Yesterday", "Long Overdue"],
        colors: ["#ff5630", "#ff8f73", "#ffab00", "#f8e6a0", "#ffc400", "#fedec8", "#ff8f73", "#ffc400", "#ff8f73", "#ffab00", "#00b8d9", "#ff5630", "#36b37e", "#ff8f73", "#ffab00", "#ff8f73", "#ffab00", "#ff8f73", "#ff5630", "#00b8d9", "#ffab00", "#36b37e", "#ff5630", "#ff5630", "#de350b"]
    },
    {
        category: "Risk",
        values: ["None", "Low", "Medium", "High", "Critical", "Minimal", "Moderate", "Significant", "Extreme", "Acceptable", "Unacceptable", "Tolerable", "Negligible", "Severe", "Catastrophic", "Green", "Yellow", "Orange", "Red", "Managed", "Unmanaged", "Mitigated", "Transferred", "Avoided", "Accepted"],
        colors: ["#36b37e", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#36b37e", "#ffab00", "#ff8f73", "#ff5630", "#36b37e", "#ff5630", "#ffab00", "#36b37e", "#ff5630", "#de350b", "#36b37e", "#ffab00", "#ff8f73", "#ff5630", "#36b37e", "#ff5630", "#36b37e", "#00b8d9", "#36b37e", "#ffab00"]
    },
    {
        category: "Sprint",
        values: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6", "Sprint 7", "Sprint 8", "Sprint 9", "Sprint 10", "Current Sprint", "Next Sprint", "Backlog", "Future Sprint", "Sprint Planning", "Not Scheduled", "Sprint Review", "Sprint Retro", "Jan Sprint", "Feb Sprint", "Mar Sprint", "Apr Sprint", "May Sprint", "Jun Sprint", "Jul Sprint", "Aug Sprint", "Sep Sprint", "Oct Sprint", "Nov Sprint", "Dec Sprint"],
        colors: ["#4c9aff", "#2684ff", "#0065ff", "#0052cc", "#0747a6", "#172b4d", "#091e42", "#8777d9", "#5243aa", "#8f7ee7", "#0065ff", "#0052cc", "#6554c0", "#8777d9", "#0065ff", "#6554c0", "#0065ff", "#0052cc", "#4c9aff", "#2684ff", "#0065ff", "#0052cc", "#0747a6", "#172b4d", "#091e42", "#8777d9", "#5243aa", "#8f7ee7", "#0065ff", "#0052cc"]
    },
    {
        category: "Team",
        values: ["Product", "Engineering", "Design", "Marketing", "Sales", "Customer Support", "IT", "HR", "Finance", "Legal", "Operations", "Research", "Frontend", "Backend", "DevOps", "QA", "UX", "UI", "Data Science", "Analytics", "Infrastructure", "Mobile", "Web", "Desktop", "Security", "Compliance", "Platform", "Content", "Strategy", "Innovation"],
        colors: ["#0065ff", "#36b37e", "#6554c0", "#ff8f73", "#ffab00", "#00b8d9", "#0052cc", "#ff5630", "#00a3bf", "#de350b", "#36b37e", "#8777d9", "#0065ff", "#36b37e", "#0052cc", "#00b8d9", "#6554c0", "#6554c0", "#8777d9", "#0065ff", "#0052cc", "#36b37e", "#0065ff", "#0052cc", "#ff5630", "#de350b", "#0052cc", "#6554c0", "#ffab00", "#8777d9"]
    },
    // SOFTWARE DEVELOPMENT SPECIFIC
    {
        category: "Bug Severity",
        values: ["Trivial", "Minor", "Major", "Critical", "Blocker", "Cosmetic", "Low", "Medium", "High", "Showstopper", "P1", "P2", "P3", "P4", "P5", "Severe", "Normal", "Enhancement", "Edge Case", "Core Functionality", "Security", "Performance", "UI/UX", "Accessibility", "Mobile", "Desktop", "Regression", "New Bug"],
        colors: ["#c6edfb", "#baf3db", "#fedec8", "#ffd5d2", "#ff5630", "#c6edfb", "#baf3db", "#f8e6a0", "#fedec8", "#ff5630", "#ff5630", "#ff8f73", "#ffab00", "#f8e6a0", "#c6edfb", "#ff5630", "#f8e6a0", "#c6edfb", "#f8e6a0", "#ff5630", "#ff5630", "#ff8f73", "#6554c0", "#de350b", "#36b37e", "#0052cc", "#ff5630", "#f8e6a0"]
    },
    {
        category: "Tech Stack",
        values: ["JavaScript", "Python", "Java", "C#", "C++", "Go", "Ruby", "PHP", "Swift", "Kotlin", "TypeScript", "React", "Angular", "Vue", "Node.js", "Django", "Flask", "Spring", "Rails", ".NET", "AWS", "Azure", "GCP", "Firebase", "MongoDB", "MySQL", "PostgreSQL", "Oracle", "SQL Server", "Redis", "Elasticsearch", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "CircleCI", "Travis CI", "Selenium", "Cypress", "Jest", "Mocha", "Pytest", "JUnit", "Android", "iOS", "Flutter", "React Native", "Xamarin"],
        colors: ["#f7df1e", "#3572A5", "#b07219", "#178600", "#f34b7d", "#00ADD8", "#701516", "#4F5D95", "#ffac45", "#A97BFF", "#2b7489", "#61dafb", "#dd0031", "#42b883", "#68a063", "#092e20", "#000000", "#6db33f", "#cc0000", "#512bd4", "#ff9900", "#0078d7", "#4285f4", "#ffca28", "#4DB33D", "#00758f", "#336791", "#f80000", "#cc2927", "#dc382d", "#43853d", "#0db7ed", "#326ce5", "#623ce4", "#1A1918", "#f0d6b7", "#4078c0", "#343434", "#3eaaaf", "#5b9bd5", "#17202c", "#15c213", "#8d6748", "#4B8BBE", "#25A9E0", "#a4c639", "#000000", "#42d1f5", "#61dafb", "#512bd4"]
    },
    {
        category: "Code Review",
        values: ["Needs Review", "Reviewing", "Changes Requested", "Approved", "Merged", "Blocked", "WIP", "Ready for Review", "Review Complete", "Needs Testing", "Needs Documentation", "Ready to Merge", "Pending CI", "CI Failed", "CI Passed", "Hold", "RFC", "Experimental", "Needs Rework", "Minor Changes", "Major Changes", "Requested Changes", "No Changes Needed", "Quality Concerns", "Performance Concerns", "Security Concerns", "Best Practices", "Clean Code", "Technical Debt", "Architecture Concerns"],
        colors: ["#f8e6a0", "#0065ff", "#ff8f73", "#36b37e", "#0065ff", "#ff5630", "#6554c0", "#f8e6a0", "#36b37e", "#f8e6a0", "#f8e6a0", "#36b37e", "#f8e6a0", "#ff5630", "#36b37e", "#ff8f73", "#6554c0", "#8777d9", "#ff8f73", "#f8e6a0", "#ff8f73", "#ff8f73", "#36b37e", "#ff8f73", "#ff8f73", "#ff5630", "#f8e6a0", "#36b37e", "#ff8f73", "#ff8f73"]
    },
    {
        category: "Environment",
        values: ["Development", "Testing", "Staging", "Production", "QA", "Local", "CI/CD", "Sandbox", "Demo", "Lab", "Integration", "UAT", "Pre-Production", "Hotfix", "Canary", "Beta", "Alpha", "Gamma", "Dev", "Test", "Prod", "Localhost", "Cloud", "On-Premise", "Hybrid", "Shared", "Isolated", "Containerized", "Serverless", "Legacy"],
        colors: ["#36b37e", "#00b8d9", "#f8e6a0", "#ff5630", "#00b8d9", "#36b37e", "#0065ff", "#36b37e", "#6554c0", "#0065ff", "#0065ff", "#f8e6a0", "#f8e6a0", "#ff5630", "#f8e6a0", "#8777d9", "#8777d9", "#8777d9", "#36b37e", "#00b8d9", "#ff5630", "#36b37e", "#0065ff", "#0052cc", "#6554c0", "#0065ff", "#36b37e", "#0065ff", "#0065ff", "#ff8f73"]
    },
    {
        category: "Release",
        values: ["v1.0", "v1.1", "v1.2", "v2.0", "Alpha", "Beta", "RC", "GA", "Hotfix", "Patch", "Major", "Minor", "Bugfix", "Unreleased", "Next", "Current", "Previous", "LTS", "Deprecated", "Preview", "Stable", "Unstable", "Development", "Production", "Q1 Release", "Q2 Release", "Q3 Release", "Q4 Release", "Future Release", "Shipped"],
        colors: ["#0065ff", "#0065ff", "#0065ff", "#0065ff", "#8777d9", "#8777d9", "#f8e6a0", "#36b37e", "#ff5630", "#f8e6a0", "#ff8f73", "#f8e6a0", "#36b37e", "#6554c0", "#0065ff", "#36b37e", "#0065ff", "#36b37e", "#ff8f73", "#8777d9", "#36b37e", "#ff8f73", "#36b37e", "#ff5630", "#0065ff", "#0065ff", "#0065ff", "#0065ff", "#0065ff", "#36b37e"]
    },
    {
        category: "Quality Assurance",
        values: ["Not Tested", "Testing", "Passed", "Failed", "Blocked", "Flaky", "Pending", "Skipped", "Automated", "Manual", "UI Testing", "Unit Testing", "Integration Testing", "Regression Testing", "Performance Testing", "Security Testing", "Accessibility Testing", "Edge Cases", "Happy Path", "Smoke Test", "Sanity Test", "Load Test", "Stress Test", "Penetration Test", "User Acceptance", "Compatibility", "Alpha Testing", "Beta Testing", "Production Validation", "Exploratory"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#ff8f73", "#ffab00", "#f8e6a0", "#6554c0", "#36b37e", "#0065ff", "#6554c0", "#36b37e", "#0065ff", "#ff8f73", "#ffab00", "#ff5630", "#6554c0", "#ffab00", "#36b37e", "#0065ff", "#0065ff", "#ffab00", "#ff8f73", "#ff5630", "#36b37e", "#0065ff", "#8777d9", "#8777d9", "#36b37e", "#6554c0"]
    },
    {
        category: "Technical Debt",
        values: ["None", "Low", "Medium", "High", "Critical", "Acceptable", "Unacceptable", "Tech Debt", "Refactor Needed", "Clean Code", "Maintainable", "Unmaintainable", "Legacy Code", "Good Architecture", "Poor Architecture", "Documentation Needed", "Well Documented", "Optimized", "Unoptimized", "Scalable", "Not Scalable", "Testable", "Untestable", "Complexity", "Dependency Hell", "Well Designed", "Poorly Designed", "Quick Fix", "Proper Solution", "Temporary Workaround"],
        colors: ["#36b37e", "#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2", "#baf3db", "#ffd5d2", "#fedec8", "#fedec8", "#baf3db", "#baf3db", "#ffd5d2", "#ffd5d2", "#baf3db", "#ffd5d2", "#f8e6a0", "#baf3db", "#baf3db", "#ffd5d2", "#baf3db", "#ffd5d2", "#baf3db", "#ffd5d2", "#fedec8", "#ffd5d2", "#baf3db", "#ffd5d2", "#ffd5d2", "#baf3db", "#fedec8"]
    },
    {
        category: "Deploy Status",
        values: ["Not Deployed", "Deploying", "Deployed", "Deployment Failed", "Ready to Deploy", "Scheduled", "Cancelled", "Rolled Back", "Hotfix", "Canary Deployed", "Blue/Green", "Partial", "Complete", "Verified", "Unverified", "In Progress", "Queued", "On Hold", "Skipped", "Pending Approval", "Approved for Deploy", "Rejected", "Production", "Staging", "Development", "Testing", "Canary", "Beta", "Alpha", "Integration"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#f8e6a0", "#0065ff", "#6554c0", "#ff8f73", "#ff5630", "#f8e6a0", "#0065ff", "#f8e6a0", "#36b37e", "#36b37e", "#f8e6a0", "#0065ff", "#6554c0", "#ff8f73", "#6554c0", "#f8e6a0", "#36b37e", "#ff5630", "#ff5630", "#f8e6a0", "#36b37e", "#0065ff", "#f8e6a0", "#8777d9", "#8777d9", "#0065ff"]
    },
    {
        category: "Code Coverage",
        values: ["0-20%", "20-40%", "40-60%", "60-80%", "80-100%", "Low", "Medium", "High", "Complete", "Incomplete", "Minimal", "Good", "Excellent", "Poor", "Needs Improvement", "Acceptable", "Unacceptable", "Below Standard", "Meets Standard", "Exceeds Standard", "Critical Paths Covered", "Happy Path Only", "Edge Cases Covered", "Unit Test", "Integration Test", "UI Test", "No Tests", "Partial Tests", "Full Test Suite", "Test Driven"],
        colors: ["#ff5630", "#ff8f73", "#ffab00", "#36b37e", "#00b8d9", "#ff5630", "#ffab00", "#36b37e", "#00b8d9", "#ff5630", "#ff5630", "#ffab00", "#00b8d9", "#ff5630", "#ff8f73", "#ffab00", "#ff5630", "#ff5630", "#36b37e", "#00b8d9", "#36b37e", "#ffab00", "#00b8d9", "#36b37e", "#0065ff", "#6554c0", "#ff5630", "#ffab00", "#00b8d9", "#36b37e"]
    },
    {
        category: "API Status",
        values: ["Planned", "In Development", "Testing", "Stable", "Deprecated", "Legacy", "V1", "V2", "V3", "Beta", "Alpha", "Production", "Public", "Private", "Internal", "Partner", "Documented", "Undocumented", "REST", "GraphQL", "SOAP", "gRPC", "Webhook", "WebSocket", "OpenAPI", "Swagger", "Healthy", "Degraded", "Down", "Maintenance"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#ff8f73", "#ff5630", "#0065ff", "#0065ff", "#0065ff", "#8777d9", "#8777d9", "#36b37e", "#36b37e", "#6554c0", "#6554c0", "#0065ff", "#36b37e", "#ff8f73", "#0065ff", "#e535ab", "#4a154b", "#244c5a", "#0065ff", "#0065ff", "#85ea2d", "#85ea2d", "#36b37e", "#ffab00", "#ff5630", "#f8e6a0"]
    },
    // MARKETING & SALES
    {
        category: "Campaign Status",
        values: ["Planning", "In Progress", "Live", "Completed", "On Hold", "Cancelled", "Delayed", "Scheduled", "Launching Soon", "Active", "Inactive", "Pending Approval", "Approved", "Rejected", "Draft", "Ready to Launch", "Testing", "Analyzing", "Post-Campaign", "Paused", "Restarting", "Iterating", "A/B Testing", "Final Review", "Pre-Launch", "Soft Launch", "Full Launch", "Limited", "Targeted", "Global"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#00b8d9", "#ff8f73", "#ff5630", "#ffab00", "#6554c0", "#f8e6a0", "#36b37e", "#ff8f73", "#f8e6a0", "#36b37e", "#ff5630", "#6554c0", "#f8e6a0", "#00b8d9", "#0065ff", "#00b8d9", "#ff8f73", "#f8e6a0", "#0065ff", "#6554c0", "#f8e6a0", "#f8e6a0", "#36b37e", "#36b37e", "#ffab00", "#0065ff", "#0052cc"]
    },
    {
        category: "Channel",
        values: ["Email", "Social Media", "Website", "Blog", "Podcast", "Video", "SEO", "PPC", "Display", "Mobile", "Direct Mail", "TV", "Radio", "Print", "Event", "Webinar", "Affiliate", "Influencer", "PR", "Content", "SMS", "Push Notification", "In-App", "Outdoor", "Retail", "Point of Sale", "Word of Mouth", "Community", "Partnership", "Referral"],
        colors: ["#0065ff", "#6554c0", "#36b37e", "#00b8d9", "#8777d9", "#ff8f73", "#0052cc", "#f8e6a0", "#ffab00", "#36b37e", "#ff8f73", "#ff5630", "#ffab00", "#ff8f73", "#6554c0", "#0065ff", "#f8e6a0", "#ffab00", "#ff5630", "#00b8d9", "#36b37e", "#8777d9", "#0065ff", "#36b37e", "#00b8d9", "#f8e6a0", "#6554c0", "#00b8d9", "#0065ff", "#36b37e"]
    },
    {
        category: "Audience",
        values: ["Enterprise", "SMB", "Startup", "Consumer", "B2B", "B2C", "Developer", "Designer", "Manager", "Executive", "Student", "Teacher", "Parent", "Child", "Teen", "Young Adult", "Adult", "Senior", "Male", "Female", "Gen Z", "Millennial", "Gen X", "Baby Boomer", "Silent Generation", "Local", "Regional", "National", "Global", "Niche"],
        colors: ["#0052cc", "#0065ff", "#00b8d9", "#36b37e", "#0052cc", "#36b37e", "#6554c0", "#8777d9", "#f8e6a0", "#ff8f73", "#00b8d9", "#00b8d9", "#36b37e", "#00b8d9", "#00b8d9", "#00b8d9", "#00b8d9", "#00b8d9", "#0065ff", "#ff8f73", "#00b8d9", "#36b37e", "#f8e6a0", "#ffab00", "#ff8f73", "#36b37e", "#0065ff", "#0052cc", "#6554c0", "#8777d9"]
    },
    {
        category: "Content Type",
        values: ["Blog Post", "Case Study", "White Paper", "Ebook", "Infographic", "Video", "Podcast", "Webinar", "Social Post", "Email", "Newsletter", "Press Release", "Tutorial", "How-To Guide", "Interview", "Review", "Testimonial", "Product Demo", "Advertisement", "Landing Page", "Brochure", "Catalog", "Report", "Survey", "Quiz", "Interactive", "Template", "Checklist", "Worksheet", "Presentation"],
        colors: ["#00b8d9", "#0065ff", "#0052cc", "#00b8d9", "#6554c0", "#ff8f73", "#8777d9", "#0065ff", "#6554c0", "#0065ff", "#0065ff", "#ff5630", "#36b37e", "#36b37e", "#6554c0", "#f8e6a0", "#36b37e", "#00b8d9", "#ff8f73", "#00b8d9", "#f8e6a0", "#f8e6a0", "#0052cc", "#6554c0", "#00b8d9", "#6554c0", "#36b37e", "#36b37e", "#36b37e", "#6554c0"]
    },
    // BUSINESS AND MANAGEMENT
    {
        category: "Business Strategy",
        values: ["Drafting", "Approved", "Implementing", "Reviewing", "Stalled", "Completed", "Pivot Needed", "On Track", "At Risk", "Vision Set", "Goals Defined", "Metrics Assigned"],
        colors: ["#f8e6a0", "#36b37e", "#00b8d9", "#6554c0", "#ff8f73", "#00c7e6", "#ff5630", "#36b37e", "#ffab00", "#0052cc", "#f8e6a0", "#8777d9"]
    },
    {
        category: "Operations",
        values: ["Planning", "Active", "Optimized", "Disrupted", "Streamlined", "Blocked", "Under Review", "Scaling", "Stable", "Overloaded", "Maintenance", "Scheduled", "Emergency Fix"],
        colors: ["#f8e6a0", "#36b37e", "#00b8d9", "#ff5630", "#0065ff", "#ff8f73", "#6554c0", "#0052cc", "#36b37e", "#ffab00", "#8777d9", "#f8e6a0", "#ff5630"]
    },
    {
        category: "Leadership Skills",
        values: ["Developing", "Coaching", "Delegating", "Inspiring", "Struggling", "Mastered", "Training", "Mentoring", "Evaluating", "Adapting", "Visionary", "Tactical", "Empowering"],
        colors: ["#0065ff", "#36b37e", "#00b8d9", "#6554c0", "#ff8f73", "#00c7e6", "#f8e6a0", "#8777d9", "#0052cc", "#ffab00", "#ff5630", "#36b37e", "#00b8d9"]
    },
    // MARKETING AND SALES
    {
        category: "Sales Plan",
        values: ["Drafting", "Active", "Closed", "Lost", "Won", "Pending", "Forecasting", "Negotiating", "Follow-Up", "Cold Calling", "Upselling", "Target Met", "Below Target"],
        colors: ["#f8e6a0", "#36b37e", "#00b8d9", "#ff5630", "#00c7e6", "#ff8f73", "#0065ff", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#ff5630"]
    },
    {
        category: "Social Media",
        values: ["Scheduled", "Posted", "Engaging", "Trending", "Flopped", "Drafted", "Boosted", "Organic", "Paid", "Analyzing", "Paused", "Viral", "Moderated"],
        colors: ["#6554c0", "#36b37e", "#00b8d9", "#ffab00", "#ff5630", "#f8e6a0", "#0065ff", "#00c7e6", "#ff8f73", "#8777d9", "#0052cc", "#36b37e", "#6554c0"]
    },
    {
        category: "SEO",
        values: ["Researching", "Optimizing", "Ranking", "Dropped", "Indexing", "Crawled", "Backlinked", "Audited", "Improved", "Stagnant", "Competitive", "Tracked", "Analyzed"],
        colors: ["#0065ff", "#36b37e", "#00b8d9", "#ff5630", "#f8e6a0", "#ff8f73", "#00c7e6", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // PRODUCT AND ENGINEERING
    {
        category: "Software Building",
        values: ["Planning", "Coding", "Testing", "Debugging", "Deployed", "Failed", "Refactoring", "Optimized", "Blocked", "Released", "Prototyped", "Iterating", "Stable"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#ff8f73", "#36b37e", "#ff5630", "#6554c0", "#00c7e6", "#ffab00", "#8777d9", "#0052cc", "#36b37e", "#00b8d9"]
    },
    {
        category: "Product Launch",
        values: ["Pre-Launch", "Soft Launch", "Full Launch", "Delayed", "Cancelled", "Beta", "Alpha", "Live", "Post-Launch", "Analyzing", "Promoted", "Shipped", "Feedback Collected"],
        colors: ["#f8e6a0", "#00b8d9", "#36b37e", "#ffab00", "#ff5630", "#8777d9", "#6554c0", "#0065ff", "#ff8f73", "#00c7e6", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "R&D",
        values: ["Ideation", "Experimenting", "Prototyping", "Failed", "Promising", "Validated", "Researching", "Abandoned", "Funded", "Breakthrough", "Stagnant", "Scaled", "Documented"],
        colors: ["#0065ff", "#00b8d9", "#f8e6a0", "#ff5630", "#36b37e", "#00c7e6", "#6554c0", "#ff8f73", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // FINANCE AND ACCOUNTING
    {
        category: "Money Planning",
        values: ["Drafting", "Approved", "Tracking", "Over Budget", "Under Budget", "Balanced", "Adjusted", "Forecasted", "Reviewed", "Audited", "Pending", "Finalized", "Emergency Fund"],
        colors: ["#f8e6a0", "#36b37e", "#0065ff", "#ff5630", "#00b8d9", "#00c7e6", "#ff8f73", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Budgeting Ahead",
        values: ["Planning", "Set", "Overspent", "Underspent", "Adjusted", "Locked", "Projected", "Exceeded", "Saved", "Cut", "Reviewed", "Proposed", "Approved"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#00b8d9", "#ff8f73", "#0065ff", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#00b8d9"]
    },
    {
        category: "Cash Reporting",
        values: ["Drafted", "Submitted", "Verified", "Discrepancy", "Balanced", "Pending", "Audited", "Positive", "Negative", "Projected", "Reconciled", "Delayed", "Final"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#00b8d9", "#ff8f73", "#6554c0", "#00c7e6", "#ffab00", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // HUMAN RESOURCES
    {
        category: "HR Management",
        values: ["Active", "Onboarding", "Offboarding", "Planning", "Conflict", "Resolved", "Training", "Hiring", "Firing", "Promoting", "Evaluating", "Engaged", "Disengaged"],
        colors: ["#36b37e", "#00b8d9", "#ff8f73", "#f8e6a0", "#ff5630", "#00c7e6", "#0065ff", "#6554c0", "#ffab00", "#8777d9", "#0052cc", "#36b37e", "#ff5630"]
    },
    {
        category: "Team Training",
        values: ["Scheduled", "In Progress", "Completed", "Cancelled", "Needs Update", "Certified", "Pending", "Skill Gap", "Upskilled", "Assessed", "Ongoing", "Refresher", "Advanced"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#ff8f73", "#00b8d9", "#6554c0", "#ffab00", "#00c7e6", "#8777d9", "#0052cc", "#36b37e", "#00b8d9"]
    },
    {
        category: "Hiring Talent",
        values: ["Sourcing", "Interviewing", "Offered", "Rejected", "Hired", "Screening", "Shortlisted", "Declined", "Pending", "On Hold", "Background Check", "Negotiating", "Signed"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#00b8d9", "#ff8f73", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // CUSTOMER SUPPORT
    {
        category: "Customer Helping",
        values: ["Open", "Resolved", "Escalated", "Pending", "Closed", "Follow-Up", "Satisfied", "Dissatisfied", "In Progress", "Stalled", "Urgent", "Routine", "Feedback Received"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#ff8f73", "#00b8d9", "#00c7e6", "#0065ff", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Ticket Management",
        values: ["New", "Assigned", "In Progress", "Resolved", "Reopened", "Closed", "Blocked", "High Priority", "Low Priority", "Awaiting User", "Escalated", "Merged", "Duplicate"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#00b8d9", "#ff8f73", "#00c7e6", "#ff5630", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // IT AND SECURITY
    {
        category: "IT Running",
        values: ["Operational", "Down", "Maintenance", "Upgrading", "Stable", "Unstable", "Monitoring", "Issue Detected", "Resolved", "Deploying", "Backup", "Restored", "Optimized"],
        colors: ["#36b37e", "#ff5630", "#f8e6a0", "#0065ff", "#00b8d9", "#ff8f73", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Network Security",
        values: ["Secure", "Vulnerable", "Breached", "Patched", "Scanning", "Threat Detected", "Mitigated", "Unprotected", "Encrypted", "Monitored", "Firewall Up", "Intrusion", "Safe"],
        colors: ["#36b37e", "#ff5630", "#ff8f73", "#00b8d9", "#0065ff", "#ffab00", "#00c7e6", "#f8e6a0", "#6554c0", "#8777d9", "#0052cc", "#ff5630", "#36b37e"]
    },
    // LEGAL AND COMPLIANCE
    {
        category: "Staying Legal",
        values: ["Compliant", "Non-Compliant", "Under Review", "Pending", "Approved", "Violated", "Audited", "Drafted", "Enforced", "Updated", "Expired", "Investigated", "Cleared"],
        colors: ["#36b37e", "#ff5630", "#f8e6a0", "#ff8f73", "#00b8d9", "#ffab00", "#0065ff", "#00c7e6", "#6554c0", "#8777d9", "#0052cc", "#ff5630", "#36b37e"]
    },
    {
        category: "Contract Management",
        values: ["Drafted", "Signed", "Expired", "Renewed", "Terminated", "Negotiating", "Reviewed", "Pending", "Active", "Breached", "Amended", "Finalized", "Disputed"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#00b8d9", "#ff8f73", "#0065ff", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#ff5630"]
    },
    // FACILITIES AND OPERATIONS
    {
        category: "Facilities Running",
        values: ["Operational", "Closed", "Maintenance", "Upgraded", "Damaged", "Repaired", "Inspected", "Overloaded", "Stable", "Renovating", "Occupied", "Vacant", "Optimized"],
        colors: ["#36b37e", "#ff5630", "#f8e6a0", "#0065ff", "#ff8f73", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Property Handling",
        values: ["Owned", "Leased", "Vacant", "Occupied", "Sold", "Purchased", "Renovated", "Listed", "Pending Sale", "Inspected", "Appraised", "Developed", "Abandoned"],
        colors: ["#36b37e", "#00b8d9", "#f8e6a0", "#0065ff", "#ff5630", "#ff8f73", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#ff5630"]
    },
    // PERSONAL AND LIFESTYLE
    {
        category: "Goal Setting",
        values: ["Set", "In Progress", "Achieved", "Missed", "Adjusted", "Abandoned", "Pending", "Long-Term", "Short-Term", "Daily", "Weekly", "Monthly", "Yearly"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#ff8f73", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Daily Stuff",
        values: ["Planned", "Completed", "Skipped", "Overdue", "In Progress", "Blocked", "Routine", "Urgent", "Relaxed", "Busy", "Delegated", "Reviewed", "Optimized"],
        colors: ["#f8e6a0", "#36b37e", "#ff8f73", "#ff5630", "#0065ff", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // HEALTH AND WELLNESS
    {
        category: "Doctor Appointments",
        values: ["Scheduled", "Attended", "Missed", "Rescheduled", "Pending", "Confirmed", "Cancelled", "Urgent", "Routine", "Follow-Up", "Telehealth", "In-Person", "Completed"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#ff8f73", "#0065ff", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // PERSONAL FINANCE
    {
        category: "Monthly Budget",
        values: ["Drafted", "Set", "Overspent", "Underspent", "Adjusted", "Balanced", "Reviewed", "Exceeded", "Saved", "Tracked", "Pending", "Finalized", "Emergency"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#00b8d9", "#ff8f73", "#0065ff", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // HOME MANAGEMENT
    {
        category: "Cleaning Routine",
        values: ["Scheduled", "Completed", "Skipped", "In Progress", "Overdue", "Daily", "Weekly", "Monthly", "Deep Clean", "Spot Clean", "Delegated", "Planned", "Optimized"],
        colors: ["#f8e6a0", "#36b37e", "#ff8f73", "#0065ff", "#ff5630", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // RELATIONSHIPS
    {
        category: "Family Game Nights",
        values: ["Planned", "Held", "Cancelled", "Rescheduled", "In Progress", "Fun", "Chaotic", "Weekly", "Monthly", "Special Event", "Pending", "Enjoyed", "Memorable"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#ff8f73", "#0065ff", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // PERSONAL DEVELOPMENT
    {
        category: "Online Courses",
        values: ["Enrolled", "In Progress", "Completed", "Dropped", "Paused", "Certified", "Pending", "Self-Paced", "Live", "Reviewed", "Challenging", "Mastered", "Exploring"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#ff5630", "#ff8f73", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // TRAVEL AND LEISURE
    {
        category: "Weekend Getaways",
        values: ["Planned", "Booked", "Completed", "Cancelled", "In Progress", "Budgeted", "Spontaneous", "Relaxing", "Adventurous", "Pending", "Memorable", "Local", "Distant"],
        colors: ["#f8e6a0", "#36b37e", "#00b8d9", "#ff5630", "#0065ff", "#ff8f73", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // DAILY ROUTINES
    {
        category: "Morning Rituals",
        values: ["Set", "Completed", "Skipped", "Adjusted", "In Progress", "Relaxed", "Rushed", "Daily", "Optimized", "Disrupted", "Pending", "Energizing", "Calm"],
        colors: ["#f8e6a0", "#36b37e", "#ff8f73", "#ff5630", "#0065ff", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // AGING AND ELDER CARE
    {
        category: "Health Check-ups for Seniors",
        values: ["Scheduled", "Completed", "Missed", "Rescheduled", "Urgent", "Routine", "Pending", "Follow-Up", "Cancelled", "Confirmed", "Telehealth", "In-Person", "Reviewed"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#ff8f73", "#ffab00", "#00b8d9", "#0065ff", "#00c7e6", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // CHILDCARE AND PARENTING
    {
        category: "Child’s Daily Routine",
        values: ["Set", "Followed", "Disrupted", "Adjusted", "Skipped", "Morning", "Afternoon", "Evening", "Bedtime", "Playtime", "School", "Homework", "Flexible"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#ff8f73", "#0065ff", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // IMMIGRATION AND RELOCATION
    {
        category: "Immigration Laws",
        values: ["Researching", "Understood", "Confusing", "Applying", "Approved", "Denied", "Pending", "Updated", "Expired", "Consulted", "Complied", "Violated", "Reviewed"],
        colors: ["#f8e6a0", "#36b37e", "#ff8f73", "#0065ff", "#00b8d9", "#ff5630", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // MILITARY AND VETERAN AFFAIRS
    {
        category: "Veteran Benefits",
        values: ["Applied", "Approved", "Denied", "Pending", "Processing", "Received", "Expired", "Renewed", "Reviewed", "Appealed", "Delayed", "Completed", "In Progress"],
        colors: ["#f8e6a0", "#36b37e", "#ff5630", "#ff8f73", "#0065ff", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // SPACE EXPLORATION AND ASTRONOMY
    {
        category: "Stargazing",
        values: ["Planned", "Completed", "Cloudy", "Clear", "In Progress", "Logged", "Missed", "Telescoped", "Naked Eye", "Photographed", "Shared", "Solo", "Group"],
        colors: ["#f8e6a0", "#36b37e", "#ff8f73", "#0065ff", "#00b8d9", "#00c7e6", "#ff5630", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // EDUCATION AND LEARNING
    {
        category: "Course Creation",
        values: ["Planning", "Drafting", "Reviewing", "Approved", "Published", "Updating", "Archived", "In Development", "Pilot", "Live", "Feedback Collected", "Iterating", "Completed"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#00c7e6", "#ff8f73", "#ff5630", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Lesson Planning",
        values: ["Drafted", "Reviewed", "Approved", "Taught", "Revised", "Archived", "In Progress", "Scheduled", "Cancelled", "Rescheduled", "Completed", "Feedback Received", "Optimized"],
        colors: ["#f8e6a0", "#0065ff", "#36b37e", "#00b8d9", "#ff8f73", "#ff5630", "#6554c0", "#00c7e6", "#ffab00", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // CREATIVE PROJECTS
    {
        category: "Content Making",
        values: ["Ideation", "Drafting", "Editing", "Published", "Promoted", "Archived", "In Progress", "Completed", "Feedback Received", "Iterating", "Abandoned", "Scheduled", "Live"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#00c7e6", "#ff8f73", "#ff5630", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Photography",
        values: ["Planning", "Shooting", "Editing", "Published", "Exhibited", "Archived", "In Progress", "Completed", "Feedback Received", "Iterating", "Abandoned", "Scheduled", "Live"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#00c7e6", "#ff8f73", "#ff5630", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // EVENT PLANNING
    {
        category: "Event Planning",
        values: ["Ideation", "Planning", "Scheduling", "Promoting", "Executing", "Post-Event", "Completed", "Cancelled", "Rescheduled", "In Progress", "Feedback Collected", "Iterating", "Live"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#00c7e6", "#ff8f73", "#ff5630", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Conference Management",
        values: ["Planning", "Scheduling", "Promoting", "Executing", "Post-Event", "Completed", "Cancelled", "Rescheduled", "In Progress", "Feedback Collected", "Iterating", "Live", "Registrations Open"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#00c7e6", "#ff8f73", "#ff5630", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // HEALTH AND WELLNESS
    {
        category: "Wellness Management",
        values: ["Planning", "Tracking", "Improving", "Maintaining", "Struggling", "Achieved", "In Progress", "Completed", "Feedback Received", "Iterating", "Abandoned", "Scheduled", "Live"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#36b37e", "#00c7e6", "#ff8f73", "#ff5630", "#6554c0", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Workout Planning",
        values: ["Scheduled", "Completed", "Skipped", "In Progress", "Overdue", "Daily", "Weekly", "Monthly", "Intense", "Light", "Delegated", "Planned", "Optimized"],
        colors: ["#f8e6a0", "#36b37e", "#ff8f73", "#0065ff", "#ff5630", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // HOBBIES AND INTERESTS
    {
        category: "Hobby Running",
        values: ["Planning", "Active", "Paused", "Completed", "Abandoned", "In Progress", "Feedback Received", "Iterating", "Scheduled", "Live", "Shared", "Solo", "Group"],
        colors: ["#f8e6a0", "#36b37e", "#ff8f73", "#ff5630", "#0065ff", "#00b8d9", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Garden Planning",
        values: ["Planning", "Planting", "Growing", "Harvesting", "Maintaining", "Abandoned", "In Progress", "Feedback Received", "Iterating", "Scheduled", "Live", "Shared", "Solo"],
        colors: ["#f8e6a0", "#36b37e", "#00b8d9", "#ff8f73", "#ff5630", "#0065ff", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    // TECHNOLOGY AND INNOVATION
    {
        category: "AI Exploration",
        values: ["Researching", "Experimenting", "Prototyping", "Failed", "Promising", "Validated", "Researching", "Abandoned", "Funded", "Breakthrough", "Stagnant", "Scaled", "Documented"],
        colors: ["#0065ff", "#00b8d9", "#f8e6a0", "#ff5630", "#36b37e", "#00c7e6", "#6554c0", "#ff8f73", "#8777d9", "#ffab00", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Machine Learning",
        values: ["Planning", "Modeling", "Training", "Testing", "Deployed", "Failed", "Refining", "Optimized", "Blocked", "Released", "Prototyped", "Iterating", "Stable"],
        colors: ["#f8e6a0", "#0065ff", "#00b8d9", "#ff8f73", "#36b37e", "#ff5630", "#6554c0", "#00c7e6", "#ffab00", "#8777d9", "#0052cc", "#36b37e", "#00b8d9"]
    },
    // COMMUNITY AND SOCIAL PROJECTS
    {
        category: "Community Art Initiative",
        values: ["Proposed", "Funded", "In Progress", "Completed", "Displayed", "Cancelled", "Collaborating", "Solo", "Public", "Private", "Planned", "Critiqued", "Celebrated"],
        colors: ["#f8e6a0", "#36b37e", "#0065ff", "#00b8d9", "#ff8f73", "#ff5630", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },
    {
        category: "Weekly Meal Prep",
        values: ["Planned", "Prepped", "Cooked", "Stored", "Eaten", "Skipped", "Shared", "Healthy", "Quick", "Complex", "Budgeted", "Tasted", "Adjusted"],
        colors: ["#f8e6a0", "#36b37e", "#00b8d9", "#0065ff", "#ff8f73", "#ff5630", "#00c7e6", "#ffab00", "#6554c0", "#8777d9", "#0052cc", "#36b37e", "#f8e6a0"]
    },

    // ----------------------------------------------------------------
    //  BUSINESS & MANAGEMENT (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Board Meeting Phase",
        values: [
            "Agenda Setting", "Board Packet Sent", "In Session", "Quorum Reached", "Voting", "Minutes Drafted",
            "Minutes Approved", "Action Items Assigned", "Follow-Up Scheduled", "Executive Session", "Adjourned",
            "Post-Meeting Survey", "Ratification", "Closed Session", "Open Forum", "Special Meeting",
            "Emergency Meeting", "Annual Meeting", "Budget Approval", "New Policies Review",
            "Awaiting Documents", "Auditor Report Received", "Committee Updates", "Performance Review",
            "Strategic Review", "Crisis Discussion", "Appointment of Officers", "Bylaws Amendment", "Board Renewal"
        ],
        colors: [
            "#D0E8F2", "#BAE1FF", "#FFF5BA", "#FED9B7", "#E2F0CB", "#FFB3C6", "#D4A5A5", "#B5EAD7", "#FDC5F5",
            "#FFDAC1", "#B5B9FC", "#FFC6FF", "#FFD3B6", "#B0FFB0", "#A5A5A5", "#FFAACC", "#C0C0C0", "#FFD580",
            "#CCFFCC", "#F2C6FF", "#FFE5B4", "#BCAAA4", "#CECECE", "#D8D8D8", "#DAF7A6", "#FF5733", "#C70039",
            "#900C3F", "#581845"
        ]
    },
    {
        category: "Merger Integration Stage",
        values: [
            "Pre-Due Diligence", "Due Diligence", "Regulatory Filing", "Closing Approaches", "Day One Planning",
            "Legal Entity Consolidation", "IT Systems Merge", "Brand Identity Merge", "HR Integration",
            "Culture Harmonization", "Product Overlap Review", "Redundancy Check", "Synergy Realization",
            "Communication Plan", "Post-Merger Transition", "Integration Steering Committee", "Office Relocation",
            "Financial Systems Alignment", "Contract Harmonization", "Customer Communication", "Vendor Transition",
            "Post-Merger Review", "Success Metrics", "Regulatory Approval", "Implementation Kickoff",
            "Stakeholder Roadshow", "Interim Leadership", "Full Integration Achieved", "Retrospective", "Spin-Off"
        ],
        colors: [
            "#FFF7E6", "#FFEBCC", "#FFDFB3", "#FFD399", "#FFC680", "#FFBA66", "#FFAE4D", "#FFA333", "#FF971A",
            "#FF8B00", "#E67E22", "#CF711F", "#B7641B", "#9F5718", "#884914", "#703B11", "#FFECB3", "#FFF8E1",
            "#FFE082", "#FFD54F", "#FFCA28", "#FFB300", "#FFA000", "#FF7F0E", "#FFB347", "#FFDAB9", "#EECBAD",
            "#FFD1DC", "#F7CAC9", "#92A8D1"
        ]
    },
    {
        category: "Leadership Trait",
        values: [
            "Empathy", "Visionary", "Strategic Thinker", "Decisive", "Collaborative", "Inspirational",
            "Emotionally Intelligent", "Adaptable", "Ethical", "Transparent", "Accountable", "Responsible",
            "Innovative", "Delegator", "Motivator", "Empowerer", "Listener", "Mentor", "Role Model", "Risk-Taker",
            "Integrity", "Confidence", "Approachable", "Credible", "Resilience", "Humble", "Futuristic",
            "Diplomatic", "Servant Leader", "Results-Oriented", "Persuasive", "Trustworthy", "Inclusive",
            "Growth Mindset", "Logical", "Vision Communicator", "Culture Builder", "Big-Picture Oriented"
        ],
        colors: [
            "#C8FACC", "#ADEFD1", "#FFB6C1", "#FF7F50", "#FFFFE0", "#D1E231", "#76EEC6", "#7FFFD4", "#E0FFFF",
            "#F0FFF0", "#FFF8DC", "#FFE4C4", "#FFDAB9", "#FFEFD5", "#FFFACD", "#FFFFE0", "#98FB98", "#90EE90",
            "#00FA9A", "#00FF7F", "#7CFC00", "#7FFF00", "#ADFF2F", "#B0E0E6", "#87CEEB", "#87CEFA", "#4682B4",
            "#B0C4DE", "#ADD8E6", "#F08080", "#FA8072", "#E9967A", "#FFA07A", "#FF7F50", "#F4A460", "#CD5C5C",
            "#FFC0CB", "#FFE4E1"
        ]
    },
    {
        category: "Risk Audit Topics",
        values: [
            "Market Volatility", "Credit Exposure", "Operational Gaps", "Compliance Gaps", "Fraud Detection",
            "Supply Chain Interruption", "Vendor Reliability", "Data Breach Risk", "Regulatory Shifts",
            "Technology Obsolescence", "Climate Impact", "Pandemic Resilience", "Political Instability",
            "Reputational Damage", "Management Override", "SOX Compliance", "Ethics Violation", "Corruption Risk",
            "Whistleblower Cases", "Cybersecurity", "Cloud Migration Risk", "Data Privacy Violations",
            "License Compliance", "Tax Evasion Risk", "Uninsured Liabilities", "Budget Overruns", "Project Slippage",
            "Adverse Currency Fluctuations", "Stagnant Innovation", "Merger Risk", "Third-Party Dependency",
            "IT System Failure", "Employee Turnover Risk", "Pandemic Response", "Crisis Management Efficacy"
        ],
        colors: [
            "#C9C9FF", "#B9B9F3", "#CCFFFF", "#CCE5FF", "#D6EAF8", "#AED6F1", "#85C1E9", "#5DADE2", "#3498DB",
            "#2E86C1", "#2874A6", "#21618C", "#1B4F72", "#1B2631", "#641E16", "#7D6608", "#145A32", "#0B5345",
            "#186A3B", "#17A589", "#148F77", "#117864", "#0E6251", "#7E5109", "#6E2C00", "#D4AC0D", "#7D6608",
            "#E67E22", "#BA4A00", "#A04000", "#6E2C00", "#5B2C6F", "#6C3483", "#7D3C98", "#8E44AD"
        ]
    },

    // ----------------------------------------------------------------
    // MARKETING & SALES (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Market Segmentation",
        values: [
            "Demographic", "Geographic", "Behavioral", "Psychographic", "Firmographic", "Lifestyle", "Income-Based",
            "Gender-Focused", "High Net Worth", "Low-Income", "College Students", "Professionals", "Retirees",
            "Impulse Buyers", "Brand-Loyal", "Deal Seekers", "Tech-Savvy", "Health Conscious", "Environmentalists",
            "Travel Lovers", "Foodies", "Sports Fans", "DIY Enthusiasts", "Pet Owners", "Gamers", "New Parents",
            "Seniors 65+", "Millennials", "Gen Z", "Gen X", "Rural", "Urban", "Suburban", "Niche Hobbyists",
            "Luxury Seekers", "Value Seekers", "Early Adopters", "Late Majority"
        ],
        colors: [
            "#FFF0F5", "#FDEEF4", "#F5EEF8", "#EBF5FB", "#E8F8F5", "#E9F7EF", "#FEF9E7", "#FEF5E7", "#FDF2E9",
            "#FAE5D3", "#F9EBEA", "#FDEDEC", "#FDFEFE", "#F8F9F9", "#EBEDEF", "#EAECEE", "#D5DBDB", "#CCD1D1",
            "#AEB6BF", "#ABB2B9", "#D2B4DE", "#BB8FCE", "#E8DAEF", "#F2D7D5", "#FADBD8", "#FDEBD0", "#FCF3CF",
            "#F9E79F", "#F7DC6F", "#F5B7B1", "#FAD7A0", "#FFDFBA", "#FFD3B6", "#FFB7B2", "#D4A5A5", "#CAB2FF"
        ]
    },
    {
        category: "Pricing Strategy",
        values: [
            "Penetration Pricing", "Skimming Pricing", "Competition-Based", "Cost-Plus", "Dynamic Pricing",
            "Bundle Pricing", "Psychological Pricing", "Premium Pricing", "Freemium Model", "Pay-What-You-Want",
            "Subscription Model", "Value-Based", "Loss Leader", "Volume Discount", "Tiered Pricing",
            "Geographic Pricing", "Segmented Pricing", "Peak Pricing", "Paywall", "Auction Pricing",
            "Name Your Price", "Hourly Billing", "Flat Rate", "Licensing Fee", "Markup Pricing",
            "Membership Discount", "Promotional Discount", "Seasonal Pricing", "Two-Part Tariff", "Personalized Pricing"
        ],
        colors: [
            "#FAFAD2", "#FFE4C4", "#FFDAB9", "#E6E6FA", "#FFFACD", "#FF69B4", "#FFD700", "#DAA520", "#B8860B",
            "#F4A460", "#CD853F", "#D2B48C", "#DEB887", "#F5DEB3", "#FFEFD5", "#FFEBCD", "#FFF8DC", "#FFF5EE",
            "#FFDEAD", "#FAEBD7", "#FFE4E1", "#F0FFF0", "#F0FFFF", "#00FFFF", "#7FFFD4", "#E0FFFF", "#F5FFFA",
            "#E6F2FF", "#ACE1AF", "#E3F9F2"
        ]
    },
    {
        category: "Influencer Collab Stage",
        values: [
            "Research Influencers", "Contact Initiated", "Negotiations", "Contract Drafted", "Creative Brief Shared",
            "Content Creation", "Content Approval", "Scheduled Post", "Post Live", "Monitoring Engagement",
            "Payment Processed", "Case Study", "Relationship Building", "Renewal Discussion", "Affiliate Links Set",
            "Product Seeded", "Sponsored Story Posted", "Whitelisting Ads", "Channel Takeover", "Giveaway Collab",
            "Short-Form Video", "Long-Form Video", "Brand Ambassador Contract", "Exclusive Collab",
            "Influencer Event", "Influencer Trip", "Feedback Session", "Performance Review", "Collab Extended",
            "Collab Ended"
        ],
        colors: [
            "#FFFFE0", "#FFFACD", "#FAFAD2", "#FFEFD5", "#FFE4E1", "#FFDEAD", "#DEB887", "#CD853F", "#D2691E",
            "#F4A460", "#DAA520", "#B8860B", "#CD5C5C", "#BC8F8F", "#DB7093", "#FFC0CB", "#EE82EE", "#DDA0DD",
            "#BA55D3", "#9932CC", "#8A2BE2", "#9400D3", "#8B008B", "#800080", "#9370DB", "#7B68EE", "#6A5ACD",
            "#483D8B", "#663399", "#4B0082"
        ]
    },

    // ----------------------------------------------------------------
    //  PRODUCT & ENGINEERING (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Architecture Style",
        values: [
            "Monolith", "Microservices", "Service-Oriented", "Event-Driven", "Serverless", "Layered", "Hexagonal",
            "Onion", "Clean Architecture", "MVC", "MVVM", "CQRS", "Microkernel", "Plugin-Based", "Big Ball of Mud",
            "Client-Server", "Peer-to-Peer", "Embedded", "Real-Time System", "Machine Learning Pipeline",
            "Data Warehouse", "Data Lake", "Data Lakehouse", "Graph Architecture", "Service Mesh", "Single-Page App",
            "Multi-Page App", "Headless", "Composable", "Zero Trust Security"
        ],
        colors: [
            "#B0E0E6", "#AFEEEE", "#ADD8E6", "#87CEFA", "#87CEEB", "#6495ED", "#00BFFF", "#1E90FF", "#4169E1",
            "#4682B4", "#5F9EA0", "#6495ED", "#7B68EE", "#6A5ACD", "#483D8B", "#191970", "#00008B", "#0000CD",
            "#0000FF", "#4169E1", "#8A2BE2", "#4B0082", "#9370DB", "#BA55D3", "#EE82EE", "#DDA0DD", "#DA70D6",
            "#9932CC", "#9400D3", "#800080"
        ]
    },
    {
        category: "Technical Documentation",
        values: [
            "API Reference", "Developer Guide", "User Manual", "System Design Doc", "Release Notes",
            "Installation Guide", "Architecture Diagram", "Data Dictionary", "Design Proposal",
            "Style Guide", "Coding Standards", "Runbook", "Troubleshooting Guide", "FAQ",
            "Contributing Guidelines", "Test Plan", "Roadmap", "Security Policy", "Performance Metrics",
            "Service Level Agreement (SLA)", "Tutorial", "Knowledge Base Article", "Migration Guide",
            "Upgrade Instructions", "Rollout Checklist", "Incident Postmortem", "Support Handbook",
            "Development Workflow", "Infrastructure Diagram", "Integration Guide"
        ],
        colors: [
            "#FDF5E6", "#FAEBD7", "#FAF0E6", "#F0FFF0", "#F0FFFF", "#E6E6FA", "#FFF0F5", "#FFE4E1", "#FFEBCD",
            "#FFEFD5", "#FFFACD", "#FFF8DC", "#FFFAF0", "#FFF5EE", "#F8F8FF", "#E0FFFF", "#F5FFFA", "#FFF8DC",
            "#FFFAF0", "#FFF5EE", "#F8F8FF", "#E6E6FA", "#FAFAD2", "#F5DEB3", "#FFE4B5", "#F0E68C", "#BDB76B",
            "#EEE8AA", "#F0E68C", "#F5F5DC"
        ]
    },
    {
        category: "Refactor Category",
        values: [
            "Code Clean-Up", "Modularization", "De-Spaghetti", "Renaming Variables", "Splitting Classes",
            "Method Extraction", "Removing Dead Code", "Performance Tuning", "Language Upgrade",
            "Dependency Update", "Eliminating Globals", "Reducing Cyclomatic Complexity",
            "Improve Readability", "Restructure Folders", "Normalize Database", "Dockerize",
            "Decouple Layers", "API Versioning", "Separate Concerns", "Lint Fixes",
            "Switch from OOP to Functional", "Switch from ORM X to Y", "Standardize Logging",
            "Memory Optimization", "Break Circular Dependencies", "Cleanup Code Smells",
            "Simplify Conditionals", "Replace If-Else with Polymorphism", "Introduce Patterns",
            "Orchestrate Microservices"
        ],
        colors: [
            "#FFFDD0", "#FAFAD2", "#FFE4B5", "#FFD700", "#FFA500", "#FF8C00", "#FF7F50", "#FF6347", "#FF4500",
            "#FF1493", "#FF69B4", "#FFB6C1", "#FFC0CB", "#FFDAB9", "#EEE8AA", "#F0E68C", "#BDB76B", "#A9A9A9",
            "#D3D3D3", "#696969", "#708090", "#778899", "#808080", "#A9A9A9", "#C0C0C0", "#DCDCDC", "#F5F5F5",
            "#BC8F8F", "#B8860B", "#DAA520"
        ]
    },

    // ----------------------------------------------------------------
    //  FINANCE & ACCOUNTING (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Invoice Status",
        values: [
            "Draft", "Sent", "Viewed", "Partially Paid", "Fully Paid", "Overpaid", "Void", "Write-Off",
            "Disputed", "Refunded", "Under Review", "Payment Plan", "Awaiting Approval",
            "Awaiting Payment", "Net 15", "Net 30", "Net 45", "Net 60", "Late", "Penalty Incurred",
            "Collections", "Revised", "Credit Note Issued", "Recurring Invoice", "Pending Refund",
            "Chargeback", "Cancelled", "Archived", "Auto-Billed", "Bounced"
        ],
        colors: [
            "#E1F7E7", "#C1E1C1", "#B4E1B4", "#A7E1A7", "#9AE19A", "#81E181", "#6AE16A", "#4BE14B", "#2FE12F",
            "#17E117", "#D5F5E3", "#ABEBC6", "#82E0AA", "#58D68D", "#2ECC71", "#28B463", "#1D8348", "#145A32",
            "#0B5345", "#212F3D", "#2C3E50", "#273746", "#1B4F72", "#148F77", "#117A65", "#0E6251", "#09BDBE",
            "#036666", "#C5E7E2", "#CFD8DC"
        ]
    },
    {
        category: "Grant Type",
        values: [
            "Research Grant", "Scholarship Grant", "Startup Grant", "Community Development Grant", "Arts Grant",
            "STEM Education Grant", "Healthcare Grant", "Nonprofit Operational Grant", "Capacity-Building Grant",
            "Emergency Relief Grant", "Youth Program Grant", "Elder Care Grant", "Housing Grant", "Environmental Grant",
            "Food Security Grant", "Tech Innovation Grant", "Minority-Owned Business Grant", "Women-Led Initiative Grant",
            "Cultural Preservation Grant", "Historic Restoration Grant", "Science & Tech Fellowship", "Travel Grant",
            "Sabbatical Grant", "Infrastructure Grant", "Rural Development Grant", "Urban Renewal Grant",
            "Sustainability Grant", "Climate Research Grant", "Social Enterprise Grant", "Arts Fellowship"
        ],
        colors: [
            "#FFFACD", "#FFF8DC", "#FAFAD2", "#FFEFD5", "#FFEB99", "#FFE066", "#FFD633", "#FFCC00", "#FFBF00",
            "#FFB300", "#FFAA00", "#FFA500", "#E28B00", "#CC7A00", "#B36B00", "#995C00", "#804D00", "#663E00",
            "#4D2F00", "#331F00", "#FFF0F5", "#FFE4E1", "#FFEFDB", "#F8F0E3", "#FFF5E1", "#FFF9E1", "#FEFCE0",
            "#F9FFE1", "#EBFFE1", "#E6F2F0"
        ]
    },

    // ----------------------------------------------------------------
    //  HUMAN RESOURCES (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Conflict Resolution",
        values: [
            "Mediation Started", "Mediation Completed", "Arbitration Required", "Manager Intervention",
            "Peer-to-Peer Dialogue", "Conflict Training", "Formal Warning", "Verbal Counseling",
            "External Coach Brought In", "Situation Escalated", "Resolution Achieved", "Ongoing Tension",
            "Policy Update Needed", "Anonymous Reporting", "Team Communication Workshop",
            "Mutual Agreement", "Compensation Adjustment", "Department Transfer", "Leadership Mentorship",
            "No-Fault Separation", "Constructive Discussion", "Documented Warning", "Final Warning",
            "Probation Extended", "Relocation Option", "Job Reassignment", "Cultural Sensitivity Training",
            "Performance Review Triggered", "Conflict Dissolved", "Follow-Up Scheduled"
        ],
        colors: [
            "#E0FFFF", "#AFEEEE", "#B0E0E6", "#ADD8E6", "#87CEFA", "#87CEEB", "#00BFFF", "#1E90FF", "#6495ED",
            "#4169E1", "#4682B4", "#5F9EA0", "#7B68EE", "#6A5ACD", "#483D8B", "#191970", "#00008B", "#0000CD",
            "#0000FF", "#B0C4DE", "#708090", "#778899", "#808080", "#A9A9A9", "#696969", "#2F4F4F", "#FAF0E6",
            "#FAEBD7", "#FFE4C4", "#E9967A"
        ]
    },
    {
        category: "Payroll Event",
        values: [
            "Monthly Payout", "Bi-Weekly Payout", "Weekly Payout", "Tax Withholding Update",
            "Year-End Bonus", "Performance Bonus", "Overtime Pay", "Commission Pay", "Payroll Error",
            "Back Pay", "Pay Rate Change", "Holiday Pay", "Sick Leave Payment", "Maternity Leave Payment",
            "Bereavement Leave Payment", "Retroactive Pay", "Garnishment", "401(k) Contribution",
            "Pension Contribution", "Insurance Deduction", "Loan Repayment Deduction", "Pay Stub Issued",
            "W-2 Issued", "1099 Issued", "Severance Pay", "Expense Reimbursement", "Lump Sum Payment",
            "Final Paycheck", "Hourly Rate Adjustment", "Annual Salary Adjustment"
        ],
        colors: [
            "#E6E6FA", "#D8BFD8", "#DDA0DD", "#EE82EE", "#DA70D6", "#BA55D3", "#9932CC", "#8A2BE2", "#9400D3",
            "#800080", "#4B0082", "#663399", "#7B68EE", "#6A5ACD", "#483D8B", "#9370DB", "#C8A2C8", "#D8BFD8",
            "#DDA0DD", "#DEB887", "#F5DEB3", "#FFE4C4", "#FFDAB9", "#FFE4B5", "#F5F5DC", "#FAF0E6", "#FAEBD7",
            "#FFEBCD", "#FFEFD5", "#FFF8DC"
        ]
    },

    // ----------------------------------------------------------------
    //  CUSTOMER SUPPORT (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Complaints Handling",
        values: [
            "Received", "Assigned Agent", "Investigating", "Waiting on Info", "Replied to Customer",
            "Solution Offered", "Escalated to Supervisor", "Resolved: Partial Refund", "Resolved: Full Refund",
            "Resolved: Replacement Sent", "Resolved: Apology Email", "No Response from Customer",
            "Closed - Customer Happy", "Closed - Customer Unhappy", "Under Legal Review",
            "Automated Acknowledgment Sent", "Awaiting Customer Documents", "Technical Analysis Ongoing",
            "Pending Management Approval", "Additional Evidence Required", "Ticket Re-Opened", "Ticket Merged",
            "Goodwill Gesture Offered", "Service Recovery Attempt", "Follow-Up Survey Sent", "Positive Survey Return",
            "Negative Survey Return", "Public Complaint Social Media", "VIP Complaint", "Brand Reputation Risk"
        ],
        colors: [
            "#E3F2FD", "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0",
            "#0D47A1", "#E8EAF6", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F",
            "#283593", "#1A237E", "#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA",
            "#7B1FA2", "#6A1B9A", "#4A148C"
        ]
    },
    {
        category: "Ticket Priority Reason",
        values: [
            "Security Breach", "Data Loss", "Revenue Impacting", "Feature Unusable", "Major Bug",
            "Minor Bug", "Billing Error", "Fraud Alert", "Legal Inquiry", "Compliance Issue",
            "VIP Customer", "Escalation Policy", "Multiple Complaints Merged", "Time-Sensitive",
            "Downtime Caused", "Service Instability", "Hardware Failure", "API Outage", "Accidental Deletion",
            "Recovery Needed", "User Error", "Miscommunication", "SLA Requirement", "Customer Breach",
            "Server Crash", "Performance Degradation", "High Impact Region", "Large Customer Account",
            "Pending Renewal", "Threat to Churn"
        ],
        colors: [
            "#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457",
            "#880E4F", "#F9FBE7", "#F0F4C3", "#E6EE9C", "#DCE775", "#D4E157", "#CDDC39", "#C0CA33", "#AFB42B",
            "#9E9D24", "#827717", "#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#BBDEFB", "#E3F2FD", "#FFCDD2",
            "#EF9A9A", "#FFCCBC", "#FFAB91"
        ]
    },

    // ----------------------------------------------------------------
    //  IT & SECURITY (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Incident Classification",
        values: [
            "Unplanned Outage", "Partial Degradation", "Network Latency", "Security Incident", "Phishing Attempt",
            "Malware Infection", "Ransomware Detected", "Service Misconfiguration", "Unauthorized Access",
            "API Rate Limits Reached", "Server Crash", "Memory Leak", "Database Lock", "DNS Issue",
            "Email Outage", "Expired Certificate", "DDoS Attack", "Failover Triggered", "Replication Failure",
            "Hardware Burnout", "Cooling Failure", "Rack Overheating", "Privilege Escalation Attempt",
            "Password Dump", "Insider Threat", "Botnet Attack", "Social Engineering", "Zero-Day Exploit",
            "Data Corruption", "Resource Exhaustion", "Brute Force Attempt", "Man-in-the-Middle Attack"
        ],
        colors: [
            "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#D81B60", "#C2185B", "#AD1457", "#880E4F",
            "#FCE4EC", "#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F",
            "#C62828", "#B71C1C", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000", "#FF8F00", "#FF6F00",
            "#FFE57F", "#FFD740", "#FFC400", "#FFAB00", "#FFF9C4"
        ]
    },
    {
        category: "Access Control Type",
        values: [
            "Password-Based", "Multi-Factor Authentication", "Single Sign-On", "Biometric", "Role-Based Access",
            "Attribute-Based Access", "Discretionary Access", "Mandatory Access", "OAuth2", "OpenID Connect",
            "JWT Token", "SAML", "LDAP", "RADIUS", "Zero Trust Network", "Privileged Access Management",
            "Least Privilege", "Federated Identity", "Certificate-Based", "Smart Card", "Time-Based Access",
            "Geo-Restricted Access", "Conditional Access", "Device Fingerprinting", "SSO with Okta",
            "SSO with Azure AD", "SSO with Ping", "SSO with Auth0", "API Key", "IP Whitelisting"
        ],
        colors: [
            "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20",
            "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#689F38", "#558B2F", "#33691E", "#CCFF90",
            "#B2FF59", "#76FF03", "#64DD17", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047",
            "#388E3C", "#2E7D32", "#1B5E20"
        ]
    },

    // ----------------------------------------------------------------
    //  LEGAL & COMPLIANCE (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Regulation Tracking",
        values: [
            "FTC Compliance", "FDA Compliance", "ITAR", "Export Control", "CPSIA", "HIPAA Update", "PCI 4.0",
            "GDPR Fines", "CCPA Deadline", "NYDFS Cyber Regs", "SOX 404", "Basel III", "MiFID II", "PSD2",
            "DFARS", "FedRAMP", "FERPA Update", "COBIT 2020", "EBA Guidelines", "FINRA Rules",
            "HMDA", "ECOA", "RESPA", "OSHA Update", "EPA Standards", "Title IX Changes",
            "Housing Discrimination", "Americans with Disabilities Act", "COPPA Update", "PHI Disposal"
        ],
        colors: [
            "#FDEDEC", "#FADBD8", "#F5B7B1", "#F1948A", "#EC7063", "#E74C3C", "#CB4335", "#B03A2E", "#943126",
            "#78281F", "#EBDEF0", "#D7BDE2", "#C39BD3", "#AF7AC5", "#9B59B6", "#8E44AD", "#7D3C98", "#6C3483",
            "#5B2C6F", "#4A235A", "#EAECEE", "#D5D8DC", "#CCD1D1", "#ABB2B9", "#979A9A", "#7B7D7D", "#707B7C",
            "#616A6B", "#515A5A", "#424949"
        ]
    },
    {
        category: "Lawsuit Stage",
        values: [
            "Complaint Filed", "Service of Process", "Answer Filed", "Motion to Dismiss", "Discovery Phase",
            "Depositions", "Expert Witness", "Mediation", "Settlement Negotiations", "Pre-Trial Motions",
            "Jury Selection", "Trial In Session", "Verdict Reached", "Appeal Filed", "Remanded",
            "Settlement Accepted", "Class Certification", "Summary Judgment", "Appeal Denied",
            "Case Dismissed", "Case Sealed", "Consent Decree", "Permanent Injunction", "Temporary Restraining Order",
            "Counterclaim Filed", "Change of Venue", "Judgment Entered", "Execution of Judgment", "Enforcement",
            "Case Reopened"
        ],
        colors: [
            "#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976D2", "#1565C0", "#0D47A1",
            "#E3F2FD", "#C5CAE9", "#9FA8DA", "#7986CB", "#5C6BC0", "#3F51B5", "#3949AB", "#303F9F", "#283593",
            "#1A237E", "#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2",
            "#6A1B9A", "#4A148C", "#F8BBD0"
        ]
    },

    // ----------------------------------------------------------------
    //  FACILITIES & OPERATIONS (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Emergency Protocol",
        values: [
            "Fire Drill", "Earthquake Drill", "Tornado Drill", "Active Shooter Drill", "Evacuation Plan",
            "Lockdown Procedure", "Shelter-In-Place", "Pandemic Response", "Medical Emergency",
            "Security Breach", "Chemical Spill", "Bomb Threat", "Severe Weather Alert", "Power Outage",
            "Generator Test", "Elevator Entrapment", "Structural Damage Response", "Gas Leak",
            "Flood Response", "Cyber Attack Drills", "Winter Storm Prep", "Incident Command Center",
            "Red Cross Coordination", "First Aid Kit Check", "AED Inspection", "Fire Extinguisher Check",
            "Emergency Lighting", "Backup Water Supply", "Snow Removal Plan", "Hurricane Shutters"
        ],
        colors: [
            "#FFEBEE", "#FFCDD2", "#EF9A9A", "#E57373", "#EF5350", "#F44336", "#E53935", "#D32F2F", "#C62828",
            "#B71C1C", "#FF8A80", "#FF5252", "#FF1744", "#D50000", "#FFAB91", "#FF5722", "#F4511E", "#E64A19",
            "#D84315", "#BF360C", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19",
            "#D84315", "#BF360C", "#FFE0B2"
        ]
    },
    {
        category: "Gear Tracking",
        values: [
            "Maintenance", "Inspection Due", "Replaced", "Upgraded", "Repaired", "Lost", "Expired", "Needs Calibration",
            "Retired", "Loaned", "Reserved", "In Use", "Available", "Damaged", "Stolen", "Disposed",
            "Under Warranty", "Warranty Expired", "OEM Parts On Order", "Generic Parts On Order", "Refurbished",
            "Awaiting Spare", "Recycling", "E-Waste", "Physical Damage", "Software Update Required", "Firmware Update Required",
            "Shipping Delayed", "Arrived in Warehouse", "Installed"
        ],
        colors: [
            "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00",
            "#E65100", "#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000",
            "#FF8F00", "#FF6F00", "#FFE57F", "#FFD740", "#FFC400", "#FFAB00", "#FFF9C4", "#FFF59D", "#FFF176",
            "#FFEE58", "#FFEB3B"
        ]
    },

    // ----------------------------------------------------------------
    //  PERSONAL & LIFESTYLE (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Meal Planning Stage",
        values: [
            "Recipe Searching", "Grocery List", "Shopping", "Prep Work", "Cooking", "Serving", "Leftovers",
            "Meal Prepped", "Budget Meals", "Healthy Option", "Cheat Day", "Vegetarian", "Vegan",
            "Gluten-Free", "Dairy-Free", "Keto-Friendly", "Low Carb", "Paleo", "Mediterranean Diet",
            "High Protein", "Snack Prep", "Breakfast Prep", "Lunch Prep", "Dinner Prep", "Dessert",
            "Slow Cooker", "Air Fryer", "Instant Pot", "Soup Sunday", "Meal Swap"
        ],
        colors: [
            "#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825",
            "#F57F17", "#FFF8E1", "#FFECB3", "#FFE082", "#FFD54F", "#FFCA28", "#FFC107", "#FFB300", "#FFA000",
            "#FF8F00", "#FF6F00", "#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00",
            "#F57C00", "#EF6C00", "#E65100"
        ]
    },
    {
        category: "Self-Care Routine",
        values: [
            "Mindful Meditation", "Journaling", "Digital Detox", "Gratitude Practice", "Yoga Session",
            "Spa Treatment", "Nature Walk", "Reading Hour", "Aromatherapy", "Sleep Hygiene",
            "Breathwork", "Therapy Session", "Emotional Check-In", "Unplug Evening", "Stretching Routine",
            "Healthy Boundaries", "Positive Affirmations", "Screen Time Limit", "Creative Expression",
            "Music Therapy", "Art Therapy", "Hydration Challenge", "Nutrient Tracking", "No Sugar Day",
            "Massage Appointment", "Weekend Getaway", "Nap Time", "Support Group", "Manicure Monday",
            "Laughing Therapy"
        ],
        colors: [
            "#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#00ACC1", "#0097A7", "#00838F",
            "#006064", "#E1F5FE", "#B3E5FC", "#81D4FA", "#4FC3F7", "#29B6F6", "#03A9F4", "#039BE5", "#0288D1",
            "#0277BD", "#01579B", "#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342",
            "#689F38", "#558B2F", "#33691E"
        ]
    },

    // ----------------------------------------------------------------
    //  EDUCATION & LEARNING (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Online Class Format",
        values: [
            "Live Zoom Lecture", "Recorded Lecture", "Discussion Forum", "Weekly Quiz", "Live Q&A",
            "Peer Review", "Group Project", "Virtual Breakout", "Guest Speaker", "Capstone Project",
            "Hybrid Synchronous", "Hybrid Asynchronous", "Fully Asynchronous", "Virtual Lab",
            "Interactive Whiteboard", "3D Virtual Space", "Office Hours", "Homework Submission",
            "Assignment Feedback", "Plagiarism Check", "Auto-Grading", "Peer Mentoring",
            "Simulation Session", "Language Exchange", "Coding Interview Prep", "Virtual Flashcards",
            "Gamified Learning", "Adaptive Learning", "Proctored Exam", "Mock Tests"
        ],
        colors: [
            "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD", "#9E9E9E", "#757575", "#616161",
            "#424242", "#212121", "#CFD8DC", "#B0BEC5", "#90A4AE", "#78909C", "#607D8B", "#546E7A",
            "#455A64", "#37474F", "#263238", "#FAFAFA", "#F5F5F5", "#EEEEEE", "#E0E0E0", "#BDBDBD",
            "#9E9E9E", "#757575", "#616161", "#424242", "#212121", "#ECEFF1"
        ]
    },

    // ----------------------------------------------------------------
    //  CREATIVE PROJECTS (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "DIY Difficulty",
        values: [
            "Beginner-Friendly", "Intermediate Complexity", "Advanced Complexity", "Expert Craftsmanship",
            "Kids Safe", "Requires Power Tools", "Time-Intensive", "Budget-Friendly", "High Material Cost",
            "Low Material Cost", "Eco-Friendly Materials", "Toxic Materials Warning",
            "Garage Workspace Needed", "Outdoor Project", "Indoor Project", "Weekend Project",
            "All-Day Project", "Quick Fix", "Major Overhaul", "Collaboration Recommended",
            "Personal Protective Equipment Required", "Sewing Skills Needed", "Carpentry Skills Needed",
            "Metalworking Skills Needed", "Electronics Knowledge Required", "Upcycling Project",
            "Refinishing Technique", "Spray Painting", "Sanding & Polishing", "Resin Craft"
        ],
        colors: [
            "#FFF9EC", "#FFEFD0", "#FFE4B5", "#FFD194", "#FFC181", "#FFB366", "#FFA64D", "#FF9933", "#FF8C1A",
            "#FF8000", "#FF7300", "#FF6600", "#E65C00", "#CC5200", "#B34700", "#993D00", "#803300", "#662900",
            "#4D1F00", "#331400", "#FFE4E1", "#FFF0F5", "#E6E6FA", "#F0F8FF", "#E0FFFF", "#F0FFF0", "#FAFAD2",
            "#FFFACD", "#FFF5EE", "#F0FFF0"
        ]
    },

    // ----------------------------------------------------------------
    //  EVENT PLANNING (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Trade Show Booth Type",
        values: [
            "Inline Booth", "Corner Booth", "Peninsula Booth", "Island Booth", "Pop-Up Display",
            "Modular Exhibit", "Custom Exhibit", "Double Decker", "Interactive Booth", "Product Showcase",
            "Demo Station", "VR Experience", "Freight On-Site", "Kiosk Style", "Social Media Lounge",
            "Charging Station", "Swag Giveaway", "Food Sampling", "Prize Wheel", "Photo Booth",
            "Multi-Brand Collaboration", "Partner Pavilion", "Media Press Corner", "Private Meeting Room",
            "Open Seating Area", "Lead Capture Tech", "Gamified Booth", "AR Demo", "Multi-Screen Wall",
            "Zero-Waste Booth"
        ],
        colors: [
            "#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32",
            "#1B5E20", "#E0F7FA", "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00ACC1", "#00838F", "#006064",
            "#F1F8E9", "#DCEDC8", "#C5E1A5", "#AED581", "#9CCC65", "#8BC34A", "#7CB342", "#558B2F", "#33691E",
            "#DCEDC8", "#C5E1A5", "#AED581"
        ]
    },

    // ----------------------------------------------------------------
    //  HEALTH & WELLNESS (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Meditation Techniques",
        values: [
            "Mindfulness Meditation", "Vipassana", "Loving-Kindness", "Body Scan", "Transcendental",
            "Chakra Cleansing", "Zen Meditation", "Walking Meditation", "Guided Imagery",
            "Mantra Repetition", "Pranayama Breathing", "Sound Bath", "Candle Gazing", "Yoga Nidra",
            "Visualization", "Kundalini Meditation", "Tonglen", "Movement Meditation",
            "Mindful Eating Meditation", "Stoic Reflection", "Metta Meditation", "Third Eye Focus",
            "Walking Labyrinth", "Open Monitoring", "Focused Attention", "Progressive Muscle Relaxation",
            "Crystal Meditation", "Forest Bathing", "Gratitude Meditation", "Inner Child Meditation"
        ],
        colors: [
            "#FFFDE7", "#FFF9C4", "#FFF59D", "#FFF176", "#FFEE58", "#FFEB3B", "#FDD835", "#FBC02D", "#F9A825",
            "#F57F17", "#F4FF81", "#EEFF41", "#C6FF00", "#AEEA00", "#76FF03", "#64DD17", "#CCFF90", "#B2FF59",
            "#76FF03", "#64DD17", "#4CAF50", "#2E7D32", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#43A047",
            "#388E3C", "#2E7D32", "#1B5E20"
        ]
    },

    // ----------------------------------------------------------------
    //  HOBBIES & INTERESTS (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Knitting Skill Level",
        values: [
            "Cast-On Basics", "Knit & Purl", "Simple Scarves", "Increasing/Decreasing", "Circular Needles",
            "Double-Point Needles", "Cabling", "Colorwork", "Fair Isle Technique", "Intarsia",
            "Brioche Stitch", "Lace Knitting", "Shawl Construction", "Top-Down Sweater", "Bottom-Up Sweater",
            "Toe-Up Socks", "Magic Loop Technique", "Steeking", "Blocking", "Finishing & Seaming",
            "Expert Patterns", "Complex Textures", "Designing Patterns", "Repairing Mistakes",
            "Felting Projects", "Tunisian Crochet", "Yarn Dyeing", "Yarn Spinning", "Stash Organization", "Festival Knits"
        ],
        colors: [
            "#FFF0F5", "#FFE4E1", "#FFDAB9", "#FFEFD5", "#FFFACD", "#EEE8AA", "#FAFAD2", "#F0FFF0", "#F0FFFF",
            "#E6E6FA", "#FFF5EE", "#F5F5F5", "#DCDCDC", "#696969", "#708090", "#778899", "#B0C4DE", "#FFE4C4",
            "#FFF8DC", "#E0FFFF", "#98FB98", "#AFEEEE", "#FFB6C1", "#FFA07A", "#FFDEAD", "#FA8072", "#FFA500",
            "#FF6347", "#BC8F8F", "#FF4500"
        ]
    },

    // ----------------------------------------------------------------
    //  TECHNOLOGY & INNOVATION (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Blockchain Use Cases",
        values: [
            "Cryptocurrency", "NFT Marketplace", "Smart Contracts", "Supply Chain Tracking",
            "Identity Management", "Decentralized Finance (DeFi)", "Stablecoins", "Voting Systems",
            "Healthcare Records", "Decentralized Storage", "Asset Tokenization", "Energy Trading",
            "Data Marketplace", "Prediction Markets", "DAOs", "Charity Transparency", "Real Estate Tokenization",
            "IPFS Hosting", "Cross-Border Payments", "Remittances", "Insurance Claims",
            "KYC Compliance", "Gaming Assets", "Metaverse Land", "Blockchain as a Service",
            "Blockchain in IoT", "Loyalty Programs", "Carbon Credits", "Advertising Proof-of-View",
            "Digital Twins"
        ],
        colors: [
            "#F0FFF0", "#E0FFE0", "#D0FFDF", "#C0FFDF", "#B0FFDE", "#A0FFDE", "#90FFDE", "#80FFDD", "#70FFDD",
            "#60FFDD", "#50FFDC", "#40FFDC", "#30FFDC", "#20FFDB", "#10FFDB", "#00FFDB", "#00E6C7", "#00CCB3",
            "#00B39F", "#00998B", "#008077", "#006663", "#004D4F", "#00343B", "#001B27", "#000213", "#000000",
            "#FFFFF0", "#FFFACD", "#FAFAD2"
        ]
    },

    // ----------------------------------------------------------------
    //  COMMUNITY & SOCIAL PROJECTS (ADDITIONAL CATEGORIES)
    // ----------------------------------------------------------------
    {
        category: "Homeless Outreach Program",
        values: [
            "Street Outreach", "Shelter Coordination", "Food Distribution", "Clothing Donation",
            "Housing Placement", "Healthcare Check", "Mental Health Support", "Addiction Recovery Referral",
            "Job Training", "Case Management", "Meal Center Volunteer", "Emergency Shelter",
            "Youth Homeless Services", "Family Shelter", "Permanent Supportive Housing", "Transitional Housing",
            "Donation Drive", "Fundraising Event", "Blanket Drive", "Community Partnership",
            "Religious Organization Collab", "Government Grant Received", "Substance Abuse Counseling",
            "Counseling Services", "Transportation Assistance", "Legal Assistance", "ID Recovery",
            "Mentorship Program", "Life Skills Workshop", "Success Story"
        ],
        colors: [
            "#FFFBF0", "#FFF7E0", "#FFF3D0", "#FFEFBD", "#FFEAAA", "#FFE699", "#FFE288", "#FFDE77", "#FFD966",
            "#FFD655", "#FFD244", "#FFCE33", "#F7CA4D", "#F0C036", "#EAB827", "#E5B01A", "#FFEC8B", "#FFE066",
            "#FFD740", "#FFC400", "#FFAB00", "#FF9100", "#FF6F00", "#E65100", "#FFD180", "#FFCC80", "#FFB74D",
            "#FFA726", "#FF9800", "#FB8C00"
        ]
    },
    ];



// PATTERN CONTINUATION INSTRUCTIONS:
// 1. For each userFriendlyTopics category (Health, Finance, etc.)
// 2. Create 2-5 badge categories with relevant values
// 3. Use color variations from the established palette
// 4. Maintain consistent value count per category (15-20)
// 5. Ensure comprehensive coverage of sub-domains
// 6. Repeat until all life areas are represented

// ESTIMATED TOTAL BADGES:
// 200 categories × 20 values = 4,000 badges
// Add more categories as needed to reach 10,000

// import OpenAI from 'openai'
// import { API_KEY } from './secrets.js'
// import { random, showUserMsg, showSuccessMsg, showErrorMsg, showSpinner } from './util.service.js'
//
// let openai = null

// async function generateTaext(prompt, temperature = 1.0, fallback = '', length = 128) {
//     openai = new OpenAI({
//         dangerouslyAllowBrowser: true,
//         apiKey: API_KEY,
//     })
//
//     // console.log('PROMPT to GPT:\n', prompt)
//     try {
//         const response = await openai.chat.completions.create({
//             // model: 'gpt-4o-mini',
//             model: 'gpt-3.5-turbo',
//             temperature,
//             // max_tokens: 8192,
//             max_tokens: length,
//             messages: [{ role: 'user', content: prompt }],
//         })
//         let text = response.choices?.[0]?.message?.content?.trim() || ''
//         while (text.length && !/[\w\d]/.test(text[0])) text = text.slice(1)
//         while (text.length && !/[\w\d]/.test(text[text.length - 1])) {
//             text = text.slice(0, -1)
//         }
//         if (!text) text = fallback
//         else text = text.trim()
//
//         // console.log('GPT RESPONSE:\n', text)
//         return text
//     } catch (error) {
//         console.log('OpenAI API error:', error)
//         console.error('OpenAI API error:', error)
//         return fallback
//     }
// }
//
//
// function bracketBalanceRepair(str) {
//     const openCurly = (str.match(/\{/g) || []).length
//     const closeCurly = (str.match(/\}/g) || []).length
//     const openSquare = (str.match(/\[/g) || []).length
//     const closeSquare = (str.match(/\]/g) || []).length
//
//     let fixed = str
//     if (openCurly === closeCurly + 1 && !str.trim().endsWith('}')) {
//         fixed += '}'
//     }
//     if (openSquare === closeSquare + 1 && !str.trim().endsWith(']')) {
//         fixed += ']'
//     }
//     return fixed
// }
//
// function safeJsonParse(rawStr, fallback = '[]') {
//     let str = rawStr || ''
//     str = str.trim()
//     str = str.replace(/^```+(\w+)?\s*/i, '')
//     str = str.replace(/^json\s*/i, '')
//     if (str.startsWith('[') && !str.endsWith(']')) {
//         str += ']'
//     } else if (str.startsWith('{') && !str.endsWith('}')) {
//         str += '}'
//     }
//     try {
//         return JSON.parse(str)
//     } catch (err) {
//         console.warn('First JSON.parse attempt failed, trying bracketBalanceRepair:', err)
//     }
//     const repaired = bracketBalanceRepair(str)
//     if (repaired) {
//         try {
//             return JSON.parse(repaired)
//         } catch (err2) {
//             console.warn('Second JSON.parse attempt failed:', err2)
//         }
//     }
//     try {
//         return JSON.parse(fallback)
//     } catch {
//         return Array.isArray(fallback) ? [] : {}
//     }
// }
//
// export const STATUS_OPTIONS = ['inProgress', 'done', 'review', 'stuck', 'blocked']
// export const PRIORITY_OPTIONS = ['low', 'medium', 'high']
// export const CMP_ORDER_OPTIONS = ['StatusPicker', 'MemberPicker', 'DatePicker', 'SomeNewPicker', 'OtherPicker']
//
// let GPT_USER_POOL = []

import {getColorFromBackgroundColor, getRandomColor} from "./data.js"

const USER_POOL = [
    { _id: 'u101', fullname: 'Abi Abambi', imgUrl: 'roi.png' },
    { _id: 'u102', fullname: 'Josh Ga', imgUrl: 'roi.png' },
    { _id: 'u103', fullname: 'Nina X', imgUrl: 'roi.png' },
    { _id: 'u104', fullname: 'Megan X', imgUrl: '' },
    { _id: 'u105', fullname: 'Sam L', imgUrl: '' },
    { _id: 'u106', fullname: 'Oliver Z', imgUrl: '' }
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
for (let i = 0; i < 200; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)]
    const fullName = `${firstName} ${lastName}`
    let imgUrl = 'generated_faces/' + allImgs[Math.floor(Math.random() * allImgs.length)]
    if (Math.random() < 0.2) imgUrl = null
    gUsersPool.push({
        _id: `u${i + 1}`,
        fullname: fullName,
        imgUrl: imgUrl
    });
}

console.log(gUsersPool)

// GPT_USER_POOL = gUsersPool

// async function initUserPool() {
//     if (GPT_USER_POOL.length) return
//
//     console.log('users')
//     const fallbackPool = [
//         { _id: 'u101', fullname: 'Ava Placeholder', imgUrl: '' },
//         { _id: 'u102', fullname: 'Ben Placeholder', imgUrl: '' },
//         { _id: 'u103', fullname: 'Cara Placeholder', imgUrl: '' },
//     ]
//
//     const prompt = `Generate an array of 5 to 8 distinct "users" for a collaborative project tool.
// Each user = {
//   "_id": "unique string id",
//   "fullname": "some realistic or creative full name",
//   "imgUrl": "some valid image URL or empty"
// }
// Return only valid JSON. e.g.
// [
//   {"_id":"u111", "fullname":"Alice Wonderland", "imgUrl":"https://..."},
//   ...
// ]`
//
//     let text = await generateText(prompt, 1.0)
//     let users = []
//     try {
//         users = safeJsonParse(text, JSON.stringify(fallbackPool))
//     } catch (err) {
//         console.error('Failed to parse GPT user pool. Using fallback.', err)
//         users = fallbackPool
//     }
//
//     if (!Array.isArray(users) || !users.length) {
//         users = fallbackPool
//     }
//
//     console.log('users 2')
//
//     if (users.length < 5) {
//         while (users.length < 5) {
//             console.log('users 4', users.length)
//             users.push({
//                 _id: 'u_' + random.id(),
//                 fullname: 'FallbackUser ' + random.id(),
//                 imgUrl: '',
//             })
//         }
//     }
//
//     console.log('users 3')
//
//     if (users.length > 8) users = users.slice(0, 8)
//
//     for (let u of users) {
//         if (!u._id || !u.fullname) {
//             u._id = 'u_' + random.id()
//             if (!u.fullname) u.fullname = 'FallbackUser ' + random.id()
//         }
//         if (typeof u.imgUrl !== 'string') {
//             u.imgUrl = ''
//         }
//     }
//
//     GPT_USER_POOL = users
// }
//
// export function getUserPool() {
//     return GPT_USER_POOL
// }
//
// export function getColorFromBackgroundColor(bg) {
//     switch (bg) {
//         case '#baf3db': return '#164b35'
//         case '#f8e6a0': return '#4f3a0e'
//         case '#fedec8': return '#6e3b0d'
//         case '#ffd5d2': return '#6e0d0d'
//         case '#dfd8fd': return '#4f3a0e'
//         case '#cce0ff': return '#0d2e6e'
//         case '#c6edfb': return '#0d3a4f'
//         case '#fdd0ec': return '#6e0d3a'
//         case '#f1f2f4': return '#3a3a3a'
//         default: return '#3a3a3a'
//     }
// }
//
//
// function getRandomColor() {
//     const trelloColors = [
//         '#baf3db',
//         '#f8e6a0',
//         '#fedec8',
//         '#ffd5d2',
//         '#dfd8fd',
//         '#cce0ff',
//         '#c6edfb',
//         '#fdd0ec',
//         '#f1f2f4',
//     ]
//     return random.choice(trelloColors)
// }
//
// function getRandomColorLabels() {
//     const colors = ['#9f8fef', '#f87168', '#fea362', '#f5cd47', '#4bce97', '#579dff']
//     return random.choice(colors)
// }
//
// function getRandomLocation() {
//     const locations = [
//         { name: 'Tel Aviv-Yafo', lat: 32.109333, lng: 34.855499, zoom: 11 },
//         { name: 'New York City', lat: 40.7128, lng: -74.006, zoom: 12 },
//         { name: 'Paris', lat: 48.8566, lng: 2.3522, zoom: 12 },
//         { name: 'Tokyo', lat: 35.6895, lng: 139.6917, zoom: 12 },
//         { name: 'London', lat: 51.5074, lng: -0.1278, zoom: 12 },
//         { name: 'Sydney', lat: -33.8688, lng: 151.2093, zoom: 12 },
//     ]
//     return random.choice(locations)
// }
//
// async function generateLabels(boardTitle) {
//     const prompt = `
// Board Title: "${boardTitle}"
// Generate an array of 5 short labels for a project mgmt board.
// Some examples: "Grocery", "Weekend Plans", "Work Tasks".
// Return JSON:
// [
//   {"id":"some-id","title":"...","color":"(placeholder)"},
//   ...
// ]
// We only care about 'id', 'title', 'color'.
// Return valid JSON only.
// `
//     const fallback = JSON.stringify([
//         { id: 'lbl1', title: 'Tasks', color: '#9f8fef' },
//         { id: 'lbl2', title: 'Personal', color: '#f87168' },
//         { id: 'lbl3', title: 'Work', color: '#fea362' },
//         { id: 'lbl4', title: 'Errands', color: '#f5cd47' },
//         { id: 'lbl5', title: 'Household', color: '#4bce97' },
//     ])
//
//     const text = await generateText(prompt, 1.0, fallback)
//     let rawLabels = safeJsonParse(text, fallback)
//     if (!Array.isArray(rawLabels) || !rawLabels.length) {
//         rawLabels = safeJsonParse(fallback)
//     }
//
//     const uniqueColors = new Set()
//     return rawLabels.slice(0, 5).map((lbl) => {
//         if (!lbl.id) lbl.id = 'lbl_' + random.id()
//         if (!lbl.title) lbl.title = 'Label ' + random.id()
//         let col = getRandomColorLabels()
//         while (uniqueColors.has(col) && uniqueColors.size < 6) {
//             col = getRandomColorLabels()
//         }
//         uniqueColors.add(col)
//         lbl.color = col
//         return lbl
//     })
// }
//
// const BADGE_COLOR_MAP = {
//     risk: '#fdddc7',
//     approved: '#f8e6a0',
//     priority: '#ffe2bd',
//     now: '#ffc0cb',
// }
// const BADGE_TEXT_COLOR_MAP = {
//     risk: '#6e3b0d',
//     approved: '#4f3a0e',
//     priority: '#6e3b0d',
//     now: '#6e0d3a',
// }
// const BADGE_TYPE_ARRAY = ['risk', 'approved', 'priority', 'now']
//
// async function generateBadges(boardTitle, groupTitle) {
//     const prompt = `
// For the group "${groupTitle}" in the board "${boardTitle}",
// Generate an array of 10 "badge" objects with selectble categories.
// Example:
// [
//   {"categ":"Workload", "badgeOptions": ["Light", "Heavy", "Medium"], "text":"Heavy"},
//   {"categ":"NeedsApproval", "badgeOptions": ["Pending", "Need Approval", "Rejected"], "text":"Pending"},
//   ...
// ]
// Return strictly valid JSON only.
// `
//     const fallback = '[{"categ":"NeedsApproval","text":"Pending"},{"categ":"HighRisk","text":"Proceed Carefully"}]'
//
//     const text = await generateText(prompt, 1.0, fallback)
//     let rawBadges = safeJsonParse(text, fallback)
//     if (!Array.isArray(rawBadges)) {
//         rawBadges = safeJsonParse(fallback)
//     }
//
//     return rawBadges.map((b) => {
//         const randomType = random.choice(BADGE_TYPE_ARRAY)
//         return {
//             id: 'badg_' + random.id(),
//             categ: b.categ || 'General',
//             color: BADGE_COLOR_MAP[randomType] || '#ccc',
//             textColor: BADGE_TEXT_COLOR_MAP[randomType] || '#000',
//             badgeOptions: b.badgeOptions || [],
//             chosenOption: b.text || 'Note',
//         }
//     })
// }
//
// // async function generateTask(boardTitle, groupTitle) {
// //     const fallbackResp = `Title: Kitchen Chores; Description: Clean the fridge and wipe the counters.`
// //     const prompt = `
// // For the group "${groupTitle}" in the board "${boardTitle}",
// // create a short but realistic task. Format EXACTLY as:
// // "Title: XYZ; Description: ABC"
// // Return no extra text or code blocks, just that line.
// // `
// //     const response = await generateText(prompt, 1.0, fallbackResp, 128)
// //     let taskTitle = 'RandomTask'
// //     let taskDescription = 'No desc from GPT'
// //     const match = response.match(/Title:\s*(.+?);\s*Description:\s*(.+)/)
// //     if (match) {
// //         taskTitle = match[1].trim()
// //         taskDescription = match[2].trim()
// //     }
// //
// //     const badges = await generateBadges(boardTitle, groupTitle)
// //
// //     return {
// //         id: random.id(),
// //         title: taskTitle,
// //         status: random.choice(STATUS_OPTIONS),
// //         priority: random.choice(PRIORITY_OPTIONS),
// //         dueDate: random.date('2024-01-01', '2026-12-31').toISOString(),
// //         createdAt: random.date('2024-01-01', '2026-12-31'),
// //         description: taskDescription,
// //         checklists: await generateChecklists(boardTitle, groupTitle),
// //         // members: random.sample(GPT_USER_POOL, random.randint(0, GPT_USER_POOL.length)),
// //         members: random.sample(GPT_USER_POOL, random.randint(0, 5)),
// //         // style: await generateTaskStyle(),
// //         style:
// //             random.choice([
// //                 {
// //                     backgroundColor: (getRandomColorLabels()),
// //                     coverSize: random.choice(['small', 'large'])
// //                 },
// //                 {
// //                     backgroundImage: random.choice([
// //                         null, null, null, `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,`https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                         'cover-img.png', 'cover-img-1.png', 'cover-img-2.png', 'cover-img-3.png', 'amination_gif.gif',
// //                     ]),
// //                     coverSize: random.choice(['small', 'large'])
// //                 },
// //                 {
// //
// //                 },
// //                 {
// //
// //                 },
// //                 {
// //
// //                 }
// //
// //             ]),
// //
// //         badges,
// //         attachments: getRandomAttachments(),
// //         activity: generateTaskActivities(taskTitle),
// //         isUserWatching: random.choice([true, false]),
// //         labels: [],
// //         location: random.choice([null, null, null, getRandomLocation()]),
// //     }
// // }
//
// function getRandomAttachments() {
//     const cnt = random.randint(0, 2)
//     return Array.from({ length: cnt }, () => ({
//         path: `file-${random.randint(1, 999)}.png`,
//         date: Date.now() - random.randint(0, 1_000_000_000),
//         text: random.choice([
//             'Photo proof!',
//             'Attached doc',
//             'Uploaded file',
//             '',
//         ]),
//     }))
// }
//
// async function generateChecklists(boardTitle, groupTitle) {
//     const fallback = JSON.stringify([
//         {
//             id: 'cl_fallback',
//             title: 'Fallback Checklist',
//             progress: 0,
//             todos: [
//                 { id: 'todo1', title: 'Fallback item', isDone: false },
//                 { id: 'todo2', title: 'Another fallback', isDone: true },
//             ],
//         },
//     ])
//     const prompt = `
// For the group "${groupTitle}" in the board "${boardTitle}",
// Generate an array of 3 short "todo" items related to the group title and board title. Return strictly JSON:
// [
//   {"title":"something short","isDone": true/false},
//   ...
// ]
// `
//
//     const text = await generateText(prompt, 1.0, fallback)
//     let todosArray = safeJsonParse(text, '[]')
//     if (!Array.isArray(todosArray)) {
//         console.warn('GPT todos not an array, using fallback.')
//         todosArray = safeJsonParse(fallback)[0].todos
//     }
//     if (!todosArray.length) {
//         todosArray = safeJsonParse(fallback)[0].todos
//     }
//
//     const cCount = random.randint(0, 2)
//     const checklists = []
//     for (let i = 0; i < cCount; i++) {
//         const tCount = 1 + Math.floor(Math.random() * todosArray.length)
//         const partialTodos = todosArray.slice(0, tCount).map((t) => ({
//             id: 'todo_' + random.id(),
//             title: t.title || 'UntitledTodo',
//             isDone: typeof t.isDone === 'boolean' ? t.isDone : false,
//         }))
//         checklists.push({
//             id: 'cl_' + random.id(),
//             title: 'Checklist ' + random.id().slice(0, 4),
//             progress: random.randint(0, 100),
//             todos: partialTodos,
//         })
//     }
//     return checklists
// }
//
// async function generateTaskStyle() {
//     const styleType = random.randint(0, 2)
//     if (styleType === 0) {
//         return {
//             backgroundColor: getRandomColorLabels(),
//             coverSize: random.choice(['small', 'large']),
//         }
//     } else if (styleType === 1) {
//             const images = [
//             null,
//             null,
//             `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//             'cover-img.png',
//             'cover-img-1.png',
//             'cover-img-2.png',
//             'cover-img-3.png',
//         ]
//         return {
//             backgroundImage: random.choice(images),
//             coverSize: random.choice(['small', 'large']),
//         }
//     } else {
//         return {}
//     }
// }
//
// function generateTaskActivities(taskTitle) {
//     const activityTypes = [
//         `Commented: "Looks good!"`,
//         `Updated title to: ${taskTitle}`,
//         `Attached a new file`,
//         `Status changed to ${random.choice(STATUS_OPTIONS)}`,
//     ]
//     const count = random.randint(1, 3)
//     return Array.from({ length: count }, () => {
//         const byMember = random.choice(GPT_USER_POOL) || {
//             _id: 'fallback',
//             fullname: 'Fallback user',
//             imgUrl: '',
//         }
//         return {
//             id: random.id(),
//             title: random.choice(activityTypes),
//             createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
//             byMember: {
//                 _id: byMember._id,
//                 fullname: byMember.fullname,
//                 imgUrl: byMember.imgUrl,
//             },
//         }
//     })
// }
//
// // async function generateGroups(boardTitle) {
// //     const fallback = `Home; Work; Personal`;
// //     const groupCount = random.randint(5, 8);
// //     const prompt = `
// // Board: "${boardTitle}"
// // Generate ${groupCount} short sub-topics/group-titles/task-lists about the topic of this board and everyday life, work or task categories related to this board topic, separated by semicolons.
// // Example: "Groceries; Home Maintenance; Work Projects; Financial Plan; Everyday; Project General Goals; Wishlist"
// // No code blocks, just semicolons.
// // `;
// //     const text = await generateText(prompt, 1.0, fallback);
// //     let groupTitles = text.split(';').map(t => t.trim()).filter(Boolean);
// //     if (groupTitles.length < groupCount) {
// //         while (groupTitles.length < groupCount) {
// //             groupTitles.push('Group ' + random.id().slice(0, 3));
// //         }
// //     }
// //     groupTitles = groupTitles.slice(0, groupCount);
// //
// //     // Generate each group concurrently.
// //     const groups = await Promise.all(
// //         groupTitles.map(async title => {
// //             const taskCount = random.randint(3, 6);
// //             // Generate tasks concurrently for this group.
// //             const tasks = await Promise.all(
// //                 Array.from({ length: taskCount }, () => generateTask(boardTitle, title))
// //             );
// //             const backgroundColor = getRandomColor();
// //             return {
// //                 id: random.id(),
// //                 title,
// //                 archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
// //                 tasks,
// //                 style: {
// //                     backgroundColor,
// //                     color: getColorFromBackgroundColor(backgroundColor),
// //                 },
// //                 watched: random.choice([true, false]),
// //                 isMinimaized: random.choice([true, false]),
// //             };
// //         })
// //     );
// //
// //     return groups;
// // }
//
//
// async function generateGroupsSeq(boardTitle) {
//     const fallback = `Home; Work; Personal`
//     const groupCount = random.randint(5, 8)
//     const prompt = `
// Board: "${boardTitle}"
// Generate ${groupCount} short sub-topics/group-titles/task-lists about the topic of this board and everyday life, work or task categories realted to this board topic, separated by semicolons.
// Example: "Groceries; Home Maintenance; Work Projects; Financial Plan; Everyday; Project General Goals; Wishlist"
// No code blocks, just semicolons.
// `
//     const text = await generateText(prompt, 1.0, fallback)
//     let groupTitles = text.split(';').map((t) => t.trim()).filter(Boolean)
//     if (groupTitles.length < groupCount) {
//         while (groupTitles.length < groupCount) {
//             groupTitles.push('Group ' + random.id().slice(0, 3))
//         }
//     }
//     groupTitles = groupTitles.slice(0, groupCount)
//
//     let totalTasks = 0
//     const groups = []
//     for (let title of groupTitles) {
//         const taskCount = random.randint(3, 6)
//         const tasks = []
//         for (let i = 0; i < taskCount; i++) {
//             console.log('task', totalTasks, 'from ', taskCount * groupCount)
//             tasks.push(await generateTask(boardTitle, title))
//             totalTasks += 1
//         }
//         const backgroundColor = getRandomColor()
//         groups.push({
//             id: random.id(),
//             title,
//             archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
//             tasks,
//             style: {
//                 backgroundColor,
//                 color: getColorFromBackgroundColor(backgroundColor),
//             },
//             watched: random.choice([true, false]),
//             isMinimaized: random.choice([true, false]),
//         })
//     }
//     return groups
// }
//
// function getRandomBoardActivities(board) {
//     const count = random.randint(2, 5)
//     return Array.from({ length: count }, () => {
//         const group = random.choice(board.groups)
//         const task = random.choice(group.tasks)
//         const activityType = random.choice(['added', 'moved', 'updated'])
//         let title
//         if (activityType === 'added') {
//             title = `Added task '${task.title}' to group '${group.title}'`
//         } else if (activityType === 'moved') {
//             const otherGroup = random.choice(board.groups.filter((g) => g.id !== group.id))
//             title = `Moved task '${task.title}' from '${otherGroup?.title}' to '${group.title}'`
//         } else {
//             title = `Updated status of task '${task.title}' to '${random.choice(STATUS_OPTIONS)}'`
//         }
//         const byMember = random.choice(GPT_USER_POOL) || {
//             _id: 'fallback',
//             fullname: 'Fallback user',
//             imgUrl: '',
//         }
//         return {
//             id: random.id(),
//             title,
//             createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
//             byMember: {
//                 _id: byMember._id,
//                 fullname: byMember.fullname,
//                 imgUrl: byMember.imgUrl,
//             },
//             group: { id: group.id, title: group.title },
//             task: { id: task.id, title: task.title },
//         }
//     })
// }
//
// // export async function getRandomBoardAI() {
// //
// //     showUserMsg('AI: Generating new board..')
// //     console.log(' ---- GENERATING AI BOARD -----')
// //
// //     // console.log('Progress: 1')
// //
// //     await initUserPool()
// //
// //     //     const topicsPrompt = `
// //     // Generate a list of 100 random topics that could be the topics of a Trello tasks board.
// //     // Return the list as a JSON array of strings.
// //     // Return strictly JSON:
// //     // [
// //     //   {"topic": the_topic},
// //     //   ...
// //     // ]
// //     // `
// //     //
// //     //     const fallbackTopics = [
// //     //         "Project Management", "Marketing Campaign", "Product Launch", "Event Planning", "Content Creation",
// //     //         "Software Development", "Customer Support", "Sales Strategy", "Financial Planning", "Human Resources"
// //     //     ]
// //     //     const topics = await generateText(topicsPrompt, 1.0, JSON.stringify(fallbackTopics))
// //     //
// //     //     console.log('Topic orig:', topics)
// //     //     const parsedTopics = safeJsonParse(topics, JSON.stringify(fallbackTopics))
// //     //     const randomTopic = parsedTopics[Math.floor(Math.random() * parsedTopics.length)]['topic']
// //     //     console.log('Topic:', randomTopic)
// //
// //
// //     const randomTopic = random.choice(userFriendlyTopics)
// //
// //     const boardTitlePrompt = `
// // Generate a single realistic board name for a project management system based on the topic "${randomTopic}".
// // Return just the name, no extra text.
// // `
// //     const fallbackBoardTitle = 'Generic Board'
// //     const boardTitle = await generateText(boardTitlePrompt, 1.0, fallbackBoardTitle)
// //
// //     // showUserMsg('progress')
// //     // console.log('Progress: 2')
// //     showSpinner('AI: Generating board..')
// //
// //     const groups = await generateGroups(boardTitle)
// //
// //     // console.log('Progress: 3')
// //     const labels = await generateLabels(boardTitle)
// //
// //     // console.log('Progress: 4')
// //     for (const group of groups) {
// //         for (const task of group.tasks) {
// //             const labelSubset = random.sample(labels.map((lbl) => lbl.id), random.randint(0, labels.length))
// //             task.labelIds = labelSubset
// //             task.labels = labels
// //         }
// //     }
// //
// //     // console.log('Progress: 5')
// //
// //     const createdBy = random.choice(GPT_USER_POOL) || {
// //         _id: 'u_fallback',
// //         fullname: 'Unknown user',
// //         imgUrl: '',
// //     }
// //     const boardId = random.id(random.randint(4, 10))
// //     const board = {
// //         id: boardId,
// //         // _id: boardId,
// //         title: boardTitle,
// //         isStarred: random.choice([true, false]),
// //         archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
// //         createdBy: {
// //             _id: createdBy._id,
// //             fullname: createdBy.fullname,
// //             imgUrl: createdBy.imgUrl,
// //         },
// //         style: {
// //             backgroundImage:
// //                 random.choice([
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
// //                     'color_1.svg',
// //                     'color_2.svg',
// //                     'color_3.svg',
// //                     'color_4.svg',
// //                     'color_5.svg',
// //                     'color_6.svg',
// //                     'color_7.svg',
// //                     'color_8.svg',
// //                     'color_9.svg',
// //                     'color_10.svg',
// //                     'color_11.svg',
// //                     ])
// //
// //         },
// //         labels,
// //         members: GPT_USER_POOL,
// //         groups,
// //         activities: [],
// //         cmpsOrder: random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length)),
// //     }
// //
// //     // console.log('Progress: 6')
// //
// //     board.activities = getRandomBoardActivities(board)
// //
// //     // console.log('Progress: 7')
// //
// //     // console.log('Final Board from GPT:', board)
// //
// //     showSuccessMsg('AI: Board generation complete!')
// //
// //     board.generator = 'getRandomBoardAI'
// //     return board
// // }
//
//
//
//
// // Global cache for badge categories across the board
// let globalBadgeCategoriesCache = null;
//
// // Utility function to calculate if a color is dark
// function isColorDark(hexColor) {
//     if (!hexColor || !hexColor.startsWith('#') || hexColor.length !== 7) return true;
//
//     // Convert hex to RGB
//     const r = parseInt(hexColor.slice(1, 3), 16);
//     const g = parseInt(hexColor.slice(3, 5), 16);
//     const b = parseInt(hexColor.slice(5, 7), 16);
//
//     // Calculate brightness (HSP formula)
//     const brightness = Math.sqrt(
//         0.299 * (r * r) +
//         0.587 * (g * g) +
//         0.114 * (b * b)
//     );
//
//     return brightness < 140; // Threshold for dark colors
// }
//
// // Weighted random choice function
// function weightedChoice(items, weights) {
//     if (!items || !weights || items.length === 0) return null;
//
//     const totalWeight = weights.reduce((sum, w) => sum + (w || 0), 0);
//     let randomValue = Math.random() * totalWeight;
//
//     for (let i = 0; i < items.length; i++) {
//         randomValue -= (weights[i] || 0);
//         if (randomValue <= 0) {
//             return items[i];
//         }
//     }
//
//     return items[0];
// }
//
// // Generate board-specific badge categories based on board domain
// async function generateBoardBadgeSystem(boardTitle, groups) {
//     // If we already cached categories, use them
//     if (globalBadgeCategoriesCache) return globalBadgeCategoriesCache;
//
//     // Step 1: Generate diverse badge categories
//     const badgeCategoriesPrompt = `
// Generate an extensive list of 20+ diverse badge categories for project management tasks.
// Include industry-standard categories AND unique creative ones.
//
// For each, provide 3-6 possible values and a suitable color hex code for each value.
//
// Return valid JSON array:
// [
//   {
//     "category": "Priority",
//     "values": ["Low", "Medium", "High", "Urgent"],
//     "colors": ["#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2"],
//     "isCommon": true
//   },
//   {
//     "category": "Epic Size",
//     "values": ["Small", "Medium", "Large", "X-Large"],
//     "colors": ["#cce0ff", "#579dff", "#0055cc", "#00368c"],
//     "isCommon": false
//   }
// ]
//
// Use a wide variety of categories that could apply to different board types, from software development to marketing, event planning, HR, facilities, etc.
// Include some unusual but useful categories. Return JSON only.
// `;
//
//     const fallbackCategories = JSON.stringify([
//         {
//             "category": "Priority",
//             "values": ["Low", "Medium", "High", "Urgent"],
//             "colors": ["#baf3db", "#f8e6a0", "#fedec8", "#ffd5d2"],
//             "isCommon": true
//         },
//         {
//             "category": "Status",
//             "values": ["To Do", "In Progress", "Blocked", "Done"],
//             "colors": ["#dfd8fd", "#c6edfb", "#ffd5d2", "#4bce97"],
//             "isCommon": true
//         },
//         {
//             "category": "Effort",
//             "values": ["Quick", "Medium", "Large", "Massive"],
//             "colors": ["#cce0ff", "#579dff", "#0055cc", "#00368c"],
//             "isCommon": true
//         },
//         {
//             "category": "Complexity",
//             "values": ["Simple", "Moderate", "Complex", "Very Complex"],
//             "colors": ["#c6edfb", "#f8e6a0", "#fedec8", "#ffd5d2"],
//             "isCommon": false
//         },
//         {
//             "category": "Impact",
//             "values": ["Low", "Medium", "High", "Critical"],
//             "colors": ["#f1f2f4", "#f8e6a0", "#fea362", "#f87168"],
//             "isCommon": false
//         }
//     ]);
//
//     const response = await generateText(badgeCategoriesPrompt, 1.0, fallbackCategories);
//     let categories = [];
//
//     try {
//         categories = safeJsonParse(response, fallbackCategories);
//         if (!Array.isArray(categories) || categories.length < 5) {
//             categories = safeJsonParse(fallbackCategories);
//         }
//     } catch (e) {
//         console.error("Failed to parse badge categories:", e);
//         categories = safeJsonParse(fallbackCategories);
//     }
//
//     // Step 2: Analyze board context to determine which categories make the most sense
//     const contextAnalysisPrompt = `
// Analyze this board title and its groups to identify what type of work/project this is:
// Board: "${boardTitle}"
// Groups: ${groups.map(g => g.title).join(', ')}
//
// Identify 5-8 badge categories from the list below that would be MOST RELEVANT for this specific board:
// ${categories.map(c => `- ${c.category}: ${c.values.join(', ')}`).join('\n')}
//
// Return as valid JSON with explanations:
// {
//   "boardType": "type of board (e.g. software development, marketing, event planning)",
//   "relevantCategories": [
//     {
//       "category": "category name",
//       "relevance": "explanation of why this category fits this board"
//     }
//   ]
// }
// `;
//
//     const fallbackAnalysis = `{"boardType":"Generic Project","relevantCategories":[{"category":"Priority","relevance":"Every project needs priorities"},{"category":"Status","relevance":"Track progress of tasks"},{"category":"Effort","relevance":"Estimate work required"}]}`;
//     const analysisResponse = await generateText(contextAnalysisPrompt, 0.9, fallbackAnalysis);
//
//     let boardContext = {};
//     try {
//         boardContext = safeJsonParse(analysisResponse, fallbackAnalysis);
//     } catch (e) {
//         console.error("Failed to parse board context:", e);
//         boardContext = safeJsonParse(fallbackAnalysis);
//     }
//
//     // Step 3: Create a board-specific badge system
//     const boardCategories = [];
//
//     // First, add common categories (every board needs these)
//     const commonCategories = categories.filter(c => c.isCommon);
//     boardCategories.push(...commonCategories);
//
//     // Next, add board-specific categories
//     if (boardContext.relevantCategories && Array.isArray(boardContext.relevantCategories)) {
//         for (const relevantCat of boardContext.relevantCategories) {
//             const matchingCategory = categories.find(c => c.category === relevantCat.category);
//             if (matchingCategory && !boardCategories.some(bc => bc.category === matchingCategory.category)) {
//                 // Add the relevance explanation to the category
//                 matchingCategory.relevance = relevantCat.relevance;
//                 boardCategories.push(matchingCategory);
//             }
//         }
//     }
//
//     // Ensure we have at least 5 categories
//     if (boardCategories.length < 5) {
//         const remainingCategories = categories.filter(c =>
//             !boardCategories.some(bc => bc.category === c.category)
//         );
//
//         // Add random categories until we reach at least 5
//         while (boardCategories.length < 5 && remainingCategories.length > 0) {
//             const randomIndex = Math.floor(Math.random() * remainingCategories.length);
//             boardCategories.push(remainingCategories[randomIndex]);
//             remainingCategories.splice(randomIndex, 1);
//         }
//     }
//
//     // Step 4: Create color and style systems
//     const badgeSystem = {
//         boardType: boardContext.boardType || "Generic Project",
//         categories: boardCategories,
//         // Generate a consistent badge style for this board
//         style: random.choice([
//             { style: "rounded", borderRadius: "12px", padding: "4px 8px" },
//             { style: "pill", borderRadius: "16px", padding: "4px 10px" },
//             { style: "square", borderRadius: "4px", padding: "4px 8px" },
//             { style: "tag", borderRadius: "0 8px 8px 0", padding: "4px 12px", leftBorder: true }
//         ])
//     };
//
//     // Cache it
//     globalBadgeCategoriesCache = badgeSystem;
//     return badgeSystem;
// }
//
// // Generate badges for a specific task
// // Generate badges for a specific task
// async function generateTaskBadges(boardTitle, groupTitle, taskTitle, taskDescription, badgeSystem) {
//     // Reduced from 40% to 25% - more tasks should have badges
//     if (Math.random() < 0.25) return [];
//
//     // Determine how many badges this task should have (increased frequency of 2 badges)
//     const badgeCount = Math.random() < 0.5 ? 1 : 2;
//
//     // IMPORTANT: Create an array to store our badges
//     const badges = [];
//
//     // Get all available badge categories
//     const availableCategories = badgeSystem.categories.map(c => c.category);
//
//     // Loop through the number of badges we want
//     for (let i = 0; i < badgeCount; i++) {
//         // Select a category we haven't used yet
//         const unusedCategories = availableCategories.filter(cat =>
//             !badges.some(b => b.categ === cat)
//         );
//
//         if (unusedCategories.length === 0) break;
//
//         const chosenCategory = random.choice(unusedCategories);
//         const categoryData = badgeSystem.categories.find(c => c.category === chosenCategory);
//
//         if (!categoryData) continue;
//
//         // HERE'S THE FIX: Create a TRUE RANDOM distribution of values
//         // Instead of asking GPT for suggestions which skews to medium
//         // And FORCE all ranges in values to be used
//         const valueIndex = Math.floor(Math.random() * categoryData.values.length);
//         const chosenValue = categoryData.values[valueIndex];
//
//         // Get corresponding color
//         const color = categoryData.colors && categoryData.colors[valueIndex]
//             ? categoryData.colors[valueIndex]
//             : "#f1f2f4";
//
//         // Determine text color based on background brightness
//         const textColor = isColorDark(color) ? "#ffffff" : "#172b4d";
//
//         badges.push({
//             id: 'badg_' + random.id(),
//             categ: categoryData.category,
//             color: color,
//             textColor: textColor,
//             badgeOptions: categoryData.values,
//             chosenOption: chosenValue
//         });
//     }
//
//     return badges;
// }
//
// // Create a fallback badge when needed
// function createFallbackBadge(category, value) {
//     // Default badge colors
//     const colors = ["#dfd8fd", "#c6edfb", "#f8e6a0", "#fedec8", "#ffd5d2", "#baf3db"];
//     const color = random.choice(colors);
//
//     return {
//         id: 'badg_' + random.id(),
//         categ: category || "Note",
//         color: color,
//         textColor: isColorDark(color) ? "#ffffff" : "#172b4d",
//         badgeOptions: [value],
//         chosenOption: value || "Default"
//     };
// }
//
// // Smart label assignment with natural distribution
// async function assignLabelsToTask(task, boardTitle, groupTitle, labels) {
//     // Reduced from 30% to 15% - more tasks should have labels
//     if (Math.random() < 0.15 || !Array.isArray(labels) || labels.length === 0) {
//         return [];
//     }
//
//     // Increased likelihood of 2 labels
//     const maxLabels = Math.random() < 0.6 ? 1 : 2;
//
//     // Use GPT to suggest relevant labels
//     const labelPrompt = `
// Analyze this task in its context:
// Board: "${boardTitle}"
// Group: "${groupTitle}"
// Task: "${task.title}"
// Description: "${task.description || ''}"
//
// Available labels: ${labels.map(l => l.title).join(', ')}
//
// Based on the task content, suggest ${maxLabels === 1 ? 'the most' : 'up to ' + maxLabels} appropriate label(s).
// If no labels seem to fit, return an empty array.
//
// Return just the label names as a JSON array:
// ["Label1"${maxLabels > 1 ? ', "Label2"' : ''}]
// `;
//
//     const fallbackLabels = "[]";
//     const response = await generateText(labelPrompt, 0.7, fallbackLabels);
//
//     let suggestedLabels = [];
//     try {
//         suggestedLabels = safeJsonParse(response, fallbackLabels);
//         if (!Array.isArray(suggestedLabels)) {
//             suggestedLabels = [];
//         }
//     } catch (e) {
//         console.error("Failed to parse label suggestions:", e);
//         suggestedLabels = [];
//     }
//
//     // If GPT didn't suggest any labels but we want labels, pick randomly
//     if (suggestedLabels.length === 0 && Math.random() < 0.4) { // 40% chance of random labels when none suggested
//         const randomLabelCount = Math.random() < 0.7 ? 1 : 2;
//         for (let i = 0; i < randomLabelCount && i < labels.length; i++) {
//             suggestedLabels.push(labels[Math.floor(Math.random() * labels.length)].title);
//         }
//     }
//
//     // Match suggested labels to actual label IDs
//     const labelIds = [];
//     for (const suggestion of suggestedLabels) {
//         // Try to find the label by exact title
//         const matchingLabel = labels.find(l =>
//             l.title.toLowerCase() === suggestion.toLowerCase()
//         );
//
//         if (matchingLabel) {
//             labelIds.push(matchingLabel.id);
//         } else {
//             // Try partial matching
//             for (const label of labels) {
//                 if (label.title.toLowerCase().includes(suggestion.toLowerCase()) ||
//                     suggestion.toLowerCase().includes(label.title.toLowerCase())) {
//                     labelIds.push(label.id);
//                     break;
//                 }
//             }
//         }
//
//         // Stop once we've reached the maximum
//         if (labelIds.length >= maxLabels) break;
//     }
//
//     // If we still have no labels but want some, randomly pick 1
//     if (labelIds.length === 0 && Math.random() < 0.3) {
//         labelIds.push(labels[Math.floor(Math.random() * labels.length)].id);
//     }
//
//     return labelIds;
// }
//
// // Main task generation function with improved badges and labels
// async function generateTask(boardTitle, groupTitle) {
//     const fallbackResp = `Title: Kitchen Chores; Description: Clean the fridge and wipe the counters.`
//     const prompt = `
// For the group "${groupTitle}" in the board "${boardTitle}",
// create a short but realistic task. Format EXACTLY as:
// "Title: XYZ; Description: ABC"
// Return no extra text or code blocks, just that line.
// `
//     const response = await generateText(prompt, 1.0, fallbackResp, 128)
//     let taskTitle = 'RandomTask'
//     let taskDescription = 'No desc from GPT'
//     const match = response.match(/Title:\s*(.+?);\s*Description:\s*(.+)/)
//     if (match) {
//         taskTitle = match[1].trim()
//         taskDescription = match[2].trim()
//     }
//
//     // Get badge system for the board (if not already cached)
//     const badgeSystem = await generateBoardBadgeSystem(boardTitle, [{ title: groupTitle }]);
//
//     // Generate badges specifically for this task
//     const badges = await generateTaskBadges(boardTitle, groupTitle, taskTitle, taskDescription, badgeSystem);
//
//     return {
//         id: random.id(),
//         title: taskTitle,
//         status: random.choice(STATUS_OPTIONS),
//         priority: random.choice(PRIORITY_OPTIONS),
//         dueDate: random.date('2024-01-01', '2026-12-31').toISOString(),
//         createdAt: random.date('2024-01-01', '2026-12-31'),
//         description: taskDescription,
//         checklists: await generateChecklists(boardTitle, groupTitle),
//         // Increased member assignments
//         members: random.sample(GPT_USER_POOL, Math.random() < 0.8 ? random.randint(1, 3) : random.randint(0, 5)),
//         // Increased styling frequency from 25% to 40%
//         style: Math.random() < 0.4 ? random.choice([
//             { backgroundColor: getRandomColorLabels(), coverSize: random.choice(['small', 'large']) },
//             { backgroundImage: `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`, coverSize: random.choice(['small', 'large']) }
//         ]) : {},
//         badges,
//         // Increased attachment frequency from 30% to 50%
//         attachments: Math.random() < 0.5 ? getRandomAttachments() : [],
//         activity: generateTaskActivities(taskTitle),
//         // Increased watching frequency from 20% to 30%
//         isUserWatching: Math.random() < 0.3,
//         labelIds: [], // Will be populated after board generation
//         // Increased location frequency from 10% to 20%
//         location: Math.random() < 0.2 ? getRandomLocation() : null,
//     }
// }
//
// // Enhanced group generation function
// async function generateGroups(boardTitle) {
//     const fallback = `Home; Work; Personal`;
//     const groupCount = random.randint(5, 8);
//     const prompt = `
// Board: "${boardTitle}"
// Generate ${groupCount} short sub-topics/group-titles/task-lists about the topic of this board and everyday life, work or task categories related to this board topic, separated by semicolons.
// Example: "Groceries; Home Maintenance; Work Projects; Financial Plan; Everyday; Project General Goals; Wishlist"
// No code blocks, just semicolons.
// `;
//     const text = await generateText(prompt, 1.0, fallback);
//     let groupTitles = text.split(';').map(t => t.trim()).filter(Boolean);
//     if (groupTitles.length < groupCount) {
//         while (groupTitles.length < groupCount) {
//             groupTitles.push('Group ' + random.id().slice(0, 3));
//         }
//     }
//     groupTitles = groupTitles.slice(0, groupCount);
//
//     // Generate each group concurrently
//     const groups = await Promise.all(
//         groupTitles.map(async title => {
//             // Increased task count per group
//             const taskCount = random.randint(4, 8);
//             // Generate tasks concurrently for this group
//             const tasks = await Promise.all(
//                 Array.from({ length: taskCount }, () => generateTask(boardTitle, title))
//             );
//             const backgroundColor = getRandomColor();
//             return {
//                 id: random.id(),
//                 title,
//                 // Reduced archive frequency from 10% to 5%
//                 archivedAt: Math.random() < 0.05 ? random.date('2022-01-01', '2023-12-31').getTime() : null,
//                 tasks,
//                 style: {
//                     backgroundColor,
//                     color: getColorFromBackgroundColor(backgroundColor),
//                 },
//                 // Increased watching frequency from 30% to 40%
//                 watched: Math.random() < 0.4,
//                 // Reduced minimization from 10% to 5%
//                 isMinimaized: Math.random() < 0.05,
//             };
//         })
//     );
//
//     return groups;
// }
//
// // Enhanced board generation with smarter label assignment
// export async function getRandomBoardAI() {
//     showUserMsg('AI: Generating new board..')
//     console.log(' ---- GENERATING AI BOARD -----')
//
//     await initUserPool()
//     const randomTopic = random.choice(userFriendlyTopics)
//     const boardTitlePrompt = `
// Generate a single realistic board name for a project management system based on the topic "${randomTopic}".
// Return just the name, no extra text.
// `
//     const fallbackBoardTitle = 'Generic Board'
//     const boardTitle = await generateText(boardTitlePrompt, 1.0, fallbackBoardTitle)
//
//     showSpinner('AI: Generating board..')
//     const groups = await generateGroups(boardTitle)
//     const labels = await generateLabels(boardTitle)
//
//     // Process labels for each task after we have all data
//     for (const group of groups) {
//         for (const task of group.tasks) {
//             // Assign labels based on task content
//             task.labelIds = await assignLabelsToTask(task, boardTitle, group.title, labels);
//         }
//     }
//
//     const createdBy = random.choice(GPT_USER_POOL) || {
//         _id: 'u_fallback',
//         fullname: 'Unknown user',
//         imgUrl: '',
//     }
//     const boardId = random.id(random.randint(4, 10))
//     const board = {
//         id: boardId,
//         title: boardTitle,
//         // Increased star frequency from 30% to 50%
//         isStarred: Math.random() < 0.5,
//         // Reduced archive frequency
//         archivedAt: Math.random() < 0.03 ? random.date('2022-01-01', '2023-12-31').getTime() : null,
//         createdBy: {
//             _id: createdBy._id,
//             fullname: createdBy.fullname,
//             imgUrl: createdBy.imgUrl,
//         },
//         style: {
//             backgroundImage:
//                 random.choice([
//                     `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                     'color_1.svg',
//                     'color_2.svg',
//                     'color_3.svg',
//                     'color_4.svg',
//                     'color_5.svg',
//                     'color_6.svg',
//                     'color_7.svg',
//                     'color_8.svg',
//                     'color_9.svg',
//                     'color_10.svg',
//                     'color_11.svg',
//                     ])
//         },
//         labels,
//         members: GPT_USER_POOL,
//         groups,
//         activities: [],
//         cmpsOrder: random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length)),
//         badgeSystem: globalBadgeCategoriesCache // Store the badge system with the board
//     }
//
//     // Generate more activities
//     const activityCount = random.randint(4, 10); // Increased from 2-5 to 4-10
//     board.activities = Array.from({ length: activityCount }, () => generateBoardActivity(board));
//
//     showSuccessMsg('AI: Board generation complete!')
//     board.generator = 'getRandomBoardAI'
//     return board
// }
//
//

// async function generateText(prompt, temperature = 1.0, fallback = '', length = 128) {
//     openai = new OpenAI({
//         dangerouslyAllowBrowser: true,
//         apiKey: API_KEY,
//     })
//
//     try {
//         const response = await openai.chat.completions.create({
//             model: 'gpt-3.5-turbo',
//             // model: 'gpt-4o-mini',
//             temperature,
//             max_tokens: length,
//             messages: [{ role: 'user', content: prompt }],
//         })
//         let text = response.choices?.[0]?.message?.content?.trim() || ''
//         while (text.length && !/[\w\d]/.test(text[0])) text = text.slice(1)
//         while (text.length && !/[\w\d]/.test(text[text.length - 1])) {
//             text = text.slice(0, -1)
//         }
//         if (!text) text = fallback
//         else text = text.trim()
//         return text
//     } catch (error) {
//         console.error('OpenAI API error:', error)
//         return fallback
//     }
// }
//
// function bracketBalanceRepair(str) {
//     const openCurly = (str.match(/\{/g) || []).length
//     const closeCurly = (str.match(/\}/g) || []).length
//     const openSquare = (str.match(/\[/g) || []).length
//     const closeSquare = (str.match(/\]/g) || []).length
//
//     let fixed = str
//     if (openCurly === closeCurly + 1 && !str.trim().endsWith('}')) {
//         fixed += '}'
//     }
//     if (openSquare === closeSquare + 1 && !str.trim().endsWith(']')) {
//         fixed += ']'
//     }
//     return fixed
// }
//
// function safeJsonParse(rawStr, fallback = '[]') {
//     let str = rawStr || ''
//     str = str.trim()
//     str = str.replace(/^```+(\w+)?\s*/i, '')
//     str = str.replace(/^json\s*/i, '')
//     if (str.startsWith('[') && !str.endsWith(']')) {
//         str += ']'
//     } else if (str.startsWith('{') && !str.endsWith('}')) {
//         str += '}'
//     }
//     try {
//         return JSON.parse(str)
//     } catch (err) {
//         console.warn('First JSON.parse attempt failed, trying bracketBalanceRepair:', err)
//     }
//     const repaired = bracketBalanceRepair(str)
//     if (repaired) {
//         try {
//             return JSON.parse(repaired)
//         } catch (err2) {
//             console.warn('Second JSON.parse attempt failed:', err2)
//         }
//     }
//     try {
//         return JSON.parse(fallback)
//     } catch {
//         return Array.isArray(fallback) ? [] : {}
//     }
// }
//
// export const STATUS_OPTIONS = ['inProgress', 'done', 'review', 'stuck', 'blocked']
// export const PRIORITY_OPTIONS = ['low', 'medium', 'high']
// export const CMP_ORDER_OPTIONS = ['StatusPicker', 'MemberPicker', 'DatePicker', 'SomeNewPicker', 'OtherPicker']
//
// let GPT_USER_POOL = []
//
// async function initUserPool() {
//     if (GPT_USER_POOL.length) return
//
//     const fallbackPool = [
//         { _id: 'u101', fullname: 'Ava Placeholder', imgUrl: '' },
//         { _id: 'u102', fullname: 'Ben Placeholder', imgUrl: '' },
//         { _id: 'u103', fullname: 'Cara Placeholder', imgUrl: '' },
//     ]
//
//     const prompt = `Generate an array of 5 to 8 distinct "users" for a collaborative project tool.
// Each user = {
//   "_id": "unique string id",
//   "fullname": "some realistic or creative full name",
//   "imgUrl": "some valid image URL or empty"
// }
// Return only valid JSON. e.g.
// [
//   {"_id":"u111", "fullname":"Alice Wonderland", "imgUrl":"https://..."},
//   ...
// ]`
//
//     let text = await generateText(prompt, 1.0)
//     let users = []
//     try {
//         users = safeJsonParse(text, JSON.stringify(fallbackPool))
//     } catch (err) {
//         console.error('Failed to parse GPT user pool. Using fallback.', err)
//         users = fallbackPool
//     }
//
//     if (!Array.isArray(users) || !users.length) {
//         users = fallbackPool
//     }
//
//     if (users.length < 5) {
//         while (users.length < 5) {
//             users.push({
//                 _id: 'u_' + random.id(),
//                 fullname: 'FallbackUser ' + random.id(),
//                 imgUrl: '',
//             })
//         }
//     }
//
//     if (users.length > 8) users = users.slice(0, 8)
//
//     for (let u of users) {
//         if (!u._id || !u.fullname) {
//             u._id = 'u_' + random.id()
//             if (!u.fullname) u.fullname = 'FallbackUser ' + random.id()
//         }
//         if (typeof u.imgUrl !== 'string') {
//             u.imgUrl = ''
//         }
//     }
//
//     GPT_USER_POOL = users
// }
//
// export function getUserPool() {
//     return GPT_USER_POOL
// }
//
// export function getColorFromBackgroundColor(bg) {
//     switch (bg) {
//         case '#baf3db': return '#164b35'
//         case '#f8e6a0': return '#4f3a0e'
//         case '#fedec8': return '#6e3b0d'
//         case '#ffd5d2': return '#6e0d0d'
//         case '#dfd8fd': return '#4f3a0e'
//         case '#cce0ff': return '#0d2e6e'
//         case '#c6edfb': return '#0d3a4f'
//         case '#fdd0ec': return '#6e0d3a'
//         case '#f1f2f4': return '#3a3a3a'
//         default: return '#3a3a3a'
//     }
// }
//
// function getRandomColor() {
//     const trelloColors = [
//         '#baf3db',
//         '#f8e6a0',
//         '#fedec8',
//         '#ffd5d2',
//         '#dfd8fd',
//         '#cce0ff',
//         '#c6edfb',
//         '#fdd0ec',
//         '#f1f2f4',
//     ]
//     return random.choice(trelloColors)
// }
//

//
// function getRandomLocation() {
//     const locations = [
//         { name: 'Tel Aviv-Yafo', lat: 32.109333, lng: 34.855499, zoom: 11 },
//         { name: 'New York City', lat: 40.7128, lng: -74.006, zoom: 12 },
//         { name: 'Paris', lat: 48.8566, lng: 2.3522, zoom: 12 },
//         { name: 'Tokyo', lat: 35.6895, lng: 139.6917, zoom: 12 },
//         { name: 'London', lat: 51.5074, lng: -0.1278, zoom: 12 },
//         { name: 'Sydney', lat: -33.8688, lng: 151.2093, zoom: 12 },
//     ]
//     return random.choice(locations)
// }
//
// async function generateLabels(boardTitle) {
//     const prompt = `
// Board Title: "${boardTitle}"
// Generate an array of 5 short labels for a project mgmt board.
// Some examples: "Grocery", "Weekend Plans", "Work Tasks".
// Return JSON:
// [
//   {"id":"some-id","title":"...","color":"(placeholder)"},
//   ...
// ]
// We only care about 'id', 'title', 'color'.
// Return valid JSON only.
// `
//     const fallback = JSON.stringify([
//         { id: 'lbl1', title: 'Tasks', color: '#9f8fef' },
//         { id: 'lbl2', title: 'Personal', color: '#f87168' },
//         { id: 'lbl3', title: 'Work', color: '#fea362' },
//         { id: 'lbl4', title: 'Errands', color: '#f5cd47' },
//         { id: 'lbl5', title: 'Household', color: '#4bce97' },
//     ])
//
//     const text = await generateText(prompt, 1.0, fallback)
//     let rawLabels = safeJsonParse(text, fallback)
//     if (!Array.isArray(rawLabels) || !rawLabels.length) {
//         rawLabels = safeJsonParse(fallback)
//     }
//
//     const uniqueColors = new Set()
//     return rawLabels.slice(0, 5).map((lbl) => {
//         if (!lbl.id) lbl.id = 'lbl_' + random.id()
//         if (!lbl.title) lbl.title = 'Label ' + random.id()
//         let col = getRandomColorLabels()
//         while (uniqueColors.has(col) && uniqueColors.size < 6) {
//             col = getRandomColorLabels()
//         }
//         uniqueColors.add(col)
//         lbl.color = col
//         return lbl
//     })
// }
//
// const BADGE_COLOR_MAP = {
//     risk: '#fdddc7',
//     approved: '#f8e6a0',
//     priority: '#ffe2bd',
//     now: '#ffc0cb',
// }
// const BADGE_TEXT_COLOR_MAP = {
//     risk: '#6e3b0d',
//     approved: '#4f3a0e',
//     priority: '#6e3b0d',
//     now: '#6e0d3a',
// }
// const BADGE_TYPE_ARRAY = ['risk', 'approved', 'priority', 'now']
//
// async function generateBadges(boardTitle, groupTitle) {
//     const prompt = `
// For the group "${groupTitle}" in the board "${boardTitle}",
// Generate an array of 10 "badge" objects with selectable categories.
// Example:
// [
//   {"categ":"Workload", "badgeOptions": ["Light", "Heavy", "Medium"], "text":"Heavy"},
//   {"categ":"NeedsApproval", "badgeOptions": ["Pending", "Need Approval", "Rejected"], "text":"Pending"},
//   ...
// ]
// Return strictly valid JSON only.
// `
//     const fallback = '[{"categ":"NeedsApproval","text":"Pending"},{"categ":"HighRisk","text":"Proceed Carefully"}]'
//
//     const text = await generateText(prompt, 1.0, fallback)
//     let rawBadges = safeJsonParse(text, fallback)
//     if (!Array.isArray(rawBadges)) {
//         rawBadges = safeJsonParse(fallback)
//     }
//
//     return rawBadges.map((b) => {
//         const randomType = random.choice(BADGE_TYPE_ARRAY)
//         return {
//             id: 'badg_' + random.id(),
//             categ: b.categ || 'General',
//             color: BADGE_COLOR_MAP[randomType] || '#ccc',
//             textColor: BADGE_TEXT_COLOR_MAP[randomType] || '#000',
//             badgeOptions: b.badgeOptions || [],
//             chosenOption: b.text || 'Note',
//         }
//     })
// }
//
// async function generateTask(boardTitle, groupTitle) {
//     const fallbackResp = `Title: Kitchen Chores; Description: Clean the fridge and wipe the counters.`
//     const prompt = `
// For the group "${groupTitle}" in the board "${boardTitle}",
// create a short but realistic task. Format EXACTLY as:
// "Title: XYZ; Description: ABC"
// Return no extra text or code blocks, just that line.
// `
//     const response = await generateText(prompt, 1.0, fallbackResp, 128)
//     let taskTitle = 'RandomTask'
//     let taskDescription = 'No desc from GPT'
//     const match = response.match(/Title:\s*(.+?);\s*Description:\s*(.+)/)
//     if (match) {
//         taskTitle = match[1].trim()
//         taskDescription = match[2].trim()
//     }
//
//     const badges = await generateBadges(boardTitle, groupTitle)
//
//     return {
//         id: random.id(),
//         title: taskTitle,
//         status: random.choice(STATUS_OPTIONS),
//         priority: random.choice(PRIORITY_OPTIONS),
//         dueDate: random.date('2024-01-01', '2026-12-31').toISOString(),
//         createdAt: random.date('2024-01-01', '2026-12-31'),
//         description: taskDescription,
//         checklists: await generateChecklists(boardTitle, groupTitle),
//         members: random.sample(GPT_USER_POOL, random.randint(0, GPT_USER_POOL.length)),
//         style: await generateTaskStyle(),
//         badges,
//         attachments: getRandomAttachments(),
//         activity: generateTaskActivities(taskTitle),
//         isUserWatching: random.choice([true, false]),
//         labels: [],
//         location: random.choice([null, null, null, getRandomLocation()]),
//     }
// }
//
// function getRandomAttachments() {
//     const cnt = random.randint(0, 2)
//     return Array.from({ length: cnt }, () => ({
//         path: `file-${random.randint(1, 999)}.png`,
//         date: Date.now() - random.randint(0, 1_000_000_000),
//         text: random.choice([
//             'Photo proof!',
//             'Attached doc',
//             'Uploaded file',
//             '',
//         ]),
//     }))
// }
//
// async function generateChecklists(boardTitle, groupTitle) {
//     const fallback = JSON.stringify([
//         {
//             id: 'cl_fallback',
//             title: 'Fallback Checklist',
//             progress: 0,
//             todos: [
//                 { id: 'todo1', title: 'Fallback item', isDone: false },
//                 { id: 'todo2', title: 'Another fallback', isDone: true },
//             ],
//         },
//     ])
//     const prompt = `
// For the group "${groupTitle}" in the board "${boardTitle}",
// Generate an array of 3 short "todo" items related to the group title and board title. Return strictly JSON:
// [
//   {"title":"something short","isDone": true/false},
//   ...
// ]
// `
//
//     const text = await generateText(prompt, 1.0, fallback)
//     let todosArray = safeJsonParse(text, '[]')
//     if (!Array.isArray(todosArray)) {
//         console.warn('GPT todos not an array, using fallback.')
//         todosArray = safeJsonParse(fallback)[0].todos
//     }
//     if (!todosArray.length) {
//         todosArray = safeJsonParse(fallback)[0].todos
//     }
//
//     const cCount = random.randint(0, 2)
//     const checklists = []
//     for (let i = 0; i < cCount; i++) {
//         const tCount = 1 + Math.floor(Math.random() * todosArray.length)
//         const partialTodos = todosArray.slice(0, tCount).map((t) => ({
//             id: 'todo_' + random.id(),
//             title: t.title || 'UntitledTodo',
//             isDone: typeof t.isDone === 'boolean' ? t.isDone : false,
//         }))
//         checklists.push({
//             id: 'cl_' + random.id(),
//             title: 'Checklist ' + random.id().slice(0, 4),
//             progress: random.randint(0, 100),
//             todos: partialTodos,
//         })
//     }
//     return checklists
// }
//
// async function generateTaskStyle() {
//     const styleType = random.randint(0, 2)
//     if (styleType === 0) {
//         return {
//             backgroundColor: getRandomColorLabels(),
//             coverSize: random.choice(['small', 'large']),
//         }
//     } else if (styleType === 1) {
//         const images = [
//             null,
//             `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//             'cover-img.png',
//             'cover-img-1.png',
//             'cover-img-2.png',
//             'cover-img-3.png',
//         ]
//         return {
//             backgroundImage: random.choice(images),
//             coverSize: random.choice(['small', 'large']),
//         }
//     } else {
//         return {}
//     }
// }
//
// function generateTaskActivities(taskTitle) {
//     const activityTypes = [
//         `Commented: "Looks good!"`,
//         `Updated title to: ${taskTitle}`,
//         `Attached a new file`,
//         `Status changed to ${random.choice(STATUS_OPTIONS)}`,
//     ]
//     const count = random.randint(1, 3)
//     return Array.from({ length: count }, () => {
//         const byMember = random.choice(GPT_USER_POOL) || {
//             _id: 'fallback',
//             fullname: 'Fallback user',
//             imgUrl: '',
//         }
//         return {
//             id: random.id(),
//             title: random.choice(activityTypes),
//             createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
//             byMember: {
//                 _id: byMember._id,
//                 fullname: byMember.fullname,
//                 imgUrl: byMember.imgUrl,
//             },
//         }
//     })
// }
//
// async function generateGroups(boardTitle) {
//     const fallback = `Home; Work; Personal`
//     const groupCount = random.randint(5, 8)
//     const prompt = `
// Board: "${boardTitle}"
// Generate ${groupCount} short sub-topics/group-titles/task-lists about the topic of this board and everyday life, work or task categories related to this board topic, separated by semicolons.
// Example: "Groceries; Home Maintenance; Work Projects; Financial Plan; Everyday; Project General Goals; Wishlist"
// No code blocks, just semicolons.
// `
//     const text = await generateText(prompt, 1.0, fallback)
//     let groupTitles = text.split(';').map((t) => t.trim()).filter(Boolean)
//     if (groupTitles.length < groupCount) {
//         while (groupTitles.length < groupCount) {
//             groupTitles.push('Group ' + random.id().slice(0, 3))
//         }
//     }
//     groupTitles = groupTitles.slice(0, groupCount)
//
//     const groups = await Promise.all(
//         groupTitles.map(async (title) => {
//             const taskCount = random.randint(3, 6)
//             const tasks = await Promise.all(
//                 Array.from({ length: taskCount }, () => generateTask(boardTitle, title))
//             )
//             const backgroundColor = getRandomColor()
//             return {
//                 id: random.id(),
//                 title,
//                 archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
//                 tasks,
//                 style: {
//                     backgroundColor,
//                     color: getColorFromBackgroundColor(backgroundColor),
//                 },
//                 watched: random.choice([true, false]),
//                 isMinimaized: random.choice([true, false]),
//             }
//         })
//     )
//
//     return groups
// }
//
// function getRandomBoardActivities(board) {
//     const count = random.randint(2, 5)
//     return Array.from({ length: count }, () => {
//         const group = random.choice(board.groups)
//         const task = random.choice(group.tasks)
//         const activityType = random.choice(['added', 'moved', 'updated'])
//         let title
//         if (activityType === 'added') {
//             title = `Added task '${task.title}' to group '${group.title}'`
//         } else if (activityType === 'moved') {
//             const otherGroup = random.choice(board.groups.filter((g) => g.id !== group.id))
//             title = `Moved task '${task.title}' from '${otherGroup?.title}' to '${group.title}'`
//         } else {
//             title = `Updated status of task '${task.title}' to '${random.choice(STATUS_OPTIONS)}'`
//         }
//         const byMember = random.choice(GPT_USER_POOL) || {
//             _id: 'fallback',
//             fullname: 'Fallback user',
//             imgUrl: '',
//         }
//         return {
//             id: random.id(),
//             title,
//             createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
//             byMember: {
//                 _id: byMember._id,
//                 fullname: byMember.fullname,
//                 imgUrl: byMember.imgUrl,
//             },
//             group: { id: group.id, title: group.title },
//             task: { id: task.id, title: task.title },
//         }
//     })
// }
//
// export async function getRandomBoardAI() {
//     showUserMsg('AI: Generating new board..')
//     await initUserPool()
//
//     const randomTopic = 'Random Topic'
//     const boardTitlePrompt = `
// Generate a single realistic board name for a project management system based on the topic "${randomTopic}".
// Return just the name, no extra text.
// `
//     const fallbackBoardTitle = 'Generic Board'
//     const boardTitle = await generateText(boardTitlePrompt, 1.0, fallbackBoardTitle)
//
//     showSpinner('AI: Generating board..')
//
//     const groups = await generateGroups(boardTitle)
//     const labels = await generateLabels(boardTitle)
//
//     for (const group of groups) {
//         for (const task of group.tasks) {
//             const labelSubset = random.sample(labels.map((lbl) => lbl.id), random.randint(0, labels.length))
//             task.labelIds = labelSubset
//             task.labels = labels
//         }
//     }
//
//     const createdBy = random.choice(GPT_USER_POOL) || {
//         _id: 'u_fallback', fullname: 'Unknown user', imgUrl: '',
//     }
//     const boardId = random.id(random.randint(4, 10))
//     const board = {
//         id                : boardId, title: boardTitle, isStarred: random.choice([true, false]), archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]), createdBy: {
//             _id: createdBy._id, fullname: createdBy.fullname, imgUrl: createdBy.imgUrl,
//         }, style          : {
//             backgroundImage: random.choice([
//
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//                 `https://picsum.photos/2400/1600?random=${random.randint(1, 1000)}`,
//
//
//
//
//                 'color_1.svg', 'color_2.svg', 'color_3.svg', 'color_4.svg', 'color_5.svg', 'color_6.svg', 'color_7.svg', 'color_8.svg', 'color_9.svg', 'color_10.svg', 'color_11.svg',]),
//         }, labels, members: GPT_USER_POOL, groups, activities: [], cmpsOrder: random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length)),
//     }
//
//     board.activities = getRandomBoardActivities(board)
//
//     showSuccessMsg('AI: Board generation complete!')
//
//     board.generator = 'getRandomBoardAI'
//     return board
//
// }





/*******************************************
 * Massive Data Generation Pipeline
 * ---------------------------------
 * Creates "Trello-like" boards with:
 * - Domain-based topics
 * - GPT-lifted or fallback task text
 * - Random attachments, checklists
 * - Realistic distribution of members, labels, badges
 * - Optional domain-based images
 *******************************************/

// ===============  YOUR DATA SOURCES  ===============
import OpenAI from 'openai'
import { API_KEY } from './secrets.js'

// The user-friendly topics you provided (massive list)
// export const userFriendlyTopics = [
//     // EXAMPLE SUBSET (You have 600+)
//     "Planning My Marketing Push", "Building a Sales Plan", "Running Social Media", "Boosting SEO",
//     "Sending Email Blasts", "Creating Ads", "Growing the Brand", // ...
//     "Planning My Money", "Budgeting Ahead", "Reporting Cash", // ...
//     "Building Software", "Launching My Product", "Doing R&D", // ...
//     "Defining Target Markets", "Setting Marketing Objectives", // ...
//     // etc. entire massive array...
// ]

// The giant “MASSIVE_BADGE_CATALOG” you provided, containing arrays of categories
// with each category an object: {category, values, colors, ...}
export const MASSIVE_BADGE_CATALOG = [
    // Many categories... your large code snippet with 200+ categories...
    // e.g.
    {
      category: "Appointment Type",
      values: ["Physical","Dental","Vision","Specialist","Emergency","Follow-Up"],
      colors: ["#FFB3BA","#FFDFBA","#BAFFC9","#BAE1FF","#FF6961","#FDFD96"]
    },
    // ...
    // {category: "Priority", values: [...], colors: [...]},
    // ...
]

// Some utility code you have:
import { random, showUserMsg, showSuccessMsg, showErrorMsg, showSpinner } from './util.service.js'


// ===============  HELPER UTILS  ===============

// Weighted or random picks, etc. You can adapt from your code:
function safeJsonParse(str, fallback = '[]') {
    let s = str?.trim() || ''
    // remove triple-backticks, etc.
    s = s.replace(/^```+(\w+)?\s*/i, '').replace(/^json\s*/i, '')

    // fix bracket imbalance
    function bracketBalanceRepair(raw) {
        const openCurly = (raw.match(/\{/g) || []).length
        const closeCurly = (raw.match(/\}/g) || []).length
        const openSquare = (raw.match(/\[/g) || []).length
        const closeSquare = (raw.match(/\]/g) || []).length
        let out = raw
        if (openCurly === closeCurly+1 && !raw.trim().endsWith('}')) out += '}'
        if (openSquare === closeSquare+1 && !raw.trim().endsWith(']')) out += ']'
        return out
    }

    try {
        return JSON.parse(s)
    } catch (err) {
        // Attempt bracket fix
        const repaired = bracketBalanceRepair(s)
        try {
            return JSON.parse(repaired)
        } catch (err2) {
            // fallback
            return JSON.parse(fallback)
        }
    }
}

function isColorDark(hexColor) {
    // crude check
    if (!hexColor || !hexColor.startsWith('#') || hexColor.length !== 7) return true;
    const r = parseInt(hexColor.slice(1,3), 16)
    const g = parseInt(hexColor.slice(3,5), 16)
    const b = parseInt(hexColor.slice(5,7), 16)
    const brightness = Math.sqrt(0.299*r*r + 0.587*g*g + 0.114*b*b)
    return (brightness < 140)
}

// “Domain inference” - naive approach: check if the chosen topic has certain keywords
function inferDomainFromTopic(topic) {
    const t = topic.toLowerCase()
    if (t.includes('marketing') || t.includes('sales') || t.includes('brand') || t.includes('seo') || t.includes('ads')) {
        return 'Marketing and Sales'
    } else if (t.includes('finance') || t.includes('budget') || t.includes('money') || t.includes('tax') || t.includes('cash')) {
        return 'Finance and Accounting'
    } else if (t.includes('software') || t.includes('product') || t.includes('r&d') || t.includes('engineering') || t.includes('launching my product')) {
        return 'Product and Engineering'
    } else if (t.includes('hr') || t.includes('hire') || t.includes('talent') || t.includes('payroll')) {
        return 'Human Resources'
    } else if (t.includes('audit') || t.includes('compliance') || t.includes('legal') || t.includes('regulation') || t.includes('lawsuit')) {
        return 'Legal and Compliance'
    } else if (t.includes('cust') || t.includes('support') || t.includes('helping')) {
        return 'Customer Support'
    } else if (t.includes('business') || t.includes('stakeholders') || t.includes('merger') || t.includes('leadership')) {
        return 'Business and Management'
    } else if (t.includes('health') || t.includes('doctor') || t.includes('wellness') || t.includes('appointment') || t.includes('fitness')) {
        return 'Health and Wellness'
    } else if (t.includes('event') || t.includes('festival') || t.includes('conference') || t.includes('planning a wedding')) {
        return 'Event Planning'
    } else if (t.includes('education') || t.includes('courses') || t.includes('study') || t.includes('lesson')) {
        return 'Education and Learning'
    } else if (t.includes('creative') || t.includes('painting') || t.includes('craft') || t.includes('design')) {
        return 'Creative Projects'
    } else if (t.includes('it') || t.includes('security') || t.includes('tech') || t.includes('digital')) {
        return 'IT and Security'
    } else if (t.includes('personal') || t.includes('lifestyle') || t.includes('wedding') || t.includes('daily') || t.includes('trip')) {
        return 'Personal and Lifestyle'
    } else {
        // fallback
        return 'General'
    }
}

// Filter from MASSIVE_BADGE_CATALOG any categories that match domain via a naive approach:
function filterBadgeCategoriesByDomain(allCatalog, domain) {
    // e.g. if domain is "Marketing and Sales," we look for categories that appear in
    // the snippet section for “Marketing and Sales.” This is naive: we can just search
    // the category name or the comment in the code. For your use, you might add
    // a custom “domain” field to each category or do a better approach.

    // We'll do a simple substring check:
    const dLower = domain.toLowerCase()
    const matches = []
    for (let catObj of allCatalog) {
        const catTitle = catObj.category.toLowerCase()
        // if it includes "marketing", "sales", "seo", or if domain is general
        if (domain === 'General') {
            // Take about 3 random categories from the entire set
            // We do that after finishing the loop, or we can push everything into a pool
            matches.push(catObj)
        } else {
            // check if catTitle has marketing or sales
            if (catTitle.includes('marketing') || catTitle.includes('sales')) {
                if (dLower.includes('marketing') || dLower.includes('sales')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('finance') || catTitle.includes('budget')) {
                if (dLower.includes('finance') || dLower.includes('accounting')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('product') || catTitle.includes('engineering') || catTitle.includes('dev') || catTitle.includes('bug') || catTitle.includes('code')) {
                if (dLower.includes('product') || dLower.includes('engineering') || dLower.includes('software')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('hr') || catTitle.includes('recruit') || catTitle.includes('talent') || catTitle.includes('performance review')) {
                if (dLower.includes('human resources')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('compliance') || catTitle.includes('legal') || catTitle.includes('lawsuit') || catTitle.includes('risk') || catTitle.includes('contract')) {
                if (dLower.includes('legal') || dLower.includes('compliance')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('customer') || catTitle.includes('support') || catTitle.includes('ticket')) {
                if (dLower.includes('customer')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('business') || catTitle.includes('stakeholder') || catTitle.includes('management') || catTitle.includes('merger')) {
                if (dLower.includes('business')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('health') || catTitle.includes('wellness') || catTitle.includes('doctor') || catTitle.includes('treatment')) {
                if (dLower.includes('health') || dLower.includes('wellness')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('event') || catTitle.includes('conference')) {
                if (dLower.includes('event')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('education') || catTitle.includes('learning') || catTitle.includes('academic')) {
                if (dLower.includes('education')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('creative') || catTitle.includes('art') || catTitle.includes('design') || catTitle.includes('writing stage')) {
                if (dLower.includes('creative')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('it') || catTitle.includes('security') || catTitle.includes('privacy')) {
                if (dLower.includes('it') || dLower.includes('security')) {
                    matches.push(catObj)
                }
            }
            else if (catTitle.includes('personal') || catTitle.includes('daily') || catTitle.includes('routine') || catTitle.includes('meal plan')) {
                if (dLower.includes('personal') || dLower.includes('lifestyle')) {
                    matches.push(catObj)
                }
            }
        }
    }

    // If domain=General, we only random-sample from the entire set.
    if (domain === 'General') {
        // just sample ~6 to 10 categories from entire MASSIVE_BADGE_CATALOG
        const sized = random.randint(6,10)
        const entire = [...allCatalog]
        random.shuffle(entire)
        return entire.slice(0, sized)
    }

    if (!matches.length) {
        // fallback: pick any 5 from entire
        const entire = [...allCatalog]
        random.shuffle(entire)
        return entire.slice(0,5)
    }

    // limit to around 4..8 categories:
    random.shuffle(matches)
    const sized2 = random.randint(4,8)
    return matches.slice(0, sized2)
}

function pickBadgeValue(badgeCategory) {
    if (!badgeCategory.values?.length) return null
    const idx = random.randint(0, badgeCategory.values.length -1)
    return {
        value: badgeCategory.values[idx],
        color: badgeCategory.colors?.[idx] ?? '#ccc'
    }
}

function isColorTooDark(hex) {
    // same as isColorDark
    return isColorDark(hex)
}


// ===============  GPT ENABLER  ===============
let openai = null
async function generateText(prompt, temperature=1.0, fallback='', length=128) {
    if (!openai) {
        openai = new OpenAI({
            dangerouslyAllowBrowser: true,
            apiKey: API_KEY,
        })
    }
    try {
        const response = await openai.chat.completions.create({
            // model: 'gpt-3.5-turbo',
            model: 'gpt-4o-mini',
            temperature,
            max_tokens: length,
            messages: [{role: 'user', content: prompt}],
        })
        let text = response.choices?.[0]?.message?.content?.trim() || ''
        // remove leading/trailing weirdness
        while (text.length && !/[\w\d]/.test(text[0])) text = text.slice(1)
        while (text.length && !/[\w\d]/.test(text[text.length-1])) text = text.slice(0, -1)
        if (!text) text = fallback
        else text = text.trim()
        return text
    } catch (err) {
        console.error('OpenAI error:', err)
        return fallback
    }
}

// ===============  USER POOL  ===============
let GPT_USER_POOL = gUsersPool

async function initUserPool() {
    if (GPT_USER_POOL.length) return

    // If you want truly random user images, you can adapt your code that picks from a large face library
    // For demonstration, we do a short fallback:
    const fallbackPool = [
        { _id:'u101', fullname:'Alice Placeholder', imgUrl:'' },
        { _id:'u102', fullname:'Bob Placeholder',   imgUrl:'' },
        { _id:'u103', fullname:'Cara Placeholder',  imgUrl:'' },
    ]

    const prompt = `
Generate an array of 5 distinct "users" for a collaborative project tool.
Each user = {
  "_id": "unique string id",
  "fullname": "some realistic or creative full name",
  "imgUrl": "some valid image URL or empty"
}
Return only valid JSON. e.g.
[
  {"_id":"u111","fullname":"Alice Wonderland","imgUrl":"https://example.com/alice.jpg"},
  ...
]`

    const text = await generateText(prompt, 1.0)
    let arr = []
    try {
        arr = safeJsonParse(text, JSON.stringify(fallbackPool))
    } catch(e) {
        console.error('Failed parse GPT userpool:', e)
        arr = fallbackPool
    }
    if (!Array.isArray(arr) || !arr.length) arr = fallbackPool

    // ensure min 5
    while (arr.length < 5) {
        arr.push({
            _id:'u_'+random.id(),
            fullname:'FallbackUser '+random.id(),
            imgUrl:''
        })
    }
    // max 8
    if (arr.length>8) arr=arr.slice(0,8)
    // final
    GPT_USER_POOL = arr
}

export function getUserPool() {
    return GPT_USER_POOL
}


// ===============  CHECKLISTS  ===============
async function generateChecklistItems(boardTitle, groupTitle) {
    // ask GPT for 3 short items
    const fallback = JSON.stringify([
        {"title":"Fallback item 1","isDone":false},
        {"title":"Fallback item 2","isDone":true},
        {"title":"Fallback item 3","isDone":false},
    ])
    const prompt = `
For the group "${groupTitle}" in the board "${boardTitle}",
Generate exactly 3 short "todo" items. 
Return strictly JSON array:
[{"title":"xxx","isDone":true/false}, ...]
`
    const txt = await generateText(prompt,1.0,fallback)
    let parsed = safeJsonParse(txt, fallback)
    if (!Array.isArray(parsed) || !parsed.length) parsed = safeJsonParse(fallback)
    // ensure we have 3
    while (parsed.length <3) {
        parsed.push({"title":"Added fallback item","isDone": random.choice([true,false])})
    }
    return parsed.slice(0,3)
}


// Cache for Unsplash image URLs to avoid redundant API calls
const unsplashImageCache = new Map();

// Advanced image source management system with multi-provider fallbacks
const imageCache = new Map();

// CORE TASK GENERATION FUNCTION
// async function generateSingleTask(boardTitle, groupTitle) {
//     // Start critical async operations immediately
//     const gptRespPromise = generateText(`
// For the group "${groupTitle}" in the board "${boardTitle}",
// Create a short realistic task.
// Format EXACTLY:
// "Title: XYZ; Description: ABC"
// No code blocks, no extra text.
// `, 1.0, `Title: My Fallback Task; Description: This is a fallback.`, 128);
//
//     const checklistPromises = Array(random.randint(0,2)).fill().map(() =>
//         generateChecklistItems(boardTitle, groupTitle)
//     );
//
//     // Fast synchronous operations
//     const styleType = random.choice([0,1,2]);
//     let style = {};
//     if (styleType === 0) {
//         style = {
//             backgroundColor: random.choice(['#9f8fef','#f87168','#fea362','#f5cd47','#4bce97','#579dff']),
//             coverSize: random.choice(['small','large'])
//         };
//     } else if (styleType === 1) {
//         // Will be populated with appropriate image URL later
//         style = {
//             backgroundImage: null,
//             coverSize: random.choice(['small','large'])
//         };
//     }
//
//     // More fast local operations
//     const attachments = Array(random.randint(0,2)).fill().map(() => ({
//         path: `file-${random.randint(1,999)}.png`,
//         date: Date.now() - random.randint(0,1_000_000_000),
//         text: random.choice(['Photo proof!','Attached doc','Uploaded file',''])
//     }));
//
//     const mems = random.sample(GPT_USER_POOL, random.randint(0,3));
//     const loc = (Math.random()<0.1) ? {
//         name: 'Tel Aviv-Yafo', lat: 32.109333, lng: 34.855499, zoom: 11
//     } : null;
//
//     // WAIT POINT: Get task title and description
//     const gptResp = await gptRespPromise;
//     let title = 'RandomTask';
//     let desc = 'No desc from GPT';
//     const match = gptResp.match(/Title:\s*(.+?);\s*Description:\s*(.+)/);
//     if (match) {
//         title = match[1].trim();
//         desc = match[2].trim();
//     }
//
//     // Start image request only after we have title/desc
//     let imagePromise = null;
//     if (styleType === 1) {
//         imagePromise = getDesignAssetForTask(title, desc, boardTitle, groupTitle);
//     }
//
//     // Generate activities using title
//     const activities = Array(random.randint(1,3)).fill().map(() => {
//         const byMem = random.choice(GPT_USER_POOL) || {_id:'fallback', fullname:'Fallback user', imgUrl:''};
//         return {
//             id: random.id(),
//             title: random.choice([
//                 `Commented: "Looks good!"`,
//                 `Edited title to: ${title}`,
//                 `Attached a new file`,
//                 `Set status to 'inProgress'`
//             ]),
//             createdAt: random.date('2023-01-01','2025-12-31').getTime(),
//             byMember: {
//                 _id: byMem._id,
//                 fullname: byMem.fullname,
//                 imgUrl: byMem.imgUrl
//             }
//         };
//     });
//
//     // Wait for all remaining promises
//     const [checklistResults, imageUrl] = await Promise.all([
//         Promise.all(checklistPromises),
//         imagePromise || Promise.resolve(null)
//     ]);
//
//     // Process checklists
//     const checklists = checklistResults.map(items => {
//         const todos = items.map(it => ({
//             id: 'todo_' + random.id(),
//             title: it.title,
//             isDone: it.isDone,
//         }));
//         return {
//             id: 'cl_' + random.id(),
//             title: 'Checklist ' + random.id().slice(0,4),
//             progress: 0,
//             todos
//         };
//     });
//
//     // Apply image URL if we got one
//     if (styleType === 1 && imageUrl) {
//         style.backgroundImage = imageUrl;
//     }
//
//     // Return final task object
//     return {
//         id: 'tsk_' + random.id(),
//         title,
//         status: random.choice(['inProgress','done','review','stuck','blocked']),
//         priority: random.choice(['low','medium','high']),
//         dueDate: random.date('2024-01-01','2026-12-31').toISOString(),
//         createdAt: random.date('2023-01-01','2024-12-31').getTime(),
//         description: desc,
//         checklists,
//         members: mems,
//         style,
//         badges: [],
//         attachments,
//         activity: activities,
//         isUserWatching: random.choice([true,false]),
//         labelIds: [],
//         location: loc
//     };
// }

/**
 * MASTER IMAGE SOURCE ROUTER - Determines the best image source based on task type
 * and dispatches to appropriate providers
 */
// async function getDesignAssetForTask(title, desc, boardTitle, groupTitle) {
//     // Create a cache key
//     const combinedText = `${title}${desc}${boardTitle}${groupTitle}`.toLowerCase();
//     const cacheKey = combinedText.replace(/[^a-z0-9]/g, '').slice(0, 60);
//
//     // Return cached image if available
//     if (imageCache.has(cacheKey)) {
//         return imageCache.get(cacheKey);
//     }
//
//     // Analyze task content to determine best image type
//     const taskType = analyzeTaskType(title, desc);
//
//     // Track attempts for logging and debugging
//     const attempts = [];
//     let imageUrl = null;
//
//     // TRY STRATEGY 1: Based on task type, try the most appropriate source first
//     try {
//         switch(taskType) {
//             case 'technical':
//                 attempts.push('TECHNICAL');
//                 imageUrl = await getTechnicalImage(title, desc);
//                 break;
//             case 'creative':
//                 attempts.push('CREATIVE');
//                 imageUrl = await getCreativeImage(title, desc);
//                 break;
//             case 'planning':
//                 attempts.push('PLANNING');
//                 imageUrl = await getPlanningImage(title, desc);
//                 break;
//             case 'meeting':
//                 attempts.push('MEETING');
//                 imageUrl = await getMeetingImage(title, desc);
//                 break;
//             default:
//                 attempts.push('GENERIC');
//                 imageUrl = await getGenericWorkImage(title, desc);
//         }
//     } catch (e) {
//         console.error(`Primary source error for ${taskType}:`, e);
//     }
//
//     // TRY STRATEGY 2: If primary source failed, try Unsplash
//     if (!imageUrl) {
//         try {
//             attempts.push('UNSPLASH');
//             imageUrl = await getUnsplashImage(title, desc);
//         } catch (e) {
//             console.error('Unsplash fallback error:', e);
//         }
//     }
//
//     // TRY STRATEGY 3: If Unsplash failed, try icon/sticker source
//     if (!imageUrl) {
//         try {
//             attempts.push('ICON_STICKER');
//             imageUrl = await getIconOrSticker(title, desc);
//         } catch (e) {
//             console.error('Icon/Sticker fallback error:', e);
//         }
//     }
//
//     // ULTIMATE FALLBACK: Guaranteed to work
//     if (!imageUrl) {
//         attempts.push('ULTIMATE_FALLBACK');
//         imageUrl = getUltimateFallbackImage(taskType);
//     }
//
//     // Cache the result
//     if (imageUrl) {
//         imageCache.set(cacheKey, imageUrl);
//     }
//
//     return imageUrl;
// }

/**
 * Analyze task content to determine its general type
 */
// function analyzeTaskType(title, desc) {
//     const fullText = `${title} ${desc}`.toLowerCase();
//
//     // Technical keywords
//     const technicalTerms = ['code', 'bug', 'fix', 'develop', 'implement', 'feature',
//                             'system', 'api', 'database', 'server', 'test', 'refactor',
//                             'debug', 'deploy', 'architecture', 'schema', 'diagram',
//                             'infrastructure', 'algorithm', 'prototype', 'engineering'];
//
//     // Creative keywords
//     const creativeTerms = ['design', 'create', 'draft', 'mockup', 'sketch', 'wireframe',
//                           'graphic', 'illustration', 'artwork', 'visual', 'logo', 'brand',
//                           'style', 'creative', 'color', 'typography', 'layout', 'drawing'];
//
//     // Planning keywords
//     const planningTerms = ['plan', 'strategy', 'roadmap', 'timeline', 'schedule', 'milestone',
//                           'objective', 'goal', 'kpi', 'metric', 'project', 'task', 'backlog',
//                           'sprint', 'prioritize', 'organize', 'coordinate', 'requirement'];
//
//     // Meeting keywords
//     const meetingTerms = ['meeting', 'call', 'discuss', 'conversation', 'sync', 'presentation',
//                          'review', 'retrospective', 'standup', 'session', 'workshop',
//                          'conference', 'interview', 'demo', 'pitch', 'briefing'];
//
//     // Count occurrences
//     const counts = {
//         technical: technicalTerms.filter(term => fullText.includes(term)).length,
//         creative: creativeTerms.filter(term => fullText.includes(term)).length,
//         planning: planningTerms.filter(term => fullText.includes(term)).length,
//         meeting: meetingTerms.filter(term => fullText.includes(term)).length
//     };
//
//     // Find the highest count
//     let maxCount = 0;
//     let maxType = 'generic';
//
//     for (const [type, count] of Object.entries(counts)) {
//         if (count > maxCount) {
//             maxCount = count;
//             maxType = type;
//         }
//     }
//
//     // If we found matching keywords, return that type
//     if (maxCount > 0) {
//         return maxType;
//     }
//
//     // Default to generic if no specific keywords found
//     return 'generic';
// }

/**
 * Get technical diagram, schematic, or code-related image
 */
async function getTechnicalImage(title, desc) {
    const unsplashAccessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Technical-specific search terms that yield diagrams and schematics
    const technicalQueries = [
        'code diagram', 'technical schematic', 'system architecture',
        'flowchart', 'code on screen', 'programming', 'tech diagram',
        'network diagram', 'software development', 'database schema',
        'circuit board', 'algorithm diagram', 'engineering drawing'
    ];

    // Extract keywords from title/desc
    const keywords = extractKeywords(title + ' ' + desc);

    // Combine a technical term with a content keyword for better results
    const technicalTerm = technicalQueries[Math.floor(Math.random() * technicalQueries.length)];
    const searchQuery = keywords.length > 0
        ? `${technicalTerm} ${keywords[0]}`
        : technicalTerm;

    try {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${unsplashAccessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Technical image search failed: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }

        return null;
    } catch (e) {
        console.error('Technical image fetch failed:', e);
        return null;
    }
}

/**
 * Get creative, hand-drawn, sketch, or design-related image
 */
async function getCreativeImage(title, desc) {
    const unsplashAccessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Creative-specific search terms that yield hand-drawn, sketched images
    const creativeQueries = [
        'hand drawn sketch', 'design sketch', 'artist drawing', 'creative sketch',
        'sketch notebook', 'design process', 'wireframe drawing', 'sketchbook',
        'hand drawn mockup', 'creative doodle', 'design thinking', 'paper prototype',
        'sketch notes', 'illustrated notes', 'concept art', 'storyboard'
    ];

    // Extract keywords from title/desc
    const keywords = extractKeywords(title + ' ' + desc);

    // Combine a creative term with a content keyword for better results
    const creativeTerm = creativeQueries[Math.floor(Math.random() * creativeQueries.length)];
    const searchQuery = keywords.length > 0
        ? `${creativeTerm} ${keywords[0]}`
        : creativeTerm;

    try {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${unsplashAccessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Creative image search failed: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }

        return null;
    } catch (e) {
        console.error('Creative image fetch failed:', e);
        return null;
    }
}

/**
 * Get planning, roadmap, schedule, or strategy-related image
 */
async function getPlanningImage(title, desc) {
    const unsplashAccessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Planning-specific search terms that yield planning artifacts
    const planningQueries = [
        'strategic planning', 'project planning', 'planning board', 'roadmap',
        'sticky notes planning', 'kanban board', 'sprint planning', 'task board',
        'planning session', 'planner notebook', 'planning diagram', 'strategy map',
        'timeline planning', 'project management', 'task planning', 'goal setting'
    ];

    // Extract keywords from title/desc
    const keywords = extractKeywords(title + ' ' + desc);

    // Combine a planning term with a content keyword for better results
    const planningTerm = planningQueries[Math.floor(Math.random() * planningQueries.length)];
    const searchQuery = keywords.length > 0
        ? `${planningTerm} ${keywords[0]}`
        : planningTerm;

    try {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${unsplashAccessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Planning image search failed: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }

        return null;
    } catch (e) {
        console.error('Planning image fetch failed:', e);
        return null;
    }
}

/**
 * Get meeting, conversation, or collaboration-related image
 */
async function getMeetingImage(title, desc) {
    const unsplashAccessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Meeting-specific search terms
    const meetingQueries = [
        'team meeting', 'conference room', 'whiteboard meeting', 'collaboration session',
        'video conference', 'meeting notes', 'presentation meeting', 'team discussion',
        'brainstorming session', 'meeting room', 'team workshop', 'design thinking',
        'team huddle', 'one on one meeting', 'standup meeting', 'office meeting'
    ];

    // Extract keywords from title/desc
    const keywords = extractKeywords(title + ' ' + desc);

    // Combine a meeting term with a content keyword for better results
    const meetingTerm = meetingQueries[Math.floor(Math.random() * meetingQueries.length)];
    const searchQuery = keywords.length > 0
        ? `${meetingTerm} ${keywords[0]}`
        : meetingTerm;

    try {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${unsplashAccessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Meeting image search failed: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }

        return null;
    } catch (e) {
        console.error('Meeting image fetch failed:', e);
        return null;
    }
}

/**
 * Generic work-related image fallback
 */
async function getGenericWorkImage(title, desc) {
    const unsplashAccessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Generic work-related queries
    const genericQueries = [
        'productivity', 'workspace', 'office desk', 'work environment',
        'task management', 'work tools', 'office supplies', 'organization',
        'work planning', 'laptop work', 'modern office', 'work setup',
        'business desk', 'professional workspace', 'clean desk'
    ];

    // Extract keywords from title/desc
    const keywords = extractKeywords(title + ' ' + desc);

    // Combine a generic term with a content keyword for better results
    const genericTerm = genericQueries[Math.floor(Math.random() * genericQueries.length)];
    const searchQuery = keywords.length > 0
        ? `${genericTerm} ${keywords[0]}`
        : genericTerm;

    try {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${unsplashAccessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Generic image search failed: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }

        return null;
    } catch (e) {
        console.error('Generic image fetch failed:', e);
        return null;
    }
}

/**
 * Get a simple Unsplash image based on keywords
 */
async function getUnsplashImage(title, desc) {
    const unsplashAccessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Extract keywords from title/desc
    const keywords = extractKeywords(title + ' ' + desc);

    // If no keywords found, use fallback term
    const searchQuery = keywords.length > 0
        ? keywords.slice(0, 2).join(' ')
        : 'productivity work';

    try {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${unsplashAccessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Unsplash search failed: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }

        return null;
    } catch (e) {
        console.error('Unsplash fetch failed:', e);
        return null;
    }
}

/**
 * Get icon or sticker-like image using The Noun Project API
 * NOTE: This is a MOCK implementation since we don't have actual Noun Project credentials
 * In a real implementation, you would use their API with proper authentication
 */
async function getIconOrSticker(title, desc) {
    // Since we don't have Noun Project API credentials, simulate with hardcoded sticker URLs
    // In a real implementation, replace this with actual API calls

    // These are placeholder URLs for various sticker/icon style images
    // Replace these with your actual sticker sources or API implementation
    const stickerUrls = [
        // Colorful sticker-like images
        'https://cdn.dribbble.com/users/113499/screenshots/16599280/media/a7211408676ba2cbc0860a0464c93071.png',
        'https://cdn.dribbble.com/users/43762/screenshots/16587858/media/f7f87f9437a13a1d3ae63b18276dfe7c.png',
        'https://cdn.dribbble.com/users/471921/screenshots/16571682/media/a9e7b7aa72b1ea64b1e158e4cf2175f7.jpg',
        'https://cdn.dribbble.com/users/2424687/screenshots/16559718/media/8b78217fabe34fdc07080747e6da88bd.png',
        'https://cdn.dribbble.com/users/427857/screenshots/16551537/media/a8f18b2d2a8c1e4e2216e8410c4c20a0.png',

        // Hand-drawn style images
        'https://cdn.dribbble.com/users/1728196/screenshots/16556285/media/8292e077f1c8c7b053c98368f350a25a.jpg',
        'https://cdn.dribbble.com/users/1585453/screenshots/16573417/media/00dfd6bea20cf92641ff4752cfc1e87e.jpg',
        'https://cdn.dribbble.com/users/66319/screenshots/16559233/media/51a6eb892913e2bfa75a45a1bf9c5ec7.png',

        // Schematic/diagram style images
        'https://cdn.dribbble.com/users/311304/screenshots/16575909/media/67c689926c358cf0c6167c3181b77c1e.png',
        'https://cdn.dribbble.com/users/1874303/screenshots/16558429/media/d8807b79cbf0d1893959e1df90c8da8c.png'
    ];

    // In a real implementation, do actual keyword matching here
    // For now, just use the extracted keywords to select a sticker semi-deterministically
    const keywords = extractKeywords(title + ' ' + desc);
    let seed = 0;

    if (keywords.length > 0) {
        // Create a deterministic seed from the first keyword
        seed = Array.from(keywords[0]).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    } else {
        // Fallback to random if no keywords
        seed = Math.floor(Math.random() * 1000);
    }

    // Select a sticker URL based on the seed
    const index = seed % stickerUrls.length;
    return stickerUrls[index];
}

/**
 * Ultimate fallback that can never fail - uses themed dummy images
 */
function getUltimateFallbackImage(taskType) {
    // Generate a seed for consistent but varied images
    const seed = Math.floor(Math.random() * 10000);

    // Map task types to specific colors for visual differentiation
    const typeColors = {
        'technical': '5B8AF9',    // Blue
        'creative': 'F96E5B',     // Red-Orange
        'planning': '8BC34A',     // Green
        'meeting': 'FFC107',      // Amber
        'generic': '9E9E9E'       // Grey
    };

    // Get the appropriate color for this task type
    const color = typeColors[taskType] || '9E9E9E';

    // Create a dummy image URL with task type as text
    return `https://dummyimage.com/800x600/${color}/fff&text=${taskType}+task`;
}

/**
 * Extract meaningful keywords from text
 */
function extractKeywords(text) {
    // List of common stop words to filter out
    const stopWords = [
        'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 'by',
        'about', 'as', 'into', 'like', 'through', 'after', 'before', 'between', 'from',
        'of', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
        'do', 'does', 'did', 'will', 'would', 'shall', 'should', 'can', 'could', 'may',
        'might', 'must', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her',
        'us', 'them', 'this', 'that', 'these', 'those'
    ];

    // Process the text into keywords
    let words = text.toLowerCase()
                    .replace(/[^\w\s]/g, '')  // Remove punctuation
                    .split(/\s+/);            // Split on whitespace

    // Filter out stop words, empty strings, and very short words
    words = words.filter(word =>
        word.length > 3 && !stopWords.includes(word)
    );

    // Sort by word length (longer words are often more specific/meaningful)
    words.sort((a, b) => b.length - a.length);

    // Return the top 3 keywords
    return words.slice(0, 3);
}

// Global registry to track used images per board
const boardImageRegistry = new Map();

// Global cache for all image URLs to avoid redundant API calls
// const imageCache = new Map();

// ENHANCED TASK GENERATION FUNCTION
async function generateSingleTask(boardTitle, groupTitle, useEmoji) {
    // Check if we need emoji in this task (30% probability)


    // Start critical async operations immediately
    const gptPrompt = useEmoji
        ? `
For the group "${groupTitle}" in the board "${boardTitle}",
Create a short realistic task. 
IMPORTANT: Include 1-2 relevant emojis in the title and/or description.
Format EXACTLY:
"Title: XYZ; Description: ABC"
No code blocks, no extra text.
`
        : `
For the group "${groupTitle}" in the board "${boardTitle}",
Create a short realistic task. 
Format EXACTLY:
"Title: XYZ; Description: ABC"
No code blocks, no extra text.
`;

    const gptRespPromise = generateText(gptPrompt, 1.0, `Title: My Fallback Task; Description: This is a fallback.`, 128);

    const checklistPromises = Array(random.randint(0,2)).fill().map(() =>
        generateChecklistItems(boardTitle, groupTitle)
    );

    // Fast synchronous operations
    const styleType = random.choice([0,1,2]);
    let style = {};
    if (styleType === 0) {
        style = {
            backgroundColor: random.choice(['#9f8fef','#f87168','#fea362','#f5cd47','#4bce97','#579dff']),
            coverSize: random.choice(['small','large'])
        };
    } else if (styleType === 1) {
        // Will be populated with appropriate image URL later
        style = {
            backgroundImage: null,
            coverSize: random.choice(['small','large'])
        };
    }

    // More fast local operations
    const attachments = Array(random.randint(0,2)).fill().map(() => ({
        path: `file-${random.randint(1,999)}.png`,
        date: Date.now() - random.randint(0,1_000_000_000),
        text: random.choice(['Photo proof!','Attached doc','Uploaded file',''])
    }));

    const mems = random.sample(GPT_USER_POOL, random.randint(0,3));

    // ENHANCED LOCATION RANDOMIZATION - increased probability and wider variety
    const includeLocation = Math.random() < 0.2; // Increased from 0.1 to 0.2
    const loc = includeLocation ? getRandomLocation() : null;

    // WAIT POINT: Get task title and description
    const gptResp = await gptRespPromise;
    let title = 'RandomTask';
    let desc = 'No desc from GPT';
    const match = gptResp.match(/Title:\s*(.+?);\s*Description:\s*(.+)/);
    if (match) {
        title = match[1].trim();
        desc = match[2].trim();
    }

    // Start image request only after we have title/desc
    let imagePromise = null;
    if (styleType === 1) {
        imagePromise = getUniqueDesignAssetForTask(title, desc, boardTitle, groupTitle);
    }

    // Generate activities using title
    const activities = Array(random.randint(1,3)).fill().map(() => {
        const byMem = random.choice(GPT_USER_POOL) || {_id:'fallback', fullname:'Fallback user', imgUrl:''};
        return {
            id: random.id(),
            title: random.choice([
                `Commented: "Looks good!"`,
                `Edited title to: ${title}`,
                `Attached a new file`,
                `Set status to 'inProgress'`
            ]),
            createdAt: random.date('2023-01-01','2025-12-31').getTime(),
            byMember: {
                _id: byMem._id,
                fullname: byMem.fullname,
                imgUrl: byMem.imgUrl
            }
        };
    });

    // Wait for all remaining promises
    const [checklistResults, imageUrl] = await Promise.all([
        Promise.all(checklistPromises),
        imagePromise || Promise.resolve(null)
    ]);

    // Process checklists
    const checklists = checklistResults.map(items => {
        const todos = items.map(it => ({
            id: 'todo_' + random.id(),
            title: it.title,
            isDone: it.isDone,
        }));
        return {
            id: 'cl_' + random.id(),
            title: 'Checklist ' + random.id().slice(0,4),
            progress: 0,
            todos
        };
    });

    // Apply image URL if we got one
    if (styleType === 1 && imageUrl) {
        style.backgroundImage = imageUrl;
    }

    // Return final task object
    return {
        id: 'tsk_' + random.id(),
        title,
        status: random.choice(['inProgress','done','review','stuck','blocked']),
        priority: random.choice(['low','medium','high']),
        dueDate: random.date('2024-01-01','2026-12-31').toISOString(),
        createdAt: random.date('2023-01-01','2024-12-31').getTime(),
        description: desc,
        checklists,
        members: mems,
        style,
        badges: [],
        attachments,
        activity: activities,
        isUserWatching: random.choice([true,false]),
        labelIds: [],
        location: loc
    };
}

/**
 * Get a unique image that hasn't been used elsewhere on the board
 */
async function getUniqueDesignAssetForTask(title, desc, boardTitle, groupTitle) {
    // Initialize the board's image registry if it doesn't exist
    if (!boardImageRegistry.has(boardTitle)) {
        boardImageRegistry.set(boardTitle, new Set());
    }

    // Get the set of used images for this board
    const usedImages = boardImageRegistry.get(boardTitle);

    // Maximum attempts to find a unique image
    const MAX_ATTEMPTS = 5;
    let imageUrl = null;
    let attempts = 0;

    // Try to get a unique image
    while (!imageUrl && attempts < MAX_ATTEMPTS) {
        attempts++;

        // Get a candidate image
        const candidateImage = await getDesignAssetForTask(title, desc, boardTitle, groupTitle);

        // If the image isn't already used on this board, use it
        if (candidateImage && !usedImages.has(candidateImage)) {
            imageUrl = candidateImage;
            usedImages.add(imageUrl); // Mark this image as used
            break;
        }

        // If we're at the last attempt and still don't have a unique image, force uniqueness
        // by appending a random query param
        if (attempts === MAX_ATTEMPTS && candidateImage) {
            const forcedUniqueUrl = `${candidateImage}${candidateImage.includes('?') ? '&' : '?'}uniqueId=${random.id()}`;
            imageUrl = forcedUniqueUrl;
            usedImages.add(imageUrl);
        }
    }

    return imageUrl;
}

/**
 * MASTER IMAGE SOURCE ROUTER - Determines the best image source based on task type
 * and dispatches to appropriate providers
 */
async function getDesignAssetForTask(title, desc, boardTitle, groupTitle) {
    // Create a cache key
    const combinedText = `${title}${desc}${boardTitle}${groupTitle}`.toLowerCase();
    const cacheKey = combinedText.replace(/[^a-z0-9]/g, '').slice(0, 60);

    // Return cached image if available
    if (imageCache.has(cacheKey)) {
        return imageCache.get(cacheKey);
    }

    // Analyze task content to determine best image type
    const taskType = analyzeTaskType(title, desc);

    // Track attempts for logging and debugging
    const attempts = [];
    let imageUrl = null;

    // TRY STRATEGY 1: Based on task type, try the most appropriate source first
    try {
        switch(taskType) {
            case 'technical':
                attempts.push('TECHNICAL');
                imageUrl = await getTechnicalImage(title, desc);
                break;
            case 'creative':
                attempts.push('CREATIVE');
                imageUrl = await getCreativeImage(title, desc);
                break;
            case 'planning':
                attempts.push('PLANNING');
                imageUrl = await getPlanningImage(title, desc);
                break;
            case 'meeting':
                attempts.push('MEETING');
                imageUrl = await getMeetingImage(title, desc);
                break;
            default:
                attempts.push('GENERIC');
                imageUrl = await getGenericWorkImage(title, desc);
        }
    } catch (e) {
        console.error(`Primary source error for ${taskType}:`, e);
    }

    // TRY STRATEGY 2: If primary source failed, try Unsplash
    if (!imageUrl) {
        try {
            attempts.push('UNSPLASH');
            imageUrl = await getUnsplashImage(title, desc);
        } catch (e) {
            console.error('Unsplash fallback error:', e);
        }
    }

    // TRY STRATEGY 3: If Unsplash failed, try icon/sticker source
    if (!imageUrl) {
        try {
            attempts.push('ICON_STICKER');
            imageUrl = await getIconOrSticker(title, desc);
        } catch (e) {
            console.error('Icon/Sticker fallback error:', e);
        }
    }

    // ULTIMATE FALLBACK: Guaranteed to work
    if (!imageUrl) {
        attempts.push('ULTIMATE_FALLBACK');
        imageUrl = getUltimateFallbackImage(taskType);
    }

    // Cache the result
    if (imageUrl) {
        imageCache.set(cacheKey, imageUrl);
    }

    return imageUrl;
}

/**
 * Generate a diverse range of realistic locations
 */
function getRandomLocation() {
    // List of interesting cities with accurate coordinates
    const cities = [
        { name: 'Tel Aviv-Yafo, Israel', lat: 32.109333, lng: 34.855499, zoom: 10 },
        { name: 'New York, USA', lat: 40.7128, lng: -74.0060, zoom: 12 },
        { name: 'San Francisco, USA', lat: 37.7749, lng: -122.4194, zoom: 12 },
        { name: 'London, UK', lat: 51.5074, lng: -0.1278, zoom: 11 },
        { name: 'Berlin, Germany', lat: 52.5200, lng: 13.4050, zoom: 11 },
        { name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503, zoom: 10 },
        { name: 'Sydney, Australia', lat: 33.8688, lng: 151.2093, zoom: 12 },
        { name: 'Singapore', lat: 1.3521, lng: 103.8198, zoom: 11 },
        { name: 'Toronto, Canada', lat: 43.6532, lng: -79.3832, zoom: 11 },
        { name: 'Paris, France', lat: 48.8566, lng: 2.3522, zoom: 11 },
        { name: 'Austin, USA', lat: 30.2672, lng: -97.7431, zoom: 11 },
        { name: 'Amsterdam, Netherlands', lat: 52.3676, lng: 4.9041, zoom: 11 },
        { name: 'Barcelona, Spain', lat: 41.3851, lng: 2.1734, zoom: 12 },
        { name: 'Bangkok, Thailand', lat: 13.7563, lng: 100.5018, zoom: 11 },
        { name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708, zoom: 11 },
        { name: 'Copenhagen, Denmark', lat: 55.6761, lng: 12.5683, zoom: 12 },
        { name: 'São Paulo, Brazil', lat: -23.5505, lng: -46.6333, zoom: 10 },
        { name: 'Cape Town, South Africa', lat: -33.9249, lng: 18.4241, zoom: 12 },
        { name: 'Seoul, South Korea', lat: 37.5665, lng: 126.9780, zoom: 11 },
        { name: 'Mumbai, India', lat: 19.0760, lng: 72.8777, zoom: 11 }
    ];

    // Occasionally add special locations like conference centers, offices, etc.
    const specialLocations = [
        { name: 'Silicon Valley HQ', lat: 37.4275, lng: -122.1697, zoom: 15 },
        { name: 'Downtown Office', lat: 40.7127, lng: -74.0134, zoom: 16 },
        { name: 'Tech Conference Center', lat: 37.7833, lng: -122.4167, zoom: 16 },
        { name: 'Client HQ', lat: 51.5007, lng: -0.1246, zoom: 15 },
        { name: 'Remote Work Retreat', lat: 20.7984, lng: -156.3319, zoom: 14 },
        { name: 'Industry Summit', lat: 48.8606, lng: 2.3376, zoom: 16 },
        { name: 'Partner Office', lat: 34.0522, lng: -118.2437, zoom: 15 },
        { name: 'Coworking Space', lat: 52.5200, lng: 13.4050, zoom: 16 }
    ];

    // 25% chance of using a special location
    if (Math.random() < 0.25) {
        return specialLocations[Math.floor(Math.random() * specialLocations.length)];
    }

    // Otherwise use a regular city
    return cities[Math.floor(Math.random() * cities.length)];
}

// The rest of the image fetching functions would remain the same as previous implementation
// I'm including placeholders to indicate they should be kept

async function analyzeTaskType(title, desc) {
    // Implementation from previous code
    const fullText = `${title} ${desc}`.toLowerCase();

    // Technical keywords
    const technicalTerms = ['code', 'bug', 'fix', 'develop', 'implement', 'feature',
                          'system', 'api', 'database', 'server', 'test', 'refactor',
                          'debug', 'deploy', 'architecture', 'schema', 'diagram',
                          'infrastructure', 'algorithm', 'prototype', 'engineering'];

    // Creative keywords
    const creativeTerms = ['design', 'create', 'draft', 'mockup', 'sketch', 'wireframe',
                          'graphic', 'illustration', 'artwork', 'visual', 'logo', 'brand',
                          'style', 'creative', 'color', 'typography', 'layout', 'drawing'];

    // Planning keywords
    const planningTerms = ['plan', 'strategy', 'roadmap', 'timeline', 'schedule', 'milestone',
                          'objective', 'goal', 'kpi', 'metric', 'project', 'task', 'backlog',
                          'sprint', 'prioritize', 'organize', 'coordinate', 'requirement'];

    // Meeting keywords
    const meetingTerms = ['meeting', 'call', 'discuss', 'conversation', 'sync', 'presentation',
                         'review', 'retrospective', 'standup', 'session', 'workshop',
                         'conference', 'interview', 'demo', 'pitch', 'briefing'];

    // Count occurrences
    const counts = {
        technical: technicalTerms.filter(term => fullText.includes(term)).length,
        creative: creativeTerms.filter(term => fullText.includes(term)).length,
        planning: planningTerms.filter(term => fullText.includes(term)).length,
        meeting: meetingTerms.filter(term => fullText.includes(term)).length
    };

    // Find the highest count
    let maxCount = 0;
    let maxType = 'generic';

    for (const [type, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            maxType = type;
        }
    }

    // If we found matching keywords, return that type
    if (maxCount > 0) {
        return maxType;
    }

    // Default to generic if no specific keywords found
    return 'generic';
}


// If using with generateMultipleGroups, you should clear the board image registry
// at the start of a new board generation to maintain uniqueness across groups
function generateMultipleGroupsWithUniqueImages(boardTitle, useEmoji) {
    // Clear the image registry for this board before generating
    boardImageRegistry.set(boardTitle, new Set());

    // Then call the existing generateMultipleGroups function
    return generateMultipleGroups(boardTitle, useEmoji);
}


/**
 * Fetches relevant image from Unsplash based on task content
 * Implements caching, error handling, and intelligent keyword extraction
 */
async function fetchUnsplashImage(title, description) {
    // Unsplash API credentials
    const accessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Combine title and description for better keyword extraction
    const text = `${title} ${description}`;

    // Generate a cache key from the text
    const cacheKey = text.trim().toLowerCase().slice(0, 50);

    // Return cached result if available
    if (unsplashImageCache.has(cacheKey)) {
        return unsplashImageCache.get(cacheKey);
    }

    // Extract keywords - do this properly for better results
    // First, create a list of stop words to filter out
    const stopWords = [
        'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 'by',
        'about', 'as', 'into', 'like', 'through', 'after', 'before', 'between', 'from',
        'of', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had',
        'do', 'does', 'did', 'will', 'would', 'shall', 'should', 'can', 'could', 'may',
        'might', 'must', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her',
        'us', 'them', 'this', 'that', 'these', 'those'
    ];

    // Process the text into keywords
    let words = text.toLowerCase()
                    .replace(/[^\w\s]/g, '') // Remove punctuation
                    .split(/\s+/);            // Split on whitespace

    // Filter out stop words and short words
    words = words.filter(word =>
        word.length > 3 && !stopWords.includes(word)
    );

    // If no good keywords, use these defaults
    if (words.length === 0) {
        words = ['work', 'productivity', 'task'];
    }

    // Get top 2 longest words as they tend to be more specific
    words.sort((a, b) => b.length - a.length);
    const primaryKeywords = words.slice(0, 2);

    // Add common categories based on top words
    // Mapping specific domains to broader categories
    const domainMap = {
        'finance': 'business',
        'report': 'business',
        'meeting': 'business meeting',
        'analysis': 'data analysis',
        'review': 'review process',
        'design': 'creative design',
        'code': 'programming',
        'develop': 'software development',
        'test': 'quality testing',
        'launch': 'product launch',
        'marketing': 'digital marketing',
        'sales': 'sales strategy',
        'customer': 'customer service',
        'research': 'market research',
        'plan': 'strategic planning',
        'budget': 'financial planning',
    };

    // Add domain categories if applicable
    for (const word of primaryKeywords) {
        if (domainMap[word]) {
            primaryKeywords.push(domainMap[word]);
            break;
        }
    }

    // Join the primary keywords for search
    const searchQuery = primaryKeywords.join(' ');

    try {
        // Make request to Unsplash
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${accessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Unsplash API responded with status: ${response.status}`);
        }

        const data = await response.json();

        // Check if we got results
        if (data.results && data.results.length > 0) {
            // Get the regular-sized image (not too large, not too small)
            const imageUrl = data.results[0].urls.regular;

            // Cache the result
            unsplashImageCache.set(cacheKey, imageUrl);

            return imageUrl;
        }

        // If no results for specific query, try a more general fallback
        return await fallbackToGenericImage();

    } catch (error) {
        console.error("Error fetching Unsplash image:", error);
        return await fallbackToGenericImage();
    }
}

/**
 * Fallback function that tries to get a generic work/task related image
 * when specific search fails
 */
async function fallbackToGenericImage() {
    const accessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';
    const fallbackQueries = [
        'work desk',
        'productivity',
        'office work',
        'task management',
        'business planning',
        'workspace'
    ];

    // Get a random query from our fallbacks
    const query = fallbackQueries[Math.floor(Math.random() * fallbackQueries.length)];

    try {
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${accessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Fallback Unsplash API responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            return data.results[0].urls.regular;
        }

        // Final picsum fallback if Unsplash completely fails
        return `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`;

    } catch (error) {
        console.error("Error fetching fallback image:", error);
        // Ultimate fallback that can't fail
        return `https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}`;
    }
}
// ===============  CONCURRENT GROUPS  ===============
async function generateOneGroup(boardTitle, groupTitle, useEmoji) {
    const backgroundColor = getRandomColor();

    // Generate tasks concurrently
    const tasksCount = random.randint(3, 6);

    // Create an array of task generation promises
    const taskPromises = Array(tasksCount).fill().map(() =>
        generateSingleTask(boardTitle, groupTitle, useEmoji)
    );

    // Wait for all tasks to complete concurrently
    const tasks = await Promise.all(taskPromises);

    return {
        id: 'grp_' + random.id(),
        title: groupTitle,
        archivedAt: (Math.random() < 0.1) ? random.date('2022-01-01', '2023-12-31').getTime() : null,
        tasks,
        style: {
            backgroundColor,
            color: getColorFromBackgroundColor(backgroundColor),
        },
        watched: (Math.random() < 0.2),
        isMinimaized: (Math.random() < 0.05)
    };
}

// For multi-group boards
async function generateMultipleGroups(boardTitle, useEmoji) {
    // Generate the group titles first
    const fallback = 'Home;Work;Personal';
    const groupCount = random.randint(4, 7);
    const prompt = `
Board: "${boardTitle}"
Generate ${groupCount} short sub-topic group titles, separated by semicolons (like "Grocery; Work; Project X").
No code blocks, just semicolons.
`;

    // Get group titles
    const gptRespPromise = generateText(prompt, 1.0, fallback);

    // Wait for the AI response
    const gptResp = await gptRespPromise;
    let arr = gptResp.split(';').map(s => s.trim()).filter(Boolean);

    while (arr.length < groupCount) {
        arr.push('Group ' + random.id().slice(0, 4));
    }
    arr = arr.slice(0, groupCount);

    // Generate all groups concurrently
    const groupPromises = arr.map(gTitle =>
        generateOneGroup(boardTitle, gTitle, useEmoji)
    );

    // Wait for all groups to be generated in parallel
    return Promise.all(groupPromises);
}



// ===============  LABELS  ===============
async function generateBoardLabels(boardTitle) {
    // from your code
    const prompt = `
Board Title: "${boardTitle}"
Generate an array of 5 short labels for a project mgmt board. 
Return JSON:
[
  {"id":"some-id","title":"...","color":"(placeholder)"},
  ...
]
Return valid JSON only.
`
    const fallback = JSON.stringify([
        { id:'lbl1', title:'Task', color:'#9f8fef' },
        { id:'lbl2', title:'Bug',  color:'#f87168' },
        { id:'lbl3', title:'UX',   color:'#fea362' },
        { id:'lbl4', title:'Future', color:'#f5cd47'},
        { id:'lbl5', title:'Misc',   color:'#4bce97'},
    ])
    const text = await generateText(prompt, 1.0, fallback)
    let raw = safeJsonParse(text, fallback)
    if (!Array.isArray(raw) || !raw.length) raw = safeJsonParse(fallback)
    // ensure 5
    while (raw.length<5) {
        raw.push({id:'lbl_'+random.id(), title:'Label'+random.id().slice(0,3), color:getRandomColorLabels()})
    }
    return raw.slice(0,5).map(lbl => {
        if (!lbl.id) lbl.id='lbl_'+random.id()
        if (!lbl.title) lbl.title='Untitled '+random.id().slice(0,3)
        if (!lbl.color) lbl.color=getRandomColorLabels()
        return lbl
    })
}

function backgroundColorToTextColor(backColor) {
    // Helper: Hex to RGB
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
        let r = parseInt(hex.substring(0, 2), 16);
        let g = parseInt(hex.substring(2, 4), 16);
        let b = parseInt(hex.substring(4, 6), 16);
        return [r, g, b];
    }

    // Helper: RGB to HSL
    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h, s, l];
    }

    // Helper: HSL to RGB
    function hslToRgb(h, s, l) {
        let r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            let hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    // Helper: RGB to Hex
    function rgbToHex(r, g, b) {
        let toHex = val => {
            let hex = val.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return '#' + toHex(r) + toHex(g) + toHex(b);
    }

    // Main logic
    let [r, g, b] = hexToRgb(backColor);
    let [h, s, l] = rgbToHsl(r, g, b);
    let textL = l > 0.5 ? 0.2 : 0.8; // Darker if light, lighter if dark
    let [textR, textG, textB] = hslToRgb(h, s, textL);
    return rgbToHex(textR, textG, textB);
}

// ===============  BADGES (domain-based)  ===============
function assignDomainBadgesToBoard(board, domain) {
    // 1) filter from MASSIVE_BADGE_CATALOG
    const relevantCats = filterBadgeCategoriesByDomain(MASSIVE_BADGE_CATALOG, domain)
    // 2) for each group, each task, we pick 0..2 categories
    for (let g of board.groups) {
        for (let t of g.tasks) {
            // ~50% chance to have 1 or 2 badges
            const badgeCount = random.randint(0,2)
            const usedCats = []
            const finalBadges = []
            for (let i=0; i<badgeCount; i++) {
                // pick a cat not used yet
                const candidates = relevantCats.filter(rc => !usedCats.includes(rc.category))
                if (!candidates.length) break
                const catChosen = random.choice(candidates)
                usedCats.push(catChosen.category)
                const {value,color} = pickBadgeValue(catChosen) || {}
                if (!value) continue
                finalBadges.push({
                    id: 'badg_'+random.id(),
                    categ: catChosen.category,
                    color,
                    // this needs to calculate the text color based on background color
                    textColor: backgroundColorToTextColor(color),
                    badgeOptions: catChosen.values,  // optional
                    chosenOption: value
                })
            }
            t.badges = finalBadges
        }
    }
}


// ===============  BOARD ACTIVITIES  ===============
function generateBoardActivities(board) {
    const count = random.randint(3,6)
    const acts = []
    for (let i=0; i<count; i++) {
        const group = random.choice(board.groups)
        const task = random.choice(group.tasks)
        const activityType = random.choice(['added','moved','updated','commented'])
        let title
        if (activityType==='added') {
            title = `Added task '${task.title}' to group '${group.title}'`
        } else if (activityType==='moved') {
            title = `Moved task '${task.title}' around`
        } else if (activityType==='updated') {
            title = `Updated status of '${task.title}' to '${task.status}'`
        } else {
            title = `Commented on '${task.title}': "Looks good to me!"`
        }
        const byMem = random.choice(board.members) || { _id:'u000',fullname:'GhostUser',imgUrl:''}
        acts.push({
            id:'act_'+random.id(),
            title,
            createdAt: random.date('2023-01-01','2025-12-31').getTime(),
            byMember:{
                _id: byMem._id,
                fullname: byMem.fullname,
                imgUrl: byMem.imgUrl,
            },
            group:{id: group.id, title: group.title},
            task:{id: task.id, title: task.title},
        })
    }
    return acts
}

function getRandomColorLabels() {
    const colors = ['#9f8fef', '#f87168', '#fea362', '#f5cd47', '#4bce97', '#579dff']
    return random.choice(colors)
}

// ===============  MAIN BOARD GENERATOR  ===============
// export async function getRandomBoardAI() {
//     showUserMsg('AI: Generating an ultimate board...')
//
//     // 1) ensure we have at least 5 users
//     await initUserPool()
//
//     // 2) pick a random topic from userFriendlyTopics
//     const chosenTopic = random.choice(userFriendlyTopics)
//
//     // 3) infer domain
//     const domain = inferDomainFromTopic(chosenTopic)
//
//     // 4) board name from GPT
//     const fallbackTitle = 'Generic '+domain+' Board'
//     const boardTitlePrompt = `
// Given the topic "${chosenTopic}",
// Generate a single realistic board name for a project management system.
// Return only the name, no extra text.
// `
//     const boardTitle = await generateText(boardTitlePrompt, 1.0, fallbackTitle)
//
//     showSpinner('AI: Building board structure...')
//     // 5) create groups & tasks
//     const groups = await generateMultipleGroups(boardTitle)
//     // 6) create labels
//     const labels = await generateBoardLabels(boardTitle)
//
//     // 7) assign random labelIDs to tasks
//     for (let g of groups) {
//         for (let t of g.tasks) {
//             // 30% chance no labels
//             if (Math.random()<0.3) {
//                 t.labelIds=[]
//                 continue
//             }
//             // 1..3 random labels
//             const labelCount = random.randint(1,3)
//             const chosenLabelIds = random.sample(labels.map(l=>l.id), labelCount)
//             t.labelIds = chosenLabelIds
//             t.labels = labels.filter(l => chosenLabelIds.includes(l.id))
//
//         }
//     }
//
//     // 8) build final board skeleton
//     const createdBy = random.choice(GPT_USER_POOL) || {
//         _id:'u_fallback', fullname:'Unknown user', imgUrl:''
//     }
//     const isStarred = (Math.random()<0.3)
//     const archivedAt = (Math.random()<0.05) ? random.date('2022-01-01','2023-12-31').getTime() : null
//
//     const board = {
//         id: 'brd_'+random.id(),
//         title: boardTitle,
//         isStarred,
//         archivedAt,
//         createdBy:{
//             _id:createdBy._id,
//             fullname:createdBy.fullname,
//             imgUrl:createdBy.imgUrl
//         },
//         style:{
//             backgroundImage: random.choice([
//                 `https://picsum.photos/2400/1600?random=${random.randint(1,9999)}`,
//                 'color_1.svg','color_2.svg','color_3.svg','color_4.svg'
//             ])
//         },
//         labels,
//         members: GPT_USER_POOL,
//         groups,
//         activities: [], // fill below
//         cmpsOrder: random.sample(['StatusPicker','MemberPicker','DatePicker','PriorityPicker','OtherPicker'], random.randint(3,5)),
//         generator: 'getUltimateAIBoard',
//         topicChosen: chosenTopic,
//         domain
//     }
//
//     // 9) domain-based badges
//     assignDomainBadgesToBoard(board, domain)
//
//     // 10) board activities
//     board.activities = generateBoardActivities(board)
//
//     showSuccessMsg(`AI: Done! Board “${boardTitle}” generated with domain ${domain}`)
//
//     return board
// }




// Global registry to track board backgrounds by domain to prevent repetition
const usedBoardBackgrounds = new Map();

/**
 * Enhanced board generator with domain-relevant backgrounds
 */
export async function getRandomBoardAI() {
    showUserMsg('AI: Generating an ultimate board...')

    // 1) ensure we have at least 5 users
    await initUserPool()

    // 2) pick a random topic from userFriendlyTopics
    const chosenTopic = random.choice(userFriendlyTopics)

    // 3) infer domain
    const domain = inferDomainFromTopic(chosenTopic)

    // 4) board name from GPT
    const fallbackTitle = 'Generic '+domain+' Board'
    const boardTitlePrompt = `
Given the topic "${chosenTopic}",
Generate a single realistic board name for a project management system. 
Return only the name, no extra text.
`
    const boardTitle = await generateText(boardTitlePrompt, 1.0, fallbackTitle)

    // NEW: Start the background image fetch IMMEDIATELY after we have domain info
    // This parallelizes it with the rest of the board generation
    const backgroundPromise = getDomainRelevantBackground(domain, boardTitle, chosenTopic);

    showSpinner('AI: Building board structure...')

    const useEmoji = Math.random() < 0.3;

    // 5) create groups & tasks
    const groups = await generateMultipleGroupsWithUniqueImages(boardTitle, useEmoji)

    // 6) create labels
    const labels = await generateBoardLabels(boardTitle)

    // 7) assign random labelIDs to tasks
    for (let g of groups) {
        for (let t of g.tasks) {
            // 30% chance no labels
            if (Math.random()<0.3) {
                t.labelIds=[]
                continue
            }
            // 1..3 random labels
            const labelCount = random.randint(1,3)
            const chosenLabelIds = random.sample(labels.map(l=>l.id), labelCount)
            t.labelIds = chosenLabelIds
            t.labels = labels.filter(l => chosenLabelIds.includes(l.id))
        }
    }

    // WAIT POINT: Get our background image that's been loading in parallel
    const backgroundImage = await backgroundPromise;

    // 8) build final board skeleton
    const createdBy = random.choice(GPT_USER_POOL) || {
        _id:'u_fallback', fullname:'Unknown user', imgUrl:''
    }
    const isStarred = (Math.random()<0.3)
    const archivedAt = (Math.random()<0.05) ? random.date('2022-01-01','2023-12-31').getTime() : null

    const board = {
        id: 'brd_'+random.id(),
        title: boardTitle,
        isStarred,
        archivedAt,
        createdBy:{
            _id:createdBy._id,
            fullname:createdBy.fullname,
            imgUrl:createdBy.imgUrl
        },
        style:{
            backgroundImage // Domain-relevant background from our new function
        },
        labels,
        members: GPT_USER_POOL,
        groups,
        activities: [], // fill below
        cmpsOrder: random.sample(['StatusPicker','MemberPicker','DatePicker','PriorityPicker','OtherPicker'], random.randint(3,5)),
        generator: 'getUltimateAIBoard',
        topicChosen: chosenTopic,
        domain
    }

    // 9) domain-based badges
    assignDomainBadgesToBoard(board, domain)

    // 10) board activities
    board.activities = generateBoardActivities(board)

    showSuccessMsg(`AI: Done! Board "${boardTitle}" generated with domain ${domain}`)

    return board
}

/**
 * Get a domain-relevant, professional background image for a board
 * This is the main function that handles the entire background selection process
 */
async function getDomainRelevantBackground(domain, boardTitle, topic) {
    // Initialize domain background registry if needed
    if (!usedBoardBackgrounds.has(domain)) {
        usedBoardBackgrounds.set(domain, new Set());
    }

    const usedBackgrounds = usedBoardBackgrounds.get(domain);

    // 1. First - try to get a domain-specific Unsplash image
    let backgroundUrl = null;

    try {
        backgroundUrl = await getUnsplashDomainBackground(domain, boardTitle, topic);

        // If this image was already used for this domain, try again up to 3 times
        let attempts = 0;
        while (backgroundUrl && usedBackgrounds.has(backgroundUrl) && attempts < 3) {
            attempts++;
            backgroundUrl = await getUnsplashDomainBackground(domain, boardTitle, topic);
        }

        // If we still got a duplicate after 3 attempts, force uniqueness
        if (backgroundUrl && usedBackgrounds.has(backgroundUrl)) {
            backgroundUrl = `${backgroundUrl}${backgroundUrl.includes('?') ? '&' : '?'}uniqueId=${random.id()}`;
        }

        // If we got a valid background, mark it as used
        if (backgroundUrl) {
            usedBackgrounds.add(backgroundUrl);
        }
    } catch (e) {
        console.error('Error fetching domain background:', e);
    }

    // 2. If Unsplash failed, try premium curated backgrounds
    if (!backgroundUrl) {
        try {
            backgroundUrl = getCuratedDomainBackground(domain);

            // Check for uniqueness
            if (backgroundUrl && usedBackgrounds.has(backgroundUrl)) {
                // For curated backgrounds, append a unique parameter to make it "different"
                backgroundUrl = `${backgroundUrl}${backgroundUrl.includes('?') ? '&' : '?'}uniqueId=${random.id()}`;
            }

            if (backgroundUrl) {
                usedBackgrounds.add(backgroundUrl);
            }
        } catch (e) {
            console.error('Error fetching curated background:', e);
        }
    }

    // 3. If everything failed, use domain-colored fallback
    if (!backgroundUrl) {
        backgroundUrl = getDomainColorBackground(domain);
    }

    return backgroundUrl;
}

/**
 * Get a domain-specific background from Unsplash
 */
async function getUnsplashDomainBackground(domain, boardTitle, topic) {
    const unsplashAccessKey = 'ZyzKcjntARCeZKFC_E6IQXVIwf9-sDidiejtnzNxFf0';

    // Map domains to appropriate Unsplash search terms
    // The goal is professional, subtle backgrounds appropriate for each domain
    const domainSearchTerms = {
        'development': ['code background', 'programming workspace', 'tech pattern', 'software development', 'data visualization'],
        'design': ['design studio', 'creative workspace', 'design pattern', 'color palette', 'minimal design'],
        'marketing': ['marketing strategy', 'social media pattern', 'digital marketing', 'branding minimal', 'marketing abstract'],
        'sales': ['business meeting', 'sales chart', 'professional office', 'business abstract', 'corporate minimal'],
        'hr': ['office team', 'professional workplace', 'hiring', 'team collaboration', 'human resources'],
        'finance': ['finance chart', 'business analysis', 'financial data', 'accounting workspace', 'economy abstract'],
        'legal': ['law books', 'legal document', 'courthouse architecture', 'justice symbol', 'legal office'],
        'education': ['education pattern', 'learning materials', 'school supplies', 'education workspace', 'academic abstract'],
        'healthcare': ['medical pattern', 'healthcare symbol', 'medical research', 'health technology', 'medical minimal'],
        'manufacturing': ['factory pattern', 'industrial design', 'manufacturing process', 'production line', 'engineering schematics'],
        'realestate': ['architecture pattern', 'modern building', 'real estate minimal', 'property design', 'construction abstract'],
        'hospitality': ['hotel pattern', 'hospitality design', 'restaurant ambient', 'travel minimal', 'service industry'],
        'entertainment': ['entertainment stage', 'media production', 'film abstract', 'music studio', 'creative arts'],
        'nonprofit': ['community pattern', 'volunteer work', 'charity minimal', 'social impact', 'nonprofit abstract'],
        'government': ['government building', 'policy pattern', 'civic design', 'public service', 'national abstract'],
        'automotive': ['car design pattern', 'automotive engineering', 'vehicle abstract', 'transportation technology', 'automotive minimal'],
        'personal': ['personal planning', 'home office', 'lifestyle minimal', 'personal growth', 'self improvement']
    };

    // Default search terms for unknown domains
    const defaultSearchTerms = ['productivity', 'workflow', 'professional pattern', 'workspace', 'business minimal'];

    // Get search terms for this domain
    const searchTerms = domainSearchTerms[domain] || defaultSearchTerms;

    // Pick 1 or 2 random search terms
    const primaryTerm = searchTerms[Math.floor(Math.random() * searchTerms.length)];

    // Occasionally add a term from the board title or topic for more specificity
    // But clean it first to avoid weird searches
    let additionalTerm = '';
    if (Math.random() < 0.3) {
        // Extract keywords from board title or topic
        const allText = `${boardTitle} ${topic}`;
        const words = allText.toLowerCase().split(/\s+/);
        const stopWords = ['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'about'];

        // Filter out stop words and short words
        const keywords = words
            .filter(word => word.length > 3)
            .filter(word => !stopWords.includes(word))
            .map(word => word.replace(/[^\w]/g, ''));

        if (keywords.length > 0) {
            // Pick a random keyword
            additionalTerm = keywords[Math.floor(Math.random() * keywords.length)];
        }
    }

    // Build search query
    const searchQuery = additionalTerm
        ? `${primaryTerm} ${additionalTerm}`
        : primaryTerm;

    try {
        // Key parameters for board backgrounds:
        // - landscape orientation (for wide screens)
        // - good quality (regular size)
        // - query for domain-relevant terms
        const endpoint = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(searchQuery)}&orientation=landscape&content_filter=high&per_page=1`;

        const response = await fetch(endpoint, {
            headers: {
                'Authorization': `Client-ID ${unsplashAccessKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`Unsplash API responded with status: ${response.status}`);
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            // Use regular size - large enough for quality but not too large to slow loading
            return data.results[0].urls.regular;
        }

        return null;
    } catch (e) {
        console.error('Error fetching from Unsplash:', e);
        return null;
    }
}

/**
 * Get a premium curated background for specific domains
 * These are hand-selected high-quality backgrounds appropriate for each domain
 */
function getCuratedDomainBackground(domain) {
    // These would ideally be your own hosted images for reliability
    // For now, using public CDN URLs as examples
    const curatedBackgrounds = {
        'development': [
            'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1200',
            'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200',
            'https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1200'
        ],
        'design': [
            'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200',
            'https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=1200',
            'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200'
        ],
        'marketing': [
            'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200',
            'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200'
        ],
        'finance': [
            'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200',
            'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200'
        ],
        'healthcare': [
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200',
            'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1200',
            'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200'
        ]
        // Add more domains as needed
    };

    // For domains without curated backgrounds, map them to related domains
    const domainAlternatives = {
        'sales': 'marketing',
        'hr': 'finance',
        'legal': 'finance',
        'education': 'design',
        'manufacturing': 'development',
        'realestate': 'finance',
        'hospitality': 'marketing',
        'entertainment': 'design',
        'nonprofit': 'marketing',
        'government': 'finance',
        'automotive': 'development',
        'personal': 'design'
    };

    // Get backgrounds for this domain
    let domainBackgrounds = curatedBackgrounds[domain];

    // If no backgrounds for this domain, try an alternative domain
    if (!domainBackgrounds && domainAlternatives[domain]) {
        domainBackgrounds = curatedBackgrounds[domainAlternatives[domain]];
    }

    // If we have backgrounds, pick a random one
    if (domainBackgrounds && domainBackgrounds.length > 0) {
        return domainBackgrounds[Math.floor(Math.random() * domainBackgrounds.length)];
    }

    // If all else fails, return null (will trigger color fallback)
    return null;
}

/**
 * Get a domain-colored SVG background as ultimate fallback
 * This is guaranteed to work even if all API calls fail
 */
function getDomainColorBackground(domain) {
    // Domain-specific colors that match the industry/domain
    const domainColors = {
        'development': ['#0B4F6C', '#1C7293', '#03256C', '#2A6F97', '#012A4A'],
        'design': ['#7B2CBF', '#9D4EDD', '#C77DFF', '#E0AAFF', '#5A189A'],
        'marketing': ['#FF5A5F', '#FF8A80', '#B00020', '#F25F5C', '#A8201A'],
        'sales': ['#0077B6', '#00B4D8', '#90E0EF', '#023E8A', '#0096C7'],
        'hr': ['#8EA604', '#A5BE00', '#ECBE13', '#95C623', '#BAB700'],
        'finance': ['#005F73', '#0A9396', '#94D2BD', '#001219', '#778DA9'],
        'legal': ['#353535', '#3C6E71', '#284B63', '#4F646F', '#333533'],
        'education': ['#FFB703', '#FD9E02', '#FB8500', '#F48C06', '#DC2F02'],
        'healthcare': ['#52B788', '#2D6A4F', '#95D5B2', '#74C69D', '#40916C'],
        'manufacturing': ['#6A040F', '#9D0208', '#D00000', '#E85D04', '#DC2F02'],
        'realestate': ['#FFBA08', '#FAA307', '#F48C06', '#E85D04', '#DC2F02'],
        'hospitality': ['#0B525B', '#144552', '#1B3A4B', '#212F45', '#272640'],
        'entertainment': ['#5F0F40', '#9A031E', '#FB8B24', '#0F4C5C', '#E36414'],
        'nonprofit': ['#588157', '#4F772D', '#31572C', '#90A955', '#3A5A40'],
        'government': ['#003049', '#2C7DA0', '#468FAF', '#A8DADC', '#1D3557'],
        'automotive': ['#2B2D42', '#8D99AE', '#EDF2F4', '#EF233C', '#D90429'],
        'personal': ['#9F86C0', '#BE95C4', '#E0B1CB', '#FDE2E4', '#FEC5BB']
    };

    // Default colors for unknown domains
    const defaultColors = ['#5390D9', '#4EA8DE', '#56CFE1', '#48BF84', '#4CC9F0'];

    // Get colors for this domain
    const colors = domainColors[domain] || defaultColors;

    // Pick a random color from the domain palette
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // SVG patterns are more interesting than flat colors
    // This uses a diagonal pattern with the domain color
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
            <pattern id="diagonalPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                <rect width="20" height="40" fill="${backgroundColor}" opacity="0.9" />
                <rect x="20" width="20" height="40" fill="${backgroundColor}" opacity="0.7" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalPattern)" />
    </svg>
    `;

    // Convert SVG to data URL
    const svgBase64 = btoa(svg);
    return `data:image/svg+xml;base64,${svgBase64}`;
}