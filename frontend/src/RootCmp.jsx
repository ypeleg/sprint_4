

import React from 'react'

import { Login } from './pages/Login.jsx'
import { Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage.jsx'
import { DebugPage } from './pages/DebugPage.jsx'
import { BoardIndex } from './pages/BoardIndex.jsx'
import { BoardDetails } from './pages/BoardDetails.jsx'
import { MondayBoardIndex } from './pages/MondayBoardlist.jsx'



import { MondayBoardDetails } from './pages/MondayBoardDetailsActualNew.jsx'
// import { MondayBoardDetails } from './pages/MondayBoardDetailsActualOld.jsx'





import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { VideoCall } from './pages/VideoCall.jsx'
import { DECLINE_CALL, INCOMING_SOCKET_CALL, socketService } from "./services/util.service.js"

import { useRef } from "react"
import { eventBusService } from "./services/util.service.js"


export function UserMsg() {
    const [msg, setMsg] = useState(null);
    const timeoutIdRef = useRef();

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
            console.log('Got msg', msg);
            setMsg(msg);

            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current);
                timeoutIdRef.current = null;
            }

            if (msg.type !== 'spinner') {
                timeoutIdRef.current = setTimeout(closeMsg, 3000);
            }
        });
        return unsubscribe;
    }, []);

    function closeMsg() {
        setMsg(null);
    }

    if (!msg) return <span></span>;

    return (
        <div className={`trello-notification ${msg.type}`}>
            {msg.type === 'spinner' && (
                <div className="spinner-icon"></div>
            )}
            <div className="trello-notification-content">
                <p className="trello-notification-message">
                    {msg.txt}
                </p>
            </div>
            <button className="trello-notification-close" onClick={closeMsg}>
                ×
            </button>
        </div>
    );
}


const ANIMATION_DURATION = 400
const VIBRATION_INTERVAL = 1000

export function VideoCallNotification() {
    const [showCall, setShowCall] = useState(false)
    const [callerName, setCallerName] = useState("")
    const [callerImg, setCallerImg] = useState("")
    const [callId, setCallId] = useState(null)
    const [isVibrating, setIsVibrating] = useState(true)
    const [exitAnimation, setExitAnimation] = useState(false)
    const loggedUser = useSelector(state => state.userModule.user)
    const navigate = useNavigate()

    useEffect(() => {
        socketService.on(INCOMING_SOCKET_CALL, (payload) => {
            console.log('------- incoming call -------')
            console.log('loggedUser: ', loggedUser)
            console.log('payload: ', payload)            
            console.log('------- incoming call -------')
            if ((!loggedUser) || (!loggedUser?._id) || (payload.callReceiver === loggedUser?._id)) {
                setCallerName(payload.callerName)
                setCallerImg(payload.callerImg)
                setCallId(payload.callId)
                setShowCall(true)
            }
        });
    }, [loggedUser])

    useEffect(() => {
        let interval;
        if (showCall && isVibrating) {
            interval = setInterval(() => {
                if (window.navigator.vibrate) {
                    window.navigator.vibrate([200]);
                }
            }, VIBRATION_INTERVAL)
        }
        return () => clearInterval(interval)
    }, [showCall, isVibrating])

    const handleAccept = () => {
        setIsVibrating(false)
        setExitAnimation(true)
        setTimeout(() => {
            setShowCall(false)
            navigate(`/video/${callId}`)
        }, ANIMATION_DURATION)
    }

    const handleDecline = () => {
        setIsVibrating(false)
        setExitAnimation(true)
        socketService.emit(DECLINE_CALL,callerName)
        setTimeout(() => setShowCall(false), ANIMATION_DURATION);
    }

    if (!showCall) return null

    return (
        <div className={`notification-container ${exitAnimation ? "exit" : ""}`}>
            <div className="notification-content">
                <div className="caller-section">
                    <div className="ripple-container">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className={`ripple ripple-${i + 1}`} />
                        ))}
                        <div className="avatar">
                            {callerImg ? (
                                <img src={callerImg} alt="caller avatar" />
                            ) : (
                                <span>{callerName[0]?.toUpperCase()}</span>
                            )}
                        </div>
                    </div>
                    <h3 className="caller-name">{callerName}</h3>
                    <p className="call-type">Incoming Video Call</p>
                </div>

                <div className="call-controls">
                    <button
                        className="decline-btn"
                        onClick={handleDecline}
                        aria-label="Decline call"
                    >
                        <svg viewBox="0 0 24 24" className="decline-icon">
                            <path d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9 1 8.8 1 15.2 4.9 19.1 8.8 23 15.2 23 19.1 19.1 23 15.2 23 8.8 19.1 4.9ZM14.8 16.2L12 13.4 9.2 16.2 7.8 14.8 10.6 12 7.8 9.2 9.2 7.8 12 10.6 14.8 7.8 16.2 9.2 13.4 12 16.2 14.8 14.8 16.2Z" />
                        </svg>
                    </button>

                    <button
                        className="accept-btn"
                        onClick={handleAccept}
                        aria-label="Accept call"
                    >
                        <svg viewBox="0 0 24 24" className="accept-icon">
                            <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}








export function RootCmp() {
    return (
        <div className="main-container">
            <UserMsg />
            <VideoCallNotification />
            <main>
                <Routes>
                    {/*home*/}
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />

                    {/* trello (index + board) */}
                    <Route path="/" element={<BoardIndex />} />
                    <Route path="/:boardId" element={<BoardDetails />} />

                    {/* monday (index + board) */}
                    <Route path="/monday" element={<MondayBoardIndex/>} />
                    <Route path="/monday/:boardId" element={<MondayBoardDetails />} />

                    {/* video calls */}
                    <Route path="/video" element={<VideoCall />} />
                    <Route path="/video/:callId" element={<VideoCall />} />

                    <Route path="/debug" element={<DebugPage />} />

                </Routes>
            </main>
        </div>
    );
}


