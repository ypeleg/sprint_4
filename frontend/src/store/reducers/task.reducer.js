export const SET_BOARDS = 'SET_BOARDS'
export const SET_BOARD = 'SET_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_BOARD_MSG = 'ADD_BOARD_MSG'

const initialState = {
    tasks: [],
    task: null
}

export function taskReducer(state = initialState, action) {
    var newState = state
    var tasks
    switch (action.type) {
        case SET_TASKS:
            newState = { ...state, tasks: action.tasks }
            break
        case SET_TASK:
            newState = { ...state, task: action.task }
            break
        case REMOVE_TASK:
            const lastRemovedTask = state.tasks.find(task => task._id === action.taskId)
            tasks = state.tasks.filter(task => task._id !== action.taskId)
            newState = { ...state, tasks, lastRemovedTask }
            break
        case ADD_TASK:
            newState = { ...state, tasks: [...state.tasks, action.task] }
            break
        case UPDATE_TASK:
            tasks = state.tasks.map(task => (task._id === action.task._id) ? action.task : task)
            newState = { ...state, tasks }
            break
        case ADD_TASK_MSG:
            newState = { ...state, task: { ...state.task, msgs: [...state.task.msgs || [], action.msg] } }
            break
        default:
    }
    return newState
}

// unitTestReducer()

function unitTestReducer() {
    var state = initialState
    const board1 = { _id: 'b101', vendor: 'Board ' + parseInt(Math.random() * 10), msgs: [] }
    const board2 = { _id: 'b102', vendor: 'Board ' + parseInt(Math.random() * 10), msgs: [] }

    state = boardReducer(state, { type: SET_BOARDS, boards: [board1] })
    console.log('After SET_BOARDS:', state)

    state = boardReducer(state, { type: ADD_BOARD, board: board2 })
    console.log('After ADD_BOARD:', state)

    state = boardReducer(state, { type: UPDATE_BOARD, board: { ...board2, vendor: 'Good' } })
    console.log('After UPDATE_BOARD:', state)

    state = boardReducer(state, { type: REMOVE_BOARD, boardId: board2._id })
    console.log('After REMOVE_BOARD:', state)

    const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
    state = boardReducer(state, { type: ADD_BOARD_MSG, boardId: board1._id, msg })
    console.log('After ADD_BOARD_MSG:', state)

    state = boardReducer(state, { type: REMOVE_BOARD, boardId: board1._id })
    console.log('After REMOVE_BOARD:', state)
}

