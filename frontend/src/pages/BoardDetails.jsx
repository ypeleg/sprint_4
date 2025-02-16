

import {useParams} from "react-router"
import {useSelector} from "react-redux"
import {SideBar} from "../cmps/SideBar"
import {useNavigate} from "react-router"
import {AddGroup} from "../cmps/AddGroup"
import {AppHeader} from "../cmps/AppHeader.jsx"
import {BoardHeader} from "../cmps/BoardHeader.jsx"
import React, {useRef, useEffect, useState} from "react"
import { reorderWithEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge"
import {loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard, store} from "../store/store.js"



// data changes:
// badges: give the task "all the possible options for a badge"
// change memberIds to members
// bring the task "the current list"
// bring the task "the current group"


import GoogleMapReact from 'google-map-react'
import {TaskList} from "../cmps/TaskList.jsx"
import { GroupHeader } from "../cmps/GroupHeader.jsx"
import {random, makeId} from "../services/util.service.js"
import { GroupList } from "../cmps/GroupList.jsx"

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

const AnyReactComponent = ({text}) => <div style={{fontSize: '22px'}}>{text}</div>


export function TaskModal({taskToShow, onClose, popupRef, onSaveTaskOuter}) {
    // const { board, group, taskList, ...cleanTask } = taskToShow

    console.log('task', taskToShow)
    // const [coverUrl, setCoverUrl] = useState(taskToShow.style.backgroundImage || null)

    const [isDone, setIsDone] = useState(taskToShow.status === 'done')
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
    const dateInputRef = useRef(null)
    const activityInputRef = useRef(null)

    const [showLabels, setShowLabels] = useState(true)
    const [showMembers, setShowMembers] = useState(true)
    const [showCustomFields, setShowCustomFields] = useState(true)
    const [showDate, setShowDate] = useState(true)
    const [showMaps, setShowMaps] = useState(true)
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
    const [showPickerCover, setShowPickerCover] = useState(false)

    const [showFieldsEditor, setShowFieldsEditor] = useState(false)

    const [pickerTop, setPickerTop] = useState('0px')
    const [pickerLeft, setPickerLeft] = useState('0px')

    const coverFileInputRef = useRef(null)


    function onCoverFileSelected(ev) {
        const file = ev.target.files?.[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (event) => {
            const dataUrl = event.target.result
            setCoverColor('')
            setCoverImage(dataUrl)
        }
        reader.readAsDataURL(file)
    }


    // custom fields
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

    // members
    function dropDuplicateMembers(cardMembers, boardMembers) {
        return boardMembers.reduce((acc, member) => {
            if (!cardMembers.some(m => m._id === member._id)) {
                acc.push(member)
            }
            return acc
        }, [])
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


    // labels
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
            const isAlreadyAssigned = prev.some(l => l.color === label.color)
            if (isAlreadyAssigned) {
                return prev.filter(l => l.color !== label.color)
            } else {
                return [...prev, label]
            }
        })
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



    // move board
    const boards = useSelector((state) => state.boardModule.boards)
    const currentBoard = taskToShow.board
    const currentGroup = taskToShow.group
    const [selectedBoardId, setSelectedBoardId] = useState(currentBoard?._id || '')
    const [selectedGroupId, setSelectedGroupId] = useState(currentGroup?.id || '')
    const [selectedPosition, setSelectedPosition] = useState(1)

    function getSelectedBoard() {
        return (boards.find((b) => b._id === selectedBoardId))
    }

    function getSelectedGroup() {
        const board = getSelectedBoard()
        if (!board) return null
        return board.groups.find((g) => g.id === selectedGroupId)
    }

    function cleanBoard(board) {
        const boardCopy = { ...board }
        boardCopy.groups = board.groups.map(group => {
            const groupCopy = { ...group }
            groupCopy.tasks = group.tasks.map(task => {
                const { board, group, ...cleanTask } = task
                return cleanTask
            })
            return groupCopy
        })
        return boardCopy
    }

    async function onMoveCard(ev) {
        const targetBoard = getSelectedBoard()
        const targetGroup = getSelectedGroup()
        if (!targetBoard || !targetGroup) return

        if (targetBoard._id === currentBoard._id) {
            const boardCopy = JSON.parse(JSON.stringify(currentBoard))
            const oldGroupIdx = boardCopy.groups.findIndex(g => g.id === currentGroup.id)
            if (oldGroupIdx >= 0) {
                const taskIdx = boardCopy.groups[oldGroupIdx].tasks.findIndex(
                    t => t.id === taskToShow.id
                )
                if (taskIdx >= 0) {
                    boardCopy.groups[oldGroupIdx].tasks.splice(taskIdx, 1)
                }
            }
            const newGroupIdx = boardCopy.groups.findIndex(g => g.id === targetGroup.id)
            if (newGroupIdx < 0) return
            const { board, group, taskList, ...cleanTask } = taskToShow
            const tasksArray = boardCopy.groups[newGroupIdx].tasks
            const pos = Math.min(selectedPosition - 1, tasksArray.length)
            tasksArray.splice(pos, 0, cleanTask)
            const cleaned = cleanBoard(boardCopy)
            await updateBoard(cleaned)
            hidePicker(ev)
            return
        }
        const boardCopyOld = JSON.parse(JSON.stringify(currentBoard))
        const oldGroupIdx = boardCopyOld.groups.findIndex(g => g.id === currentGroup.id)
        if (oldGroupIdx >= 0) {
            const taskIdx = boardCopyOld.groups[oldGroupIdx].tasks.findIndex(
                t => t.id === taskToShow.id
            )
            if (taskIdx >= 0) {
                boardCopyOld.groups[oldGroupIdx].tasks.splice(taskIdx, 1)
            }
        }
        const boardCopyNew = JSON.parse(JSON.stringify(targetBoard))
        const newGroupIdx = boardCopyNew.groups.findIndex(g => g.id === targetGroup.id)
        if (newGroupIdx < 0) return
        const { board, group, taskList, ...cleanTask } = taskToShow
        const tasksArr = boardCopyNew.groups[newGroupIdx].tasks
        const pos = Math.min(selectedPosition - 1, tasksArr.length)
        tasksArr.splice(pos, 0, cleanTask)
        const cleanedOld = cleanBoard(boardCopyOld)
        const cleanedNew = cleanBoard(boardCopyNew)
        await updateBoard(cleanedOld)
        await updateBoard(cleanedNew)
        hidePicker(ev)
    }

    // dates
    const [calendarMonth, setCalendarMonth] = useState(new Date())
    const [isStartDateEnabled, setIsStartDateEnabled] = useState(false)
    const [isDueDateEnabled, setIsDueDateEnabled] = useState(!!taskToShow.dueDate)
    const [startDate, setStartDate] = useState(taskToShow.startDate || null)
    const [dueDate, setDueDate] = useState(new Date(taskToShow.dueDate) || null)
    const [dueTime, setDueTime] = useState('8:43 PM')
    const [dueDateReminder, setDueDateReminder] = useState('1 Day before')

    function prevMonth() {
        setCalendarMonth(prev => {
            const newMonth = new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
            return newMonth
        })
    }

    function nextMonth() {
        setCalendarMonth(prev => {
            const newMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
            return newMonth
        })
    }

    function getCalendarDays(currentMonth) {
        const startOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1)
        const startDay = startOfMonth.getDay()
        const endOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0)
        const daysInMonth = endOfMonth.getDate()
        const days = []
        for (let i = 0; i < startDay; i++) {
            const dayNum = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate() - (startDay - 1 - i)
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, dayNum),
                isCurrentMonth: false,
            })
        }
        for (let d = 1; d <= daysInMonth; d++) {
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d),
                isCurrentMonth: true,
            })
        }
        const totalCellsSoFar = days.length
        const remainingCells = 42 - totalCellsSoFar
        for (let r = 1; r <= remainingCells; r++) {
            days.push({
                date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, r),
                isCurrentMonth: false,
            })
        }

        return days
    }

    function onDayClick(clickedDateObj) {
        if (isDueDateEnabled) {
            setDueDate(clickedDateObj)
        } else if (isStartDateEnabled) {
            setStartDate(clickedDateObj)
        }
    }

    function parseTime(timeStr) {
        const [time, period] = timeStr.split(' ')
        const [hours, mins] = time.split(':')
        return [hours, mins, period]
    }
    function onSaveDates() {
        const finalStart = isStartDateEnabled && startDate ? startDate : null
        let finalDue = isDueDateEnabled && dueDate ? dueDate : null
        if (finalDue && dueTime) {
            const [hours, mins] = parseTime(dueTime)
            finalDue.setHours(hours, mins, 0, 0)
        }
        const updatedTask = {
            ...taskToShow,
            startDate: finalStart,
            dueDate: finalDue,
            dueDateReminder,
        }

        setDate(finalDue)
        setShowPickerDate(false)

    }

    function onRemoveDates() {
        setIsStartDateEnabled(false)
        setStartDate(null)
        setIsDueDateEnabled(false)
        setDueDate(null)
        setDueTime('')
        setDueDateReminder('None')
        const updatedTask = {
            ...taskToShow,
            startDate: null,
            dueDate: null,
            dueDateReminder: null,
        }
        // updateBoard(...)
    }
    function formatMMDDYYYY(dateObj) {
        if (!dateObj) return ''
        const mm = (dateObj.getMonth() + 1).toString().padStart(2, '0')
        const dd = dateObj.getDate().toString().padStart(2, '0')
        const yyyy = dateObj.getFullYear()
        return `${mm}/${dd}/${yyyy}`
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
        setShowPickerCover(false)
        setShowPickerAttachments(false)
        setShowPickerChecklists(false)
        setShowPickerMembers(false)
        setShowPickerMoveCard(false)
        setShowPickerCopyCard(false)
        setShowPickerMirrorCard(false)
    }

    function movePickerTo(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        console.log('ev', ev)
        const parent = popupRef.current
        const parentRect = parent.getBoundingClientRect()
        const targetRect = ev.target.getBoundingClientRect()
        const topOffset = (targetRect.top - parentRect.top) + parent.scrollTop + 30
        const leftOffset = (targetRect.left - parentRect.left) + parent.scrollLeft - 200
        setPickerTop(`${topOffset}px`)
        setPickerLeft(`${leftOffset}px`)
        setShowPicker(true)
    }

    function onDateChange(e) { setDate(e.target.value) }
    function onDateClick() { dateInputRef.current?.showPicker() }

    async function saveTask() {
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
            status: isDone ? 'done' : 'in-progress',
            isWatching,
            members,
            attachments,
            checklists,
            activity: activityLog,
            badges,
            labels: cardLabels,
            location,
            startDate: isStartDateEnabled ? startDate : null,
            dueDate: isDueDateEnabled ? date : null,
            dueDateReminder: isDueDateEnabled ? dueDateReminder : null,
            style: {
                ...taskToShow.style,
                backgroundColor: coverColor || '',
                backgroundImage: coverImage || '',
                coverSize: coverSize || 'small',
            },
            group: {
                ...taskToShow.group,
                title: listName
            }
        }
        const { group, board, taskList, ...cleanTask } = updatedTask
        boardCopy.groups[groupIdx].tasks[taskIdx] = cleanTask
        updateBoard(boardCopy).then(onSaveTaskOuter(cleanTask))
        // try {
        //     await updateBoard(boardCopy)
        //     onClose()
        // } catch (err) {
        //     console.error('Failed to save task:', err)
        // }
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
    const [attachmentText, setAttachmentText] = useState("")
    const fileInputRef = useRef(null)

    function onFileSelected(ev) {
        const file = ev.target.files?.[0]
        if (file) setAttachmentFile(file)
    }

    function onInsertAttachment(ev) {
        if (attachmentFile) {
            const newAttachment = {
                id: Date.now(),
                path: attachmentFile.name,
                date: Date.now(),
                text: attachmentText || attachmentFile.name,
                type: 'file'
            }
            setAttachments((prev) => [...prev, newAttachment])
            hidePicker(ev)

        } else if (attachmentLink) {
            const newAttachment = {
                id: Date.now(),
                path: attachmentLink,
                date: Date.now(),
                text: attachmentText || attachmentLink,
                type: 'link'
            }

            setAttachments((prev) => [...prev, newAttachment])
            hidePicker(ev)
        }
        setAttachmentFile(null)
        setAttachmentLink("")
        setAttachmentText("")
        hidePicker(ev)
    }

    const [coverColor, setCoverColor] = useState( taskToShow.style.backgroundColor || '')
    const [coverImage, setCoverImage] = useState(taskToShow.style.backgroundImage || '')
    const [coverSize, setCoverSize] = useState(taskToShow.style.backgroundSize || 'small')

    const [addingToChecklist, setAddingToChecklist] = useState(0)

    function onPickColor(color) {
        setCoverColor(color)
        setCoverImage('')
    }

    function onPickImage(url) {
        setCoverImage(url)
        setCoverColor('')
    }

    function onPickSize(size) {
        setCoverSize(size)
    }

    function onRemoveCover() {
        setCoverColor('')
        setCoverImage('')
        setCoverSize('small')
    }


    useEffect(
        () => {
            saveTask()
        },[
            isDone,
            cardTitle,
            listName,
            isWatching,
            description,
            attachments,
            checklists,
            newChecklistItem,
            activityLog,
            location,
            badges,
            members,
            boardMembers,
            date,
            showLabels,
            showMembers,
            showCustomFields,
            showDate,
            showMaps,
            showChecklist,
            showActivity,
            showAttachments,
            showPicker,
            showPickerDate,
            showPickerCustomBadges,
            showPickerLocation,
            showPickerAttachments,
            showPickerChecklists,
            showPickerLabels,
            showPickerMembers,
            showPickerMoveCard,
            showPickerCopyCard,
            showPickerMirrorCard,
            showPickerShareCard,
            showPickerChangeALabel,
            showPickerUnderConstruction,
            showPickerCover,
            showFieldsEditor,
            pickerTop,
            pickerLeft,
            coverColor,
            coverImage,
            coverSize,
            calendarMonth,
            isStartDateEnabled,
            isDueDateEnabled,
            startDate,
            dueDate,
            dueTime,
            dueDateReminder,
            currentLabelText,
            previousLabelColor,
            currentLabelColor,
            selectedBoardId,
            selectedGroupId,
            selectedPosition,
            attachmentFile,
            attachmentLink,
            attachmentText
        ])

    const [firsts, setFirsts] = useState([])

    function addActivityLog(fullName, actionText, paramName) {
        if (!firsts.includes(paramName)) {
            setFirsts(prev => [...prev, paramName])
            return
        }
        setActivityLog(prev => [
            ...prev,
            {
                id: Date.now(),
                createdAt: Date.now(),
                byMember: {
                    _id: 'u101',
                    fullName,
                    imgUrl: ''
                },
                title: actionText
            }
        ])
    }

    useEffect(() => { addActivityLog('Roi', 'changed the card title', 'cardTitle') }, [cardTitle])
    useEffect(() => { addActivityLog('Roi', 'updated the card description', 'description') }, [description])
    useEffect(() => { addActivityLog('Roi', 'assigned/unassigned members', 'members') }, [members])
    useEffect(() => { addActivityLog('Roi', 'added/removed labels', 'cardLabels') }, [cardLabels])
    useEffect(() => { addActivityLog('Roi', 'updated location', 'location') }, [location])
    useEffect(() => { addActivityLog('Roi', 'adjusted custom badges', 'badges') }, [badges])
    useEffect(() => { addActivityLog('Roi', 'changed cover color/image', 'cover') }, [coverColor, coverImage])
    useEffect(() => { addActivityLog('Roi', isDone ? 'marked this card as done' : 'marked this card as in progress', 'isDone') }, [isDone])
    useEffect(() => { addActivityLog('Roi', isWatching ? 'started watching this card' : 'stopped watching this card', 'isWatching') }, [isWatching])
    useEffect(() => { addActivityLog('Roi', 'changed checklists', 'checklists') }, [checklists])
    useEffect(() => { addActivityLog('Roi', 'attached or removed files/links', 'attachments') }, [attachments])
    useEffect(() => { addActivityLog('Roi', 'changed the due date', 'date') }, [date])
    useEffect(() => { addActivityLog('Roi', 'changed the due time', 'dueTime') }, [dueTime])
    useEffect(() => { addActivityLog('Roi', 'changed the due date reminder', 'dueDateReminder') }, [dueDateReminder])
    useEffect(() => { addActivityLog('Roi', 'changed the start date', 'startDate') }, [startDate])
    useEffect(() => { addActivityLog('Roi', 'moved the card to a different board', 'selectedBoardId') }, [selectedBoardId])
    useEffect(() => { addActivityLog('Roi', 'moved the card to a different group', 'selectedGroupId') }, [selectedGroupId])
    useEffect(() => { addActivityLog('Roi', 'changed the card’s position in the list', 'selectedPosition') }, [selectedPosition])
    useEffect(() => { addActivityLog('Roi', 'renamed the list', 'listName') }, [listName])


    function onModalCloseInner(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        saveTask().then(onClose(ev))
            .catch(err => console.error(err))

    }



    // Redux boards and the current card details
    // const boards = useSelector((state) => state.boardModule.boards)
    // const currentBoard = taskToShow.board    // The board that the original card belongs to
    // const currentGroup = taskToShow.group    // The group that the original card belongs to

