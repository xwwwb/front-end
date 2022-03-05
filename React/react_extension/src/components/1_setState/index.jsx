import React, { Component } from "react"

export default class Demo extends Component {
	state = { count: 0 }
	add = () => {
		const { count } = this.state
		// 对象式的setState
		this.setState({ count: count + 1 }, () => {
			console.log("这里是setState的回调函数", this.state.count)
		})
		console.log("setState调完后引起的后续动作是异步的", this.state.count)
	}
	_add = () => {
		this.setState((state, props) => {
			console.log("函数式的setState", state, props)
			return {
				count: state.count + 1,
			}
		})

    // 简写版本
		// this.setState((state) => ({count: state.count + 1,}))
	}
	render() {
		return (
			<div>
				<h1>当前求和为{this.state.count}</h1>
				<button onClick={this.add}>点我加一</button>
				<button onClick={this._add}>点我加一</button>
			</div>
		)
	}
}
