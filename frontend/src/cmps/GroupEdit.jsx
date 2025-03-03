

import { useSelector } from "react-redux"
import { updateBoard } from "../store/store"
import { eventBus } from "../services/util.service.js"
import { getColorFromBackgroundColor } from "../services/data.js"


export function GroupEdit({ onSetMoveAll, group, onSetCopyList, header, onSetGroupEdit, onSetMoveList, onSetSort }) {

    const board = useSelector(state => state.boardModule.board)

    function addGroup() {
        eventBus.emit('showAddGroup', group.id)
        onSetGroupEdit()
    }

    function onSetIsWatched() {
        group.watched = !group.watched
        updateBoard(board)
    }

    const inset = `auto ${header.left }px auto ${header.top}px`

    function changeColor({ target }) {
        const backgroundColor = target.value
        if (backgroundColor) {
            const color = getColorFromBackgroundColor(backgroundColor)
            group.style.color = color
        }
        group.style.backgroundColor = backgroundColor
        updateBoard(board)
        onSetGroupEdit()
    }
    function onArchiveList() {
        const idx = board.groups.findIndex(grp => grp.id === group.id)
        board.groups.splice(idx, 1)
        onSetGroupEdit()
        updateBoard(board)
    }

    return (
        <div
            className="group-edit-container" style={{ inset }}>
            <header className="group-eddit-header">
                <p>List actions</p>
                <button onClick={onSetGroupEdit} className="close-edit"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
            </header>
            <section className="edit-options">
                <section className="first-actions">
                    <button onClick={addGroup}>Add card</button>
                    <button onClick={() => { onSetCopyList(); onSetGroupEdit() }}>Copy list</button>

                    <button onClick={() => { onSetMoveList(); onSetGroupEdit() }}>Move list</button>
                    <button onClick={(() => { onSetMoveAll(); onSetGroupEdit() })}>Move all cards in this list</button>
                    <button onClick={(() => { onSetSort(); onSetGroupEdit() })}>Sort by...</button>
                    <button onClick={onSetIsWatched} className="watch">Watch{(group.watched) && <svg width="20" height="20" role="presentation" focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.73534 12.3223C6.36105 11.9162 5.72841 11.8904 5.3223 12.2647C4.91619 12.639 4.89039 13.2716 5.26467 13.6777L8.87678 17.597C9.41431 18.1231 10.2145 18.1231 10.7111 17.6264C10.7724 17.5662 10.7724 17.5662 11.0754 17.2683C11.3699 16.9785 11.6981 16.6556 12.0516 16.3075C13.0614 15.313 14.0713 14.3169 15.014 13.3848L15.0543 13.3449C16.7291 11.6887 18.0004 10.4236 18.712 9.70223C19.0998 9.30904 19.0954 8.67589 18.7022 8.28805C18.309 7.90022 17.6759 7.90457 17.2881 8.29777C16.5843 9.01131 15.3169 10.2724 13.648 11.9228L13.6077 11.9626C12.6662 12.8937 11.6572 13.8889 10.6483 14.8825C10.3578 15.1685 10.0845 15.4375 9.83288 15.6851L6.73534 12.3223Z" fill="currentColor"></path></svg>}</button>
                </section>
                <section className="color-picker">
                    <div className="color-picker-header">
                        <span className="title">Change color list</span>
                        <span className="premium">PREMIUM</span>
                    </div>
                    <div className="colors">
                        <button value={'#baf3db'} onClick={changeColor} className="green"></button>
                        <button value={'#f8e6a0'} onClick={changeColor} className="yellow"></button>
                        <button value={'#fedec8'} onClick={changeColor} className="orange"></button>
                        <button value={'#ffd5d2'} onClick={changeColor} className="red"></button>
                        <button value={'#dfd8fd'} onClick={changeColor} className="purple"></button>
                        <button value={'#cce0ff'} onClick={changeColor} className="blue"></button>
                        <button value={'#c6edfb'} onClick={changeColor} className="teal"></button>
                        <button value={'#d3f1a7'} onClick={changeColor} className="lime"></button>
                        <button value={'#fdd0ec'} onClick={changeColor} className="magenta"></button>
                        <button value={'#f1f2f4'} onClick={changeColor} className="gray"></button>
                    </div>
                    <button onClick={changeColor} className="remove-color"> <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg> Remove color</button>
                </section>
                <button onClick={onArchiveList} className="archive">Archive this list</button>
            </section>

        </div>
    )
}