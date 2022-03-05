## 1. setState

### setState更新状态的2种写法

```
setState(stateChange, [callback])------对象式的setState
	        1.stateChange为状态改变对象(该对象可以体现出状态的更改)
	        2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
```
```
setState(updater, [callback])------函数式的setState
	        1.updater为返回stateChange对象的函数。
	        2.updater可以接收到state和props。
	        4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
```
> 总结:
> 1.对象式的setState是函数式的setState的简写方式(语法糖)
> 2.使用原则：
> 如果新状态不依赖于原状态 ===> 使用对象方式
> 如果新状态依赖于原状态 ===> 使用函数方式
> 如果需要在setState()执行后获取最新的状态数据, 要在第二个callback函数中读取

https://zh-hans.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous

<img src="images//image-20220305100325852.png" alt="image-20220305100325852" style="zoom:50%;" />
