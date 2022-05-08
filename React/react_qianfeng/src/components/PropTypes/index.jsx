import React, { Component } from "react"
import PropTypes from "prop-types"
class Index extends Component {
	render() {
		console.log(this)
		return <div>index</div>
	}
}
// 这是什么写法
Index.propTypes = {
	a: PropTypes.string.isRequired,
}
export default class App extends Component {
	render() {
		return <Index a="123" />
	}
}

console.log(Index)
