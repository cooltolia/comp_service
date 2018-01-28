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