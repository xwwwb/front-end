import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default class App extends Component {
   //状态在哪里 操作状态的方法就在哪里
   state = {
      todos: [

         { id: "001", name: '吃饭', done: true },
         { id: "002", name: '睡觉', done: false },
         { id: "003", name: '写代码', done: true },
      ]
   }
   add = (value) => {
      let id = nanoid()
      let todo = { id: id, name: value, done: false }
      this.setState({ todos: [todo, ...this.state.todos] })
   }

   updateTodo = (id, done) => {
      const { todos } = this.state
      const newTodos = todos.map((todo) => {
         if (todo.id === id)
            return { ...todo, done: done }
         else return todo
      }
      )
      this.setState({todos:newTodos})
   }

   render() {
      const { todos } = this.state
      return (
         <div>
            <div className="todo-container">
               <div className="todo-wrap">
                  <Header add={this.add} />
                  <List updateTodo={this.updateTodo} todos={todos} />
                  <Footer />
               </div>
            </div>
         </div>
      )
   }
}
