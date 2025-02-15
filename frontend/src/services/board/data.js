import { random } from '../util.service.js'

const USER_POOL = [
    {_id: 'u101', fullname: 'Abi Abambi', imgUrl: 'https://example.com/abi.png'},
    {_id: 'u102', fullname: 'Josh Ga',    imgUrl: 'https://example.com/josh.png'},
    {_id: 'u103', fullname: 'Nina X',     imgUrl: 'https://example.com/nina.png'},
    {_id: 'u104', fullname: 'Megan X',    imgUrl: 'https://example.com/megan.png'},
    {_id: 'u105', fullname: 'Sam L',      imgUrl: 'https://example.com/sam.png'},
    {_id: 'u106', fullname: 'Oliver Z',   imgUrl: 'https://example.com/oliver.png'}
]

const STATUS_OPTIONS = ['inProgress','done','review','stuck','blocked']
const PRIORITY_OPTIONS = ['low','medium','high']
const CMP_ORDER_OPTIONS = ['StatusPicker','MemberPicker','DatePicker','SomeNewPicker','OtherPicker']

export function getRandomLocation() {
    const locations = [
        { name: "Tel Aviv-Yafo", lat: 32.109333, lng: 34.855499, zoom: 11 },
        { name: "New York City", lat: 40.7128, lng: -74.0060, zoom: 12 },
        { name: "Paris", lat: 48.8566, lng: 2.3522, zoom: 12 },
        { name: "Tokyo", lat: 35.6895, lng: 139.6917, zoom: 12 },
        { name: "London", lat: 51.5074, lng: -0.1278, zoom: 12 },
        { name: "Sydney", lat: -33.8688, lng: 151.2093, zoom: 12 }
    ];
    return random.choice(locations);
}

