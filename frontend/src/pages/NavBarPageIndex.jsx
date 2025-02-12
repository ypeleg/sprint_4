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

      <div class="submenu">
        <div class="menu-item">
          <button class="side-btn">
            <i class="fa-solid fa-briefcase"></i> Getting Started <span class="badge">5</span>
          </button>
        </div>
        <div class="menu-item active">
          <button class="side-btn">
            <i class="fa-solid fa-table-columns"></i> Boards
          </button>
        </div>
        <div class="menu-item">
          <button class="side-btn">
            <i class="fa-solid fa-layer-group"></i> Collections
          </button>
        </div>
        <div class="menu-item">
          <button class="side-btn">
            <i class="fa-solid fa-heart"></i> Highlights
          </button>
        </div>
        <div class="menu-item">
          <button class="side-btn">
            <i class="fa-solid fa-border-all"></i> Views
          </button>
        </div>
        <div class="menu-item">
          <button class="side-btn">
            <i class="fa-solid fa-users"></i> Members <i class="fa-solid fa-plus add-icon"></i>
          </button>
        </div>
        <div class="menu-item">
          <button class="side-btn">
            <i class="fa-solid fa-gear"></i> Settings
          </button>
        </div>
      </div>

    </nav>
  )
}