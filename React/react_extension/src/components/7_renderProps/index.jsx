import React, { Component } from 'react'
import './index.css'
export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>我是parent组件</h3>
        {/* <A>Hello</A> */}
        <A render={(name) => <B name={name} />} />
      </div>
    )
  }
}

class A extends Component {
  state = { name: 'tom' }
  render() {
    console.log(this.props)
    return (
      <div className='child'>
        <h3 >我是A组件
        </h3>

        {this.props.render(this.state.name)}

      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child_2'>
        <h3>我是B组件</h3>
        {this.props.name}
      </div>
    )
  }
}