/*amd /ui/boardMain.xml 15555 81ca5f7e12746405d0a52b8213a36fe2c436b172c05144c5a1ecb2c3f5ab5144 */
define({E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_list',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_PIDX',name:'BOARD_PIDX'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_IDX',name:'BOARD_IDX'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_DELYN',name:'BOARD_DELYN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_TITLE',name:'BOARD_TITLE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_WRITER',name:'BOARD_WRITER'}},{T:1,N:'w2:column',A:{id:'BOARD_DATE',name:'BOARD_DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATE_DATE',name:'UPDATE_DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARD_TYPE',name:'BOARD_TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CNT',name:'CNT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARD_REPLYCNT',name:'BOARD_REPLYCNT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CHK',name:'CHK',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'BOARD_TYPE',name:'BOARD_TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TABLE',name:'BOARD_TABLE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_WRITER',name:'BOARD_WRITER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CORP_CD',name:'CORP_CD',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PAGE_TYPE',name:'PAGE_TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_CONT',name:'BOARD_CONT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_RECEIPTIONER',name:'BOARD_RECEIPTIONER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FROM',name:'FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TO',name:'TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_FILE_TABLE',name:'BOARD_FILE_TABLE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_DELYN',name:'BOARD_DELYN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'START_IDX',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'END_IDX',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search_excel',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'BOARD_TYPE',name:'BOARD_TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TABLE',name:'BOARD_TABLE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_WRITER',name:'BOARD_WRITER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CORP_CD',name:'CORP_CD',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PAGE_TYPE',name:'PAGE_TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_CONT',name:'BOARD_CONT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_RECEIPTIONER',name:'BOARD_RECEIPTIONER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FROM',name:'FROM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TO',name:'TO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_FILE_TABLE',name:'BOARD_FILE_TABLE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_DELYN',name:'BOARD_DELYN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'START_IDX',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'END_IDX',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBoardList',ref:'data:json,dma_search',target:'data:json,dlt_list',action:'/selectBoardList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중','ev:submit':'','ev:submitdone':'scwin.sbm_searchBoardList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteBoardList',ref:'data:json,[{"action":"modified","id":"dlt_list"},"dma_search"]',target:'data:json,dma_boardInfo',action:'/updateBoardList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_deleteBoardList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    scwin.paramObj = $p.getAllParameter().paramData;
    if (WebSquare.util.isMobile()) {
        grd1.setColumnVisible(4, false);
        grd1.setColumnVisible(6, false);
        grd1._setColumnWidth(5, 75);
    }
    let menuInfo = scwin.paramObj.menuInfo;
    scwin.fn_setMenu(menuInfo);
    var currentDt = WebSquare.date.getCurrentServerDate();
    var bfweekDt = WebSquare.date.dateAdd(currentDt, -1095);
    com.win.setEnterKeyEvent($p, tbl_search, scwin.btn_search_onclick);
    dma_search.set('FROM', bfweekDt);
    dma_search.set('TO', currentDt);
    $('.btn_fav').click(function () {
        $('.btn_fav').toggleClass('on');
    });
    scwin.btn_search_onclick();
};
scwin.fn_setMenu = function (menuInfo) {
    pgt_tit.setValue(menuInfo.menuNm);
    txt_menu.setValue(menuInfo.menuNm);
    var _dlt_menu = $p.main().wfm_side.scope.dlt_menu;
    var _pMenuCd = _dlt_menu.getMatchedJSON('MENU_CD', menuInfo.menuCode)[0].PARENT_MENU_CD;
    var _pMenuNm = _dlt_menu.getMatchedJSON('MENU_CD', _pMenuCd)[0].MENU_NM;
    txt_pMenu.setValue(_pMenuNm);
};
scwin.btn_search_onclick = function (e) {
    if (scwin.paramObj.boardType) {
        dma_search.set('BOARD_TYPE', scwin.paramObj.boardType);
    }
    if (scwin.paramObj.erpYn == 'Y') {
        dma_search.set('BOARD_TABLE', 'MT_BOARD_ERP');
        dma_search.set('BOARD_FILE_TABLE', 'MT_BOARDFILE_ERP');
    } else {
        dma_search.set('BOARD_TABLE', 'MT_BOARD');
        dma_search.set('BOARD_FILE_TABLE', 'MT_BOARDFILE');
    }
    com.sbm.execute($p, sbm_searchBoardList);
};
scwin.sbm_searchBoardList_submitdone = function (e) {
    txt_cnt.setValue(dlt_list.getRowCount() + '건');
};
scwin.grd1_oncelldblclick = function (row, col, colId) {
    var _param = {};
    _param.rowJson = dlt_list.getRowJSON(row);
    _param.mode = 'read';
    _param.boardInfo = scwin.paramObj;
    var data = {
        data: _param,
        callbackFn: 'scwin.boardPop_callback'
    };
    var options = {
        id: 'boardPop',
        popupName: '게시판상세',
        className: 'h100',
        modal: true,
        useMaximize: true,
        width: 680,
        height: 513
    };
    com.win.openPopup($p, '/ui/boardPop.xml', options, data);
};
scwin.btn_write_onclick = function (e) {
    var _param = {};
    _param.mode = 'write';
    _param.boardInfo = scwin.paramObj;
    var data = {
        data: _param,
        callbackFn: 'scwin.boardPop_callback'
    };
    var options = {
        id: 'boardPop',
        popupName: '게시판등록',
        className: 'h100',
        modal: true,
        useMaximize: true,
        width: 680,
        height: 513
    };
    com.win.openPopup($p, '/ui/boardPop.xml', options, data);
};
scwin.boardPop_callback = function (e) {
    com.win.alert($p, e.message);
    scwin.btn_search_onclick();
};
scwin.btn_del_onclick = function (e) {
    let _chkIdxArr = dlt_list.getMatchedIndex('CHK', '1');
    if (_chkIdxArr.length < 1) {
        com.win.alert($p, '선택된 항목이 없습니다.');
        return;
    }
    com.win.confirm($p, `선택된 ${ _chkIdxArr.length }건의 게시물을 삭제하시겠습니까?`, function (e) {
        if (e.clickValue) {
            for (let i = 0; i < _chkIdxArr.length; i++) {
                dlt_list.setCellData(_chkIdxArr[i], 'BOARD_DELYN', 'Y');
            }
            com.sbm.execute($p, sbm_deleteBoardList);
        }
    });
};
scwin.btn_adminDel_onclick = function (e) {
    let _chkIdxArr = dlt_list.getMatchedIndex('CHK', '1');
    if (_chkIdxArr.length < 1) {
        com.win.alert($p, '선택된 항목이 없습니다.');
        return;
    }
    com.win.confirm($p, `삭제하시면 데이터를 더이상 복구하실 수 없습니다.\n 선택된 ${ _chkIdxArr.length }건의 게시물을 삭제하시겠습니까?`, function (e) {
        if (e.clickValue) {
            for (let i = 0; i < _chkIdxArr.length; i++) {
                dlt_list._setRowStatus(_chkIdxArr[i], 'D');
            }
            com.sbm.execute($p, sbm_deleteBoardList);
        }
    });
};
scwin.sbm_deleteBoardList_submitdone = function (e) {
    if (e.responseJSON.status == 'S') {
        com.win.alert($p, '삭제가 완료되었습니다.');
        scwin.btn_search_onclick();
    }
};
scwin.trigger1_onclick = function (e) {
    var options = {};
    options.type = '1';
    options.fileName = 'sample.xlsx';
    options.splitProvider = 'com.teammoca.moca3.SplitProvider';
    options.showProcess = 'true';
    options.showConfirm = 'true';
    grd1.advancedExcelDownload(options);
};
scwin.btn_excelSplitProvider_onclick = function () {
    option = {};
    var info = {};
    option.fileName = 'data.xlsx';
    option.useSplitProvider = 'true';
    option.showProcess = 'true';
    dma_search_excel.set('START_IDX', '1');
    dma_search.set('START_IDX', '1');
    option.providerRequestXml = scwin.setProviderData('Moca3Application', 'selectBoardList', dma_search);
    com.data.downloadGridViewExcel($p, grd1, option, info);
};
scwin.setProviderData = function (service, method, paramMap) {
    var serviceXml = '<service>' + service + '</service>';
    var methodXml = '<method>' + method + '</method>';
    var paramXml = '<param>' + JSON.stringify(paramMap.getJSON()) + '</param>';
    return '<data>' + serviceXml + methodXml + paramXml + '</data>';
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw flex_m',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'pgt_tit',label:'기술데이터',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'txt_pMenu',outerDiv:'false',style:''},E:[{T:1,N:'xf:label'}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'txt_menu',label:'',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:225px;;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:165px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td w100',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'',renderDiv:'true',rightAlign:'false',style:'width: 100px;',ref:'data:dma_search.FROM',class:'',mandatory:'true'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'',renderDiv:'true',rightAlign:'false',style:'width: 100px;',ref:'data:dma_search.TO',class:'mr0',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td w50',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',style:'',ref:'data:dma_search.BOARD_CONT',placeholder:'내용을 입력해주세요.'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td w50'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'',ref:'data:dma_search.BOARD_WRITER',style:'',placeholder:'작성자를 입력해주세요.'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_cnt',label:'0건',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_excelSplitProvider',style:'',type:'button','ev:onclick':'scwin.btn_excelSplitProvider_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_del',style:'',type:'button','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm red',id:'btn_adminDel',style:'',type:'button','ev:onclick':'scwin.btn_adminDel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'폐기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm blue',id:'btn_write',style:'',type:'button','ev:onclick':'scwin.btn_write_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:dlt_list',defaultCellHeight:'26',focusMode:'row',id:'grd1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'','ev:oncelldblclick':'scwin.grd1_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'checkbox',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column9',value:'글번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column15',value:'제목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',style:'',id:'H_CNT',value:'첨부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'H_boardWriter',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'작성일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'H_updateDt',value:'수정일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'checkbox',style:'',id:'CHK',value:'',displayMode:'label',readOnly:'false',falseValue:'0',trueValue:'1',defaultValue:'0',valueType:'binary'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'BOARD_IDX',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'BOARD_TITLE',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'40',inputType:'text',style:'',id:'CNT',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'BOARD_WRITER',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'BOARD_DATE',displayMode:'label',readOnly:'true',dataType:'text',value:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'UPDATE_DATE',displayMode:'label',dataType:'date',readOnly:'true',value:''}}]}]}]}]}]}]}]}]})