$(document).ready(function () {
  var form = $('.hero__form'),
      formBtn = $('[data-toggle="form"]'),
      closeBtn = $('.form__close');
  
  formBtn.on('click', function () {
    form.toggleClass('form--visible');
    $('.form__close').addClass('form__close--visible');
    $('.hero__form__dialogue').addClass('.hero__form__dialogue--visible');
    
  });
  closeBtn.on('click', function () {
    form.toggleClass('form--visible');
  });
});