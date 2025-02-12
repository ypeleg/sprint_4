

// import { CarList } from '../cmps/CarList'
// import { useState, useEffect } from 'react'
// import { BoardList } from '../cmps/GroupList'

import { BoradHeader } from "../cmps/BoardHeader";

export function BoardDetails() {


    return (
        <div className="everything">
            <header>
                <nav className="flex-space-between center-vertical">

                    <div className="just-flex just-flex-more center-vertical">
                        {/* <button className="hamburger nav-highlight-hint">☰</button> */}
                        <div className="logo nav-highlight-hint">
                            <img className="dots" src="dots.svg" />
                        </div>
                        <div className="logo nav-highlight-hint">
                            <img className="main-logo" src="logo-not-moving.gif" />
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

                        <div className="dropdown-menu nav-highlight-hint">
                            <i className="fa-regular fa-plus"></i>
                        </div>


                    </div>

                    <div className="just-flex">
                        <button>5 days left</button>
                        <input placeholder="     Search" />
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
                            <button className=""> <i className="near-logo-btn fa-regular fa-less-than"></i> </button>
                        </div>
                    </div>

                    <section>
                        <article className="sidebar-first-section">

                            <div className="side-bar-item flex-space-between nav-highlight-hint">
                                <span>
                                    <i className="fa-regular fa-bars"></i> Board
                                </span>
                                <span></span>
                            </div>

                            <div className="side-bar-item flex-space-between nav-highlight-hint">
                                <span>
                                    <i className="fa-regular fa-user"></i> Members
                                </span>
                                <i className="fa-regular fa-plus"></i>
                            </div>

                            <div className="side-bar-item flex-space-between nav-highlight-hint">
                                <span>
                                    <i className="fa-regular fa-circle"></i> Workspace settings
                                </span>
                                <i className="fa-regular fa-chevron-down"></i>
                            </div>

                        </article>
                    </section>

                    <button className="label"> PREMIUM </button>



                    <section>
                        <div className="side-section-header">
                            <h5>Workspace views</h5>
                            <i className="fa-regular fa-plus"></i>
                        </div>
                        <article>

                            <div className="side-bar-item flex-space-between  nav-highlight-hint">
                                <span>
                                    <i className="fa-regular fa-table"></i> Table
                                </span>
                                <span></span>
                            </div>

                            <div className="side-bar-item flex-space-between  nav-highlight-hint">
                                <span>
                                    <i className="fa-regular fa-calendar"></i> Calendar
                                </span>
                                <span></span>
                            </div>

                        </article>
                    </section>




                    <section>
                        <div className="side-section-header">
                            <h5>Your Boards</h5>
                            <i className="fa-regular fa-plus"></i>
                        </div>
                        <article>

                            <div className="side-bar-item flex-space-between nav-highlight-hint">

                                <div className="board-sideitem just-flex">
                                    <img className="small-img" src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/140x94/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg" />
                                    <span>Demo</span>
                                </div>
                                <i className="fa-regular fa-star"></i>

                            </div>

                            <div className="side-bar-item flex-space-between nav-highlight-hint">

                                <div className="board-sideitem just-flex">
                                    <img className="small-img" src="https://trello-backgrounds.s3.amazonaws.com/SharedBackground/75x100/289cffa00861ae2161293812754a6891/photo-1738249034650-6a789a081a04.webp" />
                                    <span>Trelloception</span>
                                </div>
                                <i className="fa-regular fa-star"></i>

                            </div>

                        </article>
                    </section>

                </aside>

                <section className="board-display">

                    <BoradHeader/>



                    <section className="board-lists">
        
                        <div className="list base-components-list">
                            
                            <div className="list-header just-flex">
                                <span>In Progress</span>
                                <div className="card-btns">
                                    <i className="fa-regular fa-arrows-h"></i>
                                    <i className="fa-regular fa-ellipsis-h"></i>
                                </div>                              
                            </div>


                            <div className="card">                                
                                
                                <div className="stay-same-height flex-space-between">

                                    <div className="labels">
                                        <div className="card-label color-green">
                                        </div>
                                    </div>

                                    <div className="right-btns flex-space-between">
                                        <div className="right-btns-btn">
                                            <i className="fa-regular fa-box"></i>
                                        </div>
                                        <div className="right-btns-btn">
                                            <i className="fa-regular fa-edit"></i>
                                        </div>
                                    </div>


                                </div>

                                <div className="stay-same-height">
                                    <div className="card-checkbox" type="checkbox"/>                                
                                    <span className="card-task-text">make trello pixel perfect</span>
                                </div>

                                <div className="card-under-text flex-space-between">
                                    
                                    <div className="card-badges">
                                        <div className=""><i className="fa-regular fa-eye"></i></div>
                                        <i className="fa-regular fa-clock"></i><div className="card-date">Feb 16</div>
                                        <div className=""><i className="fa-regular fa-map"></i></div>
                            
                                        <div className="badge badge-priority">Priority: Medium</div>
                                        <div className="badge badge-status-approved">Status: Approved</div>
                                    </div>
                                </div>

                                <div className="card-users">
                                    <div className="card-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                    </div>
                                    <div className="card-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                    </div>
                                    <div className="card-user-icon-no-pic">
                                        YP
                                    </div>
                                    <div className="card-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                    </div>
                                </div>


                            </div>

                            <div className="card-footer">
                                <button className="add-card-btn"><i className="fa-regular fa-plus"></i> Add a card</button>
                                <button className="create-from-template-btn"><i className="fa-regular fa-vector-square"></i></button>
                            </div>
                        </div>
                    
             
                        <div className="list base-components-list">
                            <div className="list-header just-flex">
                                <span>base components</span>
                                <i className="fa-regular fa-ellipsis-h"></i>
                            </div>
                            <div className="card">
                                <span>board component</span>
                            </div>
                            <div className="card">
                                <span>board nav</span>
                            </div>
                            <div className="card card-with-badges">
                                <div className="card-content">
                                    <span>task details</span>
                                </div>
                                <div className="card-footer flex-space-between">
                                    <div className="card-date">Feb 16</div>
                                    <div className="card-badges just-flex">
                                        <div className="badge badge-priority">Priority: Medium</div>
                                        <div className="badge badge-status-approved">Status: Approved</div>
                                    </div>
                                </div>
                                <div className="card-users">                                                    
                                </div>
                            </div>
                            <div className="card card-with-badges">
                                <div className="card-content">
                                    <span>task details</span>
                                </div>
                                <div className="card-footer flex-space-between">
                                    <div className="card-date">Feb 16</div>
                                    <div className="card-badges just-flex">
                                        <div className="badge badge-risk-high">Risk: High</div>
                                    </div>
                                </div>
                            </div>
                            <button className="add-card-btn">+ Add a card</button>
                        </div>

                    </section>

                </section>




            </main>
        </div>
    )
}