


import { useSelector } from "react-redux"
import React, { useRef, useEffect, useState } from "react"
import {addBoard, getEmptyBoard, updateBoard, removeBoard, loadBoards} from "../store/store.js"



export function DebugPage() {

    const boards = useSelector(state => state.boardModule.boards)

    useEffect(() => {


        getEmptyBoard().then(e => addBoard(e))


        // loadBoards()
        // addBoard(getEmptyBoard())

    } , [])


    return (
        <section className="actually-overflow">

            {boards.map(board => <div key={board._id}>

                <pre>{JSON.stringify(board, null, 4)}</pre>

            </div>)}

        </section>
    )

}

