import {useParams} from "react-router"
import {useSelector} from "react-redux"
import {SideBar} from "../cmps/SideBar"
import {useNavigate} from "react-router"
import {GroupTable} from "../cmps/GroupTable"
import {AppHeader} from "../cmps/AppHeader.jsx"
import {GroupList} from "../cmps/GroupList.jsx"
import {ShareModal} from "../cmps/ShareModal.jsx"
import {BoardHeader} from "../cmps/BoardHeader.jsx"
import React, {useRef, useEffect, useState} from "react"
import {loadBoard, updateBoard} from "../store/store.js"
import {reorderWithEdge} from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge"

import {ActivityMenu} from "../cmps/ActivityMenu.jsx"

import {TaskList} from "./TaskList"
import {AddGroup} from "./AddGroup"
import {useSelector} from "react-redux"
import {GroupHeader} from "./GroupHeader"
import {MinimaizedGRoup} from "./MinimaizedGroup"
import React, {useState, useEffect, useRef} from "react"
import {reorderWithEdge} from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge"
import {draggable, dropTargetForElements} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import {preserveOffsetOnSource} from "@atlaskit/pragmatic-drag-and-drop/element/preserve-offset-on-source"
import {attachClosestEdge, extractClosestEdge} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import {setCustomNativeDragPreview} from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview"

import {updateBoard} from "../store/store.js"
import {GroupEdit} from "./GroupEdit.jsx"
import {CopyListForm} from "./CopyListForm.jsx"
import {MoveListForm} from "./MoveListForm.jsx"
import {MoveAll} from "./MoveAll.jsx"
import {GroupSort} from "./GroupSort.jsx"


import {useSelector} from "react-redux"
import {useNavigate} from "react-router"
import {AddTaskForm} from "./AddTaskForm"
import {eventBus} from "../services/util.service.js"
import React, {useEffect, useRef, useState} from "react"

import {draggable, dropTargetForElements} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import {preserveOffsetOnSource} from "@atlaskit/pragmatic-drag-and-drop/element/preserve-offset-on-source"
import {attachClosestEdge, extractClosestEdge} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import {setCustomNativeDragPreview} from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview"
import {scrollJustEnoughIntoView} from '@atlaskit/pragmatic-drag-and-drop/element/scroll-just-enough-into-view';


import {loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard, store} from "../store/store.js"




const GROUP_SYMBOL = Symbol("group")

function getGroupData({group, rect}) {
    return {
        [GROUP_SYMBOL]: true, group, rect,
    }
}

function isGroupData(obj) {
    return Boolean(obj && obj[GROUP_SYMBOL])
}

// drag and drop
const CARD_SYMBOL = Symbol("card")

function getCardData({task, groupId, rect}) {
    return {
        [CARD_SYMBOL]: true, task, groupId, rect,
    }
}

function isCardData(obj) {
    return Boolean(obj && obj[CARD_SYMBOL])
}


