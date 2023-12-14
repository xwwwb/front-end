// object表示一个js对象
var a;
a = {};
a = function () { };
// js中好多东西都是object 一般不直接用
var b;
// 一般这样用 用来指定对象中可以包含哪些属性
b = { name: "xwb" };
// b = {name:'xwb',age:17}; //报错 要求对象和指定的形式一样
// 声明时赋值之后 再修改要和第一次赋值的相同
var r = { name: "xwwwb", sex: true };
r = { name: "xwb", sex: false };
var c;
// 在属性名后加问好 表示属性是可选的
c = { name: "xwb" };
c = { name: "xwb", age: 22 };
// [propName:string]:any 表示任意类型的属性
var d;
d = { name: "xwwwb", age: 18, gender: "男" };
// 设置函数结构的类型声明
// 语法 (形参:类型,形参:类型...) => 返回值
// 希望e这个函数有两个参数 参数类型和返回类型都是数字
var e;
e = function (n1, n2) {
    return n1 + n2;
};
// 数组的类型声明
// 类型[]
// Array<类型>
// string[] 字符数组
var f;
f = ["a", "b", "c"];
// number[] 数值数组
var g;
var h;
h = [1, 2, 3];
var i;
i = ["1", 2, 3];
// 元组 元组就是固定长度的数组
// 注意区分 python里面是不可变列表
var j;
j = ["hello", "ww"];
// j=['hello'] //出错
// j=['hello',123] //出错
//enum 枚举类型
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var k;
k = {
    name: "xwwwb",
    gender: Gender.Male
};
// &表示同时
var l;
l = { name: "孙悟空", age: 18 };
var p;
p = { name: "xwb" };
p = { age: "20" };
p = { name: "xwb", age: "20" };
// 类型的别名
var m;
var n;
var o;
