/*amd /cm/xml/header.xml 13472 34cab8ae3c7d72b6596b116d6ce45d7cd3e927237ee6fda21e99bcfecb294ece */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    let sInfo = JSON.parse(sessionStorage.getItem('loginInfo'));
    txt_empNm.setValue(sInfo.name + ' (' + sInfo.email + ')');
    img_profile.setSrc(sInfo.picture);
};
scwin.setGenerator = function () {
    gen_firstGenerator.removeAll();
    var tmpDataArr = $p.parent().wfm_side.getWindow().dlt_menu.getAllJSON();
    var tmpParentIdx = 0;
    var thirdIndex = 0;
    for (var i = 0; i < tmpDataArr.length; i++) {
        var headerData_obj = tmpDataArr[i];
        var menuDepth = headerData_obj.MENU_LEVEL;
        var parentKey = headerData_obj.PARENT_MENU_CD;
        var tmpIdx = 0, tmpIdx2 = 0;
        if (menuDepth == '1') {
            tmpParentIdx = gen_firstGenerator.insertChild();
            var firstMenuLabel = gen_firstGenerator.getChild(tmpParentIdx, 'btn_menu1_Label');
            firstMenuLabel.setValue(headerData_obj.MENU_NM);
            firstMenuLabel.setUserData('ins_webPath', headerData_obj.SRC_PATH);
            firstMenuLabel.setUserData('ins_key', headerData_obj.PARENT_MENU_CD);
            firstMenuLabel.setUserData('ins_label', headerData_obj.MENU_NM);
            firstMenuLabel.setUserData('ins_code', headerData_obj.MENU_CD);
        } else if (menuDepth == '2') {
            var secondGene = gen_firstGenerator.getChild(tmpParentIdx, 'gen_SecondGenerator');
            tmpIdx = secondGene.insertChild();
            var secondMenuLabel = secondGene.getChild(tmpIdx, 'btn_menu2_Label');
            secondMenuLabel.setValue(headerData_obj.MENU_NM);
            thirdIndex = tmpIdx;
        } else if (menuDepth == '3') {
            var thirdGene = secondGene.getChild(thirdIndex, 'gen_thirdGenerator');
            tmpIdx2 = thirdGene.insertChild();
            var thirdMenuLabel = thirdGene.getChild(tmpIdx2, 'btn_menu3_Label');
            thirdMenuLabel.setValue(headerData_obj.MENU_NM);
            thirdMenuLabel.setUserData('ins_webPath', headerData_obj.SRC_PATH);
            thirdMenuLabel.setUserData('ins_key', headerData_obj.PARENT_MENU_CD);
            thirdMenuLabel.setUserData('ins_label', headerData_obj.MENU_NM);
            thirdMenuLabel.setUserData('ins_code', headerData_obj.MENU_CD);
        }
    }
    var firstMenuCount = gen_firstGenerator.getChildrenCount();
    for (var i = 0; i < firstMenuCount; i++) {
        var secondGene = gen_firstGenerator.getChild(i, 'gen_SecondGenerator');
        if (secondGene.getChildrenCount() === 0) {
            secondGene.remove();
        }
    }
};
scwin.setMenuCss = function () {
    $(function () {
        $('.gnb_menu a').click(function () {
            if (!$(this).parent().parent().hasClass('on')) {
                $(this).parent().parent().addClass('on').siblings().removeClass('on');
            }
        });
        $('.dep2 li a').click(function () {
            var pTop = $(this).parent().position().top;
            $(this).siblings().css('top', pTop + 'px');
            $(this).parent().parent().children().removeClass('on');
            $(this).parent().addClass('on');
            $(this).children().addClass('on');
        });
        $('.dep2').mouseleave(function () {
            $(this).parent().removeClass('on');
            $(this).children().removeClass('on');
        });
        $('.items').mouseleave(function () {
            $(this).removeClass('on');
        });
    });
};
scwin.btn_menu1_Label_onclick = function () {
    var urlPath = this.getUserData('ins_webPath');
    if (urlPath != '') {
        var label = this.getUserData('ins_label');
        var pageCode = this.getUserData('ins_code');
        $p.main().wfm_side.getWindow().scwin.setMenuRelation(label, urlPath, pageCode);
        $p.parent().grp_wrap.setStyle('overflow', 'visible');
    }
};
scwin.btn_menu2_Label_onclick = function () {
    var urlPath = this.getUserData('ins_webPath');
    if (urlPath && urlPath != '') {
        var label = this.getUserData('ins_label');
        var pageCode = this.getUserData('ins_code');
        $p.main().wfm_side.getWindow().scwin.setMenuRelation(label, urlPath, pageCode);
        $('.dep2').removeClass('on');
        $('.gnb_menu').removeClass('show');
        $('.gnb_menu li').removeClass('on');
    }
};
scwin.btn_menu3_Label_onclick = function () {
    var urlPath = this.getUserData('ins_webPath');
    if (urlPath && urlPath != '') {
        var label = this.getUserData('ins_label');
        var pageCode = this.getUserData('ins_code');
        $p.main().wfm_side.getWindow().scwin.setMenuRelation(label, urlPath, pageCode);
        $('.dep2 li').removeClass('on');
        $('.gnb_menu li').removeClass('on');
    }
};
scwin.btn_setting_onclick = function () {
    var data = {
        'data': '',
        callbackFn: 'scwin.callbackSetting'
    };
    var options = {
        'id': 'mainSettingPop',
        'width': '500px',
        'height': '200px',
        frameModal: 'top',
        'popupName': '환경설정 관리',
        'modal': true
    };
    com.win.openPopup($p, '/cm/xml/settingPop.xml', options, data);
};
scwin.callbackSetting = function (res) {
    if (res.clickValue === true) {
        com.win.confirm($p, '정상 처리되었습니다. 화면을 갱신하시겠습니까?', 'scwin.execUpdateMainSettingConfirmCallback');
    }
};
scwin.execUpdateMainSettingConfirmCallback = function (res) {
    if (res.clickValue === true) {
        gcm.win.removeEventOnBeforeUnload();
        com.win.goHome($p);
    }
};
scwin.btn_toggle_onclick = function () {
    scwin.toggleMenu();
};
scwin.toggleMenu = function () {
    $('.dim').toggleClass('hide');
};
scwin.btn_logout_onclick = function (e) {
    com.win.confirm($p, '로그아웃하시겠습니까?', function (e) {
        if (e.clickValue) {
            sessionStorage.removeItem('loginInfo');
            com.win.goHome($p);
        }
    });
};
scwin.btn_logo_onclick = function () {
    com.win.goHome($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'linkarea',id:'',style:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_inspage',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모카ERP 홈페이지'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_allmenu',id:'',name:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체메뉴'}]}]}]},{T:1,N:'w2:anchor',A:{class:'btn_toggle_menu',id:'btn_toggle_menu',name:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'slide'}]}]},{T:1,N:'xf:group',A:{class:'logo',id:'',style:'',tagname:'h1'},E:[{T:1,N:'xf:image',A:{src:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAkCAYAAAAJgC2zAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Nzk1QzE5NzIzNTY4MTFFQ0IzMUM5RjExMzk1NjI2NjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Nzk1QzE5NzMzNTY4MTFFQ0IzMUM5RjExMzk1NjI2NjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3OTVDMTk3MDM1NjgxMUVDQjMxQzlGMTEzOTU2MjY2MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3OTVDMTk3MTM1NjgxMUVDQjMxQzlGMTEzOTU2MjY2MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjh5fpEAAAfiSURBVHja7FprbBRV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',style:'',id:'btn_logo',class:'logo'}}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_firstGenerator',class:'gnb_menu',tagname:'ul'},E:[{T:1,N:'xf:group',A:{style:'',id:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h2'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false','ev:onclick':'scwin.btn_menu1_Label_onclick',style:'',id:'btn_menu1_Label'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1depth 메뉴'}]}]}]},{T:1,N:'w2:generator',A:{class:'dep2',id:'gen_SecondGenerator',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_menu2_Label',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menu2_Label_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2depth 메뉴'}]}]},{T:1,N:'w2:generator',A:{class:'dep3',id:'gen_thirdGenerator',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_menu3_Label',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menu3_Label_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3depth 메뉴'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'option_box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'on mypage',id:'',style:'',tagname:'li'},E:[{T:1,N:'xf:image',A:{src:'/cm/images/contents/ico_mypage.png',style:'',id:'img_profile',class:'img_profile'}},{T:1,N:'w2:anchor',A:{class:'btn_mypage',disabled:'','ev:onclick':'',id:'txt_empNm',outerDiv:'false',style:'',target:'',title:'aa'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:group',A:{class:'items',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{'ev:onclick':'scwin.btn_changePassword_onclick',id:'btn_changePassword',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비밀번호 변경'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'',id:'btn_logout',outerDiv:'false',style:'','ev:onclick':'scwin.btn_logout_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Logout'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'set',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'btn_setting','ev:onclick':'scwin.btn_setting_onclick',id:'btn_setting',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Setting'}]}]}]}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'display:none;',id:'',class:'btn_logout','ev:onclick':'scwin.btn_logout_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Logout'}]}]}]}]}]})