import { useRef, useState } from "react"
import { GroupEdit } from "./GroupEdit"
import { CopyListForm } from "./CopyListForm"
import { MoveListForm } from "./MoveListForm"
import { MoveAll } from "./MoveAll"
import { GroupSort } from "./GroupSort"

export function GroupHeader({group}) {
    const elHeader = useRef()
    const [showGroupEdit,SetGroupEdit] = useState(false)
    const [showCopyList,setCopyList] = useState(false)
    const [showMoveList,setMoveList]  = useState(false)
    const [showMoveAll,setMoveAll] = useState(false)
    const [showSort,setSort] = useState(false)
    function onSetSort(){
        setSort(!showSort)
    }
    function onSetGroupEdit(){
        SetGroupEdit(!showGroupEdit)
    }
    function onSetCopyList(){
        setCopyList(!showCopyList)
    }
    function onSetMoveList(){
        setMoveList(!showMoveList)
    }
    function onSetMoveAll(){

        setMoveAll(!showMoveAll)
    }
    return (
        <div ref={elHeader} className="list-header just-flex">
            <span style={{ color: group.style?.color || '#172b4d' }}>{group.title}</span>
            <div className="group-list-headr-btns" style={{color: group.style?.color || '#172b4d'}}>
                {/*<i className="fa-regular fa-arrows-h"></i>*/}
                {/*<i className="fa-regular fa-compress-alt" style={{*/}
                {/*    transform: "translateY(-0px) translateX(-0px) rotate(45deg) scale(1.2) "*/}
                {/*}}></i>*/}
                {group.watched&&<svg width="16" height="16" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0006 18C7.46367 18 4.00142 13.74 4.00142 12C4.00142 9.999 7.45967 6 12.0006 6C16.3775 6 19.9988 9.973 19.9988 12C19.9988 13.74 16.5366 18 12.0006 18ZM12.0006 4C6.48003 4 2.00012 8.841 2.00012 12C2.00012 15.086 6.5771 20 12.0006 20C17.4241 20 22.0001 15.086 22.0001 12C22.0001 8.841 17.5212 4 12.0006 4ZM11.9775 13.9844C10.8745 13.9844 9.97752 13.0874 9.97752 11.9844C9.97752 10.8814 10.8745 9.9844 11.9775 9.9844C13.0805 9.9844 13.9775 10.8814 13.9775 11.9844C13.9775 13.0874 13.0805 13.9844 11.9775 13.9844ZM11.9775 7.9844C9.77152 7.9844 7.97752 9.7784 7.97752 11.9844C7.97752 14.1904 9.77152 15.9844 11.9775 15.9844C14.1835 15.9844 15.9775 14.1904 15.9775 11.9844C15.9775 9.7784 14.1835 7.9844 11.9775 7.9844Z" fill="currentColor"></path></svg>}
                <svg width="20" height="20" viewBox="0 0 24 24" role="presentation">
                    <path fill="currentcolor" d="M8.062 11 6.5 9.914A1 1 0 0 1 7.914 8.5l2.616 2.616c.28.167.47.5.47.884s-.19.717-.47.884L7.914 15.5A1 1 0 1 1 6.5 14.086L8.062 13h-3.68c-.487 0-.882-.448-.882-1s.395-1 .882-1zm5.408 1.884c-.28-.167-.47-.5-.47-.884s.19-.717.47-.884L16.086 8.5A1 1 0 0 1 17.5 9.914L15.938 11h3.68c.487 0 .882.448.882 1s-.395 1-.882 1h-3.68l1.562 1.086a1 1 0 0 1-1.414 1.414z"></path>
                </svg>
                <svg onClick={onSetGroupEdit} width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill="currentColor"></path>
                </svg>

                {/*<i onClick={onSetGroupEdit} className="fa-regular fa-ellipsis-h"></i>*/}
            </div>
            {showGroupEdit && <GroupEdit onSetSort={onSetSort} onSetMoveAll={onSetMoveAll} onSetMoveList={onSetMoveList} onSetCopyList={onSetCopyList} group={group} onSetGroupEdit={onSetGroupEdit} header={elHeader.current}/>}
            {showCopyList && <CopyListForm group={group} onSetCopyList={onSetCopyList} onSetGroupEdit={onSetGroupEdit} header={elHeader.current}/>}
            {showMoveList && <MoveListForm onSetMoveList={onSetMoveList} onSetGroupEdit={onSetGroupEdit} group={group} header={elHeader.current}/>}
            {showMoveAll&&<MoveAll  onSetMoveAll={onSetMoveAll} group={group} header={elHeader.current} onSetGroupEdit={onSetGroupEdit}/>}
            {showSort&&<GroupSort header={elHeader.current} onSetGroupEdit={onSetGroupEdit} onSetSort={onSetSort} group={group}/>}
        </div>

    )
}