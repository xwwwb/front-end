function Promise(executor){
  // 同步调用 执行器函数
  function resolve(data){

  }
  function reject(data){

  }
  executor(resolve,reject);
}

Promise.prototype.then = function(onResolved,onRejected){

}