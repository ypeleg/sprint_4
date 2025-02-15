

export const data = {
    "boards": [{
        "title": "Robot Dev Proj Board #1", "isStarred": false, "archivedAt": 1589983468418, "createdBy": {"_id": "u101", "fullname": "Abi Abambi", "imgUrl": "http://some-img"}, "style": {"backgroundImage": ""}, "labels": [{"id": "l101", "title": "Done", "color": "#61bd4f"}, {"id": "l102", "title": "Progress", "color": "#61bd33"}, {"id": "l103", "title": "Stuck", "color": "#eb5a46"}, {"id": "l104", "title": "Review", "color": "#f2d600"}, {"id": "l105", "title": "Low Priority", "color": "#c377e0"}], "members": [{"_id": "u101", "fullname": "Tal Taltal", "imgUrl": "https://www.example.com/tal.png"}, {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "https://www.example.com/josh.png"}, {"_id": "u103", "fullname": "Nina X", "imgUrl": "https://www.example.com/nina.png"}], "groups": [{
            "id": "g101",
            "title": "Group 1",
            "archivedAt": 1589983468418,
            "tasks": [{"id": "c101", "title": "Replace logo"}, {"id": "c102", "title": "Add samples"}, {"id": "c103", "title": "Update readme", "status": "done", "dueDate": "2025-01-15", "description": "Ensure documentation is up to date", "comments": [], "checklists": [], "memberIds": ["u102"], "labelIds": ["l101"], "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "https://www.example.com/josh.png"}, "style": {}, "badges": [], "isUserWatching": false}, {
                "id": "c104",
                "title": "Backend refactoring",
                "status": "inProgress",
                "priority": "high",
                "dueDate": "2025-02-20",
                "description": "Migrate to new architecture",
                "comments": [{"id": "Z9991", "title": "Please check memory leaks", "createdAt": 1590999817436, "byMember": {"_id": "u101", "fullname": "Tal Taltal", "imgUrl": "https://www.example.com/tal.png"}}],
                "checklists": [{"id": "CL1", "title": "Refactor Steps", "todos": [{"id": "TDD-1", "title": "Outline new architecture", "isDone": false}, {"id": "TDD-2", "title": "Update unit tests", "isDone": false}]}],
                "memberIds": ["u101"],
                "labelIds": ["l102", "l104"],
                "byMember": {"_id": "u101", "fullname": "Tal Taltal", "imgUrl": "https://www.example.com/tal.png"},
                "style": {"backgroundColor": "#26de81"},
                "badges": [{"id": "bd101", "text": "Priority: High", "badeType": "priority"}],
                "isUserWatching": false
            }, {"id": "c105", "title": "Design new homepage", "status": "stuck", "priority": "medium", "dueDate": "2025-02-25", "description": "Coordinate with design team", "comments": [], "checklists": [], "memberIds": ["u101", "u102"], "labelIds": ["l103", "l104"], "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "https://www.example.com/josh.png"}, "style": {}, "badges": [], "isUserWatching": false}],
            "style": {}
        }, {
            "id": "g102",
            "title": "Group 2",
            "tasks": [{"id": "c106", "title": "Schedule meetings", "archivedAt": 1589983468418}, {"id": "c107", "title": "Mobile app POC", "status": "inProgress", "priority": "low", "dueDate": "2025-03-01", "description": "Prototype the mobile version", "comments": [{"id": "CMMT101", "title": "Review new wireframes", "createdAt": 1592999817436, "byMember": {"_id": "u103", "fullname": "Nina X", "imgUrl": "https://www.example.com/nina.png"}}], "checklists": [{"id": "CLK2", "title": "Mobile Tasks", "todos": [{"id": "TD001", "title": "Create basic layout", "isDone": false}, {"id": "TD002", "title": "Implement gestures", "isDone": false}]}], "memberIds": ["u102", "u103"], "labelIds": ["l102"], "byMember": {"_id": "u101", "fullname": "Tal Taltal", "imgUrl": "https://www.example.com/tal.png"}, "style": {"backgroundColor": "#ff9f43"}, "badges": [], "isUserWatching": false}, {
                "id": "c108",
                "title": "Optimize queries",
                "status": "review",
                "priority": "high",
                "dueDate": "2025-03-10",
                "description": "Check DB indexes",
                "comments": [],
                "checklists": [],
                "memberIds": ["u101"],
                "labelIds": ["l104", "l105"],
                "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "https://www.example.com/josh.png"},
                "style": {},
                "badges": [],
                "isUserWatching": true
            }],
            "style": {"backgroundColor": "#c5ecfa"}
        }, {"id": "g103", "title": "Group 3", "tasks": [{"id": "c109", "title": "Write unit tests"}, {"id": "c110", "title": "Setup CI/CD pipeline"}, {"id": "c111", "title": "Code review guidelines"}, {"id": "c112", "title": "Prepare product demo"}, {"id": "c113", "title": "UX enhancements"}], "style": {}}], "activities": [{"id": "a101", "title": "Changed Color", "createdAt": 154514, "byMember": {"_id": "u101", "fullname": "Abi Abambi", "imgUrl": "http://some-img"}, "group": {"id": "g101", "title": "Urgent Stuff"}, "task": {"id": "c101", "title": "Replace Logo"}}, {"id": "a102", "title": "Marked task done", "createdAt": 155000, "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "https://www.example.com/josh.png"}, "group": {"id": "g102", "title": "Group 2"}, "task": {"id": "c107", "title": "Mobile app POC"}}], "cmpsOrder": ["StatusPicker", "MemberPicker", "DatePicker"]
    }, {
        "title": "Robot Dev Proj Board #2",
        "isStarred": true,
        "archivedAt": 1589983468420,
        "createdBy": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "http://some-img"},
        "style": {"backgroundImage": "https://www.example.com/bg2.jpg"},
        "labels": [{"id": "l201", "title": "Urgent", "color": "#eb5a46"}, {"id": "l202", "title": "Backlog", "color": "#0079bf"}, {"id": "l203", "title": "QA", "color": "#f2d600"}],
        "members": [{"_id": "u104", "fullname": "Megan X", "imgUrl": "https://www.example.com/megan.png"}, {"_id": "u105", "fullname": "Sam L", "imgUrl": "https://www.example.com/sam.png"}],
        "groups": [{
            "id": "g201",
            "title": "Core Team",
            "tasks": [{"id": "c201", "title": "Database migration", "status": "done", "priority": "high", "dueDate": "2025-04-10", "description": "Migrate old data into new schema", "comments": [], "checklists": [], "memberIds": ["u104"], "labelIds": ["l201"], "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "http://some-img"}, "style": {}, "badges": [], "isUserWatching": false}, {
                "id": "c202",
                "title": "User analytics",
                "status": "inProgress",
                "priority": "medium",
                "dueDate": "2025-05-01",
                "description": "Implement tracking events",
                "comments": [],
                "checklists": [{"id": "clk201", "title": "Tracking plan", "todos": [{"id": "clk201-1", "title": "Define event schema", "isDone": false}, {"id": "clk201-2", "title": "Integrate with analytics service", "isDone": false}]}],
                "memberIds": ["u105"],
                "labelIds": ["l202"],
                "byMember": {"_id": "u105", "fullname": "Sam L", "imgUrl": "https://www.example.com/sam.png"},
                "style": {"backgroundColor": "#00b894"},
                "badges": [],
                "isUserWatching": true
            }],
            "style": {}
        }, {"id": "g202", "title": "QA & Testing", "tasks": [{"id": "c203", "title": "Automated tests coverage"}, {"id": "c204", "title": "Bug triage"}, {"id": "c205", "title": "Performance benchmarks", "status": "review", "priority": "high", "dueDate": "2025-04-20", "description": "Check memory usage, CPU usage", "comments": [], "checklists": [], "memberIds": ["u104", "u105"], "labelIds": ["l201", "l203"], "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "http://some-img"}, "style": {}, "badges": [], "isUserWatching": false}], "style": {}}, {"id": "g203", "title": "UX & Product", "tasks": [{"id": "c206", "title": "Redesign onboarding"}, {"id": "c207", "title": "User feedback sessions"}, {"id": "c208", "title": "A/B testing for landing page"}], "style": {}}],
        "activities": [{"id": "a201", "title": "Migrated data", "createdAt": 164514, "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "http://some-img"}, "group": {"id": "g201", "title": "Core Team"}, "task": {"id": "c201", "title": "Database migration"}}, {"id": "a202", "title": "Added new label", "createdAt": 174999, "byMember": {"_id": "u105", "fullname": "Sam L", "imgUrl": "https://www.example.com/sam.png"}, "group": {"id": "g201", "title": "Core Team"}, "task": {"id": "c202", "title": "User analytics"}}],
        "cmpsOrder": ["MemberPicker", "DatePicker", "StatusPicker"]
    }, {
        "title": "Robot Dev Proj Board #3",
        "isStarred": false,
        "archivedAt": 1589983468430,
        "createdBy": {"_id": "u101", "fullname": "Abi Abambi", "imgUrl": "http://some-img"},
        "style": {"backgroundImage": "https://www.example.com/bg3.jpg"},
        "labels": [{"id": "l301", "title": "In Process", "color": "#61bd33"}, {"id": "l302", "title": "Finished", "color": "#61bd4f"}, {"id": "l303", "title": "Critical", "color": "#eb5a46"}],
        "members": [{"_id": "u101", "fullname": "Tal Taltal", "imgUrl": "https://www.example.com/tal.png"}],
        "groups": [{"id": "g301", "title": "Main Features", "tasks": [{"id": "c301", "title": "Implement notifications"}, {"id": "c302", "title": "Dark mode option"}, {"id": "c303", "title": "User profile upgrades"}, {"id": "c304", "title": "Multi-language support"}, {"id": "c305", "title": "Security review"}, {"id": "c306", "title": "Pilot test with sample users"}, {"id": "c307", "title": "Beta release scheduling"}, {"id": "c308", "title": "Feedback form enhancements"}, {"id": "c309", "title": "Performance logs"}, {"id": "c310", "title": "Generate analytics reports"}], "style": {}}, {"id": "g302", "title": "Future Ideas", "tasks": [{"id": "c311", "title": "AR/VR prototype"}, {"id": "c312", "title": "Integrate with wearable devices"}, {"id": "c313", "title": "Blockchain-based security"}], "style": {}}],
        "activities": [{"id": "a301", "title": "Board created", "createdAt": 154999, "byMember": {"_id": "u101", "fullname": "Abi Abambi", "imgUrl": "http://some-img"}}],
        "cmpsOrder": ["DatePicker", "StatusPicker", "MemberPicker"]
    }, {
        "title": "Robot Dev Proj Board #4",
        "isStarred": false,
        "archivedAt": null,
        "createdBy": {"_id": "u103", "fullname": "Nina X", "imgUrl": "https://www.example.com/nina.png"},
        "style": {"backgroundImage": ""},
        "labels": [{"id": "l401", "title": "Blocked", "color": "#eb5a46"}, {"id": "l402", "title": "Ready", "color": "#61bd4f"}],
        "members": [{"_id": "u103", "fullname": "Nina X", "imgUrl": "https://www.example.com/nina.png"}, {"_id": "u106", "fullname": "Oliver Z", "imgUrl": "https://www.example.com/oliver.png"}],
        "groups": [{"id": "g401", "title": "Backend Rework", "tasks": [{"id": "c401", "title": "Move to microservices"}, {"id": "c402", "title": "Dockerize the app"}, {"id": "c403", "title": "Kubernetes deployment"}], "style": {}}, {"id": "g402", "title": "Documentation", "tasks": [{"id": "c404", "title": "API reference update"}, {"id": "c405", "title": "README refresh"}], "style": {}}, {"id": "g403", "title": "Release Strategy", "tasks": [{"id": "c406", "title": "Phased release plan"}, {"id": "c407", "title": "Post-release monitoring"}], "style": {}}, {"id": "g404", "title": "Bug Fixes", "tasks": [{"id": "c408", "title": "Critical data corruption bug"}, {"id": "c409", "title": "UI alignment issues"}, {"id": "c410", "title": "Session timeout fix"}], "style": {}}],
        "activities": [{"id": "a401", "title": "Added new board", "createdAt": 160000000, "byMember": {"_id": "u103", "fullname": "Nina X", "imgUrl": "https://www.example.com/nina.png"}}],
        "cmpsOrder": ["StatusPicker", "DatePicker", "MemberPicker"]
    }, {
        "title": "Robot Dev Proj Board #5",
        "isStarred": true,
        "archivedAt": null,
        "createdBy": {"_id": "u101", "fullname": "Abi Abambi", "imgUrl": "http://some-img"},
        "style": {"backgroundImage": "https://www.example.com/bg5.jpg"},
        "labels": [{"id": "l501", "title": "Test", "color": "#f2d600"}, {"id": "l502", "title": "Review", "color": "#0079bf"}, {"id": "l503", "title": "Deployed", "color": "#61bd4f"}],
        "members": [{"_id": "u102", "fullname": "Josh Ga", "imgUrl": "https://www.example.com/josh.png"}, {"_id": "u106", "fullname": "Oliver Z", "imgUrl": "https://www.example.com/oliver.png"}],
        "groups": [{"id": "g501", "title": "Infrastructure", "tasks": [{"id": "c501", "title": "Upgrade AWS tier"}, {"id": "c502", "title": "Set up cost monitoring"}, {"id": "c503", "title": "Configure auto-scaling"}, {"id": "c504", "title": "Disaster recovery plan"}, {"id": "c505", "title": "Auto-backup strategy"}, {"id": "c506", "title": "Check load balancer logs"}], "style": {}}, {"id": "g502", "title": "Integrations", "tasks": [{"id": "c507", "title": "CRM integration"}, {"id": "c508", "title": "Payment gateway integration"}, {"id": "c509", "title": "Email service upgrade"}], "style": {}}, {"id": "g503", "title": "Operations", "tasks": [{"id": "c510", "title": "Weekly metrics report"}, {"id": "c511", "title": "DevOps resources update"}, {"id": "c512", "title": "Team training session"}, {"id": "c513", "title": "Access control review"}], "style": {}}, {
            "id": "g504",
            "title": "User Success",
            "tasks": [{"id": "c514", "title": "Support tickets backlog"}, {"id": "c515", "title": "Knowledge base improvements"}],
            "style": {}
        }, {"id": "g505", "title": "Explorations", "tasks": [{"id": "c516", "title": "Try new AI API"}, {"id": "c517", "title": "Investigate AR toolkit"}], "style": {}}],
        "activities": [{"id": "a501", "title": "Board pinned", "createdAt": 161000000, "byMember": {"_id": "u102", "fullname": "Josh Ga", "imgUrl": "https://www.example.com/josh.png"}}],
        "cmpsOrder": ["DatePicker", "MemberPicker", "StatusPicker"]
    }]
}


import {random} from '../util.service.js'

export const getRandomColor = () => {

    const trelloBoardColors = [
        "#60D394",
        "#FFD97D",
        "#fea362",
        "#FF6B6B",
        "#9f8fef",
        "#579dff",
        "#6cc3e0",
        "#94c748",
        "#e774bb",
        "#8590a2",
    ]

    const colors = [
        "#60D394",
        "#FFD97D",
        "#FF9B85",
        "#FF6B6B",
        "#7C77B9",
        "#56CCF2",
        "#7ED56F",
        "#FBC2EB"
    ]
    return random.choice(trelloBoardColors)
}

export const getRandomColorLabels = () => {
    const colors = [
        "#60D394",
        "#FFD97D",
        "#FF9B85",
        "#FF6B6B",
        "#7C77B9",
        "#56CCF2",
    ];
    return random.choice(colors)
}

const USER_POOL = [
    {_id: 'u101', fullname: 'Abi Abambi', imgUrl: 'https://example.com/abi.png'},
    {_id: 'u102', fullname: 'Josh Ga', imgUrl: 'https://example.com/josh.png'},
    {_id: 'u103', fullname: 'Nina X', imgUrl: 'https://example.com/nina.png'},
    {_id: 'u104', fullname: 'Megan X', imgUrl: 'https://example.com/megan.png'},
    {_id: 'u105', fullname: 'Sam L', imgUrl: 'https://example.com/sam.png'},
    {_id: 'u106', fullname: 'Oliver Z', imgUrl: 'https://example.com/oliver.png'}
]

const STATUS_OPTIONS = ['inProgress', 'done', 'review', 'stuck', 'blocked']
const PRIORITY_OPTIONS = ['low', 'medium', 'high']
const CMP_ORDER_OPTIONS = ['StatusPicker', 'MemberPicker', 'DatePicker', 'SomeNewPicker', 'OtherPicker']

function getRandomChecklists() {
    const checklistsCount = random.randint(0, 2)
    const checklists = []
    for (let i = 0; i < checklistsCount; i++) {
        const todosCount = random.randint(1, 5)
        const todos = []
        for (let j = 0; j < todosCount; j++) {
            todos.push({
                id: random.id(),
                title: random.lorem(random.randint(1, 3)),
                isDone: random.choice([true, false])
            })
        }
        checklists.push({
            id: random.id(),
            title: random.lorem(random.randint(1, 3)),
            todos
        })
    }
    return checklists
}

function getRandomComments() {
    const commentsCount = random.randint(0, 3)
    const comments = []
    for (let i = 0; i < commentsCount; i++) {
        const byMember = random.choice(USER_POOL)
        comments.push({
            id: random.id(),
            title: random.lorem(random.randint(3, 8)),
            createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            }
        })
    }
    return comments
}

function getRandomBadges() {
    const possibleTexts = [
        'Low',
        'Priority',
        'High',
        'Security Risk',
        'Performance Risk',
        'Approved',
        'Hotfix',
        'Heads Up'
    ]
    const possibleBadgeTypes = ['risk', 'approved', 'priority', 'now']

    const badgeCount = random.randint(0, 4)
    const badges = []
    for (let i = 0; i < badgeCount; i++) {
        badges.push({
            id: random.id(),
            text: random.choice(possibleTexts),
            badeType: random.choice(possibleBadgeTypes)
        })
    }
    return badges
}

function getRandomTask() {
    const randTitleWords = random.randint(1, 5)
    const dueDate = random.date('2024-01-01', '2026-12-31').toISOString()
    return {
        id: random.id(),
        title: random.lorem(randTitleWords),
        status: random.choice(STATUS_OPTIONS),
        priority: random.choice(PRIORITY_OPTIONS),
        dueDate,
        description: random.lorem(random.randint(5, 15)),
        comments: getRandomComments(),
        checklists: getRandomChecklists(),
        memberIds: random.sample(
            USER_POOL.map(u => u._id),
            random.randint(0, USER_POOL.length)
        ),
        labelIds: [],
        byMember: random.choice(USER_POOL),
        style: {

            backgroundColor: random.color(),
            backgroundImage: random.choice([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,

                'https://picsum.photos/600/300?random=' + random.randint(1, 1000), 'https://picsum.photos/600/300?random=' + random.randint(1, 1000), 'https://picsum.photos/600/300?random=' + random.randint(1, 1000), 'https://picsum.photos/600/300?random=' + random.randint(1, 1000),
                "cover-img.png",
                "cover-img-1.png",
                "cover-img-2.png",
                "cover-img-3.png"


            ])
        },
        badges: getRandomBadges(),

        isUserWatching: random.choice([true, false])
    }
}

function getColorFromBackgroundColor(backgroundColor) {

    let color = "#000000"

    // green
    if (backgroundColor === "#60D394") {
        color = "#164b35"
    }

    // yellow
    if (backgroundColor === "#FFD97D") {
        color = "#4f3a0e"
    }

    // orange
    if (backgroundColor === "#fea362") {
        color = "#6e3b0d"
    }

    // red
    if (backgroundColor === "#FF6B6B") {
        color = "#6e0d0d"
    }

    // purple
    if (backgroundColor === "#9f8fef") {
        color = "#4f3a0e"
    }

    // blue
    if (backgroundColor === "#579dff") {
        color = "#0d2e6e"
    }

    // light blue
    if (backgroundColor === "#6cc3e0") {
        color = "#0d3a4f"
    }

    // green
    if (backgroundColor === "#94c748") {
        color = "#3a4f0d"
    }

    // pink
    if (backgroundColor === "#e774bb") {
        color = "#6e0d3a"
    }

    // grey
    if (backgroundColor === "#8590a2") {
        color = "#3a3a3a"
    }

    return color
}

function getRandomGroups() {
    const groupsCount = random.randint(2, 5)
    const groups = []
    for (let i = 0; i < groupsCount; i++) {
        const tasksCount = random.randint(3, 8)
        const tasks = []
        for (let j = 0; j < tasksCount; j++) {
            tasks.push(getRandomTask())
        }

        const backgroundColor = random.choice([getRandomColor(), getRandomColor(), null])
        const color = getColorFromBackgroundColor(backgroundColor)

        const style = {
            backgroundColor
        }
        if (color) {
            style.color = color
        }


        groups.push({
            id: random.id(),
            title: random.lorem(random.randint(1, 3)),
            archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
            tasks,
            style: style,
        })
    }
    return groups
}

function getRandomLabels() {
    const labelsCount = random.choice([0, 0, 1, 1, 2, random.randint(0, 6)])
    const labels = []
    for (let i = 0; i < labelsCount; i++) {
        labels.push({
            id: random.id(),
            title: random.lorem(random.randint(1, 5)),
            color: getRandomColorLabels()
        })
    }
    return labels
}

function getRandomMembers() {
    return random.sample(USER_POOL, random.randint(1, USER_POOL.length))
}

function getRandomActivities() {
    const activitiesCount = random.randint(2, 5)
    const activities = []
    for (let i = 0; i < activitiesCount; i++) {
        const byMember = random.choice(USER_POOL)
        activities.push({
            id: random.id(),
            title: random.lorem(random.randint(2, 6)),
            createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            },
            group: {
                id: random.id(),
                title: random.lorem(random.randint(1, 3))
            },
            task: {
                id: random.id(),
                title: random.lorem(random.randint(2, 4))
            }
        })
    }
    return activities
}

export function getRandomBoard() {

    console.log(data)
    const base = data.boards[0]
    const board = JSON.parse(JSON.stringify(base))

    board.id = random.id(random.randint(4, 10))
    board.title = random.lorem(random.randint(2, 5))
    board.isStarred = random.choice([true, false])
    board.archivedAt = random.choice([
        null,
        random.date('2022-01-01', '2023-12-31').getTime()
    ])
    const createdBy = random.choice(USER_POOL)
    board.createdBy = {
        _id: createdBy._id,
        fullname: createdBy.fullname,
        imgUrl: createdBy.imgUrl
    }

    board.style.backgroundImage = 'https://picsum.photos/600/300?random=' + random.randint(1, 1000)

    // random.choice([
    //     '',
    //     'https://picsum.photos/600/300?random=' + random.randint(1, 1000)
    // ])


    board.labels = getRandomLabels()
    board.members = getRandomMembers()
    board.groups = getRandomGroups()
    board.activities = getRandomActivities()

    board.cmpsOrder = random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length))

    board.groups.forEach(group => {
        group.tasks.forEach(task => {
            task.labels = getRandomLabels()
        })
    })

    return board
}
