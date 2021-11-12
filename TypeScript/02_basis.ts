// 声明一个变量a 同时指定它的类型为number
let a: number;

// a的类型设置为了number 在以后的使用过程中a的值只能是数字
a = 10;
// a = 'hello';  //此行代码会报错 因为a的类型是number 不能赋值字符串

let b :string;

b='hello'

// b = 10

// 声明完变量直接进行赋值
let c:boolean = false;

c = true;
// c = 123;

// 如果变量声明和赋值同时进行 ts可以自动对变量类型检测
let d = false;
// d = 123

function sum(a:number,b:number) : number{
  return a+b;
}

// sum(123,'123')  
let result = sum(123,456)