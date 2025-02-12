const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { boardService as local } from './board.service.local'
import { boardService as remote } from './board.service.remote'

function getEmptyBoard() {

    return {
        title: 'Robot dev proj',
        isStarred: false,
        archivedAt: 1589983468418,
        createdBy: {
            _id: 'u101',
            fullname: 'Abi Abambi',
            imgUrl: 'http://some-img',
        },
        style: {
            backgroundImage: '',
        },
        labels: [
            {
                id: 'l101',
                title: 'Done',
                color: '#61bd4f',
            },
            {
                id: 'l102',
                title: 'Progress',
                color: '#61bd33',
            },
        ],
        members: [
            {
                _id: 'u101',
                fullname: 'Tal Taltal',
                imgUrl: 'https://www.google.com',
            },
            {
                _id: 'u102',
                fullname: 'Josh Ga',
                imgUrl: 'https://www.google.com',
            },
        ],
        groups: [
            {
                id: 'g101',
                title: 'Group 1',
                archivedAt: 1589983468418,
                tasks: [
                    {
                        id: 'c101',
                        title: 'Replace logo',
                    },
                    {
                        id: 'c102',
                        title: 'Add Samples',
                    },
                ],
                style: {},
            },
            {
                id: 'g102',
                title: 'Group 2',
                tasks: [
                    {
                        id: 'c103',
                        title: 'Do that',
                        archivedAt: 1589983468418,
                    },
                    {
                        id: 'c104',
                        title: 'Help me',
                        status: 'inProgress', // monday / both
                        priority: 'high', // monday / both
                        dueDate: '2024-09-24',
                        description: 'description',
                        comments: [
                            // in Trello this is easier implemented as an activity
                            {
                                id: 'ZdPnm',
                                title: 'also @yaronb please CR this',
                                createdAt: 1590999817436,
                                byMember: {
                                    _id: 'u101',
                                    fullname: 'Tal Tarablus',
                                    imgUrl: '',
                                },
                            },
                        ],
                        checklists: [
                            {
                                id: 'YEhmF',
                                title: 'Checklist',
                                todos: [
                                    {
                                        id: '212jX',
                                        title: 'To Do 1',
                                        isDone: false,
                                    },
                                ],
                            },
                        ],
                        memberIds: ['u101'],
                        labelIds: ['l101', 'l102'],
                        byMember: {
                            _id: 'u101',
                            fullname: 'Tal Tarablus',
                            imgUrl: '',
                        },
                        style: {
                            backgroundColor: '#26de81',
                        },
                        badges: [
                            {
                                id: 'id',
                                text: 'Priority: Medium',
                                badeType: 'priority'
                            }
                        ],
                        isUserWatching: false,
                        geoLocation: (32.0853, 34.7818),

                    },
                ],
                style: {
                    backgroundColor: "#c5ecfa",
                },
            },
        ],
        activities: [
            {
                id: 'a101',
                title: 'Changed Color',
                createdAt: 154514,
                byMember: {
                    _id: 'u101',
                    fullname: 'Abi Abambi',
                    imgUrl: 'http://some-img',
                },
                group: {
                    id: 'g101',
                    title: 'Urgent Stuff',
                },
                task: {
                    id: 'c101',
                    title: 'Replace Logo',
                },
            },
        ],
        cmpsOrder: ['StatusPicker', 'MemberPicker', 'DatePicker'],
    }



    // return {
    //
    //     vendor: makeId(),
    //     speed: getRandomIntInclusive(80, 240),
    //     msgs: [],
    // }
}

function getDefaultFilter() {
    return {
        txt: '',
        minSpeed: '',
        sortField: '',
        sortDir: '',
    }
}

const service = (VITE_LOCAL === 'true') ? local : remote
export const boardService = { getEmptyBoard, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.boardService = boardService
