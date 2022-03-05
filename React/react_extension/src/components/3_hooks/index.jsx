import React, { Component } from "react"

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
  const [name,setName] = React.useState('xwwwwwb')
	let add = () => {
		setCount(count+1)
    // 第二种传入函数写法
		// setCount(count=> count + 1)
    setName(name=>'xwwwb')
	}
	React.useEffect(()=>{
		console.log("@")
	})
	return (
		<div>
			<h1>当前求和为{count}</h1>
      {name}
			<button onClick={add}>ADD</button>
		</div>
	)
}

export default Demo2
