import React, { Component } from "react"

export default class index extends Component {
	state = {
		input: "",
	}
	handleChanges = e => {
		this.setState({
			input: e.target.value,
		})
	}

	render() {
		console.log("render")
		return (
			<div>
				<input type="text" onChange={this.handleChanges} value={this.state.input} />
				<Child />
			</div>
		)
	}
}

class Child extends Component {
	render() {
		console.log("child render")
		return <div>我是子组件</div>
	}
}
