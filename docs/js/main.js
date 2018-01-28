(function($){
  /* ---------набор функций--------------- */

  //автоувеличение ширины инпута
  function resizeInput() {
    var l =  $(this).val().length
    $(this).css('width', (l*16)+3);
  }
  //автоувеличение ширины инпута

  //получить ральный верхний левый угол обьекта в рекурсии
  var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);

    return {
      top: top,
      left: left
    };
  }; 
  //получить ральный верхний левый угол обьекта в рекурсии

  /* биндим контекст */
  function bind(func, context) { // первое перменная - функция, второе контекст
    return function() { // возвращаем анаонимную функцию, при ее вызове выоветься func.apply с уже имеющимя контекстом из переменной context
      return func.apply(context, arguments); //arguments любое кол во аргументов. такой вызов свяжет функцию с ранее переданным аргументом
    };
  }

  /* ---------ннабор функций---------н */



  $(document).ready(function(){
    $("body").removeClass("pageload");

    //scroll-to  - прокрутчик
    $(".scroll-to").click(function() {
      var id = $(this).attr("rel");
      var to = $("#"+id).offset().top-10;
      $('html, body').animate({
        scrollTop: to
      }, 500);
    });

    //f-ajax   - отправка форм
    $('.f-ajax').on('submit', function(event){
      event.preventDefault();
      var $form = $(this);

      var data = $form.serialize();
      data['token'] = "tnbm567sgfg4556sdfDSg";

      $.ajax({
        url: $form.attr("action"),
        type: 'POST',
        data: '',
        success: function(result) {
          if(result == "OK"){
            alert("Заявка отправлена!");       
          }
          else
            alert("Произошла ошибка!");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert("Произошла ошибка!");
        }
      });
    });

    

    
    

    
    

    
    

    
    $(":input").inputmask();

    

    /**

     * Calc button submit

     */

    $(".calculator__submit").on("click", function (event) {

    

        event.preventDefault();

        event.stopPropagation();

    

        var contract_val_array = $("#e-date").val().split("/");

        var actual_val_array = $("#r-date").val().split("/");

    

        var flat_price = parseInt($("#price").val().split("/"));

    

        var contract_date = new Date(contract_val_array[2], contract_val_array[1], contract_val_array[0]);

        var actual_date = new Date(actual_val_array[2], actual_val_array[1], actual_val_array[0]);

    

        /**

         * hours*minutes*seconds*milliseconds

         * @type {number}

         */

        var oneDay = 24 * 60 * 60 * 1000;

    

        /**

         * Difference between two dates

         * @type {number}

         */

        var diffDays = Math.round(Math.abs((contract_date.getTime() - actual_date.getTime()) / (oneDay)));

    

        var refinancing = 9;

    

        var fine = ((flat_price * diffDays * refinancing) / (300 * 100)) * 2;

        var moral = 10000;

        var costs = 10000;

    

        $("#fee").val(fine);

        $("#moral").val(moral);

        $("#costs").val(costs);

    

        $("#result").val(costs + moral + fine);

    

    });

    

    /**

     * Format input in flat price input

     */

    $("#price").on("keyup", function () {

    

        debugger;

        var value = $("#price").val();

    

        value = value.toString().replace(/[^\d]/g, "");

        value = value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    

        $("#price").val(value);

    

    });

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    // (function() {

    //     var $mainNav = $('.main-nav');

    //     var height = $mainNav.outerHeight();

        

    //     var bottom = -height / 2 + 'px';

    //     $mainNav.css('bottom', bottom)

        

    // })()

    
    var adress;

    adress = [59.9315411964636,30.351687840589967];

    

    ymaps.ready(function () {

      var myMap;

      

      ymaps.geocode(adress).then(function (res) {

          myMap = new ymaps.Map('map', {

              center: res.geoObjects.get(0).geometry.getCoordinates(),

              zoom : 16

          });

          var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

                hintContent: 'Собственный значок метки',

                balloonContent: 'Это красивая метка'

            }, {

                // Опции.

                // Необходимо указать данный тип макета.

                iconLayout: 'default#image',

                // Своё изображение иконки метки.

                iconImageHref: 'images/pointer_tr.png',

                // Размеры метки.

                iconImageSize: [30,40],

                // Смещение левого верхнего угла иконки относительно

                // её "ножки" (точки привязки).

                iconImageOffset: [-15, -40]

            });

        

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors.disable('scrollZoom');

        });

      

    });

    
    

    
    ; (function () {

    

        $brandsList = $('.mobile-services__brands-list');

    

        // function and variables, 'unslick' while window size reach maximum width

        var maxWidth = 768,

            slickObject = {

                infinite: true,

                slidesToShow: 3,

                slidesToScroll: 2,

                arrows: false,

                autoplay: true,

                autoplaySpeed: 2000,

                mobileFirst: true,

                responsive: [

                    {

                        breakpoint: 480,

                        settings: {

                            slidesToShow: 6,

                            slidesToScroll: 3

                        }

                    },

                    {

                        breakpoint: maxWidth,

                        settings: 'unslick'

                    },

    

                ]

            },

            runSlick = function () {

                $brandsList.slick(slickObject);

            };

    

        // slick initialization while document ready

        runSlick();

    

        // listen to jQuery's window resize

        $(window).on('resize', function () {

    

            if ($brandsList.hasClass('slick-initialized')) return;

            var width = $(window).width();

            if (width < maxWidth) {

                // reinit slick while window's width is less than maximum width

                runSlick();

            }

        });

    

    

    })();

    

    

    
    

    
    

    
    

    
    

    
    

    
    ;(function() {

    

        var $spots = $('.spots'),

            $car = $('.spots__car');

    

        var spotsHeight = $spots.outerHeight(),

            spotsOffset = $spots.offset(),

            spotsTopPosition = spotsOffset.top - spotsHeight / 2;

    

        $(window).scroll(function () {

            

            var wScroll = $(this).scrollTop();

    

            if (wScroll >= spotsTopPosition) {

                var dynamic = wScroll - spotsTopPosition;

    

                if ($(window).width() < 480) {

                    $car.css({

                        'background-position': dynamic / 3 + '% top'

                    })

                } else {

                    $car.css({

                        'background-position': dynamic / 7 + '% top'

                    })

                }

                

            }

    

        })

    

    })();

    
    

    
    

    
    

    
    
  });

})(jQuery)