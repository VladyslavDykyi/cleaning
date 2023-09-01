"use strict";
(function () {
	const burger = document.querySelector('.burger');
	burger.addEventListener('click',()=> {
		const header = document.querySelector('.header')
		header.classList.toggle('active');
		if (!header.classList.contains('.active')) {
			document.querySelector('body').classList.toggle('lock');
		}
	});
})();