// "Name" for the new card
    const [copyTitle, setCopyTitle] = useState(taskToShow.title || '')

// Checkboxes to keep checklists, labels, members
    const [keepChecklists, setKeepChecklists] = useState(true)
    const [keepLabels, setKeepLabels] = useState(true)
    const [keepMembers, setKeepMembers] = useState(true)

// Where to copy the card
//     const [selectedBoardId, setSelectedBoardId] = useState(currentBoard?._id || '')
//     const [selectedGroupId, setSelectedGroupId] = useState(currentGroup?.id || '')
//     const [selectedPosition, setSelectedPosition] = useState(1) // 1-based

    // function getSelectedBoard() {
    //     return boards.find((b) => b._id === selectedBoardId)
    // }
    //
    // function getSelectedGroup() {
    //     const board = getSelectedBoard()
    //     if (!board) return null
    //     return board.groups.find((g) => g.id === selectedGroupId)
    // }



    async function onCopyCard(ev) {
        const targetBoard = getSelectedBoard()
        const targetGroup = getSelectedGroup()
        if (!targetBoard || !targetGroup) return

        const boardCopy = JSON.parse(JSON.stringify(targetBoard))
        const groupIdx = boardCopy.groups.findIndex(g => g.id === targetGroup.id)
        if (groupIdx < 0) return

        const newCard = {
            id: makeId(),
            title: copyTitle,
            description: taskToShow.description || '',
            checklists: keepChecklists ? JSON.parse(JSON.stringify(taskToShow.checklists || [])) : [],
            labels: keepLabels ? JSON.parse(JSON.stringify(taskToShow.labels || [])) : [],
            members: keepMembers ? JSON.parse(JSON.stringify(taskToShow.members || [])) : [],
            attachments: [], // or copy if you want them
            status: taskToShow.status || '',
            style: { ...taskToShow.style },
            priority: taskToShow.priority || '',
            dueDate: taskToShow.dueDate || '',
            comments: [],
            labelIds: keepLabels ? JSON.parse(JSON.stringify(taskToShow.labelIds || [])) : [],
            byMember: taskToShow.byMember || '',
            badges: keepLabels ? [...(taskToShow.badges || [])] : [],
            isUserWatching: false,
            activity: [],
            location: { ...taskToShow.location },
            group: { ...taskToShow.group }

        }

        const pos = Math.min(selectedPosition - 1, boardCopy.groups[groupIdx].tasks.length)
        boardCopy.groups[groupIdx].tasks.splice(pos, 0, newCard)

        const cleaned = cleanBoard(boardCopy)
        await updateBoard(cleaned)
        hidePicker(ev)
    }

    function onDeleteTask(ev) {
        onClose(ev)
        const boardCopy = cleanBoard(taskToShow.board)
        const groupIdx = boardCopy.groups.findIndex(g => g.id === taskToShow.group.id)
        if (groupIdx >= 0) {
            const taskIdx = boardCopy.groups[groupIdx].tasks.findIndex(t => t.id === taskToShow.id)
            if (taskIdx >= 0) {
                boardCopy.groups[groupIdx].tasks.splice(taskIdx, 1)
            }
        }
        updateBoard(boardCopy)
    }

    return (
        <>
            <div className="task-modal">
                {/*FIX:::*/}
                {/*onClick={hidePicker}>*/}


                {(coverImage || coverColor) ? (<div
                    className="task-cover"
                    style={{
                        backgroundImage: `url(${coverImage})` || '',
                        backgroundColor: coverColor || ''
                    }}
                >
                    <button className="task-modal-close" onClick={onModalCloseInner}>
                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path>
                        </svg>
                    </button>
                    <button className="change-cover-btn" onClick={(ev) => {
                        hidePicker(ev)
                        movePickerTo(ev)
                        setShowPickerCover(true)
                    }}>
                        <svg width="24" height="24" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5 5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5ZM19 7H5V13H19V7Z" fill="currentColor"></path>
                        </svg>
                        Cover
                    </button>
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

                            {isDone ? <div className="task-icon status-icon" title="Card is complete"
                                           onClick={() => setIsDone(!isDone)}
                                ><i className="fa-regular fa-check"></i></div> :
                                <div className="task-icon status-icon-incomplete" title="Card is incomplete"
                                     onClick={() => setIsDone(!isDone)}
                                ></div>}


                            {/*<i className="fa-regular fa-check"></i>*/}


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
                                                    className={`task-watch ${isWatching ? "" : ""}`}
                                                    onClick={() => setIsWatching(!isWatching)}
                                                >
                                                    <i className="fa-regular fa-eye"></i>
                                                    {isWatching ? "Watching" : "Watch"}
                                                    {isWatching && <i className="fa-regular fa-check"></i>}
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
                                                            ) : <span></span>
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
                                    {/*<button className="delete-btn">Edit</button>*/}
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
                                                    onChange={(e) => setBadges(
                                                        badges.map(b => {
                                                            if (b.categ === badge.categ) {
                                                                return {...b, text: e.target.value}
                                                            }
                                                            return b
                                                        }))}

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
                                        <button className="delete-btn"
                                                onClick={() => {
                                                    hidePicker(event)
                                                    movePickerTo(event)
                                                    setShowPickerAttachments(true)
                                                }}
                                        >Add
                                        </button>
                                    </div>
                                    <div className="inner-component-left-padding">Files</div>
                                    <div className="task-attachment-row inner-component-left-padding just-flex-cols">
                                        {(attachments.map(attachment => {
                                            return <div key={attachment.id} className="flex-space-between-align full-width">
                                                <div className="flex-space-between-align">
                                                    <button className="attachment-extention">PNG</button>
                                                    <div className="file-info">
                                                        {attachment.text && <h5>{attachment.text}</h5>}
                                                        {!attachment.text && <h5>{attachment.path}</h5>}
                                                        <label>{new Date(attachment.date).toLocaleDateString()}</label>
                                                    </div>
                                                </div>
                                                <button className="delete-btn-del"
                                                        onClick={() => {
                                                            setAttachments(attachments.filter(a => a.id !== attachment.id))
                                                        }}
                                                >Delete
                                                </button>
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
                                                    <button className="delete-btn"
                                                            onClick={() => {
                                                                setChecklists(checklists.filter(c => c.id !== checklist.id))
                                                            }}
                                                    >Delete
                                                    </button>
                                                </div>


                                                {checklist.progress &&
                                                    <div className="progress inner-component-left-padding">
                                                        <div className="progress-container">
                                                            <div className="progress-num">{checklist.progress}%</div>
                                                            <div className="progress-bar">
                                                                <div className="progress-bar-internal"
                                                                     style={{width: `${checklist.progress}%`}}
                                                                ></div>
                                                            </div>
                                                        </div>
                                                    </div>}

                                                {checklist.todos.map(todo => {
                                                    return <>
                                                        <div>
                                                            <div className="just-flex-with-center checklist-todos">
                                                                <input name={todo.title} type="checkbox"
                                                                       checked={todo.isDone}
                                                                       onChange={() => {
                                                                           const newChecklists = checklists.map(c => {
                                                                               if (c.id === checklist.id) {
                                                                                   return {
                                                                                       ...c, todos: c.todos.map(t => {
                                                                                           if (t.id === todo.id) {
                                                                                               return {...t, isDone: !t.isDone}
                                                                                           }
                                                                                           return t
                                                                                       })
                                                                                   }
                                                                               }
                                                                               return c
                                                                           })

                                                                           newChecklists.map(c => {
                                                                               if (c.id === checklist.id) {
                                                                                   let doneTodos = c.todos.filter(t => t.isDone)
                                                                                   c.progress = Math.floor((doneTodos.length / c.todos.length) * 100)
                                                                               }
                                                                           })
                                                                           setChecklists(newChecklists)
                                                                       }}
                                                                />
                                                                <label
                                                                    style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}
                                                                >{todo.title}</label>
                                                            </div>
                                                        </div>
                                                    </>
                                                })}

                                                {(addingToChecklist === 0) && <>
                                                <div className="task-checklist-add inner-component-left-padding">

                                                    <button className="delete-btn-del" onClick={() => {
                                                        setAddingToChecklist(checklist.id)
                                                        }}>
                                                        Add an item
                                                    </button>

                                                </div>
                                                </>}

                                                {(addingToChecklist === checklist.id)
                                                    && <>
                                                        <div className="task-checklist-add inner-component-left-padding">
                                                            <input
                                                                className="checklist-input"
                                                                type="text"
                                                                placeholder="Add an item"
                                                                value={newChecklistItem}
                                                                onChange={(e) => setNewChecklistItem(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="side-by-side inner-component-left-padding">
                                                            <div className="just-flex">

                                                                <div className="checklist-actions">
                                                                    <button className="btn-add"
                                                                            onClick={() => {
                                                                                setChecklists(checklists.map(c => {
                                                                                        if (c.id === checklist.id) {
                                                                                            return {
                                                                                                ...c,
                                                                                                todos: [...c.todos, {
                                                                                                    id: Date.now(),
                                                                                                    title: newChecklistItem,
                                                                                                    isDone: false
                                                                                                }]
                                                                                            }
                                                                                        }
                                                                                        return c
                                                                                    })
                                                                                )
                                                                                setNewChecklistItem('')
                                                                            }}
                                                                    >Add
                                                                    </button>
                                                                    <button className="btn-cancel"
                                                                            onClick={() => {
                                                                                setNewChecklistItem('')
                                                                                setAddingToChecklist(0)
                                                                            }}
                                                                    >Cancel
                                                                    </button>
                                                                </div>
                                                            </div>

                                                            {/*<div className="just-flex">*/}
                                                            {/*    <button className="footer-action">*/}
                                                            {/*        <i className="fa-regular fa-user"></i>*/}
                                                            {/*        Assign*/}
                                                            {/*    </button>*/}
                                                            {/*    <button className="footer-action">*/}
                                                            {/*        <i className="fa-regular fa-clock"></i>*/}
                                                            {/*        Due date*/}
                                                            {/*    </button>*/}
                                                            {/*</div>*/}
                                                        </div>
                                                    </>}


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
                                        {/*<button className="delete-btn"*/}
                                        {/*        onClick={() => {*/}

                                        {/*        }}>Hide Details*/}
                                        {/*</button>*/}
                                    </div>
                                    <ul className="task-activity-list">
                                        <li key="1">
                                            <div className="just-flex">
                                                <div className="user-circle">
                                                    YP
                                                </div>
                                                <div className="flex-col input-container">
                                                    <input className="activity-input" type="text" placeholder="Write a comment..."
                                                           ref={activityInputRef}
                                                    />
                                                    <button className="activity-btn"
                                                            onClick={
                                                                (e) => {
                                                                    setActivityLog(
                                                                        [...activityLog, {
                                                                            id: Date.now(),
                                                                            title: activityInputRef.current.value,
                                                                            byMember: {
                                                                                fullname: 'Yam Peleg',
                                                                                imgUrl: ''
                                                                            },
                                                                            createdAt: Date.now()
                                                                        }]
                                                                    )
                                                                    activityInputRef.current.value = ''
                                                                }
                                                            }
                                                    >Save
                                                    </button>
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
                                setShowPickerCover(true)
                            }}><i className="fa-regular fa-image"></i> Cover
                            </button>
                            <button className="sidebar-btn" onClick={() => {
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
                                    onClick={onDeleteTask}><i className="fa-regular fa-archive"></i> Archive
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
                                        : <div className="just-flex">
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
                                        : <div className="just-flex">
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
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                        </svg>
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
                                value={attachmentText}
                                onChange={(ev) => setAttachmentText(ev.target.value)}
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
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M6 8C6 8.55228 5.55228 9 5 9C4.44772 9 4 8.55228 4 8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8ZM8 8C8 9.65685 6.65685 11 5 11C3.34315 11 2 9.65685 2 8C2 6.34315 3.34315 5 5 5C6.65685 5 8 6.34315 8 8ZM6 16C6 16.5523 5.55228 17 5 17C4.44772 17 4 16.5523 4 16C4 15.4477 4.44772 15 5 15C5.55228 15 6 15.4477 6 16ZM8 16C8 17.6569 6.65685 19 5 19C3.34315 19 2 17.6569 2 16C2 14.3431 3.34315 13 5 13C6.65685 13 8 14.3431 8 16ZM19 7H13C12.4477 7 12 7.44772 12 8C12 8.55228 12.4477 9 13 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7ZM13 5C11.3431 5 10 6.34315 10 8C10 9.65685 11.3431 11 13 11H19C20.6569 11 22 9.65685 22 8C22 6.34315 20.6569 5 19 5H13ZM13 15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H13C12.4477 17 12 16.5523 12 16C12 15.4477 12.4477 15 13 15ZM10 16C10 14.3431 11.3431 13 13 13H16C17.6569 13 19 14.3431 19 16C19 17.6569 17.6569 19 16 19H13C11.3431 19 10 17.6569 10 16Z"
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
                                        >Delete
                                        </button>
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
                                >Add
                                </button>
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
                        >Create
                        </button>


                    </div>
                </>}

            </div>

            {/* Dates Picker */}
            <div
                className="picker-popup date-picker-popup"
                style={{
                    top: pickerTop,
                    left: pickerLeft,
                    display: showPickerDate ? 'block' : 'none',
                    width: '304px'
                }}
            >
                <div className="picker-header">
                    <h3>Dates</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.5858 12L5.29289 6.70711C4.90237
             6.31658 4.90237 5.68342 5.29289
             5.29289C5.68342 4.90237 6.31658
             4.90237 6.70711 5.29289L12
             10.5858L17.2929 5.29289C17.6834
             4.90237 18.3166 4.90237 18.7071
             5.29289C19.0976 5.68342 19.0976
             6.31658 18.7071 6.70711L13.4142
             12L18.7071 17.2929C19.0976 17.6834
             19.0976 18.3166 18.7071 18.7071C18.3166
             19.0976 17.6834 19.0976 17.2929
             18.7071L12 13.4142L6.70711
             18.7071C6.31658 19.0976 5.68342
             19.0976 5.29289 18.7071C4.90237
             18.3166 4.90237 17.6834 5.29289
             17.2929L10.5858 12Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                <div className="date-picker-content">
                    <div className="calendar-header">
                        <button className="nav-btn" onClick={prevMonth}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.7071 4.29289C16.0976
               4.68342 16.0976 5.31658 15.7071
               5.70711L9.41421 12L15.7071
               18.2929C16.0976 18.6834 16.0976
               19.3166 15.7071 19.7071C15.3166
               20.0976 14.6834 20.0976 14.2929
               19.7071L7.29289 12.7071C6.90237
               12.3166 6.90237 11.6834 7.29289
               11.2929L14.2929 4.29289C14.6834
               3.90237 15.3166 3.90237 15.7071
               4.29289Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                        <span className="month-year">
        {calendarMonth.toLocaleString('default', {month: 'long', year: 'numeric'})}
      </span>
                        <button className="nav-btn" onClick={nextMonth}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.29289 4.29289C7.90237
               4.68342 7.90237 5.31658 8.29289
               5.70711L14.5858 12L8.29289
               18.2929C7.90237 18.6834 7.90237
               19.3166 8.29289 19.7071C8.68342
               20.0976 9.31658 20.0976 9.70711
               19.7071L16.7071 12.7071C17.0976
               12.3166 17.0976 11.6834 16.7071
               11.2929L9.70711 4.29289C9.31658
               3.90237 8.68342 3.90237 8.29289
               4.29289Z"
                                    fill="currentColor"
                                />
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

                        {getCalendarDays(calendarMonth).map((dayObj, idx) => {
                            const dayNumber = dayObj.date.getDate()
                            const classes = ['day']
                            if (!dayObj.isCurrentMonth) classes.push('other-month')
                            if (
                                dueDate &&
                                dayObj.date.toDateString() === new Date(dueDate).toDateString()
                            ) {
                                classes.push('current')
                            }
                            return (
                                <div
                                    key={idx}
                                    className={classes.join(' ')}
                                    onClick={() => onDayClick(dayObj.date)}
                                >
                                    {dayNumber}
                                </div>
                            )
                        })}
                    </div>

                    <div className="date-options">


                        <div className="date-section">
                            <label>Due date</label>
                            <div className="date-inputs">
                                <div className="date-input">
                                    <input
                                        type="checkbox"
                                        checked={isDueDateEnabled}
                                        onChange={(e) => {
                                            setIsDueDateEnabled(e.target.checked)
                                            if (!e.target.checked) setDueDate(null)
                                        }}
                                    />
                                    <input
                                        type="text"
                                        value={
                                            (dueDate && isDueDateEnabled)
                                                ? formatMMDDYYYY(dueDate)
                                                : ''
                                        }
                                        onChange={(e) => {
                                        }}
                                        disabled={!isDueDateEnabled}
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={dueTime}
                                    className="time-input"
                                    onChange={(e) => setDueTime(e.target.value)}
                                    disabled={!isDueDateEnabled}
                                />
                            </div>
                        </div>

                        <div className="reminder-section">
                            <label>Set due date reminder</label>
                            <select
                                className="reminder-select"
                                value={dueDateReminder}
                                onChange={(e) => setDueDateReminder(e.target.value)}
                                disabled={!isDueDateEnabled}
                            >
                                <option value="None">None</option>
                                <option value="At time of due date">At time of due date</option>
                                <option value="5 minutes before">5 minutes before</option>
                                <option value="15 minutes before">15 minutes before</option>
                                <option value="1 Hour before">1 Hour before</option>
                                <option value="1 Day before">1 Day before</option>
                                <option value="2 Days before">2 Days before</option>
                            </select>
                            <p className="reminder-note">
                                Reminders will be sent to all members and watchers of this card.
                            </p>
                        </div>
                    </div>

                    <div className="date-actions">
                        <button className="save-btn" onClick={onSaveDates}>
                            Save
                        </button>
                        <button className="remove-btn" onClick={onRemoveDates}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>


            {/* MoveCard Picker */}
            <div
                className="picker-popup"
                style={{
                    top: pickerTop,
                    left: pickerLeft,
                    display: showPickerMoveCard ? "block" : "none",
                    width: "304px",
                }}
            >
                <div className="picker-header">
                    <h3>Move card</h3>
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
                                d="M10.5858 12L5.29289
             6.70711C4.90237 6.31658 4.90237
             5.68342 5.29289 5.29289C5.68342
             4.90237 6.31658 4.90237 6.70711
             5.29289L12 10.5858L17.2929
             5.29289C17.6834 4.90237 18.3166
             4.90237 18.7071 5.29289C19.0976
             5.68342 19.0976 6.31658 18.7071
             6.70711L13.4142 12L18.7071
             17.2929C19.0976 17.6834 19.0976
             18.3166 18.7071 18.7071C18.3166
             19.0976 17.6834 19.0976 17.2929
             18.7071L12 13.4142L6.70711
             18.7071C6.31658 19.0976 5.68342
             19.0976 5.29289 18.7071C4.90237
             18.3166 4.90237 17.6834 5.29289
             17.2929L10.5858 12Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                <div className="move-card-content">
                    <div className="select-section">
                        <h4>Select destination</h4>

                        <div className="select-group">
                            <label>Board</label>
                            <select
                                className="board-select"
                                value={selectedBoardId}
                                onChange={(e) => {
                                    setSelectedBoardId(e.target.value)
                                    setSelectedGroupId('')
                                    setSelectedPosition(1)
                                }}
                            >
                                {boards.map((b) => (
                                    <option key={b._id} value={b._id}>
                                        {b.title}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="select-row">
                            <div className="select-group">
                                <label>List</label>
                                <select
                                    className="list-select"
                                    value={selectedGroupId}
                                    onChange={(e) => {
                                        setSelectedGroupId(e.target.value)
                                        setSelectedPosition(1)
                                    }}
                                >
                                    {getSelectedBoard()?.groups.map((group) => (
                                        <option key={group.id} value={group.id}>
                                            {group.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-group">
                                <label>Position</label>
                                <select
                                    className="position-select"
                                    value={selectedPosition}
                                    onChange={(e) => setSelectedPosition(+e.target.value)}
                                >
                                    {(() => {
                                        const grp = getSelectedGroup()
                                        const numTasks = grp ? grp.tasks.length : 0
                                        const positions = []
                                        for (let i = 1; i <= numTasks + 1; i++) {
                                            positions.push(i)
                                        }
                                        return positions.map((pos) => (
                                            <option key={pos} value={pos}>
                                                {pos}
                                            </option>
                                        ))
                                    })()}
                                </select>
                            </div>
                        </div>
                    </div>

                    <button className="move-btn" onClick={onMoveCard}>
                        Move
                    </button>
                </div>
            </div>


            {/* CopyCards Picker */}
            <div
                className="picker-popup"
                style={{
                    top: pickerTop,
                    left: pickerLeft,
                    display: showPickerCopyCard ? 'block' : 'none',
                    width: '304px',
                }}
            >
                <div className="picker-header">
                    <h3>Copy card</h3>
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
                                d="M10.5858 12L5.29289
             6.70711C4.90237 6.31658 4.90237
             5.68342 5.29289 5.29289C5.68342
             4.90237 6.31658 4.90237 6.70711
             5.29289L12 10.5858L17.2929
             5.29289C17.6834 4.90237 18.3166
             4.90237 18.7071 5.29289C19.0976
             5.68342 19.0976 6.31658 18.7071
             6.70711L13.4142 12L18.7071
             17.2929C19.0976 17.6834 19.0976
             18.3166 18.7071 18.7071C18.3166
             19.0976 17.6834 19.0976 17.2929
             18.7071L12 13.4142L6.70711
             18.7071C6.31658 19.0976 5.68342
             19.0976 5.29289 18.7071C4.90237
             18.3166 4.90237 17.6834 5.29289
             17.2929L10.5858 12Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                <div className="copy-card-content">
                    <div className="title-section">
                        <label>Name</label>
                        <input
                            type="text"
                            className="title-input"
                            value={copyTitle}
                            onChange={(e) => setCopyTitle(e.target.value)}
                        />
                    </div>
                    <div className="keep-section">
                        <label>Keep...</label>
                        <div className="keep-options">
                            <label className="keep-option">
                                <input
                                    type="checkbox"
                                    checked={keepChecklists}
                                    onChange={(e) => setKeepChecklists(e.target.checked)}
                                />
                                <span>Checklists ({taskToShow.checklists?.length || 0})</span>
                            </label>
                            <label className="keep-option">
                                <input
                                    type="checkbox"
                                    checked={keepLabels}
                                    onChange={(e) => setKeepLabels(e.target.checked)}
                                />
                                <span>Labels ({taskToShow.labelIds?.length || 0})</span>
                            </label>
                            <label className="keep-option">
                                <input
                                    type="checkbox"
                                    checked={keepMembers}
                                    onChange={(e) => setKeepMembers(e.target.checked)}
                                />
                                <span>Members ({taskToShow.memberIds?.length || 0})</span>
                            </label>
                        </div>
                    </div>

                    <div className="copy-to-section">
                        <h4>Copy to...</h4>

                        <div className="select-group">
                            <label>Board</label>
                            <select
                                className="board-select"
                                value={selectedBoardId}
                                onChange={(e) => {
                                    setSelectedBoardId(e.target.value)
                                    setSelectedGroupId('')
                                    setSelectedPosition(1)
                                }}
                            >
                                {boards.map((b) => (
                                    <option key={b._id} value={b._id}>
                                        {b.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="select-row">
                            <div className="select-group">
                                <label>List</label>
                                <select
                                    className="list-select"
                                    value={selectedGroupId}
                                    onChange={(e) => {
                                        setSelectedGroupId(e.target.value)
                                        setSelectedPosition(1)
                                    }}
                                >
                                    {getSelectedBoard()?.groups.map((group) => (
                                        <option key={group.id} value={group.id}>
                                            {group.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="select-group">
                                <label>Position</label>
                                <select
                                    className="position-select"
                                    value={selectedPosition}
                                    onChange={(e) => setSelectedPosition(+e.target.value)}
                                >
                                    {(() => {
                                        const grp = getSelectedGroup()
                                        const numTasks = grp ? grp.tasks.length : 0
                                        const positions = []
                                        for (let i = 1; i <= numTasks + 1; i++) {
                                            positions.push(i)
                                        }
                                        return positions.map((pos) => (
                                            <option key={pos} value={pos}>
                                                {pos}
                                            </option>
                                        ))
                                    })()}
                                </select>
                            </div>
                        </div>
                    </div>

                    <button className="create-btn" onClick={onCopyCard}>
                        Create card
                    </button>
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

            {/* Cover Picker */}

            <div
                className="picker-popup"
                style={{
                    top: pickerTop,
                    left: pickerLeft,
                    display: showPickerCover ? 'block' : 'none',
                    width: '304px',
                }}
            >
                <div className="picker-header">
                    <h3>Cover</h3>
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
                                d="M10.5858 12L5.29289
             6.70711C4.90237 6.31658 4.90237
             5.68342 5.29289 5.29289C5.68342
             4.90237 6.31658 4.90237 6.70711
             5.29289L12 10.5858L17.2929
             5.29289C17.6834 4.90237 18.3166
             4.90237 18.7071 5.29289C19.0976
             5.68342 19.0976 6.31658 18.7071
             6.70711L13.4142 12L18.7071
             17.2929C19.0976 17.6834 19.0976
             18.3166 18.7071 18.7071C18.3166
             19.0976 17.6834 19.0976 17.2929
             18.7071L12 13.4142L6.70711
             18.7071C6.31658 19.0976 5.68342
             19.0976 5.29289 18.7071C4.90237
             18.3166 4.90237 17.6834 5.29289
             17.2929L10.5858 12Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>

                <div className="cover-content">
                    {/* SIZE SECTION */}
                    <div className="size-section">
                        <label>Size</label>
                        <div className="size-options">
                            <button
                                className={`size-preview small ${coverSize === 'small' ? 'selected' : ''}`}
                                onClick={() => onPickSize('small')}
                            ></button>
                            <button
                                className={`size-preview large ${coverSize === 'large' ? 'selected' : ''}`}
                                onClick={() => onPickSize('large')}
                            ></button>
                        </div>
                        <button className="remove-cover-btn" onClick={onRemoveCover}>
                            Remove cover
                        </button>
                    </div>

                    {/* COLORS SECTION */}
                    <div className="colors-section">
                        <label>Colors</label>
                        <div className="color-grid">
                            <button
                                className={`color-btn ${coverColor === '#4BCE97' ? 'selected' : ''}`}
                                style={{backgroundColor: '#4BCE97'}}
                                onClick={() => onPickColor('#4BCE97')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#F5CD47' ? 'selected' : ''}`}
                                style={{backgroundColor: '#F5CD47'}}
                                onClick={() => onPickColor('#F5CD47')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#FAA53D' ? 'selected' : ''}`}
                                style={{backgroundColor: '#FAA53D'}}
                                onClick={() => onPickColor('#FAA53D')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#F87168' ? 'selected' : ''}`}
                                style={{backgroundColor: '#F87168'}}
                                onClick={() => onPickColor('#F87168')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#9F8FEF' ? 'selected' : ''}`}
                                style={{backgroundColor: '#9F8FEF'}}
                                onClick={() => onPickColor('#9F8FEF')}
                            ></button>

                            <button
                                className={`color-btn ${coverColor === '#579DFF' ? 'selected' : ''}`}
                                style={{backgroundColor: '#579DFF'}}
                                onClick={() => onPickColor('#579DFF')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#79E2F2' ? 'selected' : ''}`}
                                style={{backgroundColor: '#79E2F2'}}
                                onClick={() => onPickColor('#79E2F2')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#7BC86C' ? 'selected' : ''}`}
                                style={{backgroundColor: '#7BC86C'}}
                                onClick={() => onPickColor('#7BC86C')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#FF8ED4' ? 'selected' : ''}`}
                                style={{backgroundColor: '#FF8ED4'}}
                                onClick={() => onPickColor('#FF8ED4')}
                            ></button>
                            <button
                                className={`color-btn ${coverColor === '#8590A2' ? 'selected' : ''}`}
                                style={{backgroundColor: '#8590A2'}}
                                onClick={() => onPickColor('#8590A2')}
                            ></button>
                        </div>

                        <div className="color-blind-toggle">
                            <label>
                                <input type="checkbox"/>
                                <span>Enable colorblind friendly mode</span>
                            </label>
                        </div>
                    </div>

                    {/* ATTACHMENTS SECTION */}
                    <div className="attachments-section">
                        <label>Attachments</label>
                        <input
                            type="file"
                            style={{display: 'none'}}
                            ref={coverFileInputRef}
                            onChange={onCoverFileSelected}
                        />

                        <button
                            className="upload-btn"
                            onClick={() => coverFileInputRef.current.click()}
                        >
                            Upload a cover image
                        </button>
                        <p className="upload-tip">
                            Tip: Drag an image on to the card to upload it.
                        </p>
                    </div>

                    {/* UNSPLASH SECTION */}
                    <div className="unsplash-section">
                        <label>Photos from Unsplash</label>
                        <div className="photo-grid">
                            <div
                                className="photo-item"
                                onClick={() => onPickImage('unsplash1.jpg')}
                            >
                                <img src="unsplash1.jpg" alt="Aerial view"/>
                            </div>
                            <div
                                className="photo-item"
                                onClick={() => onPickImage('unsplash2.jpg')}
                            >
                                <img src="unsplash2.jpg" alt="Sunset"/>
                            </div>
                            <div
                                className="photo-item"
                                onClick={() => onPickImage('unsplash3.jpg')}
                            >
                                <img src="unsplash3.jpg" alt="Ocean waves"/>
                            </div>
                            <div
                                className="photo-item"
                                onClick={() => onPickImage('unsplash4.jpg')}
                            >
                                <img src="unsplash4.jpg" alt="Palm trees"/>
                            </div>
                            <div
                                className="photo-item"
                                onClick={() => onPickImage('unsplash5.jpg')}
                            >
                                <img src="unsplash5.jpg" alt="Night sky"/>
                            </div>
                            <div
                                className="photo-item"
                                onClick={() => onPickImage('unsplash6.jpg')}
                            >
                                <img src="unsplash6.jpg" alt="Pool"/>
                            </div>
                        </div>
                        <button className="search-photos-btn">Search for photos</button>
                        <p className="unsplash-credit">
                            By using images from Unsplash, you agree to their
                            <a href="#" className="terms-link"> Terms of Service</a>
                        </p>
                    </div>
                </div>
            </div>


            <div className="picker-popup" style={{
                top: pickerTop,
                left: pickerLeft,
                // display: (showPickerCover) ? 'block' : 'none',
                display: 'none',
                width: '304px'
            }}>
                <div className="picker-header">
                    <h3>Cover</h3>
                    <button className="task-modal-close" onClick={hidePicker}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>

                <div className="cover-content">
                    <div className="size-section">
                        <label>Size</label>
                        <div className="size-options">
                            <button className="size-preview small"></button>
                            <button className="size-preview large"></button>
                        </div>
                        <button className="remove-cover-btn">Remove cover</button>
                    </div>

                    <div className="colors-section">
                        <label>Colors</label>
                        <div className="color-grid">
                            <button className="color-btn" style={{backgroundColor: '#4BCE97'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#F5CD47'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#FAA53D'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#F87168'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#9F8FEF'}}></button>

                            <button className="color-btn" style={{backgroundColor: '#579DFF'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#79E2F2'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#7BC86C'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#FF8ED4'}}></button>
                            <button className="color-btn" style={{backgroundColor: '#8590A2'}}></button>
                        </div>

                        <div className="color-blind-toggle">
                            <label>
                                <input type="checkbox"/>
                                <span>Enable colorblind friendly mode</span>
                            </label>
                        </div>
                    </div>

                    <div className="attachments-section">
                        <label>Attachments</label>
                        <button className="upload-btn">
                            Upload a cover image
                        </button>
                        <p className="upload-tip">Tip: Drag an image on to the card to upload it.</p>
                    </div>

                    <div className="unsplash-section">
                        <label>Photos from Unsplash</label>
                        <div className="photo-grid">
                            <div className="photo-item">
                                <img src="unsplash1.jpg" alt="Aerial view"/>
                            </div>
                            <div className="photo-item">
                                <img src="unsplash2.jpg" alt="Sunset"/>
                            </div>
                            <div className="photo-item">
                                <img src="unsplash3.jpg" alt="Ocean waves"/>
                            </div>
                            <div className="photo-item">
                                <img src="unsplash4.jpg" alt="Palm trees"/>
                            </div>
                            <div className="photo-item">
                                <img src="unsplash5.jpg" alt="Night sky"/>
                            </div>
                            <div className="photo-item">
                                <img src="unsplash6.jpg" alt="Pool"/>
                            </div>
                        </div>
                        <button className="search-photos-btn">Search for photos</button>
                        <p className="unsplash-credit">By using images from Unsplash, you agree to their
                            <a href="#" className="terms-link">Terms of Service</a>
                        </p>
                    </div>
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
    console.log('bordDetails')
    console.log(boardToShow)
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
        setTaskToEdit(task)
        togglePopup()
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
            // console.log('modal close')
            const updatedTask = taskToEdit
            console.log('modal close ', updatedTask.title)
            const boardCopy = JSON.parse(JSON.stringify(boardToShow))
            const groupIdx = boardCopy.groups.findIndex(
                (g) => g.id === updatedTask.group.id
            )
            console.log('groupIdx', groupIdx)
            if (groupIdx === -1) return
            const taskIdx = boardCopy.groups[groupIdx].tasks.findIndex(
                (t) => t.id === updatedTask.id
            )
            console.log('taskIdx', taskIdx)
            if (taskIdx === -1) return
            const {board, group, taskList, ...cleanTask} = updatedTask
            boardCopy.groups[groupIdx].tasks[taskIdx] = cleanTask
            await updateBoard(boardCopy)
            setTaskToShow(null)
            togglePopup()
        } catch (err) {
            console.error("Failed to save task:", err)
        }
    }

    function onMoveaCard(card, fromGroupId, toGroupId) {
        // 1) Copy board
        const boardCopy = JSON.parse(JSON.stringify(boardToShow));
        // 2) Remove from old group
        const fromGroupIdx = boardCopy.groups.findIndex((g) => g.id === fromGroupId);
        if (fromGroupIdx > -1) {
            const taskIdx = boardCopy.groups[fromGroupIdx].tasks.findIndex((t) => t.id === card.id);
            if (taskIdx > -1) {
                boardCopy.groups[fromGroupIdx].tasks.splice(taskIdx, 1);
            }
        }

        // 3) Insert into new group
        const toGroupIdx = boardCopy.groups.findIndex((g) => g.id === toGroupId);
        if (toGroupIdx > -1) {
            boardCopy.groups[toGroupIdx].tasks.push(card);
        }

        // 4) Update the board
        updateBoard(boardCopy);
    }


    function onMoveCard(card, fromGroupId, toGroupId, targetTask = null, edge = null) {
        // 1) Copy board
        const boardCopy = JSON.parse(JSON.stringify(boardToShow));
        // 2) Remove from old group
        const fromGroupIdx = boardCopy.groups.findIndex((g) => g.id === fromGroupId);
        if (fromGroupIdx > -1) {
            const taskIdx = boardCopy.groups[fromGroupIdx].tasks.findIndex((t) => t.id === card.id);
            if (taskIdx > -1) boardCopy.groups[fromGroupIdx].tasks.splice(taskIdx, 1);
        }
        // 3) Insert into new group
        const toGroupIdx = boardCopy.groups.findIndex((g) => g.id === toGroupId);
        if (toGroupIdx > -1) {
            // add at the end, or do more advanced logic if you want a specific position
            boardCopy.groups[toGroupIdx].tasks.push(card);
        }
        updateBoard(boardCopy);
    }

    function onReorderCard(dragged, targetTask, edge, groupId) {
        const boardCopy = JSON.parse(JSON.stringify(boardToShow));
        const groupIdx = boardCopy.groups.findIndex((g) => g.id === groupId);
        if (groupIdx === -1) return;

        const tasks = boardCopy.groups[groupIdx].tasks;
        const startIndex = tasks.findIndex((t) => t.id === dragged.id);
        const targetIndex = tasks.findIndex((t) => t.id === targetTask.id);

        const reordered = reorderWithEdge({
            axis: "vertical",
            list: tasks,
            startIndex,
            indexOfTarget: targetIndex,
            closestEdgeOfTarget: edge, // top or bottom
        });

        boardCopy.groups[groupIdx].tasks = reordered;
        updateBoard(boardCopy);
    }


    if (!boardToShow) return (<>Loading..</>)
    return (
        <div key={boardToShow._id} className={`everything ${(isPopupShown) ? 'popup-open' : ''}`}>

            {/* <button className="open-chat-btn" onClick={togglePopup}>💬</button> */}
            {isPopupShown && (!!taskToShow) && <>

                <div className="popup" ref={popupRef} onClick={closePopupOnlyIfClickedOutOfIt}>

                    <TaskModal taskToShow={taskToShow} onClose={closePopup2} popupRef={popupRef} onSaveTaskOuter={onSaveTaskOuter}/>

                </div>
                <div className="popup-backdrop" onClick={closePopupOnlyIfClickedOutOfIt}></div>
            </>
            }


            <AppHeader/>

            <main className="main-layout">

                <SideBar/>

                <section className="board-display">

                    <BoardHeader onStarBoard={onStarBoard} isStarred={boardToShow.isStarred}/>
                        <GroupList onMoveCard={onMoveCard} onLoadTask={onLoadTask}/>
                    {/* <section className="group-lists">
                        {boardToShow.groups.map(group => {

                            // return <GroupPreview currentBoard={boardToShow} onLoadTask={onLoadTask} group={group}/>
                            return <div className="list base-components-list" style={{backgroundColor: (group.style?.backgroundColor || ''), color: (group.style?.color || '#172b4d')}}>
                            <GroupHeader group={group}/>
                                <TaskList toggleLargeLabels={toggleLargeLabels} largeLabels={largeLabels} currentBoard={boardToShow} currentGroup={group} onLoadTask={onLoadTask} group={group}




                                          onReorderCard={onReorderCard}
                                          onMoveCard={onMoveCard}/>


                            </div>


                        })}
                        <AddGroup/>
                    </section> */}

                </section>

            </main>
        </div>
    )
}