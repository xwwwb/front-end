## 1. 求和案例_redux精简版

1. 去除Count组件自身状态


2. src下建立 src->redux->(store.js count_reducer.js)


3. store.js
    - 引入redux中的createStore函数 创建一个store
    - createStore调用时要传入一个为其服务的reducer
    - 记得暴漏store对象


4. count_reducer.js
    - reducer的本质是一个函数 接受 preState action 返回加工后的状态
    - reducer有两个作用 初始化状态 加工状态
    - reducer第一次调用时 是store自动触发的 传递的proState是undefined action是`@@redux/INITo.u.5.s.h.8`


5. 在index.js中监测store中状态的改变 一旦发生变化 重新渲染App  redux只负责管理状态 至于状态的改变驱动着页面的展示 要靠我们自己写

## 2.求和案例_redux完整版
新增文件：
 1. count_action.js 专门用于创建action对象
 2. constant.js 放置由于编码疏忽写错action中的type

## 3.求和案例_redux异步action版
1. 明确：延迟的动作不想交给组件自身，想交给action

2. 何时需要异步action：想要对状态进行操作，但是具体的数据靠异步任务返回。

3. 具体编码：  
    - yarn add redux-thunk，并配置在store中  
    - 创建action的函数不再返回一般对象，而是一个函数，该函数中写异步任务。
    - 异步任务有结果后，分发一个同步的action去真正操作数据。

4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的结果了再去分发同步action。

> 笔记 react-redux的设计初衷是什么  

弹幕上有个回答：
**react-redux把业务逻辑和redux拆解了，也就是说如果系统里突然有一天不用redux，要改成mobx了，所有的ui组件可以复用**

**不侵入式的修改UI**

## 4.求和案例_react-redux基本使用

1. 明确两个概念：
    - UI组件 不能使用任何redux的API 只负责页面的呈现与交互等
    - 容器组件 负责和redux通信 将结果交给UI组件
2. 如何创建一个容器组件 靠react-redux的connect函数
```
connect(mapStateToProps,mapDispatchToProps)(UI组件)
 mapStateToProps 映射状态 返回值是一个对象
 mapDispatchToProps 映射操作状态的方法 返回值是一个对象
```
> 备注  
容器中的store是靠props传进去的 而不是在容器组件中直接引入  
mapDispatchToProps 也可以是一个对象

## 5.求和案例_React-redux优化
1. 容器组件和UI组件混成一个文件
2. 无需自己给容器组件传递store 给<App/>包装一个<Provider store={store}>即可
3. 使用了react-redux后再也不用自己检测redux中状态的变化 容器组件可以自动完成这个工作
4. mapDispatchToProps也可以简单的写成一个对象
5. 一个组件要和redux`打交道`要经过哪几步
    - 定义好UI组件 不爆露
    - 引入connect生成一个容器组件 并暴漏
    - connect(
        state =>({key:value})
        {key:xxxAction}
    )(UI组件)
    - 在UI组件中通过this.props.xxx读取和操作状态