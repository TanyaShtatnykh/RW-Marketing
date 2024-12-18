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