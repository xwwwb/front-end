/*
该文件专门用于暴露一个store对象 整个应用只有一个store对象
*/

import {createStore} from 'redux'
// 引入createStore专门用于创建redux中最核心的store对象
import countReducer from './count_reducer'
//引入为Count组件服务的reducer

export default createStore(countReducer)
