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
		const cityElement = document.getElementById("visitor-city");
		// Виконуємо запит до API ipinfo.io за допомогою Fetch
		fetch("https://ipinfo.io/178.136.177.48?token=fa07843fb38f4c")
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
				cityElement.textContent = city;
			})
			.catch(function (error) {
				console.error(error);
				cityElement.textContent = "EROR";
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
			768: {
				slidesPerView: 3,
			},
		},
	});
})();
