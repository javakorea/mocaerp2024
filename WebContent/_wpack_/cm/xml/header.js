/*amd /cm/xml/header.xml 9876 b91d9789816ac3990d0a67e5ebcced08f6fb4ad0db9fd33ee1f933f0e64b4766 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
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
    com.win.logout($p);
};
scwin.btn_changePassword_onclick = function (e) {
    var data = { 'empCd': $p.parent().wfm_side.getWindow().dma_defInfo.get('EMP_CD') };
    var options = {
        'id': 'settingPassword',
        'width': '500px',
        'height': '280px',
        'popupName': '비밀번호변경',
        frameModal: 'top',
        'modal': true
    };
    com.win.openPopup($p, '/cm/xml/settingPassword.xml', options, data);
};
scwin.btn_logo_onclick = function () {
    com.win.goHome($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'linkarea',id:'',style:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_inspage',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인스웨이브 홈페이지'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_wtechcenter',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'W-Tech Center'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_demosite',id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'데모사이트'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_allmenu',id:'',name:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체메뉴'}]}]}]},{T:1,N:'w2:anchor',A:{class:'btn_toggle_menu',id:'btn_toggle_menu',name:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'slide'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'h1'},E:[{T:1,N:'w2:anchor',A:{class:'logo',id:'btn_logo',outerDiv:'false','ev:onclick':'scwin.btn_logo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'inswave systems'}]}]}]},{T:1,N:'w2:generator',A:{style:'',id:'gen_firstGenerator',class:'gnb_menu',tagname:'ul'},E:[{T:1,N:'xf:group',A:{style:'',id:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h2'},E:[{T:1,N:'w2:anchor',A:{outerDiv:'false','ev:onclick':'scwin.btn_menu1_Label_onclick',style:'',id:'btn_menu1_Label'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1depth 메뉴'}]}]}]},{T:1,N:'w2:generator',A:{class:'dep2',id:'gen_SecondGenerator',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_menu2_Label',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menu2_Label_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2depth 메뉴'}]}]},{T:1,N:'w2:generator',A:{class:'dep3',id:'gen_thirdGenerator',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'btn_menu3_Label',outerDiv:'false',style:'','ev:onclick':'scwin.btn_menu3_Label_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3depth 메뉴'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'option_box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'on mypage',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'btn_mypage',disabled:'','ev:onclick':'',id:'txt_empNm',outerDiv:'false',style:'',target:'',title:'aa'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:group',A:{class:'items',id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{'ev:onclick':'scwin.btn_changePassword_onclick',id:'btn_changePassword',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'비밀번호 변경'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'',id:'btn_logout',outerDiv:'false',style:'','ev:onclick':'scwin.btn_logout_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Logout'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'set',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{class:'btn_setting','ev:onclick':'scwin.btn_setting_onclick',id:'btn_setting',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Setting'}]}]}]}]}]},{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'display:none;',id:'',class:'btn_logout','ev:onclick':'scwin.btn_logout_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Logout'}]}]}]}]}]})