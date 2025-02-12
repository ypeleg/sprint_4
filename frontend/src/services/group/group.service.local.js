
import { storageService } from '../async-storage.service'
import { makeId } from '../util.service'
import { userService } from '../user'

const STORAGE_KEY = 'group'

export const groupService = {
    query,
    getById,
    save,
    remove,
    addGroupMsg
}
window.cs = groupService


async function query(filterBy = { title: '', }) {
    var groups = await storageService.query(STORAGE_KEY)
    const { title, sortField, sortDir } = filterBy

    if (title) {
        const regex = new RegExp(filterBy.title, 'i')
        groups = groups.filter(group => regex.test(group.vendor) || regex.test(group.description))
    }
    // if(sortField === 'vendor' || sortField === 'owner'){
    //     groups.sort((group1, group2) => 
    //         group1[sortField].localeCompare(group2[sortField]) * +sortDir)
    // }
    // if(sortField === 'speed'){
    //     groups.sort((group1, group2) => 
    //         (group1[sortField] - group2[sortField]) * +sortDir)
    // }

    groups = groups.map(({ _id, vendor, speed, owner }) => ({ _id, vendor, speed, owner }))
    return groups
}

function getById(groupId) {
    return storageService.get(STORAGE_KEY, groupId)
}

async function remove(groupId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, groupId)
}

async function save(group) {
    var savedGroup
    if (group._id) {
        const groupToSave = {
            _id: group._id,
            speed: group.speed
        }
        savedGroup = await storageService.put(STORAGE_KEY, groupToSave)
    } else {
        const groupToSave = {
            vendor: group.vendor,
            speed: group.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedGroup = await storageService.post(STORAGE_KEY, groupToSave)
    }
    return savedGroup
}

async function addGroupMsg(groupId, title) {
    // Later, this is all done by the backend
    const group = await getById(groupId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        title
    }
    group.msgs.push(msg)
    await storageService.put(STORAGE_KEY, group)

    return msg
}