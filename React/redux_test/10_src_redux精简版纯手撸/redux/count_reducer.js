// reducer 是一个函数 由store调用 传入一个之前的state值 一个动作和数据
const initState = 0
export default function countReducer(preState, action) {
	console.log(preState, action) // 第一次打开页面的时候 preState是undefined action是 @@init@@xxx 初始化
	const { type, value } = action
	if (preState === undefined) preState = initState
	switch (type) {
		case "increament":
			console.log(preState, value)
			return preState + value
		case "decreament":
			return preState - value
		default:
			return preState
	}
}
