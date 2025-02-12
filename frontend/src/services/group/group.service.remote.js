import { httpService } from '../http.service'

export const groupService = {
    query,
    getById,
    save,
    remove,
    addGroupMsg
}

async function query(filterBy = { txt: '', minSpeed: 0 }) {
    return httpService.get(`group`, filterBy)
}

function getById(groupId) {
    return httpService.get(`group/${groupId}`)
}

async function remove(groupId) {
    return httpService.delete(`group/${groupId}`)
}
async function save(group) {
    var savedGroup
    if (group._id) {
        savedGroup = await httpService.put(`group/${group._id}`, group)
    } else {
        savedGroup = await httpService.post('group', group)
    }
    return savedGroup
}

async function addGroupMsg(groupId, txt) {
    const savedMsg = await httpService.post(`group/${groupId}/msg`, { txt })
    return savedMsg
}