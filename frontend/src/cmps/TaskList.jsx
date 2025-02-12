


export function TaskList() {



    return (
        <div className="task-list">

            <div className="task">

                <div className="stay-same-height flex-space-between">

                    <div className="labels">
                        <div className="task-label color-green">
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
                    <div className="task-checkbox" type="checkbox" />
                    <span className="task-task-text">make trello pixel perfect</span>
                </div>

                <div className="task-under-text flex-space-between">

                    <div className="task-badges">
                        <div className=""><i className="fa-regular fa-eye"></i></div>
                        <i className="fa-regular fa-clock"></i><div className="task-date">Feb 16</div>
                        <div className=""><i className="fa-regular fa-map"></i></div>

                        <div className="badge badge-priority">Priority: Medium</div>
                        <div className="badge badge-status-approved">Status: Approved</div>
                    </div>
                </div>

                <div className="task-users">
                    <div className="task-user-icon">
                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                    </div>
                    <div className="task-user-icon">
                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                    </div>
                    <div className="task-user-icon-no-pic">
                        YP
                    </div>
                    <div className="task-user-icon">
                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                    </div>
                </div>


            </div>


        </div>



    )
}