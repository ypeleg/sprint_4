

import {useEffect, useRef, useState} from "react"
import {useSelector} from "react-redux"
import {getEmptyGroup, updateBoard} from "../store/store"


export function AddGroup({useDarkTextColors}) {
    const [showForm, setForm] = useState(false)
    const [group, setGroup] = useState(getEmptyGroup())
    const elTextArea  = useRef()
    const board = useSelector(state => state.boardModule.board)
    const user  =  useSelector(state => state.userModule.user)
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
            
            if(ev.key === "Enter"&&showForm){
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
    
       if(!group.title){
        setForm(false)
        return
       }
       
        const copyBoard = {...board,groups:[...board.groups,group]}
        const newActivity = {createdAt:Date.now(),byMember:{...user},group:{id:group.id,title:group.title}}
        copyBoard.activities = [newActivity,...copyBoard.activities]
        setGroup(getEmptyGroup())
        await updateBoard(copyBoard)
    }
    console.log(group)
    return (
        <div className="add-group">
            {(!showForm) ? <button onClick={() => setForm(true)} className="add-group-btn" style={{
                                            color: (useDarkTextColors? '#172b4d': 'white')
                                            }}>
                    <span className="plus"><i class="fa-regular fa-plus"></i></span>
                    Add another list
                </button> :
                <div className="add-task-form add-group-form">
                    <textarea ref={elTextArea} autoFocus onChange={handleChange} value={group.title} placeholder="Enter a title or paste a link" className="task-title" name="title" id="title"></textarea>
                    <div>
                        <button onClick={(ev) =>{onSubmit(ev); setForm(false)}} className="add-card-btn extra" >Add list</button>
                        <button onClick={() => setForm(false)} className="cancel-btn" type="button">X</button>
                    </div>
                </div>}
        </div>
    )
}