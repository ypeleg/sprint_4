import React from 'react';


export function NavBarPageIndex() {
  return (
    <nav className="home-left-side-bar-container">
      <div className='menu'>

        <div>
          <button className=" fa-solid fa-table side-btn boards">Boards</button>
        </div>
        <div>
          <button className="fa-solid fa-calendar side-btn templates">Templates</button>
        </div>
        <div>
          <button className="fa-solid fa-house side-btn home">Home</button>
        </div>
      </div>

      <div className="submenu">
        <div className="menu-item">
          <button className="side-btn">
            <i className="fa-solid fa-briefcase"></i> Getting Started <span className="badge">5</span>
          </button>
        </div>
        <div className="menu-item active">
          <button className="side-btn">
            <i className="fa-solid fa-table-columns"></i> Boards
          </button>
        </div>
        <div className="menu-item">
          <button className="side-btn">
            <i className="fa-solid fa-layer-group"></i> Collections
          </button>
        </div>
        <div className="menu-item">
          <button className="side-btn">
            <i className="fa-solid fa-heart"></i> Highlights
          </button>
        </div>
        <div className="menu-item">
          <button className="side-btn">
            <i className="fa-solid fa-border-all"></i> Views
          </button>
        </div>
        <div className="menu-item">
          <button className="side-btn">
            <i className="fa-solid fa-users"></i> Members <i className="fa-solid fa-plus add-icon"></i>
          </button>
        </div>
        <div className="menu-item">
          <button className="side-btn">
            <i className="fa-solid fa-gear"></i> Settings
          </button>
        </div>
      </div>

    </nav>
  )
}