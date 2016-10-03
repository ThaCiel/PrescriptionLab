$(document).ready(function(){

    var mobileNavTl = new TimelineLite();
    var mobileNav = $('.account-menu-mobile');
    var mobileNavHeader = $('.mobile-navigation').find('header');
    var mobileNavLi = $('.mobile-navigation').find('li');

    mobileNavTl.staggerFrom(mobileNav, 0.2, {autoAlpha:1, scale:0}, 0.1);
    mobileNavTl.staggerFrom(mobileNavHeader, 0.2, {autoAlpha:1, scale:0}, 0.1);
    mobileNavTl.staggerFrom(mobileNavLi, 0.2, {autoAlpha:1, scale:0}, 0.1);

    mobileNavTl.pause();

    $('#accountButton').on('click', function(){
      mobileNavTl.play();
    });
    $('#closeMobile').on('click', function(){
      mobileNavTl.reverse();
    });


    $('.choice-button').on('click',function(){
      $('.choice-button').removeClass('choice-button-activate');
      $(this).addClass('choice-button-activate');
    });

    $(window).on('resize', function(){

      var windowWidth = $(window).width();

      if (windowWidth > 768) {
        mobileNavTl.timeScale(2);
        mobileNavTl.reverse();
      }

    });
    
});
