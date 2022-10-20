$('.rev_slider').slick({
    infinite: true,
    arrows:true,
    dots:true,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<img src='./img/expoparts.ru/arrow-down.svg' class='slick-prev' alt='1'>",
    nextArrow: "<img src='./img/expoparts.ru/arrow-down-sign.svg' class='slick-next' alt='2'>",
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider_marki').slick({
    infinite: true,
    arrows:true,
    dots:true,
    slidesToShow: 9,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: "<img src='./img/expoparts.ru/arrow-down-sign.svg' class='slick-next pos' alt='1'>",
    nextArrow: "<img src='./img/expoparts.ru/arrow-down.svg' class='slick-prev pos' alt='2'>",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

