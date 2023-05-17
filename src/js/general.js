//swiper
// import Swiper from 'swiper/bundle';

//toggle
import button from '%modules%/toggle/toggle'
//menu
import menu from '%modules%/menu/menu'

button();
menu();

// Инициализация слайдера
// const swiper = new Swiper('.swiper-container', {
//   effect: 'fade',
//   centeredSlides: true,
//   loop: true,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<div class="' + className + '"><span class="bullet" ></span><span>' + `${(index < 9) ? '0' : ''}`  + (index + 1) + '</span></div>';
//     },
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
