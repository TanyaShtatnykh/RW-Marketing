const childrenSwiper = new Swiper('.page-info__slider', {
  navigation: {
    nextEl: '.page-info__arrow--next',
    prevEl: '.page-info__arrow--prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  loop: true,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
  },
  slidesPerView: 2,
  spaceBetween: 10,
  grabCursor: true,
});