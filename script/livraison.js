
$(".livraisonType").on('click', function() {

  var livraisonType = $(this);


  if(livraisonType.is(':checked')) {

    $('.livraisonType').prop("checked", false);
    $(livraisonType).prop("checked", true);

  }


});
