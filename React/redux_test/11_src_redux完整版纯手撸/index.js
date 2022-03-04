import ReactDOM from "react-dom"
// 这里的ReactDOM 是默认暴露
import App from "./App"
import store from "./redux/store"

ReactDOM.render(<App />, document.getElementById("root"))

// 发布订阅 store变化 就重新渲染
store.subscribe(() => {
	ReactDOM.render(<App />, document.getElementById("root"))
})
