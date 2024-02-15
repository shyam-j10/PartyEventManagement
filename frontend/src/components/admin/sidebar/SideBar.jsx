import React from 'react'
import "./SideBar.css"

export default function SideBar() {
  return (
    <div>
        <div className='admin-nav'>
            <h1>ADMIN DASHBOARD</h1>
        </div>
      <div className="sidebar">
      <div className="sidebar-header">
        <h3>DASHBOARD </h3>
      </div>
      <ul className="sidebar-menu">
      <div class="dropdown">
    <button class="dropbtn">Venues</button>
        <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
  </div>
</div>
      </ul>
      <ul className="sidebar-menu">
      <div class="dropdown">
    <button class="dropbtn">Users</button>
        <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
  </div>
</div>
      </ul>
      <ul className="sidebar-menu">
      <div class="dropdown">
    <button class="dropbtn">Parties</button>
        <div class="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
  </div>
</div>
      </ul>
    </div>
    </div>
  )
}
