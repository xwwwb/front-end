/*
该文件专门用于暴露一个store对象 整个应用只有一个store对象
*/

import { createStore, applyMiddleware } from "redux"
// 引入createStore专门用于创建redux中最核心的store对象

import thunk from "redux-thunk"
//引入thunk用于支持异步action


import allReducer from "./reducers"

export default createStore(
	allReducer,
applyMiddleware(thunk)
)
