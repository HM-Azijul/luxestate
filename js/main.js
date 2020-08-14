(function ($) {
    "use strict";
    // SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 2000,
        speedAsDuration: true
    });

    // stycky header
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
})(jQuery);