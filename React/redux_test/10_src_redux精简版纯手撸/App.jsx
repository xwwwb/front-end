import React, { Component } from "react"
import C from "./components/Count"
// 默认暴露 可以在引入时命名
export default class App extends Component {
	render() {
		return (
			<div>
				<C />
			</div>
		)
	}
}
