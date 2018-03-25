$(document).ready(function () {
   $('.gallery').slick({
         centerMode: true,
         centerPadding: 0,
         autoplay: true,
         nextArrow: '<i class="gallery__arrows gallery__arrows--right ion-chevron-right"></i>',
         prevArrow: '<i class="gallery__arrows gallery__arrows--left ion-chevron-left"></i>',
         autoplaySpeed: 2000,
         slidesToShow: 5,
         speed: 1000,
         responsive: [
               {
                     breakpoint: 768,
                     settings: {
                           arrows: false,
                           centerMode: true,
                           slidesToShow: 3
                     }
               },
               {
                     breakpoint: 480,
                     settings: {
                           arrows: false,
                           centerMode: true,
                           slidesToShow: 1
                     }
               }
         ]
   });
});