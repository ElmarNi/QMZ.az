$(document).ready(function () {
  $("#large-screen-menu .lang").click(function (e) { 
    e.preventDefault()
    $(this).find("ul").toggle()
    $(this).find("svg").toggleClass("active")
    $(this).find("a").toggleClass("active")
  })
  $('#slider .owl-carousel').owlCarousel({
    loop:true,
    items:1
  })
  $('#partners .owl-carousel').owlCarousel({
    loop:true,
    margin: 20,
    responsiveClass:true,
    dots: false,
    nav: true,
    responsive:{
        0:{
          items:2,
        },
        1000:{
          items:5,
        },
        1200:{
          items:6,
        }
    }
  })
  $('#products-carousel .owl-carousel').owlCarousel({
    loop:true,
    margin: 20,
    responsiveClass:true,
    dots: false,
    nav: true,
    responsive:{
        0:{
          items:1,
        },
        768:{
          items:2,
        },
        1200:{
          items:4,
        }
    }
  })
  $('#projects .owl-carousel.first').owlCarousel({
    loop:true,
    margin: 20,
    responsiveClass:true,
    dots: false,
    nav: true,
    responsive:{
        0:{
          items:1,
        },
        768:{
          items:2,
        },
        1200:{
          items:4,
        }
    }
  })
  $('#projects .image-wrapper .owl-carousel.second').owlCarousel({
    loop:true,
    dots: false,
    nav: true,
    items: 1
  })
});