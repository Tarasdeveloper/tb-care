document.addEventListener('DOMContentLoaded', function () {
	const headerMenuBtn = document.querySelector('.header-menu_btn');
	const closeButton = document.querySelector('.aside_menu-btn');
	const nav = document.querySelector('.aside_menu');
	const backdrop = document.getElementById('backdrop');

	headerMenuBtn.addEventListener('click', function () {
		nav.classList.toggle('show');
		backdrop.style.display = 'block';
	});

	closeButton.addEventListener('click', function () {
		nav.classList.remove('show');
		backdrop.style.display = 'none';
	});

	backdrop.addEventListener('click', function () {
		backdrop.style.display = 'none';
		nav.classList.remove('show');
	});
});
