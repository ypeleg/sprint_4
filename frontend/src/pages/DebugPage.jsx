

import {useSelector} from "react-redux"
import React, {useRef, useEffect, useState} from "react"


import {loadBoards, getEmptyBoard, getRandomBoard, loadBoard, addBoard, updateBoard, removeBoard} from "../store/store.js"


export function DebugPage() {

    const boards = useSelector(state => state.boardModule.boards)
    const [boardToShow, setBoardToShow] = useState(null)

    useEffect(() => {
        loadBoards()
    }, [])
    
    useEffect(() => {
        if (boards.length) {

            const selectedBoard = boards[0]
            console.log('selectedBoard', selectedBoard)
            // const selectedBoard = filterBy...
            setBoardToShow(selectedBoard)
        }
    }, [boards])

    useEffect(() => {
        // getEmptyBoard().then(e => addBoard(e)).then(e => {
        // setBoardToShow(e)
        // })
        // addBoard(getRandomBoard())
        // getRandomBoard().then(e => addBoard(e)).then(e => {
        // setBoardToShow(e)
        // })

    }, [])

    if (!(boardToShow)) return (<div className="trello-loader">
        <img src="trello-loader.svg" alt=""/>
    </div>)
    return (
        <section className="actually-overflow">

            {/* {boards.length} */}
            {/* {boards.map(board => <div key={board._id}> */}

            <pre>{JSON.stringify(boardToShow, null, 4)}</pre>

            {/* </div>)} */}

        </section>
    )

}



