import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
export default class List extends Component {
   
   render() {
      const {todos,updateTodo}=this.props
      return (
         <ul className="todo-main">
            {
               todos.map((todo)=>{
                     return <Item {...todo} updateTodo={updateTodo} key={todo.id}/>
               })
               }
         </ul>
      )
   }
}
