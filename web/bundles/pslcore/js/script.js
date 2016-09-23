$( document ).ready(function() {

    var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

    var headerHeight = $('header').outerHeight();

    $(window).scroll(function () {

        var headerWidth = $('header').outerWidth();

        if (headerWidth >= 1092 && $(window).scrollTop() >= headerHeight - 60) {
            $(".fixed_top").slideDown( 700 );
        }
        else {
            $(".fixed_top").hide();
            $(".sidebar_wrapper").css("position", "static");
        }

    });

    $( "body" ).on( touchEvent, ".choice", function() {
        $(".lang .active").removeClass("active");
        $(this).addClass("active");
    });

    $( "body" ).on( touchEvent, "#open", function() {
        $('.responsive_menu').css("left", "0");
        $('#cache').fadeIn( "slow" );
        $("body").css("overflow", "hidden")
    });

    //warn
/*    $( "body" ).on( "click", ".navicon", function() {
        $('.responsive_menu').css("left", "0");
        $('#cache').fadeIn( "slow" );
        $("body").css("overflow", "hidden")
    });*/

    $( "body" ).on( touchEvent, ".close_menu", function() {
        $('.responsive_menu').css("left", "-70%");
        $('#cache').fadeOut( "slow" );
        $("body").css("overflow", "auto")
    });

    $( "body" ).on( touchEvent, function(event) {
        if(!$(event.target).closest('.search_form form, .search').length){
            $('.search_form').fadeOut( "slow" );
        }
    });

    $( "body" ).on( touchEvent, ".search", function() {
        $('.search_form').fadeIn( "slow" );
        $('form #s').focus();
    });

    $( "body" ).on( touchEvent, ".arrow", function() {
        $(this).toggleClass('opened');
        $('.languages').toggleClass('opened');
    });
    
});
