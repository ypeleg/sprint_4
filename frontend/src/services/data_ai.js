

import OpenAI from 'openai'
import {API_KEY} from './secrets.js'
import { random } from './util.service.js'


const openai = new OpenAI({ dangerouslyAllowBrowser: true,  apiKey: API_KEY})


const USER_POOL = [
    { _id: 'u101', fullname: 'Abi Abambi', imgUrl: 'roi.png' },
    { _id: 'u102', fullname: 'Josh Ga', imgUrl: 'roi.png' },
    { _id: 'u103', fullname: 'Nina X', imgUrl: 'roi.png' },
    { _id: 'u104', fullname: 'Megan X', imgUrl: '' },
    { _id: 'u105', fullname: 'Sam L', imgUrl: '' },
    { _id: 'u106', fullname: 'Oliver Z', imgUrl: '' }
];

const STATUS_OPTIONS = ['inProgress', 'done', 'review', 'stuck', 'blocked'];
const PRIORITY_OPTIONS = ['low', 'medium', 'high'];
const CMP_ORDER_OPTIONS = ['StatusPicker', 'MemberPicker', 'DatePicker', 'SomeNewPicker', 'OtherPicker'];

async function generateText(prompt) {
    console.log('prompt', prompt)
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            temperature: 1.0,
            messages: [{ role: 'user', content: prompt }],
        });
        let ret = response.choices[0].message.content.trim();


        while (!ret[0].match(/[a-zA-Z0-9]/)) {
            ret = ret.substring(1);
        }


        while (!ret[ret.length - 1].match(/[a-zA-Z0-9]/)) {
            ret = ret.substring(0, ret.length - 1);
        }

        console.log('ret', ret)
        return ret;
    } catch (error) {
        console.error('OpenAI API error:', error);
        return null
    }
}


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
    const cnt = random.randint(0, 3);
    return Array.from({ length: cnt }, () => ({
        path: `file-${random.randint(1, 999)}.png`,
        date: Date.now() - random.randint(0, 1_000_000_000),
        text: random.choice([random.lorem(random.randint(1, 5)), ''])
    }));
}

const BADGE_OPTIONS_MAP = {
    risk: ['Low', 'Moderate', 'High'],
    approved: ['Open', 'Blocked', 'In Review', 'Done'],
    priority: ['Low', 'Medium', 'High'],
    now: ['Heads Up', 'Hotfix', 'Immediate']
};
const BADGE_COLOR_MAP = {
    risk: '#fdddc7',
    approved: '#f8e6a0',
    priority: '#ffe2bd',
    now: '#ffc0cb'
};
const BADGE_TEXT_COLOR_MAP = {
    risk: '#6e3b0d',
    approved: '#4f3a0e',
    priority: '#6e3b0d',
    now: '#6e0d3a'
};

function getRandomBadges() {
    const count = random.randint(0, 3);
    return Array.from({ length: count }, () => {
        const badgeType = random.choice(['risk', 'approved', 'priority', 'now']);
        return {
            id: random.id(),
            categ: badgeType.charAt(0).toUpperCase() + badgeType.slice(1),
            color: BADGE_COLOR_MAP[badgeType] || '#ccc',
            textColor: BADGE_TEXT_COLOR_MAP[badgeType] || '#000',
            badgeOptions: BADGE_OPTIONS_MAP[badgeType] || [],
            chosenOption: random.choice(BADGE_OPTIONS_MAP[badgeType])
        };
    });
}

function getRandomChecklists() {
    const cCount = random.randint(0, 2);
    return Array.from({ length: cCount }, () => {
        const tCount = random.randint(1, 5);
        return {
            id: random.id(),
            title: random.lorem(random.randint(1, 3)),
            progress: random.randint(0, 100),
            todos: Array.from({ length: tCount }, () => ({
                id: random.id(),
                title: random.lorem(random.randint(2, 4)),
                isDone: random.choice([true, false])
            }))
        };
    });
}


export function getColorFromBackgroundColor(bg) {
    switch (bg) {
        case '#baf3db': return '#164b35';
        case '#f8e6a0': return '#4f3a0e';
        case '#fedec8': return '#6e3b0d';
        case '#ffd5d2': return '#6e0d0d';
        case '#dfd8fd': return '#4f3a0e';
        case '#cce0ff': return '#0d2e6e';
        case '#c6edfb': return '#0d3a4f';
        case '#fdd0ec': return '#6e0d3a';
        case '#f1f2f4': return '#3a3a3a';
        default: return '#3a3a3a';
    }
}

function getRandomColor() {
    const trelloColors = [
        '#baf3db', '#f8e6a0', '#fedec8', '#ffd5d2', '#dfd8fd',
        '#cce0ff', '#c6edfb', '#fdd0ec', '#f1f2f4'
    ];
    return random.choice(trelloColors);
}

function getRandomColorLabels() {
    const colors = ['#9f8fef', '#f87168', '#fea362', '#f5cd47', '#4bce97', '#579dff'];
    return random.choice(colors);
}


async function getRandomLabels(boardTitle) {
    const prompt = `Generate 5 realistic label titles for a project management board titled '${boardTitle}', separated by commas.`;
    const response = await generateText(prompt);
    let labelTitles = response ? response.split(',').map(t => t.trim()) : [];
    if (labelTitles.length < 5) {
        while (labelTitles.length < 5) {
            labelTitles.push(random.lorem(random.randint(1, 3)));
        }
    }
    return labelTitles.slice(0, 5).map(title => ({
        id: random.id(),
        title,
        color: getRandomColorLabels()
    }));
}


