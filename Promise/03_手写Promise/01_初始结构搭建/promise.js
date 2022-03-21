function Promise(executor) {
	// 同步调用 执行器函数

	// 添加属性
	this.PromiseState = "pending"
	this.PromiseResult = null
	// 保存实例对象的this值
	const self = this
	function resolve(data) {
		// 判断状态
		if (self.PromiseState !== "pending") return
		console.log(this) // 这里为什么是window
		// 1.修改对象的状态(promiseState)
		self.PromiseState = "fulfilled"
		// 2.设置对象结果值(promiseResult)
		self.PromiseResult = data
	}
	function reject(data) {
		if (self.PromiseState !== "pending") return
		console.log(this) // 这里为什么是window
		self.PromiseState = "rejected"
		self.PromiseResult = data
	}
	try {
		executor(resolve, reject)
	} catch (e) {
		reject(e)
	}
}

Promise.prototype.then = function (onResolved, onRejected) {
	console.log("开始执行then了")
	if (this.PromiseState === "fulfilled") {
		onResolved(this.PromiseResult)
	}
	if (this.PromiseState === "rejected") {
		onRejected(this.PromiseResult)
	}
	// if (this.PromiseState === "pending") {
	// 	console.log("这里不对 这里的promise实例包裹的异步任务 但是会先执行then")
	// }
	if(this.PromiseState === 'pending'){
		
	}
}
