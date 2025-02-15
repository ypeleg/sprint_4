

import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { AddTaskForm } from "./AddTaskForm"
import { QuickEdit } from "./QuickEdit"





export function TaskList({ currentBoard, currentGroup, onLoadTask, group, largeLabels, toggleLargeLabels }) {
    // onSetShowForm={onSetShowForm} showForm={showForm}

    const [showForm, setShowForm] = useState(false)




    function onSetShowForm() {
        setShowForm(!showForm)
    }


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
 

    return (<>
        <div className="task-list">

            {/*<pre>{JSON.stringify(tasks.map(task => task.id), null, 4)}</pre>*/}

            {tasks.map((task, idx) => {
                return (<div key={task.id} onClick={() => onLoadTask(task, currentGroup, group, currentBoard)} className="task">


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
                                    return <div key={label.id} className={`task-label ${largeLabels ? 'task-label' : 'task-label-small'}`}
                                                onClick={toggleLargeLabels}
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
                        <div className= {`task-checkbox` + ((task.status === 'done') ? ' checked' : '')} type="checkbox"/>
                        <span className="task-task-text">{task.title}</span>
                    </div>

                    <div className="task-under-text flex-space-between">

                        <div className="task-badges">
                            {task.isUserWatching && (<div className=""><i className="fa-regular fa-eye"></i></div>)}
                            {task.dueDate && (<>
                                <div className="task-date"><i className="fa-regular fa-clock"></i> {new Date(task.dueDate).toLocaleDateString()} </div>
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
        {!showForm &&
        <div className="group-list-footer" style={{color: group.style?.color || '#172b4d'}}>
            <button className="add-card-btn" onClick={onSetShowForm} style={{color: group.style?.color || '#172b4d'}}><i className="fa-regular fa-plus"></i> Add a card</button>
            <button className="create-from-template-btn" style={{color: group.style?.color || '#44546f'}}><i className="fa-regular fa-vector-square" style={{color: group.style?.color || '#44546f'}}></i></button>
        </div>}
    </>

    )
}