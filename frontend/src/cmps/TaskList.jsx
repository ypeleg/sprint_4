

import { QuickEdit } from "./QuickEdit"
import { useNavigate } from "react-router"
import { AddTaskForm } from "./AddTaskForm"
import React, { useEffect, useRef, useState } from "react"
import { eventBus } from "../services/event-bus.service"
import { useSelector } from "react-redux"



export function TaskList({  currentGroup, onLoadTask, group, largeLabels, toggleLargeLabels }) {
    // onSetShowForm={onSetShowForm} showForm={showForm}
    const boardToShow = useSelector(state => state.boardModule.board)
    const eventbus = eventBus
    const [showForm, setShowForm] = useState(false)
    const [showFirstForm, SetFirstForm] = useState(false)
    const [grouAdd,setGroupAdd] = useState('')
    const [tasks, setTasks] = useState(group.tasks)
    console.log(tasks)

    const navgite = useNavigate()
    const [showQuickEdit, setQuickEdit] = useState(false)
    let editpos = useRef()
    console.log('render')
    useEffect(()=>{
        setTasks(group.tasks)
    },[boardToShow])
    useEffect(() => {
        const unsubscribe = eventbus.on('showAddGroup', (data) => {
            onSetFirstForm(true); 
            setGroupAdd(data)
        });

        return () => {
            unsubscribe();  
        };
    }, []);
  

    // const { tasksTemp } = group
  
    function onSetFirstForm(){
        SetFirstForm(!showFirstForm)
    }
    function onSetShowForm() {
        setShowForm(!showForm)
    }

    function onsetQuickEdit(ev) {
        const elment = ev.target
        const pos = elment.getBoundingClientRect()
        editpos.current = pos
        setQuickEdit(!showQuickEdit)
    }

    function onToggleDone(ev, task) {
        ev.stopPropagation()
        setTasks([
            ...tasks.map(t => {
                if (t.id === task.id) {
                    t.status = (t.status === 'done') ? '' : 'done'
                }
                return t
            })
        ])
    }

    return (<>
        <div className="task-list">

          
            {showFirstForm &&(grouAdd === group.id)&& <AddTaskForm onSetShowForm={onSetFirstForm} selectedGroup={group} />}
            {tasks.map((task, idx) => {
                return (<div key={task.id} onClick={() => onLoadTask(task, currentGroup, group, boardToShow)} className="task">


                    {task.style.backgroundImage &&
                        <div className="cover-img">
                            <img src={task.style.backgroundImage} />
                        </div>
                    }

                    { (!(task.style.backgroundImage) && (task.style.backgroundColor)) &&
                        <div className="task-cover-color">
                            <div className="cover-color" style={{ backgroundColor: task.style.backgroundColor }}></div>
                        </div>
                    }
                    <div className="stay-same-height flex-space-between stay-same-height-start">
                        <div className="labels">
                            {(!!task.labels) &&
                                <>{task.labels.map(label => {
                                    return <div key={label.id} className={`task-label tooltip ${largeLabels ? 'task-label' : 'task-label-small'}`}
                                        onClick={toggleLargeLabels}
                                        style={{ backgroundColor: label.color || '' }}
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
                            <div onClick={(ev) => onsetQuickEdit(ev, true)} className="right-btns-btn">
                                <i className="fa-regular fa-edit tooltip"
                                    data-tip="Edit Card"
                                ></i>
                            </div>
                        </div>
                    </div>

                    <div className="stay-same-height">
                        <div className={`task-checkbox` + ((task.status === 'done') ? ' checked' : '')}
                        onClick={(ev) => onToggleDone(ev, task)}/>
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
                            
                            {(task.badges.length !==0) && (task.badges.map(badge => {
                                
                                return <div key={badge.id} className={`tooltip badge`}
                                            style={{
                                                backgroundColor: badge.color,
                                                color: badge.textColor,
                                            }}

                                            data-tip={badge.categ}
                                >{badge.categ}: {badge.chosenOption}</div>
                               
                            }))}

                            {task.activity.length > 0 && (<div className="tasklist-icon tooltip"
                                data-tip="Comments"
                            ><i className="fa-regular fa-comment"></i> {task.activity.length}</div>)}
                            {task.checklists.length > 0 && (<div className="tasklist-icon tooltip"
                                data-tip="Checklist"
                            ><i className="fa-regular fa-check-square"></i> {task.checklists.length}</div>)}
                            {task.attachments.length > 0 && (<div className="tasklist-icon tooltip"
                                data-tip="Attachments"
                            ><i className="fa-regular fa-paperclip"></i> {task.attachments.length}</div>)}
                            {task.description && (<div className="tasklist-icon tooltip"
                                data-tip="Description"
                            ><i className="fa-regular fa-align-left"></i></div>)}


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
                            })}
                        </div>)}
                    </div>
                    {showQuickEdit && <QuickEdit setQuickEdit={setQuickEdit} pos={editpos.current} />}
                </div>)
            })}
            {showForm && <AddTaskForm onSetShowForm={onSetShowForm} selectedGroup={group} />}

        </div>
        {!showForm &&
            <div className="group-list-footer" style={{ color: group.style?.color || '#172b4d' }}>
                <button className="add-card-btn" onClick={onSetShowForm} style={{ color: group.style?.color || '#172b4d' }}><i className="fa-regular fa-plus"></i> Add a card</button>
                <button className="tooltip create-from-template-btn" style={{ color: group.style?.color || '#44546f' }}
                    data-tip="Create from template">
                    <svg style={{ color: group.style?.color || '#44546f' }} width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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