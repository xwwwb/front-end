import React, { Component } from "react"
import xwbPropTypes from "prop-types"
class Index extends Component {
	render() {
		console.log(this)
		return <div>index</div>
	}
}

class Index2 extends Component {
	static propTypes = {
		// 也出现在constructor中
		a: xwbPropTypes.number,
	}
	static defaultProps = {
		a: 100,
	}
	state = {
		a: 1,
	}
	render() {
		console.log(this)
		return <div>index</div>
	}
}
// 这是什么写法 会出现在constructor中 类属性 不用new
Index.propTypes = {
	a: xwbPropTypes.string.isRequired,
}
export default class App extends Component {
	b = {
		a: 123,
	}
	state = {
		a: 1,
	}
	render() {
		return (
			<>
				<Index a="123" />
				<Index2 {...this.b} />
			</>
		)
	}
}