export function TaskList({ grp, group, currentBoard, currentGroup, onLoadTask, largeLabels, toggleLargeLabels, onMoveCard, onReorderCard, Placeholder, onSetPlaceholderHeight, placeholderHeight, onsetQuickEdit, showQuickEdit }) {

    function onDeleteTask(ev, taskId) {
        ev.stopPropagation()
        ev.preventDefault()
        const currentRef = getCardRef(taskId)
        currentRef.current.style.display = 'none'
        const updatedGroup = {...group}
        updatedGroup.tasks = updatedGroup.tasks.filter((task) => task.id !== taskId)
        const updatedBoard = {...currentBoard}
        updatedBoard.groups = updatedBoard.groups.map((g) => (g.id === group.id ? updatedGroup : g))
        updateBoard(updatedBoard)
    }

    const boardToShow = useSelector((state) => state.boardModule.board)
    const eventbus = eventBus
    const navigate = useNavigate()
    const [showForm, setShowForm] = useState(false)
    const [showFirstForm, setShowFirstForm] = useState(false)
    const [tasks, setTasks] = useState(group.tasks)
    const [shadow, setShadow] = useState(null)
    const cardRefs = useRef({})
    const listRef = useRef(null)

    function getCardRef(taskId) {
        if (!cardRefs.current[taskId]) {
            cardRefs.current[taskId] = React.createRef()
        }
        return cardRefs.current[taskId]
    }

    useEffect(() => {
        setTasks(group.tasks)
    }, [boardToShow, group.tasks])

    useEffect(() => {
        const unsub = eventbus.on("showAddGroup", (data) => {
            setShowFirstForm(data)
        })
        return () => unsub()
    }, [])

    function onToggleDone(ev, task) {
        ev.stopPropagation()
        setTasks((prev) => prev.map((t) => {
            if (t.id === task.id) {
                t.status = t.status === "done" ? "" : "done"
            }
            return t
        }),)
    }

    function onSetShowForm() { setShowForm(!showForm) }
    function onSetFirstForm() { setShowFirstForm(!showFirstForm) }

    useEffect(() => {
        tasks.forEach((task) => {
            const ref = cardRefs.current[task.id]
            if (!ref?.current) return
            const el = ref.current

            draggable({
                element: el, getInitialData({element}) {
                    return getCardData({
                        task, groupId: group.id, rect: element.getBoundingClientRect(),
                    })
                }, onGenerateDragPreview({location, nativeSetDragImage, source}) {
                    setCustomNativeDragPreview({
                        nativeSetDragImage, getOffset: preserveOffsetOnSource({element: el, input: location.current.input}), render({container}) {
                            const {width, height} = el.getBoundingClientRect()
                            const computedStyles = window.getComputedStyle(el)
                            const wrapper = document.createElement("div")
                            wrapper.className = "task-list"
                            const clone = el.cloneNode(true)
                            clone.style.removeProperty('opacity')
                            clone.style.width = width + "px"
                            clone.style.height = height + "px"
                            clone.style.backgroundColor = computedStyles.backgroundColor || "#fff"
                            clone.style.opacity = "1"
                            clone.style.pointerEvents = "none"
                            clone.style.borderRadius = computedStyles.borderRadius
                            clone.style.boxShadow = "0 6px 16px rgba(0,0,0,0.3)"
                            clone.style.transform = "translateY(-2px) scale(1.02)"
                            clone.style.zIndex = '1000'
                            clone.style.setProperty("opacity", "1", "important")
                            clone.style.pointerEvents = "none"
                            clone.style.borderRadius = computedStyles.borderRadius
                            clone.querySelectorAll("*").forEach(child => {
                                child.style.removeProperty('opacity')
                            })
                            onSetPlaceholderHeight(height)
                            wrapper.appendChild(clone)
                            container.appendChild(wrapper)
                        },
                    })
                }

            })
        })
    }, [tasks, group.id])

    useEffect(() => {
        tasks.forEach((task) => {
            const ref = cardRefs.current[task.id]
            if (!ref?.current) return
            const el = ref.current

            return dropTargetForElements({
                element: el, canDrop({source}) {
                    return isCardData(source.data)
                }, getIsSticky: () => true, getData({element, input}) {

                    return attachClosestEdge({task, groupId: group.id}, {
                        element, input, allowedEdges: ["top", "bottom"],
                    })
                }, onDragEnter({source, self}) {

                    if (!isCardData(source.data)) return
                    const {task: dragged} = source.data
                    if (dragged.id === task.id) {
                        return
                    }
                    const edge = extractClosestEdge(self.data)
                    setShadow({taskId: task.id, edge})
                },

                onDrag({source, self}) {

                    if (!isCardData(source.data)) return
                    const {task: dragged} = source.data
                    if (dragged.id === task.id) {
                        return
                    }
                    const edge = extractClosestEdge(self.data)
                    setShadow({taskId: task.id, edge})
                }, onDragLeave() {
                    setShadow(null)
                }, onDrop({source, self}) {
                    setShadow(null)
                    if (!isCardData(source.data)) return
                    const {task: dragged, groupId: fromGroupId} = source.data
                    const toGroupId = self.data.groupId
                    const edge = extractClosestEdge(self.data)
                    const targetTask = self.data.task
                    if (!targetTask) {
                        console.log('inside')
                        onMoveCard(dragged, fromGroupId, toGroupId, null, null)
                        return
                    }
                    if (fromGroupId === toGroupId && onReorderCard) {
                        onReorderCard(dragged, targetTask, edge, fromGroupId)
                    } else {
                        console.log('1targetTask', targetTask)
                        onMoveCard(dragged, fromGroupId, toGroupId, targetTask, edge)
                    }
                }
            })
        })
    }, [tasks, group.id, onMoveCard, onReorderCard])

    return (<>
            <div className="task-list" ref={listRef}>
                {showFirstForm && (grp.id === group.id) && <AddTaskForm onSetShowForm={onSetFirstForm} selectedGroup={group}/>}

                {tasks.map((task, idx) => (

                    <React.Fragment key={task.id}>

                        {shadow?.taskId === task.id && shadow.edge === "top" && <Placeholder placeholderHeight={placeholderHeight}/>}

                        <div key={task.id} data-task-id={task.id} data-group-id={group.id} className="task" onClick={(ev) => {
                            if (!showQuickEdit) {
                                return onLoadTask(ev, task, currentGroup, group, boardToShow)
                            }
                        }

                        } ref={getCardRef(task.id)} draggable="false">

                            {task.style.backgroundImage && (<div className="cover-img">
                                    <img src={task.style.backgroundImage} alt=""/>
                                </div>)} {!task.style.backgroundImage && task.style.backgroundColor && (<div className="task-cover-color">
                                <div className="cover-color" style={{backgroundColor: task.style.backgroundColor}}></div>
                            </div>)}

                            <div className="stay-same-height flex-space-between stay-same-height-start">
                                <div className="labels">
                                    {task.labels?.map((label) => (<div key={label.id} className={`task-label tooltip ${largeLabels ? "task-label" : "task-label-small"}`} onClick={toggleLargeLabels} style={{backgroundColor: label.color || ""}} data-tip={label.title}></div>))}
                                </div>
                                <div className="right-btns flex-space-between">
                                    <div className="right-btns-btn" onClick={(ev) => onDeleteTask(ev, task.id)}>
                                        {/* <i className="fa-regular fa-box tooltip" data-tip="Archive"></i> */}
                                        <svg fill="none" viewBox="0 0 16 16" role="presentation"><path stroke="currentcolor" stroke-width="1.5" d="M2.75 5.25h-1v-3.5h12.5v3.5h-1m-10.5 0V13c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25V5.25m-10.5 0h10.5m-7.75 3h5"></path></svg>
                                    </div>
                                    <div onClick={(ev) => onsetQuickEdit(ev)} className="right-btns-btn">
                                        <svg fill="none" viewBox="0 0 16 16" role="presentation"><path stroke="currentcolor" stroke-linejoin="round" stroke-width="1.5" d="M6 1.751H3c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V10m-.75-5 1.116-1.116a1.25 1.25 0 0 0 0-1.768l-.732-.732a1.25 1.25 0 0 0-1.768 0L11 2.5M13.5 5 9.479 9.021c-.15.15-.336.26-.54.318l-3.189.911.911-3.189a1.25 1.25 0 0 1 .318-.54L11 2.5M13.5 5 11 2.5"></path></svg>
                                        {/* <i className="fa-regular fa-edit tooltip" data-tip="Edit Card"></i> */}
                                    </div>
                                </div>
                            </div>

                            <div className="stay-same-height">

                                {(task.status === "done") ? <div className={`task-checkbox-checked`}>
                                    <svg style={{color: 'rgb(34, 160, 107)'}} onClick={(ev) => onToggleDone(ev, task)} width='16' height='16' fill="none" viewBox="0 0 16 16" role="presentation" class="css-1t4wpzr"><path fill="currentcolor" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m12.326-2.52-1.152-.96L6.75 9.828 4.826 7.52l-1.152.96 2.5 3a.75.75 0 0 0 1.152 0z" clip-rule="evenodd"></path></svg>
                                </div> : <div className={`task-checkbox`}

                                    onClick={(ev) => onToggleDone(ev, task)}/>} <span className="task-task-text">{task.title}</span>
                            </div>

                            <div className="task-under-text flex-space-between">
                                <div className="task-badges">
                                    {task.isUserWatching && (<div className="tooltip" data-tip="You are watching this card">
                                            <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0006 18C7.46367 18 4.00142 13.74 4.00142 12C4.00142 9.999 7.45967 6 12.0006 6C16.3775 6 19.9988 9.973 19.9988 12C19.9988 13.74 16.5366 18 12.0006 18ZM12.0006 4C6.48003 4 2.00012 8.841 2.00012 12C2.00012 15.086 6.5771 20 12.0006 20C17.4241 20 22.0001 15.086 22.0001 12C22.0001 8.841 17.5212 4 12.0006 4ZM11.9775 13.9844C10.8745 13.9844 9.97752 13.0874 9.97752 11.9844C9.97752 10.8814 10.8745 9.9844 11.9775 9.9844C13.0805 9.9844 13.9775 10.8814 13.9775 11.9844C13.9775 13.0874 13.0805 13.9844 11.9775 13.9844ZM11.9775 7.9844C9.77152 7.9844 7.97752 9.7784 7.97752 11.9844C7.97752 14.1904 9.77152 15.9844 11.9775 15.9844C14.1835 15.9844 15.9775 14.1904 15.9775 11.9844C15.9775 9.7784 14.1835 7.9844 11.9775 7.9844Z" fill="currentColor"></path></svg>
                                            {/* <i className="fa-regular fa-eye"></i> */}
                                        </div>)} {task.dueDate && (<div className="task-date tooltip" data-tip="Due date">
                                        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6V12C11 12.2652 11.1054 12.5196 11.2929 12.7071L13.7929 15.2071C14.1834 15.5976 14.8166 15.5976 15.2071 15.2071C15.5976 14.8166 15.5976 14.1834 15.2071 13.7929L13 11.5858V6Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" fill="currentColor"></path></svg>
                                        {/* <i className="fa-regular fa-clock"></i> */} {/* <div> */} {new Date(task.dueDate).toLocaleDateString()} {/* </div> */}
                                    </div>)} {task.location && (<div className="tooltip" data-tip="Location">
                                        {/* <i className="fa-regular fa-map"></i> */}
                                        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C14.2802 21 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 9.71981 21 12 21ZM12 12C13.6081 12 14.9118 10.6964 14.9118 9.08823C14.9118 7.48011 13.6081 6.17647 12 6.17647C10.3919 6.17647 9.08824 7.48011 9.08824 9.08823C9.08824 10.6964 10.3919 12 12 12Z" fill="currentColor"></path></svg>
                                    </div>)} {task.badges?.map((badge) => (<div key={badge.id} className="tooltip badge" style={{backgroundColor: badge.color, color: badge.textColor}} data-tip={badge.categ}>
                                        {badge.categ}: {badge.chosenOption}
                                    </div>))} {task.activity?.length > 0 && (<div className="tasklist-icon tooltip" data-tip="Comments">
                                        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 17H12.5L8.28037 20.4014C6.97772 21.4869 5 20.5606 5 18.865V16.1973C3.2066 15.1599 2 13.2208 2 11C2 7.68629 4.68629 5 8 5H16C19.3137 5 22 7.68629 22 11C22 14.3137 19.3137 17 16 17ZM16 7H8C5.79086 7 4 8.79086 4 11C4 12.8638 5.27477 14.4299 7 14.874V19L12 15H16C18.2091 15 20 13.2091 20 11C20 8.79086 18.2091 7 16 7Z" fill="currentColor"></path></svg>
                                        {task.activity.length} {/* <i className="fa-regular fa-comment"></i> */}

                                    </div>)} {task.checklists?.length > 0 && (<div className="tasklist-icon tooltip" data-tip="Checklist">
                                        {/* <i className="fa-regular fa-check-square"></i> */}
                                        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13V18H6V6L16 6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H6ZM8.73534 10.3223C8.36105 9.91618 7.72841 9.89038 7.3223 10.2647C6.91619 10.639 6.89039 11.2716 7.26467 11.6777L10.8768 15.597C11.4143 16.1231 12.2145 16.1231 12.7111 15.6264L13.0754 15.2683C13.3699 14.9785 13.6981 14.6556 14.0516 14.3075C15.0614 13.313 16.0713 12.3169 17.014 11.3848L17.0543 11.3449C18.7291 9.68869 20.0004 8.42365 20.712 7.70223C21.0998 7.30904 21.0954 6.67589 20.7022 6.28805C20.309 5.90022 19.6759 5.90457 19.2881 6.29777C18.5843 7.01131 17.3169 8.27244 15.648 9.92281L15.6077 9.96263C14.6662 10.8937 13.6572 11.8889 12.6483 12.8825L11.8329 13.6851L8.73534 10.3223Z" fill="currentColor"></path></svg>
                                        {task.checklists.length}
                                    </div>)} {task.attachments?.length > 0 && (<div className="tasklist-icon tooltip" data-tip="Attachments">
                                        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6426 17.9647C10.1123 19.46 7.62736 19.4606 6.10092 17.9691C4.57505 16.478 4.57769 14.0467 6.10253 12.5566L13.2505 5.57184C14.1476 4.6952 15.5861 4.69251 16.4832 5.56921C17.3763 6.44184 17.3778 7.85135 16.4869 8.72199L9.78361 15.2722C9.53288 15.5172 9.12807 15.5163 8.86954 15.2636C8.61073 15.0107 8.60963 14.6158 8.86954 14.3618L15.0989 8.27463C15.4812 7.90109 15.4812 7.29546 15.0989 6.92192C14.7167 6.54838 14.0969 6.54838 13.7146 6.92192L7.48523 13.0091C6.45911 14.0118 6.46356 15.618 7.48523 16.6163C8.50674 17.6145 10.1511 17.6186 11.1679 16.6249L17.8712 10.0747C19.5274 8.45632 19.5244 5.83555 17.8676 4.2165C16.2047 2.59156 13.5266 2.59657 11.8662 4.21913L4.71822 11.2039C2.42951 13.4404 2.42555 17.083 4.71661 19.3218C7.00774 21.5606 10.7323 21.5597 13.0269 19.3174L19.7133 12.7837C20.0956 12.4101 20.0956 11.8045 19.7133 11.431C19.331 11.0574 18.7113 11.0574 18.329 11.431L11.6426 17.9647Z" fill="currentColor"></path>
                                        </svg>
                                        {task.attachments.length} {/* <i className="fa-regular fa-paperclip"></i> */}
                                    </div>)} {task.description && (<div className="tasklist-icon tooltip" data-tip="Description">
                                        <svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM4 9C3.44772 9 3 9.44772 3 10C3 10.5523 3.44772 11 4 11H20C20.5523 11 21 10.5523 21 10C21 9.44772 20.5523 9 20 9H4ZM3 14C3 13.4477 3.44772 13 4 13H20C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14ZM4 17C3.44772 17 3 17.4477 3 18C3 18.5523 3.44772 19 4 19H14C14.5523 19 15 18.5523 15 18C15 17.4477 14.5523 17 14 17H4Z" fill="currentColor"></path></svg>
                                        {/* <i className="fa-regular fa-align-left"></i> */}
                                    </div>)}
                                </div>
                            </div>

                            <div className="task-users">
                                {task.members?.length > 0 && (<div key={task.id} className="task-user-icons task-user-icon">
                                        {task.members.map((member, idx) => {
                                            // (idx <  5)
                                            if (member?.imgUrl) {
                                                return (idx < 5) ? (<div className="user-circle task-user-icon" key={member.id} style={{backgroundImage: `url(${member.imgUrl})`}}></div>) : (<></>)
                                            } else {
                                                const initials = member?.fullname?.split(" ")
                                                return (idx < 5) ? (<div key={member.id} className="member-circle task-user-icon" title="LH">
                                                        {initials?.[0]?.[0].toUpperCase() || ""} {initials?.[1]?.[0].toUpperCase() || ""}
                                                    </div>) : (<></>)
                                            }
                                        })}
                                    </div>)}
                            </div>


                        </div>
                        {shadow?.taskId === task.id && shadow.edge === "bottom" && <Placeholder placeholderHeight={placeholderHeight}/>}
                    </React.Fragment>))} {showForm && <AddTaskForm onSetShowForm={onSetShowForm} selectedGroup={group}/>}
            </div>

            {!showForm && (<div className="group-list-footer" style={{color: group.style?.color || "#172b4d"}}>
                    <button className="add-card-btn" onClick={onSetShowForm} style={{color: group.style?.color || "#172b4d"}}>
                        <i className="fa-regular fa-plus"></i> Add a card
                    </button>
                    <button className="tooltip create-from-template-btn" style={{color: group.style?.color || "#44546f"}} data-tip="Create from template">
                        <svg style={{color: group.style?.color || "#44546f"}} width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6V5C3 3.89543 3.89543 3 5 3H6C6.55228 3 7 3.44772 7 4C7 4.55228 6.55228 5 6 5H5V6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6Z" fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6H19C20.1046 6 21 6.89543 21 8V18C21 19.1046 20.1046 20 19 20H8C6.89543 20 6 19.1046 6 18V8ZM8 8H19V14H8V8ZM18 18C17.4477 18 17 17.5523 17 17C17 16.4477 17.4477 16 18 16C18.5523 16 19 16.4477 19 17C19 17.5523 18.5523 18 18 18ZM8 17C8 17.5523 8.44772 18 9 18H12C12.5523 18 13 17.5523 13 17C13 16.4477 12.5523 16 12 16H9C8.44772 16 8 16.4477 8 17Z" fill="currentColor"></path>
                            <path d="M4 14C3.44772 14 3 14.4477 3 15V16C3 17.1046 3.89543 18 5 18V15C5 14.4477 4.55228 14 4 14Z" fill="currentColor"></path>
                            <path d="M3 9C3 8.44772 3.44772 8 4 8C4.55228 8 5 8.44772 5 9V12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12V9Z" fill="currentColor"></path>
                            <path d="M8 4C8 3.44772 8.44772 3 9 3H13C13.5523 3 14 3.44772 14 4C14 4.55228 13.5523 5 13 5H9C8.44772 5 8 4.55228 8 4Z" fill="currentColor"></path>
                            <path d="M16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H19C19 3.89543 18.1046 3 17 3H16Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </div>)}
        </>)
}


export function GroupList({
    onLoadTask, onMoveCard, onReorderCard, Placeholder, onSetPlaceholderHeight, placeholderHeight, onsetQuickEdit, showQuickEdit, useDarkTextColors,
}) {
    const boardToShow = useSelector((state) => state.boardModule.board)
    const [largeLabels, setLargeLabels] = useState(false)
    const [showGroupEdit, SetGroupEdit] = useState(false)
    const [shadowGroup, setShadowGroup] = useState(null)
    const [showCopyList, setCopyList] = useState(false)
    const [showMoveList, setMoveList] = useState(false)
    const [showMoveAll, setMoveAll] = useState(false)
    const [showSort, setSort] = useState(false)
    const [header, setHeader] = useState(null)
    const [grp, setGroup] = useState(null)
    const containerRef = useRef(null)
    const groupRefs = useRef({})

    function onSetSort() {
        setSort(!showSort)
    }

    function onSetGroupEdit() {
        SetGroupEdit(!showGroupEdit)
    }

    function onSetCopyList() {
        setCopyList(!showCopyList)
    }

    function onSetMoveList() {
        setMoveList(!showMoveList)
    }

    function onSetMoveAll() {
        setMoveAll(!showMoveAll)
    }

    function toggleLargeLabels(ev) {
        ev.stopPropagation()
        setLargeLabels(!largeLabels)
    }

    function getGroupRef(groupId) {
        if (!groupRefs.current[groupId]) {
            groupRefs.current[groupId] = React.createRef()
        }
        return groupRefs.current[groupId]
    }

    useEffect(() => {
        if (!boardToShow?.groups) return
        boardToShow.groups.forEach((group) => {
            const ref = groupRefs.current[group.id]
            if (!ref?.current) return
            const el = ref.current
            draggable({
                element: el, getInitialData({element}) {
                    return getGroupData({
                        group, rect: element.getBoundingClientRect(),
                    })
                }, onGenerateDragPreview({location, nativeSetDragImage, source}) {
                    setCustomNativeDragPreview({
                        nativeSetDragImage, getOffset: preserveOffsetOnSource({element: el, input: location.current.input}), render({container}) {
                            const {width, height} = el.getBoundingClientRect();
                            const computedStyles = window.getComputedStyle(el);
                            const wrapper = document.createElement("div");
                            wrapper.className = "group-lists";
                            const clone = el.cloneNode(true);
                            clone.style.width = width + "px";
                            clone.style.height = height + "px";
                            clone.style.backgroundColor = computedStyles.backgroundColor || "#fff";
                            clone.style.opacity = "1";
                            clone.style.setProperty("opacity", "1", "important");
                            clone.style.pointerEvents = "none";
                            clone.style.borderRadius = computedStyles.borderRadius;
                            clone.style.zIndex = "1000";
                            wrapper.style.overflow = "hidden";
                            clone.querySelectorAll("*").forEach(child => {
                                child.style.removeProperty("opacity");
                            });
                            wrapper.appendChild(clone);
                            container.appendChild(wrapper);
                        },
                    });
                },
            })
        })
    }, [boardToShow?.groups])

    useEffect(() => {
        if (!boardToShow?.groups) return

        boardToShow.groups.forEach((group) => {
            const ref = groupRefs.current[group.id]
            if (!ref?.current) return
            const el = ref.current

            dropTargetForElements({
                element: el, canDrop({source}) {
                    return isGroupData(source.data)
                }, getIsSticky: () => true, getData({element, input}) {
                    return attachClosestEdge({groupId: group.id}, {
                        element, input, allowedEdges: ["right", "left"],
                    })
                }, onDragEnter({source, self}) {
                    if (!isGroupData(source.data)) return
                    const {group: draggedGroup, rect: draggedRect} = source.data
                    if (draggedGroup.id === group.id) return

                    const edge = extractClosestEdge(self.data)
                    setShadowGroup({
                        groupId: group.id, edge, width: draggedRect.width, height: draggedRect.height,
                    })
                }, onDrag({source, self}) {
                    if (!isGroupData(source.data)) return
                    const {group: draggedGroup, rect: draggedRect} = source.data
                    if (draggedGroup.id === group.id) return

                    const edge = extractClosestEdge(self.data)
                    setShadowGroup({
                        groupId: group.id, edge, width: draggedRect.width, height: draggedRect.height,
                    })
                }, onDragLeave() {
                    setShadowGroup(null)
                }, onDrop({source, self}) {
                    setShadowGroup(null)
                    if (!isGroupData(source.data)) return
                    const {group: draggedGroup} = source.data
                    if (draggedGroup.id === group.id) return

                    const edge = extractClosestEdge(self.data)
                    reorderGroups(draggedGroup.id, self.data.groupId, edge)
                },
            })
        })
    }, [boardToShow?.groups])

    function reorderGroups(draggedId, targetId, edge) {
        const boardCopy = JSON.parse(JSON.stringify(boardToShow))
        const fromIndex = boardCopy.groups.findIndex((g) => g.id === draggedId)
        const toIndex = boardCopy.groups.findIndex((g) => g.id === targetId)
        if (fromIndex < 0 || toIndex < 0) return

        const reordered = reorderWithEdge({
            list: boardCopy.groups, startIndex: fromIndex, indexOfTarget: toIndex, closestEdgeOfTarget: edge, axis: "horizontal",
        })

        boardCopy.groups = reordered
        updateBoard(boardCopy)
    }

    return (<section className="group-lists" style={{display: "flex", flexDirection: "row"}} ref={containerRef}>
        {boardToShow?.groups?.map((group) => {
            if (group.isMinimaized) {

                return (<React.Fragment key={group.id}>
                    {shadowGroup?.groupId === group.id && shadowGroup.edge === "left" && (<div className="group-placeholder list" style={{
                        width: shadowGroup.width + "px", height: shadowGroup.height + "px", marginRight: "12px", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.2)",
                    }}/>)} <MinimaizedGRoup ref={getGroupRef(group.id)} getGroupRef={getGroupRef} key={group.id} style={{
                    backgroundColor: group.style?.backgroundColor || "", color: group.style?.color || "#172b4d",
                }} group={group}/> {shadowGroup?.groupId === group.id && shadowGroup.edge === "right" && (<div className="group-placeholder list" style={{
                    width: shadowGroup.width + "px", height: shadowGroup.height + "px", marginRight: "12px", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.2)",
                }}/>)}
                </React.Fragment>)

            }

            return (<React.Fragment key={group.id}>
                {shadowGroup?.groupId === group.id && shadowGroup.edge === "left" && (<div className="group-placeholder list" style={{
                    width: shadowGroup.width + "px", height: shadowGroup.height + "px", marginRight: "12px", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.2)",

                }}/>)}

                <div ref={getGroupRef(group.id)} className="list base-components-list" style={{
                    backgroundColor: group.style?.backgroundColor || "", color: group.style?.color || "#172b4d",
                }}>
                    <GroupHeader setGroup={setGroup} setHeader={setHeader} onSetGroupEdit={onSetGroupEdit} group={group}/>

                    <TaskList grp={grp} onsetQuickEdit={onsetQuickEdit} showQuickEdit={showQuickEdit} onSetPlaceholderHeight={onSetPlaceholderHeight} Placeholder={Placeholder} placeholderHeight={placeholderHeight} toggleLargeLabels={toggleLargeLabels} largeLabels={largeLabels} currentBoard={boardToShow} currentGroup={group} onLoadTask={onLoadTask} group={group} onMoveCard={onMoveCard} onReorderCard={onReorderCard}/>


                </div>

                {shadowGroup?.groupId === group.id && shadowGroup.edge === "right" && (<div className="group-placeholder list" style={{
                    width: shadowGroup.width + "px", height: shadowGroup.height + "px", marginRight: "12px", borderRadius: "6px", backgroundColor: "rgba(0,0,0,0.2)",
                }}/>)}
            </React.Fragment>)
        })} {showGroupEdit && grp && <GroupEdit onSetSort={onSetSort} onSetMoveAll={onSetMoveAll} onSetMoveList={onSetMoveList} onSetCopyList={onSetCopyList} group={grp} onSetGroupEdit={onSetGroupEdit} header={header}/>} {showCopyList && <CopyListForm group={grp} onSetCopyList={onSetCopyList} onSetGroupEdit={onSetGroupEdit} header={header}/>} {showMoveList && <MoveListForm onSetMoveList={onSetMoveList} onSetGroupEdit={onSetGroupEdit} group={grp} header={header}/>} {showMoveAll && <MoveAll onSetMoveAll={onSetMoveAll} group={grp} header={header} onSetGroupEdit={onSetGroupEdit}/>} {showSort && <GroupSort header={header} onSetGroupEdit={onSetGroupEdit} onSetSort={onSetSort} group={grp}/>} <AddGroup useDarkTextColors={useDarkTextColors}/>
    </section>)
}


