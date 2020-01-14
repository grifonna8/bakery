$(document).ready(function () {
  var form = $('.modal'),
      formBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');
  
  formBtn.on('click', function () {
    form.toggleClass('modal--visible');    
  });
  closeBtn.on('click', function () {
    form.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  jwplayer("player").setup({
  image:"img/main-advantages/preload.jpg",
  file:"http://grifonna8.ru/video/video.mp4",
  width:"621",
  height:"349",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });
});