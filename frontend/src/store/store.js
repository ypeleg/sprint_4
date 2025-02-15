

import { userReducer } from './reducers/user.reducer'
import { boardReducer } from './reducers/board.reducer'


import { loadUsers, loadUser, removeUser, login, signup, logout, getEmptyUser } from './actions/user.actions'
import { loadBoards, loadBoard, addBoard, updateBoard, removeBoard, getEmptyBoard, getRandomBoard, getEmptyTask, getEmptyGroup } from './actions/board.actions'

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

import { legacy_createStore as createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    userModule: userReducer,
    boardModule: boardReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)
