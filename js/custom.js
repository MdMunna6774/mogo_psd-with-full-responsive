$(function(){
    
//    js for counter
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });
    
    
    
//    js for slider
    
    $('.slider_wrapper').slick({
    nextArrow: '.right_arrow',
    prevArrow: '.left_arrow',
	dots: false,
    vertical:true,
	infinite: true,
	speed: 1000,
	fade: false,
	autoplay: true,
	arrows: true,
    pauseOnHover:true,
   
});
    
    //==== Animate the scroll to top
    
    $('.back_to_top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    
    
    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 900) {
            $('.back_to_top').fadeIn(600)
        } else {
            $('.back_to_top').fadeOut(600)
        }
    });
    
    
    
//    here js for preloader
    
    $(window).on('load', function (event) {  
        $('.preloader_bg').delay(300).fadeIn(300);
        
        $('.preloader_bg').delay(500).fadeOut(500);
    });
    
  
    
//    here js for sticky menubar
    
    $(window).on('scroll', function() {
        if($(window).scrollTop() >300 ){
            $('.navbar').addClass('scroll_bg')
        }
        else {
            $('.navbar').removeClass('scroll_bg')
        }
    });
    
    
    
    
    
    
    
})
