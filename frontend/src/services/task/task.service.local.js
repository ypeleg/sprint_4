
import { userService } from '../user'
import { makeId } from '../util.service'
import { storageService } from '../async-storage.service'

const STORAGE_KEY = 'task'

export const taskService = {
    query,
    getById,
    save,
    remove,
    addTaskMsg
}
window.cs = taskService


async function query(filterBy = { title: '', }) {
    var tasks = await storageService.query(STORAGE_KEY)
    const { title, sortField, sortDir } = filterBy

    if (title) {
        const regex = new RegExp(filterBy.title, 'i')
        tasks = tasks.filter(task => regex.test(task.vendor) || regex.test(task.description))
    }

    tasks = tasks.map(({ _id, vendor, speed, owner }) => ({ _id, vendor, speed, owner }))
    return tasks
}

function getById(taskId) {
    return storageService.get(STORAGE_KEY, taskId)
}

async function remove(taskId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, taskId)
}

async function save(task) {
    var savedTask
    if (task._id) {
        const taskToSave = {
            _id: task._id,
            speed: task.speed
        }
        savedTask = await storageService.put(STORAGE_KEY, taskToSave)
    } else {
        const taskToSave = {
            vendor: task.vendor,
            speed: task.speed,
            // Later, owner is set by the backend
            owner: userService.getLoggedinUser(),
            msgs: []
        }
        savedTask = await storageService.post(STORAGE_KEY, taskToSave)
    }
    return savedTask
}

async function addTaskMsg(taskId, title) {
    // Later, this is all done by the backend
    const task = await getById(taskId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        title
    }
    task.msgs.push(msg)
    await storageService.put(STORAGE_KEY, task)

    return msg
}