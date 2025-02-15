

import {useNavigate} from "react-router"


export function AppHeader() {
    const navgite = useNavigate()

    return (
        <header className="board-index-header">

            <nav className="flex-space-between center-vertical">

                <div className="just-flex just-flex-more center-vertical">
                    {/* <button className="hamburger nav-highlight-hint">☰</button> */}
                    <div className="logo nav-highlight-hint">
                        <img className="dots" src="dots.svg"/>
                    </div>
                    <div className="logo nav-highlight-hint" onClick={() => navgite('/')}>
                        <img className="main-logo" src="logo-not-moving.gif"/>
                    </div>

                    <div className="dropdown-menu nav-highlight-hint">
                        <span>Workspace</span>
                        <i className="fa-regular fa-chevron-down"></i>
                    </div>

                    <div className="dropdown-menu nav-highlight-hint">
                        <span>Recent</span>
                        <i className="fa-regular fa-chevron-down"></i>
                    </div>

                    <div className="dropdown-menu nav-highlight-hint">
                        <span>Starred</span>
                        <i className="fa-regular fa-chevron-down"></i>
                    </div>

                    <div className="dropdown-menu nav-highlight-hint">
                        <span>More</span>
                        <i className="fa-regular fa-chevron-down"></i>
                    </div>

                    <div id="board-index-plus" className="dropdown-menu nav-highlight-hint board-index-plus">
                        <i className="fa-regular fa-plus"></i>
                    </div>
                </div>
                <div className="just-flex and-center">
                    <button className="days-left just-flex">
                        <i className="fa-regular fa-star"></i>
                        5 days left
                    </button>
                    {/*<input className="input-white" placeholder="     Search"/>*/}
                    <div className="search-container">
                        <input className="" placeholder="     Search"/>
                        {/* <i className="bell">bellicon</i> */}
                    </div>
                    <i className="fa-solid fa-bell"></i>
                    <div className="info">
                        <i className="fa-solid fa-question"></i>
                    </div>
                    <img className="user" src="user_spec.png"></img>
                </div>
            </nav>
        </header>
    )
}
