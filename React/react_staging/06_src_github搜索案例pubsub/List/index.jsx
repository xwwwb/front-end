import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {
	state={
		users:[],
		isFirst:true,
		isLoading:false,
		err:''
	}

	componentDidMount(){
		this.token=PubSub.subscribe('getdata',(msg,data)=>{
			console.log(msg,data)
			this.setState(data)
		})
	}
	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}
	render() {
	
		const {users,isFirst,isLoading,err}=this.state
		console.log("状态更新了",users,isFirst,isLoading,err)
		if(isFirst){
			return <h2>欢迎使用</h2>
		}
		else if(isLoading){
			return <h2>加载中 请稍后</h2>
		}
		else if(err.length > 0 ){
			return <h2>发生错误{err}</h2>
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
