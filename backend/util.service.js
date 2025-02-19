

import fs  from 'fs'
import { config } from './config.js'
import { MongoClient } from 'mongodb'


const logsDir = './logs'
if (!fs.existsSync(logsDir)) { fs.mkdirSync(logsDir) }


export const utilService = {
    writeJsonFile,
    readJsonFile,
    makeId,
    exists,
}

function makeId(length = 5) {
    var txt = ''
    var possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

export const logger = {
    debug(...args) {
        if (process.env.NODE_NEV === 'production') return
        _doLog('DEBUG', ...args)
    },
    info(...args) {
        _doLog('INFO', ...args)
    },
    warn(...args) {
        _doLog('WARN', ...args)
    },
    error(...args) {
        _doLog('ERROR', ...args)
    }
}

function _getTime() {
    let now = new Date()
    return now.toLocaleString('he') //define the time format
}

function _isError(e) {
    return e && e.stack && e.message
}

function _doLog(level, ...args) {

    const strs = args.map(arg => {
        if (typeof arg ===  'string') {
        } else if (_isError(arg)) {
        } else if (arg instanceof Promise) {
            arg = 'Promise'
        } else {
            console.log('STRINGIFY', arg)
            arg = JSON.stringify(arg)
        }
        return arg
    })

    var line = strs.join(' | ')
    line = `${_getTime()} - ${level} - ${line} \n`
    console.log(line)
    fs.appendFile('./logs/backend.log', line, (err) =>{
        if (err) console.log('FATAL: cannot write to log file')
    })
}

export const dbService = {
    getCollection,
}

var dbConn = null

async function getCollection(collectionName) {
    try {
        const db = await _connect()
        const collection = await db.collection(collectionName)
        return collection
    } catch (err) {
        logger.error('Failed to get Mongo collection', err)
        throw err
    }
}

async function _connect() {
    if (dbConn) return dbConn
    try {
        // const client = await MongoClient.connect(config.dbURL, { useUnifiedTopology: true })
        const client = await MongoClient.connect(config.dbURL)
        const db = client.db(config.dbName)
        dbConn = db
        return db
    } catch (err) {
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}

function exists(path) {
    return fs.existsSync(path)
}

// function readJsonFile(path) {
// 	const str = fs.readFileSync(path, 'utf8')
// 	const json = JSON.parse(str)
// 	return json
// }

async function waitForPromise(promisedFunc) {
    try {
        await promisedFunc()
    } catch (error) {
        throw error
    }
}

function readJsonFile(path) {
    while (true) {
        try {
            var str = fs.readFileSync(path, 'utf8')
            var json = JSON.parse(str)
            break
        } catch (err) {
            console.log('can not read: ', path)
            // console.log(err)
        }
    }
    return json
}

function writeJsonFile(data, path = 'data/user.json') {
    console.log('called save user')
    try {
        fs.writeFileSync(path, JSON.stringify(data, null, 2))
        console.log('File saved successfully')
    } catch (err) {
        console.log('Error writing file:', err)
    }
}

function makeIda(length = 5) {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}
