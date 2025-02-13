

import React from 'react'

import { Routes, Route } from 'react-router'
import { DebugPage } from './pages/DebugPage.jsx'
import { BoardIndex } from './pages/BoardIndex.jsx'
import { TaskDetails } from './pages/TaskDetails.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'


export function RootCmp() {
    return (
        <div className="main-container">
            <main>
                <Routes>
                    <Route path="/" element={<BoardIndex />} />
                    <Route path="/:boardId" element={<BoardDetails />}>
                        <Route path="/:boardId/task/:taskId" element={<TaskDetails />}/>
                    </Route>
                    <Route path='/task' element={<TaskDetails/>}></Route>
                    <Route path="/debug" element={<DebugPage />} />
                </Routes>
            </main>
        </div>
    )
}


