var timer = setTimeout(function a() {
timer = setTimeout(a, 2)
console.log(new Date().getMilliseconds())
}, 2)