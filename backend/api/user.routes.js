

import fs from 'fs'
import Cryptr from 'cryptr'
import express from 'express'
import { ObjectId } from 'mongodb'
import { requireAuth, requireAdmin } from '../middlewares.js'
import { logger, dbService, utilService } from '../util.service.js'


export const userService = {

    query: async function (filterBy = {}) {
        const criteria = userService._buildCriteria(filterBy)
        try {
            const collection = await dbService.getCollection('user')
            var users = await collection.find(criteria).sort({ nickname: -1 }).toArray()
            users = users.map(user => {
                delete user.password
                user.createdAt = user._id.getTimestamp()
                return user
            })
            return users
        } catch (err) {
            logger.error('cannot find users', err)
            throw err
        }
    },

    getById: async function (userId) {
        try {
            const collection = await dbService.getCollection('user')
            const user = await collection.findOne({ _id: ObjectId.createFromHexString(userId) })
            delete user.password
            return user
        } catch (err) {
            logger.error(`while finding user ${userId}`, err)
            throw err
        }
    },

    getByUsername: async function (username) {
        try {
            const collection = await dbService.getCollection('user')
            const user = await collection.findOne({ username })
            return user
        } catch (err) {
            logger.error(`while finding user ${username}`, err)
            throw err
        }
    },

    remove: async function (userId) {
        try {
            const collection = await dbService.getCollection('user')
            await collection.deleteOne({ _id: ObjectId.createFromHexString(userId) })
        } catch (err) {
            logger.error(`cannot remove user ${userId}`, err)
            throw err
        }
    },

    update: async function (user) {
        try {
            const userToSave = {
                _id: ObjectId.createFromHexString(user._id),
                username: user.username,
                fullname: user.fullname,
                isAdmin: user.isAdmin,
            }
            const collection = await dbService.getCollection('user')
            await collection.updateOne({ _id: userToSave._id }, { $set: userToSave })
            return userToSave
        } catch (err) {
            logger.error(`cannot update user ${user._id}`, err)
            throw err
        }
    },

    add: async function (user) {
        try {
            const existUser = await userService.getByUsername(user.username)
            if (existUser) throw new Error('Username taken')

            const userToAdd = {
                username: user.username,
                password: user.password,
                fullname: user.fullname,
                profilePicture: user.profilePicture,
                isAdmin: user.isAdmin || false,
                loginType: user.loginType,
            }
            const collection = await dbService.getCollection('user')
            await collection.insertOne(userToAdd)
            return userToAdd
        } catch (err) {
            logger.error('cannot insert user', err)
            throw err
        }
    },

    _buildCriteria: function (filterBy) {
        const criteria = {}
        if (filterBy.txt) {
            const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
            criteria.$or = [
                {
                    username: txtCriteria,
                },
                {
                    fullname: txtCriteria,
                },
            ]
        }
        if (filterBy.minBalance) {
            criteria.balance = { $gte: filterBy.minBalance }
        }
        if (filterBy.isAdmin) {
            criteria.isAdmin = filterBy.isAdmin
        }

        return criteria
    },
}




const cryptr = new Cryptr(process.env.SECRET1 || 'secret-puk-1234')



// controller
export async function onGetUser(req, res) {
    try {
        const user = await userService.getById(req.params.id)
        res.send(user)
    } catch (err) {
        logger.error('Failed to get user', err)
        res.status(500).send({ err: err })
    }
}

export async function onGetUsers(req, res) {
    try {
        const filterBy = {
            txt: req.query?.txt || '',
            minBalance: +req.query?.minBalance || 0
        }
        const users = await userService.query(filterBy)
        res.send(users)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(500).send({ err: err })
    }
}

export async function onDeleteUser(req, res) {
    try {
        await userService.remove(req.params.id)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete user', err)
        res.status(500).send({ err: err })
    }
}

export async function onUpdateUser(req, res) {
    try {
        const user = req.body
        const savedUser = await userService.update(user)
        res.send(savedUser)
    } catch (err) {
        logger.error('Failed to update user', err)
        res.status(500).send({ err: err })
    }
}

export const userRoutes = express.Router()

// middleware that is specific to this router
// userRoutes.use(requireAuth)

userRoutes.get('/', onGetUsers)
userRoutes.get('/:id', onGetUser)
userRoutes.put('/:id', onUpdateUser)

// userRoutes.put('/:id',  requireAuth, updateUser)
userRoutes.delete('/:id', requireAuth, requireAdmin, onDeleteUser)
