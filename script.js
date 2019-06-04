$(document).ready(function() {

	$('.wrapper').hide();
	$('.home-section').hide();
	$('.about-section').hide();
	$('.tattoos-section').hide();
	$('.artists-section').hide();
	$('.contact-section').hide();
	$('.loader').delay(2000).fadeOut('slow');
	$('.wrapper').delay(2500).fadeIn(1500);

	/* NAVIGATION ANIMATION START */

	$('.home').click(function() {

		$('.about').delay(800).animate({
			'height': '0px'
		},500);
		$('.about').children().delay(800).fadeOut();
		$('.tattoos').delay(600).animate({
			'height': '0px'
		},500);
		$('.tattoos').children().delay(600).fadeOut();
		$('.artists').delay(400).animate({
			'height': '0px'
		},500);
		$('.artists').children().delay(400).fadeOut();
		$('.contact').delay(200).animate({
			'height': '0px'
		},500);
		$('.contact').children().delay(200).fadeOut();
		$('.home').delay(1000).animate({
			'height': '0px'
		},500);
		$('.home').children().delay(1000).fadeOut();

		/* COPY FROM HERE */
		$('.main').delay(1000).fadeOut();

		$('.about-section').hide();
		$('.tattoos-section').hide();
		$('.artists-section').hide();
		$('.contact-section').hide();


		$('.home-section').delay(1500).fadeIn();

	});

	$('.about').click(function() {

		$('.about').delay(1000).animate({
			'height': '0px'
		},500);
		$('.about').children().delay(1000).fadeOut();
		$('.tattoos').delay(600).animate({
			'height': '0px'
		},500);
		$('.tattoos').children().delay(600).fadeOut();
		$('.artists').delay(400).animate({
			'height': '0px'
		},500);
		$('.artists').children().delay(400).fadeOut();
		$('.contact').delay(200).animate({
			'height': '0px'
		},500);
		$('.contact').children().delay(200).fadeOut();
		$('.home').delay(800).animate({
			'height': '0px'
		},500);
		$('.home').children().delay(800).fadeOut();

		$('.main').delay(1000).fadeOut();

		$('.home-section').hide();
		$('.tattoos-section').hide();
		$('.artists-section').hide();
		$('.contact-section').hide();

		$('.about-section').delay(1500).fadeIn();

	});

	$('.tattoos').click(function() {

		$('.about').delay(800).animate({
			'height': '0px'
		},500);
		$('.about').children().delay(800).fadeOut();
		$('.tattoos').delay(1000).animate({
			'height': '0px'
		},500);
		$('.tattoos').children().delay(1000).fadeOut();
		$('.artists').delay(400).animate({
			'height': '0px'
		},500);
		$('.artists').children().delay(400).fadeOut();
		$('.contact').delay(200).animate({
			'height': '0px'
		},500);
		$('.contact').children().delay(200).fadeOut();
		$('.home').delay(600).animate({
			'height': '0px'
		},500);
		$('.home').children().delay(600).fadeOut();

		$('.main').delay(1000).fadeOut();

		$('.home-section').hide();
		$('.about-section').hide();
		$('.artists-section').hide();
		$('.contact-section').hide();


		$('.tattoos-section').delay(1500).fadeIn();

	});

	$('.artists').click(function() {

		$('.about').delay(600).animate({
			'height': '0px'
		},500);
		$('.about').children().delay(600).fadeOut();
		$('.tattoos').delay(800).animate({
			'height': '0px'
		},500);
		$('.tattoos').children().delay(800).fadeOut();
		$('.artists').delay(1000).animate({
			'height': '0px'
		},500);
		$('.artists').children().delay(1000).fadeOut();
		$('.contact').delay(200).animate({
			'height': '0px'
		},500);
		$('.contact').children().delay(200).fadeOut();
		$('.home').delay(400).animate({
			'height': '0px'
		},500);
		$('.home').children().delay(400).fadeOut();

		$('.main').delay(1000).fadeOut();

		$('.about-section').hide();
		$('.tattoos-section').hide();
		$('.home-section').hide();
		$('.contact-section').hide();


		$('.artists-section').delay(1500).fadeIn();

	});

	$('.contact').click(function() {

		$('.about').delay(400).animate({
			'height': '0px'
		},500);
		$('.about').children().delay(400).fadeOut();
		$('.tattoos').delay(600).animate({
			'height': '0px'
		},500);
		$('.tattoos').children().delay(600).fadeOut();
		$('.artists').delay(800).animate({
			'height': '0px'
		},500);
		$('.artists').children().delay(800).fadeOut();
		$('.contact').delay(1000).animate({
			'height': '0px'
		},500);
		$('.contact').children().delay(1000).fadeOut();
		$('.home').delay(200).animate({
			'height': '0px'
		},500);
		$('.home').children().delay(200).fadeOut();

		$('.main').delay(1000).fadeOut();

		$('.about-section').hide();
		$('.tattoos-section').hide();
		$('.artists-section').hide();
		$('.home-section').hide();


		$('.contact-section').delay(1500).fadeIn();

	});

	/* NAVIGATION ANIMATION END */

	/* MENU TRANSITION START */

	$('.menu').click(function() {

		$('.home-section').hide(500);
		$('.about-section').hide(500);
		$('.tattoos-section').hide(500);
		$('.artists-section').hide(500);
		$('.contact-section').hide(500);

		$('.main').fadeIn(500);

		$('.section').animate({
			'height': '100%'
		});

		$('.section').children().fadeIn();

	});

	/* MENU TRANSITION END */ 

});