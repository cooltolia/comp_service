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

