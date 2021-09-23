import React, { Component } from 'react'

export default class MsgDetail extends Component {
  render() {
    console.log("@",this)
    const {id,title}=this.props.match.params
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>xx</li>
        </ul>
      </div>
    )
  }
}
