// object表示一个js对象
let a: object
a = {}
a = function () {}

// js中好多东西都是object 一般不直接用

let b: { name: string }
// 一般这样用 用来指定对象中可以包含哪些属性
b = { name: "xwb" }
// b = {name:'xwb',age:17}; //报错 要求对象和指定的形式一样

let c: { name: string; age?: number }
// 在属性名后加问好 表示属性是可选的
c = { name: "xwb" }
c = { name: "xwb", age: 22 }

// [propName:string]:any 表示任意类型的属性
let d: { name: string; [propName: string]: any }
d = { name: "xwwwb", age: 18, gender: "男" }

// 设置函数结构的类型声明
// 语法 (形参:类型,形参:类型...) => 返回值
// 希望e这个函数有两个参数 参数类型和返回类型都是数字
let e: (a: number, b: number) => number

e = (n1, n2) => {
	return n1 + n2
}

// 数组的类型声明
// 类型[]
// Array<类型>

// string[] 字符数组
let f: string[]
f = ["a", "b", "c"]

// number[] 数值数组
let g: number[]

let h: Array<number>
h = [1, 2, 3]

let i: Array<any>
i = ["1", 2, 3]

// 元组 元组就是固定长度的数组
// 注意区分 python里面是不可变列表
let j: [string, string]
j = ["hello", "ww"]
// j=['hello'] //出错
// j=['hello',123] //出错

//enum 枚举类型

enum Gender {
	Male = 0,
	Female = 1,
}

let k: { name: string; gender: Gender }
k = {
	name: "xwwwb",
	gender: Gender.Male,
}

// &表示同时
let l: { name: string } & { age: number }
l = { name: "孙悟空", age: 18 }

// 类型的别名
let m: 1 | 2 | 3 | 4 | 5
let n: 1 | 2 | 3 | 4 | 5
// 这里m n 类型相同 分别定义 太长 可以使用类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let o : myType