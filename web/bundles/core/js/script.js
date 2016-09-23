$( document ).ready(function() {

    var headerHeight = $('header').outerHeight();

    $(window).scroll(function () {

        var headerWidth = $('header').outerWidth();

        if (headerWidth > 1092 && $(window).scrollTop() >= headerHeight - 60) {
            $(".fixed_top").slideDown( 700 );
        }
        else {
            $(".fixed_top").hide();
            $(".sidebar_wrapper").css("position", "static");
        }

    });

    $( "body" ).on( "click", ".choice", function() {
        $(".lang .active").removeClass("active");
        $(this).addClass("active");
    });

    $( "body" ).on( "click", "#open", function() {
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

    $( "body" ).on( "click", ".close_menu", function() {
        $('.responsive_menu').css("left", "-70%");
        $('#cache').fadeOut( "slow" );
        $("body").css("overflow", "auto")
    });

    $( "body" ).on( "click", function(event) {
        if(!$(event.target).closest('.search_form form, .search').length){
            $('.search_form').fadeOut( "slow" );
        }
    });

    $( "body" ).on( "click", ".search", function() {
        $('.search_form').fadeIn( "slow" );
        $('form #s').focus();
    });

    $( "body" ).on( "click", ".arrow", function() {
        $(this).toggleClass('opened');
        $('.languages').toggleClass('opened');
    });
    
});
