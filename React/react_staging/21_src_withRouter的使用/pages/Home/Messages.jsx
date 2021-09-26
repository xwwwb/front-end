import React, { Component } from 'react'
import MsgDetail from './MsgDetail'
import { Link, Route } from 'react-router-dom'
export default class Messages extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ]
  }
  //高阶函数不使用柯里化写法
  //这里只演示replaceshow
  replaceShow = (id, title) => {
    // replace+params
    // this.props.history.replace(`/home/messages/detail/${id}/${title}`)
    // replace+query
    // this.props.history.replace(`/home/messages/detail/?id=${id}&title=${title}`)
    // replace+state
    this.props.history.replace(`/home/messages/detail/`, { id: id, title: title })
  }
  pushShow = (id, title) => {
    // replace+params
    this.props.history.push(`/home/messages/detail/${id}/${title}`)
  }

  render() {
    const { messageArr } = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((messageObj) => {
              return (
                <li key={messageObj.id}>
                  {/* param search state */}
                  <Link to={`/home/messages/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
                  &nbsp;
                  <button onClick={() => {this.pushShow(messageObj.id, messageObj.title)}}>push查看</button>
                  &nbsp;
                  <button onClick={() => {this.replaceShow(messageObj.id, messageObj.title)}}>replace查看</button>
                  {/* <Link to={`/home/messages/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link> */}
                  {/* <Link to={{pathname:'/home/messages/detail/',state:{id:messageObj.id,title:messageObj.title}}}>{messageObj.title}</Link> */}
                </li>
              )
            })
          }
        </ul>
        <hr />



        {/* param search state */}
        {/* <Route path="/home/messages/detail/:id/:title" component={MsgDetail}/> */}
        {/* <Route path="/home/messages/detail/" component={MsgDetail} /> */}
        <Route path="/home/messages/detail/" component={MsgDetail}/>

      </div>
    )
  }
}
