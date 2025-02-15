

import { useSelector } from "react-redux"
import { loadBoards } from "../store/store"


export function SideBar() {

    const boards = useSelector(state => state.boardModule.boards)

    if (!boards.length) {
        loadBoards()
    }

    return (
        <aside className="side-bar">
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

                    {boards.map(board => {
                        return (<div className="side-bar-item flex-space-between nav-highlight-hint">

                            <div className="board-sideitem just-flex">
                                <img className="small-img" src={board.style.backgroundImage} />
                                <div>{board.title}</div>
                            </div>
                            <i className="fa-regular fa-star"></i>

                        </div>)

                    })}

                </article>
            </section>

        </aside>)
}