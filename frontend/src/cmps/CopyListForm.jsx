


import {useState} from "react"
import {useSelector} from "react-redux"
import {updateBoard} from "../store/store"


export function CopyListForm({header, onSetCopyList, onSetGroupEdit, group}) {

    const [groupTitle, setGroupTitle] = useState(group.title)

    const inset = `auto ${header.left}px auto ${header.top}px`
    const board = useSelector(state => state.boardModule.board)

    function onSetGroupTitle({target}) {
        setGroupTitle(target.value)
    }

    function copylist() {
        const copyGroup = {...group, title: groupTitle}
        const idx = board.groups.findIndex(grp => grp.id === group.id)
        board.groups.splice(idx, 0, copyGroup)
        updateBoard(board)
        onSetCopyList()
    }

    return (<div className="copy-list-form" style={{inset}}>
            <div className="header">
                <button onClick={() => {
                    onSetCopyList();
                    onSetGroupEdit()
                }}>

                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="title">Copy list</span>
                <button onClick={onSetCopyList}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg>
                </button>
            </div>
            <section className="move-list">
                <span className="name">Name</span> <textarea onChange={onSetGroupTitle} value={groupTitle} name="" id=""></textarea>
                <button className="create" onClick={copylist}><span>Create list</span></button>
            </section>
        </div>)
}