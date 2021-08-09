'use strict';

(function iifeMenu(document, window, undefined) {
	var menuBtn = document.querySelector('.menu-btn');
	var	menu = document.querySelector('.menu-list');

	function toggleMenu() {
		menu.classList.toggle('menu-list--active');
		menu.classList.toggle('menu-list--transition');
		this.classList.toggle('menu-btn--active');
		this.setAttribute(
			'aria-expanded',
			this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
		);
	}

	function removeMenuTransition() {
		this.classList.remove('menu-list--transition');
	}

	if (menuBtn && menu) {
		menuBtn.addEventListener('click', toggleMenu, false);
		menu.addEventListener('transitionend', removeMenuTransition, false);
	}
}(document, window));
