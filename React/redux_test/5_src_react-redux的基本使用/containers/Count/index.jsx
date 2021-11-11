// 引入Count的UI组件
import CountUI from '../../components/Count'
// // 引入redux中的store
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入这个可以创建行为
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from "../../redux/count_action";
// mapstateToProps函数返回的对象中的key就作为传递给UI组件props的key value就作为传递给UI组件props的value
// mapstateToProps带去了状态
function mapstateToProps(state){
  return {count:state}
}

// mapDispatchToProps函数返回的对象中的key就作为传递给UI组件props的key value就作为传递给UI组件props的value
// mapDispatchToProps带去了方法
function mapDispatchToProps(dispatch){
  return {
    jia:data=>dispatch(createIncrementAction(data)),
    jian:data=>dispatch(createDecrementAction(data)),
    jiaAsync:(data,time)=>dispatch(createIncrementAsyncAction(data,time))
  }
}
export default connect(mapstateToProps,mapDispatchToProps)(CountUI)