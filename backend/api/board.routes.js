

import fs from 'fs'
import express from 'express'
import { ObjectId } from 'mongodb'
import { log, print } from '../middlewares.js'
import { requireAuth, requireAdmin } from '../middlewares.js'
import { logger, dbService, utilService } from '../util.service.js'


import { socketService } from './socket.service.js'

const SECURED = false



// Service
export const boardService = {
    async query(filterBy = { txt: '' }) {
        try {
            console.log('filterBy:', filterBy)
            const criteria = {}
            if (filterBy._id) {
                criteria._id = ObjectId.createFromHexString(filterBy._id)
            }
            const collection = await dbService.getCollection('board')
            const boards = await collection.find(criteria).toArray()
            return boards
        } catch (err) {
            logger.error('cannot find boards', err)
            throw err
        }
    },

    getById: async function (boardId) {
        try {
            const collection = await dbService.getCollection('board')
            const board = await collection.findOne({_id: ObjectId.createFromHexString(boardId)})
            // board.createdAt = board._id.getTimestamp()
            return board
        } catch (err) {
            logger.error(`while finding board ${boardId}`, err)
            throw err
        }
    },

    async remove(boardId) {
        try {
            const collection = await dbService.getCollection('board')
            const { deletedCount } = await collection.deleteOne({ _id: ObjectId.createFromHexString(boardId) })
            return deletedCount
        } catch (err) {
            logger.error(`cannot remove board ${boardId}`, err)
            throw err
        }
    },

    async save(board, loggedinUser) {
        try {
            const collection = await dbService.getCollection('board')
            if (board._id) {
                // UPDATE
                const boardId = board._id
                const existingBoard = await collection.findOne({ _id: new ObjectId(boardId) })
                if (!existingBoard) throw new Error('No such board')
                // if security needed, enforce it here
                const boardToUpdate = structuredClone(board)
                delete boardToUpdate._id
                await collection.updateOne(
                    { _id: new ObjectId(boardId) },
                    { $set: boardToUpdate }
                )
                return { ...existingBoard, ...boardToUpdate }
            } else {
                // CREATE
                const newBoard = structuredClone(board)
                const { insertedId } = await collection.insertOne(newBoard)
                newBoard._id = insertedId
                return newBoard
            }
        } catch (err) {
            logger.error('cannot save board', err)
            throw err
        }
    },
}

// Controller
export async function onGetboards(req, res) {
    try {
        const filterBy = req.query
        const boards = await boardService.query(filterBy)
        res.json(boards)
    } catch (err) {
        logger.error('Failed to get boards', err)
        res.status(500).send({ err: err })
    }
}

export async function onGetboardById(req, res) {
    try {
        const boardId = req.params.id
        const filterBy = req.query
        const board = await boardService.getById(boardId, filterBy)
        res.json(board)
    } catch (err) {
        logger.error('Failed to get board', err)
        res.status(500).send({ err: err })
    }
}

export async function onAddboard(req, res) {
    if (SECURED) {
        const { loggedinUser } = req
    }
    try {
        const board = req.body
        if (SECURED) board.owner = loggedinUser
        const addedBoard = await boardService.save(board)
        const userId = (SECURED && req.loggedinUser)? req.loggedinUser._id : 'anonymous'
        socketService.broadcast({
            type: 'board-added',
            data: addedBoard,
            userId
        })
        res.json(addedBoard)
    } catch (err) {
        logger.error('Failed to add board', err)
        res.status(500).send({ err: err })
    }
}

export async function onUpdateboard(req, res) {
    try {
        const board = { ...req.body, _id: req.params.id }
        const updatedBoard = await boardService.save(board)
        const userId = (SECURED && req.loggedinUser)? req.loggedinUser._id : 'anonymous'
        socketService.broadcast({
            type: 'board-updated',
            data: updatedBoard,
            userId
        })
        res.json(updatedBoard)
    } catch (err) {
        logger.error('Failed to update board', err)
        res.status(500).send({ err: err })
    }
}

export async function onRemoveboard(req, res) {
    try {
        const boardId = req.params.id
        const deletedCount = await boardService.remove(boardId)
        if (deletedCount > 0) {
            const userId = (SECURED && req.loggedinUser)? req.loggedinUser._id : 'anonymous'
            socketService.broadcast({
                type: 'board-removed',
                data: boardId,
                userId
            })
        }
        res.send(`${deletedCount} boards removed`)
    } catch (err) {
        logger.error('Failed to remove board', err)
        res.status(500).send({ err: err })
    }
}

// Routes
export const boardRoutes = express.Router()

async function routOnAddboard(req, res, next) { req.route.func = 'addboard'; next() }
async function routOnGetboards(req, res, next) { req.route.func = 'getboards'; next() }
async function routOnRemoveboard(req, res, next) { req.route.func = 'removeboard'; next() }
async function routOnUpdateboard(req, res, next) { req.route.func = 'updateboard'; next() }
async function routOnGetboardById(req, res, next) { req.route.func = 'getboardById'; next() }


boardRoutes.post('/', routOnAddboard, print, onAddboard) // requireAuth if needed
boardRoutes.get('/', routOnGetboards, print, onGetboards)
boardRoutes.put('/:id', routOnUpdateboard, print, onUpdateboard) // requireAuth
boardRoutes.get('/:id', routOnGetboardById, print, onGetboardById)
boardRoutes.delete('/:id', routOnRemoveboard, print, onRemoveboard) // requireAuth
