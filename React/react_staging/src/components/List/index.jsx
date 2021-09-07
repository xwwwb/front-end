import React, { Component } from 'react'
import './index.css'
import Item from '../Item'
import PropTypes from 'prop-types'
export default class List extends Component {
   static propTypes= {
      todos:PropTypes.array.isRequired,
      updateTodo:PropTypes.func.isRequired,
      deleteTodo:PropTypes.func.isRequired
   }
   render() {
      const {todos,updateTodo}=this.props
      return (
         <ul className="todo-main">
            {
               todos.map((todo)=>{
                     return <Item {...todo} updateTodo={updateTodo} deleteTodo={this.props.deleteTodo} key={todo.id}/>
               })
               }
         </ul>
      )
   }
}
