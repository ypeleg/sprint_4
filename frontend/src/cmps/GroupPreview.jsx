import { TaskList } from "./TaskList"
import { useState } from "react"
import { getEmptyTask, loadBoard, updateBoard } from "../store/store"
import { useSelector } from "react-redux"

export function GroupPreview({ currentBoard, onLoadTask, group }){
 const [showForm,setShowForm] = useState(false)
 function onSetShowForm(){
    setShowForm(!showForm)
 }
   
return(


    <div className="list base-components-list"
         style={{
             backgroundColor: group.style?.backgroundColor || '',
             color: group.style?.color || '#172b4d'
         }}
    >
        {/*<pre>{JSON.stringify(group.style, null, 4)}</pre>*/}
        <div className="list-header just-flex">
                        <span

                            style={{
                                color: group.style?.color || '#172b4d'
                            }}

                        >{group.title}</span>
            <div className="group-list-headr-btns"

                 style={{
                     color: group.style?.color || '#172b4d'
                 }}

            >
                <i className="fa-regular fa-arrows-h"></i>
                <i className="fa-regular fa-ellipsis-h"></i>
            </div>
        </div>

        <TaskList currentBoard={currentBoard} currentGroup={group} onLoadTask={onLoadTask} onSetShowForm={onSetShowForm} showForm={showForm} group={group}/>

        {!showForm &&
            <div className="group-list-footer"
                 style={{
                     color: group.style?.color || '#172b4d'
                 }}
            >
                <button className="add-card-btn" onClick={onSetShowForm}
                        style={{
                            color: group.style?.color || '#172b4d'
                        }}
                ><i className="fa-regular fa-plus"></i> Add a card</button>
                <button className="create-from-template-btn"
                        style={{
                            color: group.style?.color || '#44546f'
                        }}
                ><i className="fa-regular fa-vector-square"                        style={{
                    color: group.style?.color || '#44546f'
                }}></i></button>
            </div>}

    </div>
)


}