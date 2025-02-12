

// import { CarList } from '../cmps/CarList'
// import { useState, useEffect } from 'react'
// import { BoardList } from '../cmps/GroupList'


import { useSelector } from "react-redux"
import React, { useRef, useEffect, useState } from "react"


import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"


import { BoradHeader } from "../cmps/BoardHeader";
import { GroupList } from "../cmps/GroupList";
import { SideBar } from "../cmps/SideBar";

export function BoardDetails() {

    const boards = useSelector(state => state.boardModule.boards)    

    const [boardToShow, setBoardToShow] = useState()    

    useEffect( () => {        
        console.log(boards.length)
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

    if (!boardToShow) return (<>Loading..</>)
    return (
        <div className="everything">
            <header>
                
                <nav className="flex-space-between center-vertical">

                    <div className="just-flex just-flex-more center-vertical">
                        {/* <button className="hamburger nav-highlight-hint">☰</button> */}
                        <div className="logo nav-highlight-hint">
                            <img className="dots" src="dots.svg" />
                        </div>
                        <div className="logo nav-highlight-hint">
                            <img className="main-logo" src="logo-not-moving.gif" />
                        </div>

                        <div className="dropdown-menu nav-highlight-hint">
                            <span>Workspace</span>
                            <i className="fa-regular fa-chevron-down"></i>
                        </div>

                        <div className="dropdown-menu nav-highlight-hint">
                            <span>Recent</span>
                            <i className="fa-regular fa-chevron-down"></i>
                        </div>

                        <div className="dropdown-menu nav-highlight-hint">
                            <span>Starred</span>
                            <i className="fa-regular fa-chevron-down"></i>
                        </div>

                        <div className="dropdown-menu nav-highlight-hint">
                            <span>More</span>
                            <i className="fa-regular fa-chevron-down"></i>
                        </div>

                        <div className="dropdown-menu nav-highlight-hint">
                            <i className="fa-regular fa-plus"></i>
                        </div>
                    </div>
                    <div className="just-flex">
                        
                         {/* <pre>{JSON.stringify(boardToShow, null, 4)}</pre> */}

                        <button>5 days left</button>
                        <input placeholder="     Search" />
                        <i className="bell">bellicon</i>
                        <i className="info">?</i>
                        <div className="user"></div>
                    </div>
                </nav>
            </header>
            <main className="main-layout">

                <SideBar />
                <section className="board-display">
                    <BoradHeader />
                    <GroupList groups={boardToShow.groups} />
                </section>

            </main>
        </div>
    )
}