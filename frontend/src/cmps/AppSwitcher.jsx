

import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'


export function AppSwitch({currentlyShowing = 'trello'}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [currentApp, setCurrentApp] = useState(currentlyShowing)
    const [isAnimating, setIsAnimating] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()

    useEffect(() => {
        setCurrentApp(currentlyShowing)
    }, [currentlyShowing])

    const getBoardId = () => {
        if (location.pathname === '/' || location.pathname === '/monday') {
            return null
        }

        return params.boardId || location.pathname.replace('/', '')
    }

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded)
    }

    const switchApp = () => {
        if (isAnimating) return

        setIsAnimating(true)

        const targetApp = currentApp === 'monday' ? 'trello' : 'monday'
        const targetUrl = targetApp === 'trello' ?
            (getBoardId() ? `/${getBoardId()}` : '/') :
            (getBoardId() ? `/monday/${getBoardId()}` : '/monday')

        setCurrentApp(targetApp)

        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(50)
        }

        setTimeout(() => {
            navigate(targetUrl)
            setIsAnimating(false)
            // setIsExpanded(false)
        }, 700)
    }

    return (<>

        <div className={`app-switch-container ${isExpanded ? 'app-switch-container-expanded' : ''}`}>
            <div className="app-switch-panel">
                <div className="switch-header">
                    <h1 className="switch-title">Select App</h1>
                </div>

                <div className="toggle-container">
                    <div className="toggle-track">
                        <div className={`app-indicator ${currentApp === 'monday' ? 'active-app-switcher' : ''}`}>
                            <div className={`app-icon monday-icon ${currentApp === 'monday' ? 'active-app-switcher' : ''}`}>
                                <img src="/monday_logo_icon.png" alt="monday-icon" />
                            </div>
                            <div className="app-name">Wednesday</div>
                        </div>

                        <div className={`app-indicator ${currentApp === 'trello' ? 'active-app-switcher' : ''}`}>
                            <div className={`app-icon trello-icon ${currentApp === 'trello' ? 'active-app-switcher' : ''}`}>

                                <svg fill="currentColor" height="30" width="30" viewBox="0 0 18 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.4579 5H2.21854C1.63014 5 1.06585 5.23374 0.649794 5.64979C0.233738 6.06585 0 6.63014 0 7.21854V21.4669C0 22.0553 0.233738 22.6196 0.649794 23.0356C1.06585 23.4517 1.63014 23.6854 2.21854 23.6854H16.4579C17.0463 23.6854 17.6106 23.4517 18.0266 23.0356C18.4427 22.6196 18.6764 22.0553 18.6764 21.4669V7.22452C18.6772 6.93268 18.6204 6.64354 18.5093 6.37369C18.3981 6.10383 18.2348 5.85855 18.0287 5.65191C17.8227 5.44527 17.5778 5.28131 17.3083 5.16945C17.0387 5.05758 16.7497 5 16.4579 5V5ZM8.04481 18.4729C8.04481 18.6685 7.96731 18.8561 7.82927 18.9947C7.69123 19.1333 7.50391 19.2116 7.30829 19.2124H4.18558C3.98969 19.2116 3.80205 19.1334 3.66353 18.9949C3.52502 18.8564 3.44685 18.6688 3.44607 18.4729V9.19157C3.44685 8.99568 3.52502 8.80804 3.66353 8.66952C3.80205 8.53101 3.98969 8.45284 4.18558 8.45205H7.30829C7.50391 8.45285 7.69123 8.53111 7.82927 8.66971C7.96731 8.80831 8.04481 8.99595 8.04481 9.19157V18.4729ZM15.2304 14.2185C15.2296 14.4143 15.1514 14.602 15.0129 14.7405C14.8744 14.879 14.6867 14.9572 14.4908 14.958H11.3681C11.1725 14.9572 10.9852 14.8789 10.8471 14.7403C10.7091 14.6017 10.6316 14.4141 10.6316 14.2185V9.19157C10.6316 8.99595 10.7091 8.80831 10.8471 8.66971C10.9852 8.53111 11.1725 8.45285 11.3681 8.45205H14.4908C14.6867 8.45284 14.8744 8.53101 15.0129 8.66952C15.1514 8.80804 15.2296 8.99568 15.2304 9.19157V14.2185Z"></path>
                                </svg>

                            </div>
                            <div className="app-name">Roillo</div>
                        </div>

                        <div className={`toggle-knob ${currentApp === 'monday' ? 'toggle-knob-monday' : 'toggle-knob-trello'}`} onClick={switchApp}></div>
                    </div>
                </div>

                <div className="status-indicator">
                    <span className="status-dot"></span> <span>Currently using {currentApp}</span>
                </div>
            </div>

            <div className="app-switch-handle" onClick={toggleExpansion}>
                <div className="handle-text">
                    <span className="handle-zap">⚡</span> Switch Apps <span className="handle-arrow">▲</span>
                </div>
            </div>
        </div>
    </>)
}