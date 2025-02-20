

import {userReducer} from './reducers/user.reducer'
import {boardReducer} from './reducers/board.reducer'


import {loadUsers, loadUser, removeUser, login, signup, logout, getEmptyUser} from './actions/user.actions'
import {loadBoards, loadBoard, addBoard, updateBoard, removeBoard, getEmptyBoard, getRandomBoard, getEmptyTask, getEmptyGroup} from './actions/board.actions'


export {
    // users
    loadUsers, loadUser, removeUser, login, signup, logout,

    // boards
    loadBoards, loadBoard, addBoard, updateBoard, removeBoard,

    // empty
    getEmptyBoard, getEmptyUser, getEmptyTask, getEmptyGroup,

    // random
    getRandomBoard,
}

import {legacy_createStore as createStore, combineReducers} from 'redux'

const rootReducer = combineReducers({
    userModule: userReducer,
    boardModule: boardReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)



import { socketService } from '../services/util.service.js'
import { ADD_BOARD, UPDATE_BOARD, REMOVE_BOARD } from './reducers/board.reducer.js'

socketService.on('board-added', (newBoard) => {
    store.dispatch({ type: ADD_BOARD, board: newBoard })
})

socketService.on('board-updated', (updatedBoard) => {
    store.dispatch({ type: UPDATE_BOARD, board: updatedBoard })
})

socketService.on('board-removed', (removedBoardId) => {
    store.dispatch({ type: REMOVE_BOARD, boardId: removedBoardId })
})
