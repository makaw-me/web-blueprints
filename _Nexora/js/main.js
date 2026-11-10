(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });

    // Accessible Dropdown Management
    $(document).ready(function () {
        // Keyboard support: Escape closes dropdown and refocuses toggle
        $('.navbar .dropdown').on('keydown', function (e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                var $toggle = $(this).find('.dropdown-toggle');
                var bsDropdown = bootstrap.Dropdown.getInstance($toggle[0]);
                if (bsDropdown) {
                    bsDropdown.hide();
                    $toggle.focus();
                }
            }
        });
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });

    // Check for reduced motion preference
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Testimonials carousel
    var owlOptions = {
        autoplay: !prefersReducedMotion,
        smartSpeed: prefersReducedMotion ? 0 : 800,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left" aria-hidden="true"></i><span class="visually-hidden">Previous</span>',
            '<i class="bi bi-arrow-right" aria-hidden="true"></i><span class="visually-hidden">Next</span>'
        ]
    };
    $(".testimonial-carousel").owlCarousel(owlOptions);

    // Bootstrap header carousel motion check
    if (prefersReducedMotion) {
        $('#header-carousel').carousel({
            interval: false
        });
    }

})(jQuery);
