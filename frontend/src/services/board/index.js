

import {getRandomBoard} from './data.js'
const {DEV, VITE_LOCAL} = import.meta.env
import {boardService as local} from './board.service.local'
import {boardService as remote} from './board.service.remote'

// localStorage.clear()

function getEmptyBoard() {
    return getRandomBoard()
}

function getDefaultFilter() {
    return {
        title: '',
        members: [],
        labels: [],
        status:'',
        dueDate:[]
    }
}

const service = (VITE_LOCAL === 'true') ? local : remote
export const boardService = {getEmptyBoard, getDefaultFilter, ...service}

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.boardService = boardService



