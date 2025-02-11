import { MongoClient } from 'mongodb'

import { config } from '../config/index.js'
import { logger } from './logger.service.js'

export const dbService = { getCollection }

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
		const client = await MongoClient.connect(config.dbURL)
		return dbConn = client.db(config.dbName)
	} catch (err) {
		logger.error('Cannot Connect to DB', err)
		throw err
	}
}


// MongoDB Atlas credentials:
// username: user
// pass: 12345678a
// url: mongodb+srv://user:12345678a@cluster0.joqz6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

