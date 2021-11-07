import { DECREMENT, INCREMENT } from "./constant"

/*
该文件专门为Count组件生成action对象
*/
export function createIncrementAction(data){
  return {type:INCREMENT,data}
}
// 箭头函数写法
export const createDecrementAction=(data)=>
   ({type:DECREMENT,data})
// 这里用小括号包着是因为如果用花括号表示对象的话 花括号会被认为是函数体而不是对象
