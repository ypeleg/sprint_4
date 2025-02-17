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
       
        const newBoard = boards.find(brd => brd._id ===  target.value)
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
            <button onClick={onSetMoveList} > <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12Z" fill="currentColor"></path></svg></button>
        </div>
        <section className="main">
                <span>board</span>
                <select onChange={onChangeBoard} className="test" name="board" id="">
          

                <option  className="trello" disabled value="">Trelllo Workspace</option>
                    
                    {boards.map((brd,idx) =>{
                        return(
                            <option key={idx} value={brd._id} defaultValue={(brd._id===selectedBoard._id)? true:false} >{brd.title}</option>
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