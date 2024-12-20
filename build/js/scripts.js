$(function() {
  $('.conditions__item').on('click', function() {
    if (!$(this).hasClass('conditions__item--open')) {
      $('.conditions__item').removeClass('conditions__item--open');
    }
    $(this).toggleClass('conditions__item--open');
  });
  $(document).on('click', function (e) {
    var question = $('.conditions__item');
    if (!question.is(e.target) && question.has(e.target).length === 0) {
      question.removeClass('conditions__item--open');
    }
  });
});


$(function() {
  $("#tabs").tabs();
});
$(function() {
  $('.contact__field--phone').inputmask({"mask": " +7 999 9999999 "} );
});

/* выпадающее меню по клику в шапке */
$(function () {
  var dropMenu = $('.header__menu-link--drop')
  $(dropMenu).on('click', function() {
    $(this).toggleClass('header__menu-link--open');
    $('.header__sub-menu').toggleClass('header__sub-menu--open');
  });
  $(document).on('click', function (e) {
    if ( !dropMenu.is(e.target) && dropMenu.has(e.target).length === 0 ) {
      $(dropMenu).removeClass('header__menu-link--open');
      $('.header__sub-menu').removeClass('header__sub-menu--open');
		}
  })
});
$(function () {
  $('.header__burger-btn').on('click', function() {
    $(this).toggleClass('header__burger-btn--open');
    $('.header__wrapper').toggleClass('header__wrapper--open');
  });
  $('.header__menu-link', '.header__sub-menu-link').on('click', function() {
    if ($('.header__burger-btn').hasClass('header__burger-btn--open')) {
      $('.header__burger-btn').removeClass('header__burger-btn--open');
      $('.header__wrapper').removeClass('header__wrapper--open');
    }
  })
});



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