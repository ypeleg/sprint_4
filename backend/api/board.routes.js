

import express from 'express'
import { ObjectId } from 'mongodb'
import { log } from '../middlewares.js'
import { requireAuth, requireAdmin } from '../middlewares.js'
import { logger, dbService, utilService } from '../util.service.js'



import fs from 'fs'

let boards = []

export const boardService = {

    query: async function (filterBy = {txt: ''}) {
        try {
            console.log('filterBy:', filterBy)

            // const criteria = {}
            // if (filterBy.txt) {
            //     criteria.name = { $regex: filterBy.txt, $options: 'i' }
            // }
            // if (filterBy.labels && filterBy.labels.length) {
            //     console.log('filterBy.labels:', filterBy.labels)
            //     criteria.labels = { $all: filterBy.labels }
            // }
            // if (filterBy.inStock) {
            //     criteria.inStock = true
            // }
            // if (filterBy.outOfStock) {
            //     criteria.inStock = false
            // }
            // if (filterBy.maxPrice) {
            //     criteria.price = { $lte: filterBy.maxPrice }
            // }

            const collection = await dbService.getCollection('board')
            // var boards = await collection.find(criteria).toArray()
            var boards = await collection.find().toArray()
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
            board.createdAt = board._id.getTimestamp()
            return board
        } catch (err) {
            logger.error(`while finding board ${boardId}`, err)
            throw err
        }
    },

    remove: async function (boardId) {
        try {
            const collection = await dbService.getCollection('board')
            const {deletedCount} = await collection.deleteOne({_id: ObjectId.createFromHexString(boardId)})
            return deletedCount
        } catch (err) {
            logger.error(`cannot remove board ${boardId}`, err)
            throw err
        }
    },

    save: async function (board, loggedinUser) {
        try {
            const collection = await dbService.getCollection('board')

            if (board._id) {
                const boardId = board._id
                const existingboard = await collection.findOne({ _id: new ObjectId(boardId) })
                if (!existingboard) throw new Error('No such board')

                // if (!loggedinUser?.isAdmin && existingboard.owner?._id !== loggedinUser?._id) {
                //     throw new Error('Not your board')
                // }

                const boardToUpdate = {
                    name: board.name,
                    price: board.price,
                    labels: board.labels,
                    inStock: board.inStock,
                    msgs: board.msgs
                }

                await collection.updateOne(
                    { _id: new ObjectId(boardId) },
                    { $set: boardToUpdate }
                )
                return { ...existingboard, ...boardToUpdate }

            } else {
                const newboard = {
                    name: board.name,
                    price: board.price,
                    labels: board.labels,
                    inStock: board.inStock,
                    createdAt: Date.now(),
                    owner: {
                        _id: loggedinUser?._id,
                        fullname: loggedinUser?.fullname,
                    },
                    msgs: board.msgs || []
                }
                const { insertedId } = await collection.insertOne(newboard)
                newboard._id = insertedId
                return newboard
            }
        } catch (err) {
            logger.error('cannot save board', err)
            throw err
        }
    },

    addboardMsg: async function (boardId, msg) {
        try {
            msg.id = utilService.makeId()

            const collection = await dbService.getCollection('board')
            await collection.updateOne({_id: ObjectId.createFromHexString(boardId)}, {$push: {msgs: msg}})
            return msg
        } catch (err) {
            logger.error(`cannot add board msg ${boardId}`, err)
            throw err
        }
    },

    removeboardMsg: async function (boardId, msgId) {
        try {
            const collection = await dbService.getCollection('board')
            await collection.updateOne({_id: ObjectId.createFromHexString(boardId)}, {$pull: {msgs: {id: msgId}}})
            return msgId
        } catch (err) {
            logger.error(`cannot add board msg ${boardId}`, err)
            throw err
        }
    }
}

// const boardService = boardServiceMongo
// export const boardService = boardServiceJSON

