
import { getRandomBoard } from './data.js'
const { DEV, VITE_LOCAL } = import.meta.env
import { userService } from './user.service.js'

import { makeId, httpService } from './util.service.js'
import { storageService } from './async-storage.service.js'

export let USE_AI = false
export let aiGenerator = null


USE_AI = false
import { getRandomBoardAI } from './data_ai.js'
// import { getRandomBoardAI } from './data_ai_bombardment.js'
aiGenerator = getRandomBoardAI
// localStorage.clear()



const SECURE = false

const BASE_URL = 'board/'
const STORAGE_KEY = 'board'



export const localBoardService = {
    query: async (filterBy = { title: '' }) => {
        try {
            let boards = await storageService.query(STORAGE_KEY)

            if (!boards.length) {
                await localBoardService._createBoards()
                boards = await storageService.query(STORAGE_KEY)
            }

            const { title } = filterBy

            if (title) {
                const regex = new RegExp(title, 'i')
                boards = boards.filter(board =>
                    regex.test(board.vendor) || regex.test(board.description)
                )
            }

            return boards
        } catch (error) {
            console.error('Failed to query boards:', error)
            throw error
        }
    },

    getById: async (boardId, filterBy = { title: '' }) => {
        try {

            console.log('getById: ', boardId, 'filterBy: ', filterBy)

            const { title, members, status, dueDate } = filterBy
            let board = await storageService.get(STORAGE_KEY, boardId)

            if (title) {
                const regex = new RegExp(title, 'i')
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task => regex.test(task.title))
                    }))
                }
            }

            if (members?.length) {
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task =>
                            (!task.members.length && members.includes('1')) ||
                            task.members.some(member => members.some(m1 => m1 === member._id))
                        )
                    }))
                }
            }

            if (dueDate?.length) {
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task =>
                            dueDate.some(date => {
                                const taskDate = new Date(task.dueDate)
                                const now = Date.now()
                                const weekFromNow = new Date(new Date().setDate(new Date().getDate() + 7)).getTime()

                                switch(date) {
                                    case 'no': return !task.dueDate
                                    case 'week': return weekFromNow > taskDate.getTime() && taskDate.getTime() > now
                                    case 'over': return taskDate.getTime() < now
                                    default: return false
                                }
                            })
                        )
                    }))
                }
            }

            if (status) {
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task =>
                            status === 'done' ? task.status === status : task.status !== 'done'
                        )
                    }))
                }
            }

            return board
        } catch (error) {
            console.error(`Failed to get board ${boardId}:`, error)
            throw error
        }
    },

    remove: async (boardId) => {
        try {
            await storageService.remove(STORAGE_KEY, boardId)
        } catch (error) {
            console.error(`Failed to remove board ${boardId}:`, error)
            throw error
        }
    },

    save: async (board) => {
        try {
            if (board._id) {
                return await storageService.put(STORAGE_KEY, board)
            }
            const boardToSave = {
                ...board,
                owner: SECURE ? userService.getLoggedinUser() : null
            }
            return await storageService.post(STORAGE_KEY, boardToSave)
        } catch (error) {
            console.error('Failed to save board:', error)
            throw error
        }
    },

    addBoardMsg: async (boardId, title) => {
        try {
            const board = await localBoardService.getById(boardId)
            const msg = {
                id: makeId(),
                by: SECURE ? userService.getLoggedinUser() : null,
                title
            }

            board.msgs.push(msg)
            await storageService.put(STORAGE_KEY, board)
            return msg
        } catch (error) {
            console.error(`Failed to add message to board ${boardId}:`, error)
            throw error
        }
    },

    _createBoards: async () => {
        try {
            const boardIds = []
            for (let i = 0; i < 5; i++) {
                const board = getRandomBoard()
                const savedBoard = await localBoardService.save(board)
                boardIds.push(savedBoard._id)
                console.log(`Created board with ID: ${savedBoard._id}`)
            }
            // if (USE_AI) {
            //     for (const boardId of boardIds) {
            //         try {
            //             const aiBoard = await getRandomBoardAI()
            //             console.log(`AI data generated for board ID: ${boardId}`)
            //             const existingBoard = await localBoardService.getById(boardId)
            //             const updatedBoard = { ...aiBoard, _id: boardId }
            //             await localBoardService.save(updatedBoard)
            //             console.log(`Updated board with ID: ${boardId} with AI data`)
            //         } catch (err) {
            //             console.error(`Failed to update board ${boardId} with AI data:`, err)
            //         }
            //     }
            // }

            console.log('Board creation and updates completed successfully')
        } catch (error) {
            console.error('Failed to create initial boards:', error)
            throw error
        }
    },

}

