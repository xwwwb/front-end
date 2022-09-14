let obj = { a: 1, b: 2 }

obj[Symbol.iterator] = function () {
  let arr = Object.values(this)
  let self = this
  return {
    index: 0,
    next: function () {
      // console.log("next函数")
      // console.log(this)
      if (this.index < arr.length) {

        return {
          value: arr[this.index++],
          done: false
        }
      }
      else {
        return {
          value: undefined,
          done: true
        }
      }

    }
  }
}

f = obj[Symbol.iterator]()

f.next()
f.next()

let [a, b] = obj

console.log(a, b)
console.log("通过手写iterator实现解构赋值")

// 以下调用了数组的迭代器
// obj[Symbol.iterator] = function () {
//   return Object.values(this)[Symbol.iterator]()
// }