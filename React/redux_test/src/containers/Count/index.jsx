// 引入Count的UI组件
import CountUI from '../../components/Count'
// // 引入redux中的store
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

// a函数返回的对象中的key就作为传递给UI组件props的key value就作为传递给UI组件props的value
// a带去了状态
function a(state){
  return {n:state}
}

// b函数返回的对象中的key就作为传递给UI组件props的key value就作为传递给UI组件props的value
// b带去了方法
function b(){
  return {jia:()=>{
    console.log(a)
  }}
}
export default connect(a,b)(CountUI)