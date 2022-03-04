import { createStore, applyMiddleware } from "redux"
// applyMiddleware是用于启用开发者工具
import countReducer from "./count_reducer"

import thunk from "redux-thunk"
// 这个也是用于启用开发者工具

import { composeWithDevTools } from "redux-devtools-extension"
// 这个也是用于启用开发者工具

export default createStore(
	countReducer,
	composeWithDevTools(applyMiddleware(thunk))
)
