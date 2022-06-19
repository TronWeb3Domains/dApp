$(document).ready(function() {
	$(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) { 
            $('.warp-header').addClass('active');
        }
        else {
            $('.warp-header').removeClass('active');
        }
    });
	$('.menu li a').click(function (e) {
		//e.preventDefault();
		var target = $(this).attr('data-id');
		if (target !== '')
		{	
			$('.menu .active').removeClass('active');
			$(this).parent().addClass('active');
			$('html, body').stop().animate({
				scrollTop: $(target).offset().top - 120
			}, 1000, function () {
				location.hash = target;
			});
			return false;
		}
	});
	$('.click-menu').click(function(){
		$('.click-menu').toggleClass('active');
		$('.menu').toggleClass('active');
		$('.text-mg-right').toggleClass('active');
		$('body').toggleClass('active');
	});
	
	if ($('.roadmap-items').length < 2){
		$('.warp-roadmap').removeClass('owl-carousel').addClass('row');
		$('.roadmap-items').addClass('col-md-3 col-sm-3 col-xs-12');
		return;
	};
	
	$('.warp-roadmap').owlCarousel({
		loop:true,
		lazyLoad : true,
		nav:true,
		autoplay:false,
		thumbs: false,
		autoplayTimeout:10000,
		smartSpeed:2000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	$(".faqs-title").click(function(){
		if($(this).next().is(':visible'))
		{
			$(this).next().slideUp(500);
		}
		else
		{
			$(".faqs-des").slideUp(500);
			$(this).next().slideDown(500);	
		}
	});
	$('.faqs-title').click( function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$('.faqs-title.active').removeClass('active');
			$(this).addClass('active');    
		}
	});

	$('.back-to-top').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	
	
	new WOW().init({
		offset:100,
	});
	
});