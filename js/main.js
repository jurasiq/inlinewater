$(document).ready(function(){

	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsiveClass: true,
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

});