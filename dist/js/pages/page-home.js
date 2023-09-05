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
	document.addEventListener("DOMContentLoaded", function () {
		const cityElement = document.querySelectorAll(".visitor-city");
		// Виконуємо запит до API ipapi.co за допомогою Fetch
		fetch("https://ipapi.co/json/")
			.then(function (response) {
				if (!response.ok) {
					throw new Error("Помилка під час запиту до API ipinfo.io");
				}
				return response.json();
			})
			.then(function (data) {
				// Вилучаємо інформацію про місто

				const city = data.city;
				// Вставляємо місто в HTML
				cityElement.forEach(item => {
					item.textContent = city;
				});
			})
			.catch(function (error) {
				console.error(error);
				cityElement.forEach(item => {
					item.textContent = "EROR";
				});
			});
	});
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

	const list = document.querySelector('.service-packages-list');
	list.addEventListener('click',e => {
		if (!e.target.classList.contains('text-wrap')) return
		const item = e.target.closest('.service-packages-list-item').classList.toggle('active');
		console.log(item);
	});
})();
