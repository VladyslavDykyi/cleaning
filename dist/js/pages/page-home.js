"use strict";
(function () {
	const swiper = new Swiper(".mySwiper1", {
		slidesPerView: 1,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 2,
			},
			1024: {
				slidesPerView: 3,
			},
		},
	});
	const swiper2 = new Swiper(".mySwiper2", {
		slidesPerView: 2,
		centeredSlidesBounds: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
			},
			840: {
				slidesPerView: 4,
			},
			1050: {
				slidesPerView: 5,
			},
			1235: {
				slidesPerView: 6,
			},
		},
	});

	const btnCalculator = document.querySelector('#calculBtn');
	btnCalculator.addEventListener('click',(event) => {
		const calculator = document.querySelector('#root');
		calculator.classList.toggle('active');
		const headerHeight = document.querySelector('.header-bg').offsetHeight;
		const targetOffset = calculator.offsetTop - headerHeight;
		window.scrollTo({
			top: targetOffset,
			behavior: 'smooth', // Добавить плавную прокрутку (по желанию)
		});
	});
	const btnCloseCalculator = document.querySelector('#closeCalculator');
	btnCloseCalculator.addEventListener('click',(event) => {
		const calculator = document.querySelector('#root');
		calculator.classList.remove('active');
	});
	const burger = document.querySelector('.burger');
	burger.addEventListener('click',()=> {
		const header = document.querySelector('.header')
		header.classList.toggle('active');
		if (!header.classList.contains('.active')) {
			document.querySelector('body').classList.toggle('lock');
		}
	});
	document.addEventListener('DOMContentLoaded', function () {
		const links = document.querySelectorAll('a[href^="#"]');
	
		for (const link of links) {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('href').substring(1); // Извлекаем id целевого элемента
				const targetElement = document.getElementById(targetId);
				const headerHeight = document.querySelector('.header-bg').offsetHeight; // Высота хедера

				if (targetElement) {
					if(window.innerWidth < 1024 && targetId === 'servicePackages') {
						burger.click();
						setTimeout(()=>{
							const headerHeight = document.querySelector('.header-bg').offsetHeight;
							const targetOffset = targetElement.offsetTop - headerHeight;
							window.scrollTo({
								top: targetOffset,
								behavior: 'smooth', // Добавить плавную прокрутку (по желанию)
							});
						},100);
					}
					if(targetElement.id === 'root') targetElement.classList.add('active');
					const targetOffset = targetElement.offsetTop - headerHeight;
					window.scrollTo({
						top: targetOffset,
						behavior: 'smooth', // Добавить плавную прокрутку (по желанию)
					});
				}
			});
		}
	});
	$('.telMask').inputmask('+38 (099) 999-99-99');

	document.addEventListener('DOMContentLoaded', function () {
			const scrollButton = document.querySelector('.service-packages-list');
			const targetElement = document.querySelector('#root');
			scrollButton.addEventListener('click', function (e) {
				// Використовуємо метод scrollIntoView для прокручування до цільового елемента
				if(!e.target.classList.contains('btn-pinkBig')) return
				if (!targetElement.classList.contains('active')) targetElement.classList.add('active');
				const headerHeight = document.querySelector('.header-bg').offsetHeight;
				window.scrollTo({
					top: targetElement.offsetTop - headerHeight,
					behavior: 'smooth',
				});
			});
	});
	const div = document.querySelector('.service-packages-list');
	div.addEventListener('click',e => {
		if (!e.target.classList.contains('btn-read-full')) return
		const item = e.target.closest('.service-packages-list-item').classList.toggle('active');
	});
})();