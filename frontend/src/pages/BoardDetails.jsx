


import { useParams } from "react-router"
import { useSelector } from "react-redux"
import { SideBar } from "../cmps/SideBar"
import { GroupList } from "../cmps/GroupList"
import { AppHeader } from "../cmps/AppHeader.jsx"
import React, { useRef, useEffect, useState } from "react"
import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"


function TaskModal() {
    const [cardTitle, setCardTitle] = useState("Design")
    const [listName, setListName] = useState("Tasks")
    const [isWatching, setIsWatching] = useState(false)
    const availableLabels = ["green", "yellow", "orange", "red", "blue", "purple"]
    const [activeLabels, setActiveLabels] = useState([])
    const [description, setDescription] = useState("")
    const [risk, setRisk] = useState("")
    const [priority, setPriority] = useState("")
    const [status, setStatus] = useState("")
    const [attachments, setAttachments] = useState([])
    const [newAttachment, setNewAttachment] = useState("")
    const [checklistTitle, setChecklistTitle] = useState("Checklistsasd")
    const [checklistItems, setChecklistItems] = useState([{ id: 1, text: "item", completed: true }])
    const [newChecklistItem, setNewChecklistItem] = useState("");
    const [hideChecked, setHideChecked] = useState(false);
    const [activityLog, setActivityLog] = useState([]);
    const [newComment, setNewComment] = useState("");

    function handleLabelToggle(color) {
        setActiveLabels((prev) =>
            prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
        )
    }

    function handleAddAttachment() {
        setAttachments((prev) => [...prev, newAttachment.trim()])
        setNewAttachment("")
    }

    function handleRemoveAttachment(index) {
        setAttachments((prev) => prev.filter((_, i) => i !== index))
    }

    function handleAddChecklistItem() {
        const newItem = {
            id: Date.now(),
            text: newChecklistItem.trim(),
            completed: false,
        }
        setChecklistItems((prev) => [...prev, newItem])
        setNewChecklistItem("")
    }

    function handleChecklistToggle(id) {
        setChecklistItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        )
    }

    function handleRemoveChecklist() {
        setChecklistItems([])
    }

    function handleAddComment() {
        if (!newComment.trim()) return
        setNewComment("")
    }

    return (
        <div className="task-modal">
            <div className="task-header">
                <div className="task-title-row">
                    <input
                        type="text"
                        className="task-card-title"
                        value={cardTitle}
                        onChange={(e) => setCardTitle(e.target.value)}
                    />
                    <span className="task-in-list">
            in list <strong>{listName}</strong>
          </span>
                </div>
                <div className="task-header-actions">
                    <button
                        className={`task-watch-btn ${isWatching ? "active" : ""}`}
                        onClick={() => setIsWatching(!isWatching)}
                    >
                        {isWatching ? "Watching" : "Watch"}
                    </button>
                </div>
            </div>
            <div className="task-labels">
                {availableLabels.map((color) => (
                    <div
                        key={color}
                        className={`task-label-swatch ${color} ${
                            activeLabels.includes(color) ? "selected" : ""
                        }`}
                        onClick={() => handleLabelToggle(color)}
                        title={`Toggle ${color} label`}
                    />
                ))}
            </div>
            <div className="task-section">
                <h3>Description</h3>
                <textarea
                    className="task-description"
                    value={description}
                    placeholder="Add a more detailed description..."
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="task-section">
                <h3>Custom Fields</h3>
                <div className="task-custom-fields">
                    <div>
                        <label>Risk</label>
                        <select value={risk} onChange={(e) => setRisk(e.target.value)}>
                            <option value="">Select...</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <div>
                        <label>Priority</label>
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
                        <label>Status</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
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
                <h3>Attachments</h3>
                <div className="task-attachment-row">
                    <input
                        type="text"
                        placeholder="Type attachment name or URL..."
                        value={newAttachment}
                        onChange={(e) => setNewAttachment(e.target.value)}
                    />
                    <button onClick={handleAddAttachment}>Add</button>
                </div>
                <ul className="task-attachments-list">
                    {attachments.map((att, i) => (
                        <li key={i}>
                            <span>{att}</span>
                            <button onClick={() => handleRemoveAttachment(i)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="task-section">
                <div className="task-checklist-header">
                    <h3>{checklistTitle}</h3>
                    <div>
                        <button onClick={() => setHideChecked(!hideChecked)}>
                            {hideChecked ? "Show checked items" : "Hide checked items"}
                        </button>
                        <button onClick={handleRemoveChecklist}>Delete</button>
                    </div>
                </div>
                <div className="task-checklist-items">
                    {checklistItems
                        .filter((ci) => (hideChecked ? !ci.completed : true))
                        .map((item) => (
                            <div key={item.id} className="task-checklist-item">
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => handleChecklistToggle(item.id)}
                                    />
                                    <span className={item.completed ? "completed" : ""}>
                    {item.text}
                  </span>
                                </label>
                            </div>
                        ))}
                </div>
                <div className="task-checklist-add">
                    <input
                        type="text"
                        placeholder="Add an item"
                        value={newChecklistItem}
                        onChange={(e) => setNewChecklistItem(e.target.value)}
                    />
                    <button onClick={handleAddChecklistItem}>Add</button>
                </div>
            </div>

            <div className="task-section">
                <h3>Activity</h3>
                <div className="task-activity-add">
          <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
          />
                    <button onClick={handleAddComment}>Save</button>
                </div>
                <ul className="task-activity-list">
                    {activityLog.map((entry, idx) => (
                        <li key={idx}>{entry}</li>
                    ))}
                </ul>
            </div>

            <div className="task-section task-actions">
                <h3>Actions</h3>
                <div className="task-actions-row">
                    <button>Move</button>
                    <button>Copy</button>
                    <button>Mirror</button>
                    <button>Make template</button>
                    <button>Archive</button>
                    <button>Share</button>
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


export function BoardDetails() {

    const boardToShow = useSelector(state => state.boardModule.board)
    const task = useSelector(state => state.boardModule.task)
    const { boardId } = useParams()
    console.log(boardId)

    const [isPopupShown, togglePopup] = useToggle(false)


    useEffect(() => {
        onloadboard()

    }, [])

    async function onloadboard() {
        await loadBoard(boardId)
    }

    if (!boardToShow) return (<>Loading..</>)
    return (
        <div className="everything">

            <button className="open-chat-btn" onClick={togglePopup}>💬</button>
            {isPopupShown && <>

                <div className="popup">
                    <div className="popup-close-btn"
                         onClick={() => togglePopup()}>X
                    </div>
                    {/*<header>really nice header</header>*/}
                    <main>
                        <TaskModal onClose={togglePopup}/>
                    </main>
                    {/*<footer>really nice footer</footer>*/}
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

                                    <img src="https://task-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="https://task-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="https://task-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
                                </div>
                                <div className="user-icon">
                                    <img src="https://task-members.s3.amazonaws.com/61e183e3a32cfd70b3fb7d14/86c826158bb121d5a356790f113e3934/30.png"/>
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

                    <GroupList groups={boardToShow.groups}/>

                </section>

            </main>
        </div>
    )
}