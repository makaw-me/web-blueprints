(function ($) {
    "use strict";

    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    if (!prefersReducedMotion && typeof WOW !== 'undefined') {
        new WOW().init();
    }


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        if (prefersReducedMotion) {
            $('html, body').scrollTop(0);
        } else {
            $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        }
        return false;
    });


    // Facts counter
    if ($('[data-toggle="counter-up"]').length > 0) {
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: prefersReducedMotion ? 0 : 2000
        });
    }


    // Skills
    if ($('.skill').length > 0) {
        $('.skill').waypoint(function () {
            $('.progress .progress-bar').each(function () {
                $(this).css("width", $(this).attr("aria-valuenow") + '%');
            });
        }, {offset: '80%'});
    }


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: !prefersReducedMotion,
        smartSpeed: prefersReducedMotion ? 0 : 1000,
        margin: 25,
        loop: true,
        nav: false,
        dots: true,
        dotsData: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: !prefersReducedMotion,
        smartSpeed: prefersReducedMotion ? 0 : 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left" aria-hidden="true"></i><span class="visually-hidden">Previous testimonial</span>',
            '<i class="bi bi-chevron-right" aria-hidden="true"></i><span class="visually-hidden">Next testimonial</span>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
})(jQuery);

