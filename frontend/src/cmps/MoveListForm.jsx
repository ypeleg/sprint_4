import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { updateBoard } from "../store/store"
import { useNavigate } from "react-router"


export function MoveListForm({header,group,onSetMoveList,onSetGroupEdit}){
     const board = useSelector(state => state.boardModule.board)
     const boards = useSelector(state => state.boardModule.boards)
     const [selectedBoard,setSelectedBoard] = useState(board)
     const [pos,setPos] = useState(0)
     const navgite = useNavigate()
     const loc = header.getBoundingClientRect()
    const inset = `${loc.top}px auto auto ${loc.right}px`

    function onChangeBoard({target}){
        console.log(target)
        const newBoard = JSON.parse(target.value)
        console.log(newBoard)
        setSelectedBoard(prevboard=>({...newBoard}) )

    }
    function onchangePos({target}) {
        setPos(+target.value)
    }
    async function move(){
        const idx = board.groups.findIndex(grp => grp.id == group.id)
        board.groups.splice(idx,1)
        selectedBoard.groups.splice(pos,0,group)
        await updateBoard(board)
        await updateBoard(selectedBoard)
        navgite(`/${selectedBoard._id}`)
        onSetMoveList()
    }
    
    return(

        <div className="move-list-form" style={{ inset }}>
        <div className="header">
            <button onClick={() => { onSetGroupEdit(); onSetMoveList() }}>

                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <span className="title">MoveList list</span>
            <button onClick={onSetMoveList} >X</button>
        </div>
        <section className="main">
                <span>board</span>
                <select onChange={onChangeBoard} className="test" name="board" id="">
          

                <option  className="trello" disabled value="">Trelllo Workspace</option>
                    
                    {boards.map((brd,idx) =>{
                        return(
                            <option key={idx} value={JSON.stringify(brd)} defaultValue={(brd._id===selectedBoard._id)? true:false} >{brd.title}</option>
                        )
                    })}
                </select>
                <span>postion</span>
                <select onChange={onchangePos} name="postion" id="postion">
                    
                {selectedBoard.groups.map((grp,index) =>{
                        return(
                            <option defaultValue={(pos===index)? true:false} key={index} value={index} >{`${index+1}`}</option>
                        )
                    })}
                </select>
                <button onClick={move} className="move">Move</button>
        </section>
    </div>
    )
}