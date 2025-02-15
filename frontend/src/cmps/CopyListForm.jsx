import { useState } from "react";
import { useSelector } from "react-redux";
import { updateBoard } from "../store/store";



export function CopyListForm({ header, onSetCopyList, onSetGroupEdit, group }) {
    const [groupTitle, setGroupTitle] = useState(group.title)
    const board = useSelector(state => state.boardModule.board)
    const loc = header.getBoundingClientRect()
    const inset = `${loc.top}px auto auto ${loc.right}px`
    function onSetGroupTitle({ target }) {
        setGroupTitle(target.value)
    }
    function copylist() {
        const copyGroup = { ...group, title: groupTitle }
        const idx = board.groups.findIndex(grp => grp.id === group.id)
        board.groups.splice(idx, 0, copyGroup)
        updateBoard(board)
        onSetCopyList()
    }
    return (
        <div className="copy-list-form" style={{ inset }}>
            <div className="header">
                <button onClick={() => { onSetCopyList(); onSetGroupEdit() }}>

                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="title">Copy list</span>
                <button onClick={onSetCopyList}>X</button>
            </div>
            <section className="main">
                <span className="name">Name</span>
                <textarea onChange={onSetGroupTitle} value={groupTitle} name="" id=""></textarea>
                <button className="create" onClick={copylist}><span>Create list</span></button>
            </section>
        </div>
    )
}