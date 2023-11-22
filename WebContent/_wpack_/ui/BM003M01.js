/*amd /ui/BM003M01.xml 24087 3938a8eb5df806676c9515f4e7acf697368fcc71e8c66df78381462605516bbb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_program',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':'','ev:onbeforerowpositionchange':'scwin.dlt_program_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_NM',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'PROGRAM_GROUP_CD',name:'프로그램그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SRC_PATH',name:'프로그램소스경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_programAuthority',baseNode:'list',saveRemovedData:'true',repeatNode:'map','ev:oncelldatachange':''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',ignoreStatus:'true'}},{T:1,N:'w2:column',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_CD',name:'권한코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'AUTHORITY_NM',name:'권한명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_SELECT',name:'조회권한여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_SAVE',name:'저장권한여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_AUTH_EXCEL',name:'엑셀권한여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'PROGRAM_GROUP_CD',name:'프로그램구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PROGRAM',name:'프로그램',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_USE',name:'사용여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_program'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'PROGRAM_CD',name:'프로그램코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchProgram',ref:'data:json,dma_search',target:'data:json,dlt_program',action:'/program/searchProgram',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchProgram_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveProgramAll',ref:'data:json,[{"id":"dlt_program","action":"modified"},{"id":"dlt_programAuthority","action":"modified"}]',target:'',action:'/program/saveProgramAll',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중 입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveProgramAll_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveProgram',ref:'data:json,[{"id":"dlt_program","action":"modified"},"dma_search"]',target:'',action:'/program/saveProgram',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중 입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveProgram_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_searchProgramAuthority',ref:'data:json,dma_program',target:'data:json,dlt_programAuthority',action:'/program/searchProgramAuthority',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchProgramAuthority_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveProgramAuthority',ref:'data:json,[{"id":"dlt_programAuthority","action":"modified"},"dma_program"]',target:'',action:'/program/saveProgramAuthority',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'저장중 입니다...','ev:submit':'','ev:submitdone':'scwin.sbm_saveProgramAuthority_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.selectedProgramRowIdx = 0;
scwin.onpageload = function () {
    var codeOptions = [{
            code: '00026',
            compID: 'sbx_programGroup, grd_program:PROGRAM_GROUP_CD'
        }];
    com.data.setCommonCode($p, codeOptions);
    com.win.setEnterKeyEvent($p, tbl_search, scwin.btn_search_onclick);
    com.util.setGridViewDelCheckBox($p, [
        grd_program,
        grd_programAuthority
    ]);
    com.data.setChangeCheckedDc($p, [
        dlt_program,
        dlt_programAuthority
    ]);
};
scwin.ondataload = function () {
    scwin.btn_search_onclick();
};
scwin.btn_search_onclick = function () {
    scwin.selectedProgramRowIdx = 0;
    if (com.data.isModified($p, dlt_programAuthority)) {
        com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00049'), function (res) {
            if (res.clickValue === true) {
                com.data.undoAll($p, dlt_programAuthority);
                com.sbm.execute($p, sbm_searchProgram);
            }
        });
    } else {
        com.sbm.execute($p, sbm_searchProgram);
    }
};
scwin.sbm_searchProgram_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        spn_programCnt.setValue(grd_program.getTotalRow());
        dlt_programAuthority.removeAll();
        spn_programAuthorityCnt.setValue('0');
        dlt_programAuthority.reform();
        grd_program.setFocusedCell(scwin.selectedProgramRowIdx, 'PROGRAM_NM');
    }
};
scwin.dlt_program_onbeforerowpositionchange = function (info) {
    scwin.selectedProgramRowIdx = info.newRowIndex;
    if (com.data.isModified($p, dlt_programAuthority)) {
        com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00048') + ' ' + com.data.getMessage($p, 'MSG_CM_00001'), scwin.saveProgramAuthority);
        return false;
    } else {
        var rowStatus = dlt_program.getRowStatus(info.newRowIndex);
        if (rowStatus == 'C') {
            dlt_programAuthority.removeAll();
            dlt_programAuthority.reform();
            spn_programAuthorityCnt.setValue(grd_programAuthority.getTotalRow());
        } else {
            var programCd = dlt_program.getCellData(info.newRowIndex, 'PROGRAM_CD');
            if (programCd) {
                dma_program.set('PROGRAM_CD', programCd);
                com.sbm.execute($p, sbm_searchProgramAuthority);
            }
        }
    }
};
scwin.btn_addProgram_onclick = function () {
    var menu_cnt = dlt_program.getTotalRow();
    if (menu_cnt == 0) {
        com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00022'));
        return;
    }
    if (com.data.isModified($p, dlt_programAuthority)) {
        com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00050') + ' ' + com.data.getMessage($p, 'MSG_CM_00001'), scwin.saveProgramAuthority);
    } else {
        var idx = com.data.insertRow($p, grd_program);
        grd_program.setReadOnly('cell', idx, 'PROGRAM_CD', false);
        grd_program.setFocusedCell(idx, 'PROGRAM_GROUP_CD', true);
    }
};
scwin.btn_cancelProgram_onclick = function () {
    com.data.undoGridView($p, grd_program);
};
scwin.btn_saveProgram_onclick = function () {
    scwin.saveData();
};
scwin.saveData = function () {
    if (com.data.isModified($p, dlt_program) && com.data.isModified($p, dlt_programAuthority)) {
        com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00023') + ' ' + com.data.getMessage($p, 'MSG_CM_00010'), scwin.saveProgramAll);
    } else if (com.data.isModified($p, dlt_program)) {
        com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00024') + ' ' + com.data.getMessage($p, 'MSG_CM_00010'), scwin.saveProgram);
    } else if (com.data.isModified($p, dlt_programAuthority)) {
        com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00025') + ' ' + com.data.getMessage($p, 'MSG_CM_00010'), scwin.saveProgramAuthority);
    } else {
        com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00005'));
    }
};
scwin.saveProgram = function (res) {
    var valProgramInfo = [
        {
            id: 'PROGRAM_CD',
            mandatory: true
        },
        {
            id: 'PROGRAM_NM',
            mandatory: true
        }
    ];
    if (com.data.validateGridView($p, grd_program, valProgramInfo)) {
        if (res.clickValue === true) {
            com.sbm.execute($p, sbm_saveProgram);
        }
    }
};
scwin.saveProgramAll = function (res) {
    var valProgramInfo = [
        {
            id: 'PROGRAM_CD',
            mandatory: true
        },
        {
            id: 'PROGRAM_NM',
            mandatory: true
        }
    ];
    if (com.data.validateGridView($p, grd_program, valProgramInfo)) {
        if (res.clickValue === true) {
            com.sbm.execute($p, sbm_saveProgramAll);
        }
    }
};
scwin.saveProgramAuthority = function (res) {
    if (res.clickValue === true) {
        com.sbm.execute($p, sbm_saveProgramAuthority);
    }
};
scwin.btn_addProgramAuthority_onclick = function () {
    var focusRowIdx = grd_program.getFocusedRowIndex();
    if (focusRowIdx == -1) {
        com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00026'));
    } else {
        var rowStatus = dlt_program.getRowStatus(focusRowIdx);
        if (rowStatus == 'C') {
            com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00027'));
        } else {
            var programCd = dma_program.get('PROGRAM_CD');
            if (programCd != '') {
                var data = {
                    data: dma_program.getJSON(),
                    callbackFn: 'scwin.insertProgramAuthority'
                };
                var options = {
                    id: 'ProgramAuthorityPop',
                    popupName: '프로그램별 접근 권한',
                    modal: true,
                    width: 680,
                    height: 430
                };
                com.win.openPopup($p, '/ui/BM/BM003P01.xml', options, data);
            }
        }
    }
};
scwin.insertProgramAuthority = function (obj) {
    var dLength = obj.length;
    for (i = 0; i < dLength; i++) {
        var data = dlt_programAuthority.getMatchedIndex('AUTHORITY_CD', obj[i].AUTHORITY_CD, true);
        if (data.length == 0) {
            obj[i].PROGRAM_CD = dma_program.get('PROGRAM_CD');
            obj[i].chk = '0';
            var idx = com.data.insertRow($p, grd_programAuthority);
            dlt_programAuthority.setRowJSON(idx, obj[i], true);
        }
    }
};
scwin.btn_delProgramAuthority_onclick = function () {
    dlt_programAuthority.deleteRows(grd_programAuthority.getCheckedIndex('chk'));
};
scwin.btn_cancelProgramAuthority_onclick = function () {
    com.data.undoGridView($p, grd_programAuthority);
};
scwin.btn_saveProgramAuthority_onclick = function () {
    var idx = dlt_programAuthority.getModifiedIndex();
    var status = true;
    for (i = 0; i < idx.length; i++) {
        var rowStatus = dlt_programAuthority.getRowStatus(idx[i]);
    }
    if (status && idx.length > 0) {
        com.win.confirm($p, idx + com.data.getMessage($p, 'MSG_CM_00028'), function (res) {
            if (res.clickValue === true) {
                com.sbm.execute($p, sbm_saveProgramAuthority);
            }
        });
    }
};
scwin.btn_excelProgram_onclick = function () {
    com.data.downloadGridViewExcel($p, grd_program);
};
scwin.btn_excelProgramAuthority_onclick = function () {
    com.data.downloadGridViewExcel($p, grd_programAuthority);
};
scwin.sbm_searchProgramAuthority_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        spn_programAuthorityCnt.setValue(grd_programAuthority.getTotalRow());
    }
};
scwin.sbm_saveProgramAll_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        dlt_programAuthority.undoAll();
        scwin.btn_search_onclick();
    }
};
scwin.sbm_saveProgram_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        scwin.btn_search_onclick();
    }
};
scwin.sbm_saveProgramAuthority_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        dma_program.set('PROGRAM_CD', dlt_program.getCellData(grd_program.getFocusedRowIndex(), 'PROGRAM_CD'));
        com.sbm.execute($p, sbm_searchProgramAuthority);
    }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',style:'',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'900',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100.00px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'프로그램그룹',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'true',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'sbx_programGroup',ref:'data:dma_search.PROGRAM_GROUP_CD',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'','ev:onchange':'scwin.sbx_ProgramGroup_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'프로그램',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ibx_program',placeholder:'',style:'width:100%;',ref:'data:dma_search.PROGRAM'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td',id:''},E:[{T:1,N:'xf:select1',A:{appearance:'full',cols:'',disabled:'',id:'',ref:'data:dma_search.IS_USE',renderType:'radiogroup',rows:'1',selectedIndex:'0',style:'',userData3:'',itemTagname:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{label:'프로그램',style:'',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_programCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{type:'button',style:'',id:'btn_addProgram',class:'btn_cm row_add','ev:onclick':'scwin.btn_addProgram_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelProgram',style:'',type:'button','ev:onclick':'scwin.btn_cancelProgram_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelProgram',style:'',type:'button','ev:onclick':'scwin.btn_excelProgram_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_program',id:'grd_program',rowStatusWidth:'',scrollByColumnAdaptive:'false',style:'height:296px;',rowStatusVisible:'true',rowStatusHeaderValue:'상태',keepDefaultColumnWidth:'true',defaultCellHeight:'26',focusMode:'row',autoFitMinWidth:'1024',scrollByColumn:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',style:'',id:'chk',value:'',blockSelect:'false',displayMode:'label',checkboxLabel:'선택',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'',value:'프로그램그룹',width:'90',class:''}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'프로그램코드',width:'109',class:'req'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',style:'',id:'column51',value:'프로그램명',blockSelect:'false',displayMode:'label',class:'req'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'357',inputType:'text',style:'',id:'column49',value:'프로그램소스경로',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column15',inputType:'text',removeBorderStyle:'false',style:'',value:'사용여부',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'checkbox',style:'',id:'chk',value:'',blockSelect:'false',displayMode:'label',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PROGRAM_GROUP_CD',inputType:'select',removeBorderStyle:'false',style:'',value:'',width:'90',allOption:'',chooseOption:'',ref:'',textAlign:'left'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'PROGRAM_CD',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'109',class:'',calendarClass:'',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'200',inputType:'text',style:'',id:'PROGRAM_NM',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'357',inputType:'text',style:'',id:'SRC_PATH',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'IS_USE',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'70',checkboxLabel:'선택',falseValue:'N',valueType:'other',trueValue:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'프로그램별 접근 권한',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sum',id:'spn_programAuthorityCnt',label:'',style:''}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm row_add',id:'btn_addProgramAuthority',style:'',type:'button','ev:onclick':'scwin.btn_addProgramAuthority_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancelProgramAuthority',style:'',type:'button','ev:onclick':'scwin.btn_cancelProgramAuthority_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'btn_excelProgramAuthority',style:'',type:'button','ev:onclick':'scwin.btn_excelProgramAuthority_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀다운로드'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',autoFitMinWidth:'1024',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_programAuthority',defaultCellHeight:'26',id:'grd_programAuthority',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:150px;',keepDefaultColumnWidth:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',checkboxLabel:'선택',displayMode:'label',fixColumnWidth:'true',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'50'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'req',displayMode:'label',id:'column18',inputType:'text',removeBorderStyle:'false',style:'',value:'권한코드',width:'117'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'권한명',width:'185'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'조회권한여부',width:'95'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'95',inputType:'text',style:'',id:'column49',value:'저장권한여부',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column14',inputType:'text',removeBorderStyle:'false',style:'',value:'엑셀권한여부',width:'95'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'70',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'AUTHORITY_CD',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'117',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'AUTHORITY_NM',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'285',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'IS_AUTH_SELECT',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'95',checkboxLabel:'선택',valueType:'other',falseValue:'N',trueValue:'Y'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'95',inputType:'checkbox',style:'',id:'IS_AUTH_SAVE',value:'',blockSelect:'false',displayMode:'label',checkboxLabel:'선택',valueType:'other',falseValue:'N',trueValue:'Y'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'IS_AUTH_EXCEL',inputType:'checkbox',removeBorderStyle:'false',style:'',value:'',width:'95',checkboxLabel:'선택',valueType:'other',falseValue:'N',trueValue:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm  pt',id:'btn_saveProgram',style:'',type:'button','ev:onclick':'scwin.btn_saveProgram_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})