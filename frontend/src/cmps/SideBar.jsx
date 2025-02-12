


export function SideBar() {


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

        </aside>)
}