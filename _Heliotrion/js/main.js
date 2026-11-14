(function ($) {
    "use strict";

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
    new WOW().init();


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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters .portfolio-filter-btn').on('click', function () {
        $("#portfolio-flters .portfolio-filter-btn").removeClass('active').attr('aria-pressed', 'false');
        $(this).addClass('active').attr('aria-pressed', 'true');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    // Interactive form feedback for static pages
    $('form.heliotrion-form').on('submit', function (e) {
        e.preventDefault();
        var $form = $(this);
        var $feedback = $form.find('.form-feedback');
        if ($feedback.length === 0) {
            $feedback = $('<div class="form-feedback alert alert-success mt-3 mb-0" role="status"></div>');
            $form.append($feedback);
        }
        var msg = $form.data('success-message') || 'Thank you. Your submission has been received, and our team will respond within one business day.';
        $feedback.text(msg).removeClass('d-none');
        this.reset();
    });

    // Newsletter signup feedback
    $('.footer button[type="button"]').on('click', function () {
        var $btn = $(this);
        var $wrapper = $btn.closest('.position-relative');
        var $input = $wrapper.find('input[type="email"], input[type="text"]');
        var val = $.trim($input.val());
        var $msg = $wrapper.next('.newsletter-feedback');
        if ($msg.length === 0) {
            $msg = $('<p class="newsletter-feedback small mt-2 mb-0"></p>');
            $wrapper.after($msg);
        }
        if (!val || val.indexOf('@') === -1 || val.indexOf('.') === -1) {
            $msg.removeClass('text-primary').addClass('text-warning').text('Please enter a valid email address.');
            return;
        }
        $msg.removeClass('text-warning').addClass('text-primary').text('Subscribed! Watch your inbox for Heliotrion updates.');
        $input.val('');
    });
    
})(jQuery);

