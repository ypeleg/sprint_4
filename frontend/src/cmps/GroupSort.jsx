import { useSelector } from "react-redux"
import { updateBoard } from "../store/store"



export function GroupSort({ onSetGroupEdit, onSetSort, group,header }) {
    const board = useSelector(state => state.boardModule.board)
    const loc = header.getBoundingClientRect()
    const inset = `${loc.top}px auto auto ${loc.right}px`
    function sortyByDate({target}){
       const dir =+target.value 
       
        group.tasks.sort((t1,t2)=> {
            const d1 = new Date(t1.createdAt)
            const d2= new Date(t2.createdAt)
            return (d1.getTime() - d2.getTime()) * dir
        })
        updateBoard(board)
        onSetSort()
    }
    function sortByDueDate(){
        group.tasks.sort((t1,t2)=> {
            const d1 = new Date(t1.dueDate)
            const d2= new Date(t2.dueDate)
            return (d1.getTime() - d2.getTime())
        })
        updateBoard(board)
        onSetSort()

    }
    function sortByTitle(){
        group.tasks.sort((t1,t2) => t1.title.localeCompare(t2.title))
        console.log(group.tasks)
        updateBoard(board)
        onSetSort()
    }

    return (
        <div className="copy-list-form" style={{ inset }}>
            <div className="header">
                <button onClick={() => { onSetSort(); onSetGroupEdit() }}>

                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="title">Move all cards in list</span>
                <button onClick={onSetSort}>X</button>
            </div>
            <div className="groups">

                <button value={1} onClick={sortyByDate} >Date created (newest first)</button>
                <button value={-1} onClick={sortyByDate} >Date created (oldest first)</button>
                <button onClick={sortByTitle} >Card name (alphabetically)</button>
                <button onClick={sortByDueDate}  >Due date</button>
            </div>
        </div>
    )
}