/*amd /cm/xml/settingPassword.xml 5320 d27413e4c154d9035e936fff8147f41ca1c16d184690777cf497b6505dfa543f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_password'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PASSWORD',name:'현재 비밀번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'NEW_PASSWORD',name:'신규 비밀번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'RETRY_PASSWORD',name:'신규 비밀번호(재입)',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_result'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FOCUS',name:'포커스를 줄 컴포넌트 아이디',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_updatePassword',ref:'data:json,dma_password',target:'data:json,dma_result',action:'/main/updatePassword',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updatePassword_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    scwin.param = com.data.getParameter($p);
    dma_password.set('EMP_CD', scwin.param.empCd);
    if (com.win.isAdmin($p)) {
        grp_currPassword.hide();
    }
};
scwin.btn_save_onclick = function () {
    var valInfo = [
        {
            id: 'NEW_PASSWORD',
            mandatory: true,
            minLength: 4
        },
        {
            id: 'RETRY_PASSWORD',
            mandatory: true,
            minLength: 4
        }
    ];
    if (com.win.isAdmin($p) == false) {
        valInfo.push({
            id: 'PASSWORD',
            mandatory: true,
            minLength: 4
        });
    }
    if (com.data.validateGroup($p, tbl_password, valInfo)) {
        com.win.confirm($p, '비밀번호를 변경하시겠습니까?', function (res) {
            if (res.clickValue === true) {
                com.sbm.execute($p, sbm_updatePassword);
            }
        });
    }
};
scwin.sbm_updatePassword_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        com.win.alert($p, com.sbm.getStatusMessage($p, e), function () {
            com.win.closePopup($p);
        });
    }
};
scwin.btn_cancel_onclick = function () {
    com.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{adaptive:'',adaptiveThreshold:'',tagname:'table',style:'',tabIndex:'',id:'tbl_password',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:162px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'grp_currPassword'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'현재 비밀번호'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:secret',A:{class:'req',id:'sct_password',placeholder:'',style:'',ref:'data:dma_password.PASSWORD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'신규 비밀번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:secret',A:{class:'req',id:'sct_newPassword',placeholder:'',style:'',ref:'data:dma_password.NEW_PASSWORD'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신규 비밀번호(재입력)'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:secret',A:{style:'',id:'sct_retryPassword',placeholder:'',class:'req',ref:'data:dma_password.RETRY_PASSWORD'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'margin-top: 20px;'},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})