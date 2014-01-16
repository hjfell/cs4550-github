<!-- http://new2wp.com/noob/how-to-use-jquery-to-make-your-content-slide-toggle/ -->
		$(function($) {
			$('p').css({'cursor':'pointer'}).next().hide().prev().click(function () {
			$(this).next().slideToggle();
			});
			$('pre').css({'cursor':'pointer'}).next().hide().prev().click(function () {
			$(this).next().slideToggle();
			});
			$('h1').css({'cursor':'pointer'}).next().hide().prev().click(function () {
			$(this).next().slideToggle();
			});
			$('h2').css({'cursor':'pointer'}).next().hide().prev().click(function () {
			$(this).next().slideToggle();
			});
			$('h3').css({'cursor':'pointer'}).next().hide().prev().click(function () {
			$(this).next().slideToggle();
			});
			$('ul').css({'cursor':'pointer'}).next().hide().prev().click(function () {
			$(this).next().slideToggle();
			});
			$('ol').css({'cursor':'pointer'}).next().hide().prev().click(function () {
			$(this).next().slideToggle();
			});
		});	