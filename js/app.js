// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
// $(document).foundation();


$(document).ready(function($) {
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('.header').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('.header').hasClass('is-fixed')) {
            $('.header').addClass('is-visible');
            $('.logo').addClass('is-visible');
          } else {
            $('.header').removeClass('is-visible is-fixed');
            $('.logo').removeClass('is-visible');
          }
        } else {
          //if scrolling down...
          $('.header').removeClass('is-visible');
          if (currentTop > headerHeight && !$('.header').hasClass('is-fixed')) $('.header').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

  //open/close primary navigation
  $('.primary-nav-trigger').on('click', function() {
    $('.menu-icon').toggleClass('is-clicked');
    $('.header').toggleClass('menu-is-open');

    //in firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if ($('.primary-nav').hasClass('is-visible')) {
      $('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $('body').removeClass('overflow-hidden');
      });
    } else {
      $('.primary-nav').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        $('body').addClass('overflow-hidden');
      });
    }
  });
  var instaFeed = new Instafeed({
  			        get: 'user',
  			        userId: 3403235,
  			        accessToken: '34139106.467ede5.2e8f6b6a9cf846f6bd23169b624aca22',
  			        target: 'instafeed',
  			        sortBy: 'most-liked',
  			        limit: 200,
  			        resolution: 'thumbnail'
  });	instaFeed.run();

});
$('.primary-nav li').on('click', function() {
  $('.menu-icon').removeClass('is-clicked');
  $('.header').removeClass('menu-is-open');
  $('.primary-nav').removeClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
  $('body').removeClass('overflow-hidden');
  });
});
