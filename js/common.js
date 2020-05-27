$(document).ready(function() {

    $(".call-menu-box").on("click", function(){
      $("nav").toggleClass("nav-active");
    });

    $(".call-sub-menu").on("click", function(e){
      e.preventDefault();
      $(this).removeClass("call-sub-menu");
      $(this).toggleClass("call-sub-menu-active");
      $(this).next(".sub-menu").slideToggle(200);
    });

    $(".close-menu, main").on("click", function(){
      $("nav").removeClass("nav-active");
    });

    $('.main-slider-container').slick({
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear', 
        responsive: [
            {
              breakpoint: 990,
              settings: {
                dots: true,
                arrows: false
              }
            },
        ]
    });
    

    $(".left").on("click",function(){
        $(".main-slider .slick-prev").click();
    });

    $(".right").on("click",function(){
        $(".main-slider .slick-next").click();
    });


    $('.about-us-vidos-container').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          }
        ]
    });

    $('.about-us-client').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear'
    });

    $(".left-about").on("click",function(){
        $(".about-us-client .slick-prev").click();
    });

    $(".right-about").on("click",function(){
        $(".about-us-client .slick-next").click();
    });


    $('.specialist-container').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false,
            }
          }
        ]
    });

    $('.partner-container').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 8,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
    });
    
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

});