
import { useState } from "react"
import { getEmptyTask, loadBoard, updateBoard } from "../store/store"
import { useSelector } from "react-redux"

export function AddTaskForm({selectedGroup,onSetShowForm}){
    const board = useSelector(state => state.boardModule.board)

const  [task,setTask] = useState(getEmptyTask())

function handleChange({target}){
       
        const {value,name:field} = target
      
            setTask(prevTask => {return{...prevTask,[field]:value}})
    }



    async function onSubmit(ev){
        ev.preventDefault()
        selectedGroup.tasks.push(task)
        await updateBoard(board)
        
        setTask(getEmptyTask())
        onSetShowForm()
    }

    return(<form onSubmit={onSubmit} className="add-task-form">
        <textarea onChange={ev =>handleChange(ev)} value={task.title} placeholder="Enter a title or paste a link" className="task-title" name="title" id="title"></textarea>
        <div>
        <button className="add-card-btn" type="submit">Add card</button>
        <button className="cancel-btn" onClick={() => onSetShowForm()} type="button">X</button>
        </div>
    </form>)
}