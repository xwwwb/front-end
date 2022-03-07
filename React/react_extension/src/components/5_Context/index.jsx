import React, { Component } from "react"

const UserNameContext = React.createContext()

export default class A extends Component {
	state = { username: "tom" }
	render() {
		return (
			<div>
				<h3>我是A组件</h3>
				<h4>我的用户名是{this.state.username}</h4>
				<UserNameContext.Provider
					value={{ username: this.state.username, age: 18 }}
				>
					<B />
				</UserNameContext.Provider>
			</div>
		)
	}
}
class B extends Component {
	render() {
		return (
			<div>
				<div>我是B组件</div>
				<h4>我从A组件接收到的用户名是？？</h4>
				<C />
			</div>
		)
	}
}

class C extends Component {
	// 声明一下
	static contextType = UserNameContext
	render() {
		console.log(this)
		return (
			<div>
				<div>我是C 组件</div>
				<h4>
					我从A组件接收到的用户名是{this.context.username}
					{this.context.age}
					<D/>
				</h4>
			</div>
		)
	}
}

function D() {
	return (
		<div>
			<div>我是D 组件</div>
			<h4>
				我从A组件接收到的用户名是
				<UserNameContext.Consumer>
					{(value) => {
						return `${value.username},年龄是${value.age}`
					}}
				</UserNameContext.Consumer>
			</h4>
		</div>
	)
}
