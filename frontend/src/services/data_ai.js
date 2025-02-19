

import OpenAI from 'openai'
import { API_KEY } from './secrets.js'
import { random } from './util.service.js'

const openai = new OpenAI({
    dangerouslyAllowBrowser: true,
    apiKey: API_KEY,
})

async function generateText(prompt, temperature = 1.0, fallback = '') {
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

async function generateBadges() {
    const prompt = `
Generate an array of 0 to 3 small "badge" objects with simple categories and texts.
Example:
[
  {"categ":"Workload","text":"Heavy"},
  {"categ":"NeedsApproval","text":"Pending"},
]
Return strictly valid JSON only.
`
    const fallback = '[{"categ":"NeedsApproval","text":"Pending"},{"categ":"HighRisk","text":"Proceed Carefully"}]'

    const text = await generateText(prompt, 1.0, fallback)
    let rawBadges = safeJsonParse(text, fallback)
    if (!Array.isArray(rawBadges)) {
        rawBadges = safeJsonParse(fallback)
    }

    // Convert them to our shape
    return rawBadges.map((b) => {
        // pick a random known type
        const randomType = random.choice(BADGE_TYPE_ARRAY)
        return {
            id: 'badg_' + random.id(),
            categ: b.categ || 'General',
            color: BADGE_COLOR_MAP[randomType] || '#ccc',
            textColor: BADGE_TEXT_COLOR_MAP[randomType] || '#000',
            badgeOptions: [],
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

    const badges = await generateBadges()

    return {
        id: random.id(),
        title: taskTitle,
        status: random.choice(STATUS_OPTIONS),
        priority: random.choice(PRIORITY_OPTIONS),
        dueDate: random.date('2024-01-01', '2026-12-31').toISOString(),
        createdAt: random.date('2024-01-01', '2026-12-31'),
        description: taskDescription,
        checklists: await generateChecklists(),
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

async function generateChecklists() {
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
Generate an array of 1 to 3 short "todo" items. Return strictly JSON:
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
    const groupCount = random.randint(2, 5)
    const prompt = `
Board: "${boardTitle}"
Generate ${groupCount} short group titles about everyday life or work, separated by semicolons.
Example: "Groceries; Home Maintenance; Work Projects"
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

    const fallbackBoardTitle = 'Generic Board'
    const boardTitlePrompt = `
Generate a single realistic board name for a project management system (e.g. "Home & Family Planning" or "Work Priorities Board").
Return just the name, no extra text.
`
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
