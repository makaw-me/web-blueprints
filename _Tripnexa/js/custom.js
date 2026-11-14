(function () {

	'use strict';

	var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	AOS.init({
		duration: prefersReducedMotion ? 0 : 800,
		easing: 'slide',
		once: true,
		disable: prefersReducedMotion
	});

	if (!prefersReducedMotion && typeof Rellax !== 'undefined') {
		new Rellax('.rellax');
	}

	var preloader = function() {
		var loader = document.querySelector('.loader');
		var overlay = document.getElementById('overlayer');

		if (!loader || !overlay) return;

		function fadeOut(el) {
			el.style.opacity = 1;
			(function fade() {
				if ((el.style.opacity -= 0.1) < 0) {
					el.style.display = 'none';
				} else {
					requestAnimationFrame(fade);
				}
			})();
		}

		setTimeout(function() {
			fadeOut(loader);
			fadeOut(overlay);
		}, prefersReducedMotion ? 0 : 200);
	};
	preloader();

	var tinyslider = function() {
		var el = document.querySelectorAll('.wide-slider-testimonial');
		if (el.length > 0) {
			tns({
				container: '.wide-slider-testimonial',
				items: 1,
				slideBy: 1,
				axis: 'horizontal',
				swipeAngle: false,
				speed: prefersReducedMotion ? 0 : 700,
				nav: true,
				loop: true,
				edgePadding: 40,
				controls: true,
				controlsPosition: 'bottom',
				autoHeight: true,
				autoplay: !prefersReducedMotion,
				mouseDrag: true,
				autoplayHoverPause: true,
				autoplayTimeout: 4500,
				autoplayButtonOutput: false,
				controlsContainer: '#prevnext-testimonial',
				responsive: {
					350: { items: 1 },
					500: { items: 2 },
					600: { items: 3 },
					900: { items: 5 }
				}
			});
		}

		var destinationSlider = document.querySelectorAll('.destination-slider');
		if (destinationSlider.length > 0) {
			tns({
				container: '.destination-slider',
				mouseDrag: true,
				items: 1,
				axis: 'horizontal',
				swipeAngle: false,
				speed: prefersReducedMotion ? 0 : 700,
				edgePadding: 50,
				nav: true,
				gutter: 30,
				autoplay: !prefersReducedMotion,
				autoplayButtonOutput: false,
				controlsContainer: '#destination-controls',
				responsive: {
					350: { items: 1 },
					500: { items: 2 },
					600: { items: 3 },
					900: { items: 5 }
				}
			});
		}
	};
	tinyslider();

	var lightbox = function() {
		if (document.querySelector('.glightbox3')) {
			GLightbox({
				selector: '.glightbox3'
			});
		}
	};
	lightbox();

	var interactiveForms = function() {
		var forms = document.querySelectorAll('.tripnexa-form');
		forms.forEach(function(form) {
			form.addEventListener('submit', function(e) {
				e.preventDefault();
				var status = form.querySelector('.form-status');
				if (status) {
					status.textContent = form.getAttribute('data-success-message') || 'Thank you! Your message has been received by the Tripnexa team.';
					status.classList.remove('d-none');
				}
				form.reset();
			});
		});
	};
	interactiveForms();

})();
