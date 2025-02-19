

export const utilService = {
    makeId,
    debounce,
    makeLorem,
    animateCSS,
    saveToStorage,
    loadFromStorage,
    getRandomIntInclusive,
    random: {
        id: (length=6) => [...'x'.repeat(length)].map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 62)]).join(''),
        randint: (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min },
        choice: (arr) => { return arr[Math.floor(Math.random() * arr.length)] },
        date: (start, end) => { return new Date(Math.floor(Math.random() * (Date.parse(end) - Date.parse(start) + 1) + Date.parse(start))) },
        lorem: (length = 6) => { return [...'x'.repeat(length)].map(() => ['The sky','above','the port','was','the color of television','tuned','to','a dead channel','.','All','this happened','more or less','.','I','had','the story','bit by bit','from various people','and','as generally','happens','in such cases','each time','it','was','a different story','.','It','was','a pleasure','to','burn'][Math.floor(Math.random()*32)]).join(' ')},
        color: () => '#' + [...'x'.repeat(6)].map(() => '0123456789ABCDEF'[Math.floor(Math.random()*16)]).join(''),
        sample: (arr, n) => [...arr].sort(()=> .5 - Math.random()).slice(0, n)
    }
}

export const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data) // toy/
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

export const eventBus = createEventEmitter()
export const eventBusService = createEventEmitter()
export const SHOW_MSG = 'show-msg'

export const storageService = {
    get,
    put,
    post,
    query,
    remove,
}



export function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}

export function makeLorem(size = 100) {
    var words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn']
    var txt = ''
    while (size > 0) {
        size--
        txt += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return txt
}

export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

export function debounce(func, timeout = 300) {
    let timer
    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, timeout)
    }
}

export function getFirstName(fullname) {
    const firstName = fullname.trim().split(" ")[0]
    return firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase()
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

export const random = {
    id: (length = 6) => [...'x'.repeat(length)].map(() => 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 62)]).join(''),
    randint: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    },
    choice: (arr) => {
        return arr[Math.floor(Math.random() * arr.length)]
    },
    date: (start, end) => {
        return new Date(Math.floor(Math.random() * (Date.parse(end) - Date.parse(start) + 1) + Date.parse(start)))
    },
    lorem: (length = 6) => {
        return [...'x'.repeat(length)].map(() => ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'][Math.floor(Math.random() * 32)]).join(' ')
    },
    color: () => '#' + [...'x'.repeat(6)].map(() => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join(''),
    sample: (arr, n) => [...arr].sort(() => .5 - Math.random()).slice(0, n)
}

function animateCSS(el, animation) {
    const prefix = 'animate__'
    return new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`
        el.classList.add(`${prefix}animated`, animationName)
        function handleAnimationEnd(event) {
            event.stopPropagation()
            el.classList.remove(`${prefix}animated`, animationName)
            resolve('Animation ended')
        }
        el.addEventListener('animationend', handleAnimationEnd, { once: true })
    })
}

function sleep(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){  }
}

import Axios from 'axios'


const BASE_URL = process.env.NODE_ENV === 'production'
    ? '/api/'
    //    http://172.31.163.87:5173
    // : 'http://172.31.163.87:3030/api/' // 'http://localhost:3030/api/' // '//localhost:3030/api/'
    // : 'http://localhost:3030/api/'
    : '//localhost:3030/api/'

var axios = Axios.create({
    withCredentials: true
})

async function ajax(endpoint, method = 'GET', data = null) {
    console.log(('\n\n' + '---------' + '\n') + `AJAX CALL: ${BASE_URL}${endpoint}` + ('\n' + '---------' + '\n\n'))
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null,
            // withCredentials: true,
        })
        // console.log('fixed console')
        // console.log(`got response (${endpoint})`)
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: `, data)
        // console.dir(err)
        if (err.response && err.response.status === 401) {
            sessionStorage.clear()
        }
        throw err
    }
}

function createEventEmitter() {
    const listenersMap = {}
    window.mapmap = listenersMap
    return {
        on(evName, listener){
            listenersMap[evName] = (listenersMap[evName])? [...listenersMap[evName], listener] : [listener]
            return ()=>{
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener)
            }
        },
        emit(evName, data) {
            if (!listenersMap[evName]) return
            listenersMap[evName].forEach(listener => listener(data))
        }
    }
}

export function showUserMsg(msg) {
    eventBusService.emit('show-user-msg', msg)
}
export function showSuccessMsg(txt) {
    showUserMsg({txt, type: 'success'})
}
export function showErrorMsg(txt) {
    showUserMsg({txt, type: 'error'})
}

function query(entityType, delay = 500) {
    var entities = JSON.parse(localStorage.getItem(entityType)) || []
    return new Promise(resolve => setTimeout(() => resolve(entities), delay))
}

function get(entityType, entityId) {
    return query(entityType).then(entities => {
        const entity = entities.find(entity => entity._id === entityId)
        if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        return entity
    })
}

function post(entityType, newEntity) {
    newEntity = {...newEntity}
    newEntity._id = _makeId()
    return query(entityType).then(entities => {
        entities.push(newEntity)
        _save(entityType, entities)
        return newEntity
    })
}

function put(entityType, updatedEntity) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
        if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity._id} in: ${entityType}`)
        entities.splice(idx, 1, updatedEntity)
        _save(entityType, entities)
        return updatedEntity
    })
}

function remove(entityType, entityId) {
    return query(entityType).then(entities => {
        const idx = entities.findIndex(entity => entity._id === entityId)
        if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
        entities.splice(idx, 1)
        _save(entityType, entities)
    })
}

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

window.showUserMsg = showUserMsg
