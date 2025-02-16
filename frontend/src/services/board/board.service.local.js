

import {userService} from '../user'
import {getRandomBoard} from './data'
import {makeId} from '../util.service'
import {getEmptyBoard} from '../../store/store'
import {storageService} from '../async-storage.service'


const STORAGE_KEY = 'board'

export const boardService = {
    query,
    getById,
    save,
    remove,
    addBoardMsg
}
window.cs = boardService


async function query(filterBy = {title: '',}) {
    var boards = await storageService.query(STORAGE_KEY)
    if (boards.length === 0) {
        _createBoards()
        boards = await storageService.query(STORAGE_KEY)
    }
    const {title, sortField, sortDir} = filterBy

    if (title) {
        const regex = new RegExp(filterBy.title, 'i')
        boards = boards.filter(board => regex.test(board.vendor) || regex.test(board.description))
    }
    // if(sortField === 'vendor' || sortField === 'owner'){
    //     boards.sort((board1, board2) => 
    //         board1[sortField].localeCompare(board2[sortField]) * +sortDir)
    // }
    // if(sortField === 'speed'){
    //     boards.sort((board1, board2) => 
    //         (board1[sortField] - board2[sortField]) * +sortDir)
    // }

    // boards = boards.map(({ _id, vendor, speed, owner }) => ({ _id, vendor, speed, owner }))
    return boards
}

async function getById(boardId, filterBy = {title: ''}) {
    const {title, members, status,dueDate} = filterBy
    console.log(dueDate)
    let board = await storageService.get(STORAGE_KEY, boardId)
    if (title) {
        const regex = new RegExp(title, 'i')
        board = {
            ...board, groups: board.groups.map(group => {
                return {
                    ...group,
                    tasks: group.tasks.filter(task => regex.test(task.title))
                }
            })
        }
    }

    if (members?.length) {

        board = {
            ...board, groups: board.groups.map(group => {
                return {
                    ...group,
                    tasks: group.tasks.filter(task => (!task.members.length && members.includes('1')) ? task : task.members.some(member => {
                        return members.some(m1 => m1 === member._id)
                    }))
                }
            })
        }
    }
    if(dueDate?.length){
        board = {
            ...board, groups: board.groups.map(group => {
                return {
                    ...group,
                    tasks: group.tasks.filter(task => dueDate.some(date => {
                        if(date === 'no'){
                            return   task.dueDate===null
                        }else if(date === 'week'){
                            return new Date(new Date().setDate(new Date().getDate() + 7)).getTime() <  new Date(task.dueDate).getTime() &&  new Date(task.dueDate).getTime() > Date.now()
                        }else if(date == 'over'){
                            return  new Date(task.dueDate).getTime() < Date.now() 
                        }
                       
                    }))
                }
            })
        }
       
    }
    if(status){
        board = {
            ...board, groups: board.groups.map(group => {
                return {
                    ...group,
                    tasks: group.tasks.filter(task =>(status === 'done')? task.status === status:task.status !== 'done' )
                }
            })
        }

    }
    console.log(board)
    return board
}

async function remove(boardId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, boardId)
}

async function save(board) {
    var savedBoard
    if (board._id) {
        savedBoard = await storageService.put(STORAGE_KEY, board)
    } else {
        const boardToSave = {
            owner: userService.getLoggedinUser(),
            ...board
        }
        savedBoard = await storageService.post(STORAGE_KEY, boardToSave)
    }
    return savedBoard
}

async function addBoardMsg(boardId, title) {
    // Later, this is all done by the backend
    const board = await getById(boardId)

    const msg = {
        id: makeId(),
        by: userService.getLoggedinUser(),
        title
    }
    board.msgs.push(msg)
    await storageService.put(STORAGE_KEY, board)

    return msg
}

async function _createBoards() {

    for (let i = 0; i < 5; i++) {

        let board = getRandomBoard()
        console.log(board)
        await save(board)
    }
}



