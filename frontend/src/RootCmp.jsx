

import React from 'react'

import { Routes, Route } from 'react-router'
import { DebugPage } from './pages/DebugPage.jsx'
import { BoardIndex } from './pages/BoardIndex.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'
import { LoginSignup } from './pages/LoginSignup.jsx'
import { Signup } from './pages/Signup.jsx'
import { Login } from './pages/Login.jsx'
import { HomePage } from './pages/HomePage.jsx'

export function RootCmp() {
    return (
        <div className="main-container">
            <main>
                <Routes>
                <Route path='/home' element={<HomePage/>}/>
                    <Route path="/" element={<BoardIndex />} />
                    <Route path="/:boardId" element={<BoardDetails />}>
                   
                    </Route>
                    <Route path="/login" element={<LoginSignup />}>
                        <Route index element={<Login />} />  {/* Default is Login */}
                        <Route path="signup" element={<Signup />} />  {/* Relative path, no `/` */}
                    </Route>
                    <Route path="/debug" element={<DebugPage />} />
                </Routes>
            </main>
        </div>
    )
}


