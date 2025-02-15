import { useRef, useState } from "react"
import { GroupEdit } from "./GroupEdit"

export function GroupHeader({group}) {
    const elHeader = useRef()
    const [showGroupEdit,SetGroupEdit] = useState(false)
    function onSetGroupEdit(){
        SetGroupEdit(!showGroupEdit)
    }
    return (
        <div ref={elHeader} className="list-header just-flex">
            <span style={{ color: group.style?.color || '#172b4d' }}>{group.title}</span>
            <div className="group-list-headr-btns" style={{ color: group.style?.color || '#172b4d' }}>
                {/*<i className="fa-regular fa-arrows-h"></i>*/}
                <i className="fa-regular fa-compress-alt" style={{
                    transform: "translateY(-0px) translateX(-0px) rotate(45deg) scale(1.2) "
                }}></i>

                <i onClick={onSetGroupEdit} className="fa-regular fa-ellipsis-h"></i>
            </div>
            {showGroupEdit&&<GroupEdit group={group} onSetGroupEdit={onSetGroupEdit} header={elHeader.current}/>}
        </div>

    )
}