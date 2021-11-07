/*
  该文件是用于创建一个为Count组件服务的reducer reducer的本质是一个函数
  reducer函数会接到两个参数 分别为 之前的状态 preState 动作对象 action
  */

// 初始化 1
// const initState = 0
// function countReducer(preState=initState,action){
// 初始化 2
import { INCREMENT,DECREMENT } from "./constant"
export default function countReducer(preState,action){
  console.log(preState,action)
  if(preState === undefined) preState = 0
  // 从action对象中获取 type data
  const {type,data} = action
  switch (type){
    case INCREMENT:
      console.log("@")
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}