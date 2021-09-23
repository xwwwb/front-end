import React, { Component } from 'react'
import MsgDetail from './MsgDetail'
import { Link ,Route} from 'react-router-dom'
export default class Messages extends Component {
  state={
    messageArr:[
      {id:'01',title:'消息1'},
      {id:'02',title:'消息2'},
      {id:'03',title:'消息3'},
    ]
  }
  render() {
    const {messageArr}=this.state
    return (
      <div>
      <ul>
          {
            messageArr.map((messageObj)=>{
              return (
                <li key={messageObj.id}>
                <Link to={`/home/messages/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>
              </li>
              )
            })
          }
      </ul>
      <hr />
      <Route path="/home/messages/detail/:id/:title" component={MsgDetail}/>
    </div>
    )
  }
}
