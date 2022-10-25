$(function () {
  'use strict';


  // WoW Js
  var wow = new WOW({
    offset: 2,
    mobile: false
  })
  wow.init();

});



$('.partner-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
});

