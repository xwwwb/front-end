import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Messages from './Messages'
import { Route,Switch,Redirect } from 'react-router'
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink  className="list-group-item" to="/home/news">News</MyNavLink>
              
            </li>
            <li>
            <MyNavLink  className="list-group-item" to="/home/messages">Messages</MyNavLink>
            </li>
          </ul>
            <Switch>
              <Route path="/home/news" component={News} />
              <Route path="/home/messages" component={Messages} />
              <Redirect to="/home/messages"/>
            </Switch>
        </div>
      </div>
    )
  }
}
