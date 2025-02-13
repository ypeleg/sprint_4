const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { groupService as local } from './group.service.local'
import { groupService as remote } from './group.service.remote'

function getEmptyGroup() {
    return {
        archivedAt:null,
        id: makeId(),
        style:{ backgroundColor: "#FF9B85" },
        tasks:[],
        title:""
    }
}

function getDefaultFilter() {
    return {
        txt: '',
        minSpeed: '',
        sortField: '',
        sortDir: '',
    }
}

const service = (VITE_LOCAL === 'true') ? local : remote
export const groupService = { getEmptyGroup, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.groupService = groupService
