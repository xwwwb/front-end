import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class MyNavLink extends Component {
  render() {
  console.log(this.props)
    return (
      // NavLink中的children属性直接指派标签名 所以直接自闭和 {...this.props}带有children属性
      <NavLink activeClassName="active demo" className="list-group-item" {...this.props}/>
    )
  }
}
