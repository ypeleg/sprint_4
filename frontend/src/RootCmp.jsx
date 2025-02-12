
import React from 'react'
import { Routes, Route } from 'react-router'

// import { Login } from './pages/Login.jsx'
// import { ChatApp } from './pages/Chat.jsx'
// import { Signup } from './pages/Signup.jsx'
// import { HomePage } from './pages/HomePage'
// import { UserMsg } from './cmps/UserMsg.jsx'
// import { AppFooter } from './cmps/AppFooter'
// import { AppHeader } from './cmps/AppHeader'
// import { CarDetails } from './pages/CarDetails'
// import { CarIndex } from './pages/CarIndex.jsx'
// import { UserDetails } from './pages/UserDetails'
// import { AdminIndex } from './pages/AdminIndex.jsx'
// import { LoginSignup } from './pages/LoginSignup.jsx'
// import { ReviewIndex } from './pages/ReviewIndex.jsx'
// import { AboutUs, AboutTeam, AboutVision } from './pages/AboutUs'


import { BoardIndex } from './pages/BoardIndex.jsx'
import { DebugPage } from './pages/DebugPage.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'


export function RootCmp() {
    return (
        <div className="main-container">
            {/* <AppHeader /> */}
            {/* <UserMsg /> */}

            <main>
                <Routes>


                    <Route path="" element={<BoardDetails />} />
                    <Route path="board" element={<BoardIndex />} />

                    <Route path="/debug" element={<DebugPage />} />


                    {/* <Route path="" element={<HomePage />} />
                    <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route>
                    <Route path="car" element={<CarIndex />} />
                    <Route path="car/:carId" element={<CarDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="chat" element={<ChatApp />} />
                    <Route path="admin" element={<AdminIndex />} />
                    <Route path="login" element={<LoginSignup />}>
                        <Route index element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route> */}
                </Routes>
            </main>
            {/* <AppFooter /> */}
        </div>
    )
}


