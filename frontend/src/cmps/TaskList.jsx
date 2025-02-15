

import { QuickEdit } from "./QuickEdit"
import { useNavigate } from "react-router"
import { AddTaskForm } from "./AddTaskForm"
import React, { useEffect, useRef, useState } from "react"



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
                                    return <div key={label.id} className={`task-label tooltip ${largeLabels ? 'task-label' : 'task-label-small'}`}
                                                onClick={toggleLargeLabels}
                                                style={{backgroundColor: label.color || ''}}
                                                data-tip={label.title}
                                    ></div>
                                })}</>
                            }
                        </div>
                        <div className="right-btns flex-space-between">
                            <div className="right-btns-btn">
                                <i className="fa-regular fa-box tooltip"
                                      data-tip="Archive"
                                ></i>
                            </div>
                            <div onClick={(ev) => onsetQuickEdit(ev,true)} className="right-btns-btn">
                                <i className="fa-regular fa-edit tooltip"
                                        data-tip="Edit Card"
                                ></i>
                            </div>
                        </div>
                    </div>

                    <div className="stay-same-height">
                        <div className= {`task-checkbox` + ((task.status === 'done') ? ' checked' : '')} type="checkbox"/>
                        <span className="task-task-text">{task.title}</span>
                    </div>

                    <div className="task-under-text flex-space-between">

                        <div className="task-badges">
                            {task.isUserWatching && (<div className="tooltip"
                                                          data-tip="You are watching this card"
                            ><i className="fa-regular fa-eye"></i></div>)}
                            {task.dueDate && (<>
                                <div className="task-date tooltip"
                                        data-tip="Due date"
                                ><i className="fa-regular fa-clock"></i> {new Date(task.dueDate).toLocaleDateString()} </div>
                            </>)}
                            {task.geoLocation && (<div className="tooltip"
                                                        data-tip="Location"
                            ><i className="fa-regular fa-map"></i></div>)}
                            {/* {(task.badges.length)} */}
                            {(task.badges.length !==0) && (task.badges.map(badge => {
                                
                                return <div key={badge.id} className={`tooltip badge badge-${badge.badeType}`}
                                            data-tip={badge.text}
                                >{badge.text}</div>
                                // <div className="badge badge-status-approved">Status: Approved</div>
                            }))}
                        </div>
                    </div>

                    <div className="task-users">

                        {(!!task.members) && (<div key = {task.id} className="task-user-icons task-user-icon">
                            {task.members.map(member => {


                                    if (member?.imgUrl) {
                                        return (<div className="user-circle task-user-icon" key={member.id}
                                                     style={{
                                                         backgroundImage: `url(${member.imgUrl})`
                                                     }}></div>)
                                    } else {
                                        return (<div key={member.id} className="member-circle task-user-icon" title="LH">

                                            {member?.fullname?.split(' ')[0][0]?.toUpperCase() || ''}{member?.fullname?.split(' ')[1][0]?.toUpperCase() || ''}
                                        </div>)
                                    }


                                // return <div key={member._id} className="task-user-icon">
                                //             <img key={'img' + member._id} src={member.imgUrl} />
                                //         </div>

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
                        </div>)}
                    </div>
                   {showQuickEdit&& <QuickEdit pos={editpos.current}/>}
                </div>)
            })}
            {showForm && <AddTaskForm onSetShowForm={onSetShowForm} selectedGroup={group}/>}

        </div>
        {!showForm &&
        <div className="group-list-footer" style={{color: group.style?.color || '#172b4d'}}>
            <button className="add-card-btn" onClick={onSetShowForm} style={{color: group.style?.color || '#172b4d'}}><i className="fa-regular fa-plus"></i> Add a card</button>
            <button className="tooltip create-from-template-btn" style={{color: group.style?.color || '#44546f'}}
            data-tip="Create from template">
                <svg style={{color: group.style?.color || '#44546f'}} width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" fill="currentColor"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z" fill="currentColor"></path>
                    <path d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z" fill="currentColor"></path>
                    <path d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z" fill="currentColor"></path>
                    <path d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z" fill="currentColor"></path>
                    <path d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z" fill="currentColor"></path>
                </svg>
                </button>
        </div>}
        </>

    )
}