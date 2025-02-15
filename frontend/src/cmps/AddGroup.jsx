

import {useState} from "react"
import {useSelector} from "react-redux"
import {getEmptyGroup, updateBoard} from "../store/store"


export function AddGroup() {
    const [showForm, setForm] = useState(false)
    const [group, setGroup] = useState(getEmptyGroup())
    const board = useSelector(state => state.boardModule.board)

    function handleChange({target}) {

        const {value, name: field} = target

        setGroup(prevGroup => {
            return {...prevGroup, [field]: value}
        })
    }

    async function onSubmit(ev) {
        ev.preventDefault()

        board.groups.push(group)
        await updateBoard(board)

        // setTask(getEmptyTask())
        setForm(false)
    }

    return (
        <div className="add-group">
            {(!showForm) ? <button onClick={() => setForm(true)} className="add-group-btn">
                    <span className="plus"><i class="fa-regular fa-plus"></i></span>
                    Add another list
                </button> :
                <form onSubmit={onSubmit} className="add-task-form add-group-form">
                    <textarea onChange={handleChange} placeholder="Enter a title or paste a link" className="task-title" name="title" id="title"></textarea>
                    <div>
                        <button className="add-card-btn" type="submit">Add list</button>
                        <button onClick={() => setForm(false)} className="cancel-btn" type="button">X</button>
                    </div>
                </form>}
        </div>
    )
}