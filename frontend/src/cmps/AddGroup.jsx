

import {useEffect, useRef, useState} from "react"
import {useSelector} from "react-redux"
import {getEmptyGroup, updateBoard} from "../store/store"


export function AddGroup() {
    const [showForm, setForm] = useState(false)
    const [group, setGroup] = useState(getEmptyGroup())
    const elTextArea  = useRef()
    const board = useSelector(state => state.boardModule.board)

    function handleChange({target}) {

        const {value, name: field} = target
        console.log(value)
        setGroup(prevGroup => {
            return {...prevGroup, [field]: value}
        })
    }
    useEffect(()=>{
        if(showForm && elTextArea.current    ){
            elTextArea?.current?.focus()
            elTextArea?.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
         async function handleKey(ev){
            
            if(ev.key === "Enter"){
                ev.preventDefault()
                
               
                await onSubmit(ev)
            }
        }
        window.addEventListener("keydown",handleKey)
        return ()=>{
            window.removeEventListener("keydown",handleKey)
        } 
    },[group])


    async function onSubmit(ev) {
        
        console.log(group.title)
       
        const copyBoard = {...board,groups:[...board.groups,group]}
       
        await updateBoard(copyBoard)
        setGroup(getEmptyGroup())
    }
    console.log(group)
    return (
        <div className="add-group">
            {(!showForm) ? <button onClick={() => setForm(true)} className="add-group-btn">
                    <span className="plus"><i class="fa-regular fa-plus"></i></span>
                    Add another list
                </button> :
                <div className="add-task-form add-group-form">
                    <textarea ref={elTextArea} autoFocus onChange={handleChange} value={group.title} placeholder="Enter a title or paste a link" className="task-title" name="title" id="title"></textarea>
                    <div>
                        <button onClick={(ev) =>{onSubmit(ev); setForm(false)}} className="add-card-btn" >Add list</button>
                        <button onClick={() => setForm(false)} className="cancel-btn" type="button">X</button>
                    </div>
                </div>}
        </div>
    )
}