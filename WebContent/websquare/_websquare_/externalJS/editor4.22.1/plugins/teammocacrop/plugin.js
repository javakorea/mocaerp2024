/**
 * Created by anndoc on 25.08.16.
 *
 * @fileOverview The Image Crop plugin.
 */

CKEDITOR.plugins.add('teammocacrop', {
    icons: 'teammocacrop',
    lang: 'en',
    init: function (editor) {
    	var pluginDirectory = this.path;
        editor.addCommand('teammocacropcom', 
        	new CKEDITOR.dialogCommand('cropDialog')	
        );

        editor.ui.addButton('TeammocaCrop', {
            label: 'image cropper',
            command: 'teammocacropcom',
            icon: this.path + 'icons/teammocacrop.png'
        });
        debugger;
        CKEDITOR.dialog.add('cropDialog', pluginDirectory + 'dialogs/teammocacrop.js');

    }
});
