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
        editor.addCommand('teammocacropcom',{ 
        	exec: (_editor) => {
        		com.ckTarget = _editor;
        		var _param = {src:_editor.getSelection().getStartElement().$.src};
        		if(!_param.src){
        			com.win.alert($p,'이미지를 선택하세요!');
        			return;
        		}
        		var data = { data: _param, callbackFn: "" };
        		var options = {
        			id: "ck_photo_editor",
        			popupName: "이미지편집",
        			className : "h100",
        			modal: true,
        			useMaximize : false,
        			width: (screen.availWidth * 0.6), height: (screen.availHeight * 0.6)
        		};
        		com.win.openPopup($p,"/ui/ck_photo_editor.xml", options, data);
	        }
        });

        editor.ui.addButton('TeammocaCrop', {
            label: 'image cropper',
            command: 'teammocacropcom',
            icon: this.path + 'icons/teammocacrop.png'
        });
        
        

    }
});
