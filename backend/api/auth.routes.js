


import Cryptr from 'cryptr'
import bcrypt from 'bcrypt'
import express from 'express'
import { userService } from './user.routes.js'
import { logger, dbService, utilService } from '../util.service.js'

const cryptr = new Cryptr(process.env.SECRET1 || 'Secret-Puk-1234')


export const authService = {

    login: async function (username, password) {
        logger.debug(`auth.service - login with username: ${username}`)

        const user = await userService.getByUsername(username)
        if (!user) throw new Error('Invalid username or password')

        const match = await bcrypt.compare(password, user.password)
        if (!match) throw new Error('Invalid username or password')

        delete user.password
        return user
    },

    signup: async function (username, password, fullname) {
        const saltRounds = 10

        logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
        if (!username || !password || !fullname) throw new Error('Missing details')

        const hash = await bcrypt.hash(password, saltRounds)
        return userService.add({ username, password: hash, fullname })
    },

    getLoginToken: function (user) {
        const userInfo = { _id: user._id, fullname: user.fullname, isAdmin: user.isAdmin }
        return cryptr.encrypt(JSON.stringify(userInfo))
    },

    validateToken: function (loginToken) {
        try {
            const json = cryptr.decrypt(loginToken)
            const loggedinUser = JSON.parse(json)
            return loggedinUser
        } catch (err) {
            console.log('Invalid login token')
        }
        return null
    },
}



// controller
export async function onLogin(req, res) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password)
        const loginToken = authService.getLoginToken(user)

        logger.info('User login: ', user)
        res.cookie('loginToken', loginToken)

        res.json(user)
    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: err })
    }
}

export async function onSignup(req, res) {
    try {
        const { username, password, fullname } = req.body

        // IMPORTANT!!!
        // Never write passwords to log file!!!
        // logger.debug(fullname + ', ' + username + ', ' + password)
        debugger
        const account = await authService.signup(username, password, fullname)
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account))

        const user = await authService.login(username, password)
        const loginToken = authService.getLoginToken(user)

        res.cookie('loginToken', loginToken)
        res.json(user)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(500).send({ err: err })
    }
}

export async function onLogout(req, res) {
    try {
        res.clearCookie('loginToken')
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: err })
    }
}

export const authRoutes = express.Router()

authRoutes.post('/login', onLogin)
authRoutes.post('/signup', onSignup)
authRoutes.post('/logout', onLogout)