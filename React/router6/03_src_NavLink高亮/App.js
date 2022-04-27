import React from 'react'
import { Link, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
export default function App() {
  let computedClassName = ({ isActive }) => {
    return isActive ? 'list-group-item xwwwb' : 'list-group-item'
  }
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header"><h2>React Router Demo</h2></div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 实现活动态的高亮 */}
            <NavLink className={({ isActive }) => { return isActive ? 'list-group-item xwwwb' : 'list-group-item' }} to="/about">About</NavLink>
            <NavLink className={computedClassName} to="/home">Home</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Routes>
                <Route path="/home" element={<Home />} />
                {/* <Route caseSensitive path="/ABOUT" element={<About />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Navigate to={"/about"} />} />
                {/* <Route path="/" element={<About />} />  */}
                {/* 不使用Navigate的话 可以渲染出About 但是不会有高亮效果 因为没有NavLink适配 */}
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
