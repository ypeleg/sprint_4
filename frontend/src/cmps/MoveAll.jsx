import { useSelector } from "react-redux";
import { updateBoard } from "../store/store";



export function MoveAll({header,onSetMoveAll,onSetGroupEdit,group}){
    const board = useSelector(state => state.boardModule.board)
    const loc = header.getBoundingClientRect()
    const inset = `${loc.top}px auto auto ${loc.right}px`

    function Movetasks({target}){
        const idx = board.groups.findIndex(grp => grp.id === target.value)
        const tasks = [...group.tasks]
        group.tasks = []
        board.groups[idx].tasks = [ ...board.groups[idx].tasks,...tasks]
        updateBoard(board)
        onSetMoveAll()
    }

    return (
        <div className="copy-list-form" style={{ inset }}>
            <div className="header">
                <button onClick={() => { onSetMoveAll(); onSetGroupEdit() }}>

                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <span className="title">Move all cards in list</span>
                <button onClick={onSetMoveAll}>X</button>
            </div>
            <div className="groups">
                {board.groups.map(grp=>{
                    return <button onClick={Movetasks} value={grp.id} disabled={(grp.id === group.id)? true:false}>{grp.title}</button>
                })}
            </div>
        </div>
    )
}