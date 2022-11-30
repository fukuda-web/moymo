// adobe font
(function(d) {
	var config = {
		kitId: 'qtz0wqc',
		scriptTimeout: 3000,
		async: true
	},
	h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// ios
if(navigator.userAgent.match(/MSIE 10/i) || navigator.userAgent.match(/Trident\/7\./)) {
	$(function(){
  $("body").addClass("ios");
 });
}

// スムーススクロール
$(function(){
  $('a[href^="#"]:not(a.inline_modal)').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 165;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// loading
$(window).on('load', function(){
	$(document).ready(function(){
		$('.loading').fadeOut(300);
	});
});

// menu
$(function(){
 $(".menu-trigger").click(function () {
  $(this).toggleClass('active');
  $(this).parent(".sp_menu").toggleClass('on');
  $(".header-area").fadeToggle(300);
 });
});


// inview
$(document).ready(function(){
 $('.fadeup').on('inview', function() {
  $(this).addClass("is-enter");
 });
});


// slider
$(function() {
 if (window.matchMedia("screen and (max-width: 768px)").matches) {
			$(document).ready(function() {
				$(".slider").bxSlider({
     easing: 'easeOutBounce',
     minSlides: 2,
     maxSlides: 3,
     slideWidth: 225,
     ticker: true,
     speed: 30000,
					slideMargin: 20,
   });
  });
 }
 else{
			$(document).ready(function() {
				$(".slider").bxSlider({
     easing: 'easeOutBounce',
     minSlides: 5,
     maxSlides: 10,
     slideWidth: 300,
					slideMargin: 20,
     ticker: true,
     speed: 30000,
   });
  });
 }
});

// pagetop
$(function(){
 $('.pagetop').click(function () {
  $("html,body").animate({scrollTop:0},"300");
 });
});