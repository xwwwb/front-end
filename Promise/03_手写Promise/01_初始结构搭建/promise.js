function Promise(executor) {
	// 同步调用 执行器函数

	// 添加属性
	this.PromiseState = "pending"
	this.PromiseResult = null
	// 保存实例对象的this值
	const self = this
	function resolve(data) {
		console.log(this) // 这里为什么是window
		// 1.修改对象的状态(promiseState)
		self.PromiseState = "fulfilled"
		// 2.设置对象结果值(promiseResult)
		self.PromiseResult = data
	}
	function reject(data) {
		self.PromiseState = "rejected"
		self.PromiseResult = data
	}
	executor(resolve, reject)
}

Promise.prototype.then = function (onResolved, onRejected) {}
