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
    
    
    // Initiate wowjs only when reduced motion is not preferred
    if (!prefersReducedMotion && typeof WOW === 'function') {
        new WOW().init();
    }


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn(prefersReducedMotion ? 0 : 'slow');
        } else {
            $('.back-to-top').fadeOut(prefersReducedMotion ? 0 : 'slow');
        }
    });
    $('.back-to-top').click(function () {
        if (prefersReducedMotion) {
            window.scrollTo(0, 0);
        } else {
            $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        }
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: prefersReducedMotion ? 0 : 1000,
        center: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left" aria-hidden="true"></i><span class="visually-hidden">Previous testimonial</span>',
            '<i class="bi bi-arrow-right" aria-hidden="true"></i><span class="visually-hidden">Next testimonial</span>'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

})(jQuery);
