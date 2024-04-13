//Иницилизация swiper
var swiper = new Swiper(".brand__container", {
  //количество слайдов для показа
  slidesPerView: 1.25,
  //отступ между слайдами
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
