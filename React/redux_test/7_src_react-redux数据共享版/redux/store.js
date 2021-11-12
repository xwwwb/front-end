/*
该文件专门用于暴露一个store对象 整个应用只有一个store对象
*/

import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入createStore专门用于创建redux中最核心的store对象
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//引入为Count组件服务的reducer
import thunk from 'redux-thunk'
//引入thunk用于支持异步action

// 汇总reducer变为一个总的reducer
const allReducer = combineReducers({
  he:countReducer,
  rens:personReducer
})
export default createStore(allReducer,applyMiddleware(thunk))
