

export const SET_GROUP = 'SET_GROUP'
export const ADD_GROUP = 'ADD_GROUP'
export const SET_GROUPS = 'SET_GROUPS'
export const REMOVE_GROUP = 'REMOVE_GROUP'
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

