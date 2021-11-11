// 引入Count的UI组件
import CountUI from '../../components/Count'
// // 引入redux中的store
// import store from '../../redux/store'
// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
// 引入这个可以创建行为
import { createDecrementAction, createIncrementAction, createIncrementAsyncAction } from "../../redux/count_action";


export default connect(
  state => ({ count: state }),
  // mapDispatchToProps 的简写
  // dispatch =>
  // ({
  //   jia: data => dispatch(createIncrementAction(data)),
  //   jian: data => dispatch(createDecrementAction(data)),
  //   jiaAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time))
  // })
  {
    jia:createIncrementAction,
    jian:createDecrementAction,
    jiaAsync:createIncrementAsyncAction
  }
)(CountUI) 