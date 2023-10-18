document.addEventListener('DOMContentLoaded', function () {
	// Функция для получения данных из Laravel API

	(() => {
		function fetchServicePackagesAPI3() {
			fetch('http://clean.webgenerator.com.ua/api/v1/service-packages/all')
				.then(response => response.json())
				.then(data => {
					console.log(data);
					const servicePackagesList = document.querySelector('.service-packages-list');
					data.data.forEach(item => {
						const wrapper = document.createElement('li');
						wrapper.classList.add('service-packages-list-item');
						wrapper.innerHTML = `<picture>
                <source srcSet="${item.img}" type="image/webp">
                <img class="service-packages-img" src="${item.img}" alt="">
              </picture>
              <h3 class="service-packages-title t-medium t-6">
                ${item.name}
              </h3>
              <h4 class="service-packages-name t-bold t-7">
                ${item.room}
              </h4>
              <ul class="service-packages-dop">
                <li class="service-packages-dop-btn">
                  <button class="btn-read-full" type="button"></button>
                </li>
              </ul>
              <div class="service-packages-btn-wrapper">
                <button class="btn btn-pink" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                  Замовити
                </button>
              </div>
            <div class="service-packages-btn-wrapper">
                <a class="btn btn-pinkBig"  href="#root">
                  Розрахувати
                </a>
          </div>`;
						const ul = wrapper.querySelector('.service-packages-dop');
						item.list_false.forEach(liTrue => {
							const wrapperLi = document.createElement('li');
							wrapperLi.classList.add('service-packages-dop-item');
							wrapperLi.innerHTML = `<i class="bi bi-x-circle-fill"></i>
                <span>${item}</span>`;
							ul.prepend(wrapperLi);
						})
						item.list_true.forEach(liTrue => {
							const wrapperLi = document.createElement('li');
							wrapperLi.classList.add('service-packages-dop-item');
							wrapperLi.innerHTML = `<i class="bi bi-check-circle-fill"></i>
                <span>${item}</span>`;
							ul.prepend(wrapperLi);
						})
						servicePackagesList.append(wrapper);
					})
				})
				.catch(error => {
					console.error("Помилка при завантаженні данних: ", error);
				});
		}
		fetchServicePackagesAPI3();

		function fetchAdditionalFromAPI() {
			fetch('http://clean.webgenerator.com.ua/api/v1/extra-services/all')
				.then(response => response.json())
				.then(data => {
					const additionalList = document.querySelector('.additional-services-list');
					data.data.forEach(item => {
						const wrapper = document.createElement('li');
						wrapper.classList.add('swiper-slide');
						wrapper.innerHTML = `<div class="additional-services-list-item">
                            <picture>
                                <source srcSet="${item.svg}" type="image/webp">
                                <img src="${item.svg}" alt="${item.text}">
                            </picture>
                        <h5 class="t-s-bold t-6">${item.text}</h5>
                        <p class=" t-bold t-3">${item.price} ${item.currency}</p>
                    </div>`;
						additionalList.append(wrapper);
					});
				})
				.catch(error => {
					console.error("Помилка при завантаженні данних: ", error);
				});
		}

		fetchAdditionalFromAPI();

		function fetchFaqsFromAPI() {
			fetch('http://clean.webgenerator.com.ua/api/v1/faqs/all')
				.then(response => response.json())
				.then(data => {
					let faqsContainer = document.getElementById('accordionFlushExample');
					data.data.forEach(faq => {
						let faqItem = document.createElement('div');
						faqItem.classList.add('accordion-item');

						let question_wrap = document.createElement('h2');
						question_wrap.classList.add('accordion-header');
						question_wrap.setAttribute('id', "flush-heading" + faq.id);
						let question_button = document.createElement('button');
						question_button.classList.add('accordion-button', 'collapsed');
						Object.entries({
							type: "button",
							"data-bs-toggle": "collapse",
							"data-bs-target": '#flush-collapse' + faq.id,
							"aria-expanded": "false",
							"aria-controls": 'flush-collapse' + faq.id
						}).forEach(([k, v]) => question_button.setAttribute(k, v));
						question_button.textContent = faq.question;
						question_wrap.appendChild(question_button);
						faqItem.appendChild(question_wrap);

						let answer_wrap = document.createElement('div');
						answer_wrap.classList.add('accordion-collapse', 'collapse');
						Object.entries({
							id: "flush-collapse" + faq.id,
							"aria-labelledby": "flush-heading" + faq.id,
							"data-bs-parent": "#accordionFlushExample"
						}).forEach(([k2, v2]) => answer_wrap.setAttribute(k2, v2));
						let answer_body = document.createElement('div');
						answer_body.classList.add('accordion-body');
						let answer_p = document.createElement('p');
						answer_p.textContent = faq.answer;
						answer_body.appendChild(answer_p);
						answer_wrap.appendChild(answer_body);
						faqItem.appendChild(answer_wrap);

						faqsContainer.appendChild(faqItem);
					});
				})
				.catch(error => {
					console.error("Помилка при завантаженні данних: ", error);
				});
		}

		fetchFaqsFromAPI();

		function fetchReviewsFromAPI() {
			fetch('http://clean.webgenerator.com.ua/api/v1/reviews/all')
				.then(response => response.json())
				.then(data => {
					let reviewsContainer = document.querySelectorAll('.mySwiper1 ul');
					data.data.forEach(review => {
						let reviewItem = document.createElement('li');
						reviewItem.classList.add('swiper-slide', 'works-reviews-list-item');

						if (review.media) {
							let images_wrap = document.createElement('div');
							images_wrap.classList.add('works-reviews-img');

							review.media.slice(0, 2).forEach(src => {
								let pictureElement = createPictureElement(src);
								images_wrap.appendChild(pictureElement);
							});
							reviewItem.appendChild(images_wrap);
						}

						let orderName_h3 = document.createElement('h3');
						orderName_h3.classList.add('text-center', 't-bold', 't-4');
						orderName_h3.textContent = review.orderName;

						let username_h5 = document.createElement('h5');
						username_h5.classList.add('text-center', 't-bold', 't-4');
						username_h5.textContent = review.username;

						let review_p = document.createElement('p');
						review_p.classList.add('text-center', 't-5');
						let review_em = document.createElement('em');
						review_em.textContent = review.review;
						review_p.appendChild(review_em);


						reviewItem.appendChild(orderName_h3);
						reviewItem.appendChild(username_h5);
						reviewItem.appendChild(review_p);

						reviewsContainer[0].appendChild(reviewItem);
					});
				})
				.catch(error => {
					console.error("Помилка при завантаженні данних: ", error);
				});
		}

		fetchReviewsFromAPI();

		function createPictureElement(src) {
			let picture = document.createElement('picture');
			let source = document.createElement('source');
			Object.entries({
				type: "image/webp",
				"srcset": src
			}).forEach(([key, value]) => source.setAttribute(key, value));
			picture.appendChild(source);

			let img = document.createElement('img');
			img.setAttribute("src", src);
			picture.appendChild(img);

			return picture;
		}
	})();
});