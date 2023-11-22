/*amd /cm/xml/contentHeader.xml 3793 72e1cb7ae6de71cccfe269ca6e63eb9d2d40028fbbff69d859fb23c8c536dcbd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    scwin.wfTitleFavInit();
};
scwin.wfTitleFavInit = function () {
    var param = gcm.data.getParameter($p.parent().$p, 'menuInfo');
    var menuInfoArr = [];
    try {
        var favStatus = 'F';
        if ($p.main().wfm_side.getWindow().scwin.hasFavCode(param.menuCode) > 0) {
            favStatus = 'T';
        }
        scwin.setFavStatus(param.menuCode, favStatus);
        scwin.setMenuNavi(param.menuCode, param.menuNm, param.menuType);
    } catch (ex) {
        grp_main.hide();
    }
};
scwin.setMenuNavi = function (menuCode, menuName, menuType) {
    var naviArr, naviArrLen, naviStr, menuNm;
    try {
        if (typeof menuType !== 'undefined' && menuType === 'SP') {
            naviStr = '샘플화면 > ' + menuName;
            menuNm = menuName;
        } else {
            naviArr = $p.main().wfm_side.getWindow().scwin.getMenuNavigation(menuCode).split('%|%');
            naviArrLen = parseInt(naviArr.length / 2);
            naviStr = '';
            menuNm = naviArr[0];
            for (var i = naviArrLen; i >= 0; i--) {
                naviStr += naviArr[i * 2];
                if (i < naviArrLen && i > 0) {
                    naviStr += ' > ';
                }
            }
        }
    } catch (ex) {
        naviStr = '';
        menuNm = menuName;
    } finally {
        tbx_navi.setValue(naviStr);
        txt_h1.setValue(menuNm);
    }
};
scwin.setFavStatus = function (menuCode, favStatus) {
    btn_fav.setUserData('t_menuCode', menuCode);
    btn_fav.setUserData('t_favStatus', favStatus);
    if (favStatus == 'T') {
        btn_fav.addClass('on');
    } else {
        btn_fav.removeClass('on');
    }
};
scwin.btn_fav_onclick = function () {
    var menuCode = btn_fav.getUserData('t_menuCode');
    var favStatus = btn_fav.getUserData('t_favStatus');
    $p.main().wfm_side.getWindow().scwin.updateFav(menuCode, favStatus);
    if (favStatus == 'T') {
        favStatus = 'F';
    } else {
        favStatus = 'T';
    }
    scwin.setFavStatus(menuCode, favStatus);
};
scwin.showScreenInfo = function () {
    var pageUrl = $p.parent().$p.getFrame().getSrc();
    com.win.alert($p, '[' + txt_h1.getValue() + '] 페이지의 파일 경로는 다음과 같습니다.\n' + pageUrl);
};
scwin.reload = function () {
    $p.parent().$p.reinitialize();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'grp_main',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav','ev:onclick':'scwin.btn_fav_onclick',id:'btn_fav',style:'',type:'button',toolTip:'즐겨찾기를 추가/해제합니다'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'txt_h1',label:'Page Title',style:'',tagname:''}},{T:1,N:'xf:group',A:{id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.showScreenInfo',style:'',id:'',type:'button',title:'화면 정보',class:'btn_cm btn_guide'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.reload',style:'',id:'',type:'button',title:'화면 갱신',class:'btn_cm btn_refresh'},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{class:'pgt_icobox',id:'',style:''},E:[{T:1,N:'w2:span',A:{id:'tbx_navi',label:'',style:''}}]}]}]}]}]})