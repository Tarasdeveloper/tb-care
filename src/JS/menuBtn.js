document.addEventListener('DOMContentLoaded', function () {
	const headerMenuBtn = document.querySelector('.header-menu_btn');
	const closeButton = document.querySelector('.aside_menu-btn');
	const nav = document.querySelector('.aside_menu');

	headerMenuBtn.addEventListener('click', function () {
		nav.classList.toggle('show');
	});

	closeButton.addEventListener('click', function () {
		nav.classList.remove('show');
	});
});
