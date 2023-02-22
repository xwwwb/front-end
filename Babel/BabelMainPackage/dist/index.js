"use strict";

require("core-js/stable");
var func1 = function func1(a, b) {
  console.log('使用preset-env可以转换语法');
  var c = a + b;
  return c + '';
};
console.log(func1(1, 2));
var promiseDemo = Promise.resolve('success');
promiseDemo.then(function () {
  console.log('默认不会引入垫片 不会被转义');
  console.log('需要手动安装core-js然后引入');
  console.log('promise resolve');
});