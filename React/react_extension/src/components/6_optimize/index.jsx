import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  state = { carName: '奔驰' }
  changeCar = () => {
    this.setState({
      carName: '宝马'
    })
  }
  render() {
    console.log('parent--render')
    return (
      <div className='parent'>
        <h3>我是父组件</h3>
        <span>{this.state.carName}</span>
        <br />
        <button onClick={this.changeCar}>点我</button>
        <Child />
      </div>
    )
  }
}


class Child extends Component {
  render() {
    console.log('这里还是会child--render 即使child没有需要更新的内容')
    return (
      <div className='child'>

        <h3>我是子组件</h3>

      </div>
    )
  }
}
