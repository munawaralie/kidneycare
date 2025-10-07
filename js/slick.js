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
  });
});
