"use strict";
define("app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.a = void 0;
    console.log('hello');
    exports.a = 10;
});
define("index", ["require", "exports", "app"], function (require, exports, app_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let b = 1;
    console.log(app_1.a);
    function fun1(a, b) {
        return a + b;
    }
    function fun2() {
        alert(this);
    }
    let box = document.getElementById('root');
    if (box != null) {
        box.addEventListener('click', () => {
            alert('box');
        });
    }
    box?.addEventListener('click', () => {
        alert('box');
    });
});
console.log("hello");
