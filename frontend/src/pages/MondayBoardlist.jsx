


import {useParams} from "react-router"
import { Tooltip } from 'react-tooltip'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AddTaskForm } from '../cmps/AddTaskForm'
import {eventBus, getFirstName} from '../services/util.service.js'
import {loadBoard, loadBoards, updateBoard} from "../store/store.js"
import React, {useState, useEffect, useRef, Fragment} from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


export function MondayTask({
    group,
    currentBoard,
    currentGroup,
    onLoadTask,
    largeLabels,
    toggleLargeLabels,
    onMoveCard,
    onReorderCard,
    onSetPlaceholderHeight,
    placeholderHeight,
    onsetQuickEdit,
    showQuickEdit,
}) {
    const [showForm, setShowForm] = useState(false)
    const [showFirstForm, setShowFirstForm] = useState(false)
    const [tasks, setTasks] = useState(group.tasks)
    const [shadow, setShadow] = useState(null)

    const cardRefs = useRef({})
    const listRef = useRef(null)

    const dispatch = useDispatch()
    const boardToShow = useSelector((state) => state.boardModule.board)

    useEffect(() => {
        setTasks(group.tasks)
    }, [group.tasks, boardToShow])

    useEffect(() => {
        const unsub = eventBus.on("showAddGroup", (data) => {
            setShowFirstForm(data)
        })
        return () => unsub()
    }, [])

    function onToggleDone(ev, task) {
        ev.stopPropagation()
        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? { ...t, status: t.status === "done" ? "" : "done" } : t
        )
        setTasks(updatedTasks)
        updateBoardState(updatedTasks)
    }

    function onSetShowForm() {
        setShowForm(!showForm)
    }

    function onSetFirstForm() {
        setShowFirstForm(!showFirstForm)
    }

    function onDeleteTask(ev, taskId) {
        ev.stopPropagation()
        ev.preventDefault()
        const currentRef = getCardRef(taskId)
        currentRef.current.style.display = 'none'
        const updatedGroup = { ...group, tasks: group.tasks.filter((task) => task.id !== taskId) }
        const updatedBoard = { ...currentBoard, groups: currentBoard.groups.map((g) => (g.id === group.id ? updatedGroup : g)) }
        dispatch(updateBoard(updatedBoard))
    }

    function getCardRef(taskId) {
        if (!cardRefs.current[taskId]) {
            cardRefs.current[taskId] = React.createRef()
        }
        return cardRefs.current[taskId]
    }

    function updateBoardState(updatedTasks) {
        const updatedGroup = { ...group, tasks: updatedTasks }
        const updatedBoard = { ...currentBoard, groups: currentBoard.groups.map((g) => (g.id === group.id ? updatedGroup : g)) }
        dispatch(updateBoard(updatedBoard))
    }

    function onDragEnd(result) {
        const { source, destination } = result
        if (!destination) return

        const updatedTasks = Array.from(tasks)
        const [movedTask] = updatedTasks.splice(source.index, 1)

        if (source.droppableId === destination.droppableId) {
            updatedTasks.splice(destination.index, 0, movedTask)
            setTasks(updatedTasks)
            onReorderCard && onReorderCard(movedTask, updatedTasks[destination.index], "top", group.id)
            updateBoardState(updatedTasks)
        } else {
            onMoveCard && onMoveCard(movedTask, group.id, destination.droppableId, null, null)
        }
    }

    return (
        <div className="kanban-col" ref={listRef}>
            <header className="kanban-col-header"
                            style={{ backgroundColor: mapTrelloToMonday(group.style?.backgroundColor) || "",
                                     color: group.style?.color || "" }}>
                <h2 className="kanban-col-title">{group.title} ({group.tasks.length})</h2>
            </header>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={group.id}>
                    {(provided) => (
                        <div className="kanban-items" {...provided.droppableProps} ref={provided.innerRef}>
                            {showFirstForm && <AddTaskForm onSetShowForm={onSetFirstForm} selectedGroup={group} />}

                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="kanban-item"
                                            onClick={(ev) => !showQuickEdit && onLoadTask(ev, task, currentGroup, group, boardToShow)}
                                        >
                                            <div className="task-card" ref={getCardRef(task.id)}>
                                                {/* Task Cover */}
                                                {task.style?.backgroundImage && (
                                                    <div className="cover-img monday-cover-img">
                                                        <img src={`/${task.style.backgroundImage}`} alt="Task Cover" />
                                                    </div>
                                                )}

                                                <div className="labels">
                                                    {task.badges?.map((label) => (
                                                        <div
                                                                key={label.id}
                                                                className={`status-priority-badge badge`}
                                                                // style={{ backgroundColor: label.color || "#61bd4f" }}
                                                                onClick={toggleLargeLabels}
                                                                // data-tooltip-id={`label-${label.id}`}
                                                                // data-tooltip-content={label.title}
                                                                data-after-color={label.color}
                                                        >
                                                            <div className="label-text">{label.categ} {label.chosenOption}</div>
                                                            <div className="status-priority-badge-after" style={{ backgroundColor: mapTrelloToMonday(label.color) || "#61bd4f" }}></div>
                                                        </div>
                                                    ))}

                                                    {task.labels?.map((label) => (
                                                        <div
                                                            key={label.id}
                                                            className={`status-priority-badge badge`}
                                                            // style={{ backgroundColor: label.color || "#61bd4f" }}
                                                            onClick={toggleLargeLabels}
                                                            // data-tooltip-id={`label-${label.id}`}
                                                            // data-tooltip-content={label.title}
                                                            data-after-color={label.color}
                                                        >
                                                            <div className="label-text">{label.title.split(' ')[0]}..</div>
                                                            <div className="status-priority-badge-after" style={{ backgroundColor: mapTrelloToMonday(label.color) || "#61bd4f" }}></div>
                                                        </div>
                                                    ))}


                                                </div>

                                                <div className="task-upper-btns">
                                                    <div onClick={(ev) => onsetQuickEdit(ev)} className="monday-edit-btn tooltip" data-tooltip-id="edit-tooltip" data-tooltip-content="Edit Task">
                                                        <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" className="icon_a821328549 noFocusStyle_32df5ee696" data-testid="icon">
                                                            <path d="M13.8542 3.59561C13.8541 3.59568 13.8542 3.59555 13.8542 3.59561L4.80915 12.6503L3.81363 16.189L7.35682 15.1957L16.4018 6.14C16.4746 6.06722 16.5161 5.96795 16.5161 5.86503C16.5161 5.76221 16.4753 5.6636 16.4026 5.59083C16.4025 5.59076 16.4026 5.59091 16.4026 5.59083L14.4038 3.59568C14.3309 3.52292 14.232 3.48197 14.1289 3.48197C14.026 3.48197 13.927 3.52297 13.8542 3.59561ZM12.8051 2.54754C13.1562 2.19695 13.6324 2 14.1289 2C14.6254 2 15.1016 2.19693 15.4527 2.54747C15.4527 2.5475 15.4527 2.54745 15.4527 2.54747L17.4515 4.54263C17.8026 4.89333 18 5.36914 18 5.86503C18 6.36091 17.8028 6.8365 17.4518 7.18719L8.26993 16.3799C8.17984 16.4701 8.06798 16.5356 7.94516 16.57L2.94244 17.9724C2.68418 18.0448 2.4069 17.9723 2.21725 17.7829C2.0276 17.5934 1.95512 17.3165 2.02768 17.0586L3.43296 12.0633C3.46728 11.9413 3.53237 11.8301 3.62199 11.7404L12.8051 2.54754Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                        </svg>
                                                        <Tooltip id="edit-tooltip"/>
                                                    </div>
                                                    <div onClick={(ev) => onDeleteTask(ev, task.id)} className="monday-delete-btn tooltip" data-tooltip-id="delete-tooltip" data-tooltip-content="Delete Task">
                                                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_a821328549 noFocusStyle_32df5ee696" data-testid="icon"><path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path></svg>
                                                        <Tooltip id="delete-tooltip"/>
                                                    </div>


                                                </div>

                                                <div className="task-card-header flex align-center space-between">
                                                    <span>{task.title}</span>
                                                    <div className="task-checkbox" onClick={(ev) => onToggleDone(ev, task)}>
                                                        {task.status === "done" ? (<svg style={{color: 'rgb(34, 160, 107)'}} width="16" height="16" fill="none" viewBox="0 0 16 16">
                                                                <path fill="currentColor" fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m12.326-2.52..." clipRule="evenodd"/>
                                                            </svg>) : (<div className="task-checkbox-empty"></div>)}
                                                    </div>
                                                </div>

                                                <div className="task-card-body">

                                                    {task.dueDate && (<div className="badge tooltip" data-tooltip-id={`due-${task.id}`} data-tooltip-content="Due Date">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true" className="icon_f74f57d4ab dateCompactFieldLabelIcon--Ci6OH noFocusStyle_fabcf1d9d4" data-testid="icon">
                                                        <path d="M6.85925 2.77417C6.85925 2.35996 6.52346 2.02417 6.10925 2.02417C5.69504 2.02417 5.35925 2.35996 5.35925 2.77417V4.99746V7.22083C5.35925 7.63504 5.69504 7.97083 6.10925 7.97083C6.52346 7.97083 6.85925 7.63504 6.85925 7.22083V5.74746H11.6676C12.0818 5.74746 12.4176 5.41168 12.4176 4.99746C12.4176 4.58325 12.0818 4.24746 11.6676 4.24746H6.85925V2.77417ZM2.56946 4.79273C2.91859 4.4436 3.39211 4.24746 3.88586 4.24746C4.30007 4.24746 4.63586 4.58325 4.63586 4.99746C4.63586 5.41168 4.30007 5.74746 3.88586 5.74746C3.78994 5.74746 3.69795 5.78556 3.63012 5.85339C3.5623 5.92122 3.52419 6.01321 3.52419 6.10913V8.69411H16.4758V6.10913C16.4758 6.01321 16.4377 5.92122 16.3699 5.85339C16.3021 5.78556 16.2101 5.74746 16.1141 5.74746H14.6409V7.22083C14.6409 7.63504 14.3051 7.97083 13.8909 7.97083C13.4767 7.97083 13.1409 7.63504 13.1409 7.22083V5.0069L13.1408 4.99746L13.1409 4.98802V2.77417C13.1409 2.35996 13.4767 2.02417 13.8909 2.02417C14.3051 2.02417 14.6409 2.35996 14.6409 2.77417V4.24746H16.1141C16.6079 4.24746 17.0814 4.4436 17.4305 4.79273C17.7797 5.14186 17.9758 5.61538 17.9758 6.10913V9.44411V16.1141C17.9758 16.6079 17.7797 17.0814 17.4305 17.4305C17.0814 17.7796 16.6079 17.9758 16.1141 17.9758H3.88586C3.39211 17.9758 2.91859 17.7796 2.56946 17.4305C2.22033 17.0814 2.02419 16.6079 2.02419 16.1141V9.44411V6.10913C2.02419 5.61538 2.22033 5.14186 2.56946 4.79273ZM3.52419 16.1141V10.1941H16.4758V16.1141C16.4758 16.21 16.4377 16.302 16.3699 16.3699C16.302 16.4377 16.2101 16.4758 16.1141 16.4758H3.88586C3.78994 16.4758 3.69795 16.4377 3.63012 16.3699C3.5623 16.302 3.52419 16.21 3.52419 16.1141Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                    </svg>

                                                    <span>{new Date(task.dueDate).toLocaleDateString()}</span> <Tooltip id={`due-${task.id}`}/>
                                                </div>)}

                                                    {task.checklists?.length > 0 && (<div className="tasklist-icon tooltip" data-tooltip-id={`checklist-${task.id}`} data-tooltip-content="Checklists">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_a821328549 aXsDV nFT4_ noFocusStyle_32df5ee696" data-testid="icon"><path d="M2 2.75C2 2.33579 2.33579 2 2.75 2H6.75C7.16421 2 7.5 2.33579 7.5 2.75C7.5 3.16421 7.16421 3.5 6.75 3.5H5.4502V7.25H9V6.5C9 5.94772 9.44772 5.5 10 5.5H17C17.5523 5.5 18 5.94772 18 6.5V9.5C18 10.0523 17.5523 10.5 17 10.5H10C9.44772 10.5 9 10.0523 9 9.5V8.75H5.4502V14.5C5.4502 14.6381 5.56212 14.75 5.7002 14.75H9V14C9 13.4477 9.44772 13 10 13H17C17.5523 13 18 13.4477 18 14V17C18 17.5523 17.5523 18 17 18H10C9.44772 18 9 17.5523 9 17V16.25H5.7002C4.7337 16.25 3.9502 15.4665 3.9502 14.5V3.5H2.75C2.33579 3.5 2 3.16421 2 2.75ZM10.5 7V9H16.5V7H10.5ZM10.5 16.5V14.5H16.5V16.5H10.5Z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                                    <span>{task.checklists.length}</span> <Tooltip id={`checklist-${task.id}`}/>
                                                </div>)}

                                                    {task.attachments?.length > 0 && (<div className="tasklist-icon tooltip" data-tooltip-id={`attach-${task.id}`} data-tooltip-content="Attachments">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_92124e0247 noFocusStyle_140c8fd42e" data-testid="icon">
                                                        <path d="M13.3715 16.2871C12.4839 17.2191 11.2719 17.75 10 17.75C8.72809 17.75 7.51613 17.2191 6.62847 16.2871C5.74199 15.3563 5.25 14.1013 5.25 12.8L5.25 8.61244C5.25 8.19822 5.58579 7.86244 6 7.86244C6.41421 7.86244 6.75 8.19822 6.75 8.61244L6.75 12.8C6.75 13.7265 7.10086 14.6081 7.71468 15.2526C8.32731 15.8959 9.15018 16.25 10 16.25C10.8498 16.25 11.6727 15.8959 12.2853 15.2526C12.8991 14.6081 13.25 13.7265 13.25 12.8L13.25 5.8C13.25 5.24482 13.0396 4.7193 12.6758 4.33734C12.3133 3.95663 11.8295 3.75 11.3333 3.75C10.8371 3.75 10.3534 3.95663 9.99082 4.33734C9.62705 4.7193 9.41667 5.24482 9.41667 5.8L9.41667 12.8C9.41667 12.9839 9.48658 13.1533 9.60029 13.2727C9.71283 13.3909 9.85742 13.45 10 13.45C10.1426 13.45 10.2872 13.3909 10.3997 13.2727C10.5134 13.1533 10.5833 12.9839 10.5833 12.8L10.5833 8.62363C10.5833 8.20942 10.9191 7.87363 11.3333 7.87363C11.7475 7.87363 12.0833 8.20942 12.0833 8.62363L12.0833 12.8C12.0833 13.3587 11.8723 13.9015 11.4859 14.3072C11.0983 14.7141 10.5647 14.95 10 14.95C9.43533 14.95 8.90165 14.7141 8.51409 14.3072C8.12771 13.9015 7.91667 13.3587 7.91667 12.8L7.91667 5.8C7.91667 4.86997 8.26818 3.97111 8.90461 3.30286C9.54222 2.63337 10.415 2.25 11.3333 2.25C12.2516 2.25 13.1244 2.63337 13.7621 3.30286C14.3985 3.97111 14.75 4.86997 14.75 5.8L14.75 12.8C14.75 14.1013 14.258 15.3563 13.3715 16.2871Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span>{task.attachments.length}</span> <Tooltip id={`attach-${task.id}`}/>
                                                </div>)}

                                                    {task.activity?.length > 0 && (<div className="tasklist-icon tooltip" data-tooltip-id={`activity-${task.id}`} data-tooltip-content="Comments">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_a821328549 aXsDV nFT4_ noFocusStyle_32df5ee696" data-testid="icon">
                                                        <path d="M10.4339 1.95001C11.5975 1.94802 12.7457 2.2162 13.7881 2.73345C14.8309 3.25087 15.7392 4.0034 16.4416 4.93172C17.1439 5.86004 17.6211 6.93879 17.8354 8.08295C18.0498 9.22712 17.9955 10.4054 17.6769 11.525C17.3582 12.6447 16.7839 13.675 15.9992 14.5348C15.2144 15.3946 14.2408 16.0604 13.1549 16.4798C12.0689 16.8991 10.9005 17.0606 9.74154 16.9514C8.72148 16.8553 7.73334 16.5518 6.83716 16.0612L4.29488 17.2723C3.23215 17.7786 2.12265 16.6693 2.6287 15.6064L3.83941 13.0637C3.26482 12.0144 2.94827 10.8411 2.91892 9.64118C2.88616 8.30174 3.21245 6.97794 3.86393 5.80714C4.51541 4.63635 5.46834 3.66124 6.62383 2.98299C7.77896 2.30495 9.09445 1.9483 10.4339 1.95001ZM10.4339 1.95001C10.4343 1.95001 10.4347 1.95001 10.4351 1.95001L10.434 2.70001L10.4326 1.95001C10.433 1.95001 10.4334 1.95001 10.4339 1.95001ZM13.1214 4.07712C12.2867 3.66294 11.3672 3.44826 10.4354 3.45001L10.4329 3.45001C9.3608 3.44846 8.30778 3.73387 7.38315 4.2766C6.45852 4.81934 5.69598 5.59963 5.17467 6.5365C4.65335 7.47337 4.39226 8.53268 4.41847 9.6045C4.44469 10.6763 4.75726 11.7216 5.32376 12.6319C5.45882 12.8489 5.47405 13.1198 5.36416 13.3506L4.28595 15.6151L6.54996 14.5366C6.78072 14.4266 7.05158 14.4418 7.26863 14.5768C8.05985 15.0689 8.95456 15.3706 9.88225 15.458C10.8099 15.5454 11.7452 15.4162 12.6145 15.0805C13.4837 14.7448 14.2631 14.2119 14.8912 13.5236C15.5194 12.8354 15.9791 12.0106 16.2341 11.1144C16.4892 10.2182 16.5327 9.27504 16.3611 8.35918C16.1895 7.44332 15.8075 6.57983 15.2453 5.83674C14.6831 5.09366 13.9561 4.49129 13.1214 4.07712Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <span>{task.activity.length}</span> <Tooltip id={`activity-${task.id}`}/>
                                                </div>)}

                                                    {task.isUserWatching && (<div className="tooltip" data-tooltip-id={`watch-${task.id}`} data-tooltip-content="You are watching this task">
                                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab noFocusStyle_fabcf1d9d4" data-testid="icon">
                                                        <path d="M10 2.04999C10.4143 2.04999 10.75 2.38577 10.75 2.79999V3.61058C12.0546 3.75821 13.2785 4.34336 14.2159 5.28079C15.309 6.37389 15.9231 7.85644 15.9231 9.4023C15.9231 11.7406 16.1727 13.0548 16.3959 13.758C16.5068 14.1075 16.6088 14.2984 16.6645 14.3868C16.6835 14.4168 16.697 14.435 16.7038 14.4435C16.9179 14.6455 16.9953 14.9565 16.8964 15.2377C16.7908 15.538 16.5072 15.7389 16.1889 15.7389H12.9529C12.9516 15.8038 12.9418 15.8695 12.9226 15.9348C12.7439 16.5449 12.3725 17.0809 11.864 17.4623C11.3554 17.8437 10.7371 18.05 10.1015 18.05C9.46584 18.05 8.84746 17.8437 8.33891 17.4623C7.83037 17.0809 7.45905 16.5449 7.28027 15.9348C7.26115 15.8695 7.2513 15.8038 7.24997 15.7389H4.00001C3.71313 15.7389 3.45138 15.5752 3.32575 15.3173C3.20248 15.0643 3.23145 14.764 3.39963 14.5394C3.40133 14.5369 3.40486 14.5316 3.41004 14.5235C3.42459 14.5005 3.45231 14.4542 3.48918 14.3812C3.56285 14.2352 3.67358 13.9813 3.78854 13.5917C4.01863 12.812 4.26574 11.4886 4.26574 9.4023C4.26574 7.85644 4.87984 6.37389 5.97293 5.28079C6.865 4.38872 8.01646 3.81567 9.25004 3.63507V2.79999C9.25004 2.38577 9.58582 2.04999 10 2.04999ZM8.80705 15.7389C8.90698 15.9443 9.05465 16.1241 9.2389 16.2623C9.488 16.4491 9.79062 16.55 10.1015 16.55C10.4123 16.55 10.7149 16.4491 10.964 16.2623C11.1483 16.1241 11.2959 15.9443 11.3959 15.7389H8.80705ZM7.03359 6.34145C7.84538 5.52967 8.9464 5.07361 10.0944 5.07361C11.2425 5.07361 12.3435 5.52967 13.1553 6.34145C13.9671 7.15324 14.4231 8.25426 14.4231 9.4023C14.4231 11.8353 14.6814 13.3144 14.9661 14.2117L14.9748 14.2389H5.15815C5.18119 14.1682 5.20426 14.0941 5.22721 14.0163C5.50499 13.075 5.76574 11.6052 5.76574 9.4023C5.76574 8.25426 6.2218 7.15324 7.03359 6.34145Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                                    </svg>
                                                    <Tooltip id={`watch-${task.id}`}/>
                                                </div>)}



                                                {/*    {task.badges?.map((badge) => (*/}
                                                {/*        <div key={badge.id} className="badge tooltip" */}
                                                {/*            style={{backgroundColor: badge.color, color: badge.textColor}}*/}
                                                {/*            data-tooltip-id={`badge-${badge.id}`} data-tooltip-content={`${badge.categ}: ${badge.chosenOption}`}>*/}
                                                {/*    {badge.chosenOption} <Tooltip id={`badge-${badge.id}`}/>*/}
                                                {/*</div>))}*/}
                                                </div>


                                                <div className="card-bottom">
                                                    {task.members?.length > 0 && (<div className="task-members">
                                                            {task.members.slice(0, 5).map((member) => (

                                                                <>{member.imgUrl ? (<div key={member.id} className="small-circle flex align-center justify-center tooltip" data-tooltip-id={`member-${member.id}`} data-tooltip-content={member.fullname}>
                                                                        <img src={`/${member.imgUrl}`} alt={member.fullname} className="member-img"/>
                                                                    </div>) : (<span className="monday-user-circle small-circle">
                                                                          {member.fullname.split(" ").map((n) => n[0]).join("").toUpperCase()}
                                                                        </span>)} <Tooltip id={`member-${member.id}`}/>
                                                                </>
                                                            ))}
                                                        </div>)}
                                                </div>
                                            </div>
                                        </div>)}
                                </Draggable>))} {provided.placeholder}
                        </div>)}
                </Droppable> </DragDropContext>

            {showForm && <AddTaskForm onSetShowForm={onSetShowForm} selectedGroup={group}/>} {!showForm && (<div className="group-list-footer" style={{color: group.style?.color || "#172b4d"}}>
                <button className="monday-add-card-btn add-card-btn" onClick={onSetShowForm} >
                    <i className="fa-regular fa-plus"></i> Add a card
                </button>
            </div>)}
        </div>)
}

