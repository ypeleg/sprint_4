

import { store } from '../store'
import { boardService, USE_AI, aiGenerator } from '../../services/board.service.js'
import { ADD_BOARD, REMOVE_BOARD, SET_BOARDS, SET_BOARD, UPDATE_BOARD, ADD_BOARD_MSG, SET_FILTER_BY, LOCAL_SET_BOARD } from '../reducers/board.reducer.js'
import { makeId, SOCKET_UPDATE_BOARD, socketService } from '../../services/util.service.js'
import {storageService} from "../../services/async-storage.service.js"

// import { getRandomBoardAI } from "../../services/data_ai.js"

export function getRandomBoard() {
    return boardService.getEmptyBoard()
}

export function getEmptyBoard() {
    // return boardService.getEmptyBoard()
    return {
        // _id: random.id(random.randint(4, 10)),
        generator: 'getEmptyBoard',
        title: "",
        isStarred: false,
        archivedAt: null,
        createdBy: {
            _id: "",
            fullname: "",
            imgUrl: ""
        },
        style: {
            backgroundImage: "https://images.unsplash.com/photo-1738249034650-6a789a081a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNzM5NDYxMzA5fA&ixlib=rb-4.0.3&q=80&w=400"
        },
        labels: [],
        members: [],
        groups: [],
        activities:[]
    }
}


export function getEmptyTask() {
    return {
        id: makeId(),
        title: '',
        status: '',
        priority: '',
        dueDate: '',
        description: '',
        comments: [],
        checklists: [],
        memberIds: [],
        labelIds: [],
        labels:[],
        byMember: '',
        activity: [],
        attachments: [],
        style: {
            backgroundColor: '',
            backgroundImage: ''
        },
        badges: [],
        isUserWatching: false
    }
}

export function getEmptyGroup() {
    return {
        id: makeId(),
        title: '',
        tasks: [],
        style: { backgroundColor: null, color: "#000000" },
        archivedAt:null,
        isMinimaized: false,
        watched:false,
    }
}

export async function loadBoards(filterBy) {
    try {
        const boards = await boardService.query(filterBy)
        store.dispatch(getCmdSetBoards(boards))
        // if (USE_AI) {
        //     for (let i = 0; i < boards.length; i++) {
        //         if (boards[i].generator === 'getRandomBoard') {
        //             aiGenerator().then(
        //                 board => {
        //                     board._id = boards[i]._id
        //                     board.id = boards[i].id
        //                     store.dispatch(getCmdUpdateBoard(board))
        //                     boardService.save(board)
        //                 }
        //             )
        //         }
        //     }
        // }
    } catch (err) {
        console.log('Cannot load boards', err)
        throw err
    }
}

export async function loadBoard(boardId, filterBy = { title: '' }) {
    try {
        const board = await boardService.getById(boardId, filterBy)

        console.log('FUCKING HERE!!', board)

        store.dispatch(getCmdSetBoard(board))
       
        if (USE_AI) {
            // console.log('inside', board.generator)
            if (board.generator === 'getRandomBoard') {
                aiGenerator().then(
                    aiBoard => {

                        console.log('_id', board._id)
                        console.log('_id', board.id)

                        aiBoard._id = board._id
                        aiBoard.id = board.id
                        store.dispatch(getCmdUpdateBoard(aiBoard))
                        boardService.save(aiBoard)
                    }
                )
            }
        }
    } catch (err) {
        console.log('Cannot load board', err)
        throw err
    }
}

export async function setFilterBy(filterBy) {

    let origBoard = {...store.getState().boardModule.board}
    let boardId = origBoard._id
    // fetch the original board from

    let boards = [...store.getState().boardModule.boards]
    let board = boards.find(board => board._id === boardId)

    const { title, members, status, dueDate } = filterBy

    if (title?.length > 0) {
        console.log('title filtered by ', title)
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


    // console.log('set filter by ', filterBy)
    store.dispatch({ type: SET_FILTER_BY, filterBy })
    store.dispatch({ type: LOCAL_SET_BOARD, board })
    // const currentBoardId = store.getState().boardModule.board._id
    // console.log('currentBoardId', currentBoardId)
    // await loadBoard(currentBoardId, filterBy)


}

export async function removeBoard(boardId) {
    try {
        store.dispatch(getCmdRemoveBoard(boardId))
        await boardService.remove(boardId)
    } catch (err) {
        try {
            await boardService.remove(boardId)
            store.dispatch(getCmdRemoveBoard(boardId))
        } catch (err) {
            console.log('Cannot remove board', err)
            throw err
        }
    }
}

export async function addBoard(board) {
    try {
        store.dispatch(getCmdAddBoard(board))
        const savedBoard = await boardService.save(board)
        return savedBoard
    } catch (err) {
        try {
            const savedBoard = await boardService.save(board)
            store.dispatch(getCmdAddBoard(savedBoard))
            return savedBoard
        } catch (err) {
            console.log('Cannot add board', err)
            throw err
        }
        // console.log('Cannot add board', err)
        // throw err
    }
}

function cleanBoard(board) {
    const boardCopy = {...board}
    boardCopy.groups = board.groups.map(group => {
        const groupCopy = {...group}
        groupCopy.tasks = group.tasks.map(task => {
            const {board, group, taskList, ...cleanTask} = task
            return cleanTask
        })
        return groupCopy
    })
    return boardCopy
}


export async function updateBoard(board) {
    try {
        board = cleanBoard(board)
        store.dispatch(getCmdUpdateBoard(board))
        const savedBoard = await boardService.save(board)
        socketService.emit(SOCKET_UPDATE_BOARD,board)
        return savedBoard
    } catch (err) {
        // if any error: just do it non optimistically
        try {
            const savedBoard = await boardService.save(board)
            store.dispatch(getCmdUpdateBoard(savedBoard))
            socketService.emit(SOCKET_UPDATE_BOARD,board)
            return savedBoard
        } catch (err) {
            console.log('Cannot save board', err)
            throw err
        }
        // console.log('Cannot save board', err)
        // throw err
    }
}


// Command Creators:
function getCmdSetBoards(boards) {
    return {
        type: SET_BOARDS,
        boards
    }
}

function getCmdSetBoard(board) {
    return {
        type: SET_BOARD,
        board
    }
}

function getCmdRemoveBoard(boardId) {
    return {
        type: REMOVE_BOARD,
        boardId
    }
}

function getCmdAddBoard(board) {
    return {
        type: ADD_BOARD,
        board
    }
}

function getCmdUpdateBoard(board) {
    return {
        type: UPDATE_BOARD,
        board
    }
}

function getCmdAddBoardMsg(msg) {
    return {
        type: ADD_BOARD_MSG,
        msg
    }
}
