const childrenSwiper = new Swiper('.page-info__slider', {
  navigation: {
    nextEl: '.page-info__arrow--next',
    prevEl: '.page-info__arrow--prev'
  },
  loop: true,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
  },
  breakpoints: {
    280: {
        slidesPerView: 1,
        spaceBetween: 0,
        grabCursor: false,
    },
    768: {
        slidesPerView: 2,
        spaceBetween: 10,
        grabCursor: true,
    }
  }
});