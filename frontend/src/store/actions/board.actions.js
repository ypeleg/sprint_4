

import { store } from '../store'
import { boardService } from '../../services/board'
import { ADD_BOARD, REMOVE_BOARD, SET_BOARDS, SET_BOARD, UPDATE_BOARD, ADD_BOARD_MSG, SET_FILTER_BY } from '../reducers/board.reducer.js'
import { makeId } from '../../services/util.service.js'


export function getRandomBoard() {
    return boardService.getEmptyBoard()
}

export function getEmptyBoard() {
    // return boardService.getEmptyBoard()
    return {
        // _id: random.id(random.randint(4, 10)),
        title: "",
        isStarred: false,
        archivedAt: null,
        createdBy: {
            _id: "123",
            fullname: "shiri",
            imgUrl: ""
        },
        style: {
            backgroundImage: ""
        },
        labels: [],
        members: [],
        groups: []
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
        byMember: '',
        activity:[],
        attachments:[],
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
        style: { backgroundColor: null, color: "#000000" }
    }
}

export async function loadBoards(filterBy) {
    try {
        const boards = await boardService.query(filterBy)
        store.dispatch(getCmdSetBoards(boards))
    } catch (err) {
        console.log('Cannot load boards', err)
        throw err
    }
}

export async function loadBoard(boardId, filterBy = { title: '' }) {
    try {
        const board = await boardService.getById(boardId, filterBy)
        store.dispatch(getCmdSetBoard(board))
    } catch (err) {
        console.log('Cannot load board', err)
        throw err
    }
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}

export async function removeBoard(boardId) {
    try {
        await boardService.remove(boardId)
        store.dispatch(getCmdRemoveBoard(boardId))
    } catch (err) {
        console.log('Cannot remove board', err)
        throw err
    }
}

export async function addBoard(board) {
    try {
        const savedBoard = await boardService.save(board)
        store.dispatch(getCmdAddBoard(savedBoard))
        return savedBoard
    } catch (err) {
        console.log('Cannot add board', err)
        throw err
    }
}

export async function updateBoard(board) {
    try {
        const savedBoard = await boardService.save(board)
        store.dispatch(getCmdUpdateBoard(savedBoard))
        return savedBoard
    } catch (err) {
        console.log('Cannot save board', err)
        throw err
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
