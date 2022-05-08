import React, { Component } from "react"
import BetterScroll from "@better-scroll/core"

export default class App extends Component {
	state = {
		list: [],
	}
	render() {
		return (
			<div>
				<button onClick={() => this.getData()}>click</button>
				<div className="kerwinwrapper" style={{ height: "200px", background: "yellow", overflow: "hidden" }}>
					<ul className="kerwincontent">
						{this.state.list.map(item => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			</div>
		)
	}

	getData() {
		var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15]

		this.setState(
			{
				list: list,
			},
			() => {
				console.log(this.state.list)
				console.log(document.querySelectorAll("li"))
				new BetterScroll(".kerwinwrapper")
			}
		)
		console.log("这里应该先输出")
		// 以下代码在v17的render中可用 在v18中setState在异步逻辑中也为异步 不可用 所以只要使用回调形式就行了
		// setTimeout(() => {
		// 	this.setState({
		// 		list: list,
		// 	})

		// 	console.log(this.state.list)
		// 	console.log(document.querySelectorAll("li"))
		// 	new BetterScroll(".kerwinwrapper")
		// }, 0)
	}
}
