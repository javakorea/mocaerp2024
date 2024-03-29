/**
 * Created by anndoc on 25.08.16.
 *
 * @fileOverview The Image Crop plugin.
 */

CKEDITOR.plugins.add('teammocacrop', {
    icons: 'teammocacrop',
    lang: 'en',
    init: function (editor) {
    	style = document.createElement('link');
        style.type = 'text/css';
        style.rel = 'stylesheet';
        style.href = editor.config.cropperCssUrl;
        document.getElementsByTagName("head")[0].appendChild(style);
        CKEDITOR.scriptLoader.load(editor.config.cropperJsUrl);
        /*
        var googleLoginURL = config.cropperJsUrl;
        var cropperScript  = document.createElement('script');
        cropperScript.setAttribute('src',googleLoginURL);
        cropperScript.onload = function(e){



    	}
    	
    	document.body.insertBefore(cropperScript,document.body.firstChild);
    	*/
    	var pluginDirectory = this.path;
        editor.addCommand('teammocacropcom', new CKEDITOR.dialogCommand('cropDialog')
        );

        editor.ui.addButton('TeammocaCrop', {
            label: 'image cropper',
            command: 'teammocacropcom',
            icon: this.path + 'icons/teammocacrop.png'
        });
    		
        CKEDITOR.dialog.add('cropDialog', pluginDirectory + 'dialogs/teammocacrop.js');	
        

    }
});
