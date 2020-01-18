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

  var mySwiper = new Swiper ('#swiper-container', {
    noSwiping:true,
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
    breakpoints: {
      991: {
        noSwiping:false,
      }
    },
  });

  var mySwiper1 = new Swiper ('#swiper-container-about', {
    noSwiping:true,
    loop:true,
    pagination: {
      el: '.swiper-pagination-about',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-about',
      prevEl: '.swiper-button-prev-about',
    },
    breakpoints: {
      991: {
        noSwiping:false,
      }
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
  image:"img/about/preload.jpg",
  file:"http://grifonna8.ru/video/video.mp4",
  width:"419",
  height:"250",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });

  jwplayer("player--second").setup({
  image:"img/about/preload.jpg",
  file:"http://grifonna8.ru/video/video2.mp4",
  width:"419",
  height:"250",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });

  jwplayer("player--third").setup({
  image:"img/about/preload.jpg",
  file:"http://grifonna8.ru/video/video3.mp4",
  width:"419",
  height:"250",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });
  
  jwplayer("player--fourth").setup({
  image:"img/about/preload.jpg",
  file:"http://grifonna8.ru/video/video4.mp4",
  width:"419",
  height:"250",
  controls:true,
  autostart:false,
  mute:false,
  stretching:"uniform",
  });
  
  jwplayer("player--fifth").setup({
  image:"img/about/preload.jpg",
  file:"http://grifonna8.ru/video/video5.mp4",
  width:"419",
  height:"250",
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
  //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;
  
  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.738024, 37.510322], // координаты центра на карте
      zoom: 17, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([55.738024, 37.510322], {
        balloonContentHeader: 'Проба',
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'img/map/building.png',
        // Своё изображение иконки метки.
        iconImageHref: 'img/flag.png',
        // Размеры метки.
        iconImageSize: [412, 200],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
    myMapTemp.behaviors.disable('scrollZoom');
    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  
  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");
  
    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
  
        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true; 
  
      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');
  
      // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
            // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
          });                
        }
      }
    );  
  }
  
  $(function() {
  
    //Запускаем основную функцию
    ymap();
  
  });

  //Валидация формы
  function validateForm(form){
    $(form).validate({
      errorClass: "invalid",
      rules: {
        // simple rule, converted to {required:true}
        userName: {
          required: true,
          minlength: 2,
          maxlength: 10
        },
        userPhone: "required",
        userQuestion: {
          required: true,
          minlength: 20,
          maxlength: 400
        },
        // compound rule
        userEmail: {
          required: true,
          email: true
        }
      },
      errorElement: "div",
      messages: {
        userName: {
          required: "Имя обязательно",
          minlength: "Имя не короче 2 букв",
          maxlength: "Имя не длиннее 10 букв"
        },
        userPhone: "Телефон обязателен",
        userEmail: {
          required: "Обязательно укажите email",
          email: "Введите в формате name@domain.com"
        }
      },
    });
  }
  validateForm('.modal__form');
  validateForm('.hero__form');
  validateForm('.offering__form');
  /* маска для телефона */
  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона:"});

});