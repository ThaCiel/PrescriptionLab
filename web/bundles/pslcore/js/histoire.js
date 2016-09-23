$( document ).ready(function() {

    var popup = $('.wrap_histoire-popup');
    var popupCross = $('.cross-close');
    var frame = $('.frame');

    var histoirePopup = $('.histoire-popup');

    function closePopup(){
        frame.removeClass('dark');
        var tl = new TimelineLite();
        tl.to(popup, 0.5, {y:-50, opacity:0 });
        tl.to(popup, 0.5, {scale:0}, "time1");
        tl.to(popup, 0, {y:0}, "time1");
        tl.to(frame, 0, {scale:0}, "time1");
        $('body').css('overflow', 'visible');
    }

    popupCross.on('click', function(){
        closePopup();
    });

    frame.on('click', function(){
        closePopup();
    });

/*    histoirePopup.on('scroll', function(e){
        var position = $(this).scrollTop();
        var picture = $(this).find('.picture');

        var parent = $(this).parent();
        if(position+30 > picture.height()){
            parent.find('.cross-close').addClass('switch');
        }
        else{
            parent.find('.cross-close').removeClass('switch');
        }
    });*/


/*    tl.from(popup, 0.5, {scale:1, y:-50});*/



    /* COMMENT */
    var portrait = $('.portrait .seemore');
    var mainportrait = $('.portrait');

    portrait.on('click', function(e){

        e.stopPropagation();
        $('body').css('overflow', 'hidden');
        var parent = $(this).parent();

        frame.addClass('dark');
        var name = $(parent).data('name');
        var popupCurrent = $('.histoire-popup[data-name="'+ name +'"]');
        popupCurrent = popupCurrent.parent();

        var tl2 = new TimelineLite();
        tl2.to(frame, 0, {scale:1}, "time1");
        tl2.to(popupCurrent, 0, {scale:1}, "time1");
        tl2.from(popup, 0.5, {y:-50}, "time1+=0.5");
        tl2.to(popup, 0.5, {opacity:1 }, "time1+=0.5");
        $('body').css('overflow', 'hidden');

    });

    mainportrait.on('click', function(){
        $('body').css('overflow', 'hidden');

        frame.addClass('dark');
        var name = $(this).data('name');
        var popupCurrent = $('.histoire-popup[data-name="'+ name +'"]');
        popupCurrent = popupCurrent.parent();

        var tl3 = new TimelineLite();
        tl3.to(frame, 0, {scale:1}, "time1");
        tl3.to(popupCurrent, 0, {scale:1}, "time1");
        tl3.from(popup, 0.5, {y:-50}, "time1+=0.5");
        tl3.to(popup, 0.5, {opacity:1 }, "time1+=0.5");
        $('body').css('overflow', 'hidden');

    });

    
});
