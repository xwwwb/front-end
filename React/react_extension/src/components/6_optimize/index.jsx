import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  state = { carName: '奔驰' }
  changeCar = () => {
    this.setState({
      carName: '宝马'
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps', nextProps, 'nextState', nextState)
    console.log('目前的state', this.state, '目前的props', this.props)
    console.log("用===比较", this.state === nextState, '用==比较', this.state == nextState, '都为false 这里要写上属性名字 xxx.carName这种')
    if (this.state.carName !== nextState.carName) {
      return true
    } else {
      return false
    }
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
