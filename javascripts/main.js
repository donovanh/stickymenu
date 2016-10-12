/*
stickyNavTop = $('nav').offset().top

  stickyNav = ->
    scrollTop = $(window).scrollTop()
    if (scrollTop > stickyNavTop)
      $('nav').addClass('js-sticky')
    else
      $('nav').removeClass('js-sticky')

  stickyNav()

  $(document).addEventListener('touchmove', stickyNav, false)
*/
$(function() {
  var stickyNavTop = $('nav').offset().top
  var stickyNav = function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('nav').addClass('js-sticky')
    } else {
      $('nav').removeClass('js-sticky')
    }
  }

  $(document).scroll(function() { 
    stickyNav()
  });


  stickyNav();

  //document.addEventListener('touchmove', stickyNav, false);

});