

const { DEV, VITE_LOCAL } = import.meta.env
import { httpService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BASE_URL = 'auth/'
const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

function _setLoggedinUser(user) {
    const userToSave = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        score: user.score || 10000,
        isAdmin: user.isAdmin
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(userToSave))
    return userToSave
}

export const localUserService = {
    getById: async (userId) => {
        try {
            return await storageService.get(STORAGE_KEY, userId)
        } catch (error) {
            console.error(`Failed to get user ${userId}:`, error)
            throw error
        }
    },

    getUsers: async () => {
        try {
            const users = await storageService.query(STORAGE_KEY)
            return users.map(user => {
                delete user.password
                return user
            })
        } catch (error) {
            console.error('Failed to get users:', error)
            throw error
        }
    },

    remove: async (userId) => {
        try {
            await storageService.remove(STORAGE_KEY, userId)
        } catch (error) {
            console.error(`Failed to remove user ${userId}:`, error)
            throw error
        }
    },

    update: async ({ _id, score }) => {
        try {
            const user = await storageService.get(STORAGE_KEY, _id)
            user.score = score
            await storageService.put(STORAGE_KEY, user)

            const loggedinUser = localUserService.getLoggedinUser()
            if (loggedinUser?._id === user._id) _setLoggedinUser(user)

            return user
        } catch (error) {
            console.error(`Failed to update user ${_id}:`, error)
            throw error
        }
    },

    login: async ({ username, password }) => {
        try {
            const users = await storageService.query(STORAGE_KEY)
            const user = users.find(user => user.username === username)
            if (!user) return Promise.reject('Invalid login')
            return _setLoggedinUser(user)
        } catch (error) {
            console.error('Login failed:', error)
            throw error
        }
    },

    signup: async ({ username, password, fullname, imgUrl }) => {
        try {
            const userToSave = {
                username,
                password,
                fullname,
                imgUrl: imgUrl || 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
                score: 10000
            }
            const user = await storageService.post(STORAGE_KEY, userToSave)
            return _setLoggedinUser(user)
        } catch (error) {
            console.error('Signup failed:', error)
            throw error
        }
    },

    logout: async () => {
        try {
            sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
            return Promise.resolve()
        } catch (error) {
            console.error('Logout failed:', error)
            throw error
        }
    },

    getLoggedinUser: () => {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
    }
}

export const remoteUserService = {
    getById: async (userId) => {
        try {
            return await httpService.get(`user/${userId}`)
        } catch (error) {
            console.error(`Failed to get user ${userId}:`, error)
            throw error
        }
    },

    getUsers: async (txt = '') => {
        try {
            return await httpService.get(`user`,{txt})
        } catch (error) {
            console.error('Failed to get users:', error)
            throw error
        }
    },

    remove: async (userId) => {
        try {
            return await httpService.delete(`user/${userId}`)
        } catch (error) {
            console.error(`Failed to remove user ${userId}:`, error)
            throw error
        }
    },

    update: async ({ _id, score }) => {
        try {
            const user = await httpService.put(`user/${_id}`, { _id, score })
            const loggedinUser = remoteUserService.getLoggedinUser()
            if (loggedinUser?._id === user._id) _setLoggedinUser(user)
            return user
        } catch (error) {
            console.error(`Failed to update user ${_id}:`, error)
            throw error
        }
    },

    login: async ({ username, password, loginType, oAuthCredentials }) => {
        try {
            const user = await httpService.post(BASE_URL + 'login', { username, password, loginType, oAuthCredentials })
            if (!user) return Promise.reject('Invalid login')
            return _setLoggedinUser(user)
        } catch (error) {
            console.error('Login failed:', error)
            throw error
        }
    },

    signup: async ({ username, password, fullname, imgUrl, oAuthCredentials, loginType }) => {
        try {
            const userToSave = {
                username,
                password,
                fullname,
                imgUrl: imgUrl || 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
                score: 10000,
                oAuthCredentials: oAuthCredentials,
                loginType: loginType,
            }
            const user = await httpService.post(BASE_URL + 'signup', userToSave)
            return _setLoggedinUser(user)
        } catch (error) {
            console.error('Signup failed:', error)
            throw error
        }
    },

    logout: async () => {
        try {
            sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN)
            return await httpService.post(BASE_URL + 'logout')
        } catch (error) {
            console.error('Logout failed:', error)
            throw error
        }
    },

    getLoggedinUser: () => {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
    }
}

function getEmptyUser() {
    return {
        username: '',
        password: '',
        fullname: '',
        // email: '',
        imgUrl: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png',
        mentions: []
    }
}

const service = (VITE_LOCAL === 'true') ? localUserService : remoteUserService
export const userService = { getEmptyUser, ...service }

if (DEV) window.userService = userService