
import { useSelector } from "react-redux"
import React, { useRef, useEffect, useState } from "react"

import { BoardList } from './BoardList.jsx'
import { NavBarPageIndex } from './NavBarPageIndex.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx'

import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"




export function BoardIndex() {

    const boards = useSelector(state => state.boardModule.boards)
    console.log(boards);


    // const [boardsToShow, setBoardsToShow] = useState()

    useEffect(() => {
        loadBoards()
    }, [boards])

    // useEffect( () => {        
    //     console.log(boards.length)
    //     if (boards.length) {
    //         const selectedBoard = boards[0]
    //         // const selectedBoard = filterBy...
    //         setBoardToShow(selectedBoard)
    //     }

    // }, [boards])



    return (
        <>
            <AppHeader />

            <div className="home-container">

                <NavBarPageIndex />

                <div className="all-boards">
                    <div className="category-container">
                        <div className="board-logo-large">T</div>
                        <div className="description-container">
                            <h2>Trello Workspaces <span>
                                <button className='fa-solid fa-pen'>
                                </button></span></h2>
                            <h3>Premium <i className="fa-regular fa-lock"></i> Private</h3>
                        </div>
                    </div>


                    <section className='star-boards'>
                        <h3> <span className="fa-solid fa-star"></span> Starred boards</h3>
                        <BoardList boards={boards.filter(board => board.isStarred)} />
                    </section>
                    <section className='my-boards'>
                        <h3> <span className="fa-solid fa-user"></span>Your boards</h3>
                        <BoardList boards={boards} addBoard={true} />
                    </section>
                </div>


            </div>

        </>)
}













