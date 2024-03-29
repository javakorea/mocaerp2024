/**
 * Created by anndoc on 25.08.16.
 *
 * @fileOverview The Image Crop plugin.
 */

CKEDITOR.plugins.add('teammocacrop', {
    icons: 'teammocacrop',
    lang: 'en',
    init: function (editor) {
        var googleLoginURL = "/cm/cropper.min.js";
        var cropperScript  = document.createElement('script');
        cropperScript.setAttribute('src',googleLoginURL);
        cropperScript.onload = function(e){



    	}
    	document.body.insertBefore(cropperScript,document.body.firstChild);
    	
    	var pluginDirectory = this.path;
        editor.addCommand('teammocacropcom', new CKEDITOR.dialogCommand('cropDialog')
        );

        editor.ui.addButton('TeammocaCrop', {
            label: 'image cropper',
            command: 'teammocacropcom',
            icon: this.path + 'icons/teammocacrop.png'
        });
    		
            var googleLoginURL = "/cm/cropper.min.js";
            var cropperScript  = document.createElement('script');
            cropperScript.setAttribute('src',googleLoginURL);
            cropperScript.onload = function(e){
            	CKEDITOR.dialog.add('cropDialog', pluginDirectory + 'dialogs/teammocacrop.js');	
        	}
        	document.body.insertBefore(cropperScript,document.body.firstChild);
        
        

    }
});
