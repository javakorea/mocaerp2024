CKEDITOR.dialog.add('cropDialog', function (editor) {
	let s = editor.getSelection().getStartElement().$.src;
	if(!s){
		alert('이미지를 선택해주세요');
		return;
	}
    let imgJq = $('img[id$=_uiElement]');
    imgJq.attr('src',s);
	
    var  imageType = 'image/jpeg';
    var width = parseInt(window.innerWidth * 80 / 100);
    var height = parseInt(window.innerHeight * 80 / 100);
    let newsrc = '';

    
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
                        widths: ['100%'],
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
                            }
                        ]
                    }
                ]
            }
        ],
        onShow: function () {
        	let s = editor.getSelection().getStartElement().$.src;
        	if(!s){
        		alert('이미지를 선택해주세요');
        		return;
        	}
            let imgJq = $('img[id$=_uiElement]');
            imgJq.attr('src',s);
            imgJq.css('width','');
            imgJq.css('height','');
        		var image = imgJq[0];
        		var minAspectRatio = 0.1;
        		var maxAspectRatio = 5;
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
        			},
        			cropend: function () {
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
        				newsrc = this.cropper.getCroppedCanvas().toDataURL();
        			},
        		});

        		
    	    
    	    
        },
        onOk: function () {
        	if(newsrc){
        		$(editor.getSelection().getStartElement().$).attr('src',newsrc);
        	}
        }
    }    
});
