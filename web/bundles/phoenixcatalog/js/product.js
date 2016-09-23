(function ($) {
    'use strict';

    $.getSubProduct = function (fields, table) {
        var subProduct = null;
        $.each(table, function(index, sub){
            var isValid = 1;
            $.each(fields, function(index, value) {
                if (sub[index] != value ) {
                    isValid = 0;
                }
            });
            if(isValid == 1){
                subProduct = sub;
            }
        });
        return subProduct;
    }

    $.changePrice = function (boxId, values) {
        $('#box-' + boxId + ' select').change(function () {
            var boxId = $(this).parent('.box-content').attr('id');
            var table = values[boxId];
            var isValid = 1
            $(this).parent('.box-content').find('select').each(function () {
                if ($(this).find('option:selected').is(':disabled')) {
                    isValid = 0;
                }
            });
            if (isValid == 1) {
                var fields = {};
                $(this).parent('.box-content').find('select').each(function () {
                    fields [$(this).attr("class")] = $(this).find(':selected').text();
                });
                var subProduct = $.getSubProduct(fields, table);
                if (subProduct != null) {
                    $(this).parent('.box-content').find('.box-price').text(subProduct['price_exl_tax'] + " €");
                }
            }
        });
    }

    $.checkSubproduct = function (boxId, values) {
        $('#box-' + boxId + ' select').change(function () {
            var boxId = $(this).parent('.box-content').attr('id');
            var table = values[boxId];
            var selectClass = $(this).attr('class');
            var fields = {};
            fields [$(this).attr("class")] = $(this).find(':selected').text();
            $(this).parent('.box-content').find('select').each(function () {
                if (!$(this).find('option:selected').is(':disabled')) {
                    $(this).parent('.box-content').find('select:not(.' + selectClass + ')').each(function(){
                        var targetClass = $(this).attr('class');
                        $(this).find('option').each(function(){
                            if($(this).attr('value') != ''){
                                fields [targetClass] = $(this).text();
                                var subProduct = $.getSubProduct(fields, table);
                                if(subProduct == null){
                                    $(this).attr('disabled', true)
                                } else {
                                    $(this).removeAttr('disabled')
                                }
                            }
                        })
                        delete fields[targetClass];
                    })
                }
            });
            if(!$(this).parent('.box-content').find('.remove').length){
                $(this).parent('.box-content').find('select').last().after("<a href='#' class='remove' onclick='$.removeChoice(\"" + boxId + "\")'>X</a>");
            }
        });
    }

    $.removeChoice = function (boxId) {
        $('#' + boxId + ' select option:disabled').each( function(){
            if($(this).attr("value") != ''){
                $(this).removeAttr('disabled')
            }
        })
        $('#' + boxId + ' select').each(function(){
            $(this).find('option').first().prop('selected', true)
        })
        $('#' + boxId + ' .remove').remove();
    }
})(jQuery);