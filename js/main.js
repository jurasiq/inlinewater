$(document).ready(function () {

	$(function () {
		$('a[data-target^="anchor"]').bind('click.smoothscroll', function () {
			var target = $(this).attr('href'),
				bl_top = $(target).offset().top - 85;
			$('body, html').animate({
				scrollTop: bl_top
			}, 600);
			return false;
		})
	});

	$('#catalog-slider').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 4,
				nav: true,
			}
		}
	});

	$('#brand-slider').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
				nav: true
			},
			992: {
				items: 5,
				nav: true,
			}
		}
	});

});

//Открытие модальных форм
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

function closeModal(btn) {
	btn.closest('.modal').classList.remove('modal--visible');
	btn.closest('.modal-overlay').classList.remove('modal-overlay--visible')
}