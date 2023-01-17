let span = document.querySelector(".loader");
// span.childNodes[1].style.color == "red";
setInterval(() => {
  span.childNodes[1].style.color =
    span.childNodes[1].style.color == "red" ? "black" : "red";
}, 1000);
setInterval(
  function () {
    span.childNodes[3].style.color =
      span.childNodes[3].style.color == "red" ? "black" : "red";
  },

  1100
);
setInterval(
  function () {
    span.childNodes[5].style.color =
      span.childNodes[5].style.color == "red" ? "black" : "red";
  },

  1200
);
setInterval(
  function () {
    span.childNodes[7].style.color =
      span.childNodes[7].style.color == "red" ? "black" : "red";
  },

  1300
);
setInterval(
  function () {
    span.childNodes[9].style.color =
      span.childNodes[9].style.color == "red" ? "black" : "red";
  },

  1400
);
setInterval(
  function () {
    span.childNodes[11].style.color =
      span.childNodes[11].style.color == "red" ? "black" : "red";
  },

  1500
);

setInterval(
  function () {
    span.childNodes[13].style.color =
      span.childNodes[13].style.color == "red" ? "black" : "red";
  },

  1600
);
