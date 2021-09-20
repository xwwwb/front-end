import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log("Home---props:",this.props)
    return (
      <h3>我是About内容</h3>
    )
  }
}
