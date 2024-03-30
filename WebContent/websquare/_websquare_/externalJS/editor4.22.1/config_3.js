﻿//캡쳐한이미지를 붙여넣기시 자동으로 서버업로드하는문제를 해결하기위해만믄 오버라이드
CKEDITOR.plugins.clipboard.initPasteDataTransfer = function(a, b) {
	debugger;
    if (a && a.data && a.data.$) {
        var c = a.data.$.clipboardData
          , d = new this.dataTransfer(c,b);
        "copy" !== a.name && "cut" !== a.name || d.storeId();
        this.copyCutData && d.id == this.copyCutData.id ? (d = this.copyCutData,
        d.$ = c) : this.copyCutData = d;
        return d
    }
    return {};
};
CKEDITOR.editorConfig = function( config )
{

	config.toolbar_default = [
	                                  	['Source','DocProps','-','NewPage','Preview','-'],
	                                  	['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print'],
	                                  	['Undo','Redo','SelectAll','RemoveFormat'],
	                                  	['Bold','Italic','Underline'],
	                                  	['StrikeThrough','Subscript','Superscript'],
	                                  	['OrderedList','UnorderedList','-','Outdent','Indent','Blockquote'],
	                                  	['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
	                                  	['Anchor','Table'],
	                                  	['Rule','SpecialChar','PageBreak','TextColor','BGColor','ShowBlocks'],
	                                  	['Styles','Format','Font','FontSize']		// No comma for the last row.
	                                  ] ;
	config.toolbar_simple = [
	                                	['Font','FontSize','Table','Image'],
	                                  	['Bold','Italic','Underline','TextColor']
	                                  ];
	//사용하는CK태그속성중에 menubar="board" 에 의해 앞에 'config.toolbar_'가 붙어 툴바설정이 결정됨
	config.toolbar_board = [
	    	['Source','FontSize','Bold','TextColor','Table','Indent','Outdent','HorizontalRule','Maximize','TeammocaCrop']
	];
	
	
	
	
	config.toolbar_defaultImage = [
	                                  	['Source','DocProps','-','NewPage','Preview','-'],
	                                  	['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print'],
	                                  	['Undo','Redo','SelectAll','RemoveFormat'],
	                                  	['Bold','Italic','Underline'],
	                                  	['StrikeThrough','Subscript','Superscript'],
	                                  	['OrderedList','UnorderedList','-','Outdent','Indent','Blockquote'],
	                                  	['JustifyLeft','JustifyCenter','JustifyRight','JustifyFull'],
	                                  	['Anchor','Table','Image'],
	                                  	['Rule','SpecialChar','PageBreak','TextColor','BGColor','ShowBlocks'],
	                                  	['Styles','Format','Font','FontSize']		// No comma for the last row.
	                                  ] ;
	config.font_names	 = '맑은 고딕;Times New Roman' ; 
	config.fullPage = false;   //true이면 html태그 까지 보임 false이면 에디터 부분 태그만 보임(html로 보기 시에)
	config.enterMode = CKEDITOR.ENTER_BR; //엔터시 입력되는 태그 BR P DIV 세 종류가 있습니다.
	config.fontSize_sizes = '8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px' ; //폰트 사이즈 설정입니다.
	config.startupFocus = false; //시작시 editor에 포커스 가는 여부 입니다. 마지막에 그린 에디터로 갑니다.
	config.skin ="moono-lisa";
	config.allowedContent = true;
	config.clipboard_handleImages = false;

	config.pasteFromWordPromptCleanup = true;
	config.pasteFromWordRemoveFontStyles = false;
	config.pasteFromWordRemoveStyles = false;
	
	config.extraPlugins = 'resize, pastebase64,teammocacrop';
    config.removePlugins = 'exportpdf,magicline';//pdf는이미지라가안나와못씀,문단나누기는자동으로마음대로나와불편함
	//config.resize_dir = 'both'; both || vertical || horizontal

	config.filebrowserUploadMethod = 'form';
	
	//Teammocacorp에서 사용하는 crop오픈소스라이브러리
	config.cropperJsUrl = "/cm/cropper.min.js";
    config.cropperCssUrl = "/cm/cropper.css"
    	
    	

};



