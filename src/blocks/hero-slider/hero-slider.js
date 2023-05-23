
import Swiper from 'swiper/bundle';

export default function heroSlider() {

//swiper
const swiper = new Swiper('.hero-slider', {
  // Optional parameters
  loop: true,
    autoplay: {
      delay:3000,
    },
speed: 2000,
  grabCursor: true,
  spaceBetween: 20,
  // slidesPerView: 1.1, //сколкько видны
  slidesPerView: 1,
  // centeredSlides: true,
  // If we need pagination
  pagination: {
    el: '.hero__pagination',
    clickable: true
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.gallery-slider-button-next',
  //   prevEl: '.gallery-slider-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },

  breakpoints: {
    // when window width is >= 320px
    // 320: {
    //   slidesPerView: 2,
    //   spaceBetween: 20
    // },
    // when window width is >= 480px
    992: {
      // slidesPerView: 2,
      // spaceBetween: 20
    },
    // when window width is >= 640px
    1200: {
      // slidesPerView: 2,
      // spaceBetween: 20
    }
  }
});


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

}
