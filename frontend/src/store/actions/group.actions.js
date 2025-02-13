

import { store } from '../store'
import { groupService } from '../../services/group'
import { ADD_GROUP, REMOVE_GROUP, SET_GROUPS, SET_GROUP, UPDATE_GROUP, ADD_GROUP_MSG } from '../reducers/group.reducer'

export async function getEmptyGroup() {
    return groupService.getEmptyGroup()
}

export async function loadGroups(filterBy) {
    try {
        const groups = await groupService.query(filterBy)
        store.dispatch(getCmdSetGroups(groups))
    } catch (err) {
        console.log('Cannot load groups', err)
        throw err
    }
}

export async function loadGroup(groupId) {
    try {
        const group = await groupService.getById(groupId)
        store.dispatch(getCmdSetGroup(group))
    } catch (err) {
        console.log('Cannot load group', err)
        throw err
    }
}


export async function removeGroup(groupId) {
    try {
        await groupService.remove(groupId)
        store.dispatch(getCmdRemoveGroup(groupId))
    } catch (err) {
        console.log('Cannot remove group', err)
        throw err
    }
}

export async function addGroup(group) {
    try {
        const savedGroup = await groupService.save(group)
        store.dispatch(getCmdAddGroup(savedGroup))
        return savedGroup
    } catch (err) {
        console.log('Cannot add group', err)
        throw err
    }
}

export async function updateGroup(group) {
    try {
        const savedGroup = await groupService.save(group)
        store.dispatch(getCmdUpdateGroup(savedGroup))
        return savedGroup
    } catch (err) {
        console.log('Cannot save group', err)
        throw err
    }
}

export async function addGroupMsg(groupId, txt) {
    try {
        const msg = await groupService.addGroupMsg(groupId, txt)
        store.dispatch(getCmdAddGroupMsg(msg))
        return msg
    } catch (err) {
        console.log('Cannot add group msg', err)
        throw err
    }
}

// Command Creators:
function getCmdSetGroups(groups) {
    return {
        type: SET_GROUPS,
        groups
    }
}
function getCmdSetGroup(group) {
    return {
        type: SET_GROUP,
        group
    }
}
function getCmdRemoveGroup(groupId) {
    return {
        type: REMOVE_GROUP,
        groupId
    }
}
function getCmdAddGroup(group) {
    return {
        type: ADD_GROUP,
        group
    }
}
function getCmdUpdateGroup(group) {
    return {
        type: UPDATE_GROUP,
        group
    }
}
function getCmdAddGroupMsg(msg) {
    return {
        type: ADD_GROUP_MSG,
        msg
    }
}
