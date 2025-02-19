

import { useSelector } from "react-redux"
import { BoardList } from './BoardList.jsx'
import { AppHeader } from '../cmps/AppHeader.jsx'
import { NavBarPageIndex } from './NavBarPageIndex.jsx'
import React, { useRef, useEffect, useState } from "react"
import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"
import { getFirstName } from '../services/util.service.js'
import { MoveLeft } from "lucide-react"

export function BoardIndex() {

    const boards = useSelector(state => state.boardModule.boards)
    const loggedUser = useSelector(state => state.userModule.user)
    let userFirstName = 'guest'
    try {
        userFirstName = getFirstName(loggedUser.fullname)
    } catch {

    }

    // console.log(boards);

    useEffect(() => {
        loadBoards()
    }, [])

    return (
        <>
            <AppHeader />
            <div className="home-container">
                <NavBarPageIndex />

                <div className="all-boards">
                    <div className="category-container">
                        <div className="board-logo-large">{userFirstName.charAt(0)}</div>
                        <div className="description-container">
                            <div className="edit-workspace">
                                <h2>{`${userFirstName}'s Workspace`}</h2>
                            </div>
                            <div style={{ display: 'flex', gap: 6, fontSize: 12, color: '#44546f' }}>
                                <span style={{ marginBlockEnd: 1 }}>Premium </span>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="lock.svg" /> Private
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className='star-boards'>
                        {(boards.filter(board => board.isStarred).length !== 0) &&
                            <div>
                                <h3><span className="fa-solid fa-user"></span> Starred boards</h3>
                                <BoardList boards={boards.filter(board => board.isStarred)} />
                            </div>
                        }

                    </section>
                    <section className='my-boards'>
                        <h3><span className="fa-solid fa-user" style={{ marginLeft: 5 }}></span>Your boards</h3>
                        <BoardList boards={boards} addBoard={true} />
                    </section>
                </div>
            </div>
        </>)
}













