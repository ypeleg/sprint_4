export const SET_BOARDS = 'SET_BOARDS'
export const SET_BOARD = 'SET_BOARD'
export const REMOVE_BOARD = 'REMOVE_BOARD'
export const ADD_BOARD = 'ADD_BOARD'
export const UPDATE_BOARD = 'UPDATE_BOARD'
export const ADD_BOARD_MSG = 'ADD_BOARD_MSG'

const initialState = {
    groups: [],
    group: null
}

export function groupReducer(state = initialState, action) {
    var newState = state
    var groups
    switch (action.type) {
        case SET_GROUPS:
            newState = { ...state, groups: action.groups }
            break
        case SET_GROUP:
            newState = { ...state, group: action.group }
            break
        case REMOVE_GROUP:
            const lastRemovedGroup = state.groups.find(group => group._id === action.groupId)
            groups = state.groups.filter(group => group._id !== action.groupId)
            newState = { ...state, groups, lastRemovedGroup }
            break
        case ADD_GROUP:
            newState = { ...state, groups: [...state.groups, action.group] }
            break
        case UPDATE_GROUP:
            groups = state.groups.map(group => (group._id === action.group._id) ? action.group : group)
            newState = { ...state, groups }
            break
        case ADD_GROUP_MSG:
            newState = { ...state, group: { ...state.group, msgs: [...state.group.msgs || [], action.msg] } }
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

