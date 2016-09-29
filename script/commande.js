  $('.facturationAddress').hide();

  $("#facturation").on('click', function() {

    var facturation = $(this);

    if(facturation.is(':checked')) {

      $('#livraison').prop("checked", false);
      $('.facturationAddress').slideToggle();

    }

    if(!facturation.is(':checked')) {

      $('.facturationAddress').slideToggle();

    }

  });

  $("#livraison").on('click', function() {

    var livraison = $(this);

    if(livraison.is(':checked')) {

      $('#facturation').prop("checked", false);

      $('.facturationAddress').slideUp();

    }

  });
