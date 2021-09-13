import React, { Component } from 'react'

export default class List extends Component {

   render() {
      const {users,isFirst,isLoading,err}=this.props.users
      if(isFirst){
         return <h2>欢迎使用</h2>
      }
      else if(isLoading){
         return <h2>加载中 请稍后</h2>
      }
      else if(err.length > 0 ){
         return <h2>发生错误 请刷新页面重试{err}</h2>
      }
      else{
      return (
         <div className="row">
            {
              users.map((userObj)=>{
                  return (
                     <div key={userObj.id} className="card">
                     <a href={userObj.html_url} target="_blank"  rel="noreferrer">
                        <img alt="avatar" src={userObj.avatar_url} style={{ width: '100px' }} />
                     </a>
                     <p className="card-text">{userObj.login}</p>
                  </div>
                  )
               })
            }
        </div>
      )
         }
   }
}
