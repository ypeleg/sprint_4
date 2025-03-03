

import { useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { updateBoard } from "../store/store"
import { useEffect, useRef, useState } from "react"


export function MoveListForm({ header, group, onSetMoveList, onSetGroupEdit }) {

    const board = useSelector(state => state.boardModule.board)
    const boards = useSelector(state => state.boardModule.boards)

    const [pos, setPos] = useState(0)
    const [selectedBoard, setSelectedBoard] = useState(board)
    const [showBoardSelect, SetBoardSelect] = useState(false)
    const [showPositionSelect, setPostionSelect] = useState(false)

    const navgite = useNavigate()

    const inset = `auto ${header.left }px auto ${header.top}px`

    function onSetBoardSelect() {
        SetBoardSelect(!showBoardSelect)
    }

    function onSetPostionSelect(){
        setPostionSelect(!showPositionSelect)
    }

    function onChangeBoard(id) {
        const newBoard = boards.find(brd => brd._id === id)
        setSelectedBoard(prevboard => (newBoard))
        onSetBoardSelect()
    }

    function onchangePos(idx) {
        setPos(idx)
        onSetPostionSelect()
    }

    async function move() {
        const idx = board.groups.findIndex(grp => grp.id == group.id)
        board.groups.splice(idx, 1)
        selectedBoard.groups.splice(pos, 0, group)
        await updateBoard(board)
        await updateBoard(selectedBoard)
        navgite(`/${selectedBoard._id}`)
        onSetMoveList()
    }

    return (

        <div className="move-list-form" style={{ inset }}>
            <div className="header">
                <button onClick={() => { onSetGroupEdit(); onSetMoveList() }}>

                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="title">MoveList list</span>
                <button onClick={onSetMoveList} > <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
            </div>
            <section className="main">
                <span>board</span>
                < div onClick={onSetBoardSelect} className={`select ${showBoardSelect? 'active':''}`} name="board" id="">

                    {selectedBoard.title}
                    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M8.292 10.293a1.01 1.01 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0"></path></svg>
                </div>
                {showBoardSelect && <div className="options">
                    <span className="options-head">Trello workspace</span>
                    {boards.map((brd, idx) => {
                        return (
                            <div onClick={() => onChangeBoard(brd._id)} className={`option ${(brd._id === selectedBoard._id) ? 'active' : ''}`} key={idx} value={brd._id} defaultValue={(brd._id === selectedBoard._id)}>
                                {`${brd.title} `}{(brd._id === board._id)? <span className="current">(Current)</span>:''}
                            </div>
                        )
                    })}
                </div>}
                <span>postion</span>
                <div onClick={onSetPostionSelect} className={`select ${showPositionSelect? 'active':''}`} name="postion" id="postion">
                    {pos + 1}
                    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path fill="currentcolor" fill-rule="evenodd" d="M8.292 10.293a1.01 1.01 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0"></path></svg>
                </div>
               {showPositionSelect&& <div className="options">
                    {selectedBoard.groups.map((grp, index) => {
                        return (
                            <div className={`option ${(index === pos) ? 'active' : ''}`} onClick={() => { onchangePos(index) }} key={index}  >{`${index + 1}`}</div>
                        )
                    })}
                </div>}

                <button onClick={move} className="move">Move</button>
            </section>
        </div>
    )
}