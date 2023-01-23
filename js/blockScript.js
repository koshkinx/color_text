// Завдання 3
// Створити блок на сторінці який переміщужться на 10рх в сторону стрілки яку натиснули.
let prop = document.getElementById("kvadrat");
window.onkeydown = function (event) {
  let code = event.keyCode || event.charCode;

  if (code == 37) {
    prop.style.left = prop.offsetLeft + -10 + "px";
  }
  if (code == 39) {
    prop.style.left = prop.offsetLeft + 10 + "px";
  }
  if (code == 38) {
    prop.style.top = prop.offsetTop + -10 + "px";
  }
  if (code == 40) {
    prop.style.top = prop.offsetTop + 10 + "px";
  }
};
