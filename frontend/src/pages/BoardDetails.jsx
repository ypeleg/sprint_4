

// import { CarList } from '../cmps/CarList'
// import { useState, useEffect } from 'react'
// import { BoardList } from '../cmps/GroupList'


import { useSelector } from "react-redux"
import React, { useRef, useEffect, useState } from "react"


import { loadBoards, getEmptyBoard, loadBoard, addBoard, updateBoard, removeBoard } from "../store/store.js"


import { BoradHeader } from "../cmps/BoardHeader";
import { GroupList } from "../cmps/GroupList";
import { SideBar } from "../cmps/SideBar";
import { useParams } from "react-router";
import { AppHeader } from "../cmps/AppHeader.jsx";

export function BoardDetails() {

    const boardToShow = useSelector(state => state.boardModule.board)    
    const {boardId} = useParams()
    console.log(boardId)
   

    useEffect( () => {        
       onloadboard()
        
    }, [])

    
  async function onloadboard() {
     await loadBoard(boardId)
 
  }

    if (!boardToShow) return (<>Loading..</>)
    return (
        <div className="everything">
           <AppHeader/>
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