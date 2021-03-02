var owl = $('.header-carousel');
owl.owlCarousel({
    items:5,
    nav:true,
    margin:10,
    autoplay:true,
    autoWidth:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        loop:true,
        items:1,
        autoplay:true

      },
      600:{
          loop:true,
          items:4,
          autoplay: true
      },
      1300:{
          items:5,
          autoplay: false
      }
  }
});


var owlShares = $('.carousel-shares');
owlShares.owlCarousel({
    items:4,
    nav:true,
    margin:10,
    autoplay:true,
    autoWidth: true,
    mergeFit: true,
    navText : false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        loop:true,
        items:1,
        autoplay:true
      }
  }
});


var owlShares = $('.program-carousel');
owlShares.owlCarousel({
    items:2,
    center:true,
    nav:true,
    margin:10,
    autoplay:true,
    autoWidth: true,
    mergeFit: true,
    navText : false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
      0:{
        loop:true,
        items:1,
        autoplay:true
      }
  }
});