export function MondayTaskList({board, onLoadTask}) {
    return (
        <section className="kanban-container-of-container flex">
            <div className="kanban-container flex">
                {board.groups.map((group) => (<MondayTask key={group.id} group={group} onLoadTask={onLoadTask}/>))}
            </div>
        </section>)
}

export function TopHeader({  }) {
    return (
        <div className="header-container">
            <div className="header-left">
                <div className="logo-section">
                    <div className="monday-logo">
                        <svg viewBox="0 0 33 33" fill="currentColor" width="25" height="25" aria-hidden="true" className="icon_f74f57d4ab" data-testid="topbar-icon">
                            <g clipPath="url(#clip0_1150_158978)">
                                <path d="M20.3812 4.62863C20.3812 2.47439 18.6357 0.728027 16.4826 0.728027C14.3294 0.728027 12.584 2.47439 12.584 4.62863V8.91568C12.584 11.0699 14.3294 12.8163 16.4826 12.8163C18.6357 12.8163 20.3812 11.0699 20.3812 8.91568V4.62863Z" fill="url(#paint0_linear_1150_158978)"></path>
                                <path d="M5.11916 10.0994C3.07035 9.43366 0.870087 10.554 0.204732 12.6018C-0.460623 14.6495 0.660888 16.8492 2.7097 17.5149L6.78692 18.8397C8.83573 19.5054 11.036 18.385 11.7013 16.3373C12.3667 14.2895 11.2452 12.0898 9.19638 11.4241L5.11916 10.0994Z" fill="url(#paint1_linear_1150_158978)"></path>
                                <path d="M5.59794 26.3042C4.33171 28.0471 4.71733 30.4859 6.45925 31.7514C8.20117 33.017 10.6398 32.6301 11.906 30.8873L14.4259 27.419C15.6921 25.6762 15.3065 23.2374 13.5646 21.9718C11.8226 20.7062 9.38404 21.0931 8.1178 22.8359L5.59794 26.3042Z" fill="url(#paint2_linear_1150_158978)"></path>
                                <path d="M21.1629 30.8429C22.4291 32.5858 24.8677 32.9726 26.6096 31.7071C28.3516 30.4415 28.7372 28.0027 27.471 26.2599L24.9511 22.7916C23.6849 21.0488 21.2463 20.6619 19.5043 21.9275C17.7624 23.193 17.3768 25.6318 18.643 27.3747L21.1629 30.8429Z" fill="url(#paint3_linear_1150_158978)"></path>
                                <path d="M16.5188 21.7056C18.6553 21.7056 20.3872 19.9736 20.3872 17.8372 20.3872 15.7007 18.6553 13.9688 16.5188 13.9688 14.3823 13.9688 12.6504 15.7007 12.6504 17.8372 12.6504 19.9736 14.3823 21.7056 16.5188 21.7056zM3.89332 17.6821C6.04138 17.6821 7.78273 15.9408 7.78273 13.7927 7.78273 11.6447 6.04138 9.90332 3.89332 9.90332 1.74526 9.90332.00390625 11.6447.00390625 13.7927.00390625 15.9408 1.74526 17.6821 3.89332 17.6821zM16.4803 8.49289C18.6322 8.49289 20.3767 6.74844 20.3767 4.59654 20.3767 2.44465 18.6322.700195 16.4803.700195 14.3284.700195 12.584 2.44465 12.584 4.59654 12.584 6.74844 14.3284 8.49289 16.4803 8.49289zM8.75854 32.5044C10.9141 32.5044 12.6616 30.7569 12.6616 28.6013 12.6616 26.4457 10.9141 24.6982 8.75854 24.6982 6.60293 24.6982 4.85547 26.4457 4.85547 28.6013 4.85547 30.7569 6.60293 32.5044 8.75854 32.5044zM24.3244 32.4656C26.4753 32.4656 28.2191 30.7219 28.2191 28.571 28.2191 26.42 26.4753 24.6763 24.3244 24.6763 22.1734 24.6763 20.4297 26.42 20.4297 28.571 20.4297 30.7219 22.1734 32.4656 24.3244 32.4656z" fill="#6161FF"></path>
                                <path d="M27.8808 10.0984C29.9296 9.43268 32.1299 10.5531 32.7953 12.6008C33.4606 14.6486 32.3391 16.8482 30.2903 17.5139L26.2131 18.8387C24.1643 19.5044 21.964 18.384 21.2987 16.3363C20.6333 14.2885 21.7548 12.0888 23.8036 11.4231L27.8808 10.0984Z" fill="url(#paint4_linear_1150_158978)"></path>
                                <path d="M29.1028 17.6807C26.9547 17.6807 25.2134 15.9393 25.2134 13.7913C25.2134 11.6432 26.9547 9.90186 29.1028 9.90186C31.2508 9.90186 32.9922 11.6432 32.9922 13.7913C32.9922 15.9393 31.2508 17.6807 29.1028 17.6807Z" fill="#6161FF"></path>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1150_158978" x1="16.457" y1="-6.763" x2="16.543" y2="13.595" gradientUnits="userSpaceOnUse">
                                    <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
                                    <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_1150_158978" x1="-6.928" y1="10.311" x2="12.461" y2="16.521" gradientUnits="userSpaceOnUse">
                                    <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
                                    <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
                                </linearGradient>
                                <linearGradient id="paint2_linear_1150_158978" x1="2.077" y1="37.827" x2="13.974" y2="21.306" gradientUnits="userSpaceOnUse">
                                    <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
                                    <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
                                </linearGradient>
                                <linearGradient id="paint3_linear_1150_158978" x1="31.034" y1="37.753" x2="18.998" y2="21.333" gradientUnits="userSpaceOnUse">
                                    <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
                                    <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
                                </linearGradient>
                                <linearGradient id="paint4_linear_1150_158978" x1="39.928" y1="10.31" x2="20.539" y2="16.52" gradientUnits="userSpaceOnUse">
                                    <stop offset=".411" stopColor="#6C6CFF" stopOpacity=".9"></stop>
                                    <stop offset="1" stopColor="#6C6CFF" stopOpacity=".2"></stop>
                                </linearGradient>
                                <clipPath id="clip0_1150_158978">
                                    <path fill="#fff" d="M0 0H33V33H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h1 className="product-title">
                        <span className="title-main">wednesday</span> <span className="title-sub">work management</span>
                    </h1>
                </div>
                <button className="btn-plans">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab leftIcon_766cb80cd3 noFocusStyle_fabcf1d9d4" data-testid="icon">
                        <path d="M5.7205 3.22905C5.8506 3.08332 6.03668 3 6.23203 3H14.2113C14.4224 3 14.6217 3.09723 14.7516 3.26359L17.8547 7.23601C18.053 7.48988 18.0478 7.84757 17.8423 8.09563L10.528 16.9232C10.3977 17.0804 10.2042 17.1714 10 17.1714C9.79582 17.1714 9.60226 17.0804 9.47198 16.9232L2.1577 8.09563C1.94134 7.8345 1.94835 7.45444 2.17418 7.20147L5.7205 3.22905ZM5.95682 5.02365L6.60922 6.97241H4.21709L5.95682 5.02365ZM4.14439 8.34384H7.03991L8.48766 13.5857L4.14439 8.34384ZM11.5123 13.5857L15.8556 8.34384H12.9601L11.5123 13.5857ZM11.5373 8.34384L10 13.91L8.46268 8.34384H11.5373ZM13.4951 6.97241H15.9085L14.3727 5.00631L13.4951 6.97241ZM13.1542 4.37143H7.18472L8.05546 6.97241H11.9932L13.1542 4.37143Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    See plans
                </button>
            </div>
            <div className="header-right">
                <nav className="nav-icons">
                    <button className="icon-btn" title="Notifications">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab noFocusStyle_fabcf1d9d4" data-testid="icon">
                            <path d="M10 2.04999C10.4143 2.04999 10.75 2.38577 10.75 2.79999V3.61058C12.0546 3.75821 13.2785 4.34336 14.2159 5.28079C15.309 6.37389 15.9231 7.85644 15.9231 9.4023C15.9231 11.7406 16.1727 13.0548 16.3959 13.758C16.5068 14.1075 16.6088 14.2984 16.6645 14.3868C16.6835 14.4168 16.697 14.435 16.7038 14.4435C16.9179 14.6455 16.9953 14.9565 16.8964 15.2377C16.7908 15.538 16.5072 15.7389 16.1889 15.7389H12.9529C12.9516 15.8038 12.9418 15.8695 12.9226 15.9348C12.7439 16.5449 12.3725 17.0809 11.864 17.4623C11.3554 17.8437 10.7371 18.05 10.1015 18.05C9.46584 18.05 8.84746 17.8437 8.33891 17.4623C7.83037 17.0809 7.45905 16.5449 7.28027 15.9348C7.26115 15.8695 7.2513 15.8038 7.24997 15.7389H4.00001C3.71313 15.7389 3.45138 15.5752 3.32575 15.3173C3.20248 15.0643 3.23145 14.764 3.39963 14.5394C3.40133 14.5369 3.40486 14.5316 3.41004 14.5235C3.42459 14.5005 3.45231 14.4542 3.48918 14.3812C3.56285 14.2352 3.67358 13.9813 3.78854 13.5917C4.01863 12.812 4.26574 11.4886 4.26574 9.4023C4.26574 7.85644 4.87984 6.37389 5.97293 5.28079C6.865 4.38872 8.01646 3.81567 9.25004 3.63507V2.79999C9.25004 2.38577 9.58582 2.04999 10 2.04999ZM8.80705 15.7389C8.90698 15.9443 9.05465 16.1241 9.2389 16.2623C9.488 16.4491 9.79062 16.55 10.1015 16.55C10.4123 16.55 10.7149 16.4491 10.964 16.2623C11.1483 16.1241 11.2959 15.9443 11.3959 15.7389H8.80705ZM7.03359 6.34145C7.84538 5.52967 8.9464 5.07361 10.0944 5.07361C11.2425 5.07361 12.3435 5.52967 13.1553 6.34145C13.9671 7.15324 14.4231 8.25426 14.4231 9.4023C14.4231 11.8353 14.6814 13.3144 14.9661 14.2117L14.9748 14.2389H5.15815C5.18119 14.1682 5.20426 14.0941 5.22721 14.0163C5.50499 13.075 5.76574 11.6052 5.76574 9.4023C5.76574 8.25426 6.2218 7.15324 7.03359 6.34145Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <button className="icon-btn" title="Inbox">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                            <path d="M1.91797 11.0667C1.91797 10.9801 1.93265 10.8969 1.95966 10.8195L2.84186 10.5681L3.72406 10.3167H7.45058C7.86479 10.3167 8.20058 10.6525 8.20058 11.0667V11.6763C8.20058 11.901 8.40642 12.1453 8.72594 12.1453H11.5955C11.915 12.1453 12.1209 11.901 12.1209 11.6763V11.0667C12.1209 10.6525 12.4567 10.3167 12.8709 10.3167H16.2792L18.0431 10.8195C18.07 10.8968 18.0846 10.9803 18.0846 11.0667V13.3334C18.0846 14.8522 16.8534 16.0834 15.3346 16.0834H4.66797C3.14919 16.0834 1.91797 14.8522 1.91797 13.3334V11.0667ZM3.41797 11.8167V13.3334C3.41797 14.0238 3.97761 14.5834 4.66797 14.5834H15.3346C16.025 14.5834 16.5846 14.0238 16.5846 13.3334V11.8167H13.6159C13.5408 12.8633 12.633 13.6453 11.5955 13.6453H8.72594C7.68848 13.6453 6.78069 12.8633 6.70559 11.8167H3.41797Z"></path>
                            <path d="M5.84729 5.4165C5.59916 5.4165 5.37819 5.57347 5.29648 5.80776L3.72406 10.3167L2.84186 10.5681L1.95966 10.8195L3.88014 5.31383C4.17194 4.47709 4.96112 3.9165 5.84729 3.9165H14.156C15.0421 3.9165 15.8313 4.47709 16.1231 5.31383L18.0431 10.8195L16.2792 10.3167L14.7068 5.80776C14.6251 5.57347 14.4041 5.4165 14.156 5.4165H5.84729Z"></path>
                        </svg>
                    </button>
                    <button className="icon-btn" title="Invite members">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                            <path d="M7.27093 2.34404C7.7399 2.14979 8.24254 2.0498 8.75015 2.0498C9.25776 2.0498 9.7604 2.14979 10.2294 2.34404C10.6983 2.53829 11.1245 2.82302 11.4834 3.18195C11.8423 3.54088 12.127 3.967 12.3213 4.43597C12.5156 4.90494 12.6155 5.40758 12.6155 5.91519C12.6155 6.4228 12.5156 6.92544 12.3213 7.39441C12.127 7.86338 11.8423 8.28949 11.4834 8.64843C11.1245 9.00736 10.6983 9.29208 10.2294 9.48634C9.7604 9.68059 9.25776 9.78057 8.75015 9.78057C8.24254 9.78057 7.7399 9.68059 7.27093 9.48634C6.80196 9.29209 6.37584 9.00736 6.01691 8.64843C5.65798 8.28949 5.37325 7.86338 5.179 7.39441C4.98475 6.92544 4.88477 6.4228 4.88477 5.91519C4.88477 5.40758 4.98475 4.90494 5.179 4.43597C5.37325 3.967 5.65798 3.54088 6.01691 3.18195C6.37584 2.82302 6.80196 2.53829 7.27093 2.34404ZM8.75015 3.5498C8.43952 3.5498 8.13194 3.61099 7.84496 3.72986C7.55797 3.84873 7.29722 4.02296 7.07757 4.24261C6.85792 4.46226 6.68369 4.72301 6.56482 5.01C6.44595 5.29698 6.38477 5.60456 6.38477 5.91519C6.38477 6.22582 6.44595 6.5334 6.56482 6.82038C6.68369 7.10736 6.85792 7.36812 7.07757 7.58777C7.29722 7.80742 7.55798 7.98165 7.84496 8.10052C8.13194 8.21939 8.43952 8.28057 8.75015 8.28057C9.06078 8.28057 9.36836 8.21939 9.65534 8.10052C9.94232 7.98165 10.2031 7.80742 10.4227 7.58777C10.6424 7.36812 10.8166 7.10736 10.9355 6.82038C11.0544 6.5334 11.1155 6.22582 11.1155 5.91519C11.1155 5.60456 11.0544 5.29698 10.9355 5.01C10.8166 4.72301 10.6424 4.46226 10.4227 4.24261C10.2031 4.02296 9.94233 3.84873 9.65534 3.72986C9.36836 3.61099 9.06078 3.5498 8.75015 3.5498Z"></path>
                            <path d="M8.33935 10.7312C8.3512 10.7307 8.36306 10.7305 8.37491 10.7305H9.12469C9.13838 10.7305 9.15198 10.7308 9.1655 10.7314 9.7888 10.7566 10.4024 10.8595 10.9888 11.0353 11.4913 11.1859 11.4963 11.8685 11.0942 12.2054 10.9063 12.3628 10.6558 12.4142 10.4202 12.3465 9.99646 12.2249 9.55476 12.1529 9.10634 12.1337H8.39335C7.53853 12.1703 6.70811 12.3988 5.97999 12.7977 5.24701 13.1992 4.64204 13.7602 4.22255 14.4273 3.80542 15.0907 3.58548 15.8372 3.58328 16.5965H9.12469L9.12963 16.5965H9.21466C9.47166 16.5965 9.69353 16.7699 9.78802 17.0089 9.96102 17.4465 9.67351 17.9997 9.203 17.9997H9.12509L9.12014 17.9997H2.79163C2.35443 17.9997 2 17.6856 2 17.2981V16.6097C1.9997 15.6068 2.2887 14.6203 2.83955 13.7443 3.39044 12.8682 4.18491 12.1314 5.14751 11.6041 6.1101 11.0767 7.20884 10.7762 8.33935 10.7312zM14.7002 11.5C15.1144 11.5 15.4502 11.8358 15.4502 12.25V14H17.2002C17.6144 14 17.9502 14.3358 17.9502 14.75 17.9502 15.1642 17.6144 15.5 17.2002 15.5H15.4502V17.25C15.4502 17.6642 15.1144 18 14.7002 18 14.286 18 13.9502 17.6642 13.9502 17.25V15.5H12.2002C11.786 15.5 11.4502 15.1642 11.4502 14.75 11.4502 14.3358 11.786 14 12.2002 14H13.9502V12.25C13.9502 11.8358 14.286 11.5 14.7002 11.5z"></path>
                        </svg>
                    </button>
                    <button className="icon-btn" title="Apps">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                            <path d="M5.6579 4.88C5.6579 3.28943 6.9472 2 8.53766 2C10.1281 2 11.4174 3.28943 11.4174 4.88C11.4174 4.89526 11.4173 4.91051 11.4171 4.92572H13.0502C14.1675 4.92572 15.0732 5.83153 15.0732 6.94891V8.58332C15.0889 8.58307 15.1045 8.58295 15.1202 8.58295C16.7107 8.58295 18 9.87237 18 11.4629C18 13.0535 16.7107 14.3429 15.1202 14.3429C15.1045 14.3429 15.0889 14.3428 15.0732 14.3426V15.9768C15.0732 17.0942 14.1675 18 13.0502 18H4.02304C2.90574 18 2 17.0942 2 15.9768V13.5322C2 13.3096 2.10806 13.1009 2.28982 12.9723C2.47157 12.8438 2.70441 12.8115 2.91427 12.8858C3.07072 12.9411 3.23976 12.9715 3.41737 12.9715C4.25045 12.9715 4.9258 12.2961 4.9258 11.4629C4.9258 10.6298 4.25045 9.95437 3.41737 9.95437C3.23975 9.95437 3.07072 9.98478 2.91427 10.0401C2.70441 10.1143 2.47157 10.0821 2.28982 9.95353C2.10806 9.82501 2 9.61625 2 9.39363V6.9489C2 5.83153 2.90575 4.92572 4.02304 4.92572H5.65825C5.65802 4.91051 5.6579 4.89526 5.6579 4.88ZM8.53766 3.37143C7.70458 3.37143 7.02923 4.04683 7.02923 4.88C7.02923 5.05755 7.05961 5.22652 7.11489 5.38292C7.18906 5.5928 7.15675 5.82562 7.02824 6.00736C6.89972 6.1891 6.69099 6.29715 6.46841 6.29715H4.02304C3.66311 6.29715 3.37133 6.58895 3.37133 6.9489V8.5833C3.38665 8.58306 3.402 8.58294 3.41737 8.58294C5.00783 8.58294 6.29714 9.87237 6.29714 11.4629C6.29714 13.0535 5.00783 14.3429 3.41737 14.3429C3.402 14.3429 3.38665 14.3428 3.37133 14.3426V15.9768C3.37133 16.3368 3.66311 16.6286 4.02304 16.6286H13.0502C13.4101 16.6286 13.7019 16.3368 13.7019 15.9768V13.5319C13.7019 13.3092 13.81 13.1004 13.9918 12.9719C14.1737 12.8434 14.4066 12.8112 14.6165 12.8855C14.7731 12.941 14.9424 12.9715 15.1202 12.9715C15.9533 12.9715 16.6287 12.2961 16.6287 11.4629C16.6287 10.6298 15.9533 9.95438 15.1202 9.95438C14.9424 9.95438 14.7731 9.98488 14.6165 10.0404C14.4066 10.1147 14.1737 10.0825 13.9918 9.95399C13.81 9.82548 13.7019 9.61667 13.7019 9.39399V6.94891C13.7019 6.58895 13.4101 6.29715 13.0502 6.29715H10.6069C10.3843 6.29715 10.1756 6.1891 10.0471 6.00736C9.91857 5.82562 9.88626 5.5928 9.96044 5.38292C10.0157 5.22652 10.0461 5.05755 10.0461 4.88C10.0461 4.04683 9.37074 3.37143 8.53766 3.37143Z"></path>
                        </svg>
                    </button>
                    <button className="icon-btn" title="Search">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab noFocusStyle_fabcf1d9d4" data-testid="icon">
                            <path d="M8.65191 2.37299C6.9706 2.37299 5.35814 3.04089 4.16927 4.22976C2.9804 5.41863 2.3125 7.03108 2.3125 8.7124C2.3125 10.3937 2.9804 12.0062 4.16927 13.195C5.35814 14.3839 6.9706 15.0518 8.65191 15.0518C10.0813 15.0518 11.4609 14.5691 12.5728 13.6939L16.4086 17.5303C16.7014 17.8232 17.1763 17.8232 17.4692 17.5303C17.7621 17.2375 17.7622 16.7626 17.4693 16.4697L13.6334 12.6333C14.5086 11.5214 14.9913 10.1418 14.9913 8.7124C14.9913 7.03108 14.3234 5.41863 13.1346 4.22976C11.9457 3.04089 10.3332 2.37299 8.65191 2.37299ZM12.091 12.1172C12.9878 11.2113 13.4913 9.98783 13.4913 8.7124C13.4913 7.42891 12.9815 6.19798 12.0739 5.29042C11.1663 4.38285 9.9354 3.87299 8.65191 3.87299C7.36842 3.87299 6.1375 4.38285 5.22993 5.29042C4.32237 6.19798 3.8125 7.42891 3.8125 8.7124C3.8125 9.99589 4.32237 11.2268 5.22993 12.1344C6.1375 13.0419 7.36842 13.5518 8.65191 13.5518C9.92736 13.5518 11.1509 13.0483 12.0568 12.1514C12.0623 12.1455 12.0679 12.1397 12.0737 12.134C12.0794 12.1283 12.0851 12.1227 12.091 12.1172Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <button className="icon-btn" title="Help">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                            <path d="M10.4397 3.50655C9.93674 3.47178 9.43392 3.57593 8.98617 3.80762C8.53842 4.03931 8.16298 4.38962 7.90088 4.82027C7.63877 5.25092 7.5001 5.74533 7.5 6.24948C7.49992 6.66369 7.16407 6.99941 6.74986 6.99933 6.33564 6.99925 5.99992 6.6634 6 6.24919 6.00015 5.47006 6.21447 4.70597 6.61954 4.04042 7.02461 3.37487 7.60484 2.83347 8.29681 2.47541 8.98878 2.11734 9.76587 1.95638 10.5431 2.01012 11.3204 2.06386 12.068 2.33024 12.7041 2.78013 13.3402 3.23002 13.8404 3.84611 14.15 4.56107 14.4596 5.27604 14.5667 6.06236 14.4597 6.83409 14.3526 7.60582 14.0354 8.33327 13.5429 8.93693 13.0503 9.54059 12.4012 9.99723 11.6667 10.2569 11.4716 10.3259 11.3028 10.4537 11.1834 10.6226 11.064 10.7916 10.9999 10.9934 11 11.2003V12.3743C11 12.7885 10.6642 13.1243 10.25 13.1243 9.83579 13.1243 9.5 12.7885 9.5 12.3743V11.2011C9.49981 10.684 9.65995 10.1792 9.95838 9.75691 10.2569 9.33453 10.679 9.01513 11.1667 8.84273 11.642 8.67468 12.0619 8.37921 12.3807 7.9886 12.6994 7.598 12.9046 7.1273 12.9739 6.62794 13.0432 6.12858 12.9739 5.61979 12.7735 5.15717 12.5732 4.69454 12.2495 4.29589 11.8379 4.00479 11.4263 3.71368 10.9426 3.54132 10.4397 3.50655ZM10.25 15.1246C10.0151 15.1246 9.78555 15.1942 9.59026 15.3247 9.39498 15.4552 9.24277 15.6406 9.15289 15.8576 9.06301 16.0746 9.0395 16.3134 9.08532 16.5437 9.13114 16.7741 9.24423 16.9857 9.41031 17.1518 9.57639 17.3178 9.78798 17.4309 10.0183 17.4768 10.2487 17.5226 10.4874 17.4991 10.7044 17.4092 10.9214 17.3193 11.1069 17.1671 11.2374 16.9718 11.3679 16.7765 11.4375 16.5469 11.4375 16.3121 11.4375 15.9971 11.3124 15.6951 11.0897 15.4724 10.867 15.2497 10.5649 15.1246 10.25 15.1246Z"></path>
                        </svg>
                    </button>
                    <div className="divider"></div>
                    <div className="user-menu">
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab noFocusStyle_fabcf1d9d4" data-testid="icon">
                            <g clipPath="url(#a)">
                                <path d="M4.5 2.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 10A2.25 2.25 0 1 1 0 10a2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM20 10a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0ZM4.5 17.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm7.75 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"></path>
                            </g>
                            <defs>
                                <clipPath id="a">
                                    <path d="M0 0h20v20H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                        <div className="user-img-combo">
                            <img src="/monday_logo_icon.png" className="company-logo" alt="Company Logo" />
                            <button className="avatar-btn">
                                <div className="avatar-wrapper">
                                    <div className="monday-user-circle">YP</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export function MondaySidebar() {
    const boards = useSelector((state) => state.boardModule.boards)

    const favorites = boards.filter(board => board.isStarred)

    return (
        <div className="sidebar flex">
            <section className="workspace-sidebar sidebar-outer workspace-sidebar-container">
                <section className="workspace-sidebar sidebar-inner">
                    <div className="monday-sidebar-right-btn">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            width="14"
                            height="14"
                            aria-hidden="true"
                            tabIndex="-1"
                            className="icon_b407e05873 GD1dz noFocusStyle_43edc8446a"
                            data-testid="icon"
                        >
                            <path
                                d="M5.46967 10.5303L6 10L5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303ZM7.06066 10L13.5303 3.53033C13.8232 3.23744 13.8232 2.76256 13.5303 2.46967C13.2374 2.17678 12.7626 2.17678 12.4697 2.46967L5.46967 9.46967L6 10L5.46967 10.5303L12.4697 17.5303C12.7626 17.8232 13.2374 17.8232 13.5303 17.5303C13.8232 17.2374 13.8232 16.7626 13.5303 16.4697L7.06066 10Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <nav className="sidebar-nav-container">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link monday-nav-link">
                                    <i className="fa-solid fa-house"></i>
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/my-work" className="nav-link monday-nav-link">
                                    <i className="fa-solid fa-briefcase"></i>
                                    <span>My work</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link monday-nav-link nav-link monday-nav-link-with-arrow">
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        width="24"
                                        height="24"
                                        aria-hidden="true"
                                        className="icon_f74f57d4ab noFocusStyle_fabcf1d9d4"
                                        data-testid="icon"
                                    >
                                        <path
                                            d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <span>More</span> <i className="fa-solid fa-chevron-right arrow-icon"></i>
                                </a>
                            </li>
                        </ul>
                        <div className="nav-section">
                            <div>
                                <a href="#" className="nav-link monday-nav-link nav-link monday-nav-link-with-arrow">
                                    <i className="fa-regular fa-star"></i> <span>Favorites</span>
                                    <i className="fa-solid fa-chevron-down arrow-icon"></i>
                                </a>
                                <ul className="favorites-list">
                                    {favorites.map((favorite) => (
                                        <li key={favorite._id} className="favorite-item">
                                            <NavLink to={`/${favorite._id}`} className="favorite-link">
                                                <i className="fa-solid fa-chart-bar"></i>
                                                <span>{favorite.title}</span>
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="nav-section">
                            <div>
                                <a href="#" className="nav-link monday-nav-link">
                                    <i className="fa-solid fa-th-large"></i> <span>Boards</span>
                                    <svg
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        width="24"
                                        height="24"
                                        aria-hidden="true"
                                        className="dots-icon icon_f74f57d4ab noFocusStyle_fabcf1d9d4"
                                        data-testid="icon"
                                    >
                                        <path
                                            d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <i className="fa-solid fa-search search-icon"></i>
                                </a>
                            </div>
                            <div className="workspace-selector">
                                <div className="workspace-current">
                                    <div className="workspace-letter">{'M'}</div>
                                    <span>{boards[0]?.title || 'Main Board'}</span>
                                    <i className="fa-solid fa-chevron-down padding-right-icon"></i>
                                </div>
                                <button className="add-button" onClick={() => console.log('Add new board')}>
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <ul className="workspace-items">
                                {boards.map((board) => (
                                    <li key={board._id} className="workspace-item">
                                        <NavLink to={`/board/${board._id}`} className="workspace-link">
                                            <i className="fa-solid fa-chart-bar"></i>
                                            <span>{board.title}</span>
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </section>
            </section>
        </div>
    )
}

export function MondayBoardHeader({ board, searchQuery, setSearchQuery, filterText, setFilterText, sortBy, setSortBy}) {
    const dispatch = useDispatch()

    const handleTitleChange = (e) => {
        const newTitle = e.target.innerText
        dispatch(updateBoard({ ...board, title: newTitle }))
    }

    const handleSubtitleChange = (e) => {
        const newSubtitle = e.target.innerText
        dispatch(updateBoard({ ...board, description: newSubtitle }))
    }

    const toggleStar = () => {
        dispatch(updateBoard({ ...board, isStarred: !board.isStarred }))
    }

    return (
        <header className="monday-board-header">
            <section className="monday-board-title flex align-center space-around">
                <div className="board-info flex">
                    <blockquote
                        contentEditable="true"
                        onBlur={handleTitleChange}
                        suppressContentEditableWarning={true}
                        aria-label="Click to edit"
                        data-mui-internal-clone-element="true"
                    >
                        <h1>{board.title}</h1>
                    </blockquote>
                    <div className="info-btn icon" aria-label="Show board description" data-mui-internal-clone-element="true">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"></path>
                        </svg>
                    </div>
                    <div className="star-btn icon" onClick={toggleStar} aria-label="Add to favorites" data-mui-internal-clone-element="true">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            className="star"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: board.isStarred ? 'gold' : 'inherit' }}
                        >
                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                        </svg>
                    </div>
                </div>
                <div className="action-tools flex align-center">
                    <div className="tool-btn flex align-center" onClick={() => console.log('Integrate clicked')} aria-label="Integrate with other tools" data-mui-internal-clone-element="true">
                        <i className="fa-solid-fr fa-plug"></i> <span className="tool-text">Integrate</span>
                    </div>
                    <div className="tool-btn flex align-center" onClick={() => console.log('Automate clicked')} aria-label="Set up automation" data-mui-internal-clone-element="true">
                        <i className="fa-solid fa-bolt"></i> <span className="tool-text">Automate</span>
                    </div>
                    <div className="tool-btn flex align-center" onClick={() => console.log('Chat clicked')} aria-label="Open chat" data-mui-internal-clone-element="true">
                        <i className="fa-regular fa-comments"></i>
                    </div>
                    <div className="monday-user-circle small-circle flex align-center justify-center" aria-label="Active user" data-mui-internal-clone-element="true">
                        <span className="avatar-text">YP</span>
                    </div>
                </div>
                <div className="action-controls flex align-center">
                    <div className="invite-btn flex align-center" onClick={() => console.log('Invite members')} aria-label="Invite members" data-mui-internal-clone-element="true">
                        <div className="invite-text">Invite/1</div> <i className="fa-solid fa-link"></i>
                    </div>
                    <div className="menu-btn flex align-center" onClick={() => console.log('More options')} aria-label="More options" data-mui-internal-clone-element="true">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
                <div className="action-controls flex align-center">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" aria-hidden="true" className="icon_f74f57d4ab noFocusStyle_fabcf1d9d4" data-testid="icon">
                        <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path>
                    </svg>
                </div>
            </section>

            <div className="board-display-btns flex">
                <div className="type-btn" aria-label="Main table" data-mui-internal-clone-element="true">
                    <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path strokeWidth="2" d="M1 22V9.76a2 2 0 01.851-1.636l9.575-6.72a1 1 0 011.149 0l9.574 6.72A2 2 0 0123 9.76V22a1 1 0 01-1 1h-5.333a1 1 0 01-1-1v-5.674a1 1 0 00-1-1H9.333a1 1 0 00-1 1V22a1 1 0 01-1 1H2a1 1 0 01-1-1z"></path>
                    </svg>
                    <span className="wide">Main Table</span> <span className="mobile">Main Table</span>
                </div>
                <div className="type-btn" aria-label="Kanban" data-mui-internal-clone-element="true">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"></path>
                        <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z"></path>
                    </svg>
                    <span className="wide">Kanban</span><span className="mobile">Kanban</span>
                </div>
                <div className="type-btn" aria-label="Kanban" data-mui-internal-clone-element="true">
                    <span className="wide">Kanban</span><span className="mobile">+</span>
                </div>
            </div>
            <div className="board-border"></div>
            <section className="board-filter flex align-center board-bottom-row">
                <div className="board-filter">
                    <div className="add-btn" onClick={() => console.log('Add new task')} aria-label="Add new task" data-mui-internal-clone-element="true">
                        <span className="new-task-btn">New Task</span>
                        <div className="drop-down-btn">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="board-tools flex align-center board">
                        <div className="search-task" aria-label="Search" data-mui-internal-clone-element="true">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <g></g>
                                <path d="M16.604 15.868l-5.173-5.173c0.975-1.137 1.569-2.611 1.569-4.223 0-3.584-2.916-6.5-6.5-6.5-1.736 0-3.369 0.676-4.598 1.903-1.227 1.228-1.903 2.861-1.902 4.597 0 3.584 2.916 6.5 6.5 6.5 1.612 0 3.087-0.594 4.224-1.569l5.173 5.173 0.707-0.708zM6.5 11.972c-3.032 0-5.5-2.467-5.5-5.5-0.001-1.47 0.571-2.851 1.61-3.889 1.038-1.039 2.42-1.611 3.89-1.611 3.032 0 5.5 2.467 5.5 5.5 0 3.032-2.468 5.5-5.5 5.5z"></path>
                            </svg>
                            <input
                                type="text"
                                name="search"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="person-filter" onClick={() => console.log('Select person')} aria-label="Filter by member" data-mui-internal-clone-element="true">
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab filter-item-icon-component noFocusStyle_fabcf1d9d4" data-testid="icon">
                                <path d="M7.51318 5.43037C8.17316 4.77038 9.06829 4.39961 10.0017 4.39961C10.935 4.39961 11.8301 4.77038 12.4901 5.43037C13.1501 6.09035 13.5209 6.98548 13.5209 7.91884C13.5209 8.8522 13.1501 9.74733 12.4901 10.4073C11.8301 11.0673 10.935 11.4381 10.0017 11.4381C9.06829 11.4381 8.17316 11.0673 7.51318 10.4073C6.8532 9.74733 6.48242 8.8522 6.48242 7.91884C6.48242 6.98548 6.8532 6.09035 7.51318 5.43037ZM10.0017 5.89961C9.46612 5.89961 8.95252 6.11235 8.57384 6.49103C8.19516 6.86971 7.98242 7.38331 7.98242 7.91884C7.98242 8.45437 8.19516 8.96797 8.57384 9.34665C8.95252 9.72533 9.46612 9.93807 10.0017 9.93807C10.5372 9.93807 11.0508 9.72533 11.4295 9.34665C11.8081 8.96797 12.0209 8.45437 12.0209 7.91884C12.0209 7.38331 11.8081 6.86971 11.4295 6.49103C11.0508 6.11235 10.5372 5.89961 10.0017 5.89961Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                <path d="M10.0008 2.0498C7.89231 2.0498 5.8702 2.88739 4.37928 4.37831C2.88837 5.86922 2.05078 7.89133 2.05078 9.9998C2.05078 12.1083 2.88837 14.1304 4.37928 15.6213C4.50318 15.7452 4.63075 15.8646 4.76173 15.9794C4.77108 15.9879 4.78069 15.9963 4.79055 16.0045C6.23158 17.255 8.08036 17.9498 10.0008 17.9498C12.1093 17.9498 14.1314 17.1122 15.6223 15.6213C17.1132 14.1304 17.9508 12.1083 17.9508 9.9998C17.9508 7.89133 17.1132 5.86922 15.6223 4.37831C14.1314 2.88739 12.1093 2.0498 10.0008 2.0498ZM6.2925 15.2773C7.37119 16.0352 8.66461 16.4498 10.0008 16.4498C11.3369 16.4498 12.6302 16.0353 13.7088 15.2774C13.3315 14.8156 12.8699 14.4267 12.3466 14.1326C11.6302 13.73 10.8223 13.5186 10.0006 13.5186C9.17886 13.5186 8.37096 13.73 7.6546 14.1326C7.13136 14.4267 6.66982 14.8155 6.2925 15.2773ZM14.8283 14.2774C15.8706 13.1011 16.4508 11.5804 16.4508 9.9998C16.4508 8.28916 15.7712 6.64858 14.5616 5.43897C13.352 4.22936 11.7114 3.5498 10.0008 3.5498C8.29013 3.5498 6.64955 4.22936 5.43994 5.43897C4.23033 6.64858 3.55078 8.28916 3.55078 9.9998C3.55078 11.5803 4.13084 13.1009 5.17307 14.2772C5.66065 13.6931 6.25191 13.2003 6.91971 12.825C7.86047 12.2963 8.92145 12.0186 10.0006 12.0186C11.0797 12.0186 12.1407 12.2963 13.0815 12.825C13.7494 13.2003 14.3407 13.6932 14.8283 14.2774Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                            <span>Person</span>
                        </div>
                        <div className="search-task" aria-label="Filter" data-mui-internal-clone-element="true">
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab filter-item-icon-component noFocusStyle_fabcf1d9d4" data-testid="icon">
                                <path d="M17.8571 2.87669C18.107 3.41157 18.0246 4.04275 17.6457 4.49555L12.4892 10.6589V15.3856C12.4892 16.0185 12.097 16.5852 11.5048 16.8082L9.56669 17.5381C9.09976 17.7139 8.57627 17.6494 8.16598 17.3655C7.75569 17.0816 7.51084 16.6144 7.51084 16.1155V10.6589L2.35425 4.49555C1.97542 4.04275 1.89302 3.41157 2.14291 2.87669C2.39279 2.34182 2.92977 2 3.52013 2H16.4799C17.0702 2 17.6072 2.34182 17.8571 2.87669ZM16.4799 3.52012H3.52013L8.91611 9.96964C8.99036 10.0584 9.03096 10.1698 9.03096 10.2848V16.1155L10.969 15.3856V10.2848C10.969 10.1698 11.0096 10.0584 11.0839 9.96964L16.4799 3.52012Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                            <input
                                type="text"
                                name="filter"
                                placeholder="Filter"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                            />
                        </div>
                        <div className="search-task" aria-label="Sort" data-mui-internal-clone-element="true">
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_f74f57d4ab filter-item-icon-component noFocusStyle_fabcf1d9d4" data-testid="icon">
                                <path d="M7.13869 2.75741C7.34727 2.75741 7.53593 2.84277 7.67174 2.98049L10.0716 5.38342C10.3641 5.67631 10.3641 6.15118 10.0716 6.44408 9.7791 6.73697 9.30483 6.73697 9.0123 6.44408L7.88775 5.3181V17.0578C7.88775 17.472 7.55238 17.8078 7.13869 17.8078 6.725 17.8078 6.38964 17.472 6.38964 17.0578V5.31805L5.26504 6.44408C4.97252 6.73697 4.49824 6.73697 4.20572 6.44408 3.9132 6.15118 3.9132 5.67631 4.20572 5.38342L6.60901 2.97708C6.62359 2.96249 6.63871 2.94855 6.65432 2.9353 6.78492 2.82434 6.954 2.75741 7.13869 2.75741zM14.4434 17.8075C14.652 17.8075 14.8406 17.7222 14.9764 17.5844L17.3763 15.1815C17.6688 14.8886 17.6688 14.4138 17.3763 14.1209 17.0838 13.828 16.6095 13.828 16.317 14.1209L15.1924 15.2468V3.50712C15.1924 3.09291 14.8571 2.75712 14.4434 2.75712 14.0297 2.75712 13.6943 3.09291 13.6943 3.50712V15.2469L12.5697 14.1209C12.2772 13.828 11.8029 13.828 11.5104 14.1209 11.2179 14.4138 11.2179 14.8886 11.5104 15.1815L13.9137 17.5879C13.9283 17.6025 13.9434 17.6164 13.959 17.6296 14.0896 17.7406 14.2587 17.8075 14.4434 17.8075z" fill="currentColor"></path>
                            </svg>
                            <input
                                type="text"
                                name="sort"
                                placeholder="Sort"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            />
                        </div>
                        <div className="search-task" aria-label="Search" data-mui-internal-clone-element="true">
                            <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_a821328549 noFocusStyle_32df5ee696" data-testid="icon">
                                <path d="M6 10.5C6 11.3284 5.32843 12 4.5 12 3.67157 12 3 11.3284 3 10.5 3 9.67157 3.67157 9 4.5 9 5.32843 9 6 9.67157 6 10.5zM11.8333 10.5C11.8333 11.3284 11.1618 12 10.3333 12 9.50492 12 8.83334 11.3284 8.83334 10.5 8.83334 9.67157 9.50492 9 10.3333 9 11.1618 9 11.8333 9.67157 11.8333 10.5zM17.6667 10.5C17.6667 11.3284 16.9951 12 16.1667 12 15.3383 12 14.6667 11.3284 14.6667 10.5 14.6667 9.67157 15.3383 9 16.1667 9 16.9951 9 17.6667 9.67157 17.6667 10.5z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="board-filter">
                    <div className="flex align-center board right-section-bottom-board-header">
                        <div className="right-colors">
                            <div className="color-1"></div>
                            <div className="color-2"></div>
                            <div className="color-3"></div>
                        </div>
                        <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_35c1b9ef14 noFocusStyle_e846aee9b1" data-testid="icon">
                            <path d="M13.6787 2.81141C12.6 2.27571 11.4118 1.99795 10.2076 2.00001C8.82154 1.99824 7.46024 2.36762 6.26487 3.06986C5.06913 3.77232 4.08301 4.78224 3.40884 5.99482C2.73467 7.20739 2.39702 8.57845 2.43092 9.9657C2.46129 11.2085 2.78887 12.4237 3.38348 13.5103L2.13059 16.1439C1.60692 17.2446 2.75507 18.3935 3.8548 17.8692L6.48564 16.6149C7.41302 17.123 8.43558 17.4373 9.49117 17.5368C10.6905 17.6499 11.8996 17.4827 13.0234 17.0484C14.1471 16.614 15.1547 15.9245 15.9667 15.034C16.7788 14.1435 17.3731 13.0764 17.7029 11.9168C18.0326 10.7572 18.0888 9.53685 17.867 8.35185C17.6451 7.16685 17.1514 6.0496 16.4245 5.08814C15.6977 4.12669 14.7578 3.34731 13.6787 2.81141ZM10.2092 3.55355C11.1735 3.55174 12.125 3.77408 12.9887 4.20304C13.8525 4.632 14.6049 5.25587 15.1867 6.02547C15.7684 6.79508 16.1637 7.68939 16.3413 8.63794C16.5188 9.58648 16.4739 10.5633 16.2099 11.4915C15.946 12.4197 15.4702 13.2739 14.8202 13.9867C14.1702 14.6995 13.3637 15.2515 12.4642 15.5992C11.5647 15.9468 10.5968 16.0807 9.63678 15.9901C8.67679 15.8996 7.75091 15.5872 6.93213 15.0775C6.70752 14.9377 6.42723 14.922 6.18843 15.0358L3.84556 16.1528L4.96133 13.8075C5.07505 13.5685 5.05929 13.2879 4.91952 13.0631C4.33329 12.1204 4.00983 11.0378 3.9827 9.92771C3.95557 8.81763 4.22576 7.72051 4.76524 6.7502C5.30471 5.77989 6.09381 4.97175 7.05064 4.40964C8.00747 3.84754 9.09717 3.55195 10.2067 3.55355L10.2092 3.55355ZM8.52778 6.25C7.73406 6.25 7.0726 6.56336 6.62326 7.1071C6.18852 7.63317 6 8.31485 6 8.99682C6 9.81586 6.37377 10.5433 6.94786 11.0391L9.50267 13.4541C9.70771 13.648 9.97723 13.75 10.25 13.75C10.5228 13.75 10.7923 13.648 10.9974 13.4541L13.5527 11.0386C14.1265 10.5429 14.5 9.81561 14.5 8.99682C14.5 8.34659 14.3546 7.66909 13.9543 7.13505C13.5306 6.56971 12.8834 6.25 12.0833 6.25C11.5338 6.25 10.9995 6.47399 10.6238 6.67457C10.4982 6.7416 10.3783 6.81261 10.268 6.8833C10.1731 6.81772 10.0696 6.75121 9.95944 6.68734C9.60122 6.47969 9.08764 6.25 8.52778 6.25ZM7.5 8.99682C7.5 8.57599 7.61705 8.25925 7.77954 8.06262C7.92743 7.88365 8.15486 7.75 8.52778 7.75C8.70082 7.75 8.9408 7.83066 9.20716 7.98506C9.46185 8.1327 9.66288 8.30225 9.73432 8.37037C10.0223 8.64493 10.4745 8.64687 10.7648 8.37481C10.8184 8.32449 11.0375 8.15407 11.3302 7.99783C11.6327 7.83635 11.9037 7.75 12.0833 7.75C12.4499 7.75 12.6361 7.87729 12.754 8.03467C12.8954 8.22333 13 8.54424 13 8.99682C13 9.34907 12.8396 9.67594 12.5645 9.91005C12.5546 9.9185 12.5448 9.92721 12.5354 9.93617L10.25 12.0965L7.96509 9.93656C7.95556 9.92755 7.94579 9.91879 7.9358 9.91029C7.66055 9.67617 7.5 9.34919 7.5 8.99682Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                        <div className="rightmost-circle">
                            <i className="fas fa-chevron-up"></i>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    )
}


export function MondayBoardList({boards, loggedUser}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const starredBoards = boards.filter((board) => board.isStarred)

    function onToggleStar(board, ev) {
        ev.stopPropagation()
        const updatedBoard = {...board, isStarred: !board.isStarred}
        dispatch(updateBoard(updatedBoard))
    }

    function onCreateBoard() {
        setIsModalOpen(true); // Placeholder for modal
    }

    function FilledStarSVG() {
        return (<svg viewBox="0 0 20 20" fill="#FFD700" width="20" height="20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>)
    }

    function OutlineStarSVG() {
        return (<svg viewBox="0 0 20 20" fill="none" stroke="#FFFFFF" width="20" height="20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>)
    }

    return (<div className="monday-board-list flex">

        <div className="monday-boardlist-header">
            <div className="header-left">
                <div className="header-greeting">Good night, {loggedUser?.fullname}</div>
                <div className="header-subtitle">Quickly access your recent boards, Inbox and workspaces</div>
            </div>
            <div className="header-right">
                <button className="feedback-button">
                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20" aria-hidden="true" className="icon_35c1b9ef14 noFocusStyle_e846aee9b1" data-testid="icon">
                        <path d="M13.6787 2.81141C12.6 2.27571 11.4118 1.99795 10.2076 2.00001C8.82154 1.99824 7.46024 2.36762 6.26487 3.06986C5.06913 3.77232 4.08301 4.78224 3.40884 5.99482C2.73467 7.20739 2.39702 8.57845 2.43092 9.9657C2.46129 11.2085 2.78887 12.4237 3.38348 13.5103L2.13059 16.1439C1.60692 17.2446 2.75507 18.3935 3.8548 17.8692L6.48564 16.6149C7.41302 17.123 8.43558 17.4373 9.49117 17.5368C10.6905 17.6499 11.8996 17.4827 13.0234 17.0484C14.1471 16.614 15.1547 15.9245 15.9667 15.034C16.7788 14.1435 17.3731 13.0764 17.7029 11.9168C18.0326 10.7572 18.0888 9.53685 17.867 8.35185C17.6451 7.16685 17.1514 6.0496 16.4245 5.08814C15.6977 4.12669 14.7578 3.34731 13.6787 2.81141ZM10.2092 3.55355C11.1735 3.55174 12.125 3.77408 12.9887 4.20304C13.8525 4.632 14.6049 5.25587 15.1867 6.02547C15.7684 6.79508 16.1637 7.68939 16.3413 8.63794C16.5188 9.58648 16.4739 10.5633 16.2099 11.4915C15.946 12.4197 15.4702 13.2739 14.8202 13.9867C14.1702 14.6995 13.3637 15.2515 12.4642 15.5992C11.5647 15.9468 10.5968 16.0807 9.63678 15.9901C8.67679 15.8996 7.75091 15.5872 6.93213 15.0775C6.70752 14.9377 6.42723 14.922 6.18843 15.0358L3.84556 16.1528L4.96133 13.8075C5.07505 13.5685 5.05929 13.2879 4.91952 13.0631C4.33329 12.1204 4.00983 11.0378 3.9827 9.92771C3.95557 8.81763 4.22576 7.72051 4.76524 6.7502C5.30471 5.77989 6.09381 4.97175 7.05064 4.40964C8.00747 3.84754 9.09717 3.55195 10.2067 3.55355L10.2092 3.55355ZM8.52778 6.25C7.73406 6.25 7.0726 6.56336 6.62326 7.1071C6.18852 7.63317 6 8.31485 6 8.99682C6 9.81586 6.37377 10.5433 6.94786 11.0391L9.50267 13.4541C9.70771 13.648 9.97723 13.75 10.25 13.75C10.5228 13.75 10.7923 13.648 10.9974 13.4541L13.5527 11.0386C14.1265 10.5429 14.5 9.81561 14.5 8.99682C14.5 8.34659 14.3546 7.66909 13.9543 7.13505C13.5306 6.56971 12.8834 6.25 12.0833 6.25C11.5338 6.25 10.9995 6.47399 10.6238 6.67457C10.4982 6.7416 10.3783 6.81261 10.268 6.8833C10.1731 6.81772 10.0696 6.75121 9.95944 6.68734C9.60122 6.47969 9.08764 6.25 8.52778 6.25ZM7.5 8.99682C7.5 8.57599 7.61705 8.25925 7.77954 8.06262C7.92743 7.88365 8.15486 7.75 8.52778 7.75C8.70082 7.75 8.9408 7.83066 9.20716 7.98506C9.46185 8.1327 9.66288 8.30225 9.73432 8.37037C10.0223 8.64493 10.4745 8.64687 10.7648 8.37481C10.8184 8.32449 11.0375 8.15407 11.3302 7.99783C11.6327 7.83635 11.9037 7.75 12.0833 7.75C12.4499 7.75 12.6361 7.87729 12.754 8.03467C12.8954 8.22333 13 8.54424 13 8.99682C13 9.34907 12.8396 9.67594 12.5645 9.91005C12.5546 9.9185 12.5448 9.92721 12.5354 9.93617L10.25 12.0965L7.96509 9.93656C7.95556 9.92755 7.94579 9.91879 7.9358 9.91029C7.66055 9.67617 7.5 9.34919 7.5 8.99682Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                    Give feedback
                </button>
                <button className="quick-search-button">
                    <i className="fa-regular fa-bolt"></i> Quick Search
                </button>
            </div>
        </div>

        {starredBoards.length > 0 && (<section className="monday-starred-boards">
            <h3 className="monday-section-title">
                <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" aria-hidden="true" class="icon_f74f57d4ab collapsible-icon" data-testid="icon"><path d="M9.442 12.762a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.158.77.77 0 0 0-1.116 0L10 11.027 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.158l4.21 4.363Z"></path></svg>
                Starred Boards
            </h3>
            <div className="flex flex-wrap">
                {starredBoards.map((board) => <>


                    <div className="monday-board-preview" onClick={() => navigate(`/monday/${board._id}`)}>
                        <div className="board-preview-img">
                            <img src={board.style?.backgroundImage}/>
                        </div>

                        <div className="flex-space-between-align">
                            <div className="monday-left-titles">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22" aria-hidden="true" className="icon_f74f57d4ab" data-testid="icon"><path d="M4 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V16C16.5 16.2761 16.2761 16.5 16 16.5H4C3.72386 16.5 3.5 16.2761 3.5 16V4C3.5 3.72386 3.72386 3.5 4 3.5ZM2 4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4ZM5.5 14.25C5.5 14.6642 5.83579 15 6.25 15C6.66421 15 7 14.6642 7 14.25V10.75C7 10.3358 6.66421 10 6.25 10C5.83579 10 5.5 10.3358 5.5 10.75L5.5 14.25ZM10.25 15C9.83579 15 9.5 14.6642 9.5 14.25L9.5 7.75C9.5 7.33579 9.83579 7 10.25 7C10.6642 7 11 7.33579 11 7.75V14.25C11 14.6642 10.6642 15 10.25 15ZM13.5 14.25C13.5 14.6642 13.8358 15 14.25 15C14.6642 15 15 14.6642 15 14.25V5.75C15 5.33579 14.6642 5 14.25 5C13.8358 5 13.5 5.33579 13.5 5.75V14.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                <div className="monday-board-title">{board.title}</div>
                            </div>

                            <div className="monday-star-btn-right" onClick={(ev) => {
                                ev.stopPropagation();  // You forgot this
                                onToggleStar(board, ev)
                            }}>
                                {board.isStarred ? <FilledStarSVG/> : <OutlineStarSVG/>}
                            </div>
                        </div>
                        <div className="monday-bottom-star flex-space-between-align">
                            <svg class="product-svg-icon" width="14" height="14" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1150_158978)"><path d="M20.3812 4.62863C20.3812 2.47439 18.6357 0.728027 16.4826 0.728027C14.3294 0.728027 12.584 2.47439 12.584 4.62863V8.91568C12.584 11.0699 14.3294 12.8163 16.4826 12.8163C18.6357 12.8163 20.3812 11.0699 20.3812 8.91568V4.62863Z" fill="url(#paint0_linear_1150_158978)"></path><path d="M5.11916 10.0994C3.07035 9.43366 0.870087 10.554 0.204732 12.6018C-0.460623 14.6495 0.660888 16.8492 2.7097 17.5149L6.78692 18.8397C8.83573 19.5054 11.036 18.385 11.7013 16.3373C12.3667 14.2895 11.2452 12.0898 9.19638 11.4241L5.11916 10.0994Z" fill="url(#paint1_linear_1150_158978)"></path><path d="M5.59794 26.3042C4.33171 28.0471 4.71733 30.4859 6.45925 31.7514C8.20117 33.017 10.6398 32.6301 11.906 30.8873L14.4259 27.419C15.6921 25.6762 15.3065 23.2374 13.5646 21.9718C11.8226 20.7062 9.38404 21.0931 8.1178 22.8359L5.59794 26.3042Z" fill="url(#paint2_linear_1150_158978)"></path>
                                    <path d="M21.1629 30.8429C22.4291 32.5858 24.8677 32.9726 26.6096 31.7071C28.3516 30.4415 28.7372 28.0027 27.471 26.2599L24.9511 22.7916C23.6849 21.0488 21.2463 20.6619 19.5043 21.9275C17.7624 23.193 17.3768 25.6318 18.643 27.3747L21.1629 30.8429Z" fill="url(#paint3_linear_1150_158978)"></path><path d="M16.5188 21.7056C18.6553 21.7056 20.3872 19.9736 20.3872 17.8372C20.3872 15.7007 18.6553 13.9688 16.5188 13.9688C14.3823 13.9688 12.6504 15.7007 12.6504 17.8372C12.6504 19.9736 14.3823 21.7056 16.5188 21.7056Z" fill="#6161FF"></path><path d="M3.89332 17.6821C6.04138 17.6821 7.78273 15.9408 7.78273 13.7927C7.78273 11.6447 6.04138 9.90332 3.89332 9.90332C1.74526 9.90332 0.00390625 11.6447 0.00390625 13.7927C0.00390625 15.9408 1.74526 17.6821 3.89332 17.6821Z" fill="#6161FF"></path>
                                    <path d="M16.4803 8.49289C18.6322 8.49289 20.3767 6.74844 20.3767 4.59654C20.3767 2.44465 18.6322 0.700195 16.4803 0.700195C14.3284 0.700195 12.584 2.44465 12.584 4.59654C12.584 6.74844 14.3284 8.49289 16.4803 8.49289Z" fill="#6161FF"></path><path d="M8.75854 32.5044C10.9141 32.5044 12.6616 30.7569 12.6616 28.6013C12.6616 26.4457 10.9141 24.6982 8.75854 24.6982C6.60293 24.6982 4.85547 26.4457 4.85547 28.6013C4.85547 30.7569 6.60293 32.5044 8.75854 32.5044Z" fill="#6161FF"></path><path d="M24.3244 32.4656C26.4753 32.4656 28.2191 30.7219 28.2191 28.571C28.2191 26.42 26.4753 24.6763 24.3244 24.6763C22.1734 24.6763 20.4297 26.42 20.4297 28.571C20.4297 30.7219 22.1734 32.4656 24.3244 32.4656Z" fill="#6161FF"></path>
                                    <path d="M27.8808 10.0984C29.9296 9.43268 32.1299 10.5531 32.7953 12.6008C33.4606 14.6486 32.3391 16.8482 30.2903 17.5139L26.2131 18.8387C24.1643 19.5044 21.964 18.384 21.2987 16.3363C20.6333 14.2885 21.7548 12.0888 23.8036 11.4231L27.8808 10.0984Z" fill="url(#paint4_linear_1150_158978)"></path><path d="M29.1028 17.6807C26.9547 17.6807 25.2134 15.9393 25.2134 13.7913C25.2134 11.6432 26.9547 9.90186 29.1028 9.90186C31.2508 9.90186 32.9922 11.6432 32.9922 13.7913C32.9922 15.9393 31.2508 17.6807 29.1028 17.6807Z" fill="#6161FF"></path></g>
                                <defs>
                                    <linearGradient id="paint0_linear_1150_158978" x1="16.4571" y1="-6.76339" x2="16.5428" y2="13.5953" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1150_158978" x1="-6.92791" y1="10.3111" x2="12.4608" y2="16.5207" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1150_158978" x1="2.07655" y1="37.8271" x2="13.9737" y2="21.3062" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_1150_158978" x1="31.0336" y1="37.7528" x2="18.9977" y2="21.3327" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_1150_158978" x1="39.9279" y1="10.3101" x2="20.5392" y2="16.5197" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            Main Workspace
                        </div>

                    </div>


                </>)}
            </div>
        </section>)}
        <section className="monday-all-boards">
            <h3 className="monday-section-title">
                <svg viewBox="0 0 20 20" fill="currentColor" width="24" height="24" aria-hidden="true" class="icon_f74f57d4ab collapsible-icon" data-testid="icon"><path d="M9.442 12.762a.77.77 0 0 0 1.116 0l4.21-4.363a.84.84 0 0 0 0-1.158.77.77 0 0 0-1.116 0L10 11.027 6.348 7.24a.77.77 0 0 0-1.117 0 .84.84 0 0 0 0 1.158l4.21 4.363Z"></path></svg>
                All Boards
            </h3>
            <div className="flex flex-wrap">
                {boards.map((board) =>

                    <div className="monday-board-preview" onClick={() => navigate(`/monday/${board._id}`)}>
                        <div className="board-preview-img">
                            <img src={board.style?.backgroundImage}/>
                        </div>

                        <div className="flex-space-between-align">
                            <div className="monday-left-titles">
                                <svg viewBox="0 0 20 20" fill="currentColor" width="22" height="22" aria-hidden="true" className="icon_f74f57d4ab" data-testid="icon"><path d="M4 3.5H16C16.2761 3.5 16.5 3.72386 16.5 4V16C16.5 16.2761 16.2761 16.5 16 16.5H4C3.72386 16.5 3.5 16.2761 3.5 16V4C3.5 3.72386 3.72386 3.5 4 3.5ZM2 4C2 2.89543 2.89543 2 4 2H16C17.1046 2 18 2.89543 18 4V16C18 17.1046 17.1046 18 16 18H4C2.89543 18 2 17.1046 2 16V4ZM5.5 14.25C5.5 14.6642 5.83579 15 6.25 15C6.66421 15 7 14.6642 7 14.25V10.75C7 10.3358 6.66421 10 6.25 10C5.83579 10 5.5 10.3358 5.5 10.75L5.5 14.25ZM10.25 15C9.83579 15 9.5 14.6642 9.5 14.25L9.5 7.75C9.5 7.33579 9.83579 7 10.25 7C10.6642 7 11 7.33579 11 7.75V14.25C11 14.6642 10.6642 15 10.25 15ZM13.5 14.25C13.5 14.6642 13.8358 15 14.25 15C14.6642 15 15 14.6642 15 14.25V5.75C15 5.33579 14.6642 5 14.25 5C13.8358 5 13.5 5.33579 13.5 5.75V14.25Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                <div className="monday-board-title">{board.title}</div>
                            </div>

                            <div className="monday-star-btn-right" onClick={(ev) => {
                                ev.stopPropagation()
                                onToggleStar(board, ev)
                            }}>
                                {board.isStarred ? <FilledStarSVG/> : <OutlineStarSVG/>}
                            </div>
                        </div>
                        <div className="monday-bottom-star flex-space-between-align">
                            <svg className="product-svg-icon" width="14" height="14" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1150_158978)"><path d="M20.3812 4.62863C20.3812 2.47439 18.6357 0.728027 16.4826 0.728027C14.3294 0.728027 12.584 2.47439 12.584 4.62863V8.91568C12.584 11.0699 14.3294 12.8163 16.4826 12.8163C18.6357 12.8163 20.3812 11.0699 20.3812 8.91568V4.62863Z" fill="url(#paint0_linear_1150_158978)"></path><path d="M5.11916 10.0994C3.07035 9.43366 0.870087 10.554 0.204732 12.6018C-0.460623 14.6495 0.660888 16.8492 2.7097 17.5149L6.78692 18.8397C8.83573 19.5054 11.036 18.385 11.7013 16.3373C12.3667 14.2895 11.2452 12.0898 9.19638 11.4241L5.11916 10.0994Z" fill="url(#paint1_linear_1150_158978)"></path><path d="M5.59794 26.3042C4.33171 28.0471 4.71733 30.4859 6.45925 31.7514C8.20117 33.017 10.6398 32.6301 11.906 30.8873L14.4259 27.419C15.6921 25.6762 15.3065 23.2374 13.5646 21.9718C11.8226 20.7062 9.38404 21.0931 8.1178 22.8359L5.59794 26.3042Z" fill="url(#paint2_linear_1150_158978)"></path>
                                    <path d="M21.1629 30.8429C22.4291 32.5858 24.8677 32.9726 26.6096 31.7071C28.3516 30.4415 28.7372 28.0027 27.471 26.2599L24.9511 22.7916C23.6849 21.0488 21.2463 20.6619 19.5043 21.9275C17.7624 23.193 17.3768 25.6318 18.643 27.3747L21.1629 30.8429Z" fill="url(#paint3_linear_1150_158978)"></path><path d="M16.5188 21.7056C18.6553 21.7056 20.3872 19.9736 20.3872 17.8372C20.3872 15.7007 18.6553 13.9688 16.5188 13.9688C14.3823 13.9688 12.6504 15.7007 12.6504 17.8372C12.6504 19.9736 14.3823 21.7056 16.5188 21.7056Z" fill="#6161FF"></path><path d="M3.89332 17.6821C6.04138 17.6821 7.78273 15.9408 7.78273 13.7927C7.78273 11.6447 6.04138 9.90332 3.89332 9.90332C1.74526 9.90332 0.00390625 11.6447 0.00390625 13.7927C0.00390625 15.9408 1.74526 17.6821 3.89332 17.6821Z" fill="#6161FF"></path>
                                    <path d="M16.4803 8.49289C18.6322 8.49289 20.3767 6.74844 20.3767 4.59654C20.3767 2.44465 18.6322 0.700195 16.4803 0.700195C14.3284 0.700195 12.584 2.44465 12.584 4.59654C12.584 6.74844 14.3284 8.49289 16.4803 8.49289Z" fill="#6161FF"></path><path d="M8.75854 32.5044C10.9141 32.5044 12.6616 30.7569 12.6616 28.6013C12.6616 26.4457 10.9141 24.6982 8.75854 24.6982C6.60293 24.6982 4.85547 26.4457 4.85547 28.6013C4.85547 30.7569 6.60293 32.5044 8.75854 32.5044Z" fill="#6161FF"></path><path d="M24.3244 32.4656C26.4753 32.4656 28.2191 30.7219 28.2191 28.571C28.2191 26.42 26.4753 24.6763 24.3244 24.6763C22.1734 24.6763 20.4297 26.42 20.4297 28.571C20.4297 30.7219 22.1734 32.4656 24.3244 32.4656Z" fill="#6161FF"></path>
                                    <path d="M27.8808 10.0984C29.9296 9.43268 32.1299 10.5531 32.7953 12.6008C33.4606 14.6486 32.3391 16.8482 30.2903 17.5139L26.2131 18.8387C24.1643 19.5044 21.964 18.384 21.2987 16.3363C20.6333 14.2885 21.7548 12.0888 23.8036 11.4231L27.8808 10.0984Z" fill="url(#paint4_linear_1150_158978)"></path><path d="M29.1028 17.6807C26.9547 17.6807 25.2134 15.9393 25.2134 13.7913C25.2134 11.6432 26.9547 9.90186 29.1028 9.90186C31.2508 9.90186 32.9922 11.6432 32.9922 13.7913C32.9922 15.9393 31.2508 17.6807 29.1028 17.6807Z" fill="#6161FF"></path></g>
                                <defs>
                                    <linearGradient id="paint0_linear_1150_158978" x1="16.4571" y1="-6.76339" x2="16.5428" y2="13.5953" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1150_158978" x1="-6.92791" y1="10.3111" x2="12.4608" y2="16.5207" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1150_158978" x1="2.07655" y1="37.8271" x2="13.9737" y2="21.3062" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_1150_158978" x1="31.0336" y1="37.7528" x2="18.9977" y2="21.3327" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_1150_158978" x1="39.9279" y1="10.3101" x2="20.5392" y2="16.5197" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.411458" stop-color="#6C6CFF" stop-opacity="0.9"></stop>
                                        <stop offset="1" stop-color="#6C6CFF" stop-opacity="0.2"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                            Main Workspace
                        </div>

                    </div>)}
                <div className="monday-create-board-btn flex align-center justify-center" onClick={onCreateBoard}>
                    <span>Create New Board</span>
                </div>
            </div>
        </section>
        {isModalOpen && (<div className="modal">
            <h2>Create New Board</h2>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>)}
    </div>)
}


export function MondayBoardIndex() {


    const popupRef = useRef(null)
    const [sortBy, setSortBy] = useState('')
    const [filterText, setFilterText] = useState('')
    const [taskToEdit, setTaskToEdit] = useState(null)
    const [taskToShow, setTaskToShow] = useState(null)
    const [searchQuery, setSearchQuery] = useState('')
    const boards = useSelector(state => state.boardModule.boards)

    const loggedUser = useSelector(state => state.userModule.user)

    const workspaceBoard = {
        'title': 'Workspace', 'isStarred': true,
    }

    let userFirstName = 'guest'
    try {
        userFirstName = getFirstName(loggedUser.fullname)
    } catch {

    }

    useEffect(() => {
        loadBoards()
    }, [])

    console.log(boards)

    if (!(boards)) return (<div className="trello-loader">
        <img src="trello-loader.svg" alt=""/>
    </div>)

    return (<div className="monday-page">

        <TopHeader/>
        <section className="board-details flex">
            <MondaySidebar/>
            <main className="board-main">

                {/*<MondayBoardHeader board={workspaceBoard} searchQuery={searchQuery} setSearchQuery={setSearchQuery} filterText={filterText} setFilterText={setFilterText} sortBy={sortBy} setSortBy={setSortBy}/>*/}

                <MondayBoardList boards={boards} loggedUser={loggedUser}/>

            </main>
        </section>
    </div>)
}
