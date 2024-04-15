//Иницилизация swiper
var swiper = new Swiper(".brand__container", {
  //количество слайдов для показа
  slidesPerView: 1.25,
  //отступ между слайдами
  spaceBetween: 16,
  // slidesPerGroup: 1,

  breakpoints: {
    375: {
      slidesPerView: 1.45,
      spaceBetween: 16,
    },
    425: {
      slidesPerView: 1.65,
      spaceBetween: 16,
    },
    500: {
      slidesPerView: 1.95,
      spaceBetween: 16,
    },
    550: {
      slidesPerView: 2.15,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2.35,
      spaceBetween: 16,
    },
    650: {
      slidesPerView: 2.55,
      spaceBetween: 16,
    },
    700: {
      slidesPerView: 2.75,
      spaceBetween: 16,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var a1 = document.querySelector(".content__read-more");
var a2 = document.querySelector(".label");
var a3 = document.querySelector(".label span");
var a4 = a2.querySelector(".content__img");

a1.addEventListener("change", function () {
  if (a1.checked) {
    a4.src = "icons/icon_2.png";
    a3.textContent = "Скрыть";
    // console.log(a4);
  } else {
    a4.src = "icons/icon_1.png";
    a3.textContent = "Показать все";
  }
});