export function BoardDetails() {

    const [sideBarOpen, setSideBarOpen] = useState(true)
    const [upperBarOpen, setUpperBarOpen] = useState(false)

    function onToggleSideBar() {
        setSideBarOpen(!sideBarOpen)
    }

    function onToggleUpperBar() {
        setUpperBarOpen(!upperBarOpen)
    }

    const [showTable, setTable] = useState(false)
    const [showActivityMenu, setActivityMenu] = useState(false)

    function onSetActivityMenu() {
        setActivityMenu(!showActivityMenu)
    }

    function onSetTable() {
        setTable(!showTable)
    }

    const [showShare, setShowShare] = useState(false)

    const [placeholderHeight, setPlaceholderHeight] = useState(8)

    function onSetShowShare() {
        setShowShare(!showShare)
    }

    function onSetPlaceholderHeight(height) {
        setPlaceholderHeight(height)
    }

    const boardToShow = useSelector(state => state.boardModule.board)
    console.log('bordDetails')
    console.log(boardToShow)

    const [taskToShow, setTaskToShow] = useState(null)
    const {boardId} = useParams()
    const navigate = useNavigate()
    const popupRef = useRef(null)

    const [isPopupShown, togglePopup] = useToggle(false)


    useEffect(() => {
        onLoadBoard()
    }, [])

    function onLoadBoard() {
        loadBoard(boardId).then(() => {
            setTaskToShow(null)
        })
    }


    async function onLoadTask(ev, task, taskList, group, currentBoard) {
        console.log('ev.target', ev.target)
        console.log('ev.currentTarget', ev.currentTarget)
        // if (ev.target === ev.currentTarget) {
        console.log('task', task)
        console.log('taskList', taskList)
        console.log('group', group)

        let boardLabels = []
        currentBoard.groups.forEach(group => {
            group.tasks.forEach(task => {
                boardLabels = boardLabels.concat(task.labels)
            })
        })
        boardLabels = boardLabels.filter((label, index, self) => index === self.findIndex((t) => (t.id === label.id)))
        currentBoard.labels = boardLabels
        task.boardLabels = boardLabels

        task.group = group
        task.taskList = taskList
        task.board = currentBoard

        setTaskToShow(task)
        setTaskToEdit(task)
        if (!showQuickEdit) {
            togglePopup()
        }

    }

    function closePopupOnlyIfClickedOutOfIt(e) {
        if (e.target === e.currentTarget) {
            onModalClose()
            togglePopup()

        }
    }

    function closePopup2(e) {
        onModalClose()
        togglePopup()
    }


    const [largeLabels, setLargeLabels] = useState(false)

    function toggleLargeLabels(ev) {
        ev.stopPropagation()
        setLargeLabels(!largeLabels)
    }

    function onStarBoard(ev) {
        ev.stopPropagation()
        // need to implement
    }

    const [taskToEdit, setTaskToEdit] = useState(null)

    function onSaveTaskOuter(updatedTask) {
        // console.log(updatedTask.labels)
        setTaskToEdit(updatedTask)

    }

    async function onModalClose() {
        try {

            console.log('modal close called')

            // const updatedTask = structuredClone({...taskToShow})

            // I HAVE ABSOLUTLY NO IDEA WHY IT WORKS WITH TASK TO EDIT AND NOT WITH TASK TO SHOW
            const updatedTask = structuredClone({...taskToEdit})
            console.log('modal close ', updatedTask.title)
            const boardCopy = cleanBoard(boardToShow)
            console.log('here3')
            const groupIdx = boardCopy.groups.findIndex((g) => g.id === updatedTask.group.id)
            console.log('groupIdx', groupIdx)
            if (groupIdx === -1) return

            console.log('here2')
            const taskIdx = boardCopy.groups[groupIdx].tasks.findIndex((t) => t.id === updatedTask.id)
            console.log('taskIdx', taskIdx)
            if (taskIdx === -1) return
            const {board, group, taskList, ...cleanTask} = updatedTask
            boardCopy.groups[groupIdx].tasks[taskIdx] = cleanTask
            await updateBoard(boardCopy)
            setTaskToShow(null)
            // togglePopup()
        } catch (err) {
            console.error("Failed to save task:", err)
        }
    }


    function onMoveCard(card, fromGroupId, toGroupId, targetTask, edge) {
        const boardCopy = cleanBoard(boardToShow)
        const fromGroupIdx = boardCopy.groups.findIndex(g => g.id === fromGroupId)
        if (fromGroupIdx >= 0) {
            const taskIdx = boardCopy.groups[fromGroupIdx].tasks.findIndex(t => t.id === card.id)
            if (taskIdx >= 0) boardCopy.groups[fromGroupIdx].tasks.splice(taskIdx, 1)
        }
        const toGroupIdx = boardCopy.groups.findIndex(g => g.id === toGroupId)
        if (toGroupIdx < 0) return
        const toTasks = boardCopy.groups[toGroupIdx].tasks
        if (targetTask && edge) {
            const targetIndex = toTasks.findIndex(t => t.id === targetTask.id)
            if (targetIndex >= 0) {
                if (edge === 'top') {
                    toTasks.splice(targetIndex, 0, card)
                } else {
                    toTasks.splice(targetIndex + 1, 0, card)
                }
            } else {
                toTasks.push(card)
            }
        } else {
            toTasks.push(card)
        }
        updateBoard(boardCopy)
    }

    function onReorderCard(dragged, targetTask, edge, groupId) {
        const boardCopy = cleanBoard(boardToShow)
        const groupIdx = boardCopy.groups.findIndex((g) => g.id === groupId)
        if (groupIdx === -1) return
        const tasks = boardCopy.groups[groupIdx].tasks
        const startIndex = tasks.findIndex((t) => t.id === dragged.id)
        const targetIndex = tasks.findIndex((t) => t.id === targetTask.id)
        const reordered = reorderWithEdge({
            axis: "vertical", list: tasks, startIndex, indexOfTarget: targetIndex, closestEdgeOfTarget: edge,
        })
        boardCopy.groups[groupIdx].tasks = reordered
        updateBoard(boardCopy)
    }

    const editpos = useRef(null)
    const [showQuickEdit, setShowQuickEdit] = useState(false)

    function updateQuickEditPreview() {
        // const card = targetedCardRef.current
        const card = document.querySelector('.task')
        const copy = card.cloneNode(true)
        const currentCardWidth = card.offsetWidth
        const currentCardHeight = card.offsetHeight
        const currentCardTop = card.getBoundingClientRect().top
        const currentCardLeft = card.getBoundingClientRect().left
        editpos.current = {
            card: copy, ...editpos.current.coords, w: currentCardWidth, h: currentCardHeight, y: currentCardTop, x: currentCardLeft
        }
    }

    function onsetQuickEdit(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        const rect = ev.target.getBoundingClientRect()

        // TODO: [17.02.2025 | 16:20] learn how to use this interface. (yam's personal todo)
        const card = ev.target.closest('.task')

        const taskId = ev.target.closest('.task').dataset.taskId
        const groupId = ev.target.closest('.task').dataset.groupId

        const task = boardToShow.groups.find(g => g.id === groupId).tasks.find(t => t.id === taskId)
        const taskList = boardToShow.groups.find(g => g.id === groupId)
        const group = boardToShow.groups.find(g => g.id === groupId)
        const currentBoard = boardToShow

        console.log('task', task)
        console.log('taskList', taskList)
        console.log('group', group)

        task.group = group
        task.taskList = taskList
        task.board = currentBoard

        console.log('taskId: ', taskId)
        console.log('groupId: ', groupId)
        const copy = card.cloneNode(true)
        const currentCardWidth = card.offsetWidth
        const currentCardHeight = card.offsetHeight
        const currentCardTop = card.getBoundingClientRect().top
        const currentCardLeft = card.getBoundingClientRect().left

        editpos.current = {
            rect: rect, card: copy, coords: {
                y: currentCardTop, x: currentCardLeft, w: currentCardWidth, h: currentCardHeight,
            }
        }
        setTaskToShow(task)
        setTaskToEdit(task)
        // togglePopup()
        setShowQuickEdit(!showQuickEdit)
    }

    function closeQuickEdit(e) {
        if (e.target === e.currentTarget) {
            setShowQuickEdit(false)

        }
    }

    function cleanBoard(board) {
        const boardCopy = {...board}
        boardCopy.groups = board.groups.map(group => {
            const groupCopy = {...group}
            groupCopy.tasks = group.tasks.map(task => {
                const {board, group, taskList, ...cleanTask} = task
                return cleanTask
            })
            return groupCopy
        })
        return boardCopy
    }

    function onDeleteTask(ev) {
        const boardCopy = cleanBoard(taskToShow.board)
        const groupIdx = boardCopy.groups.findIndex(g => g.id === taskToShow.group.id)
        if (groupIdx >= 0) {
            const taskIdx = boardCopy.groups[groupIdx].tasks.findIndex(t => t.id === taskToShow.id)
            if (taskIdx >= 0) {
                boardCopy.groups[groupIdx].tasks.splice(taskIdx, 1)
            }
        }
        console.log('on delete')
        updateBoard(boardCopy)
    }

    if (!(boardToShow)) return (<div className="trello-loader">
        <img src="trello-loader.svg" alt=""/>
    </div>)

    return (<div key={boardToShow._id} className={`everything ${(isPopupShown) ? 'popup-open' : ''}`} style={{
        backgroundImage: `url(${boardToShow.style?.backgroundImage})`, color: (useDarkTextColors) ? '#172B4D' : 'white',
    }}>
        {showShare && <ShareModal onSetShowShare={onSetShowShare}/>}

        {isPopupShown && (!!taskToShow) && <>

            <div className="popup" ref={popupRef} onClick={closePopupOnlyIfClickedOutOfIt}>

                <TaskModal taskToShow={taskToShow} onClose={closePopup2} popupRef={popupRef} onSaveTaskOuter={onSaveTaskOuter}/>

            </div>
            <div className="popup-backdrop"></div>

        </>}

        <AppHeader backgrounColor={headerBackgroundColor} borderColor={headerBorderColor} useDarkTextColors={useDarkTextColors} onToggleSideBar={onToggleSideBar} sideBarOpen={sideBarOpen} onToggleUpperBar={onToggleUpperBar} upperBarOpen={upperBarOpen}/>

        <main className="main-layout">

            <SideBar backgrounColor={sidebarBackgroundColor} borderColor={sidebarBorderColor} useDarkTextColors={useDarkTextColors} onToggleSideBar={onToggleSideBar} sideBarOpen={sideBarOpen}/>

            <section className={`board-display ${(sideBarOpen ? 'side-bar-open' : 'board-display-side-bar-close')}`}>
                {showActivityMenu && <ActivityMenu onSetActivityMenu={onSetActivityMenu}/>}

                {showQuickEdit && <QuickEdit pos={editpos.current} closePopupOnlyIfClickedOutOfIt={closeQuickEdit} task={taskToShow} togglePopup={togglePopup} onDeleteTask={onDeleteTask} updateQuickEditPreview={updateQuickEditPreview}/>}

                <BoardHeader onSetActivityMenu={onSetActivityMenu} backgrounColor={headerBackgroundColor} borderColor={headerBorderColor} onSetShowShare={onSetShowShare} onStarBoard={onStarBoard} isStarred={boardToShow.isStarred} onSetTable={onSetTable} useDarkTextColors={useDarkTextColors} onToggleSideBar={onToggleSideBar} sideBarOpen={sideBarOpen}/>

                {showTable && <GroupTable></GroupTable>} {!showTable && <GroupList useDarkTextColors={useDarkTextColors} onSetPlaceholderHeight={onSetPlaceholderHeight} Placeholder={Placeholder} placeholderHeight={placeholderHeight} onsetQuickEdit={onsetQuickEdit} showQuickEdit={showQuickEdit} onMoveCard={onMoveCard} onLoadTask={onLoadTask} onReorderCard={onReorderCard}/>}

            </section>

        </main>
    </div>)
}