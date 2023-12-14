import { a } from "./app";
let b = 1;
console.log(a);
function fun1(a, b) {
    return a + b;
}
function fun2() {
    alert(this);
}
let box = document.getElementById("root");
if (box != null) {
    box.addEventListener("click", () => {
        alert("box");
    });
}
box?.addEventListener("click", () => {
    alert("box");
});
