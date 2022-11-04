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
    
 
    
   $('.bounce a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        // window.location.hash = target;
	    });
	});
    
    
    //menu scroll
    
     var sections = $('section')
          , nav = $('nav')
          , nav_height = nav.outerHeight();

        $(window).on('scroll', function () {
          var cur_pos = $(this).scrollTop();

          sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
              nav.find('a').removeClass('active');
              sections.removeClass('active');

              $(this).addClass('active');
              nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
          });
        });

        nav.find('a').on('click', function () {
          var $el = $(this)
            , id = $el.attr('href');

          $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
          }, 500);

          return false;
        });
    
    
    /**ENABLE MAP SCROLL**/
    jQuery(".map-cover").click(function () {
        $(this).addClass("clicked");
        $(this).fadeOut();
        $(this).parent().find(".overlay").hide();
    });

    
    
    /**Fade in elements one by one - animation delay**/
//    jQuery('#parent .child')
//        .each(function (index) {
//        var _this = this;
//        setTimeout(function () {
//            $(_this).fadeIn('slow');
//        }, 1000 * index);
//    });
    
    
    
    

    jQuery('.js-tabs').easytabs({
      animate: false,
        tabActiveClass: "-active",
        panelActiveClass: "-active",
        panelContext: $('.panels-container'),
        defaultTab: "li:first-child",
        tabs: "ul.tabs-list > li"
    });


    jQuery('.tabs-list > li').on('click', function() {
      if (jQuery(this).hasClass('-active')) {
        jQuery(this).parent().toggleClass('-is-open');
      }
    });

  
         
    
    
});

