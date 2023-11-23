/*amd /ui/boardTech.xml 10865 eca9f383e5ccff6b1ad248ab6010b06f6a8db17a7e0d055c6fbe429d10ef94b9 */
define({E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_list',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_PIDX',name:'BOARD_PIDX'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_IDX',name:'BOARD_IDX'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_DELYN',name:'BOARD_DELYN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_TITLE',name:'BOARD_TITLE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'BOARD_WRITER',name:'BOARD_WRITER'}},{T:1,N:'w2:column',A:{id:'BOARD_DATE',name:'BOARD_DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'UPDATE_DATE',name:'UPDATE_DATE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARD_TYPE',name:'BOARD_TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CNT',name:'CNT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARD_REPLYCNT',name:'BOARD_REPLYCNT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'CHK',name:'CHK',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'BOARD_TYPE',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TABLE',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_WRITER',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'CORP_CD',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'PAGE_TYPE',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_CONT',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_RECEIPTIONER',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FROM',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TO',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_FILE_TABLE',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_boardList',ref:'data:json,dma_search',target:'data:json,dlt_list',action:'/selectBoardList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_boardList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    var currentDt = WebSquare.date.getCurrentServerDate();
    var bfweekDt = WebSquare.date.dateAdd(currentDt, -365);
    dma_search.set('FROM', bfweekDt);
    dma_search.set('TO', currentDt);
    $('.btn_fav').click(function () {
        $('.btn_fav').toggleClass('on');
    });
    scwin.btn_search_onclick();
};
scwin.btn_search_onclick = function (e) {
    dma_search.set('BOARD_TABLE', 'MT_BOARD_ERP');
    dma_search.set('BOARD_FILE_TABLE', 'MT_BOARDFILE_ERP');
    dma_search.set('BOARD_TYPE', 'TECH');
    com.sbm.execute($p, sbm_boardList);
};
scwin.grd1_oncelldblclick = function (row, col, colId) {
    var _param = {};
    _param.rowJson = dlt_list.getRowJSON(row);
    _param.mode = 'read';
    _param.boardCategory = 'ERP';
    var data = {
        data: _param,
        callbackFn: 'scwin.btn_detail_callback'
    };
    var options = {
        id: 'boardPopTech',
        popupName: '게시판상세',
        modal: true,
        width: 680,
        height: 545
    };
    com.win.openPopup($p, '/ui/boardPop.xml', options, data);
};
scwin.sbm_boardList_submitdone = function (e) {
    txt_cnt.setValue(dlt_list.getRowCount() + '건');
};
scwin.btn_write_onclick = function (e) {
    var _param = {};
    _param.rowJson = { 'BOARD_TYPE': 'TECH' };
    _param.mode = 'write';
    _param.boardCategory = 'ERP';
    var data = {
        data: _param,
        callbackFn: 'scwin.btn_detail_callback'
    };
    var options = {
        id: 'boardPopTech',
        popupName: '게시판등록',
        modal: true,
        width: 680,
        height: 545
    };
    com.win.openPopup($p, '/ui/boardPop.xml', options, data);
};
scwin.btn_detail_callback = function (e) {
    com.win.alert($p, e.message);
    scwin.btn_search_onclick();
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'기술데이터',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'',label:'3Depth Menu',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'schbox_inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:60px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'',renderDiv:'true',rightAlign:'false',style:'width: 100px;    text-align: left;    text-indent: 10px;',ref:'data:dma_search.FROM'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',focusOnDateSelect:'false',footerDiv:'true',id:'',renderDiv:'true',rightAlign:'false',style:'width: 100px;text-align: left;text-indent: 10px;',ref:'data:dma_search.TO'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'',style:'',ref:'data:dma_search.BOARD_WRITER'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내용',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{id:'',style:'',ref:'data:dma_search.BOARD_CONT'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_cnt',label:'0건',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm download',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'다운로드'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm row_del',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선택삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm row_del',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물리삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm blue',id:'btn_write',style:'',type:'button','ev:onclick':'scwin.btn_write_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'글쓰기'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:dlt_list',defaultCellHeight:'26',focusMode:'row',id:'grd1',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10','ev:oncelldblclick':'scwin.grd1_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'checkbox',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column9',value:'글번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column15',value:'제목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'20',inputType:'text',style:'',id:'H_CNT',value:'첨부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column16',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'작성일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column18',value:'수정일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'checkbox',style:'',id:'CHK',value:'',displayMode:'label',readOnly:'false',falseValue:'0',trueValue:'1',defaultValue:'0',valueType:'binary'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'BOARD_IDX',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'BOARD_TITLE',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'20',inputType:'text',style:'',id:'CNT',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'BOARD_WRITER',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'BOARD_DATE',displayMode:'label',readOnly:'true',dataType:'text',value:''}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'UPDATE_DATE',displayMode:'label',dataType:'date',readOnly:'true',value:''}}]}]}]}]}]}]}]}]})