

import {useParams} from "react-router"
import {useSelector} from "react-redux"
import {SideBar} from "../cmps/SideBar"
import {useNavigate} from "react-router"
import {AddGroup} from "../cmps/AddGroup";
import {AppHeader} from "../cmps/AppHeader.jsx"
import {BoardHeader} from "../cmps/BoardHeader.jsx";
import React, {useRef, useEffect, useState} from "react"
import {loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard, store} from "../store/store.js"



// data changes:
// badges: give the task "all the possible options for a badge"
// change memberIds to members
// bring the task "the current list"
// bring the task "the current group"


import GoogleMapReact from 'google-map-react';
import {TaskList} from "../cmps/TaskList.jsx"
import { GroupHeader } from "../cmps/GroupHeader.jsx";
import {random} from "../services/util.service.js"

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


export function TaskModal({taskToShow, onClose, popupRef}) {


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
    const [location, setLocation] = useState(taskToShow.location || {})
    // console.log('members', taskToShow.board)
    //////////////////////
    // TODO: change to the ACTUAL members..
    // const membersToShow = taskToShow.memberIds.map(memberId => {
    //     return taskToShow.board.members.find(member => (member._id === memberId))
    // })      
    // const membersToShow = taskToShow.board.members
    // console.log('---------')
    // console.log('taskToShow.memberIds', taskToShow.memberIds)
    // console.log('taskToShow.board.members', taskToShow.board.members)
    // console.log('---------')
    //////////////////////

    const [badges, setBadges] = useState(taskToShow.badges || [])
    const [members, setMembers] = useState(taskToShow.members || [])
    const [boardMembers, setBoardMembers] = useState(taskToShow.board.members || [])
    const [date, setDate] = useState(taskToShow.dueDate || "")
    const dateInputRef = useRef(null);

    const [showLabels, setShowLabels] = useState(true)
    const [showMembers, setShowMembers] = useState(true)
    const [showCustomFields, setShowCustomFields] = useState(true)
    const [showDate, setShowDate] = useState(false)
    const [showMaps, setShowMaps] = useState(false)
    const [showChecklist, setShowChecklist] = useState(false)
    const [showActivity, setShowActivity] = useState(false)
    const [showAttachments, setShowAttachments] = useState(false)

    const [showPicker, setShowPicker] = useState(false)
    const [showPickerDate, setShowPickerDate] = useState(false)
    const [showPickerCustomBadges, setShowPickerCustomBadges] = useState(false)
    const [showPickerLocation, setShowPickerLocation] = useState(false)
    const [showPickerAttachments, setShowPickerAttachments] = useState(false)
    const [showPickerChecklists, setShowPickerChecklists] = useState(false)
    const [showPickerLabels, setShowPickerLabels] = useState(false)
    const [showPickerMembers, setShowPickerMembers] = useState(false)
    const [showPickerMoveCard, setShowPickerMoveCard] = useState(false)
    const [showPickerCopyCard, setShowPickerCopyCard] = useState(false)
    const [showPickerMirrorCard, setShowPickerMirrorCard] = useState(false)
    const [showPickerShareCard, setShowPickerShareCard] = useState(false)
    const [showPickerChangeALabel, setShowPickerChangeALabel] = useState(false)
    const [showPickerUnderConstruction, setShowPickerUnderConstruction] = useState(false)

    const [showFieldsEditor, setShowFieldsEditor] = useState(false)

    const [pickerTop, setPickerTop] = useState('0px')
    const [pickerLeft, setPickerLeft] = useState('0px')

    const [newFieldId, setNewFieldId] = useState(null)
    const [newFieldTitle, setNewFieldTitle] = useState('')
    const [newFieldOptions, setNewFieldOptions] = useState([])
    const [newFieldOption, setNewFieldOption] = useState('')

    function onCreateField() {
        if (!newFieldId) {
            setBadges(badges => [{
                id: random.id(),
                categ: newFieldTitle,
                color: '',
                // ['#fdddc7', '#f8e6a0', '#ffe2bd', '#ffc0cb']),
                badgeOptions: newFieldOptions,
            }, ...badges])
        } else {
            setBadges(badges => badges.map(badge => {
                if (badge.id === newFieldId) {
                    return {
                        ...badge,
                        categ: newFieldTitle,
                        badgeOptions: newFieldOptions
                    }
                }
                return badge
            }))
        }


        setNewFieldTitle('')
        setNewFieldOptions([])
        setShowFieldsEditor(false)
    }

    const [newChecklistTitle, setNewChecklistTitle] = useState('')

    function dropDuplicateMembers(cardMembers, boardMembers) {
        return boardMembers.reduce((acc, member) => {
            if (!cardMembers.some(m => m._id === member._id)) {
                acc.push(member);
            }
            return acc;
        }, []);
    }

    const [boardMembersToShow, setBoardMembersToShow] = useState(dropDuplicateMembers(members, boardMembers))

    function onAddMember(member) {
        setMembers(prev => [...prev, member])
        setBoardMembersToShow(prev => prev.filter(m => m._id !== member._id))
    }

    function onRemoveMember(member) {
        setMembers(prev => prev.filter(m => m._id !== member._id))
        setBoardMembersToShow(prev => [...prev, member])
    }
    // console.log('card', members)
    // console.log('boardMembers', boardMembers)
    // console.log('boardMembersToShow', boardMembersToShow)


    function onAddChecklist(ev) {
        setChecklists(prev => [...prev, {
            id: Date.now(),
            title: newChecklistTitle,
            todos: []
        }])
        setNewChecklistTitle('')
        hidePicker(ev)
    }



    function dropDuplicateLabels(labels) {
        return labels.reduce((acc, label) => {
            if (!acc.some(l =>((l.color === label.color))))  {
                acc.push(label)
            }
            return acc
        }, [])
    }

    const [cardLabels, setCardLabels] = useState(dropDuplicateLabels(taskToShow.labels || []))
    const [groupLabels, setGroupLabels] = useState(dropDuplicateLabels(taskToShow.board.labels || []))
    console.log('groupLabels2', groupLabels)

    function onToggleLabel(label) {
        setCardLabels(prev => {
            const isAlreadyAssigned = prev.some(l => l.color === label.color);
            if (isAlreadyAssigned) {
                return prev.filter(l => l.color !== label.color);
            } else {
                return [...prev, label];
            }
        });
    }

    const [currentLabelText, setCurrentLabelText] = useState('')
    const [previousLabelColor, setPreviousLabelColor] = useState('')
    const [currentLabelColor, setCurrentLabelColor] = useState('')
    function onChangeCurrentLabelColor(ev) {setCurrentLabelColor(ev.target.style.backgroundColor)}
    function onChangeCurrentLabelText(ev) {setCurrentLabelText(ev.target.value)}
    function onDeleteLabel(label) {
        setGroupLabels(groupLabels.filter(l => l.color !== previousLabelColor))
        setCurrentLabelText('')
        setCurrentLabelColor('')
        setPreviousLabelColor('')
    }
    function onSaveLabelChange() {
        if (groupLabels.some(l => l.color === previousLabelColor)) {
            setGroupLabels(prev => prev.map(l => l.color === previousLabelColor ? {color: currentLabelColor, title: currentLabelText} : l))
        } else {
            setGroupLabels(prev => [...prev, {color: currentLabelColor, title: currentLabelText}])
            setCardLabels(prev => [...prev, {color: currentLabelColor, title: currentLabelText}])
        }
        setCurrentLabelText('')
        setCurrentLabelColor('')
        setPreviousLabelColor('')
    }
    function hidePicker(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        setShowPicker(false)
        setShowPickerDate(false)
        setShowPickerCustomBadges(false)
        setShowPickerLocation(false)
        setShowPickerAttachments(false)
        setShowPickerChecklists(false)
        setShowPickerLabels(false)
        setShowPickerMembers(false)
        setShowPickerMoveCard(false)
        setShowPickerCopyCard(false)
        setShowPickerMirrorCard(false)
        setShowPickerShareCard(false)
        setShowPickerUnderConstruction(false)
        setShowPickerChangeALabel(false)
    }

    function movePickerTo(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        console.log('ev', ev)

        // const parent = document.querySelector('.popup')
        const parent = popupRef.current
        const parentRect = parent.getBoundingClientRect()
        const targetRect = ev.target.getBoundingClientRect()

        const topOffset = (targetRect.top - parentRect.top) + parent.scrollTop + 30
        const leftOffset = (targetRect.left - parentRect.left) + parent.scrollLeft - 200

        setPickerTop(`${topOffset}px`)
        setPickerLeft(`${leftOffset}px`)

        setShowPicker(true)
    }

    function onDateChange(e) {
        setDate(e.target.value)
    }

    function onDateClick() {
        dateInputRef.current?.showPicker()
    }

    function saveTask() {
        const boardCopy = {
            ...taskToShow.board,
            groups: taskToShow.board.groups.map(g => ({
                ...g,
                tasks: g.tasks.map(t => {
                    const { group, board, taskList, ...rest } = t
                    return { ...rest }
                })
            }))
        }
        const groupIdx = boardCopy.groups.findIndex(g => g.id === taskToShow.group.id)
        if (groupIdx === -1) return
        const taskIdx = boardCopy.groups[groupIdx].tasks.findIndex(t => t.id === taskToShow.id)
        if (taskIdx === -1) return
        const updatedTask = {
            ...taskToShow,
            title: cardTitle,
            description,
            isWatching,
            style: {
                ...taskToShow.style,
                backgroundImage: coverUrl || null
            },
            attachments,
            checklists,
            activity: activityLog,
            badges,
            members,
            dueDate: date,
            location,
            group: {
                ...taskToShow.group,
                title: listName
            }
        }
        const { group, board, taskList, ...cleanTask } = updatedTask
        boardCopy.groups[groupIdx].tasks[taskIdx] = { ...cleanTask }
        updateBoard(boardCopy)
            .then(() => onClose())
            .catch(err => console.error(err))
    }









    // return (
    //     <div className="task-modal">
    //         {/* ... */}
    //         <button onClick={saveTask}>Save</button>
    //         {/* ... */}
    //     </div>
    // )



    const [attachmentFile, setAttachmentFile] = useState(null)
    const [attachmentLink, setAttachmentLink] = useState("")
    const [attachmentDisplayText, setAttachmentDisplayText] = useState("")
    const fileInputRef = useRef(null)

    function onFileSelected(ev) {
        const file = ev.target.files?.[0]
        if (file) setAttachmentFile(file)
    }

    function onInsertAttachment() {
        if (attachmentFile) {
            const newAttachment = {
                id: Date.now(),
                path: attachmentFile.name,
                date: Date.now(),
                displayText: attachmentDisplayText || attachmentFile.name,
                type: 'file'
            };
            setAttachments((prev) => [...prev, newAttachment]);

        } else if (attachmentLink) {
            const newAttachment = {
                id: Date.now(),
                path: attachmentLink,
                date: Date.now(),
                displayText: attachmentDisplayText || attachmentLink,
                type: 'link'
            };

            setAttachments((prev) => [...prev, newAttachment]);
        }
        setAttachmentFile(null);
        setAttachmentLink("");
        setAttachmentDisplayText("");
        hidePicker();
    }


    return (
        <>
            <div className="task-modal">
                {/*FIX:::*/}
                {/*onClick={hidePicker}>*/}


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
                    <button onClick={saveTask}>---DEBUG---Save---</button>
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
                                    onClick={(event) => {
                                        hidePicker(event)
                                        movePickerTo(event)
                                        setShowPickerMoveCard(true)
                                    }}
                                >{listName} <i className="fa-regular fa-chevron-down"></i> </strong> {isWatching && <i className="fa-regular fa-eye"></i>}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="task-layout">
                        <div className="task-main">

                            <div className="the-tasks task-section task-right inner-component-left-padding">

                                {/* Upper bar - members, notifications, due date */}

                                {/* Members */}
                                {showMembers &&
                                    <div className="task-members">
                                        <div className="section-inner">
                                            <div className="section-label">Members</div>
                                            <div className="just-flex-without-anything">
                                                {members.map(member => {
                                                    if (member?.imgUrl) {
                                                        return (<div className="user-circle" key={member.id}
                                                                     style={{
                                                                         backgroundImage: `url(${member.imgUrl})`
                                                                     }}></div>)
                                                    } else {
                                                        return (<div key={member.id} className="member-circle" title="LH">

                                                            {member?.fullname?.split(' ')[0][0]?.toUpperCase() || ''}{member?.fullname?.split(' ')[1][0]?.toUpperCase() || ''}
                                                        </div>)
                                                    }
                                                })}
                                                <button className="add-member-btn"
                                                        onClick={() => {
                                                            hidePicker(event)
                                                            movePickerTo(event)
                                                            setShowPickerMembers(true)
                                                        }}
                                                ><i className="fa-regular fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {/* Labels */}
                                {showLabels &&
                                    <div className="task-labels">
                                        <div className="section-inner">
                                            <div className="section-label">Labels</div>
                                            <div className="just-flex-without-anything">
                                                {(!!cardLabels) &&
                                                    <>{cardLabels.map(label => {
                                                        return (<div
                                                            key={label.color}
                                                            className={`member-label ${label.color}`}
                                                            style={{backgroundColor: label.color || ''}}
                                                        >
                                                        </div>)
                                                    })}</>
                                                }
                                                <button className="add-label-btn"
                                                        onClick={() => {
                                                            hidePicker(event)
                                                            movePickerTo(event)
                                                            setShowPickerLabels(true)
                                                        }}>
                                                    <i className="fa-regular fa-plus"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                }

                                {/* Watching Button */}
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

                                {/* Due Date */}
                                {showDate &&
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
                                }

                            </div>
                            {/* closing div for: upper bar - members, notifications, due date  */}

                            {/* Description */}
                            <div className="task-section">
                                <div className="flex-space-between">
                                    <div className="section-icon-title">
                                        <i className="fa-regular fa-align-left"></i>
                                        <h3>Description</h3>
                                    </div>
                                    <button className="delete-btn">Edit</button>
                                </div>
                                <div className="inner-component-left-padding">
                                    <p contentEditable
                                       className="task-description"
                                       onChange={setDescription}>{description}
                                        onFocusOut={saveTask}</p>
                                </div>
                            </div>

                            {/* Maps */}
                            {showMaps &&
                                <div className="task-section">
                                    <div className="flex-space-between">
                                        <div className="section-icon-title">
                                            <i className="fa-regular fa-map"></i>
                                            <h3>Location</h3>
                                        </div>
                                    </div>
                                    <div className="inner-component-left-padding">
                                        <GoogleMap lat={location.lat} lng={location.lng} zm={location.zoom}/>

                                    </div>
                                </div>
                            }

                            {/* Custom Fields */}
                            {showCustomFields &&
                                <div className="task-section">
                                    <div className="section-icon-title">
                                        <i className="fa-regular fa-battery-empty"></i>
                                        <h3>Custom Fields</h3>
                                    </div>
                                    <div className="task-custom-fields inner-component-left-padding">
                                        {badges.map(badge => {
                                            return <div>
                                                <div className="just-flex">
                                                    <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM8 8C8 9.65685 6.65685 11 5 11C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5C6.65685 5 8 6.34315 8 8ZM6 16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16ZM8 16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16C2 14.3431 3.34315 13 5 13C6.65685 13 8 14.3431 8 16ZM19 7H13C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM13 5C11.3431 5 10 6.34315 10 8C10 9.65685 11.3431 11 13 11H19C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5H13ZM13 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM10 16C10 14.3431 11.3431 13 13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19H13C11.3431 19 10 17.6569 10 16Z"
                                                            fill="currentColor"></path>
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
                                    </div>
                                </div>
                            }

                            {/* Attachments */}
                            {((attachments.length !== 0) || showAttachments) &&
                                <div className="task-section">
                                    <div className="flex-space-between">
                                        <div className="section-icon-title">
                                            <i className="fa-regular fa-paperclip"></i>
                                            <h3>Attachments</h3>
                                        </div>
                                        <button className="delete-btn">Add</button>
                                    </div>
                                    <div className="inner-component-left-padding">Files</div>
                                    <div className="task-attachment-row inner-component-left-padding">
                                        {(attachments.map(attachment => {
                                            return <div key={attachment.id} className="just-flex">
                                                <button className="attachment-extention">PNG</button>
                                                <div className="file-info">
                                                    <h5>{attachment.path}</h5>
                                                    <label>{new Date(attachment.date).toLocaleDateString()}</label>
                                                </div>
                                            </div>
                                        }))}
                                    </div>
                                </div>
                            }

                            {/* Checklists */}
                            {(showChecklist || checklists) &&
                                <div className="task-section">
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
                                </div>
                            }

                            {/* Activity */}
                            {(activityLog.length || showActivity) &&
                                <div className="task-section">
                                    <div className="section-icon-bit-down">
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
                            }

                        </div>

                        <div className="task-sidebar">

                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerMembers(true)
                            }}><i className="fa-regular fa-user-plus"></i> Join
                            </button>

                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerMembers(true)
                            }}><i className="fa-regular fa-user"></i> Members
                            </button>
                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerLabels(true)
                            }}><i className="fa-regular fa-tag"></i> Labels
                            </button>
                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerChecklists(true)
                            }}><i className="fa-regular fa-check-square"></i> Checklist
                            </button>
                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerDate(true)
                            }}><i className="fa-regular fa-calendar-alt"></i> Dates
                            </button>
                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerAttachments(true)
                            }}><i className="fa-regular fa-paperclip"></i> Attachment
                            </button>
                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerLocation(true)
                            }}><i className="fa-regular fa-map-marker-alt"></i> Location
                            </button>
                            <button className="sidebar-btn" onClick={() => {
                                hidePicker(event)
                                movePickerTo(event)
                                setShowPickerCustomBadges(true)
                            }}><i className="fa-regular fa-th-list"></i> Custom Fields
                            </button>


                            <h4 className="sidebar-subtitle">Actions</h4>
                            <button className="sidebar-btn"
                                    onClick={(event) => {
                                        hidePicker(event)
                                        movePickerTo(event)
                                        setShowPickerMoveCard(true)
                                    }}
                            ><i className="fa-regular fa-arrow-right"></i> Move
                            </button>
                            <button className="sidebar-btn"
                                    onClick={(event) => {
                                        hidePicker(event)
                                        movePickerTo(event)
                                        setShowPickerCopyCard(true)
                                    }}
                            ><i className="fa-regular fa-copy"></i> Copy
                            </button>
                            <button className="sidebar-btn"
                                    onClick={(event) => {
                                        hidePicker(event)
                                        movePickerTo(event)
                                        setShowPickerMirrorCard(true)
                                    }}><i className="fa-regular fa-clone"></i> Mirror
                            </button>
                            <button className="sidebar-btn"
                                    onClick={(event) => {
                                        hidePicker(event)
                                        movePickerTo(event)
                                        setShowPickerUnderConstruction(true)
                                    }}><i className="fa-regular fa-file-alt"></i> Make template
                            </button>
                            <button className="sidebar-btn"
                                    onClick={(event) => {
                                        hidePicker(event)
                                        movePickerTo(event)
                                        setShowPickerUnderConstruction(true)
                                    }}><i className="fa-regular fa-archive"></i> Archive
                            </button>
                            <button className="sidebar-btn"
                                    onClick={(event) => {
                                        hidePicker(event)
                                        movePickerTo(event)
                                        setShowPickerShareCard(true)
                                    }}
                            ><i className="fa-regular fa-share-alt"></i> Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Members Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerMembers) ? 'block' : 'none'
            }}>
                <div className="picker-header">
                    <h3>Members</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>

                <div className="search-container">
                    <input type="text" placeholder="Search members"/>
                </div>

                <div>
                    <h4>Card members</h4>
                    <div className="members-list">
                        {
                            members.map(member => {
                                return (<div key={member.id} className="member-item just-flex" onClick={() => onRemoveMember(member)}>
                                    {(member.imgUrl) ?
                                        <div className="just-flex">
                                            <div className="user-circle"
                                                 style={{
                                                     backgroundImage: `url(${member.imgUrl})`
                                                 }}></div>
                                            <span>{member.fullname}</span>
                                        </div>
                                        :<div className="just-flex">
                                            <div className="user-circle">{member.fullname?.split(' ')[0][0]?.toUpperCase() || ''}{member.fullname?.split(' ')[1][0]?.toUpperCase() || ''}</div>
                                        <span>{member.fullname}</span>
                                    </div>}
                                    <button className="task-modal-close">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>)
                            })
                        }
                    </div>
                </div>

                <div>
                    <h4>Board members</h4>
                    <div className="members-list">

                        {
                            boardMembersToShow.map(member => {
                                return (<div key={member.id} className="member-item just-flex" onClick={() => onAddMember(member)}>
                                    {(member.imgUrl) ?
                                        <div className="just-flex">
                                            <div className="user-circle"
                                                 style={{
                                                     backgroundImage: `url(${member.imgUrl})`
                                                 }}></div>
                                            <span>{member.fullname}</span>
                                        </div>
                                        :<div className="just-flex">
                                            <div className="user-circle">{member.fullname?.split(' ')[0][0]?.toUpperCase() || ''}{member.fullname?.split(' ')[1][0]?.toUpperCase() || ''}</div>
                                            <span>{member.fullname}</span>
                                        </div>}
                                    <button className="task-modal-close">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path>
                                        </svg>
                                    </button>
                                </div>)
                            })
                        }

                    </div>
                </div>
            </div>


            {/* Labels Picker */}
            <div
                className="picker-popup"
                style={{
                    top: pickerTop,
                    left: pickerLeft,
                    display: showPickerLabels ? 'block' : 'none',
                }}
            >

                {showPickerChangeALabel && <>

                    <div className="picker-header">
                        <button className="back-btn" onClick={() => {
                            setShowPickerChangeALabel(false)
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <h3>Edit label</h3>
                        <button className="task-modal-close" onClick={hidePicker}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>

                    <div className="edit-label-content">
                        <div className="label-preview" style={{backgroundColor: currentLabelColor}}></div>

                        <div className="title-section">
                            <label>Title</label>
                            <input type="text" className="title-input"
                                   value={currentLabelText}
                                   onChange={onChangeCurrentLabelText}

                            />
                        </div>

                        <div className="colors-section">
                            <label>Select a color</label>
                            <div className="color-grid">
                                <button className={`color-btn ${currentLabelColor === '#4BCE97' ? 'selected' : ''}`} style={{backgroundColor: '#4BCE97'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#F5CD47' ? 'selected' : ''}`} style={{backgroundColor: '#F5CD47'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#FAA53D' ? 'selected' : ''}`} style={{backgroundColor: '#FAA53D'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#F87168' ? 'selected' : ''}`} style={{backgroundColor: '#F87168'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#9F8FEF' ? 'selected' : ''}`} style={{backgroundColor: '#9F8FEF'}} onClick={onChangeCurrentLabelColor}></button>

                                <button className={`color-btn ${currentLabelColor === '#2ABB7F' ? 'selected' : ''}`} style={{backgroundColor: '#2ABB7F'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#E6C60D' ? 'selected' : ''}`} style={{backgroundColor: '#E6C60D'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#E67305' ? 'selected' : ''}`} style={{backgroundColor: '#E67305'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#E5484D' ? 'selected' : ''}`} style={{backgroundColor: '#E5484D'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#8777D9' ? 'selected' : ''}`} style={{backgroundColor: '#8777D9'}} onClick={onChangeCurrentLabelColor}></button>

                                <button className={`color-btn ${currentLabelColor === '#1F845A' ? 'selected' : ''}`} style={{backgroundColor: '#1F845A'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#946F00' ? 'selected' : ''}`} style={{backgroundColor: '#946F00'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#B54D03' ? 'selected' : ''}`} style={{backgroundColor: '#B54D03'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#BF2600' ? 'selected' : ''}`} style={{backgroundColor: '#BF2600'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#6E5DC6' ? 'selected' : ''}`} style={{backgroundColor: '#6E5DC6'}} onClick={onChangeCurrentLabelColor}></button>

                                <button className={`color-btn ${currentLabelColor === '#8CD4F5' ? 'selected' : ''}`} style={{backgroundColor: '#8CD4F5'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#79E2F2' ? 'selected' : ''}`} style={{backgroundColor: '#79E2F2'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#7BC86C' ? 'selected' : ''}`} style={{backgroundColor: '#7BC86C'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#FF8ED4' ? 'selected' : ''}`} style={{backgroundColor: '#FF8ED4'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#6B778C' ? 'selected' : ''}`} style={{backgroundColor: '#6B778C'}} onClick={onChangeCurrentLabelColor}></button>

                                <button className={`color-btn ${currentLabelColor === '#5BA4CF' ? 'selected' : ''}`} style={{backgroundColor: '#5BA4CF'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#00C2E0' ? 'selected' : ''}`} style={{backgroundColor: '#00C2E0'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#61BD4F' ? 'selected' : ''}`} style={{backgroundColor: '#61BD4F'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#FF78CB' ? 'selected' : ''}`} style={{backgroundColor: '#FF78CB'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#505F79' ? 'selected' : ''}`} style={{backgroundColor: '#505F79'}} onClick={onChangeCurrentLabelColor}></button>

                                <button className={`color-btn ${currentLabelColor === '#0747A6' ? 'selected' : ''}`} style={{backgroundColor: '#0747A6'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#0079BF' ? 'selected' : ''}`} style={{backgroundColor: '#0079BF'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#519839' ? 'selected' : ''}`} style={{backgroundColor: '#519839'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#CD519D' ? 'selected' : ''}`} style={{backgroundColor: '#CD519D'}} onClick={onChangeCurrentLabelColor}></button>
                                <button className={`color-btn ${currentLabelColor === '#172B4D' ? 'selected' : ''}`} style={{backgroundColor: '#172B4D'}} onClick={onChangeCurrentLabelColor}></button>
                            </div>

                            <button className="remove-color-btn" onClick={
                                () => {
                                    setShowPickerChangeALabel(false)
                                    onDeleteLabel()
                                }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="currentColor"/>
                                </svg>
                                Remove color
                            </button>
                        </div>

                        <div className="label-actions">
                            <button className="save-btn"
                                    onClick={() => {
                                        setShowPickerChangeALabel(false)
                                        onSaveLabelChange()
                                    }}
                            >Save
                            </button>
                            <button className="delete-btn"
                                    onClick={() => {
                                        setShowPickerChangeALabel(false)
                                        onDeleteLabel()
                                    }}
                            >Delete
                            </button>
                        </div>
                    </div>

                </>}

                {!showPickerChangeALabel && <>
                    <div className="picker-header">
                        <h3>Labels</h3>
                        <button className="task-modal-close" onClick={hidePicker}>
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.5858 12L5.29289 6.70711C4.90237
                                  6.31658 4.90237 5.68342 5.29289 5.29289C5.68342
                                  4.90237 6.31658 4.90237 6.70711 5.29289L12
                                  10.5858L17.2929 5.29289C17.6834 4.90237
                                  18.3166 4.90237 18.7071 5.29289C19.0976
                                  5.68342 19.0976 6.31658 18.7071 6.70711L13.4142
                                  12L18.7071 17.2929C19.0976 17.6834 19.0976
                                  18.3166 18.7071 18.7071C18.3166 19.0976
                                  17.6834 19.0976 17.2929 18.7071L12
                                  13.4142L6.70711 18.7071C6.31658 19.0976
                                  5.68342 19.0976 5.29289 18.7071C4.90237
                                  18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="search-container">
                        <input type="text" placeholder="Search labels..."/>
                    </div>

                    <div>
                        <h4>Labels</h4>
                        <div className="labels-list">
                            {groupLabels.map((label) => {
                                const isChecked = cardLabels.some((l) => l.color === label.color)
                                return (
                                    <label className="label-item" key={label.color}>
                                        <div className="label-checkbox">
                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={() => onToggleLabel(label)}
                                            />
                                        </div>
                                        <div className={`label-color`}
                                             style={{backgroundColor: label.color}}
                                        />
                                        <button className="edit-label"
                                                onClick={(event) => {
                                                    setCurrentLabelText(label.title)
                                                    setCurrentLabelColor(label.color)
                                                    setPreviousLabelColor(label.color)
                                                    setShowPickerChangeALabel(true)
                                                }}
                                        >
                                            <svg
                                                width="16"
                                                height="16"
                                                role="presentation"
                                                focusable="false"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.82034 14.4893L9.94134 16.6103L18.4303
                                                  8.12131L16.3093 6.00031H16.3073L7.82034
                                                  14.4893ZM17.7233 4.58531L19.8443
                                                  6.70731C20.6253 7.48831 20.6253 8.7543
                                                  19.8443 9.53531L10.0873
                                                  19.2933L5.13734 14.3433L14.8943
                                                  4.58531C15.2853 4.19531 15.7973
                                                  4.00031 16.3093 4.00031C16.8203
                                                  4.00031 17.3323 4.19531 17.7233
                                                  4.58531ZM5.20094 20.4097C4.49794
                                                  20.5537 3.87694 19.9327 4.02094
                                                  19.2297L4.80094 15.4207L9.00994
                                                  19.6297L5.20094 20.4097Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </button>
                                    </label>
                                )
                            })}
                        </div>
                    </div>

                    <button className="create-label-btn" onClick={(event) => {
                        setCurrentLabelText('')
                        setCurrentLabelColor('#4BCE97')
                        setShowPickerChangeALabel(true)
                    }}>Create a new label
                    </button>
                    <div className="just-margin"></div>
                    <div className="color-blind-toggle">
                        <label>
                            <input type="checkbox"/>
                            <span>Enable colorblind friendly mode</span>
                        </label>
                    </div>
                </>}

            </div>

            {/* Checklists Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerChecklists) ? 'block' : 'none'
            }}>
                <div className="picker-header">
                    <h3>Add checklist</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="checklist-content">

                    <div className="title-section">
                        <label>Title</label>
                        <input type="text" className="title-input"
                               value={newChecklistTitle}
                               onChange={(ev) => {
                                   setNewChecklistTitle(ev.target.value)

                               }}
                        />
                    </div>

                    <div className="copy-section">
                        <label>Copy items from...</label>
                        <div className="copy-select">
                            <select defaultValue="(none)">
                                {checklists.map(checklist => {
                                        return <option key={checklist.id} value={checklist.id}>{checklist.title}</option>
                                    }
                                )}
                            </select>
                        </div>
                    </div>

                    <button className="add-checklist-btn"
                            onClick={onAddChecklist}
                    >Add
                    </button>
                </div>
            </div>


            {/* Attachments Picker */}
            <div
                className="picker-popup"
                style={{
                    top: pickerTop,
                    left: pickerLeft,
                    display: showPickerAttachments ? "block" : "none",
                    width: "368px",
                }}
            >
                <div className="picker-header">
                    <div className="header-with-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"                                fill="currentColor"                            /></svg>
                    </div>
                    <h3>Attach</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342              4.90237 6.31658 4.90237 6.70711              5.29289L12 10.5858L17.2929 5.29289C17.6834              4.90237 18.3166 4.90237 18.7071              5.29289C19.0976 5.68342 19.0976              6.31658 18.7071 6.70711L13.4142              12L18.7071 17.2929C19.0976 17.6834              19.0976 18.3166 18.7071 18.7071C18.3166              19.0976 17.6834 19.0976 17.2929              18.7071L12 13.4142L6.70711 18.7071C6.31658              19.0976 5.68342 19.0976 5.29289              18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="attachment-content">
                    <input
                        ref={fileInputRef}
                        type="file"
                        style={{display: "none"}}
                        onChange={onFileSelected}
                    />

                    <div className="file-upload-section">
                        <h4>Attach a file from your computer</h4>
                        <p className="upload-hint">You can also drag and drop files to upload them.</p>
                        <button className="choose-file-btn" onClick={() => fileInputRef.current.click()}>
                            Choose a file
                        </button>

                        {attachmentFile && (
                            <p style={{marginTop: "8px", color: "#026aa7"}}>
                                Chosen file: <strong>{attachmentFile.name}</strong>
                            </p>
                        )}
                    </div>

                    <div className="link-section">

                        Search or paste a link
                        <div className="link-input-container">
                            <input
                                type="text"
                                placeholder="Find recent links or paste a new link"
                                className="link-input"
                                value={attachmentLink}
                                onChange={(ev) => setAttachmentLink(ev.target.value)}
                            />
                        </div>


                        Display text (optional)
                        <div className="display-text-container">
                            <input
                                type="text"
                                placeholder="Text to display"
                                className="display-text-input"
                                value={attachmentDisplayText}
                                onChange={(ev) => setAttachmentDisplayText(ev.target.value)}
                            />
                        </div>
                    </div>

                    <div className="popup-footer">
                        <button className="cancel-btn" onClick={hidePicker}>
                            Cancel
                        </button>
                        <button className="insert-btn" onClick={onInsertAttachment}>
                            Insert
                        </button>
                    </div>
                </div>
            </div>



            {/* Location Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerLocation) ? 'block' : 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Add location</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="location-content">
                    <div className="search-container">
                        <input type="text" placeholder="Search Google Maps" className="location-input"/>
                    </div>
                </div>
            </div>

            {/* CustomBadge Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerCustomBadges) ? 'block' : 'none',
                width: '304px'
            }}>

                {!showFieldsEditor && <>
                <div className="picker-header">
                    <div className="header-with-icon tooltip" data-tip="Select “New field” to build a completely customizable field. Fields will be added to every card on the board.">
                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"></path>
                            <path d="M11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V11Z" fill="currentColor"></path>
                            <path d="M13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h3>Custom Fields</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="custom-fields-content">
                    <div className="fields-list">
                        {badges.map((badge) => {
                        return <div className="field-item" key={badge.id}
                          onClick={() => {
                              setNewFieldId(badge.id)
                              setNewFieldTitle(badge.categ)
                              setShowFieldsEditor(true)
                              setNewFieldOptions(badge.badgeOptions)
                          }}>
                            <div className="field-grip">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
                                    <g fill="currentcolor" fill-rule="evenodd">
                                        <circle cx="10" cy="8" r="1"></circle>
                                        <circle cx="14" cy="8" r="1"></circle>
                                        <circle cx="10" cy="16" r="1"></circle>
                                        <circle cx="14" cy="16" r="1"></circle>
                                        <circle cx="10" cy="12" r="1"></circle>
                                        <circle cx="14" cy="12" r="1"></circle>
                                    </g>
                                </svg>
                            </div>
                            <div className="field-icon">
                                <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM8 8C8 9.65685 6.65685 11 5 11C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5C6.65685 5 8 6.34315 8 8ZM6 16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16ZM8 16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16C2 14.3431 3.34315 13 5 13C6.65685 13 8 14.3431 8 16ZM19 7H13C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM13 5C11.3431 5 10 6.34315 10 8C10 9.65685 11.3431 11 13 11H19C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5H13ZM13 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM10 16C10 14.3431 11.3431 13 13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19H13C11.3431 19 10 17.6569 10 16Z"
                                          fill="currentColor"></path>
                                </svg>
                            </div>
                            <span className="field-name">{badge.categ}</span>
                            <button className="field-chevron">
                                <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.7071 12.7071L9.63606 19.7781C9.24554 20.1687 8.61237 20.1687 8.22185 19.7781C7.83132 19.3876 7.83132 18.7544 8.22185 18.3639L14.5858 12L8.22185 5.636C7.83132 5.24548 7.83132 4.61231 8.22185 4.22179C8.61237 3.83126 9.24554 3.83126 9.63606 4.22179L16.7071 11.2929C17.0977 11.6834 17.0977 12.3165 16.7071 12.7071Z" fill="currentColor"></path>
                                </svg>
                            </button>
                        </div>
                        })}


                    </div>

                    <button className="new-field-btn"
                            onClick={
                                () => {
                                    setShowFieldsEditor(true)
                                }
                            }>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
                        </svg>
                        New field
                    </button>
                </div>
                </>}

                {showFieldsEditor && <>
                    <div className="picker-header">
                        <button className="back-btn"
                            onClick={
                                () => {
                                    setShowFieldsEditor(false)
                                    setNewFieldTitle('')
                                    setNewFieldOptions([])
                                    setNewFieldOption('')
                                    setNewFieldId('')
                                }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <h3>Edit Field</h3>
                        <button className="task-modal-close" onClick={hidePicker}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>

                    <div className="edit-field-content">
                        <div className="field-section">
                            <label>Title</label>
                            <input type="text" className="title-input"
                                   value={newFieldTitle}
                                      onChange={(ev) => {
                                            setNewFieldTitle(ev.target.value)
                                      }}
                            />
                        </div>

                        <div className="field-section">
                            <label>Type</label>
                            <select className="type-select" disabled>
                                <option>Dropdown</option>
                            </select>
                        </div>

                        <div className="field-section">
                            <label>Options</label>
                            <div className="options-list">
                                {newFieldOptions.map((option, index) => {
                                    return <div className="option-item" key={index}>
                                                <input type="text" className="option-input" value={option}
                                                       disabled
                                                />
                                                <button className="delete-option-btn"
                                                        onClick={
                                                            () => {
                                                                setNewFieldOptions(newFieldOptions.filter((_, i) => i !== index))

                                                        }}
                                                >Delete</button>
                                            </div>
                                })}
                            </div>
                            <div className="options-input">
                                <input type="text" placeholder="Add item..." className="option-input"
                                       value={newFieldOption}
                                       onChange={(ev) => {
                                             setNewFieldOption(ev.target.value)
                                       }}/>
                                <button className="add-btn"
                                        onClick={
                                            () => {
                                                setNewFieldOptions([...newFieldOptions, newFieldOption])
                                                setNewFieldOption('')
                                            }
                                        }
                                >Add</button>
                            </div>
                        </div>

                        <div className="field-section checkbox-section">
                            <label className="checkbox-label">
                                <input type="checkbox" checked/>
                                <span>Show field on front of card</span>
                            </label>
                        </div>
                        <button className="save-field-btn"
                                onClick={
                                    () => {
                                        onCreateField()
                                    }
                                }
                        >Create</button>


                    </div>
                </>}

            </div>

            {/* Dates Picker */}
            <div className="picker-popup date-picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerDate) ? 'block' : 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Dates</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="date-picker-content">
                    <div className="calendar-header">
                        <button className="nav-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="currentColor"/>
                            </svg>
                        </button>
                        <span className="month-year">April 2025</span>
                        <button className="nav-btn">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L14.5858 12L8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>

                    <div className="calendar-grid">
                        <div className="weekday">Sun</div>
                        <div className="weekday">Mon</div>
                        <div className="weekday">Tue</div>
                        <div className="weekday">Wed</div>
                        <div className="weekday">Thu</div>
                        <div className="weekday">Fri</div>
                        <div className="weekday">Sat</div>

                        <div className="day prev-month">30</div>
                        <div className="day prev-month">31</div>
                        <div className="day">1</div>
                        <div className="day">2</div>
                        <div className="day">3</div>
                        <div className="day current">4</div>
                        <div className="day">5</div>

                        <div className="day">6</div>
                        <div className="day">7</div>
                        <div className="day">8</div>
                        <div className="day">9</div>
                        <div className="day">10</div>
                        <div className="day">11</div>
                        <div className="day">12</div>

                        <div className="day">13</div>
                        <div className="day">14</div>
                        <div className="day">15</div>
                        <div className="day">16</div>
                        <div className="day">17</div>
                        <div className="day">18</div>
                        <div className="day">19</div>

                        <div className="day">20</div>
                        <div className="day">21</div>
                        <div className="day">22</div>
                        <div className="day">23</div>
                        <div className="day">24</div>
                        <div className="day">25</div>
                        <div className="day">26</div>

                        <div className="day">27</div>
                        <div className="day">28</div>
                        <div className="day">29</div>
                        <div className="day">30</div>
                        <div className="day next-month">1</div>
                        <div className="day next-month">2</div>
                        <div className="day next-month">3</div>

                        <div className="day next-month">4</div>
                        <div className="day next-month">5</div>
                        <div className="day next-month">6</div>
                        <div className="day next-month">7</div>
                        <div className="day next-month">8</div>
                        <div className="day next-month">9</div>
                        <div className="day next-month">10</div>
                    </div>

                    <div className="date-options">
                        <div className="date-section">
                            <label>Start date</label>
                            <div className="date-input">
                                <input type="checkbox"/>
                                <input type="text" placeholder="MM/DD/YYYY"/>
                            </div>
                        </div>

                        <div className="date-section">
                            <label>Due date</label>
                            <div className="date-inputs">
                                <div className="date-input">
                                    <input type="checkbox" checked/>
                                    <input type="text" value="4/9/2025"/>
                                </div>
                                <input type="text" value="8:43 PM" className="time-input"/>
                            </div>
                        </div>

                        <div className="reminder-section">
                            <label>Set due date reminder</label>
                            <select className="reminder-select">
                                <option>1 Day before</option>
                            </select>
                            <p className="reminder-note">Reminders will be sent to all members and watchers of this card.</p>
                        </div>
                    </div>

                    <div className="date-actions">
                        <button className="save-btn">Save</button>
                        <button className="remove-btn">Remove</button>
                    </div>
                </div>
            </div>

            {/* MoveCards Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerMoveCard) ? 'block' : 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Move card</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="move-card-content">

                    <div className="select-section">
                        <h4>Select destination</h4>

                        <div className="select-group">
                            <label>Board</label>
                            <select className="board-select">
                                <option>trelloception</option>
                            </select>
                        </div>

                        <div className="select-row">
                            <div className="select-group">
                                <label>List</label>
                                <select className="list-select">
                                    <option>In Progress</option>
                                </select>
                            </div>
                            <div className="select-group">
                                <label>Position</label>
                                <select className="position-select">
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button className="move-btn">Move</button>
                </div>
            </div>

            {/* CopyCards Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerCopyCard) ? 'block' : 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Copy card</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="copy-card-content">
                    <div className="title-section">
                        <label>Name</label>
                        <input
                            type="text"
                            className="title-input"
                            value="give every member a task to start working on"
                        />
                    </div>

                    <div className="keep-section">
                        <label>Keep...</label>
                        <div className="keep-options">
                            <label className="keep-option">
                                <input type="checkbox" checked/>
                                <span>Checklists (1)</span>
                            </label>
                            <label className="keep-option">
                                <input type="checkbox" checked/>
                                <span>Labels (1)</span>
                            </label>
                            <label className="keep-option">
                                <input type="checkbox" checked/>
                                <span>Members (2)</span>
                            </label>
                        </div>
                    </div>

                    <div className="copy-to-section">
                        <h4>Copy to...</h4>

                        <div className="select-group">
                            <label>Board</label>
                            <select className="board-select">
                                <option>trelloception</option>
                            </select>
                        </div>

                        <div className="select-row">
                            <div className="select-group">
                                <label>List</label>
                                <select className="list-select">
                                    <option>In Progress</option>
                                </select>
                            </div>
                            <div className="select-group">
                                <label>Position</label>
                                <select className="position-select">
                                    <option>1</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <button className="create-btn">Create card</button>
                </div>
            </div>

            {/* MirrorCards Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerMirrorCard) ? 'block' : 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Mirror card</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="mirror-card-content">
                    <p className="mirror-description">Mirror this card to view or edit it from another board</p>

                    <div className="select-group">
                        <label>Board</label>
                        <select className="board-select">
                            <option value="">Select...</option>
                        </select>
                    </div>

                    <button className="mirror-btn">Mirror</button>

                    <div className="mirror-info">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                        </svg>
                        <span>Only people with access to this board will be able to view this mirror card</span>
                    </div>
                </div>
            </div>


            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerShareCard) ? 'block' : 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Share and more...</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="share-card-content">
                    <div className="action-group">
                        <div className="action-item">
                            <span>Print...</span>
                        </div>
                        <div className="action-item">
                            <span>Export JSON</span>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="link-section">
                        <div className="link-group">
                            <label>Link to this card</label>
                            <div className="link-field">
                                <input type="text" value="https://trello.com/c/BuO4VPb" readOnly/>
                            </div>
                        </div>

                        <button className="qr-button">Show QR Code</button>
                    </div>

                    <div className="embed-section">
                        <label>Embed this card</label>
                        <div className="embed-field">
                            <input type="text" value="<blockquote class='trello-card'><a href=" readOnly/>
                        </div>
                    </div>

                    <div className="email-section">
                        <label>Email for this card</label>
                        <div className="email-field">
                            <input type="text" value="yampeleg+33xpv3jsiolwd2l937s+33zgyhC" readOnly/>
                        </div>
                        <p className="email-note">Emails sent to this address will appear as a comment by you on the card</p>
                    </div>

                    <div className="card-info">
                        <span>Card #23</span>
                        <span>Added Feb 13, 2025, 4:34 PM</span>
                    </div>
                </div>
            </div>

            {/* Construction Picker */}
            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                display: (showPickerUnderConstruction) ? 'block' : 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Under Construction</h3>
                    <h3>sry.. 🙃 </h3>
                </div>
            </div>


        </>
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
    // const allBoards = useSelector(state => state.boardModule.boards)

    const [taskToShow, setTaskToShow] = useState(null)
    const {boardId} = useParams()
    const navigate = useNavigate()
    const popupRef = useRef(null)

    // console.log(boardId)


    const [isPopupShown, togglePopup] = useToggle(false)


    useEffect(() => {
        onLoadBoard()
    }, [])

    function onLoadBoard() {
        loadBoard(boardId).then(() => {
            setTaskToShow(null)
        })
        // }).catch(err => {
        //     // just load the first board
        //     loadBoards().then(() => {
        //         // const firstBoard = store.getState().boardModule.boards[0].id
        //
        //         const firstBoard = allBoards
        //         console.log('firstBoard', firstBoard)
        //         navigate(`/${firstBoard}`)
        //         loadBoard(firstBoard).then(() => {
        //             setTaskToShow(null)
        //         })
        //     })
        // })
    }


    async function onLoadTask(task, taskList, group, currentBoard) {
        console.log('task', task)
        console.log('taskList', taskList)
        console.log('group', group)

        task.group = group
        task.taskList = taskList
        task.board = currentBoard

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

                <div className="popup" ref={popupRef} onClick={closePopupOnlyIfClickedOutOfIt}>

                    <TaskModal taskToShow={taskToShow} onClose={togglePopup} popupRef={popupRef}/>

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
                                <GroupHeader group={group}/>
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