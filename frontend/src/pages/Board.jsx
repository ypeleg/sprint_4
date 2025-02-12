

import { CarList } from '../cmps/CarList'
import { useState, useEffect } from 'react'
import { BoardList } from '../cmps/GroupList'

export function Board() {


    return (
        <div className="everything">
            <header>
                <nav className="flex-space-between">

                    <div className="just-flex">
                        <button className="hamburger nav-highlight-hint">☰</button>
                        <div className="logo nav-highlight-hint">Logo</div>
                        <div className="dropdown-menu nav-highlight-hint">Workspace</div>
                        <div className="dropdown-menu nav-highlight-hint">Recent</div>
                        <div className="dropdown-menu nav-highlight-hint">Starred</div>
                        <div className="dropdown-menu nav-highlight-hint">More</div>
                        <div className="nav-highlight-hint">+</div>
                    </div>
                    
                    <div className="just-flex">
                        <button>5 days left</button>
                        <input/>
                        <i className="bell">bellicon</i>
                        <i className="info">?</i>
                        <div className="user"></div>
                    </div>                        

                </nav>
            </header>

            <main className="main-layout">

                <aside>
                    <div className="sidebar-header flex-space-between">
                        <div className="flex-space-between logo-insider">
                            <div className="board-logo">T</div>
                            <div className="near-logo">
                                <div className="bold-text">Trello Workspace</div>
                                <div>Premium</div>        
                            </div>

                        </div>
                        <div>
                            <button> ≤ </button>                
                        </div>                        
                    </div>

                    <section>
                        <article>
                                                        
                            <div className="side-bar-item flex-space-between">
                                <span>
                                    <i>[]</i> Board
                                </span>
                                <span></span>
                            </div>

                            <div className="side-bar-item flex-space-between">
                                <span>
                                    <i>[]</i> Members
                                </span>
                                <span>+</span>
                            </div>
                            
                            <div className="side-bar-item flex-space-between">
                                <span>
                                    <i>[]</i> Workspace settings
                                </span>
                                <span> V </span>
                            </div>
                            
                        </article>
                    </section>

                    <button className="label"> PREMIUM </button>

                    <h5>Workspace views</h5>

                    <section>
                        <article>
                                                        
                            <div className="side-bar-item flex-space-between">
                                <span>
                                    <i>[]</i> Table
                                </span>
                                <span></span>
                            </div>

                            <div className="side-bar-item flex-space-between">
                                <span>
                                    <i>[]</i> Calendar
                                </span>
                                <span>+</span>
                            </div>

                        </article>
                    </section>

                    
                    <h5>Your Boards</h5>

                    <section>
                        <article>
                                                        
                            <div className="side-bar-item flex-space-between">
                                <div className="board-sideitem just-flex">
                                    <img className="small-img" src = "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x94/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg"/>
                                    <span>Demo</span>
                                </div>
                                <span></span>
                            </div>

                            <div className="side-bar-item flex-space-between">
                                <div className="just-flex">
                                    <img className="small-img" src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/75x100/289cffa00861ae2161293812754a6891/photo-1738249034650-6a789a081a04.webp"/>
                                    <span>Trelloception</span>
                                </div>
                                <span>+</span>
                            </div>

                        </article>
                    </section>

                </aside>

                <section className="board-display">

                    <header className="board-header">
                        <div className="header-group">
                            <h3 className="board-name">trelloception</h3>                            
                            <button><i className="fa-regular fa-star"></i></button>
                            <button><i className="fa-regular fa-user"></i></button>
                            <button><i className="fa-regular fa-align-center"></i></button>                           
                        </div>

                        <div className="header-group">
                            <button><i className="fa-regular fa-rocket"></i></button>
                            <button><i className="fa-regular fa-bolt"></i></button>
                            <button><i className="fa-regular fa-bars"></i> Filters</button>
                            <div className="divider"></div>
                            <div className="users">
                                <div className="user-icon">
                                    <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
                                </div>
                            </div>
                            <button className="share-btn">
                                <i className="fa-regular fa-user"></i>
                                <span>Share</span>                                
                            </button>
                            <button className="share-btn">
                            <i className="fa-solid fa-hanukiah"></i>
                            
                            </button>
                        </div>

                    </header>
             
                </section>

            </main>
        </div>
    )
}