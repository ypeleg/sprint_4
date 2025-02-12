
import { useState, useEffect } from 'react'
import { AppHeader } from '../cmps/AppHeader.jsx'
import { NavBarPageIndex } from './NavBarPageIndex.jsx'

export function BoardIndex() {
  return (
    <>
      <AppHeader />

      <div className="home-container">

        <NavBarPageIndex />

        <div className="all-boards">
          <div className="category-container">
            <div className="board-logo">T</div>
            <div className="description-container">
              <h2>Trello Workspaces <span>
                <button className='fa-solid fa-pen'>
                </button></span></h2>
              <h3>Premium <span>🔒</span> Private</h3>
            </div>
          </div>

          <section className='star-boards'>
            <h3> <span className="fa-solid fa-user"></span> Your boards</h3>
            <section className="board-list">

              <article className="board-preview">
                <h4>Rom's project</h4>
              </article>

            </section>
          </section>

          <section className='my-boards'>
            <h3> <span className="fa-solid fa-user"></span>Your boards</h3>
            <section className="board-list">
              <article className="board-preview">
                <h4>Simple project</h4>
              </article>
              <article className="board-preview" style={{ backgroundColor: 'red' }}>
                <h4>Tal's project</h4>
              </article>
              <article class="board-preview create-board">
                <h4>Create new board</h4>
              </article>

            </section>
          </section>
        </div>


      </div>

    </>)
}