import React, { Component } from "react"

import {createIncrementAction,createDecrementAction } from "../../redux/count_action"
import store from "../../redux/store"
export default class Count extends Component {
	constructor(props) {
		super(props)
		this.decreament = this.decreament.bind(this)
	}

  // 这里采用api创建ref
	c = React.createRef()

	increament = () => {
		const { value } = this.c.current
		console.log(value)
		store.dispatch(createIncrementAction(value*1))
	}

	decreament = function () {
		console.log(this)
		const { value } = this.c.current
		console.log(value)
		store.dispatch(createDecrementAction(value*1))
	}

	render() {
		console.log(store)
		return (
			<div>
				<h1>当前Count为{store.getState()}</h1>
				<select ref={this.c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				&nbsp;
				<button onClick={this.increament}>+</button>
				<button onClick={this.decreament}>-</button>
			</div>
		)
	}
}
