$(document).ready(function(){
  $('#slickslider').slick({
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable:false
  });

  var howfar = 0;
  $(window).scroll(function(){
    var scrolltop = $(this).scrollTop();
    if (scrolltop - howfar >50) {
      var heightnav = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + heightnav},150);
      howfar = scrolltop;
    }

    else if(howfar - scrolltop > 50 ){
        $('.navbar').animate({top: '0px'},150);
        howfar = scrolltop;
    }
  });


});
