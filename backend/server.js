

import http from 'http'
import cors  from 'cors'
import express  from 'express'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import cookieParser from 'cookie-parser'
import { logger } from './util.service.js'
import { setupSocketAPI } from './api/socket.service.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

logger.info('server.js loaded...')

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
    console.log('__dirname: ', __dirname)
} else {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3030',
            'http://localhost:3030',

            'http://127.0.0.1:8080',
            'http://localhost:8080',

            'http://127.0.0.1:5173',
            'http://localhost:5173',

            'http://172.31.163.87:3030',
            'http://172.31.163.87:5173',
            'http://172.31.163.87:8080',

        ],
        credentials: true
    }
    app.use(cors(corsOptions))
}


import { boardRoutes } from './api/board.routes.js'
import { userRoutes } from './api/user.routes.js'
import { authRoutes } from './api/auth.routes.js'

app.use('/api/board', boardRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)

const server = http.createServer(app)
setupSocketAPI(server)

import bcrypt from 'bcrypt'
import { userService } from './api/user.routes.js'


const DEFAULT_ADMIN = {
    username: 'admin',
    password: 'admin',
    fullname: 'theadmin',
    isAdmin: true,
}

export async function addAdmin() {
    const admins = await userService.query({ isAdmin: true })

    if (!admins || admins.length === 0) {

        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(DEFAULT_ADMIN.password, saltRounds)

        const adminUser = {
            username: DEFAULT_ADMIN.username,
            password: hashedPassword,
            fullname: DEFAULT_ADMIN.fullname,
            isAdmin: true,
        }

        await userService.add(adminUser)
        logger.info('Default admin created successfully!')
    } else {
        logger.info('Admin user already exists.')
    }
}


addAdmin()

const port = process.env.PORT || 3030

app.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})