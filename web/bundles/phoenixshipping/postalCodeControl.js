;( function( $, window, document, undefined ) {

    "use strict";
    var pluginName = "postalCodeControl",
        defaults = {};

    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    $.extend( Plugin.prototype, {
        init: function() {
            var self = this;
            var form = $("#postcode-control");

            form.submit(function (event) {
                event.preventDefault();
                $.post(self.settings.url, form.serialize())
                    .done(function(data) {
                        if (data.available == 1) {
                            $("#isAvailable").html(data.postcode + " code postal valide");
                        }
                        else {
                            $("#isAvailable").html(data.postcode + " code postal invalide");
                        }
                    });
            });
        }
    } );

    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" +
                    pluginName, new Plugin( this, options ) );
            }
        } );
    };
} )( jQuery, window, document );