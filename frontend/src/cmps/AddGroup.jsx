

import {useSelector} from "react-redux"
import {useEffect, useRef, useState} from "react"
import {getEmptyGroup, updateBoard} from "../store/store"


export function AddGroup({ useDarkTextColors }) {


    const elTextArea = useRef()

    const [showForm, setForm] = useState(false)
    const [group, setGroup] = useState(getEmptyGroup())

    const user = useSelector(state => state.userModule.user)
    const board = useSelector(state => state.boardModule.board)

    function onChange({target}) {
        const {value, name: field} = target
        setGroup(prevGroup => {
            return {...prevGroup, [field]: value}
        })
    }

    useEffect(() => {
        if (showForm && elTextArea.current) {
            elTextArea?.current?.focus()
            elTextArea?.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
        }

        async function onKey(ev) {
            if (ev.key === "Enter" && showForm) {
                ev.preventDefault()
                await onSubmit(ev)
            }
        }

        window.addEventListener("keydown", onKey)
        return () => {
            window.removeEventListener("keydown", onKey)
        }
    }, [group])

    async function onSubmit(ev) {

        if (!group.title) {
            setForm(false)
            return
        }

        const copyBoard = {...board, groups: [...board.groups, group]}
        const newActivity = {createdAt: Date.now(), byMember: {...user}, group: {id: group.id, title: group.title}}
        copyBoard.activities = [newActivity, ...copyBoard.activities]
        setGroup(getEmptyGroup())
        await updateBoard(copyBoard)
    }

    return (<div className="add-group">
            {(!showForm) ? <button onClick={() => setForm(true)} className="add-group-btn" style={{
                background: (!useDarkTextColors ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'), color: (!useDarkTextColors ? 'white' : '#172b4d')
            }}>
                <span className="plus"><i class="fa-regular fa-plus"></i></span> Add another list </button> : <div className="add-task-form add-group-form">
                <textarea ref={elTextArea} autoFocus onChange={onChange} value={group.title} placeholder="Enter a title or paste a link" className="task-title" name="title" id="title"></textarea>
                <div>
                    <button onClick={(ev) => {
                        onSubmit(ev);
                        setForm(false)
                    }} className="add-card-btn extra">Add list
                    </button>
                    <button onClick={() => setForm(false)} className="cancel-btn" type="button">X</button>
                </div>
            </div>}
        </div>)
}