

import express from 'express'
import { ObjectId } from 'mongodb'
import { log, print } from '../middlewares.js'
import { requireAuth, requireAdmin } from '../middlewares.js'
import { logger, dbService, utilService } from '../util.service.js'



import fs from 'fs'

const SECURED = false
let boards = []

export const boardService = {

    query: async function (filterBy = {txt: ''}) {
        try {
            console.log('filterBy:', filterBy)
            
            const criteria = {}
            if (filterBy._id) {
                criteria._id = ObjectId.createFromHexString(filterBy._id)
            }
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
            var boards = await collection.find(criteria).toArray()
            // var boards = await collection.find().toArray()
            return boards
        } catch (err) {
            logger.error('cannot find boards', err)
            throw err
        }
    },

    getById: async function (boardId,filterBy = {}) {
        try {
           
            const pipeline = getPipeLine(filterBy,boardId)
            const collection = await dbService.getCollection('board')
            const board = await collection.aggregate(pipeline).toArray()
            
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

                const boardToUpdate = structuredClone(board)
                delete boardToUpdate._id;
                await collection.updateOne(
                    { _id: new ObjectId(boardId) },
                    { $set: boardToUpdate }
                )
                return { ...existingboard, ...boardToUpdate }

            } else {
                const newboard = structuredClone(board)
                const { insertedId } = await collection.insertOne(newboard)
                newboard._id = insertedId
                return newboard
            }
        } catch (err) {
            logger.error('cannot save board', err)
            throw err
        }
    },


}

// const boardService = boardServiceMongo
// export const boardService = boardServiceJSON

// controller
export async function onGetboards(req, res) {
    try {
        console.log('onGetboards', req.query)
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
        const board = await boardService.getById(boardId,filterBy)
        res.json(board)
    } catch (err) {
        logger.error('Failed to get board', err)
        res.status(500).send({ err: err })
    }
}

export async function onAddboard(req, res) {
    if (SECURED) {
        const {loggedinUser} = req
    }
    try {
        const board = req.body
        if (SECURED) board.owner = loggedinUser
        const addedboard = await boardService.save(board)
        res.json(addedboard)
    } catch (err) {
        logger.error('Failed to add board', err)
        res.status(500).send({ err: err })
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
        res.status(500).send({ err: err })
    }
}

export async function onRemoveboard(req, res) {
    try {
        const boardId = req.params.id
        const deletedCount = await boardService.remove(boardId)
        res.send(`${deletedCount} boards removed`)
    } catch (err) {
        logger.error('Failed to remove board', err)
        res.status(500).send({ err: err })
    }
}
function getPipeLine(filteryBy,boardId){
        const {title,members,dueDate,status} = filteryBy
    return [ { $match: { _id: new ObjectId(boardId) } }, 

    
    ...(title ? [
      {
        $set: {
          "groups": {
            $map: {
              input: "$groups",
              as: "group",
              in: {
                $mergeObjects: [
                  "$$group",
                  {
                    tasks: {
                      $filter: {
                        input: "$$group.tasks",
                        as: "task",
                        cond: {
                          $regexMatch: {
                            input: "$$task.title",
                            regex: new RegExp(title, 'i'),
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    ] : []),
  
    ...(members?.length ? [
      {
        $set: {
          "groups": {
            $map: {
              input: "$groups",
              as: "group",
              in: {
                $mergeObjects: [
                  "$$group",
                  {
                    tasks: {
                      $filter: {
                        input: "$$group.tasks",
                        as: "task",
                        cond: {
                          $or: [
                            {
                              $and: [
                                { $eq: [{ $size: "$$task.members" }, 0] },
                                { $in: ["1", members] }
                              ]
                            },
                            {
                              $in: [
                                { $arrayElemAt: ["$$task.members._id", 0] },
                                members
                              ]
                            }
                          ]
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    ] : []),
  
   
    ...(dueDate?.length ? [
        {
          $set: {
            "groups": {
              $map: {
                input: "$groups",
                as: "group",
                in: {
                  $mergeObjects: [
                    "$$group",
                    {
                      tasks: {
                        $filter: {
                          input: "$$group.tasks",
                          as: "task",
                          cond: {
                            $or: [
                       
                              {
                                $and: [
                                  { $eq: [{ $ifNull: ["$$task.dueDate", null] }, null] },  
                                  { $in: ["no", dueDate] } 
                                ]
                              },
                           
                              {
                                $and: [
                                    { $in: ["week", dueDate] },
                                    {
                                      $gt: [
                                        { $dateFromString: { dateString: "$$task.dueDate" } }, 
                                        new Date() 
                                      ]
                                    },
                                    {
                                      $lt: [
                                        { $dateFromString: { dateString: "$$task.dueDate" } },
                                        new Date(new Date().setDate(new Date().getDate() + 7))
                                      ]
                                    }
                                  
                                ]
                              },
                         
                              {
                                $and: [
                                  { $in: ["over", dueDate] },
                                  {  $lt: [
                                    { $dateFromString: { dateString: "$$task.dueDate" } }, 
                                    new Date()
                                  ] }
                                ]
                              }
                            ]
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ] : []),
    
      ...(status ? [
        {
          $set: {
            "groups": {
              $map: {
                input: "$groups",
                as: "group",
                in: {
                  $mergeObjects: [
                    "$$group",
                    {
                      tasks: {
                        $filter: {
                          input: "$$group.tasks",
                          as: "task",
                          cond: {
                            $cond: {
                              if: { $eq: [status, "done"] }, 
                              then: { $eq: ["$$task.status", "done"] }, 
                              else: { $ne: ["$$task.status", "done"] }  
                            }
                          }
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        }
      ] : []),
  
    
  ]
        
}
export const boardRoutes = express.Router()


async function routOnGetboards(req, res, next) { req.route.func = 'getboards'; next() }
async function routOnGetboardById(req, res, next) { req.route.func = 'getboardById'; next() }
async function routOnAddboard(req, res, next) { req.route.func = 'addboard'; next() }
async function routOnUpdateboard(req, res, next) { req.route.func = 'updateboard'; next() }
async function routOnRemoveboard(req, res, next) { req.route.func = 'removeboard'; next() }


boardRoutes.get('/', routOnGetboards, print, onGetboards)
boardRoutes.get('/:id', routOnGetboardById, print, onGetboardById)
boardRoutes.post('/', routOnAddboard, print, onAddboard) // requireAuth
boardRoutes.put('/:id', routOnUpdateboard, print, onUpdateboard) // requireAuth
boardRoutes.delete('/:id', routOnRemoveboard, print, onRemoveboard) // requireAuth
