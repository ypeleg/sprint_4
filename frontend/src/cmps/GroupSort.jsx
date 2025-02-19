import { useSelector } from "react-redux"
import { updateBoard } from "../store/store"



export function GroupSort({ onSetGroupEdit, onSetSort, group,header }) {
    const board = useSelector(state => state.boardModule.board)
       const inset = `auto ${header.left }px auto ${header.top}px`
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
        <div className="copy-list-form" style={{ inset,minHeight:'163px' }}>
            <div className="header">
                <button onClick={() => { onSetSort(); onSetGroupEdit() }}>

                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="title">Move all cards in list</span>
                <button onClick={onSetSort}> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
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