function getRandomAttachments() {
    const cnt = random.randint(0,3)
    return Array.from({length: cnt}, () => ({
        path: `file-${random.randint(1,999)}.png`,
        date: Date.now() - random.randint(0,1_000_000_000)
    }))
}
function getRandomActivity() {
    const cnt = random.randint(1,4)
    return Array.from({length: cnt}, () => {
        const byMember = random.choice(USER_POOL)
        return {
            id: random.id(),
            title: random.lorem(random.randint(2,6)),
            createdAt: random.date('2023-01-01','2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            }
        }
    })
}

const BADGE_OPTIONS_MAP = {
    risk:       ['Low','Moderate','High'],
    approved:   ['Open','Blocked','In Review','Done'],
    priority:   ['Low','Medium','High'],
    now:        ['Heads Up','Hotfix','Immediate']
}
const BADGE_COLOR_MAP = {
    risk:     '#fdddc7',
    approved: '#f8e6a0',
    priority: '#ffe2bd',
    now:      '#ffc0cb'
}
function getRandomBadges() {
    const count = random.randint(0,3)
    return Array.from({length: count}, () => {
        const badgeType  = random.choice(['risk','approved','priority','now'])
        return {
            id: random.id(),
            text: random.choice(BADGE_OPTIONS_MAP[badgeType]),
            categ: random.choice(['Risk','Status','Priority','Heads Up']),
            badeType: badgeType,
            color: BADGE_COLOR_MAP[badgeType] || '#ccc',
            badgeOptions: BADGE_OPTIONS_MAP[badgeType] || []
        }
    })
}

function getRandomChecklists() {
    const cCount = random.randint(0,2)
    return Array.from({length: cCount}, () => {
        const tCount = random.randint(1,5)
        return {
            id: random.id(),
            title: random.lorem(random.randint(1,3)),
            progress: true,
            todos: Array.from({length: tCount}, () => ({
                id: random.id(),
                title: random.lorem(random.randint(2,4)),
                isDone: random.choice([true,false])
            }))
        }
    })
}

function getRandomTask() {
    return {
        id: random.id(),
        title: random.lorem(random.randint(1,5)),
        status: random.choice(STATUS_OPTIONS),
        priority: random.choice(PRIORITY_OPTIONS),
        dueDate: random.date('2024-01-01','2026-12-31').toISOString(),
        createdAt: random.date('2024-01-01','2026-12-31'),
        description: random.lorem(random.randint(5,15)),
        checklists: getRandomChecklists(),
        memberIds: random.sample(USER_POOL.map(u=>u._id), random.randint(0, USER_POOL.length)),
        style: {
            backgroundColor: random.color(),
            backgroundImage: random.choice([
                null,null,null,'https://picsum.photos/600/300?random=' + random.randint(1,1000),
                'cover-img.png','cover-img-1.png','cover-img-2.png','cover-img-3.png'
            ])
        },
        badges: getRandomBadges(),
        attachments: getRandomAttachments(),
        activity: getRandomActivity(),
        isUserWatching: random.choice([true,false]),
        location: random.choice([null, null, null, getRandomLocation()])
    }
}

function getColorFromBackgroundColor(bg) {
    switch (bg) {
        case '#baf3db': return '#164b35' // trello green
        case '#f8e6a0': return '#4f3a0e' // trello yellow
        case '#fedec8': return '#6e3b0d' // trello orange
        case '#ffd5d2': return '#6e0d0d' // trello red
        case '#dfd8fd': return '#4f3a0e' // trello purple
        case '#cce0ff': return '#0d2e6e' // trello blue
        case '#c6edfb': return '#0d3a4f' // trello light blue
        case '#d3f1a7': return '#3a4f0d' // trello light green
        case '#fdd0ec': return '#6e0d3a' // trello pink
        case '#f1f2f4': return '#3a3a3a' // trello grey
        // case "#60D394": return "#164b35"
        // case "#FFD97D": return "#4f3a0e"
        // case "#fea362": return "#6e3b0d"
        // case "#FF6B6B": return "#6e0d0d"
        // case "#9f8fef": return "#4f3a0e"
        // case "#579dff": return "#0d2e6e"
        // case "#6cc3e0": return "#0d3a4f"
        // case "#94c748": return "#3a4f0d" // ugly green dont want this shit
        // case "#e774bb": return "#6e0d3a" // ugly pink
        // case "#8590a2": return "#3a3a3a" // ugly dark blue
        default:        return "#3a3a3a"
    }
}

function getRandomGroups() {
    const groupCount = random.randint(2,5)
    return Array.from({length: groupCount}, () => {
        const tasksCount = random.randint(3,8)
        const backgroundColor = getRandomColor()
        const style = { backgroundColor, color: getColorFromBackgroundColor(backgroundColor) }

        return {
            id: random.id(),
            title: random.lorem(random.randint(1,3)),
            archivedAt: random.choice([null, random.date('2022-01-01','2023-12-31').getTime()]),
            tasks: Array.from({length: tasksCount}, getRandomTask),
            style,
            watched: random.choice([true,false])
        }
    })
}

function getRandomGroups1() {
    const groupCount = random.randint(2,5)
    return Array.from({length: groupCount}, () => {
        const tasksCount = random.randint(3,8)
        const backgroundColor = random.choice([ getRandomColor(), null])
        const style = { backgroundColor }
        if (backgroundColor) style.color = getColorFromBackgroundColor(backgroundColor)

        return {
            id: random.id(),
            title: random.lorem(random.randint(1,3)),
            archivedAt: random.choice([null, random.date('2022-01-01','2023-12-31').getTime()]),
            tasks: Array.from({length: tasksCount}, getRandomTask),
            style
        }
    })
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
        '#d3f1a7',
        '#fdd0ec',
        '#f1f2f4',
    ]
    return random.choice(trelloColors)
}
function getRandomColorLabels() {
    const colors = ["#60D394","#FFD97D","#FF9B85","#FF6B6B","#7C77B9","#56CCF2"]
    return random.choice(colors)
}
function getRandomLabels() {
    const count = random.randint(0,5)
    return Array.from({length: count}, () => ({
        id: random.id(),
        title: random.lorem(random.randint(1,5)),
        color: getRandomColorLabels()
    }))
}

function getRandomBoardActivities() {
    const count = random.randint(2,5)
    return Array.from({length: count}, () => {
        const byMember = random.choice(USER_POOL)
        return {
            id: random.id(),
            title: random.lorem(random.randint(2,6)),
            createdAt: random.date('2023-01-01','2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            },
            group: { id: random.id(), title: random.lorem(random.randint(1,3)) },
            task:  { id: random.id(), title: random.lorem(random.randint(2,4)) }
        }
    })
}

export function getRandomBoard() {
    const boardId = random.id(random.randint(4,10))
    const createdBy = random.choice(USER_POOL)

    const board = {
        id: boardId,
        title: random.lorem(random.randint(2,5)),
        isStarred: random.choice([true,false]),
        archivedAt: random.choice([
            null,
            random.date('2022-01-01','2023-12-31').getTime()
        ]),
        createdBy: {
            _id: createdBy._id,
            fullname: createdBy.fullname,
            imgUrl: createdBy.imgUrl
        },
        style: {
            backgroundImage: 'https://picsum.photos/600/300?random=' + random.randint(1,1000)
        },
        labels: getRandomLabels(),
        members: USER_POOL.map(u => ({ ...u })),
        groups: getRandomGroups(),
        activities: getRandomBoardActivities(),
        cmpsOrder: random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length))
    }

    board.groups.forEach(group => {
        group.tasks.forEach(task => {
            const labelSubset = random.sample(board.labels.map(lbl=>lbl.id), random.randint(0, board.labels.length))
            task.labelIds = labelSubset
        })
    })

    return board
}
