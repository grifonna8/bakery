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
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var mySwiper1 = new Swiper ('#swiper-container-about', {
    pagination: {
      el: '.swiper-pagination-about',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-about',
      prevEl: '.swiper-button-prev-about',
    },
  });

  // $('.swiper-object .swiper-container').each(function(index, value) {
 
  //   var mySwiper = new Swiper(value, {
  //     loop:true,
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     pagination: {
  //       el: '.swiper-pagination',
  //       type: 'bullets',
  //       clickable: true,
  //     },
     
  //   });
  // });

  // $('.swiper-object-about .swiper-container-about').each(function(index, value) {
 
  //   var mySwiper1 = new Swiper(value, {
  //     loop:true,
  //     navigation: {
  //       nextEl: '.swiper-button-next-about',
  //       prevEl: '.swiper-button-prev-about',
  //     },
  //     pagination: {
  //       el: '.swiper-pagination-about',
  //       type: 'bullets',
  //       clickable: true,
  //     },
     
  //   });
  // });

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

  jwplayer("player--first").setup({
  image:"img/main-advantages/preload.jpg",
  file:"http://grifonna8.ru/video/video.mp4",
  width:"621",
  height:"349",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });

  jwplayer("player--second").setup({
  image:"img/main-advantages/preload.jpg",
  file:"http://grifonna8.ru/video/video2.mp4",
  width:"621",
  height:"349",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });

  jwplayer("player--third").setup({
  image:"img/main-advantages/preload.jpg",
  file:"http://grifonna8.ru/video/video3.mp4",
  width:"621",
  height:"349",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });
  
  jwplayer("player--fourth").setup({
  image:"img/main-advantages/preload.jpg",
  file:"http://grifonna8.ru/video/video4.mp4",
  width:"621",
  height:"349",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });
  
  jwplayer("player--fifth").setup({
  image:"img/main-advantages/preload.jpg",
  file:"http://grifonna8.ru/video/video5.mp4",
  width:"621",
  height:"349",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });
  

  // $('.owl-carousel').owlCarousel({
  //   items:1,
  //   merge:true,
  //   loop:true,
  //   margin:10,
  //   video:true,
  //   center:true,
  //   nav:true,
  //   videoHeight: true/370,
  // });
  // $('.owl-carousel').owlCarousel({
  //   items:1,
  //   merge:true,
  //   loop:true,
  //   margin:10,
  //   video:true,
  //   center:true,
  // });

  // $('#main-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 3000,
  //   dots: true,
  //   infinite: true,
  //   adaptiveHeight: true,
  //   arrows: true
  // });

  // var video = $('#main-slider .slick-active').find('iframe').get(0).play();

  // $('#main-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //   $('#main-slider .slick-slide').find('video').get(0).pause();
  //   var video = $('#main-slider .slick-active').find('video').get(0).play();
  // });
});