// controller
export async function onGetboards(req, res) {
    try {
        const filterBy = {
            txt: req.query.txt || '',
            labels: req.query.labels || [],
            inStock: req.query.inStock === 'true',
            outOfStock: req.query.outOfStock === 'true',
            maxPrice: +req.query.maxPrice || Infinity,
            sortby: req.query.sortby || { key: 'name', direction: 1 },
            pageIdx: +req.query.pageIdx || 0
        }

        const boards = await boardService.query(filterBy)
        res.json(boards)
    } catch (err) {
        logger.error('Failed to get boards', err)
        res.status(500).send({ err: 'Failed to get boards' })
    }
}

export async function onGetboardById(req, res) {
    try {
        const boardId = req.params.id
        const board = await boardService.getById(boardId)
        res.json(board)
    } catch (err) {
        logger.error('Failed to get board', err)
        res.status(500).send({ err: 'Failed to get board' })
    }
}

export async function onAddboard(req, res) {
    const { loggedinUser } = req

    try {
        const board = req.body
        board.owner = loggedinUser
        const addedboard = await boardService.save(board)
        res.json(addedboard)
    } catch (err) {
        logger.error('Failed to add board', err)
        res.status(500).send({ err: 'Failed to add board' })
    }
}

export async function onUpdateboard(req, res) {
    try {
        const board = { ...req.body, _id: req.params.id }
        console.log('board:', board)
        console.log('board._id:', board._id)
        const updatedboard = await boardService.save(board)
        res.json(updatedboard)
    } catch (err) {
        logger.error('Failed to update board', err)
        res.status(500).send({ err: 'Failed to update board' })
    }
}

export async function onRemoveboard(req, res) {
    try {
        const boardId = req.params.id
        const deletedCount = await boardService.remove(boardId)
        res.send(`${deletedCount} boards removed`)
    } catch (err) {
        logger.error('Failed to remove board', err)
        res.status(500).send({ err: 'Failed to remove board' })
    }
}

export async function onAddboardMsg(req, res) {
    const { loggedinUser } = req
    try {
        const boardId = req.params.id
        const msg = {
            txt: req.body.txt,
            by: loggedinUser,
            createdAt: Date.now(),
        }
        const savedMsg = await boardService.addboardMsg(boardId, msg)
        res.json(savedMsg)
    } catch (err) {
        logger.error('Failed to update board', err)
        res.status(500).send({ err: 'Failed to update board' })
    }
}

export async function onRemoveboardMsg(req, res) {
    const { loggedinUser } = req
    try {
        // const boardId = req.params.id
        const { id: boardId, msgId } = req.params

        const removedId = await boardService.removeboardMsg(boardId, msgId)
        res.send(removedId)
    } catch (err) {
        logger.error('Failed to remove board msg', err)
        res.status(500).send({ err: 'Failed to remove board msg' })
    }
}

export const boardRoutes = express.Router()


async function routOnGetboards(req, res, next) { req.route.func = 'getboards'; next() }
async function routOnGetboardById(req, res, next) { req.route.func = 'getboardById'; next() }
async function routOnAddboard(req, res, next) { req.route.func = 'addboard'; next() }
async function routOnUpdateboard(req, res, next) { req.route.func = 'updateboard'; next() }
async function routOnRemoveboard(req, res, next) { req.route.func = 'removeboard'; next() }
async function routOnAddboardMsg(req, res, next) { req.route.func = 'addboardMsg'; next() }
async function routOnRemoveboardMsg(req, res, next) { req.route.func = 'removeboardMsg'; next() }


boardRoutes.get('/', routOnGetboards, log, onGetboards)
boardRoutes.get('/:id', routOnGetboardById, log, onGetboardById)
boardRoutes.post('/', routOnAddboard, log, requireAuth, onAddboard)
boardRoutes.put('/:id', routOnUpdateboard, log, requireAuth, onUpdateboard)
boardRoutes.delete('/:id', routOnRemoveboard, log, requireAuth, onRemoveboard)
boardRoutes.post('/:id/msg', routOnAddboardMsg, log, requireAuth, onAddboardMsg)
boardRoutes.delete('/:id/msg/:msgId', routOnRemoveboardMsg, log, requireAuth, onRemoveboardMsg)
