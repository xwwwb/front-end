import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    // users: [
    //   { id: '001', name: 'tom', age: 15 },
    //   { id: '001', name: 'tom', age: 15 },
    //   { id: '001', name: 'tom', age: 15 }
    // ]
    users: "ax"
  }
  render() {
    return (
      <div>
        <h3>子组件</h3>
        {
          this.state.users.map((item) => {
            return <h4 key={item.id}>{item.name}----{item.age}</h4>
          })
        }

      </div>
    )
  }
}
