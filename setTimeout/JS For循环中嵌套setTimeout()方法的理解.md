### 思考：
先上代码，我们可以看一遍，思考一下答案，对比两种方法的区别。
```
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1)
}
```
答案： 3 ，3 ，3 和 0 ，1 ，2

### 解析：
我们通过在每一个阶段加入 console.log(i) 来更深层次的理解 js 的内部机制
```
       	console.log(i)                          // 输出顺序一 undefined
        for (var i = 0; i < 3; i++) {
            console.log(i);                     // 输出顺序二 0,1,2
            setTimeout(() => console.log(i), 1);    // 输出顺序六 3,3,3
        }
        
        console.log(i)                          // 输出顺序三 3

        for (let i = 0; i < 3; i++) {
            console.log(i);                     // 输出顺序四 0,1,2
            setTimeout(() => console.log(i), 1);    // 输出顺序七 0,1,2
        }
        console.log(i)                          // 输出顺序五 3
```
我们根据执行顺序分析一下每一个 console.log()内部发生了什么：

执行顺序一：变量提升问题
在第一个 for 循环中 var 定义了 i ，提升至全局，此时 全局上下文GO中 { i: undefined }

执行顺序二：for循环机制
每循环一次打印一次，同时修改了 GO 中 i 的值，注意 i++，先运算再赋值，跳出循环时 i = 3

执行顺序三：
此时跳过 setTimeou t执行，输出全局中 i 的值， { i: 3 }

执行顺序四：let块级作用域
此处因为是 let 声明 i ，let 在 {} 中形成了块级作用域，i 被重新声明， for循环一次打印一次 i 的值

执行顺序五：
打印全局中 i 的值，这里和执行顺序三是一致的，也跳过了 setTimeou t执行

执行顺序六：setTimeout 异步执行（全局作用域）
setTimeout是一个异步宏任务，他的回调函数会在遍历结束才执行，此时全局中 i=3，所以会输出3次3

执行顺序七：setTimeout 异步执行（块级作用域）

在每次的遍历过程中，i 都有一个新值，并且每个值都在循环内的块级作用域中
### 引发:
两种方式的区别：

①：因为 let 的作用域是块作用域，所以每次 JS 检测到 setTimeOut 把 setTimeOut 放到队列的同时，let 定义的i的值也会跟随 setTimeOut 进去队列。所以每次循环后队列里的 setTimeOu t里的i的值是不一样的。
②：而 var 定义的 i 是无法进入 setTimeOut 的。i 只能在运行到 setTimeOut 时才会向外层环境申请 i 的值，而这个时候 i 的值已经变成 3 了。

修改第一种var定义的循环方式：

方式一：
对第一种for循环问题的解决：因为 setTimeOut() 是异步执行，所以我们让他立即执行就可以了，使用立即执行函数。形成闭包，使得内部函数能够访问外部函数的变量。
```
    console.log(i);                     // undefined                     
    for (var i = 0; i < 3; i++) {
         console.log(i);                 // 同步，0,1,2
         (function (i) {
             console.log(i);             // 同步，0,1,2  
             setTimeout(function () {
                 console.log(i);         // 最后执行，0,1,2
             }, 1000);
         })(i);  
     }
    console.log(i)                      // 3
```
方式二：

除此之外，我们还可以用到 setTimeout 第三个参数的特点实现效果。将 i 作为第三个参数传入，用 j来进行接收，这样 setTimeout 每次循环时访问的 i 值就会随之变化。
```
console.log(i);                        // undefined
  for (var i = 0; i < 3; i++) {
      console.log(i);                    // 0,1,2
      setTimeout( function timer(j) {
          console.log(j);                // 最后执行 0，1，2
      }, 1000, i);
  }
console.log(i);                        // 3
```
————————————————
版权声明：本文为CSDN博主「Trist丨」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_42467467/article/details/106285096