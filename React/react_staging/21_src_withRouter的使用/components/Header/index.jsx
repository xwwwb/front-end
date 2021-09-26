import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
  // 无法使用 因为这是普通组件 props默认为空
  back = () => {
    this.props.history.goBack()
  }
  forward = () => {
    this.props.history.goForward()
  }
  go = () => {
    this.props.history.go(-2)
  }
  render() {
    console.log("Header---props:",this.props)
    return (
      <div className="page-header"><h2>React Router Demo</h2>
      <button onClick={this.back}>回退</button>
        <button onClick={this.forward}>前进</button>
        <button onClick={this.go}>后退2个</button>
      </div>
    )
  }
}
// withRouter可以传入一个普通组件然后在其身上加入路由组件所特有的API
// 其返回值是一个新组件
export default withRouter(Header)