

import { useSelector } from "react-redux"
import { updateBoard } from "../store/store"


export function MinimaizedGRoup({ group, style, getGroupRef }) {
    const boardToShow = useSelector(state => state.boardModule.board)
    function openGroup() {
        group.isMinimaized = false
        updateBoard(boardToShow)
    }

    return (
        <div key={group.id} onClick={openGroup} className=" minigroup" style={{ ...style }} ref = {getGroupRef(group.id)}>
            <div className="content">
                <span className="mini-icon"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" d="M18.062 11 16.5 9.914A1 1 0 1 1 17.914 8.5l2.616 2.616c.28.167.47.5.47.884s-.19.717-.47.884L17.914 15.5a1 1 0 0 1-1.414-1.414L18.062 13h-3.68c-.487 0-.882-.448-.882-1s.395-1 .882-1zM3.47 12.884c-.28-.167-.47-.5-.47-.884s.19-.717.47-.884L6.086 8.5A1 1 0 0 1 7.5 9.914L5.938 11h3.68c.487 0 .882.448.882 1s-.395 1-.882 1h-3.68L7.5 14.086A1 1 0 0 1 6.086 15.5z"></path></svg></span>
                <p className="mini-tilte">{group.title}</p>
                <span className="length">{group.tasks.length}</span>
            </div>

        </div>
    )
}