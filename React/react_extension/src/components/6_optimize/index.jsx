import React, { Component } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <h3>我是父组件</h3>
        <Child/>
      </div>
    )
  }
}


class Child extends Component {
  render() {
    return (
      <div>
        
      <h3>我是子组件</h3>
      </div>
    )
  }
}
