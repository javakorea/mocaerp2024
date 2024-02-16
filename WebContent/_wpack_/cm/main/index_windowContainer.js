/*amd /cm/main/index_windowContainer.xml 5736 7b5556d8201993ed8a12f0930d72706d72e7dc40076a163935a3a1b30599c5e7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'xf:instance',_xml:'<xf:instance xmlns:xf="http://www.w3.org/2002/xforms">\r\n				<data xmlns="">\r\n				</data>\r\n			</xf:instance>'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{src:'../../cm/js/main.js'}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    if (WebSquare.util.isMobile()) {
        grp_wrap.removeClass('show_menu');
        $('.btn_toggle_menu').click(function () {
            $('.wrap').toggleClass('show_menu');
            $('.btn_toggle_menu').toggleClass('on');
            $('.dim').toggleClass('on');
        });
    } else {
        $('.btn_toggle_menu').click(function () {
            grp_wrap.toggleClass('show_menu');
            $('.btn_toggle_menu').toggleClass('on');
        });
    }
    $('.btn_all_search').click(function () {
        $('.search_field').toggleClass('active');
    });
    $('.tab_tit a').click(function () {
        $(this).parent().addClass('on').siblings().removeClass('on');
    });
    $('.btn_fold').click(function () {
        $(this).addClass('on');
        $('.btn_fold_list').removeClass('on');
    });
    $('.btn_fold_list').click(function () {
        $(this).addClass('on');
        $('.btn_fold').removeClass('on');
    });
    $('.btn_mypage').click(function () {
        $('.mypage .items').toggleClass('on');
    });
    scwin.initMainLoad();
};
scwin.wdc_main_onbeforecloseall = function () {
    scwin.pushStateMain();
    wdc_main.setUserData('isOnbeforeCloseAll', true);
    scwin.winCount = wdc_main.windows.length;
    scwin.winIdx = scwin.winCount;
    var promise = Promise.resolve();
    for (var i = 1; i < scwin.winCount; i++) {
        var winIdx = i;
        promise = promise.then(function () {
            scwin.winIdx--;
            if (scwin.winIdx === 1) {
                wdc_main.setUserData('isOnbeforeCloseAll', false);
            }
            if (scwin.closeBeforePage(wdc_main.getWindow(wdc_main.windows[scwin.winIdx].windowId).$p.getFrame())) {
                return wdc_main.closeWindow(wdc_main.windows[scwin.winIdx].windowId);
            }
        });
    }
    return false;
};
}}}]},{T:1,N:'style',A:{type:'text/css'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'wrap show_menu',id:'grp_wrap',style:''},E:[{T:1,N:'w2:wframe',A:{class:'header',id:'wfm_header',scope:'true',src:'../../cm/xml/header.xml',style:''}},{T:1,N:'xf:group',A:{class:'container',id:'',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'contents'},E:[{T:1,N:'w2:windowContainer',A:{class:'win_c',controlIconPosition:'allright',frameMode:'wframe',hideTitleOnMaximize:'false',id:'wdc_main',spaInitCount:'0',stopMinimizeOnNameLayer:'true',stopToggleOnLast:'false',style:'',toolbarPosition:'top',tooltipDisplay:'true',tooltipGroupClass:'false',useCloseButton:'true',useControlIconTitle:'false',useCustomMsg:'false',useFixButton:'true',useNameContainer:'true',useStatusMsg:'false',windowAutoResize:'false',windowMaxNum:'30',changeActiveWindow:'true',windowMaximizeAll:'false',windowTooltipDisplay:'true',closeType:'','ev:onbeforecloseall':'scwin.wdc_main_onbeforecloseall',fixArrangeFullScreen:'true'},E:[{T:1,N:'w2:windowToolbar',E:[{T:1,N:'w2:controlIconLayer',E:[{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'},{T:1,N:'w2:controlIcon'}]},{T:1,N:'w2:nameLayer'},{T:1,N:'w2:selectedNameLayer'}]}]},{T:1,N:'xf:group',A:{id:'',style:'position: absolute;bottom:40px;left:10px;min-width:calc( 98% - 20px );z-index: 9980;'},E:[{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_success',class:'msg_box success'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'min-height:20px',id:'txt_success',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_info',class:'msg_box info'},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_info',label:'정상 처리 되었습니다.',class:'txt_msg'}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_warning',class:'msg_box warning'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_warning',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeWarnMsg',disabled:'',style:'',id:'btn_warnig',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_warning',placeholder:''}}]},{T:1,N:'xf:group',A:{style:'display:none;',id:'msg_error',class:'msg_box error'},E:[{T:1,N:'xf:group',A:{style:'',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'',style:'',id:'txt_error',label:'처리 도중 오류가 발생하였습니다.',class:'txt_msg'}},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.removeErrorMsg',disabled:'',style:'',id:'btn_error',type:'button',class:'btn_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'테이블버튼'}]}]}]},{T:1,N:'xf:textarea',A:{style:'min-height: 100px;',id:'textarea_error',placeholder:''}}]}]}]}]},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_side',class:'side',scope:'true',src:'../../cm/xml/side.xml'}},{T:1,N:'w2:wframe',A:{style:'',id:'wfm_footer',scope:'true',src:'../../cm/xml/footer.xml'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'dim'}}]}]}]}]})