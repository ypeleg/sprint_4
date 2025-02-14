

import { taskReducer } from './reducers/task.reducer'
import { userReducer } from './reducers/user.reducer'
import { boardReducer } from './reducers/board.reducer'
import { groupReducer } from './reducers/group.reducer'
import { systemReducer } from './reducers/system.reducer'


import { loadTasks, loadTask, addTask, updateTask, removeTask, getEmptyTask } from './actions/task.actions'
import { loadUsers, loadUser, removeUser, login, signup, logout, getEmptyUser } from './actions/user.actions'
import { loadBoards, loadBoard, addBoard, updateBoard, removeBoard, getEmptyBoard, getRandomBoard } from './actions/board.actions'
import { loadGroups, loadGroup, addGroup, updateGroup, removeGroup, getEmptyGroup } from './actions/group.actions'

export {
    loadTasks, loadTask, addTask, updateTask, removeTask,
    loadUsers, loadUser, removeUser, login, signup, logout,
    loadBoards, loadBoard, addBoard, updateBoard, removeBoard,
    loadGroups, loadGroup, addGroup, updateGroup, removeGroup,
    getEmptyBoard, getEmptyGroup, getEmptyTask, getEmptyUser,
    getRandomBoard,
}


import { legacy_createStore as createStore, combineReducers } from 'redux'


const rootReducer = combineReducers({
    taskModule: taskReducer,
    userModule: userReducer,
    groupModule: groupReducer,
    boardModule: boardReducer,
    systemModule: systemReducer,
})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)
