(function ($) {
	"use strict";

$(document).ready(function(){
  $('.slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
  	autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
});

$(document).ready(function () {
	$('mobile-menu').meanmenu({
		meanMenuContainer: ".mobile-menu",
		meanScreenWidth: "992"
	});
});

$(window).on("load",function() {
	
	$("#loading").fadeOut(500);
	
});

// wow js
new WOW().init();


})(jQuery);



