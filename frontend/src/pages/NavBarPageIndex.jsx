

import React from 'react';


export function NavBarPageIndex() {
  return (
    <nav className="home-left-side-bar-container">
      <div className='menu'>

        <div>
          <button className=" fa-solid fa-table side-btn boards active">Boards</button>
        </div>
        <div>
          <button className="fa-solid fa-calendar side-btn templates">Templates</button>
        </div>
        <div>
          <button className="fa-solid fa-house side-btn ">Home</button>
        </div>
      </div>

      <div>Workspace</div>
      <div className="worksapce-sub-title">

        <div style={{ display: 'flex' }}>

          <div className="board-logo">T</div>
          <div className="near-logo">
            <div style={{ fontWeight: 500 }}>Roillo Workspace</div>
          </div>

        </div>
        <div>
          <div className="arrow fa-regular fa-angle-up"></div>
        </div>
      </div>

      <div className="submenu">
        <div className="menu-item">
          <button className="workspace-side-btn">
            <i className="fa-solid fa-briefcase"></i> Getting Started
            <div className="num-badge">5</div>
          </button>
        </div>
        <div className="menu-item">
          <button className="workspace-side-btn">
            <i className="fa-solid fa-table"></i> Boards
          </button>
        </div>
        <div className="menu-item">
          <button className="workspace-side-btn">
            <i className="fa-solid fa-layer-group"></i> Collections
          </button>
        </div>
        <div className="menu-item">
          <button className="workspace-side-btn">
            <i className="fa-solid fa-heart"></i> Highlights
          </button>
        </div>
        <div className="menu-item">
          <button className="workspace-side-btn">
            <i className="fa-solid fa-border-all"></i> Views
          </button>
        </div>
        <div className="menu-item">
          <button className="workspace-side-btn">
            <i className="fa-solid fa-users"></i> Members
          </button>
        </div>
        <div className="menu-item">
          <button className="workspace-side-btn">
            <i className="fa-solid fa-circle"></i> Settings
          </button>
        </div>
      </div>

    </nav>
  )
}