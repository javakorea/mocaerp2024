/*amd /ui/boardPop.xml 8609 fcf09fe6b62973c553f1fcae83dc8b8d1a8ffa5f46c486fd67ca17fc0d2af231 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'BOARD_IDX',name:'게시물번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_DATE',name:'작성일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_WRITER',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TITLE',name:'제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TYPE',name:'BOARD_TYPE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_FILE_TABLE',name:'BOARD_FILE_TABLE',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_boardFile',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'BOARDFILE_IDX',name:'BOARDFILE_IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARD_IDX',name:'BOARD_IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_NAME',name:'BOARDFILE_NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_NAMESERVER',name:'BOARDFILE_NAMESERVER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_PATH',name:'BOARDFILE_PATH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_SIZE',name:'BOARDFILE_SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_ID',name:'BOARDFILE_ID',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_boardFileList',ref:'data:json,dma_search',target:'data:json,dlt_boardFile',action:'/selectBoardFileList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    scwin.param = com.data.getParameter($p);
    dma_search.setJSON(scwin.param.data.rowJson);
    dma_search.set('BOARD_FILE_TABLE', 'MT_BOARDFILE_ERP');
    scwin.fn_searchFile();
};
scwin.btn_search_onclick = function () {
};
scwin.fn_searchFile = function () {
    com.sbm.execute($p, sbm_boardFileList);
};
scwin.fn_bytesToLabel = function (_byte) {
    var byteSize = [
        'Byte',
        'KB',
        'MB',
        'GB'
    ];
    var _kb = _byte / 1024;
    var reValue;
    if (_kb < 1) {
        reValue = _kb.toFixed(1) + byteSize[0];
    } else if (1 < _kb && _kb < 1024) {
        reValue = _kb.toFixed(1) + byteSize[1];
    } else if (1024 < _kb && _kb < 1048576) {
        reValue = (_kb / 1024).toFixed(1) + byteSize[2];
    } else if (_kb >= 1048576) {
        reValue = (_kb / 1024 / 1024).toFixed(1) + byteSize[3];
    }
    return reValue;
};
scwin.btn_confirm_onclick = function (e) {
};
scwin.btn_cancel_onclick = function (e) {
    com.win.closePopup($p);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'서브타이틀',class:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm  row_add'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'답변작성'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm write'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm  row_del'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'',type:'button',class:'btn_cm row_del'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물리삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'게시물번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_program',placeholder:'',style:'width:100%;',ref:'data:dma_search.BOARD_IDX'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성일시',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'PROGRAM10',placeholder:'',ref:'data:dma_search.BOARD_DATE',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'PROGRAM',placeholder:'',ref:'data:dma_search.BOARD_WRITER',style:'width:100%;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제목',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'PROGRAM20',placeholder:'',ref:'data:dma_search.BOARD_TITLE',style:'width:100%;'}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:editor',A:{style:'height: 300px;',id:''}},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_boardFile',defaultCellHeight:'26',id:'grd_program',rowStatusHeaderValue:'상태',rowStatusVisible:'false',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height:43px;','ev:onrowindexchange':'scwin.grd_program_onrowindexchange','ev:oncelldblclick':'scwin.grd_program_oncelldblclick',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'IDX',width:'30'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'파일명',width:'150'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'169',inputType:'text',style:'',id:'column49',value:'ID',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column52',value:'파일크기',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'BOARD_IDX',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'30',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'BOARDFILE_NAME',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'169',inputType:'text',style:'',id:'BOARDFILE_NAMESERVER',value:'',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'BOARDFILE_SIZE',value:'',displayMode:'label',displayFormatter:'scwin.fn_bytesToLabel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button',nextTabID:'','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})