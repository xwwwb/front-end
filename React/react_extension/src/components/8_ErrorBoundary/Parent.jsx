import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {
  state = {
    hasError: '' // 用于标识子组件是否产生错误
  }
  // 当parent的子组件出现报错的时候 会触发getderivedstatefromerror调用 并携带错误信息
  static getDerivedStateFromError(error) {
    console.log(error)
    return { hasError: error }
  }
  render() {
    return (
      <div>
        {this.state.hasError ? <h2>当前网络不稳定 稍后再试</h2> : <Child />}
      </div>
    )
  }
}
