


export const SET_BOARD = 'SET_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const SET_BOARDS = 'SET_BOARDS'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_BOARD_MSG = 'ADD_BOARD_MSG'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const LOCAL_SET_BOARD = 'LOCAL_SET_BOARD'


const initialState = {
    boards: [],
    board: null,
    filterBy: {members: [], title: []},
}

export function boardReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_BOARDS: {
            console.log('SET BOARDS')
            const updatedBoards = action.boards.map(board => board)
            const updatedBoard = state.board ? updatedBoards.find(board => board._id === state.board._id) : null
            newState = { ...state, boards: updatedBoards, board: updatedBoard }
            break
        }
        case LOCAL_SET_BOARD: {
            console.log('LOCAL_SET_BOARD')
            // console.log('a', action.board._id)
            // console.log('b', action.board)
            newState = { ...state, board: action.board }
            break
        }
        case SET_BOARD: {
            console.log('SET BOARD | _id: ' + action.board._id + ' | id: ' + action.board.id + ' | title: ' + action.board.title)
            // console.log('a', action.board._id)
            // console.log('b', action.board)
            const updatedBoards = state.boards.map(board => board._id === action.board._id ? action.board : board)
            newState = { ...state, board: action.board, boards: updatedBoards }
            break
        }
        case REMOVE_BOARD: {
            console.log('REMOVE_BOARD')
            const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
            const boards = state.boards.filter(board => board._id !== action.boardId)
            newState = { ...state, boards, lastRemovedBoard }
            break
        }
        case ADD_BOARD: {
            console.log('ADD_BOARD')
            const updatedBoards = [...state.boards, action.board]
            newState = { ...state, board: action.board, boards: updatedBoards }
            break
        }

        case UPDATE_BOARD: {
            console.log('UPDATE_BOARD')
            const updatedBoards = state.boards.map(board => board._id === action.board._id ? action.board : board)
            const newBoard = state.board?._id === action.board._id ? action.board : state.board
            newState = { ...state, board: newBoard, boards: updatedBoards }
            break
        }
        case SET_FILTER_BY: {
            console.log('SET_FILTER_BY')
            newState = { ...state, filterBy: action.filterBy }
            break
        }
        default:

    }
    return newState
}
