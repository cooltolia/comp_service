(function() {

    var $spots = $('.spots'),
        $car = $('.spots__car');

    var spotsHeight = $spots.outerHeight(),
        spotsOffset = $spots.offset(),
        spotsTopPosition = spotsOffset.top - spotsHeight;

    $(window).scroll(function () {
        
        var wScroll = $(this).scrollTop();

        if (wScroll >= spotsTopPosition) {
            var dynamic = wScroll - spotsTopPosition;
            
            $car.css({
                'background-position': dynamic / 5 + '% top'
            })
        }

    })

})();