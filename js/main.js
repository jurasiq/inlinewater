$(document).ready(function(){

	$(function(){
		$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
			var target = $(this).attr('href'),
					bl_top = $(target).offset().top - 85;
			$('body, html').animate({scrollTop: bl_top}, 600);
			return false;
		})
	});

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