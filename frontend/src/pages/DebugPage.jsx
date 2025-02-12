


import { useSelector } from "react-redux"
import React, { useRef, useEffect, useState } from "react"


import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"


export function DebugPage() {
    
    const boards = useSelector(state => state.boardModule.boards)    
    const [boardToShow, setBoardToShow] = useState()    

    useEffect( () => {
        if (boards.length) {            
            
            const selectedBoard = boards[0]
            // const selectedBoard = filterBy...
            setBoardToShow(selectedBoard)
        }
    }, [boards])
    
    useEffect(() => {       
        getEmptyBoard().then(e => addBoard(e)).then( e => {
            // setBoardToShow(e)
        })
    } , [])


    return (
        <section className="actually-overflow">

            {/* {boards.length} */}
            {/* {boards.map(board => <div key={board._id}> */}

            <pre>{JSON.stringify(boardToShow, null, 4)}</pre>

            {/* </div>)} */}

        </section>
    )

}



