import React, { Component } from "react"
import Count from "./containers/Count" //引入的是容器组件
import Person from "./containers/Person"
export default class App extends Component {
	render() {
		return (
			<div>
				<Count />
				<hr />
				<Person />
			</div>
		)
	}
}
