

import React from 'react'

import { Login } from './pages/Login.jsx'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage.jsx'
import { DebugPage } from './pages/DebugPage.jsx'
import { BoardIndex } from './pages/BoardIndex.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'



import { useEffect, useRef, useState } from "react"
import { eventBusService } from "./services/util.service.js"
import { VedioCall } from './pages/VedioCall.jsx'


export function UserMsg() {

    const [msg, setMsg] = useState(null)
    const timeoutIdRef = useRef()

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
            setMsg(msg)
            if (timeoutIdRef.current) {
                timeoutIdRef.current = null
                clearTimeout(timeoutIdRef.current)
            }
            timeoutIdRef.current = setTimeout(closeMsg, 3000)
        })
        return unsubscribe
    }, [])

    function closeMsg() {
        setMsg(null)
    }

    if (!msg) return <span></span>
    return (
        <section className={`user-msg ${msg.type}`}>
            <button onClick={closeMsg}>x</button>
            {msg.txt}
        </section>
    )
}



export function RootCmp() {
    return (
        <div className="main-container">
            {/*<UserMsg />*/}
            <main>
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route path="/" element={<BoardIndex />} />
                    <Route path="/:boardId" element={<BoardDetails />}>
                    </Route>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/debug" element={<DebugPage />} />
                    <Route path='/video' element={<VedioCall/>}/>
                        <Route path='/video/:roomId' element={<VedioCall/>}/>
                </Routes>
            </main>

        </div>
    )
}


