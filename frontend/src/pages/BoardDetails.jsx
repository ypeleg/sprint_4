


import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { SideBar } from "../cmps/SideBar"
import { loadTask } from "../store/store"
import { GroupList } from "../cmps/GroupList"
import { AppHeader } from "../cmps/AppHeader.jsx"
import React, { useRef, useEffect, useState } from "react"
import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"


// labels
// due date
// watching
// attachments
// checklists
// activity
// custom fields
// upper names



export function TaskModal({ taskToShow, onClose }) {

    // const [coverUrl, setCoverUrl] = useState("cover-img.png")
    
    const [coverUrl, setCoverUrl] = useState(taskToShow.style.backgroundImage || null)

    const [cardTitle, setCardTitle] = useState(taskToShow.title)
    const [listName, setListName] = useState("BACKLOG")
    const [isWatching, setIsWatching] = useState(taskToShow.isUserWatching || null)
    const [activeLabels, setActiveLabels] = useState(taskToShow.labels || [])
    const availableLabels = ["yellow", "blue", "green", "orange", "red", "purple"]
    const [description, setDescription] = useState(taskToShow.description || [])
    
    const [risk, setRisk] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")

    const [attachments, setAttachments] = useState(taskToShow.attachments || [])
    const [newAttachment, setNewAttachment] = useState("")

    const [checklistItems, setChecklistItems] = useState(
        taskToShow.checklists || []                
    )
    const [newChecklistItem, setNewChecklistItem] = useState("")

    const [hideChecked, setHideChecked] = useState(false)

    const [activityLog, setActivityLog] = useState(taskToShow.activity || [])

    const [newComment, setNewComment] = useState("")
    function handleLabelToggle(color) {
        setActiveLabels((prev) => prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color] )
    }

    const [members, setMembers] = useState(taskToShow.memberIds || [])
    

    function handleAddAttachment() {
        if (!newAttachment.trim()) return
        setAttachments((prev) => [...prev, newAttachment.trim()])
        setActivityLog((prev) => [`Added attachment: “${newAttachment}”`, ...prev])
        setNewAttachment("")
    }

    function handleRemoveAttachment(index) {
        const removed = attachments[index]
        setAttachments((prev) => prev.filter((_, i) => i !== index))
        setActivityLog((prev) => [`Removed attachment: “${removed}”`, ...prev])
    }

    function handleAddChecklistItem() {
        if (!newChecklistItem.trim()) return
        const newItem = {id: Date.now(), text: newChecklistItem.trim(), completed: false}
        setChecklistItems((prev) => [...prev, newItem])
        setActivityLog((prev) => [`Added checklist item: “${newChecklistItem}”`, ...prev])
        setNewChecklistItem("")
    }

    function handleChecklistToggle(id) {
        setChecklistItems((prev) => prev.map((item) => (item.id === id)? { ...item, completed: !item.completed }: item))
        const toggled = checklistItems.find((x) => x.id === id)
        if (toggled) {
            setActivityLog((prev) => [
                `Marked “${toggled.text}” as ${toggled.completed ? "incomplete" : "complete"}`, ...prev])
        }
    }

    function handleRemoveChecklist() {
        setChecklistItems([])
        setActivityLog((prev) => ["Deleted entire checklist", ...prev])
    }

    function handleAddComment() {
        if (!newComment.trim()) return
        setActivityLog((prev) => [`${newComment}`, ...prev])
        setNewComment("")
    }

    return (
        <div className="task-modal">

            {coverUrl? (<div
                className="task-cover"
                style={{ backgroundImage: `url(${coverUrl})` }}
            >
                <button className="task-modal-close" onClick={onClose}>x</button>
            </div>): (<div
                className="task-no-cover"
                // style={{ backgroundImage: `url(${coverUrl})` }}
            >
                <button className="task-modal-close" onClick={onClose}>x</button>
            </div>)

            }

            <div className="task-modal-content">
                <div className="task-modal-header">
                    <div className="task-left">
                        <div className="task-icon status-icon" title="Card is complete">
                            <i className="fa-regular fa-check" ></i>
                        </div>

                        <div className="task-title-section">
                            <input
                                type="text"
                                className="task-title"
                                value={cardTitle}
                                onChange={(e) => setCardTitle(e.target.value)}
                            />
                            <div className="task-subtitle">
                                in list <strong>{listName}</strong>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="task-layout">
                    <div className="task-main">

                        <div className="the-tasks task-section task-right inner-component-left-padding">                            
                            <div className="task-members">
                                <div className="section-inner">
                                    <div className="section-label">Members</div>
                                        <div className="just-flex-without-anything">
                                            {members.map( member => {
                                            return (<div className="member-circle" title="LH">
                                                        LH
                                                    </div>)
                                                // todo
                                            })}

                                            <button className="add-member-btn">+</button>
                                        </div>
                                    </div>
                            </div>

                            {/* <div className="labels"> */}
                                {/* a */}
                                {/* <pre>{JSON.stringify(taskToShow.labels, null, 4)}</pre> */}
                                {/* <div>{taskToShow.labels}</div> */}

                            {/* {(!!taskToShow.labels) &&
                                <>{taskToShow.labels.map(label => {
                                    return <div key={label.id} className="task-label color-green"
                                                style={{backgroundColor: label.color || ''}}
                                    ></div>
                                })}</>
                            } */}
                            {/* </div> */}

                            <div className="task-labels">
                                <div className="section-inner">
                                    <div className="section-label">Labels</div>
                                        <div className="just-flex-without-anything">
                                            {(!!taskToShow.labels) &&
                                                <>{taskToShow.labels.map(label => {
                                                    return (<div
                                                        key={label.color}
                                                        className={`member-label ${label.color}`}                                                                                                
                                                        style={{backgroundColor: label.color || ''}}
                                                        >
                                                            </div>)
                                                })}</>
                                            }
                                            <button className="add-label-btn">+</button>
                                        </div>
                                    </div>

                            </div>
                            <div className="task-notifications">
                                <div className="task-members">
                                    <div className="section-inner">
                                        <div className="section-label">Notifications</div>
                                                <div className="just-flex-without-anything">
                                                <button
                                                    className={`task-watch ${isWatching ? "active" : ""}`}
                                                    onClick={() => setIsWatching(!isWatching)}
                                                >
                                                    {isWatching ? "Watching" : "Watch"}
                                                </button>
                                                </div>
                                    </div>
                                </div>
                            </div>

                            <div className="task-notifications">
                                <div className="task-members">
                                    <div className="section-inner">
                                        <div className="section-label">Due Date</div>
                                                <div className="just-flex-without-anything">
                                                
                                                <div className="date-picker">
                                                    
                                                    <span>Feb 20, 8:43 PM</span>
                                                    <span className="complete-label">Complete</span>
                                                    <i className="fa-regular fa-chevron-down"></i>

                                                </div>
                                                
                                                
                                                </div>
                                    </div>
                                </div>
                            </div>


                            
    

                        </div>


                        <div className="task-section">


                            <div className="flex-space-between">
                                <div className="section-icon-title">
                                    <i className="fa-regular fa-align-left"></i>
                                    <h3>Description</h3>                                    
                                </div>
                                <button className="delete-btn">Edit</button>
                            </div>


                            <div className="section-header inner-component-left-padding">


                            </div>
                            <div className="inner-component-left-padding">
                                <p className="task-description">{description}</p>
                            </div>
                        </div>

                        <div className="task-section">
                            <div className="section-icon-title">
                                <i className="fa-regular fa-battery-empty"></i>
                                <h3>Custom Fields</h3>
                            </div>
                            
                            <div className="section-header inner-component-left-padding">
                            
                            </div>
                            <div className="task-custom-fields inner-component-left-padding">
                                <div>
                                    
                                    <label><i className="fa-solid fa-list"></i>  Risk </label>
                                    <select
                                        value={risk}
                                        onChange={(e) => setRisk(e.target.value)}
                                        className="custom-dropdown"
                                    >                                        
                                        <option value="">Select...</option>
                                        <option value="Low">Low</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div>
                                    <label><i className="fa-solid fa-list"></i>  Priority</label>
                                    <select
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                    >
                                        <option value="">Select...</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div>
                                    <label> <i className="fa-solid fa-list"></i>  Status</label>
                                    <select
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="">Select...</option>
                                        <option value="Open">Open</option>
                                        <option value="Blocked">Blocked</option>
                                        <option value="In Review">In Review</option>
                                        <option value="Done">Done</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className="task-section">

                            <div className="flex-space-between">
                                <div className="section-icon-title">
                                    <i className="fa-regular fa-paperclip"></i>
                                    <h3>Attachments</h3>                                    
                                </div>
                                <button className="delete-btn">Add</button>
                            </div>

                            <div className="task-attachment-row inner-component-left-padding">
                                
                                <div className="just-flex">
                                    <button className="attachment-extention">PNG</button>
                                    <div className="file-info">
                                        <h5>roi.png</h5>
                                        <label>Added just now</label>
                                    </div>
                                </div>
                            </div>
                            <ul className="task-attachments-list">
                                {attachments.map((att, i) => (
                                    <li key={i}>
                                        <span>{att}</span>
                                        <button onClick={() => handleRemoveAttachment(i)}>
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="task-section">                                                     
                            
                            <div className="checklist-container">                                    
                                <div className="flex-space-between">
                                    <div className="section-icon-title">
                                        <i className="fa-regular fa-check-square"></i>
                                        <h3>Checklist</h3>                                                                            
                                    </div>
                                    <button className="delete-btn">Delete</button>
                                </div>                               
                                
                                
                                <div className="progress inner-component-left-padding">

                                <div className="progress-container">
                                    <div className="progress-num">0%</div>
                                    <div className="progress-bar"></div>
                                </div>

                                </div>
                                
                                
                                <div className="task-checklist-add inner-component-left-padding">
                                    <input
                                        type="text"
                                        placeholder="Add an item"
                                        value={newChecklistItem}
                                        onChange={(e) => setNewChecklistItem(e.target.value)}
                                    />
                                </div>

                                <div className="side-by-side inner-component-left-padding">
                                    <div className="just-flex">

                                        <div className="checklist-actions">
                                            <button className="btn-add">Add</button>
                                            <button className="btn-cancel">Cancel</button>
                                        </div>
                                    </div>
                                    
                                    <div className="just-flex">
                                        <button className="footer-action">
                                            <i className="fa-regular fa-user"></i>
                                            Assign
                                        </button>
                                        <button className="footer-action">
                                            <i className="fa-regular fa-clock"></i>                                    
                                            Due date
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>


                        {/* geolocation, checklist */}

                        <div className="task-section">

                                <div className="section-icon-bit-down">
                                    {/* <i className="fa-regular fa-list"></i> */}
                                </div>

                                <div className="flex-space-between">
                                    <div className="section-icon-title">
                                        <i className="fa-regular fa-list"></i>
                                        <h3>Activity</h3>                                    
                                    </div>
                                    <button className="delete-btn">Hide Details</button>
                                </div>


                                    

                                <ul className="task-activity-list">
     
     
                                    <li key="1">                                           
                                        <div className="just-flex">
                                            <div className="user-circle">
                                                YP
                                            </div>    
                                            <div className="flex-col input-container">
                                                <input className="activity-input" type="text" placeholder="Write a comment..."/>
                                            </div>
                                        </div>
                                    </li>


                                    {activityLog.map((entry, idx) => (
                                        
                                        <li key={idx}>                                           
                                            <div className="just-flex">
                                                <div className="user-circle">
                                                    YP
                                                </div>    
                                                <div className="flex-col">
                                                    <div className="text-size-activity">    
                                                        <span className="full-name">yam peleg</span> attached <span className="file-name">roi.png</span> to this card
                                                    </div>
                                                    <div className="text-size-activity-2">                                             
                                                        just now
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                        </div>
                    </div>

                    <div className="task-sidebar">
                        <button className="sidebar-btn">Join</button>
                        <button className="sidebar-btn">Members</button>
                        <button className="sidebar-btn">Labels</button>
                        <button className="sidebar-btn">Checklist</button>
                        <button className="sidebar-btn">Dates</button>
                        <button className="sidebar-btn">Attachment</button>
                        <button className="sidebar-btn">Location</button>
                        <button className="sidebar-btn">Custom Fields</button>

                        {/* <h4 className="sidebar-subtitle">Power-Ups</h4>
                        <button className="sidebar-btn">Add Power-Ups</button>
                        <h4 className="sidebar-subtitle">Automation</h4>
                        <button className="sidebar-btn">?</button>
                        <button className="sidebar-btn">12/06</button>
                        <button className="sidebar-btn">ffff</button>
                        <button className="sidebar-btn">Add button</button> */}

                        <h4 className="sidebar-subtitle">Actions</h4>
                        <button className="sidebar-btn">Move</button>
                        <button className="sidebar-btn">Copy</button>
                        <button className="sidebar-btn">Mirror</button>
                        <button className="sidebar-btn">Make template</button>
                        <button className="sidebar-btn">Archive</button>
                        <button className="sidebar-btn">Share</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function useToggle(initialState) {

    const [isOn, setIsOn] = useState(initialState)

    function onToggle(_isOn) {
        if (typeof _isOn === 'boolean') {
            setIsOn(_isOn)
        } else {
            setIsOn(isOn => !isOn)
        }
    }
    return [isOn, onToggle]
}


// import {taskService} from '../services/task/task.service.local.js'


export function BoardDetails() {

    // taskService.query().then(res => console.log(res))

    const boardToShow = useSelector(state => state.boardModule.board)
    const [taskToShow, setTaskToShow] = useState(null)
    const { boardId } = useParams()
    // console.log(boardId)


    const [isPopupShown, togglePopup] = useToggle(false)


    useEffect(() => {
        onLoadBoard()
    }, [])

    async function onLoadBoard() {
        await loadBoard(boardId).then(() => {
            setTaskToShow(null)
        })
    }

    async function onLoadTask(task) {
        setTaskToShow(task)
        togglePopup()
    }

    if (!boardToShow) return (<>Loading..</>)
    return (
        <div className={`everything ${(isPopupShown)? 'popup-open' : ''}`}>

            {/* <button className="open-chat-btn" onClick={togglePopup}>💬</button> */}
            {isPopupShown && (!!taskToShow) && <>
                <div className="popup">
                    <TaskModal taskToShow={taskToShow} onClose={togglePopup} />
                </div>
                <div className="popup-backdrop"></div>
            </>}


            <AppHeader/>

            <main className="main-layout">

                <SideBar/>

                <section className="board-display">

                <header className="board-header">
                        <div className="header-group">
                            <h3 className="board-name">trelloception</h3>
                            <button><i className="fa-regular fa-star"></i></button>
                            <button><i className="fa-regular fa-user"></i></button>
                            <button><i className="fa-regular fa-align-center"></i></button>
                        </div>

                        <div className="header-group">
                            <button><i className="fa-regular fa-rocket"></i></button>
                            <button><i className="fa-regular fa-bolt"></i></button>
                            <button className="filters-btn"><i className="fa-regular fa-bars"></i> Filters</button>
                            <div className="divider"></div>
                            <div className="users">
                                <div className="user-icon">

                                    <img src="roi.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="roi.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="roi.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="roi.png"/>
                                </div>
                            </div>
                            <button className="share-btn">
                                <i className="fa-regular fa-user"></i>
                                <span>Share</span>
                            </button>

                            <button className="dots-at-end">
                                <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor"></path>
                                </svg>

                            </button>
                        </div>
                    </header>

                    <GroupList onLoadTask={onLoadTask} groups={boardToShow.groups}/>

                </section>

            </main>
        </div>
    )
}