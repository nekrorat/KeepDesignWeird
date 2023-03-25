$(document).ready(function(){
	
	//$("body").css("display","none").fadeIn(500);

	//$(".logo").delay(500).animate({top:'0px'}, 1000);
	
    //$(".menu").delay(1500).animate({left:'-30px'}, 1000);
	
	//$(".social").delay(1500).animate({left:'30px'}, 1000);
	
	$(".menu_list a li:last-child").mouseenter(function() {
		$(this).css("border-bottom-color", "#fff");
	});
	
	$(".menu_list a li:last-child").mouseout(function() {
		$(this).css("border-bottom-color", "#000");
	});
	
	$(function() {
	$.vegas('slideshow', {
	backgrounds:[
    { src:'images/background1.jpg', fade:3000, valign:'top' },
    { src:'images/background2.jpg', fade:3000, valign:'top' },
    { src:'images/background3.jpg', fade:3000, valign:'top' },
	{ src:'images/background4.jpg', fade:3000, valign:'top' },
	{ src:'images/background5.jpg', fade:3000, valign:'top' }
	] 
	})('overlay');
	});

	$(window).load(function() {
				$('#featured').orbit({
					'bullets': true,
					'timer' : true,
					'animation' : 'horizontal-slide'
				});
			});

});