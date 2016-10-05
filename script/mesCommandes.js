$(document).ready(function(){

      $('.dropdown-details').hide();
      
      var $elements = $('.drop-button, .dropdown-details');

      $('.drop-button').click(function() {
        $elements.eq($elements.index(this) + 1).stop(true, true).slideToggle(500);
      });


});
