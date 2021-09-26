import React, { Component } from 'react'
// import qs from 'querystring'
export default class MsgDetail extends Component {
  render() {
    console.log("@",this)
    // const {id,title}=this.props.match.params

    // const {search} = this.props.location
    // 使用slice是为了截掉问号
    // const {id,title}=qs.parse(search.slice(1))
    
    const {id,title} = this.props.location.state || {}
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
