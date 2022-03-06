import React, { Component } from "react"
import ReactDOM from "react-dom"
//类式组件
class Demo extends Component {
	state = {
		count: 0,
	}
	add = () => {
		this.setState((state, props) => ({
			count: state.count + 1,
		}))
	}
	render() {
		console.log(this.props.children)
		return (
			<div>
				<h2>当前求和为{this.state.count}</h2>
				<button onClick={this.add}>点我加一</button>
			</div>
		)
	}
}

function Demo2() {
	const [count, setCount] = React.useState(0)
	const [name, setName] = React.useState("xwwwwwb")
	let add = () => {
		setCount(count + 1)
		// 第二种传入函数写法
		setCount((count) => count + 1)
	}
	React.useEffect(() => {
		console.log("@")
	}, [count])
	let changeName = () => {
		setName((name) => "xwwwb")
	}

	React.useEffect(() => {
		let timer = setInterval(() => {
			//https://zh-hans.reactjs.org/docs/hooks-faq.html#what-can-i-do-if-my-effect-dependencies-change-too-often
			 setCount((count) => count + 1)
			// setCount(count+1)
		}, 1000)
		return ()=>{
			clearInterval(timer)
		}
	}, [])

	function unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}
	const myRef = React.useRef()
	let show = ()=>{
		alert(myRef.current.value)
	}
	return (
		<div>
			<h1>当前求和为{count}</h1>
			{name}
			<input ref={myRef} type="text" name="" id="" />
			<button onClick={add}>ADD</button>
			<button onClick={changeName}>changeName</button>
			<button onClick={unmount}>卸载组件</button>
			<button onClick={show}>点我提示数据</button>
		</div>
	)
}

export default Demo2
