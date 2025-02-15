

import {useParams} from "react-router"
import {useSelector} from "react-redux"
import {SideBar} from "../cmps/SideBar"
import {AddGroup} from "../cmps/AddGroup";
import {AppHeader} from "../cmps/AppHeader.jsx"
import {BoardHeader} from "../cmps/BoardHeader.jsx";
import React, {useRef, useEffect, useState} from "react"
import {loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard} from "../store/store.js"


// data changes:
// badges: give the task "all the possible options for a badge"
// change memberIds to members
// bring the task "the current list"
// bring the task "the current group"


import GoogleMapReact from 'google-map-react';
import {TaskList} from "../cmps/TaskList.jsx"

export function GoogleMap({lat = 32.109333, lng = 34.855499, zm = 11}) {
    const [center, setCenter] = useState({lat: lat, lng: lng})
    const zoom = zm

    function onHandleClick({lat, lng}) {
        // console.log('Click', ev)
        // console.log('lat,lng:', lat, lng)
        setCenter({lat, lng})
    }


    return (
        <div className="maps-container maps-container-outer">
            <div className="maps-in-1" style={{height: '160px', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: "AIzaSyA0IdqL0Yt-9iRrJsQ_kmA9e4hQTgXXJkc"}}
                    // defaultCenter={center}
                    center={center}
                    defaultZoom={zoom}
                    onClick={onHandleClick}
                >
                    <AnyReactComponent
                        // lat={center.lat}
                        // lng={center.lng}
                        {...center}
                        text="📍"
                    />
                </GoogleMapReact>
            </div>
            <div className="maps-in-2" style={{height: '52px', width: '512px'}}>
                <h3>Tel Aviv-Yafo</h3>
                <h5>Tel Aviv-Yafo, Israel</h5>
            </div>
        </div>
    )
}

const AnyReactComponent = ({text}) => <div style={{fontSize: '22px'}}>{text}</div>;


