


// FOR TESTIMONIAL SECTION
$('.testi-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 1000,
    prevArrow: '<i class="flaticon-right-arrow dandik"></i>',
    nextArrow: '<i class="flaticon-left-arrow bamdik"></i>',
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});



  // FOR INSTRUCTION SECTION
$('.instruct-slider').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 1000,
  prevArrow: '<i class="flaticon-right-arrow dandik"></i>',
  nextArrow: '<i class="flaticon-left-arrow bamdik"></i>',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});


// FOR PARTNER SECTION
$('.partner-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 1000,
    prevArrow: '<i class="fas fa-long-arrow-alt-right dandik"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-left bamdik"></i>',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
});
