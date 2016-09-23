/* $( document ).ready(function() {

    $(".search_form").hide();
    $(".second_part").hide();
    $(".third_part").hide();

    var headerHeight = $('header').outerHeight();
    $(".sidebar_wrapper").css("display", "block");

    if ($(window).width() > 1092) {
        var contentPosition = $('#page_content_wrapper').offset().left;
        var contentLarg = $('#page_content_wrapper').width() + 60;
        var right = $(window).width() - contentLarg - contentPosition;

        $(".sidebar_wrapper").css("display", "block");
        $(".sidebar_wrapper").css("right", right);
        $(".sidebar_wrapper").css("width", (0.26 * contentLarg));
    }
    else if ($(window).width() < 1092) {
        var contentPosition = $('#page_content_wrapper').offset().left;
        var contentLarg = $('#page_content_wrapper').width() + 30;
        var right = $(window).width() - contentLarg - contentPosition;

        $(".sidebar_wrapper").css("display", "block");
        $(".sidebar_wrapper").css("right", contentPosition);
        $(".sidebar_wrapper").css("width", "220px");
    }

    $(window).resize(function () {
        if ($(window).width() > 1092) {
            var contentPosition = $('#page_content_wrapper').offset().left;
            var contentLarg = $('#page_content_wrapper').width() + 60;
            var right = $(window).width() - contentLarg - contentPosition;

            $(".sidebar_wrapper").css("display", "block");
            $(".sidebar_wrapper").css("right", right);
            $(".sidebar_wrapper").css("width", (0.26 * contentLarg));
        }
        else {
            var contentPosition = $('#page_content_wrapper').offset().left;
            var contentLarg = $('#page_content_wrapper').width() + 30;
            var right = $(window).width() - contentLarg - contentPosition;

            $(".sidebar_wrapper").css("display", "block");
            $(".sidebar_wrapper").css("right", right);
            $(".sidebar_wrapper").css("width", (0.31 * contentLarg));
        }
    });

    $(window).scroll(function () {

        var footerPosition = $('.top_footer').position();

        if ($(window).width() > 1092) {
            if ($(window).scrollTop() >= headerHeight - 60) {
                $(".sidebar_wrapper").css("position", "fixed");
                $(".sidebar_wrapper").css("top", "100px");
            }
            if ($(window).scrollTop() > footerPosition.top - 781) {
                $(".sidebar_wrapper").hide();
            }
            else if ($(window).scrollTop() > (1172 * 4) + headerHeight) {
                $(".sidebar_wrapper").fadeIn();
                $(".first_part").hide();
                $(".second_part").hide();
                $(".third_part").fadeIn("slow");
            }
            else if ($(window).scrollTop() > 2344 + headerHeight) {
                $(".third_part").hide();
                $(".first_part").hide();
                $(".second_part").fadeIn("slow");
            }
            else if ($(window).scrollTop() <= 2344 + headerHeight) {
                $(".second_part").hide();
                $(".third_part").hide();
                $(".first_part").fadeIn("slow");
            }
        }
        else if ($(window).width() < 1092) {
            if ($(window).scrollTop() >= headerHeight - 60) {
                $(".sidebar_wrapper").css("position", "fixed");
                $(".sidebar_wrapper").css("top", "80px");
            }
            if ($(window).scrollTop() > footerPosition.top - $(".sidebar_wrapper").height() - 120) {
                $(".sidebar_wrapper").hide();
            }
            else if ($(window).scrollTop() > (890 * 4) + 80) {
                $(".sidebar_wrapper").fadeIn();
                $(".first_part").hide();
                $(".second_part").hide();
                $(".third_part").fadeIn("slow");
            }
            else if ($(window).scrollTop() > 1780 + 80) {
                $(".third_part").hide();
                $(".first_part").hide();
                $(".second_part").fadeIn("slow");
            }
            else if ($(window).scrollTop() <= 1780 + 80) {
                $(".second_part").hide();
                $(".third_part").hide();
                $(".first_part").fadeIn("slow");
            }
        }

    });
}) */
/*
setTimeout(function(){
    var header_height = $('header').outerHeight();
    var player_height = $('.player').outerHeight();
    var top_footer_height = $('footer').outerHeight();
    var footer_height = $('.top_footer').outerHeight();
    var body = document.body.scrollHeight;

    $(window).scroll(function () {

        if ($(window).scrollTop() >= header_height + player_height - 100) {
            $(".sidebar_wrapper").css("position", "fixed");
            $(".sidebar_wrapper").css("top", "140px");
            $(".second_part").hide();
            $(".third_part").hide();
        }
        else if ($(window).scrollTop() >= header_height + player_height - 100) {
            $(".sidebar_wrapper").css("position", "fixed");
            $(".sidebar_wrapper").css("top", "140px");
            $(".second_part").hide();
            $(".third_part").hide();
        }
        else{
            $(".sidebar_wrapper").css("position", "static");
        }

    });
}, 1000);*/

jQuery(document).ready(function(){
    jQuery(window).load(function(){
        var header_height = $('header').outerHeight();
        var player_height = $('.player').outerHeight();
        var top_footer_height = $('footer').outerHeight();
        var footer_height = $('.top_footer').outerHeight();
        var body = document.body.scrollHeight;
        console.log(body);
    });
});