(function(){

	'use strict';

	var siteMenuClone = function() {
		var jsCloneNavs = document.querySelectorAll('.js-clone-nav');
		var siteMobileMenuBody = document.querySelector('.site-mobile-menu-body');

		if (siteMobileMenuBody) {
			jsCloneNavs.forEach(function(nav) {
				var navCloned = nav.cloneNode(true);
				navCloned.setAttribute('class', 'site-nav-wrap');
				siteMobileMenuBody.appendChild(navCloned);
			});
		}

		setTimeout(function() {
			var mobileMenu = document.querySelector('.site-mobile-menu');
			if (!mobileMenu) return;
			var hasChildrens = mobileMenu.querySelectorAll('.has-children');

			var counter = 0;
			hasChildrens.forEach(function(hasChild) {
				var refEl = hasChild.querySelector('a');

				var newElBtn = document.createElement('button');
				newElBtn.type = 'button';
				newElBtn.setAttribute('class', 'arrow-collapse collapsed');
				newElBtn.setAttribute('aria-label', 'Toggle submenu');
				newElBtn.setAttribute('aria-expanded', 'false');
				newElBtn.setAttribute('data-bs-toggle', 'collapse');
				newElBtn.setAttribute('data-bs-target', '#collapseItem' + counter);

				hasChild.insertBefore(newElBtn, refEl);

				var dropdown = hasChild.querySelector('.dropdown');
				if (dropdown) {
					dropdown.setAttribute('class', 'collapse');
					dropdown.setAttribute('id', 'collapseItem' + counter);
				}

				counter++;
			});
		}, 300);

		var menuToggles = document.querySelectorAll('.js-menu-toggle');
		var openTrigger = null;

		var setMenuState = function(isOpen) {
			if (isOpen) {
				document.body.classList.add('offcanvas-menu');
			} else {
				document.body.classList.remove('offcanvas-menu');
			}
			menuToggles.forEach(function(toggle) {
				toggle.classList.toggle('active', isOpen);
				if (toggle.hasAttribute('aria-expanded')) {
					toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
				}
			});
		};

		menuToggles.forEach(function(mtoggle) {
			mtoggle.addEventListener('click', function(e) {
				e.preventDefault();
				var willOpen = !document.body.classList.contains('offcanvas-menu');
				if (willOpen) {
					openTrigger = mtoggle;
				}
				setMenuState(willOpen);
				if (!willOpen && openTrigger) {
					openTrigger.focus();
				}
			});
		});

		document.addEventListener('keydown', function(event) {
			if (event.key === 'Escape' && document.body.classList.contains('offcanvas-menu')) {
				setMenuState(false);
				if (openTrigger) {
					openTrigger.focus();
				}
			}
		});

		var specifiedElement = document.querySelector('.site-mobile-menu');
		document.addEventListener('click', function(event) {
			if (!specifiedElement) return;
			var isClickInside = specifiedElement.contains(event.target);
			var isToggleClick = Array.prototype.some.call(menuToggles, function(mtoggle) {
				return mtoggle.contains(event.target);
			});

			if (!isClickInside && !isToggleClick && document.body.classList.contains('offcanvas-menu')) {
				setMenuState(false);
			}
		});
	};

	siteMenuClone();

})();
