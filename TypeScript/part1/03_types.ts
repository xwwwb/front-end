// 直接使用字面量进行类型声明

let a: 10
a = 10
// a = 11;
let h: 10 | 20
h = 20
h = 10

// 可以使用 | 连接多个类型 -> 联合类型
let b: "male" | "female" | "男"
b = "male"
b = "female"
b = "男"
// b = "hello"; //错误

let c: boolean | string
c = true
c = "hello"

//any表示任意类型 一个变量设置为any后相当于对该变量关闭了ts的类型检测
//不是很建议使用
let d: any
d = 10
d = "hello"
d = true

// 声明变量如果不指定类型 则ts解析器会自动判断变量的类型为any 隐式的any
let e
e = 10
e = "hello"
e = true

//unknown 表示未知类型的值
let f: unknown
f = 10
f = "hello"
f = true
f = "ss"

let s: string
// d的类型是any 他可以赋值给任意变量 霍霍别人！
s = d //不出错 d是any 之后s变成boolean

f = "hello"
console.log(typeof s)
console.log(s)
// s=f;//出错 因为f是未知 即使f实际上是string也不能赋值给s

// unknown 实际上是一个类型安全的any
// unknown 类型的变量 不能直接复制给其他变量
// 要怎么做才能安全赋值
// 赋值前判断
if (typeof f === "string") {
	s = f
}

// 类型断言 可以用来告诉解析器变量的实际类型 两种用法

/*
1. 类型断言： 尖括号<>
2. as语法
*/
s = f as string
s = <string>f

// void用来表示空 以函数为例 就表示没有返回值的函数
function fu(): void {}

// never表示永远不会返回结果
// 一般用来报错用
function fu2(): never {
	throw new Error("报错了")
}
