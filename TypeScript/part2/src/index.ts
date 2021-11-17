import { a } from './app'
let b = 1;
console.log(a)

// 如果形式参数只写(a,b)会触发noImplicitAny报错
function fun1(a:number,b:number){
  return a+b;
}

// 这里this不明确 需要指定类型 会触发noImplicitThis
// function fun2(this:any){
//   alert(this)
// }

function fun2(this:Window){
  alert(this)
}

let box= document.getElementById('root')

// 如果不用这个if 就会使用strictNullChecks检查报错
if(box != null){
  box.addEventListener('click',()=>{
    alert('box');
  })
}

// 或者
box?.addEventListener('click',()=>{
  alert('box')
})