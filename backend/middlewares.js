

import { logger } from './util.service.js'
import { authService } from './api/auth.routes.js'

export async function log(req, res, next) {
    if (req.route.func !== undefined) logger.info('Req was made', req.route.path, req.method, req.route.func)
    else logger.info('Req was made', req.route.path, req.method)
    next()
}

export async function print(req, res, next) {
    if (req.route.func !== undefined) console.log('Req was made', req.route.path, req.method, req.route.func)
    else console.log('Req was made', req.route.path, req.method)
    next()
}

export async function requireAuth(req, res, next) {
    if (!req?.cookies?.loginToken) {
        return res.status(401).send('Not Authenticated')
    }

    const loggedinUser = authService.validateToken(req.cookies.loginToken)
    if (!loggedinUser) return res.status(401).send('Not Authenticated')

    req.loggedinUser = loggedinUser
    next()
}

export async function requireAdmin(req, res, next) {
    if (!req?.cookies?.loginToken) {
        return res.status(401).send('Not Authenticated')
    }

    const loggedinUser = authService.validateToken(req.cookies.loginToken)
    if (!loggedinUser.isAdmin) {
        logger.warn(loggedinUser.fullname + 'attempted to perform admin action')
        res.status(403).end('Not Authorized')
        return
    }
    req.loggedinUser = loggedinUser
    next()
}