$(document).ready(function() {
    // Define popup template.
    $.extend($.FroalaEditor.POPUP_TEMPLATES, {
        "customPlugin.popup": '[_BUTTONS_][_CUSTOM_LAYER_]'
    });

    // Define popup buttons.
    $.extend($.FroalaEditor.DEFAULTS, {
        popupButtons: ['popupClose', '|', 'popupValidate'],
    });

    // The custom popup is defined inside a plugin (new or existing).
    $.FroalaEditor.PLUGINS.customPlugin = function (editor) {
        // Create custom popup.
        function initPopup () {
            // Popup buttons.
            var popup_buttons = '';

            // Create the list of buttons.
            if (editor.opts.popupButtons.length > 1) {
                popup_buttons += '<div class="fr-buttons">';
                popup_buttons += editor.button.buildList(editor.opts.popupButtons);
                popup_buttons += '</div>';
            }

            // Load popup template.
            var template = {
                buttons: popup_buttons,
                custom_layer: '<div class="custom-layer" style="padding: 10px;"><div class="fr-input-line"><input id="blockName" type="text" placeholder="Block Name" tabindex="1" dir="auto"></div></div>'
            };

            // Create popup.
            var $popup = editor.popups.create('customPlugin.popup', template);

            return $popup;
        }

        // Show the popup
        function showPopup () {
            // Get the popup object defined above.
            var $popup = editor.popups.get('customPlugin.popup');

            // If popup doesn't exist then create it.
            // To improve performance it is best to create the popup when it is first needed
            // and not when the editor is initialized.
            if (!$popup) $popup = initPopup();

            // Set the editor toolbar as the popup's container.
            editor.popups.setContainer('customPlugin.popup', editor.$tb);

            // This will trigger the refresh event assigned to the popup.
            // editor.popups.refresh('customPlugin.popup');

            // This custom popup is opened by pressing a button from the editor's toolbar.
            // Get the button's object in order to place the popup relative to it.
            var $btn = editor.$tb.find('.fr-command[data-cmd="block"]');
            // Set the popup's position.
            var left = $btn.offset().left + $btn.outerWidth() / 2;
            var top = $btn.offset().top + (editor.opts.toolbarBottom ? 10 : $btn.outerHeight() - 10);

            // Show the custom popup.
            // The button's outerHeight is required in case the popup needs to be displayed above it.
            editor.popups.show('customPlugin.popup', left, top, $btn.outerHeight());
        }

        // Hide the custom popup.
        function hidePopup () {
            editor.popups.hide('customPlugin.popup');
        }

        // Methods visible outside the plugin.
        return {
            showPopup: showPopup,
            hidePopup: hidePopup
        }
    };

    // Define an icon and command for the button that opens the custom popup.
    $.FroalaEditor.DefineIcon('buttonIcon', { NAME: 'cube'})
    $.FroalaEditor.RegisterCommand('block', {
        title: 'Insert Block',
        icon: 'buttonIcon',
        undo: true,
        focus: true,
        plugin: 'customPlugin',
        callback: function () {
            this.customPlugin.showPopup();
        }
    });

    // Define custom popup close button icon and command.
    $.FroalaEditor.DefineIcon('popupClose', { NAME: 'times' });
    $.FroalaEditor.RegisterCommand('popupClose', {
        title: 'Close',
        undo: true,
        focus: true,
        callback: function () {
            this.customPlugin.hidePopup();
        }
    });

    // Define custom popup validate button icon and command.
    $.FroalaEditor.DefineIcon('popupValidate', { NAME: 'check' });
    $.FroalaEditor.RegisterCommand('popupValidate', {
        title: 'Valider',
        undo: true,
        focus: true,
        callback: function () {
            // Focus out of the popup input
            $("#blockName").focusout();
            // Focus on the editor input
            this.html.insert('');
            // Insert the block
            this.html.insert('{' + '{ render(controller("PhoenixCmsBundle:Cms:block", { "name" : "' + $('#blockName').val() + '"})) }' + '}');
            // Hide the popup after the insert validation
            this.customPlugin.hidePopup();
        }
    });
    $('textarea.edit').froalaEditor({
        // Let the characters unchanged
        entities:'',
        // Add the custom buttons in the toolbarButtons list, after the separator.
        toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertHR', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html', 'block']
    })
});