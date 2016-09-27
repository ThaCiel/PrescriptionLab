$(document).ready(function(){

  // ANIMATION D'APPARITION

  $('.panier-link').on('click', function(){

    $('.site-move').addClass('panier-sidebar-open');
    $('.panier-sidebar').addClass('panier-sidebar-active');

  });

  $('#closePanier').on('click', function(){

    $('.site-move').removeClass('panier-sidebar-open');
    $('.panier-sidebar').removeClass('panier-sidebar-active');

  });

  // GESTION DES CALCULS
  $(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find(".qty").text();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }

    $button.parent().find(".qty").html(newVal);

    var price = $button.parent().data('price');

    var newPrice = (price * newVal).toFixed(2);

    $button.parent().parent().find('.price').html(newPrice + "€");

    var sum = 0;
    $('.price').each(function() {
        total = parseFloat($(this).text());
        sum += Number(total);
    });

    $('.total').html(sum.toFixed(2) + "€");

  });

    function total(){

      var sum = 0;
      $('.price').each(function() {
          total = parseFloat($(this).text());
          sum += Number(total);
      });

      $('.total').html(sum.toFixed(2) + "€");

    }

    total();


});
