/*amd /ui/boardPop.xml 14071 4f17ed0275acccba253e74ac1f4a8a021da2f7b92364dd1a31b3624201750cf1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'BOARD_IDX',name:'게시물번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_PIDX',name:'게시물부모번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_DATE',name:'작성일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_WRITER',name:'작성자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TITLE',name:'제목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TYPE',name:'게시판유형',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_FILE_TABLE',name:'게시판첨부파일테이블',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TABLE',name:'게시판테이블',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_CONT',name:'게시물컨텐츠',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_DELYN',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'STATUS',name:'상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_boardFile',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'BOARDFILE_IDX',name:'BOARDFILE_IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARD_IDX',name:'BOARD_IDX',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_NAME',name:'BOARDFILE_NAME',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_NAMESERVER',name:'BOARDFILE_NAMESERVER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_PATH',name:'BOARDFILE_PATH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_SIZE',name:'BOARDFILE_SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'BOARDFILE_ID',name:'BOARDFILE_ID',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_boardInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'BOARD_IDX',name:'BOARD_IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_TITLE',name:'BOARD_TITLE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_CONT',name:'BOARD_CONT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_WRITER',name:'BOARD_WRITER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'BOARD_DATE',name:'BOARD_DATE',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_boardFileList',ref:'data:json,dma_search',target:'data:json,dlt_boardFile',action:'/selectBoardFileList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_boardFileList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_boardInfo',ref:'data:json,dma_search',target:'data:json,dma_boardInfo',action:'/selectBoardInfo.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_searchBoardInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_insertBoardInfo',ref:'data:json,dma_search',target:'data:json,dma_boardInfo',action:'/insertBoardInfo.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_insertBoardInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateBoardInfo',ref:'data:json,dma_search',target:'data:json,dma_boardInfo',action:'/updateBoardInfo.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updateBoardInfo_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    scwin.param = com.data.getParameter($p);
    dma_search.setJSON(scwin.param.data.rowJson);
    if (scwin.param.data.boardCategory == 'ERP') {
        dma_search.set('BOARD_TABLE', 'MT_BOARD_ERP');
        dma_search.set('BOARD_FILE_TABLE', 'MT_BOARDFILE_ERP');
    } else {
        dma_search.set('BOARD_TABLE', 'MT_BOARD');
        dma_search.set('BOARD_FILE_TABLE', 'MT_BOARDFILE');
    }
    if (scwin.param.data.mode == 'read') {
        btn_update.show('');
        btn_confirm.hide();
        scwin.fn_searchBoardInfo();
    } else {
        tr_read.hide();
        ibx_boardWriter.setValue('superadmin');
    }
};
var aaa = function (e) {
    if ($(e).prev().prop('tagName') == 'IMG') {
        $(e).prev().remove();
    }
    $(e).removeClass('hide');
};
scwin.fn_searchBoardInfo = function () {
    com.sbm.execute($p, sbm_boardInfo);
    scwin.sbm_searchBoardInfo_submitdone = function (e) {
        edi_1.setHTML(dma_boardInfo.get('BOARD_CONT'));
        scwin.fn_searchFile();
    };
};
scwin.fn_searchFile = function () {
    com.sbm.execute($p, sbm_boardFileList);
    scwin.sbm_boardFileList_submitdone = function (e) {
        txt_cnt.setValue(dlt_boardFile.getRowCount() + '건');
    };
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
    com.win.confirm($p, '해당 게시물을 등록하시겠습니까?', function (e) {
        if (e.clickValue) {
            dma_search.set('BOARD_CONT', edi_1.getHTML());
            com.sbm.execute($p, sbm_insertBoardInfo);
        }
    });
    scwin.sbm_insertBoardInfo_submitdone = function (e) {
        if (e.responseJSON.status == 'S') {
            var param = { 'message': '등록이 완료되었습니다.' };
            com.win.closePopup($p, param);
        }
    };
};
scwin.btn_cancel_onclick = function (e) {
    com.win.closePopup($p);
};
scwin.btn_del_onclick = function (e) {
    com.win.confirm($p, '해당 게시물을 삭제하시겠습니까?', function (e) {
        if (e.clickValue) {
            dma_search.set('STATUS', 'U');
            dma_search.set('BOARD_DELYN', 'Y');
            com.sbm.execute($p, sbm_updateBoardInfo);
        }
    });
};
scwin.btn_update_onclick = function (e) {
    com.win.confirm($p, '해당 게시물을 수정하시겠습니까?', function (e) {
        if (e.clickValue) {
            dma_search.set('STATUS', 'U');
            dma_search.set('BOARD_CONT', edi_1.getHTML());
            com.sbm.execute($p, sbm_updateBoardInfo);
        }
    });
};
scwin.sbm_updateBoardInfo_submitdone = function (e) {
    if (e.responseJSON.status == 'S') {
        debugger;
        if (dma_search.get('STATUS') == 'D' || dma_search.get('BOARD_DELYN') == 'Y') {
            var param = { 'message': '삭제가 완료되었습니다.' };
            com.win.closePopup($p, param);
        } else {
            var param = { 'message': '수정이 완료되었습니다.' };
            com.win.closePopup($p, param);
        }
    }
};
scwin.btn_adminDel_onclick = function (e) {
    com.win.confirm($p, '삭제하시면 데이터를 더이상 복구하실 수 없습니다.\n 해당 게시물을 삭제하시겠습니까?', function (e) {
        if (e.clickValue) {
            dma_search.set('STATUS', 'D');
            com.sbm.execute($p, sbm_updateBoardInfo);
        }
    });
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_del',type:'button',class:'btn_cm  row_del','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_adminDel',type:'button',class:'btn_cm row_del','ev:onclick':'scwin.btn_adminDel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물리삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr',id:'tr_read'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'게시물번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_boardIdx',placeholder:'',style:'width:100%;',ref:'data:dma_search.BOARD_IDX',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성일시',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_boardDate',placeholder:'',ref:'data:dma_search.BOARD_DATE',style:'width:100%;',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'제목',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'req',id:'ibx_boardTitle',placeholder:'',ref:'data:dma_search.BOARD_TITLE',style:'width:100%;'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_boardWriter',placeholder:'',ref:'data:dma_search.BOARD_WRITER',style:'width:100%;',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'edbox'},E:[{T:1,N:'w2:editor',A:{style:'height:150px;',id:'edi_1'}}]},{T:1,N:'xf:group',A:{class:'dfbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'첨부파일',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'fr',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'txt_cnt',label:'0건',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm upload',id:'btn_fileUpload',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'파일찾기'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox wq_flx',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',captionTitle:'',checkReadOnlyOnCut:'',class:'wq_gvw',dataList:'data:dlt_boardFile',defaultCellHeight:'26',id:'grd_program',rowStatusHeaderValue:'상태',rowStatusVisible:'false',rowStatusWidth:'',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'min-height:80px','ev:onrowindexchange':'scwin.grd_program_onrowindexchange','ev:oncelldblclick':'scwin.grd_program_oncelldblclick',focusMode:'row',visibleRowNum:'2'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',class:'',displayMode:'label',id:'column17',inputType:'text',removeBorderStyle:'false',style:'',value:'IDX',width:'30'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column16',inputType:'text',removeBorderStyle:'false',style:'',value:'파일명',width:'150'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'169',inputType:'text',style:'',id:'column49',value:'ID',blockSelect:'false',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column52',value:'파일크기',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'BOARD_IDX',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'30',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'BOARDFILE_NAME',inputType:'text',removeBorderStyle:'false',style:'',value:'',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'169',inputType:'text',style:'',id:'BOARDFILE_NAMESERVER',value:'',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'BOARDFILE_SIZE',value:'',displayMode:'label',displayFormatter:'scwin.fn_bytesToLabel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_update',nextTabID:'',style:'display:none;',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button',nextTabID:'','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]}]})