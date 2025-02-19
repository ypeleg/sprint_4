

import { boardService } from "../../services/board.service.js"


export const SET_BOARD = 'SET_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const SET_BOARDS = 'SET_BOARDS'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_BOARD_MSG = 'ADD_BOARD_MSG'
export const SET_FILTER_BY = 'SET_FILTER_BY'


const initialState = {
    boards: [],
    board: null,
    filterBy: boardService.getDefaultFilter()
}

export function boardReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_BOARDS: {
            const updatedBoards = action.boards.map(board => board)
            const updatedBoard = state.board ? updatedBoards.find(board => board._id === state.board._id) : null
            newState = { ...state, boards: updatedBoards, board: updatedBoard }
            break
        }
        case SET_BOARD: {
            const updatedBoards = state.boards.map(board => board._id === action.board._id ? action.board : board)
            newState = { ...state, board: action.board, boards: updatedBoards }
            break
        }
        case REMOVE_BOARD: {
            const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
            const boards = state.boards.filter(board => board._id !== action.boardId)
            newState = { ...state, boards, lastRemovedBoard }
            break
        }
        case ADD_BOARD: {
            const updatedBoards = [...state.boards, action.board]
            newState = { ...state, board: action.board, boards: updatedBoards }
            break
        }

        case UPDATE_BOARD: {
            const updatedBoards = state.boards.map(board => board._id === action.board._id ? action.board : board)
            newState = { ...state, board: action.board, boards: updatedBoards }
            break
        }
        case SET_FILTER_BY: {
            newState = { ...state, filterBy: action.filterBy }
            break
        }
        default:

    }
    return newState
}
