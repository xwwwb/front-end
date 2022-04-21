import React, { Component, PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  state = { carName: '奔驰', stu: ['x', 'y', 'z'] }
  changeCar = () => {
    this.setState({
      carName: '宝马'
    })

    // 不能用以下写法 purecomponent底层浅比较 只对比引用地址
    // const obj = this.state
    // obj.carName = '迈巴赫'
    // console.log(obj)
    // console.log(obj === this.state)
    // this.setState(obj) //这里state会增加但是页面不会渲染
  }
  add = () => {
    const { stu } = this.state
    stu.unshift('a')
    this.setState({ stu: stu })
    // 这里也是state会变但是页面不会变
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('nextProps', nextProps, 'nextState', nextState)
  //   // console.log('目前的state', this.state, '目前的props', this.props)
  //   // console.log("用===比较", this.state === nextState, '用==比较', this.state == nextState, '都为false 这里要写上属性名字 xxx.carName这种')
  //   if (this.state.carName !== nextState.carName) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  render() {
    console.log('parent--render')
    return (
      <div className='parent'>
        <h3>我是父组件</h3>
        {this.state.stu}
        <span>{this.state.carName}</span>
        <br />
        <button onClick={this.changeCar}>点我</button>
        <button onClick={this.add}>点我加人</button>
        <Child />
      </div>
    )
  }
}


class Child extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, this.state)
  //   console.log(nextProps, nextState)
  //   if (this.props.carName === nextProps.carName) {
  //     return false
  //   } else {
  //     return true
  //   }
  // }
  render() {
    console.log('这里还是会child--render 即使child没有需要更新的内容')
    return (
      <div className='child'>

        <h3>我是子组件</h3>

      </div>
    )
  }
}
