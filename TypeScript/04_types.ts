// object表示一个js对象
let a :object;
a = {};
a = function(){

};

// js中好多东西都是object 一般不直接用

let b:{name:string};
// 一般这样用 用来指定对象中可以包含哪些属性
b = {name:'xwb'};
// b = {name:'xwb',age:17}; //报错 要求对象和指定的形式一样


let c:{name:string,age?:number};
// 在属性名后加问好 表示属性是可选的
c = {name:'xwb'};
c = {name:'xwb',age:22}

// [propName:string]:any 表示任意类型的属性
let d :{name:string, [propName:string]:any}
d = {name:'xwwwb',age:18,gender:"男"}

let 