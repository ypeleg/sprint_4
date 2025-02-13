

import { loadTask } from "../store/store"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"


export function TaskList( { tasks, style } ) {

    const navgite = useNavigate()
    const board =useSelector(state => state.boardModule.board)
   
    if (!tasks.length) return (<>Loading..</>)

    console.log(tasks)

    return (
        <div className="task-list">

            {tasks.map( (task, idx) => { return (<div key={task.id} onClick={()=> loadTask(task.id)} className="task">


                    {task.style.backgroundImage &&  
                        <div className="cover-img">
                            <img src={task.style.backgroundImage}/>
                        </div>
                    }

                    <div className="stay-same-height flex-space-between stay-same-height-start">                        
                        {/* <pre>{JSON.stringify(task, null, 4)}</pre> */}
                        <div className="labels">
                        {(!!task.labels) && 
                                <>{task.labels.map(label => {
                                     return <div key={label.id} className="task-label color-green"
                                     style={{backgroundColor: label.color || '' }}
                                     ></div>
                                    })}</>
                        }
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
                        <span className="task-task-text">{task.title}</span>
                    </div>

                    <div className="task-under-text flex-space-between">

                        <div className="task-badges">
                            {task.isUserWatching && ( <div className=""><i className="fa-regular fa-eye"></i></div> )}
                            {task.dueDate && (<> <i className="fa-regular fa-clock"></i><div className="task-date">{task.dueDate}</div> </>)}                            
                            {task.geoLocation && ( <div className=""><i className="fa-regular fa-map"></i></div> )}
                            {/* {(task.badges.length)} */}
                            {(task.badges.length) && (task.badges.map(badge => {                            
                                return <div key={badge.id} className={`badge badge-${badge.badeType}`}>{badge.text}</div>
                                // <div className="badge badge-status-approved">Status: Approved</div>
                            }))}
                        </div>
                    </div>

                    <div className="task-users">

                        {(!!task.memberIds) && (<>
                            {task.memberIds.map(member => {
                            
                            return <div key={member._id} className="task-user-icon">
                                        <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                                   </div>

                            // <div className="task-user-icon">
                            //     <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                            // </div>
                            // <div className="task-user-icon-no-pic">
                            //     YP
                            // </div>
                            // <div className="task-user-icon">
                            //     <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png" />
                            // </div>

                            })}
                        </>)}
                    </div>
                </div>)
            })}
        </div>
    )
}