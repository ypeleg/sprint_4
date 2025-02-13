import { useEffect, useState } from "react"
import { ListFooter } from "./ListFooter"
import { TaskList } from "./TaskList"



export function GroupPreview({group}){
 const [showForm,setShowForm] = useState(false)
 function onSetShowForm(){
    setShowForm(!showForm)
 }
   
return(


     <div className="list base-components-list"
                    style={{ backgroundColor: group.style?.backgroundColor || '' }}
                >
                    <div className="list-header just-flex">
                        <span>In Progress</span>
                        <div className="group-list-headr-btns">
                            <i className="fa-regular fa-arrows-h"></i>
                            <i className="fa-regular fa-ellipsis-h"></i>
                        </div>
                    </div>

                    <TaskList onSetShowForm={onSetShowForm} showForm={showForm} group={group} />

                    {!showForm&&<ListFooter   onSetShowForm={onSetShowForm}/>}
                </div>
)


}