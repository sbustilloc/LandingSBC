$(function(){
	'use strict';


	/*--------------------------------------------------
    Scrollspy Bootstrap 
    ---------------------------------------------------*/

    $('body').scrollspy({
    	target: '#header',
    	offset: 100
    });


	/*--------------------------------------------------
    Smooth Scroll 
    ---------------------------------------------------*/

	smoothScroll.init({
		selector: '.smoothScroll',
		speed: 1000,
		offset: 100,
		before: function(anchor, toggle){
			// Check if mobile navigation is active
			var query = Modernizr.mq('(max-width: 767px)');
			// Check if element is navigation eelement
			var navItem = $(toggle).parents("#main-navbar").length;
			// If mobile nav & nav item then close nav
			if (query && navItem !== 0) {
				$("button.navbar-toggle").click();
			}
		}
	});


	/*--------------------------------------------------
    Mixitup
    ---------------------------------------------------*/

    var mixer = mixitup('#portfolio-grid', {

		selectors: {
			control: '[data-mixitup-control]'
		}
		
	});


	/*--------------------------------------------------
    Slick Slider
    ---------------------------------------------------*/

	$('.slider-container').slick({
		arrows: false,
		autoplay: true,
		centerMode: true,
		centerPadding: '100px',
		variableWidth: true,
		responsive: [
			{
				breakpoint: 568,
				settings: {
					centerMode: false,
					variableWidth: false
				}
			}
		]
	});


	/*--------------------------------------------------
    Porfolio cursor
    ---------------------------------------------------*/

	$('.team-member').on('mousedown', function() {
	    $(this).removeClass('grabbable');
	    $(this).addClass('grabbing');
	});

	$('.team-member').on('mouseleave mouseup', function() {
	    $(this).removeClass('grabbing');
	    $(this).addClass('grabbable');
	});

	/*--------------------------------------------------
    Current Year
    ---------------------------------------------------*/

    // Automatically update copyright year in the footer
	var currentTime = new Date();
	var year = currentTime.getFullYear();
	$("#year").text(year);


});