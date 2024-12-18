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