import 'core-js/stable';

let func1 = (a, b) => {
	console.log('使用preset-env可以转换语法');
	let c = a + b;
	return c + '';
};

console.log(func1(1, 2));

let promiseDemo = Promise.resolve('success');

promiseDemo.then(() => {
	console.log('默认不会引入垫片 不会被转义');
	console.log('需要手动安装core-js然后引入');
	console.log('promise resolve');
});
