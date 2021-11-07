import { DECREMENT, INCREMENT } from "./constant"
// import store from "./store"

/*
该文件专门为Count组件生成action对象
*/

// 同步action 就是值action的值为Object类型的一般对象
export function createIncrementAction(data) {
  return { type: INCREMENT, data }
}
// 箭头函数写法
export const createDecrementAction = data =>
  ({ type: DECREMENT, data })
// 这里用小括号包着是因为如果用花括号表示对象的话 花括号会被认为是函数体而不是对象

// 所谓的异步action就是指action的值为函数
// 异步action中一般都会调用同步action
// dispatch由store调用 store会默认为你传入dispatch函数
// 异步action不是必须要用
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      // store.dispatch(createIncrementAction(data))
      dispatch(createIncrementAction(data))
    }, time);
  }
}