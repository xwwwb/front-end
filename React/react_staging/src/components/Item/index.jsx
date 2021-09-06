import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
   state = { mouse: false }
   handleMouse = (flag) => {
      return () => {
         this.setState({ mouse: flag })
      }
   }
   handleCheck=(id)=>{
      return (event)=>{
         const {checked}=event.target
         this.props.updateTodo(id,checked)
      }
   }
   render() {
      const { id,name, done } = this.props
      return (
         <li style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
            <label>
               <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
               <span>{name}</span>
            </label>
            <button className="btn btn-danger" style={{ display: this.state.mouse ? "block" : "none" }}>删除</button>
         </li>
      )
   }
}
