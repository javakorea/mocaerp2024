CKEDITOR.dialog.add('cropDialog', function (editor) {
    var  imageType = 'image/jpeg';
    var width = parseInt(window.innerWidth * 80 / 100);
    var height = parseInt(window.innerHeight * 80 / 100);
    
    try{

    	/*
        var googleLoginURL = "/cm/cropper.min.js";
        var cropperScript  = document.createElement('script');
        cropperScript.setAttribute('src',googleLoginURL);
        cropperScript.onload = function(e){
        	debugger;
    		var selection = editor.getSelection();
    	    var element = selection.getStartElement();
    		var image = element.$;
    	    if(image.tagName != 'IMG'){
    	    	alert('이미지를 선택해주세요');
    	    	return {};
    	    }	
    		var minAspectRatio = 0.5;
    		var maxAspectRatio = 1.5;
    		
    		scwin.cropper = new Cropper(image, {
    			data: {
    				width: 150,
    				height: 150
    			},
    			ready: function () {
    				var cropper = this.cropper;
    				var containerData = cropper.getContainerData();
    				var cropBoxData = cropper.getCropBoxData();
    				var aspectRatio = cropBoxData.width / cropBoxData.height;
    				var newCropBoxWidth;

    				if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
    					newCropBoxWidth = cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);

    					cropper.setCropBoxData({
    					left: (containerData.width - newCropBoxWidth) / 2,
    					width: newCropBoxWidth
    					});
    				}
    				alert(this.cropper.getCroppedCanvas().toDataURL());
    				//imgZoom.setSrc(this.cropper.getCroppedCanvas().toDataURL());
    				//grpImageZoom.show("");
    			},
    			cropend: function () {
    				alert('cropend');
    				var cropper = this.cropper;
    				var cropBoxData = cropper.getCropBoxData();
    				var aspectRatio = cropBoxData.width / cropBoxData.height;

    				if (aspectRatio < minAspectRatio) {
    					cropper.setCropBoxData({
    					width: cropBoxData.height * minAspectRatio
    					});
    				} else if (aspectRatio > maxAspectRatio) {
    					cropper.setCropBoxData({
    					width: cropBoxData.height * maxAspectRatio
    					});
    				}
    				alert(this.cropper.getCroppedCanvas().toDataURL());
    			},
    		});
	    }
	    document.body.insertBefore(cropperScript,document.body.firstChild);
	    */
    }catch(e){
    }
    
    

    
    return {
        title: editor.lang.teammocacrop.title,
        width: width,
        height: height,
        contents: [
            {
                id: 'base',
                label: editor.lang.teammocacrop.cropTab,
                filebrowser: 'uploadButton',
                elements: [
                    {
                        type: 'hbox',
                        widths: ['80%', '20%'],
                        children: [
                            {
                                type: 'html',
                                html: '<img>',
                                id: 'img',
                                label: editor.lang.common.image,
                                style: 'width: 100%; height: ' + parseInt(window.innerHeight * 80 / 100) + 'px; border-color:#CECECE',
                                setup: function(element) {
                                	alert('1');
 
                                    
                                }
                            },
                            {
                                type: 'vbox',
                                align: 'right',
                                children: [
                                    {
                                        type: 'file',
                                        id: 'upload',
                                        label: editor.lang.common.browseServer,
                                        onClick: function (e) {
                                        	alert('2');
                                        }
                                    }, {
                                        type: 'fileButton',
                                        style: 'display: none',
                                        id: 'uploadButton',
                                        label: editor.lang.teammocacrop.btnUpload,
                                        for: ['base', 'upload'],
                                        filebrowser: {
                                            action: 'QuickUpload'
                                        },
                                        onClick: function () {
                                        	alert('3');
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        onShow: function () {
        	alert('21');
        	/*
            var selection = editor.getSelection();
            var element = selection.getStartElement();

            if (element)
                element = element.getAscendant('img', true);

            if (!element || element.getName() != 'img') {
                element = editor.document.createElement('img');
                this.insertMode = true;
            }
            else
                this.insertMode = false;

            this.element = element;
            if (!this.insertMode)
                this.setupContent(this.element);
            */    
        	
           	//debugger;
        	//cke_413_uiElement
        	//editor.getSelection().getStartElement().$.src
            //cropper.reset().replace(element.getAttribute('src'));
        	
        	
        	
            let imgJq = $('img[id$=_uiElement]');
            imgJq.attr('src',editor.getSelection().getStartElement().$.src);

            	debugger;
            	
        		var image = imgJq[0];
        	    if(image.tagName != 'IMG'){
        	    	alert('이미지를 선택해주세요');
        	    	return {};
        	    }	
        		var minAspectRatio = 0.5;
        		var maxAspectRatio = 1.5;
        		


    	    
    	    
        },
        onOk: function () {
        	alert('22');
            //var dialog = this,
            //    uploadButton = dialog.getContentElement('base', 'uploadButton');
            //uploadButton.click();
        }
    }    
});
