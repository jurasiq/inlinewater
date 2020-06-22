$(document).ready(function(){

	$('#catalog-slider').owlCarousel({
		loop: true,
		margin: 30,
		responsive:{
			0:{
				items: 1,
			},
			768:{
				items: 3,
				nav: true
			},
			992:{
				items: 4,
				nav: true,
			}
		}
	});

	$('#brand-slider').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		responsive:{
			0:{
				items: 1,
			},
			768:{
				items: 3,
				nav: true
			},
			992:{
				items: 5,
				nav: true,
			}
		}
	});

});