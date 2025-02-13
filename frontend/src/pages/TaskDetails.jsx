


export function TaskDetails() {

    console.log('hellllo')
    return (
        <div className="task-details">

            <div className="task-details-container">

                <div className="task-details-content">
                    <div className="task-details-header">
                        <div class="task-checkbox" type="checkbox"></div>
                        <textarea className="task-title">task title</textarea>
                        <div className="header-content">
                            <span>in list <span className="list-name">list name</span></span>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                    </div>
                    <main className="task-details-main">
                    <section className="task-details-info">
                        <div className="task-details-info-header">
                            <div className="task-members">
                                <h3 className="info-header-title">Members</h3>
                                <div className="members-icon">
                                    <div className="task-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                    </div>
                                    <div className="task-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                    </div>
                                    <div className="task-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                    </div>
                                    <div className="task-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                    </div>
                                </div>

                            </div>

                            <div className="task-labels">
                                <h3 className="info-header-title">Labels</h3> 
                                <div className="labels">
                                    <div className="label"></div>
                                    <div className="label"></div>
                                <button className="add-label">
                                <i className="fa-regular fa-plus"></i>
                                </button>
                                </div>
                            </div>

                            <div className="task-notifications">
                            <h3 className="info-header-title">Notifications</h3>
                                <button className="add-watch">
                                <span></span><i class="fa-regular fa-eye"></i> <span>Watch</span>
                                </button>
                            </div>


                            <div className="due-date">
                            <h3 className="info-header-title">Due date</h3>

                                <button>
                                    <span>Feb 16, 12:17PM</span>
                                    <span><i className="fa-regular fa-chevron-down"></i></span>
                                </button>
                            </div>

                        </div>


                        <div className="descrption">

                        </div>

                    </section>
                    <aside className="task-details-toolbar">

                    </aside>
                </main>
                </div>
                

            </div>

        </div>
    )
}