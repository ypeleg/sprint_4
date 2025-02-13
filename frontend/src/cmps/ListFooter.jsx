import { useState } from "react"
import { getEmptyTask, loadBoard, updateBoard } from "../store/store"
import { useSelector } from "react-redux"



export function ListFooter({onSetShowForm}) {


 
    return (
        
       <div className="group-list-footer">
            <button className="add-card-btn" onClick={onSetShowForm}><i className="fa-regular fa-plus"></i> Add a card</button>
            <button className="create-from-template-btn"><i className="fa-regular fa-vector-square"></i></button>
        </div>
            
        
    )
}