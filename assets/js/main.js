jQuery(function() {

/*===============================================
  Fix header
==================================================*/    
    jQuery(window).scroll(function () {
        scroll = jQuery(window).scrollTop();
        if (scroll >= 1) {
            jQuery('.main-outercon').addClass('fixed');
        } else {
            jQuery('.main-outercon').removeClass('fixed');
        }
    });	
     setTimeout(function(){
             AOS.init();
        }, 300);
    
     
    
     /*======================================
        Header Menu
    =======================================*/
     setTimeout(function(){
//            centerMenu(); 
        }, 300);
        
    
    
    
    
    /*===============================================
    	Menu
    ==================================================*/
    jQuery(".nav-trigger").click(function() {
      jQuery(this).toggleClass("highlight");
      jQuery(this).closest().children().addClass("aa");
      jQuery('body').toggleClass("nav-visible"); 
        
      
        
        
   });



    /*===============================================
        debouncedresize
    ==================================================*/

    jQuery(window).bind("debouncedresize", function() {        
        
        // imgLiquid
        if (jQuery.fn.imgLiquid) {
            jQuery(".banner-image ,.image-block,.imagefluid").imgLiquid({
                fill: true
            });
        }
          AOS.init();
    });
   

   
    /*===============================================
        Slick  
     ==================================================*/
    if (jQuery.fn.slick) {     

         jQuery('.banner-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            dots: true,
            infinite: false,
            speed: 800,
            autoplaySpeed: 2500,
            fade: true,
            cssEase: 'linear'
        });

      
        
    }
    
    jQuery('.scroll-arrow a[href^="#"]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);
            jQuery('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
               
            });
        });
     

    
    /**ENABLE MAP SCROLL**/
    jQuery(".map-cover").click(function () {
        $(this).addClass("clicked");
        $(this).fadeOut();
        $(this).parent().find(".overlay").hide();
    });

    
    
    /**Fade in elements one by one - animation delay**/
    jQuery('#parent .child')
        .each(function (index) {
        var _this = this;
        setTimeout(function () {
            $(_this).fadeIn('slow');
        }, 1000 * index);
    });

     
    jQuery('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
    
    
});

