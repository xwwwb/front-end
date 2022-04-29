import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="messages">Messages</NavLink>
          </li>
        </ul>
        {/* 指定路由组件的呈现位置 */}
        <Outlet />
      </div>
    </div>
  )
}
