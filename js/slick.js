$(document).ready(function () {
  $('.review-slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200000,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    dots: true,

    // Responsive breakpoints
    responsive: [
      {
        breakpoint: 1024, // screens <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, // screens <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480, // screens <= 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
  });
});