export function TaskModal({taskToShow, onClose}) {


    console.log('task', taskToShow)
    const [coverUrl, setCoverUrl] = useState(taskToShow.style.backgroundImage || null)
    const [cardTitle, setCardTitle] = useState(taskToShow.title || '')
    const [listName, setListName] = useState(taskToShow.group?.title || '')
    const [isWatching, setIsWatching] = useState(taskToShow.isUserWatching || null)
    const [description, setDescription] = useState(taskToShow.description || [])
    const [attachments, setAttachments] = useState(taskToShow.attachments || [])
    const [checklists, setChecklists] = useState(taskToShow.checklists || [])
    const [newChecklistItem, setNewChecklistItem] = useState([])
    const [activityLog, setActivityLog] = useState(taskToShow.activity || [])

    // console.log('members', taskToShow.board)
    //////////////////////
    // TODO: change to the ACTUAL members..
    // const membersToShow = taskToShow.memberIds.map(memberId => {
    //     return taskToShow.board.members.find(member => (member._id === memberId))
    // })      
    const membersToShow = taskToShow.board.members
    // console.log('---------')
    // console.log('taskToShow.memberIds', taskToShow.memberIds)
    // console.log('taskToShow.board.members', taskToShow.board.members)
    // console.log('---------')
    //////////////////////

    const [badges, setBadges] = useState(taskToShow.badges || [])
    const [members, setMembers] = useState(membersToShow || [])
    const [date, setDate] = useState(taskToShow.dueDate || "")
    const dateInputRef = useRef(null);

    function onDateChange(e) {
        setDate(e.target.value)
    }

    function onDateClick() {
        dateInputRef.current?.showPicker()
    }


    ////////////////////////
    // TODO: IMPLEMENT
    function saveTask() {
        // TODO: saves the ENTIRE states back to the task in the store
    }

    // TODO: IMPLEMENT
    ////////////////////////


    return (
        <div className="task-modal">

            {coverUrl ? (<div
                className="task-cover"
                style={{backgroundImage: `url(${coverUrl})`}}
            >
                <button className="task-modal-close" onClick={onClose}>x</button>
            </div>) : (<div
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
                            <i className="fa-regular fa-check"></i>
                        </div>

                        <div className="task-title-section">
                            <input
                                type="text"
                                className="task-title"
                                value={cardTitle}
                                onChange={(e) => setCardTitle(e.target.value)}
                            />
                            <div className="task-subtitle">
                                in list <strong
                                style={{backgroundColor: taskToShow.group.style?.backgroundColor || ''}}
                            >{listName} <i className="fa-regular fa-chevron-down"></i> </strong> {isWatching && <i className="fa-regular fa-eye"></i>}
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
                                        {members.map(member => {
                                            if (member?.imgUrl) {
                                                return (<div className="user-circle"
                                                             style={{
                                                                 backgroundImage: `url(${member.imgUrl})`
                                                             }}></div>)
                                            } else {
                                                return (<div key={member.id} className="member-circle" title="LH">
                                                    {member?.fullname?.split(' ')[0][0]?.toUpperCase() || ''}{member?.fullname?.split(' ')[1][0]?.toUpperCase() || ''}
                                                </div>)
                                            }
                                        })}
                                        <button className="add-member-btn"><i className="fa-regular fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>


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
                                        <button className="add-label-btn"><i className="fa-regular fa-plus"></i></button>
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

                                            <div className="date-picker" onClick={onDateClick}>
                                                <span className="pointer-cursor">{new Date(date).toLocaleDateString()} </span>
                                                {(new Date(date) < Date.now()) ?
                                                    ((taskToShow.status === 'done') ?
                                                            (<span className="complete-label">Complete</span>) :
                                                            (<span className="incomplete-label">Overdue</span>)
                                                    ) : <span>a</span>
                                                }
                                                <i className="fa-regular fa-chevron-down"></i>
                                                <input
                                                    ref={dateInputRef}
                                                    type="date"
                                                    onChange={onDateChange}
                                                    className="date-picker-input pointer-cursor"
                                                />
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
                                <p contentEditable
                                   className="task-description"
                                   onChange={setDescription}>{description}
                                    onFocusOut={saveTask}</p>
                            </div>
                        </div>


                        <div className="task-section">

                            <div className="flex-space-between">
                                <div className="section-icon-title">
                                    <i className="fa-regular fa-map"></i>
                                    <h3>Location</h3>
                                </div>
                                {/* <button className="delete-btn">Edit</button> */}
                            </div>

                            <div className="inner-component-left-padding">
                                <GoogleMap/>

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

                                {badges.map(badge => {
                                    return <div>
                                        <div className="just-flex">
                                            <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM8 8C8 9.65685 6.65685 11 5 11C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5C6.65685 5 8 6.34315 8 8ZM6 16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16ZM8 16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16C2 14.3431 3.34315 13 5 13C6.65685 13 8 14.3431 8 16ZM19 7H13C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM13 5C11.3431 5 10 6.34315 10 8C10 9.65685 11.3431 11 13 11H19C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5H13ZM13 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM10 16C10 14.3431 11.3431 13 13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19H13C11.3431 19 10 17.6569 10 16Z" fill="currentColor"></path>
                                            </svg>
                                            <label>{badge.categ}</label>
                                        </div>
                                        <select
                                            value={badge.text}
                                            onChange={(e) => setBadges(e.target.value)}
                                            className="custom-dropdown"
                                            style={{
                                                backgroundColor: `${badge.color}`
                                            }}
                                        >
                                            <option value="">Select...</option>
                                            {badge.badgeOptions.map(option => {
                                                return <option value={option}>{option}</option>
                                            })}


                                        </select>

                                    </div>

                                })}

                                {/*<div>*/}
                                {/*    <div className="just-flex">*/}
                                {/*        <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                                {/*            <path*/}
                                {/*                d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM8 8C8 9.65685 6.65685 11 5 11C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5C6.65685 5 8 6.34315 8 8ZM6 16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16ZM8 16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16C2 14.3431 3.34315 13 5 13C6.65685 13 8 14.3431 8 16ZM19 7H13C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM13 5C11.3431 5 10 6.34315 10 8C10 9.65685 11.3431 11 13 11H19C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5H13ZM13 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM10 16C10 14.3431 11.3431 13 13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19H13C11.3431 19 10 17.6569 10 16Z" fill="currentColor"></path>*/}
                                {/*    </svg>*/}
                                {/*    <label>Risk</label>*/}
                                {/*    </div>*/}
                                {/*    <select*/}
                                {/*        value={risk}*/}
                                {/*        onChange={(e) => setRisk(e.target.value)}*/}
                                {/*        className="custom-dropdown"*/}
                                {/*    >*/}
                                {/*        <option value="">Select...</option>*/}
                                {/*        <option value="Low">Low</option>*/}
                                {/*        <option value="Moderate">Moderate</option>*/}
                                {/*        <option value="High">High</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}

                                {/*<div>*/}
                                {/*    <div className="just-flex">*/}
                                {/*        <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                                {/*            <path*/}
                                {/*                d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM8 8C8 9.65685 6.65685 11 5 11C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5C6.65685 5 8 6.34315 8 8ZM6 16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16ZM8 16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16C2 14.3431 3.34315 13 5 13C6.65685 13 8 14.3431 8 16ZM19 7H13C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM13 5C11.3431 5 10 6.34315 10 8C10 9.65685 11.3431 11 13 11H19C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5H13ZM13 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM10 16C10 14.3431 11.3431 13 13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19H13C11.3431 19 10 17.6569 10 16Z" fill="currentColor"></path>*/}
                                {/*        </svg>*/}
                                {/*        <label>Priority</label>*/}
                                {/*    </div>*/}
                                {/*    <select*/}
                                {/*        value={priority}*/}
                                {/*        onChange={(e) => setPriority(e.target.value)}*/}
                                {/*        style={{*/}
                                {/*            backgroundColor: '#f8e6a0'*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        <option value="">Select...</option>*/}
                                {/*        <option value="Low">Low</option>*/}
                                {/*        <option value="Medium">Medium</option>*/}
                                {/*        <option value="High">High</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}

                                {/*<div>*/}

                                {/*    <div className="just-flex">*/}
                                {/*        <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
                                {/*            <path*/}
                                {/*                d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM8 8C8 9.65685 6.65685 11 5 11C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5C6.65685 5 8 6.34315 8 8ZM6 16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16ZM8 16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16C2 14.3431 3.34315 13 5 13C6.65685 13 8 14.3431 8 16ZM19 7H13C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM13 5C11.3431 5 10 6.34315 10 8C10 9.65685 11.3431 11 13 11H19C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5H13ZM13 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM10 16C10 14.3431 11.3431 13 13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19H13C11.3431 19 10 17.6569 10 16Z" fill="currentColor"></path>*/}
                                {/*        </svg>*/}
                                {/*        <label>Status</label>*/}
                                {/*    </div>*/}
                                {/*    <select*/}
                                {/*        value={status}*/}
                                {/*        onChange={(e) => setStatus(e.target.value)}*/}
                                {/*        style={{*/}
                                {/*            backgroundColor: '#fdddc7'*/}
                                {/*        }}*/}
                                {/*    >*/}
                                {/*        <option value="">Select...</option>*/}
                                {/*        <option value="Open">Open</option>*/}
                                {/*        <option value="Blocked">Blocked</option>*/}
                                {/*        <option value="In Review">In Review</option>*/}
                                {/*        <option value="Done">Done</option>*/}
                                {/*    </select>*/}
                                {/*</div>*/}

                            </div>
                        </div>


                        {(attachments.length !== 0) &&

                            <div className="task-section">

                                <div className="flex-space-between">
                                    <div className="section-icon-title">
                                        <i className="fa-regular fa-paperclip"></i>
                                        <h3>Attachments</h3>
                                    </div>
                                    <button className="delete-btn">Add</button>
                                </div>
                                <>
                                    <div className="inner-component-left-padding">Files</div>
                                    <div className="task-attachment-row inner-component-left-padding">

                                        {(attachments.map(attachment => {
                                            return <>
                                                <div className="just-flex">
                                                    <button className="attachment-extention">PNG</button>
                                                    <div className="file-info">
                                                        <h5>{attachment.path}</h5>
                                                        <label>{new Date(attachment.date).toLocaleDateString()}</label>
                                                    </div>
                                                </div>
                                            </>
                                        }))}

                                    </div>

                                </>
                            </div>
                        }


                        <div className="task-section">


                            {checklists && <>
                                {checklists.map(checklist => {
                                    return <>
                                        <div key={checklist.id} className="checklist-container">
                                            <div className="flex-space-between">
                                                <div className="section-icon-title">
                                                    <i className="fa-regular fa-check-square"></i>
                                                    <h3>{checklist.title}</h3>
                                                </div>
                                                <button className="delete-btn">Delete</button>
                                            </div>


                                            {checklist.progress &&
                                                <div className="progress inner-component-left-padding">
                                                    <div className="progress-container">
                                                        <div className="progress-num">0%</div>
                                                        <div className="progress-bar"></div>
                                                    </div>
                                                </div>}

                                            {checklist.todos.map(todo => {
                                                return <>
                                                    <div>
                                                        <div className="just-flex-with-center checklist-todos">
                                                            <input name={todo.title} type="checkbox"/>
                                                            <label>{todo.title}</label>
                                                        </div>
                                                    </div>
                                                </>
                                            })}


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
                                    </>
                                })}
                            </>}


                        </div>


                        {/* geolocation */}

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
                                            {!(entry?.byMember?.imgUrl) &&
                                                <div className="user-circle">
                                                    {entry?.byMember?.fullname?.split(' ')[0][0]?.toUpperCase() || ''}{entry?.byMember?.fullname?.split(' ')[1][0]?.toUpperCase() || ''}
                                                </div>}
                                            {(entry?.byMember?.imgUrl) &&
                                                <div className="user-circle"
                                                     style={{
                                                         backgroundImage: `url(${entry.byMember.imgUrl})`
                                                     }}>
                                                </div>}
                                            <div className="flex-col">
                                                <div className="text-size-activity">
                                                    {/* <span className="full-name">yam peleg</span> attached <span className="file-name">roi.png</span> to this card */}
                                                    <span className="full-name">{entry?.byMember?.fullname}</span> {entry.title}
                                                </div>
                                                <div className="text-size-activity-2">
                                                    {new Date(entry.createdAt).toLocaleDateString()}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="task-sidebar">
                        <button className="sidebar-btn"><i className="fa-regular fa-user-plus"></i> Join</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-user"></i> Members</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-tag"></i> Labels</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-check-square"></i> Checklist</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-calendar-alt"></i> Dates</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-paperclip"></i> Attachment</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-map-marker-alt"></i> Location</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-th-list"></i> Custom Fields</button>

                        <h4 className="sidebar-subtitle">Actions</h4>
                        <button className="sidebar-btn"><i className="fa-regular fa-arrow-right"></i> Move</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-copy"></i> Copy</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-clone"></i> Mirror</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-file-alt"></i> Make template</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-archive"></i> Archive</button>
                        <button className="sidebar-btn"><i className="fa-regular fa-share-alt"></i> Share</button>
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
    const {boardId} = useParams()
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

    async function onLoadTask(task, taskList, group, currentBoard) {
        console.log('task', task)
        console.log('taskList', taskList)
        console.log('group', group)

        task.group = group


        // green
        if (task.group.style.backgroundColor === "#60D394") {
            task.group.style.color = "#164b35"
        }

        // yellow
        if (task.group.style.backgroundColor === "#FFD97D") {
            task.group.style.color = "#4f3a0e"
        }

        // orange
        if (task.group.style.backgroundColor === "#fea362") {
            task.group.style.color = "#6e3b0d"
        }

        // red
        if (task.group.style.backgroundColor === "#FF6B6B") {
            task.group.style.color = "#6e0d0d"
        }

        // purple
        if (task.group.style.backgroundColor === "#9f8fef") {
            task.group.style.color = "#4f3a0e"
        }

        // blue
        if (task.group.style.backgroundColor === "#579dff") {
            task.group.style.color = "#0d2e6e"
        }

        // light blue
        if (task.group.style.backgroundColor === "#6cc3e0") {
            task.group.style.color = "#0d3a4f"
        }

        // green
        if (task.group.style.backgroundColor === "#94c748") {
            task.group.style.color = "#3a4f0d"
        }

        // pink
        if (task.group.style.backgroundColor === "#e774bb") {
            task.group.style.color = "#6e0d3a"
        }

        // grey
        if (task.group.style.backgroundColor === "#8590a2") {
            task.group.style.color = "#3a3a3a"
        }


        task.taskList = taskList
        task.board = currentBoard

        task.attachments = [
            {
                path: 'roi.png',
                date: Date.now()
            }
        ]

        task.activity = [
            {
                "id": "rvfEjZ",
                "title": "All a different story was .",
                "createdAt": 1675556288449,
                "byMember": {
                    "_id": "u101",
                    "fullname": "Abi Abambi",
                    "imgUrl": "roi.png"
                }
            }
        ]

        console.log(task.badges)

        task.badges = [
            {
                "id": "pibi7g",
                "text": "Highest",
                "categ": "Priority",
                "badeType": "risk",
                "color": "#fdddc7",
                "badgeOptions": ["Low", "Medium", "High"]
            },
            {
                "id": "FTTxrr",
                "text": "Approved",
                "categ": "Status",
                "badeType": "approved",
                "color": "#f8e6a0",
                "badgeOptions": ["Open", "Blocked", "In Review", "Done"],
            }
        ]

        // change all the image of all the members to roi.png
        task.board.members = task.board.members.map(member => {
            member.imgUrl = "roi.png"
            return member
        })

        setTaskToShow(task)
        togglePopup()
    }

    function closePopupOnlyIfClickedOutOfIt(e) {
        if (e.target === e.currentTarget) {
            togglePopup()
        }
    }

    const [largeLabels, setLargeLabels] = useState(true)

    function toggleLargeLabels(ev) {
        ev.stopPropagation()
        setLargeLabels(!largeLabels)
    }

    if (!boardToShow) return (<>Loading..</>)
    return (
        <div className={`everything ${(isPopupShown) ? 'popup-open' : ''}`}>

            {/* <button className="open-chat-btn" onClick={togglePopup}>💬</button> */}
            {isPopupShown && (!!taskToShow) && <>
                <div className="popup" onClick={closePopupOnlyIfClickedOutOfIt}>

                    <TaskModal taskToShow={taskToShow} onClose={togglePopup}/>

                </div>
                <div className="popup-backdrop" onClick={togglePopup}></div>
            </>
            }


            <AppHeader/>

            <main className="main-layout">

                <SideBar/>

                <section className="board-display">

                    <BoardHeader/>

                    <section className="group-lists">
                        {boardToShow.groups.map(group => {

                            // return <GroupPreview currentBoard={boardToShow} onLoadTask={onLoadTask} group={group}/>
                            return <div className="list base-components-list" style={{backgroundColor: (group.style?.backgroundColor || ''), color: (group.style?.color || '#172b4d')}}>
                                <div className="list-header just-flex">
                                    <span style={{color: group.style?.color || '#172b4d'}}>{group.title}</span>
                                    <div className="group-list-headr-btns" style={{color: group.style?.color || '#172b4d'}}>
                                        {/*<i className="fa-regular fa-arrows-h"></i>*/}
                                        <i className="tooltip fa-regular fa-compress-alt" style={{
                                            transform: "translateY(-0px) translateX(-0px) rotate(45deg) scale(1.2) ",
                                            color: group.style?.color || '#172b4d'
                                        }}
                                        ></i>

                                        <i className="tooltip fa-regular fa-ellipsis-h"
                                        style={{color: group.style?.color || '#172b4d'}}
                                           data-tip="List actions"
                                        ></i>
                                    </div>
                                </div>

                                <TaskList toggleLargeLabels={toggleLargeLabels} largeLabels={largeLabels} currentBoard={boardToShow} currentGroup={group} onLoadTask={onLoadTask} group={group}/>


                            </div>


                        })}
                        <AddGroup/>
                    </section>

                </section>

            </main>
        </div>
    )
}