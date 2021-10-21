
const fs = require('fs')

// 经典写法
// fs.readFile('./resource/content.txt',(err,data)=>{
//   if(err) throw err;
//   console.log(data.toString());
// })

//promise写法
let p = new Promise((resolve,reject)=>{
  fs.readFile('./resource/content.txt',(err,data)=>{
    if(err) reject(err);
    resolve(data);
  })
})

p.then(value=>{
  console.log(value.toString())
},reason=>{
  console.log(reason)
})