

document.addEventListener('DOMContentLoaded', function(event) {


  var elms1 = document.querySelectorAll("[id='flip-card-btn-turn-to-back']");

  for(var i = 0; i < elms1.length; i++) 
  
    elms1[i].style.visibility='visible'; 

    
  var elms2 = document.querySelectorAll("[id='flip-card-btn-turn-to-front']");

  for( i = 0; i < elms2.length; i++) 
    elms2[i].style.visibility='visible';

  
    var elms3 = document.querySelectorAll("[id='flip-card']");

elms1[0].onclick= function(){
  elms3[0].classList.toggle('do-flip');
}

elms2[0].onclick= function(){
  elms3[0].classList.toggle('do-flip');
}


elms1[1].onclick= function(){
  elms3[1].classList.toggle('do-flip');
}

elms2[1].onclick= function(){
  elms3[1].classList.toggle('do-flip');
}

elms1[2].onclick= function(){
  elms3[2].classList.toggle('do-flip');
}

elms2[2].onclick= function(){
  elms3[2].classList.toggle('do-flip');
}

elms1[3].onclick= function(){
  elms3[3].classList.toggle('do-flip');
}

elms2[3].onclick= function(){
  elms3[3].classList.toggle('do-flip');
}

elms1[4].onclick= function(){
  elms3[4].classList.toggle('do-flip');
}

elms2[4].onclick= function(){
  elms3[4].classList.toggle('do-flip');
}
elms1[5].onclick= function(){
  elms3[5].classList.toggle('do-flip');
}

elms2[5].onclick= function(){
  elms3[5].classList.toggle('do-flip');
}
elms1[6].onclick= function(){
  elms3[6].classList.toggle('do-flip');
}

elms2[6].onclick= function(){
  elms3[6].classList.toggle('do-flip');
}

elms1[7].onclick= function(){
  elms3[7].classList.toggle('do-flip');
}

elms2[7].onclick= function(){
  elms3[7].classList.toggle('do-flip');
}


elms1[8].onclick= function(){
  elms3[8].classList.toggle('do-flip');
}

elms2[8].onclick= function(){
  elms3[8].classList.toggle('do-flip');
}


elms1[9].onclick= function(){
  elms3[9].classList.toggle('do-flip');
}

elms2[9].onclick= function(){
  elms3[9].classList.toggle('do-flip');
}


elms1[10].onclick= function(){
  elms3[10].classList.toggle('do-flip');
}

elms2[10].onclick= function(){
  elms3[10].classList.toggle('do-flip');
}


elms1[11].onclick= function(){
  elms3[11].classList.toggle('do-flip');
}

elms2[11].onclick= function(){
  elms3[11].classList.toggle('do-flip');
}


elms1[12].onclick= function(){
  elms3[12].classList.toggle('do-flip');
}

elms2[12].onclick= function(){
  elms3[12].classList.toggle('do-flip');
}


elms1[13].onclick= function(){
  elms3[13].classList.toggle('do-flip');
}
elms2[13].onclick= function(){
  elms3[13].classList.toggle('do-flip');
}
elms1[14].onclick= function(){
  elms3[14].classList.toggle('do-flip');
}
elms2[14].onclick= function(){
  elms3[14].classList.toggle('do-flip');
}



elms1[15].onclick= function(){
  elms3[15].classList.toggle('do-flip');
}
elms2[15].onclick= function(){
  elms3[15].classList.toggle('do-flip');
}

elms1[16].onclick= function(){
  elms3[16].classList.toggle('do-flip');
}
elms2[16].onclick= function(){
  elms3[16].classList.toggle('do-flip');
}

elms1[17].onclick= function(){
  elms3[17].classList.toggle('do-flip');
}
elms2[17].onclick= function(){
  elms3[17].classList.toggle('do-flip');
}
elms1[18].onclick= function(){
  elms3[18].classList.toggle('do-flip');
}

elms2[18].onclick= function(){
  elms3[18].classList.toggle('do-flip');
}



function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}
});

!(function($) {
  "use strict";



  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 2;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });
  $(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        
  //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
  //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
     
    });
    
    if ($(".filter-button").removeClass("active")) {
  $(this).removeClass("active");
  }
  $(this).addClass("active");
  $('button[data-filter="banner"]').click();
  }
  
  
  
  
  );
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      filter:'.filter-webdesign',
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
     
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });





  // Porfolio isotope and filter for mobile view
  $(window).on('load', function() {
    var mobportfolioIsotope = $('.mobapp-container').isotope({
      itemSelector: '.mobapp-item',
    
      filter:'.filter-latest',
     
    });

    $('#app-flters li').on('click', function() {
      $("#app-flters li").removeClass('filter-activee');
      $(this).addClass('filter-activee');

      mobportfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      
      aos_init();
    });


    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
















  
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.app-container').isotope({
      itemSelector: '.app-item',
    
      filter:'.filter-latest',
      masonry: {
        columnWidth: 100,
        fitWidth: true
      }
    });

    $('#app-flters li').on('click', function() {
      $("#app-flters li").removeClass('filter-activee');
      $(this).addClass('filter-activee');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      
      aos_init();
    });


    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox({
        'share': false
      });
    });
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });





$(document).ready(function() {
	$('.zoom-gallery').magnificPopup({

		type: 'image'
	
	});
});




  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);