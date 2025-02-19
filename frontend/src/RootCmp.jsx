

import React from 'react'

import { Login } from './pages/Login.jsx'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage.jsx'
import { DebugPage } from './pages/DebugPage.jsx'
import { BoardIndex } from './pages/BoardIndex.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <main>
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route path="/" element={<BoardIndex />} />
                    <Route path="/:boardId" element={<BoardDetails />}>
                    </Route>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/debug" element={<DebugPage />} />
                </Routes>
            </main>
        </div>
    )
}


