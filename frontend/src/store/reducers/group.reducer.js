export const SET_GROUPS = 'SET_GROUPS'
export const SET_GROUP = 'SET_GROUP'
export const REMOVE_GROUP = 'REMOVE_GROUP'
export const ADD_GROUP = 'ADD_GROUP'
export const UPDATE_GROUP = 'UPDATE_GROUP'
export const ADD_GROUP_MSG = 'ADD_GROUP_MSG'

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
    const group1 = { _id: 'b101', vendor: 'Group ' + parseInt(Math.random() * 10), msgs: [] }
    const group2 = { _id: 'b102', vendor: 'Group ' + parseInt(Math.random() * 10), msgs: [] }

    state = groupReducer(state, { type: SET_GROUPS, groups: [group1] })
    console.log('After SET_GROUPS:', state)

    state = groupReducer(state, { type: ADD_GROUP, group: group2 })
    console.log('After ADD_GROUP:', state)

    state = groupReducer(state, { type: UPDATE_GROUP, group: { ...group2, vendor: 'Good' } })
    console.log('After UPDATE_GROUP:', state)

    state = groupReducer(state, { type: REMOVE_GROUP, groupId: group2._id })
    console.log('After REMOVE_GROUP:', state)

    const msg = { id: 'm' + parseInt(Math.random() * 100), txt: 'Some msg' }
    state = groupReducer(state, { type: ADD_GROUP_MSG, groupId: group1._id, msg })
    console.log('After ADD_GROUP_MSG:', state)

    state = groupReducer(state, { type: REMOVE_GROUP, groupId: group1._id })
    console.log('After REMOVE_GROUP:', state)
}

