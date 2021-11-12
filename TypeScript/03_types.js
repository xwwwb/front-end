// 直接使用字面量进行类型声明
var a;
a = 10;
// a = 11;
// 可以使用 | 连接多个类型 -> 联合类型
var b;
b = "male";
b = "female";
// b = "hello"; //错误
var c;
c = true;
c = "hello";
//any表示任意类型 一个变量设置为any后相当于对该变量关闭了ts的类型检测
//不是很建议使用
var d;
d = 10;
d = "hello";
d = true;
// 声明变量如果不指定类型 则ts解析器会自动判断变量的类型为any 隐式的any
var e;
e = 10;
e = 'hello';
e = true;
//unknown 表示未知类型的值
var f;
f = 10;
f = 'hello';
f = true;
var s;
// d的类型是any 他可以赋值给任意变量 霍霍别人！
s = d; //不出错 d是any
f = 'hello';
console.log(typeof (s));
console.log(s);
// s=f;//出错 因为f是未知
