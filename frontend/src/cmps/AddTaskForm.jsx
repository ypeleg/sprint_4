

import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { getEmptyTask, updateBoard } from "../store/store"


export function AddTaskForm({ elFooter, selectedGroup, onSetShowForm }) {
    const board = useSelector(state => state.boardModule.board)
    const user = useSelector(state => state.userModule.user)
    const [task, setTask] = useState(getEmptyTask())
    const elTextArea = useRef()
    const elCont = useRef()



    useEffect(() => {
        if (elTextArea.current) {
            elTextArea?.current?.focus()
            elCont?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
        }
        async function handleKey(ev) {

            if (ev.key === "Enter") {
                ev.preventDefault()


                await onSubmit(ev)
            }
        }
        
        window.addEventListener("keydown", handleKey)
      
        return () => {
            window.removeEventListener("keydown", handleKey)
        
        }
    }, [task])


    function handleChange({ target }) {

        const { value, name: field } = target

        setTask(prevTask => {
            return { ...prevTask, [field]: value }
        })
    }



    async function onSubmit(ev) {

        selectedGroup.tasks.push(task)
        const newActivity = { createdAt: Date.now(), byMember: { ...user }, group: { id: selectedGroup.id, title: selectedGroup.title }, 'task': { title: task.title, id: task.id }, }
        board.activities = [newActivity, ...board.activities]
        setTask(getEmptyTask())
        await updateBoard(board)


    }

    return (<div ref={elCont} onSubmit={onSubmit} className="add-task-form">
        <textarea ref={elTextArea} autoFocus onChange={ev => handleChange(ev)} value={task.title} placeholder="Enter a title or paste a link" className="task-title" name="title" id="title"></textarea>
        <div className="btn-container">
            <button onClick={() => { onSetShowForm(); onSubmit() }} className="add-card-btn" type="submit">Add card</button>
            <button 
            
            style={{borderColor: "transparent" }}
            
            className="cancel-btn" onClick={() => onSetShowForm()} type="button"><span><svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></span></button>
        </div>
    </div>)
}