

import { useEffect, useRef, useState } from "react"
import { loadTask } from "../store/store"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { AddTaskForm } from "./AddTaskForm"
import { QuickEdit } from "./QuickEdit"


export function TaskList({ currentBoard, currentGroup, onLoadTask, showForm, group, onSetShowForm }) {
    const {tasks} = group
    const navgite = useNavigate()
    const [showQuickEdit,setQuickEdit] = useState(false)
   let editpos = useRef()
    
    function onsetQuickEdit(ev,aa){
        const elment = ev.target
        const pos =elment.getBoundingClientRect()
        editpos.current = pos
        setQuickEdit(!showQuickEdit)
    }
 

    return (
        <div className="task-list">

            {/*<pre>{JSON.stringify(tasks.map(task => task.id), null, 4)}</pre>*/}

            {tasks.map((task, idx) => {
                return (<div key={task.id} onClick={() => onLoadTask(task)} className="task">


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
                                                style={{backgroundColor: label.color || ''}}
                                    ></div>
                                })}</>
                            }
                        </div>
                        <div className="right-btns flex-space-between">
                            <div className="right-btns-btn">
                                <i className="fa-regular fa-box"></i>
                            </div>
                            <div onClick={(ev) => onsetQuickEdit(ev,true)} className="right-btns-btn">
                                <i className="fa-regular fa-edit"></i>
                            </div>
                        </div>
                    </div>

                    <div className="stay-same-height">
                        <div className="task-checkbox" type="checkbox"/>
                        <span className="task-task-text">{task.title}</span>
                    </div>

                    <div className="task-under-text flex-space-between">

                        <div className="task-badges">
                            {task.isUserWatching && (<div className=""><i className="fa-regular fa-eye"></i></div>)}
                            {task.dueDate && (<> <i className="fa-regular fa-clock"></i>
                                <div className="task-date">{task.dueDate}</div>
                            </>)}
                            {task.geoLocation && (<div className=""><i className="fa-regular fa-map"></i></div>)}
                            {/* {(task.badges.length)} */}
                            {(task.badges.length !==0) && (task.badges.map(badge => {
                                
                                return <div key={badge.id} className={`badge badge-${badge.badeType}`}>{badge.text}</div>
                                // <div className="badge badge-status-approved">Status: Approved</div>
                            }))}
                        </div>
                    </div>

                    <div className="task-users">

                        {(!!task.memberIds) && (<>
                            {task.memberIds.map(member => {

                                return <div key={member._id} className="task-user-icon">
                                    <img src="https://trello-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
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
                   {showQuickEdit&& <QuickEdit pos={editpos.current}/>}
                </div>)
            })}
            {showForm && <AddTaskForm onSetShowForm={onSetShowForm} selectedGroup={group}/>}
        </div>
    )
}