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
$(function() {
  $('.contact__field--phone').inputmask({"mask": " +7 999 9999999 "} );
});


$(function() {
  $("#tabs").tabs();
});