async function getRandomTask(boardTitle, groupTitle) {
    const prompt = `For the group '${groupTitle}' in the board '${boardTitle}', generate a task with a title and a short description, formatted as "Title: [title]; Description: [description]".`;
    const response = await generateText(prompt);
    let title = random.lorem(random.randint(1, 5));
    let description = random.lorem(random.randint(5, 15));
    if (response) {
        const match = response.match(/Title:\s*(.+?);\s*Description:\s*(.+)/);
        if (match) {
            title = match[1].trim();
            description = match[2].trim();
        }
    }
    return {
        id: random.id(),
        title,
        status: random.choice(STATUS_OPTIONS),
        priority: random.choice(PRIORITY_OPTIONS),
        dueDate: random.date('2024-01-01', '2026-12-31').toISOString(),
        createdAt: random.date('2024-01-01', '2026-12-31'),
        description,
        checklists: getRandomChecklists(),
        members: random.sample(USER_POOL, random.randint(0, USER_POOL.length)),
        style: random.choice([
            { backgroundColor: getRandomColorLabels(), coverSize: random.choice(['small', 'large']) },
            { backgroundImage: random.choice([null, null, null, `https://picsum.photos/600/300?random=${random.randint(1, 1000)}`, 'cover-img.png', 'cover-img-1.png', 'cover-img-2.png', 'cover-img-3.png']), coverSize: random.choice(['small', 'large']) },
            {}
        ]),
        badges: getRandomBadges(),
        attachments: getRandomAttachments(),
        activity: getTaskActivities({ title }),
        isUserWatching: random.choice([true, false]),
        labels: [],
        location: random.choice([null, null, null, getRandomLocation()])
    };
}


function getTaskActivities(task) {
    const count = random.randint(1, 4);
    const activityTypes = [
        `Updated status to '${random.choice(STATUS_OPTIONS)}'`,
        `Changed priority to '${random.choice(PRIORITY_OPTIONS)}'`,
        `Added attachment '${random.lorem(1)}.png'`,
        `Commented: '${random.lorem(5)}'`
    ];
    return Array.from({ length: count }, () => {
        const byMember = random.choice(USER_POOL);
        return {
            id: random.id(),
            title: random.choice(activityTypes),
            createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            }
        };
    });
}


async function getRandomGroups(boardTitle) {
    const groupCount = random.randint(2, 5);
    const prompt = `Generate ${groupCount} realistic group titles for a project management board titled '${boardTitle}', separated by semicolons.`;
    const response = await generateText(prompt);
    let groupTitles = response ? response.split(';').map(t => t.trim()) : [];
    if (groupTitles.length < groupCount) {
        while (groupTitles.length < groupCount) {
            groupTitles.push(random.lorem(random.randint(1, 3)));
        }
    }
    groupTitles = groupTitles.slice(0, groupCount);

    const groups = await Promise.all(groupTitles.map(async (title) => {
        const taskCount = random.randint(3, 8);
        const tasks = await Promise.all(
            Array.from({ length: taskCount }, () => getRandomTask(boardTitle, title))
        );
        const backgroundColor = getRandomColor();
        const style = { backgroundColor, color: getColorFromBackgroundColor(backgroundColor) };
        return {
            id: random.id(),
            title,
            archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
            tasks,
            style,
            watched: random.choice([true, false]),
            isMinimaized: random.choice([true, false])
        };
    }));
    return groups;
}


function getRandomBoardActivities(board) {
    const count = random.randint(2, 5);
    return Array.from({ length: count }, () => {
        const group = random.choice(board.groups);
        const task = random.choice(group.tasks);
        const activityType = random.choice(['added', 'moved', 'updated']);
        let title;
        if (activityType === 'added') {
            title = `Added task '${task.title}' to group '${group.title}'`;
        } else if (activityType === 'moved') {
            const otherGroup = random.choice(board.groups.filter(g => g.id !== group.id));
            title = `Moved task '${task.title}' from group '${otherGroup.title}' to '${group.title}'`;
        } else {
            title = `Updated status of task '${task.title}' to '${random.choice(STATUS_OPTIONS)}'`;
        }
        const byMember = random.choice(USER_POOL);
        return {
            id: random.id(),
            title,
            createdAt: random.date('2023-01-01', '2025-12-31').getTime(),
            byMember: {
                _id: byMember._id,
                fullname: byMember.fullname,
                imgUrl: byMember.imgUrl
            },
            group: { id: group.id, title: group.title },
            task: { id: task.id, title: task.title }
        };
    });
}


export async function getRandomBoardAI() {
    console.log('inside')
    const boardId = random.id(random.randint(4, 10));
    const createdBy = random.choice(USER_POOL);


    const boardTitlePrompt = 'Generate a realistic title for a project management board.';
    const boardTitle = await generateText(boardTitlePrompt) || random.lorem(random.randint(2, 5));


    const groups = await getRandomGroups(boardTitle);
    const labels = await getRandomLabels(boardTitle);


    groups.forEach(group => {
        group.tasks.forEach(task => {
            const labelSubset = random.sample(labels.map(lbl => lbl.id), random.randint(0, labels.length));
            task.labelIds = labelSubset;
        });
    });


    const board = {
        id: boardId,
        title: boardTitle,
        isStarred: random.choice([true, false]),
        archivedAt: random.choice([null, random.date('2022-01-01', '2023-12-31').getTime()]),
        createdBy: {
            _id: createdBy._id,
            fullname: createdBy.fullname,
            imgUrl: createdBy.imgUrl
        },
        style: {
            backgroundImage: `https://picsum.photos/600/300?random=${random.randint(1, 1000)}`
        },
        labels,
        members: USER_POOL,
        groups,
        activities: [],
        cmpsOrder: random.sample(CMP_ORDER_OPTIONS, random.randint(2, CMP_ORDER_OPTIONS.length))
    };


    board.activities = getRandomBoardActivities(board);

    console.log(board)
    return board;
}


