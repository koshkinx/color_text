// 2) Використовуючи компоненти бутстрапа створити форму замовлення піци. Всі дані що будудуть на сторінці
//  (  розмір піцци, топінги  тримати в js і заповнювати їми компоненти форми )
// Форма має мати такі елементи і рахувати вартість замовлення, при зміні умов перераховувати ціну.
// 1) Селект по вибору розміру ( мала, середня, велика )
// 2) Тип начиники ( з мясом, сиром і т.д ) кожна начинка різна ціна
// 3) Додаткові топінги ( гриби, сир, ковбаски ... ) реаліувати чекбокасами кожен вибраний чекбок +10 грн до ціни
// 4) Достаквка чи самовивіх ( доставка +30 до ціни самовивіз 0 )
// 5) Поле де відображається ціна.
// 6) Кнопка замовити ( якщо всі поля крім топінгів заповнені то вона активна )
// 7) Після натискання кнопки спливає вікно ( модалка або якийсь компонент з бутстрапа з написом ЄДякуємо за замовлення ) на 5 секунд і зникає

let price = document.querySelector(".price");
let fourCheese = document.querySelector("#fourCheese");
let pizzaSelect = document.querySelector(".pizzaSelect");
let sizeSelect = document.querySelector(".sizeSelect");
let mashrooms = document.querySelector("#mashrooms");
let btn = document.querySelector(".buy");

price.innerHTML = 0;

pizzaSelect.addEventListener("change", function (e) {
  if (e.target.value == 0) {
    price.innerHTML = 0;
    btn.disabled = !pizzaSelect.checked;
  }
});
// sizeSelect.addEventListener("change", function (e) {
//   if (e.target.value == 0) {
//     price.innerHTML = 0;

//     btn.disabled = !sizeSelect.checked;
//   }
// });

sizeSelect.addEventListener("change", function (e) {
  if (
    e.target.value == 0 ||
    pizzaSelect.value == 1 ||
    pizzaSelect.value == 2 ||
    pizzaSelect.value == 3
  ) {
    price.innerHTML = 0;
    btn.disabled = !sizeSelect.checked;
  }
});

pizzaSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && sizeSelect.value == 1) {
    // price.innerHTML = +price.innerHTML + 220;
    price.innerHTML = 220;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && pizzaSelect.value == 1) {
    price.innerHTML = 220;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 2 && pizzaSelect.value == 1) {
    price.innerHTML = 240;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 3 && pizzaSelect.value == 1) {
    price.innerHTML = 260;
    btn.disabled = sizeSelect.checked;
  }
});

sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && pizzaSelect.value == 2) {
    // price.innerHTML = +price.innerHTML + 280;
    price.innerHTML = 280;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 2 && pizzaSelect.value == 2) {
    // price.innerHTML = +price.innerHTML + 280;
    price.innerHTML = 300;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 3 && pizzaSelect.value == 2) {
    // price.innerHTML = +price.innerHTML + 280;
    price.innerHTML = 320;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 1 && pizzaSelect.value == 3) {
    // price.innerHTML = +price.innerHTML + 280;
    price.innerHTML = 300;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 2 && pizzaSelect.value == 3) {
    // price.innerHTML = +price.innerHTML + 280;
    price.innerHTML = 320;
    btn.disabled = sizeSelect.checked;
  }
});
sizeSelect.addEventListener("change", function (e) {
  if (e.target.value == 3 && pizzaSelect.value == 3) {
    // price.innerHTML = +price.innerHTML + 280;
    price.innerHTML = 340;
    btn.disabled = sizeSelect.checked;
  }
});
//ЧЕКБОКЧЫ
mashrooms.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 10;
  } else {
    price.innerHTML = +price.innerHTML - 10;
  }
});
let cheese = document.querySelector("#cheese");
cheese.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 10;
  } else {
    price.innerHTML = +price.innerHTML - 10;
  }
});
let sausage = document.querySelector("#sausage");
sausage.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 10;
  } else {
    price.innerHTML = +price.innerHTML - 10;
  }
});
let delivery = document.querySelector("#delivery");
let self = document.querySelector("#self");
delivery.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML + 30;
  }
});
self.addEventListener("change", function (e) {
  if (this.checked) {
    price.innerHTML = +price.innerHTML - 30;
  }
});

//КНОПКА
const elemModal = document.querySelector("#modal");
const modal = new bootstrap.Modal(elemModal);
// const myModal = document.querySelector(".modal");
// const modal = new bootstrap.Modal(elemModal);

btn.addEventListener("click", function () {
  setTimeout(() => {
    // elemModal.removeAttribute("data-keyboard");
    modal.hide();
    // elemModal.setAttribute("data-keyboard", "true");
    console.log(elemModal.getAttribute("data-keyboard"));
  }, 5000);
});