export const remoteBoardService = {
    query: async (filterBy = { title: '' }) => {
        try {
            let boards = await httpService.get(BASE_URL, filterBy)

            // if ((true) || (!boards.length)) {
            if ((!boards.length)) {
                await remoteBoardService._createBoards()
                boards = await httpService.get(BASE_URL, filterBy)
            }

            const { title } = filterBy

            if (title) {
                const regex = new RegExp(title, 'i')
                boards = boards.filter(board =>
                    regex.test(board.vendor) || regex.test(board.description)
                )
            }

            console.log('boards: ', boards.length)
            return boards
        } catch (error) {
            console.error('Failed to query boards:', error)
            throw error
        }
    },

    getById: async (boardId, filterBy = { title: '' }) => {
        try {
            const { title, members, status, dueDate } = filterBy
            let board = await httpService.get(BASE_URL + boardId, {})

            // console.log('board we got back: ', board)

            if (title?.length > 0) {
                const regex = new RegExp(title, 'i')
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task => regex.test(task.title))
                    }))
                }
            }

            if (members?.length) {
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task =>
                            (!task.members.length && members.includes('1')) ||
                            task.members.some(member => members.some(m1 => m1 === member._id))
                        )
                    }))
                }
            }

            if (dueDate?.length) {
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task =>
                            dueDate.some(date => {
                                const taskDate = new Date(task.dueDate)
                                const now = Date.now()
                                const weekFromNow = new Date(new Date().setDate(new Date().getDate() + 7)).getTime()

                                switch(date) {
                                    case 'no': return !task.dueDate
                                    case 'week': return weekFromNow > taskDate.getTime() && taskDate.getTime() > now
                                    case 'over': return taskDate.getTime() < now
                                    default: return false
                                }
                            })
                        )
                    }))
                }
            }

            if (status) {
                board = {
                    ...board,
                    groups: board.groups.map(group => ({
                        ...group,
                        tasks: group.tasks.filter(task =>
                            status === 'done' ? task.status === status : task.status !== 'done'
                        )
                    }))
                }
            }

            return board // [0]
        } catch (error) {
            console.error(`Failed to get board ${boardId}:`, error)
            throw error
        }
    },

    remove: async (boardId) => {
        try {
            return await httpService.delete(BASE_URL + boardId)
        } catch (error) {
            console.error(`Failed to remove board ${boardId}:`, error)
            throw error
        }
    },

    save: async (board) => {
        try {
            if (board._id) {
                return await httpService.put(BASE_URL + board._id, board)
            }
            const boardToSave = {
                ...board,
                owner: SECURE ? userService.getLoggedinUser() : null
            }
            return await httpService.post(BASE_URL, boardToSave)
        } catch (error) {
            console.error('Failed to save board:', error)
            throw error
        }
    },

    getEmptyBoard: () => {
        return {
            title: '',
            groups: [],
            members: [],
            activities: [],
            createdAt: Date.now(),
            createdBy: SECURE ? userService.getLoggedinUser() : null,
            style: {}
        }
    },

    getDefaultFilter: () => {
        return {
            title: '',
            members: [],
            status: null,
            dueDate: [],
            sortBy: { key: 'createdAt', direction: -1 }
        }
    },

    _createBoards: async () => {
        try {
            let boardIds = []
            // for (let i = 0; i < 20; i++) {
            //     const board = getRandomBoard()
            //     const savedBoard = await remoteBoardService.save(board)
            //     boardIds.push(savedBoard._id)
            //     console.log(`Created board with ID: ${savedBoard._id}`)
            // }

            remoteBoardService.query().then(async (boards) => {
                boardIds = boards.map(board => board._id)
                if (USE_AI) {
                    for (const boardId of boardIds) {
                        try {
                            const existingBoard = await remoteBoardService.getById(boardId)
                            if ((existingBoard.generator === 'getRandomBoard') || (existingBoard.title.toLowerCase().includes('generic'))) {

                                console.log(`AI: Working on board: ${existingBoard.title}`)
                                const aiBoard = await getRandomBoardAI()
                                console.log(`AI data generated for board ID: ${existingBoard.title}`)
                                const updatedBoard = {...aiBoard, _id: boardId}
                                await remoteBoardService.save(updatedBoard)
                                console.log(`Updated board with ID: ${boardId} with AI data`)
                            }
                        } catch (err) {
                            console.error(`Failed to update board ${boardId} with AI data:`, err)
                        }
                    }
                }

            })

            if (USE_AI) {
                for (const boardId of boardIds) {
                    try {
                        const existingBoard = await remoteBoardService.getById(boardId)
                        if (existingBoard.generator === 'getRandomBoard') {
                            const aiBoard = await getRandomBoardAI()
                            console.log(`AI data generated for board ID: ${boardId}`)
                            const updatedBoard = {...aiBoard, _id: boardId}
                            await remoteBoardService.save(updatedBoard)
                            console.log(`Updated board with ID: ${boardId} with AI data`)
                        }
                    } catch (err) {
                        console.error(`Failed to update board ${boardId} with AI data:`, err)
                    }
                }
            }

            console.log('Board creation and updates completed successfully')
        } catch (error) {
            console.error('Failed to create initial boards:', error)
            throw error
        }
    },
}

function getEmptyBoard() {
    return getRandomBoard()
}

function getDefaultFilter() {
    return {
        title: '',
        members: [],
        labels: [],
        status: '',
        dueDate: []
    }
}

const service = (VITE_LOCAL === 'true') ? localBoardService : remoteBoardService
export const boardService = { getEmptyBoard, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local
if (DEV) window.boardService = boardService


