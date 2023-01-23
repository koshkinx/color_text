// 1) Створити форму як на малюнку, за допомогою js реалізувати перевірку чи співпадають паролі. Чи введені всі дані в полях.
// Якщо всі данні введені, сховати поля  і кнопки і вивести текст, реєсстрація пройшла успішно, в полях де помилка
// змінити колір бордера на червоний
let form = document.querySelector("form");
let pass = document.querySelector("#pass");
let pass2 = document.querySelector("#pass2");
let btn = document.querySelector(".btn1");
let btn1 = document.querySelector("#btnReg");
let phone = document.querySelector("#phone");
let mail = document.querySelector("#mail");
let input = document.querySelector("input");
let fieldset = document.querySelector("fieldset");
btn1.addEventListener("click", function () {
  if (pass.value !== pass2.value) {
    // alert("не вірний пароль");

    pass.style.borderColor = "red";
    pass2.style.borderColor = "red";
    return;
  }
  if (input.value == 0) {
    input.style.borderColor = "red";
    phone.style.borderColor = "red";
    mail.style.borderColor = "red";
    pass.style.borderColor = "red";
    pass2.style.borderColor = "red";
    form.style.animationDuration = "0.5s";
    form.style.animationName = "anime";
  }
  if (phone.value == 0) {
    phone.style.borderColor = "red";
  }
  if (mail.value == 0) {
    mail.style.borderColor = "red";
  }
  if (pass.value == 0) {
    pass.style.borderColor = "red";
  }
  if (pass2.value == 0) {
    pass.style.borderColor = "red";
  }
  if (
    input.value > 0 &&
    phone.value > 0 &&
    mail.value > 0 &&
    pass.value > 0 &&
    pass2.value > 0
  ) {
    form.style.opacity = "0";
    setTimeout('fieldset.style.opacity = "1"', 4000);
  }
});

// я решил добавить немного снега и внизу код,который я скопировал

// Максимальное количество снежинок на экране
let snowmax = 35;
// Массив цветов снежинок
let snowcolor = new Array(
  "#AAAACC",
  "#DDDDFF",
  "#CCCCDD",
  "#F3F3F3",
  "#F0FFFF",
  "#FFFFFF",
  "#EFF5FF"
);
// Массив шрифты для снежков
let snowtype = new Array(
  "Arial Black",
  "Arial Narrow",
  "Times",
  "Comic Sans MS"
);
// Знак для снежков
let snowletter = "*";
// Скорость падение
let sinkspeed = 0.6;
// Максимальный размер снежков
let snowmaxsize = 40;
// Минимальный размер снежков
let snowminsize = 8;
let snowingzone = 1;

// Массив снежков
let snow = new Array();
// Отступы с низу
let marginbottom;
// Отступы с право
let marginright;
// Таймер
let timer;
let i_snow = 0;
let x_mv = new Array();
let crds = new Array();
let lftrght = new Array();
// Данные о браузере
let browserinfos = navigator.userAgent;
let ie5 =
  document.all && document.getElementById && !browserinfos.match(/Opera/);
let ns6 = document.getElementById && !document.all;
let opera = browserinfos.match(/Opera/);
// Браузер
let browserok = ie5 || ns6 || opera;

function randommaker(range) {
  rand = Math.floor(range * Math.random());
  return rand;
}

function initsnow() {
  if (ie5 || opera) {
    marginbottom = document.body.clientHeight;
    marginright = document.body.clientWidth;
  } else if (ns6) {
    marginbottom = window.innerHeight;
    marginright = window.innerWidth;
  }
  var snowsizerange = snowmaxsize - snowminsize;
  for (i = 0; i <= snowmax; i++) {
    crds[i] = 0;
    lftrght[i] = Math.random() * 15;
    x_mv[i] = 0.03 + Math.random() / 10;
    snow[i] = document.getElementById("s" + i);
    snow[i].style.fontFamily = snowtype[randommaker(snowtype / length)];
    snow[i].size = randommaker(snowsizerange) + snowminsize;
    snow[i].style.fontSize = snow[i].size + "px";
    snow[i].style.color = snowcolor[randommaker(snowcolor.length)];
    snow[i].sink = (sinkspeed * snow[i].size) / 5;
    if (snowingzone == 1) {
      snow[i].posx = randommaker(marginright - snow[i].size);
    }
    if (snowingzone == 2) {
      snow[i].posx = randommaker(marginright / 2 - snow[i].size);
    }
    if (snowingzone == 3) {
      snow[i].posx =
        randommaker(marginright / 2 - snow[i].size) + marginright / 4;
    }
    if (snowingzone == 4) {
      snow[i].posx =
        randommaker(marginright / 2 - snow[i].size) + marginright / 2;
    }
    snow[i].posy = randommaker(
      2 * marginbottom - marginbottom - 2 * snow[i].size
    );
    snow[i].style.left = snow[i].posx + "px";
    snow[i].style.top = snow[i].posy + "px";
  }
  movesnow();
}

function movesnow() {
  for (i = 0; i <= snowmax; i++) {
    crds[i] += x_mv[i];
    snow[i].posy += snow[i].sink;
    snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + "px";
    snow[i].style.top = snow[i].posy + "px";
    if (
      snow[i].posy >= marginbottom - 2 * snow[i].size ||
      parseInt(snow[i].style.left) > marginright - 3 * lftrght[i]
    ) {
      if (snowingzone == 1) {
        snow[i].posx = randommaker(marginright - snow[i].size);
      }
      if (snowingzone == 2) {
        snow[i].posx = randommaker(marginright / 2 - snow[i].size);
      }
      if (snowingzone == 3) {
        snow[i].posx =
          randommaker(marginright / 2 - snow[i].size) + marginright / 4;
      }
      if (snowingzone == 4) {
        snow[i].posx =
          randommaker(marginright / 2 - snow[i].size) + marginright / 2;
      }
      snow[i].posy = 0;
    }
  }
  var timer = setTimeout("movesnow()", 25);
}

for (i = 0; i <= snowmax; i++) {
  document.write(
    "<span id='s" +
      i +
      "' style='position:absolute;top:-" +
      snowmaxsize +
      "px;'>" +
      snowletter +
      "</span>"
  );
}

if (browserok) {
  window.onload = initsnow;
}
