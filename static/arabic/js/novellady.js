// JavaScript Document
$(document).ready(function() {
	//Product listing -> show/hide bag and wishlist buttons on hover
	$(".prodImg").hover(function() {
		$(this).children(".prodActions").css({"display" : "flex"});
	}, function() {
		$(this).children(".prodActions").css({"display" : "none"});
		$(this).find(".prodSize").css({"display" : "none"});
	});
	
	//Product listing -> show/hide product sizing on hover of wish button
	$("a.btnBag").hover(function() {
		$(this).prev(".prodSize").css({"display" : "inline-block"});
		$(this).parent(".prodActions").css({"display" : "flex"});
	}, function() {
		//****
	});
	
	$(".homeNewArriCarousel").slick({
		prevArrow : $(".carouselNext"),
		infinite : true,
		slidesToShow : 4,
		nextArrow : "",
		rtl : true,
		responsive : [
			{
				breakpoint : 1075,
				settings : {
					slidesToShow : 4,
				},
			},
			{
				breakpoint : 860,
				settings : {
					slidesToShow : 3,
				},
			},
			{
				breakpoint : 645,
				settings : {
					slidesToShow: 2,
				}
			},
			{
				breakpoint : 430,
				settings : {
					slidesToShow: 1,
				}
			},
		],
	});
	
	$(".homeStyleGalleryCarousel").slick({
		prevArrow : $(".carouselNextSG"),
		infinite : true,
		slidesToShow : 6,
		nextArrow : "",
		rtl : true,
		responsive : [
			{
				breakpoint : 1670,
				settings : {
					slidesToShow : 5,
				},
			},
			{
				breakpoint : 1400,
				settings : {
					slidesToShow : 4,
				},
			},
			{
				breakpoint : 1131,
				settings : {
					slidesToShow: 3,
				}
			},
			{
				breakpoint : 867,
				settings : {
					slidesToShow: 2,
				}
			},
		],
	});
	
	$(".brandsCarousel").slick({
		prevArrow : $(".carouselNextBrands"),
		infinite : true,
		slidesToShow : 7,
		nextArrow : $(".carouselPrevBrands"),
		rtl : true,
		responsive : [
			{
				breakpoint : 1820,
				settings : {
					slidesToShow : 6,
				},
			},
			{
				breakpoint : 1551,
				settings : {
					slidesToShow : 5,
				},
			},
			{
				breakpoint : 1308,
				settings : {
					slidesToShow: 4,
				}
			},
			{
				breakpoint : 1057,
				settings : {
					slidesToShow: 3,
				}
			},
			{
				breakpoint : 795,
				settings : {
					slidesToShow: 2,
				}
			},
		],
	});
	
	$(".bigDealsCarousel").slick({
		prevArrow : $(".carouselNextBigDeal"),
		infinite : true,
		slidesToShow : 4,
		nextArrow : $(".carouselPrevBigDeal"),
		rtl : true,
		responsive : [
			{
				breakpoint : 1760,
				settings : {
					slidesToShow : 3,
				},
			},
			{
				breakpoint : 1334,
				settings : {
					slidesToShow : 2,
				},
			},
			{
				breakpoint : 902,
				settings : {
					slidesToShow : 1,
				},
			},
		],
	});
	
	$(".similarCarousel").slick({
		prevArrow : $(".carouselNextSimilar"),
		infinite : true,
		slidesToShow : 3,
		nextArrow : $(".carouselPrevSimilar"),
		rtl : true,
		responsive : [
			{
				breakpoint : 1760,
				settings : {
					slidesToShow : 3,
				},
			},
			{
				breakpoint : 1334,
				settings : {
					slidesToShow : 2,
				},
			},
			{
				breakpoint : 902,
				settings : {
					slidesToShow : 1,
				},
			},
		],
	});
	
	
	
	$(function() {
		var header = $(".headerHome");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			
			if(scroll >=50) {
				header.addClass('headerHomeScroll', 'fast');
			} else {
				header.removeClass('headerHomeScroll', 'fast');
			}
		});
	});
	
	
});


//Price range slider display
$("#pricerange").change(function() {
	$("#pricerangeMax").html(this.value);
	//alert("ASd");
});

//Product Image Gallery
$(".prodSmImg").hover(function() {
	var srcImg = $('> img', this).attr('src'); //alert(srcImg);
	$('.prodSmImg img').css('opacity', '0.7');
	$('> img', this).css('opacity', '1');
	$('.productBigImage img').attr('src', srcImg);
});