$( document ).ready(function() {

    var popup = $('.popup');
    var popupCross = $('.popup_cross');
    var frame = $('.frame');

    popupCross.on('click', function(){
        tl.to(popup, 0.5, {y:-50, opacity:0 }, "time1");
        tl.to(popup, 0.5, {scale:0});
        tl.to(frame, 0, { scale:1 , className:'-=dark'},"time1");
        tl.to(frame, 0, { scale:0 });
        $('body').css('overflow', 'visible');
    })

    var tl = new TimelineLite();
    tl.to(frame, 0, { scale:1 , className:'+=dark'});
    tl.to(popup, 0, {scale:1});
    tl.from(popup, 0.5, {scale:1, y:-50});
    $('body').css('overflow', 'hidden');

});
