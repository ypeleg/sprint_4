
import { useState, useRef } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { CreateBoardModal } from '../pages/CreateBoardModal.jsx'
import { logout } from "../store/store.js"

export function AppHeader({ backgrounColor, borderColor, useDarkTextColors,
    onToggleSideBar, sideBarOpen, onToggleUpperBar, upperBarOpen }) {

    const boards = useSelector(state => state.boardModule.boards)

    const [isModalOpen, setIsModalopen] = useState(false)
    const [openAccountPopup, setOpenAccountPopup] = useState(false)
    const loggedUser = useSelector(state => state.userModule.user)
    console.log('loggedUser', loggedUser)
    const [showPremiumTrial, setShowPremiumTrial] = useState(false)
    const [showQuestionMarkPopup, setShowQuestionMarkPopup] = useState(false)
    const [showBellPopup, setShowBellPopup] = useState(false)
    const [showUnreadOnly, setShowUnreadOnly] = useState(false)
    const [showRecent, setShowRecent] = useState(false)
    const [showWorkspace, setShowWorkspace] = useState(false)
    const [showStarred, setShowStarred] = useState(false)
    const getCreateBoardRef = useRef(null)
    const navgite = useNavigate()

    function closeAllPopups() {
        setShowPremiumTrial(false)
        setShowQuestionMarkPopup(false)
        setShowBellPopup(false)
        setShowUnreadOnly(false)
        setShowRecent(false)
        setShowWorkspace(false)
        setShowStarred(false)
    }

    function onClose() {
        setIsModalopen(false)
    }

    return (<><header className={`board-index-header ${upperBarOpen ? 'upper-bar-open' : 'board-index-header-closed'}`}
        style={{
            // backgroundImage: `url(${selectedBoard.style?.backgroundImage})`
            backgroundColor: backgrounColor,
            // borderColor: borderColor,

        }}>

        <nav className="flex-space-between center-vertical">

            <div className="just-flex just-flex-more center-vertical">

                <div className="logo nav-highlight-hint" onClick={() => onToggleSideBar()}>
                    {/*<img className="dots" src="dots.svg"/>*/}
                    <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z" fill="currentColor"></path>
                    </svg>
                </div>
                <div className="logo nav-highlight-hint" onClick={() => navgite('/')}>
                    {<span className="roi">
                        <svg fill="currentColor" height="30" width="30" viewBox="0 0 18 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4579 5H2.21854C1.63014 5 1.06585 5.23374 0.649794 5.64979C0.233738 6.06585 0 6.63014 0 7.21854V21.4669C0 22.0553 0.233738 22.6196 0.649794 23.0356C1.06585 23.4517 1.63014 23.6854 2.21854 23.6854H16.4579C17.0463 23.6854 17.6106 23.4517 18.0266 23.0356C18.4427 22.6196 18.6764 22.0553 18.6764 21.4669V7.22452C18.6772 6.93268 18.6204 6.64354 18.5093 6.37369C18.3981 6.10383 18.2348 5.85855 18.0287 5.65191C17.8227 5.44527 17.5778 5.28131 17.3083 5.16945C17.0387 5.05758 16.7497 5 16.4579 5V5ZM8.04481 18.4729C8.04481 18.6685 7.96731 18.8561 7.82927 18.9947C7.69123 19.1333 7.50391 19.2116 7.30829 19.2124H4.18558C3.98969 19.2116 3.80205 19.1334 3.66353 18.9949C3.52502 18.8564 3.44685 18.6688 3.44607 18.4729V9.19157C3.44685 8.99568 3.52502 8.80804 3.66353 8.66952C3.80205 8.53101 3.98969 8.45284 4.18558 8.45205H7.30829C7.50391 8.45285 7.69123 8.53111 7.82927 8.66971C7.96731 8.80831 8.04481 8.99595 8.04481 9.19157V18.4729ZM15.2304 14.2185C15.2296 14.4143 15.1514 14.602 15.0129 14.7405C14.8744 14.879 14.6867 14.9572 14.4908 14.958H11.3681C11.1725 14.9572 10.9852 14.8789 10.8471 14.7403C10.7091 14.6017 10.6316 14.4141 10.6316 14.2185V9.19157C10.6316 8.99595 10.7091 8.80831 10.8471 8.66971C10.9852 8.53111 11.1725 8.45285 11.3681 8.45205H14.4908C14.6867 8.45284 14.8744 8.53101 15.0129 8.66952C15.1514 8.80804 15.2296 8.99568 15.2304 9.19157V14.2185Z"></path>
                            </svg>
                        <span>Roillo</span>
                     
                    </span>}
                     {/* {!useDarkTextColors && <img className="main-logo-white" src="trello_white.gif" />} */}

                </div>

                {/*<div className="dropdown-menu nav-highlight-hint">*/} {/*    <span>Workspace</span> <i className="fa-regular fa-chevron-down"></i>*/} {/*</div>*/}
                <div className="btn-popup-container">
                    <div className="dropdown-menu nav-highlight-hint" onClick={() => {
                        closeAllPopups();
                        setShowWorkspace(!showWorkspace)
                    }}>
                        <span>Workspace</span> <i className="fa-regular fa-chevron-down"></i>
                    </div>
                    {showWorkspace && (<>
                        <div className="header-popup recent-popup popup-opens-right">
                            <div className="workspace-section">
                                <div className="section-title">Current Workspace</div>

                                <div className="workspace-item" onClick={() => navgite('/')}>
                                    <div className="workspace-content">
                                        <div className="board-logo">T</div>
                                        <div className="workspace-info">
                                            <div className="workspace-name">Trello Workspace</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="workspace-section">
                                <div className="section-title">Your Workspaces</div>

                                <div className="workspace-item" onClick={() => navgite('/')}>
                                    <div className="workspace-content">
                                        <div className="board-logo">T</div>
                                        <div className="workspace-info">
                                            <div className="workspace-name">Trello Workspace</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)}
                </div>


                <div className="btn-popup-container">
                    <div className="dropdown-menu nav-highlight-hint" onClick={() => {
                        closeAllPopups();
                        setShowRecent(!showRecent)
                    }}>
                        <span>Recent</span> <i className="fa-regular fa-chevron-down"></i>
                    </div>
                    {showRecent && (<>
                        <div className="header-popup recent-popup popup-opens-right">
                            <div className="board-list-container">
                                <ul className="board-list-popup">
                                    {boards.map(board => (<li key={board.id} className="board-item">
                                        <div className="board-thumbnail" style={{
                                            // background: board.style.imgUrl.startsWith('#') ? board.style.imgUrl : 'transparent',
                                            backgroundImage: board?.style?.backgroundImage ? `url(${board.style.backgroundImage})` : 'none', backgroundSize: 'cover'
                                        }} />
                                        <div className="board-info">
                                            <div className="aboard-header">
                                                <span className="board-title">{board.title}</span> {board.isStarred && (<i className="fa-solid fa-star star-icon"></i>)}
                                            </div>
                                            <span className="board-source">{board.source}</span>
                                        </div>
                                        {board.style.imgUrl && (<span className="template-badge">Template</span>)}
                                    </li>))}
                                </ul>
                            </div>
                        </div>
                    </>)}
                </div>

                {/*<div className="dropdown-menu nav-highlight-hint">*/} {/*    <span>Starred</span> <i className="fa-regular fa-chevron-down"></i>*/} {/*</div>*/}

                <div className="btn-popup-container">
                    <div className="dropdown-menu nav-highlight-hint" onClick={() => {
                        closeAllPopups();
                        setShowStarred(!showStarred)
                    }}>
                        <span>Starred</span> <i className="fa-regular fa-chevron-down"></i>
                    </div>
                    {showStarred && (<>
                        <div className="header-popup recent-popup popup-opens-right">
                            <div className="board-list-container">
                                <ul className="board-list-popup">
                                    {boards.map(board =>

                                    (board.isStarred &&

                                        (<li key={board.id} className="board-item">
                                            <div className="board-thumbnail" style={{
                                                // background: board.style.imgUrl.startsWith('#') ? board.style.imgUrl : 'transparent',
                                                backgroundImage: board?.style?.backgroundImage ? `url(${board.style.backgroundImage})` : 'none', backgroundSize: 'cover'
                                            }} />
                                            <div className="board-info">
                                                <div className="aboard-header">
                                                    <span className="board-title">{board.title}</span> {board.isStarred && (<i className="fa-solid fa-star star-icon"></i>)}
                                                </div>
                                                <span className="board-source">{board.source}</span>
                                            </div>
                                            {board.style.imgUrl && (<span className="template-badge">Template</span>)}
                                        </li>)))}
                                </ul>
                            </div>
                        </div>
                    </>)}
                </div>

                <div className="dropdown-menu nav-highlight-hint">
                    <span>More</span> <i className="fa-regular fa-chevron-down"></i>
                </div>


                <div className='btn-popup-container'>
                    <div onClick={() => setIsModalopen(!isModalOpen)} className={`highlighted-btn nav-highlight-hint ${useDarkTextColors ? ' ' : ' white-colors-btn'}`} ref={getCreateBoardRef}>
                        <span>Create</span>
                    </div>
                    {isModalOpen && <CreateBoardModal onClose={onClose} createModal={getCreateBoardRef.current} />}
                </div>

            </div>
            <div className="just-flex and-center just-flexer">
                <div className="btn-popup-container">
                    <button className="days-left just-flex" onClick={() => {
                        closeAllPopups();
                        setShowPremiumTrial(!showPremiumTrial)
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" role="presentation">
                            <path fill="currentcolor" fillRule="evenodd" d="M9.276 4.382 7.357 9.247l-4.863 1.917a.78.78 0 0 0 0 1.45l4.863 1.918 1.919 4.863a.78.78 0 0 0 1.45 0h-.001l1.918-4.863 4.864-1.919a.781.781 0 0 0 0-1.45l-4.864-1.916-1.918-4.865a.78.78 0 0 0-.44-.438.78.78 0 0 0-1.01.438m8.297-2.03-.743 1.886-1.884.743a.56.56 0 0 0 0 1.038l1.884.743.743 1.886a.558.558 0 0 0 1.038 0l.745-1.886 1.883-.743a.557.557 0 0 0 0-1.038l-1.883-.743-.745-1.885a.55.55 0 0 0-.314-.314.56.56 0 0 0-.724.314m-.704 13.003-.744 1.883-1.883.744a.55.55 0 0 0-.316.314.56.56 0 0 0 .316.724l1.883.743.744 1.884c.057.144.17.258.314.315a.56.56 0 0 0 .724-.315l.744-1.884 1.883-.743a.557.557 0 0 0 0-1.038l-1.883-.744-.744-1.883a.55.55 0 0 0-.315-.316.56.56 0 0 0-.723.316"></path>
                        </svg>
                        5 days left
                    </button>
                    {showPremiumTrial && (<>
                        <div className="account-popup">
                            <div className="premium-trial-container">
                                <h2 className="trial-title">Premium trial</h2>

                                <p className="trial-description">
                                    The Premium free trial for Trello Workspace ends on Mar 3, 2025. </p>

                                <h3 className="features-title">Get the most out of Premium</h3>

                                <ul className="features-list">
                                    <li className="feature-item">
                                        <span className="feature-icon">
                                            <i className="fa-regular fa-chart-bar"></i>
                                        </span> <span className="feature-text">See your work in new ways with views</span>
                                    </li>

                                    <li className="feature-item">
                                        <span className="feature-icon">
                                            <i className="fa-regular fa-square-check"></i>
                                        </span> <span className="feature-text">Add due dates and assignees to checklist items</span>
                                    </li>

                                    <li className="feature-item">
                                        <span className="feature-icon">
                                            <i className="fa-regular fa-palette"></i>
                                        </span> <span className="feature-text">Change list colors and collapse lists</span>
                                    </li>

                                    <li className="feature-item">
                                        <span className="feature-icon">
                                            <i className="fa-regular fa-clipboard"></i>
                                        </span> <span className="feature-text">Create unlimited boards</span> <span className="info-icon">
                                            <i className="fa-regular fa-circle-info"></i>
                                        </span>
                                    </li>

                                    <li className="feature-item">
                                        <span className="feature-icon">
                                            <i className="fa-regular fa-users"></i>
                                        </span> <span className="feature-text">Collaborate with as many people as you want</span> <span className="info-icon">
                                            <i className="fa-regular fa-circle-info"></i>
                                        </span>
                                    </li>
                                </ul>

                                <button className="trial-extension">
                                    <span>Extend free trial to 30 days by adding payment details</span> <span className="arrow-icon">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </span>
                                </button>

                                <button className="see-plans">
                                    <span>See all plans</span> <span className="arrow-icon">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </span>
                                </button>

                                <p className="trial-footer">
                                    After the free trial ends, this Workspace will downgrade to the Free plan. <a href="#" className="learn-more">Learn more</a>
                                </p>
                            </div>
                        </div>

                    </>)}
                </div>

                <div className="search-container">
                    <input className={`white ${useDarkTextColors ? ' ' : ' white-search'}`} placeholder="     Search" />

                </div>

                <div className="btn-popup-container just-flexer">
                    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation" onClick={() => {
                        closeAllPopups();
                        setShowBellPopup(!showBellPopup)
                    }}>
                        <path fill="currentcolor" fillRule="evenodd" d="M6.59 17.83a2 2 0 0 0 2.83 0L6.59 15a2 2 0 0 0 0 2.83m4.79-12.35A5.04 5.04 0 0 1 14.95 4c.97 0 1.95.28 2.79.84q.03-.04.07-.07a1.01 1.01 0 1 1 1.35 1.49 5.05 5.05 0 0 1-.64 6.36l-.72.73c-.78.78-1.81 2.21-2.31 3.21l-1.51 3.02c-.25.5-.77.58-1.17.19l-8.56-8.55c-.4-.4-.31-.92.19-1.17l3.02-1.51c.99-.49 2.42-1.53 3.21-2.31zm2.74 9.63c.52-.97 1.57-2.4 2.35-3.18l.73-.73a3.05 3.05 0 0 0 .39-3.83c-.19-.29-.72-.77-.86-.86A3.04 3.04 0 0 0 15.05 6c-.8 0-1.57.31-2.16.89l-.95.95c-.78.79-2.22 1.82-3.2 2.31L7 11.02l6.07 6.07z"></path>
                    </svg>
                    {showBellPopup && (<>
                        <div className="header-popup">
                            <div className="notifications-container">
                                <div className="notifications-header">
                                    <h2 className="header-title">Notifications</h2>
                                    <div className="header-controls">
                                        <div className="toggle-container">
                                            <span className="toggle-label">Only show unread</span>
                                            <button className={`toggle-switch ${showUnreadOnly ? 'active' : ''}`} onClick={() => {
                                                closeAllPopups();
                                                setShowUnreadOnly(!showUnreadOnly)
                                            }} role="switch" aria-checked={showUnreadOnly}>
                                                <span className="toggle-slider"></span>
                                            </button>
                                        </div>
                                        <button className="options-button">
                                            <i className="fa-solid fa-ellipsis"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="empty-state">
                                    <div className="illustration">
                                        <img src="trello_notification_popup.svg" />
                                    </div>
                                    <h3 className="empty-title">No unread notifications</h3>
                                </div>
                            </div>
                        </div>
                    </>)}

                </div>

                <div className="btn-popup-container just-flexer">
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={() => {
                        closeAllPopups();
                        setShowQuestionMarkPopup(!showQuestionMarkPopup)
                    }}>
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z" fill="currentColor"></path>
                    </svg>
                    {showQuestionMarkPopup && (<>
                        <div className="account-popup">
                            <img src="trello_question_menu.png" alt="Team collaboration illustration" className="tips-image" />

                            <h2 className="tips-title">
                                It's easy to get your team up and running with Trello playbooks </h2>

                            <button className="tips-button">
                                Get a new tip.
                            </button>

                            <nav className="footer-nav">
                                <div className="nav-links">
                                    <a href="#" className="nav-link">Pricing</a> <a href="#" className="nav-link">Apps</a> <a href="#" className="nav-link">Blog</a> <a href="#" className="nav-link">Privacy</a> <a href="#" className="nav-link">Notice at Collection</a> <a href="#" className="nav-link">More...</a>
                                </div>
                            </nav>
                        </div>
                    </>)}
                </div>


                {/* <img className="user" src="user_spec.png"></img> */}
                <div class="user-profile member-circle task-user-icon" title="LH" onClick={() => setOpenAccountPopup(!openAccountPopup)}>
                    {(loggedUser?.fullname.includes(' '))? (loggedUser?.fullname?.split(' ')[0][0]?.toUpperCase() || '') + '' + (loggedUser?.fullname?.split(' ')[1][0]?.toUpperCase() || ''):loggedUser?.fullname[0].toUpperCase()}
                </div>
                {openAccountPopup && (<div className="account-popup">
                    <section className="account-section">
                        <div className="section-header">ACCOUNT</div>
                        <div className="account-info">
                            <div className="profile-icon large">
                                {(loggedUser?.imgUrl) ?

                                    (loggedUser?.imgUrl) :

                                    (loggedUser?.fullname.includes(' '))? (loggedUser?.fullname?.split(' ')[0][0]?.toUpperCase() || '') + '' + (loggedUser?.fullname?.split(' ')[1][0]?.toUpperCase() || ''):loggedUser?.fullname[0].toUpperCase()

                                }
                            </div>
                            <div className="user-details">
                                <p className="user-name">{loggedUser?.fullname || 'Welcome Guest!'}</p>{(!!loggedUser?.username) && <p className="user-email">{loggedUser?.username || 'cell@theirer.com'}</p>}
                            </div>
                        </div>

                        <div className="menu-items">
                            <button className="menu-item">Switch accounts</button>
                            <button className="menu-item with-icon">
                                <span>Manage account</span> <span className="external-icon">↗</span>
                            </button>
                        </div>
                    </section>

                    <section className="trello-section">
                        <div className="section-header">TRELLO</div>
                        <div className="menu-items">
                            <button className="menu-item">Profile and visibility</button>
                            <button className="menu-item">Activity</button>
                            <button className="menu-item">Cards</button>
                            <button className="menu-item">Settings</button>
                            <button className="menu-item with-icon">
                                <span>Theme</span> <span className="arrow-icon">›</span>
                            </button>
                        </div>
                    </section>

                    <section className="workspace-section">
                        <button className="create-workspace">
                            <span className="workspace-icon">+</span> Create Workspace
                        </button>
                    </section>

                    <section className="help-section">
                        <div className="menu-items">
                            <button className="menu-item">Help</button>
                            <button className="menu-item">Shortcuts</button>
                        </div>
                    </section>

                    <section className="logout-section">
                        <div className="menu-items">
                            <button
                                className="logout-item"
                                onClick={() => {
                                    logout()
                                    navgite('\login')
                                }}
                            >Logout</button>
                        </div>
                    </section>

                </div>)}


            </div>
        </nav>

    </header>
        <header className="board-index-header-slim" style={{
            // backgroundImage: `url(${selectedBoard.style?.backgroundImage})`
            backgroundColor: backgrounColor, borderColor: borderColor,

        }}>

            <nav className="flex-space-between center-vertical">

                <div className="just-flex just-flex-more center-vertical">

                    <div className="logo nav-highlight-hint" onClick={() => onToggleSideBar()}>
                        {/*<img className="dots" src="dots.svg"/>*/}
                        <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C4 4.44772 4.44772 4 5 4H7C7.55228 4 8 4.44772 8 5V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V5ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11V13C8 13.5523 7.55228 14 7 14H5C4.44772 14 4 13.5523 4 13V11ZM11 4C10.4477 4 10 4.44772 10 5V7C10 7.55228 10.4477 8 11 8H13C13.5523 8 14 7.55228 14 7V5C14 4.44772 13.5523 4 13 4H11ZM10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11ZM17 4C16.4477 4 16 4.44772 16 5V7C16 7.55228 16.4477 8 17 8H19C19.5523 8 20 7.55228 20 7V5C20 4.44772 19.5523 4 19 4H17ZM16 11C16 10.4477 16.4477 10 17 10H19C19.5523 10 20 10.4477 20 11V13C20 13.5523 19.5523 14 19 14H17C16.4477 14 16 13.5523 16 13V11ZM5 16C4.44772 16 4 16.4477 4 17V19C4 19.5523 4.44772 20 5 20H7C7.55228 20 8 19.5523 8 19V17C8 16.4477 7.55228 16 7 16H5ZM10 17C10 16.4477 10.4477 16 11 16H13C13.5523 16 14 16.4477 14 17V19C14 19.5523 13.5523 20 13 20H11C10.4477 20 10 19.5523 10 19V17ZM17 16C16.4477 16 16 16.4477 16 17V19C16 19.5523 16.4477 20 17 20H19C19.5523 20 20 19.5523 20 19V17C20 16.4477 19.5523 16 19 16H17Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <div className="logo nav-highlight-hint" onClick={() => navgite('/')}>
                        {useDarkTextColors && <img className="main-logo" src="logo-not-moving.gif" />} {!useDarkTextColors && <img className="main-logo-white" src="trello_white.gif" />}

                    </div>
                </div>
                <div className="logo nav-highlight-hint top-hamburger" onClick={() => onToggleUpperBar()}>
                    {/*<img className="dots" src="dots.svg"/>*/}
                    <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7V15C2 16.1046 2.89543 17 4 17H6C7.10457 17 8 16.1046 8 15V7C8 5.89543 7.10457 5 6 5H4C2.89543 5 2 5.89543 2 7ZM4 7V15H6V7L4 7Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7V13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13V7C15 5.89543 14.1046 5 13 5H11C9.89543 5 9 5.89543 9 7ZM11 7V13H13V7L11 7Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M16 17V7C16 5.89543 16.8954 5 18 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H18C16.8954 19 16 18.1046 16 17ZM18 17V7L20 7V17H18Z" fill="currentColor"></path></svg>
                </div>
            </nav>
        </header>
    </>

    )
}
