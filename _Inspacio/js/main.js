(function ($) {
    "use strict";
    
    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dropdown on mouse hover & keyboard escape handling
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseenter', function () {
                    $(this).addClass('show');
                    $(this).find('.dropdown-toggle').attr('aria-expanded', 'true');
                    $(this).find('.dropdown-menu').addClass('show');
                }).on('mouseleave', function () {
                    $(this).removeClass('show');
                    $(this).find('.dropdown-toggle').attr('aria-expanded', 'false');
                    $(this).find('.dropdown-menu').removeClass('show');
                });
            } else {
                $('.navbar .dropdown').off('mouseenter').off('mouseleave');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        // Escape key closes open dropdowns and returns focus
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                var $openDropdown = $('.navbar .dropdown.show');
                if ($openDropdown.length) {
                    $openDropdown.removeClass('show');
                    $openDropdown.find('.dropdown-menu').removeClass('show');
                    $openDropdown.find('.dropdown-toggle').attr('aria-expanded', 'false').focus();
                }
            }
        });
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').stop(true, true).fadeIn('slow').css('display', 'flex');
        } else {
            $('.back-to-top').stop(true, true).fadeOut('slow');
        }
    });

    $('.back-to-top').click(function (e) {
        e.preventDefault();
        if (prefersReducedMotion) {
            window.scrollTo(0, 0);
        } else {
            $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        }
        return false;
    });

    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: !prefersReducedMotion,
        smartSpeed: prefersReducedMotion ? 0 : 1200,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 2 }
        }
    });

    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters').on('click', 'li, button', function (e) {
        e.preventDefault();
        $('#portfolio-flters li, #portfolio-flters button').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter') || $(this).data('filter');
        portfolioIsotope.isotope({ filter: filterValue });
    });

    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: !prefersReducedMotion,
        smartSpeed: prefersReducedMotion ? 0 : 1200,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: { items: 1 },
            576: { items: 1 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: !prefersReducedMotion,
        smartSpeed: prefersReducedMotion ? 0 : 900,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // Page Content Scroll Reveal System
    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        document.body.classList.add('reveal-enabled');

        var revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px'
        });

        // Elements to observe for scroll reveal
        var revealSelectors = [
            '.section-title',
            '.section-title + p',
            '.portfolio-container .portfolio-item > div',
            '.card',
            '.accordion .card',
            '.service-carousel',
            '.team-carousel',
            '.testimonial-carousel',
            '.contact-form',
            '#contactForm',
            '.bg-primary.h-100',
            '.bg-light.p-4',
            '.bg-light.p-md-5',
            'main article > div',
            'main .row.mt-4 > div'
        ];

        document.querySelectorAll(revealSelectors.join(', ')).forEach(function (el) {
            // Check if element is already in the viewport upon load
            var rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('reveal-on-scroll', 'is-revealed');
            } else {
                el.classList.add('reveal-on-scroll');
                revealObserver.observe(el);
            }
        });
    }
    
})(jQuery);
