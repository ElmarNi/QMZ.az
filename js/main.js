$(document).ready(function () {
    let imageSrcArr = []
    let imageAltArr =[]
    $("#products-full .gallery img").each(function(){
        imageSrcArr.push($(this).attr("src"))
        imageAltArr.push($(this).attr("alt"))
    })
    
    $("#products-full .gallery").html("")
    
    for (i = 0; i < imageSrcArr.length; i++) {
      $("#products-full .gallery").append(`<div class="g-item"><a data-fancybox="gallery" href="${imageSrcArr[i]}"><img src="${imageSrcArr[i]}"></a><p>${imageAltArr[i]}</p></div>`)
    }
    $("#news-full .content .highslide").each(function(){
        $(this).attr("data-fancybox", "gallery")
    })
    $("#realty-full .highslide").each(function(){
        $(this).attr("data-fancybox", "gallery")
    })
    
    let brandsImg =[];
    let brandsAlt =[]
    $(".brand-short img").each(function(){
        brandsImg.push($(this).attr("src"))
        brandsAlt.push($(this).attr("alt"))
    })
    $(".brand-short .gallery").html("")
    $(".brand-short").append(`<div class="main-gallery d-flex flex-wrap w-100"></div>`)
    for (i = 0; i < brandsImg.length; i++) {
      $(".brand-short .main-gallery").append(`<div class="g-item"><a data-fancybox="gallery" href="${brandsImg[i]}"><img src="${brandsImg[i]}"></a><p>${brandsAlt[i]}</p></div>`)
    }
  jQuery.fn.clickOutside = function (callback) {
    var $me = this;
    $(document).mouseup(function (e) {
      if (!$me.is(e.target) && $me.has(e.target).length === 0) {
        callback.apply($me);
      }
    });
  };

  $("#about .play-video").click(function (e) {
    e.preventDefault();
    $(this).find("img").addClass("active")
    $(this).parent().find("iframe").addClass("d-block")
  })
  $(".open-ul").click(function(e){
      e.preventDefault();
      $(this).next().slideToggle("fast");
      $(this).find("i").toggleClass("active")
  })
  $('#slider .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    dots: true
  });
  $("#about-static .owl-carousel").children("p").remove()
  if($("#about-static .owl-carousel").children().length > 0){
    for(i = 0; i < 4; i++){
      $("#about-static .owl-carousel").children()[i].remove()
    }
  }
  $('#about-static .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    items: 3,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 15,
    dots: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        991:{
            items:3
        }
    }
  });
  
  $('#brands .owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        768:{
            items:4,
            nav:true
        },
        1000:{
            items:6,
            nav:true
        }
    }
  });
  $(window).scroll(function () { 
    if (window.scrollY > 100) {
      $("#large-screens").addClass("active")
      $("#small-screens").addClass("scrolled")
    }
    else{
      $("#large-screens").removeClass("active")
      $("#small-screens").removeClass("scrolled")
    }
  });
  $("#large-screens .menu-a").hover(
    function() {
      $("#large-screens .menu-a").parent().addClass( "active" );
      $(this).parent().removeClass( "active" );
    }, function() {
      $( "#large-screens a" ).parent().removeClass( "active" );
      $(this).removeClass("hovered")
    }
  );
  $("#large-screens .submenu").hover(
    function() {
      $("#large-screens .menu-a").parent().addClass( "active" );
      $(this).parent().removeClass( "active" );
      $(this).parent().find("a").addClass("hovered")
    }, function() {
      $( "#large-screens a" ).parent().removeClass( "active" );
      $(this).parent().find("a").removeClass("hovered")
    }
  );
  $("footer .menu a").hover(
    function() {
      $("footer .menu a").addClass( "active" );
      $(this).removeClass( "active" );
    }, function() {
      $("footer .menu a").removeClass( "active" );
    }
  );
  $("#small-screens .open-menu").click(function (e) {
    e.preventDefault();
    $(this).find("i").toggleClass("fa-times")
    $("#small-screens nav").toggleClass("active")
    $("#small-screens").toggleClass("active")
  })
  $("#small-screens a.open-sub").click(function (e) {
    e.preventDefault()
    $(this).next().slideToggle("fast")
    $(this).find("i").toggleClass("active")
    $("body").addClass("hidden")
    $("body").toggleClass("hidden")
  })
  $("#small-screens a.open-sub").clickOutside(function () {
    $("#small-screens .submenu").slideUp("fast")
    $(this).find("i").removeClass("active")
    $("body").removeClass("hidden")
  })
    $("#products-full .highslide").each(function( element ) {
      $(this).append(`<p>${$(this).find("img").attr("alt")}</p>`)
    });
    $(".brand-short .highslide").each(function( element ) {
      $(this).append(`<p>${$(this).find("img").attr("alt")}</p>`)
    });
    
    let alphabet = document.querySelectorAll(".alphabet a")
    let brands = document.querySelectorAll(".brands-kate .item-wrapper")
    
    for (i = 0; i < alphabet.length; i++){
        alphabet[i].onclick = function(e){
            e.preventDefault();
            $(".alphabet .char-wrapper.active").removeClass("active")
            $(this).parent().addClass("active")
            let char = $(this).attr("data-id")
            for (b = 0; b < brands.length; b++){
                
                if(char == "#"){
                    if(!isNaN($(brands[b]).find("h2").text().charAt(0))){
                        $(brands[b]).show();
                    }
                    else{
                        $(brands[b]).hide();
                    }
                }
                else if(char == "all"){
                    $(brands[b]).show();
                }
                else{
                    if($(brands[b]).find("h2").text().charAt(0) != char){
                        $(brands[b]).hide()
                    }
                    else{
                        $(brands[b]).show()
                    }
                }
            }
        }
    }
    $(".alphabet a").each(function(){
        $(this).click(function(e){
            e.preventDefault()
            
            $(".brands-kate .item-wrapper").each(function(){
                $(this).find("h2").text()
            })
        })
    })

});