$( document ).ready(function() {

    $('form.ajaxform').on('submit', function(e){
        $('.wrap_popup').fadeOut(20);
        e.preventDefault();

        var theurl= $(this).attr('action');

        var formData = $(this).serialize();

        $.ajax({
            url : theurl,
            type : 'POST',
            data : formData,
            success : function(code_html, statut){

                popup = $(code_html).filter('.popup-filter').html();
                js = $(code_html).filter('.js-filter').html();
                
                $('.wrap_popup').html(popup);
                $('.js_comingsoon').html(js);
                $('.wrap_popup').fadeIn();
            },

            error : function(request,status,errorThrown){

            }
        })

        return false;
    });

});
