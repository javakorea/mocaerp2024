/*amd /ui/BM006M01.xml 16057 1426d34fa8793f09b0ecf60ad84fb3a76f053885bdb7aefe619c8ad9f2e9d26d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_fileGroup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ_PARENT',name:'파일그룹부모순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_NM',name:'파일그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'MENU_DEPTH',name:'메뉴레벨',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_file',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'FILE_SEQ',name:'파일순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'DATA_SEQ',name:'데이터순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_SIZE',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FILE_UPLOAD_DATE',name:'파일업로드일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'IS_DELETE',name:'삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'ORIGIN_FILE_NM',name:'원본파일명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'IS_DELETE',name:'삭제여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'START_NUM',name:'시작번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'END_NUM',name:'마지막번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'TOTAL_YN',name:'총건수 조회여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileGrp'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ',name:'파일그룹순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_GRP_SEQ_PARENT',name:'파일그룹부모순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'FILE_GRP_NM',name:'파일그룹명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mapStatus',name:'상태',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_selectFileGrp',ref:'data:json,dma_search',target:'data:json,dlt_fileGroup',action:'/file/selectFileGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectFileGrp_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_selectFile',ref:'data:json,dma_search',target:'data:json,dlt_file',action:'/file/selectFileByFileGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_selectFile_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveFileGrp',ref:'data:json,dma_fileGrp',target:'',action:'/file/saveFileGrp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveFileGrp_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.pageItemCnt = 18;
scwin.onpageload = function () {
    com.win.setEnterKeyEvent($p, tbl_search, scwin.btn_search_onclick);
    com.data.setChangeCheckedDc($p, [
        dlt_file,
        dlt_fileGroup
    ]);
    dma_search.set('IS_DELETE', 'N');
};
scwin.ondataload = function () {
    scwin.btn_search_onclick();
};
scwin.btn_search_onclick = function () {
    com.sbm.execute($p, sbm_selectFileGrp);
};
scwin.sbm_selectFileGrp_submitdone = function (e) {
    if (dlt_fileGroup.getRowCount() > 0) {
        trv_fileGroup.findNodeByIndex(1, true);
        scwin.searchFile(1, 'Y');
    }
};
scwin.searchFile = function (idx, totalYn) {
    dma_search.set('TOTAL_YN', totalYn);
    dma_search.set('START_NUM', (com.num.parseInt($p, idx) - 1) * scwin.pageItemCnt);
    dma_search.set('END_NUM', scwin.pageItemCnt);
    dma_search.set('FILE_GRP_SEQ', trv_fileGroup.getSelectedValue());
    com.sbm.execute($p, sbm_selectFile);
};
scwin.btn_add_onclick = function () {
    var fileGrpSeq = 0;
    var fileGrpSeqParent = 0;
    if (dlt_fileGroup.getRowCount() > 0) {
        var selectRowIdx = dlt_fileGroup.getRowPosition();
        if (selectRowIdx === null) {
            com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00033'));
        } else {
            var fileGrpSeq = dlt_fileGroup.getCellData(selectRowIdx, 'FILE_GRP_SEQ');
            var fileGrpSeqParent = dlt_fileGroup.getCellData(selectRowIdx, 'FILE_GRP_SEQ_PARENT');
        }
    }
    var data = {
        fileGrpSeq: fileGrpSeq,
        fileGrpSeqParent: fileGrpSeqParent,
        mode: 'create',
        callbackFn: 'scwin.addCallback'
    };
    var options = {
        id: 'FilegroupPop',
        popupName: '파일 그룹 생성',
        modal: true,
        width: 600,
        height: 224
    };
    com.win.openPopup($p, '/ui/BM/BM006P01.xml', options, data);
};
scwin.addCallback = function () {
    scwin.btn_search_onclick();
};
scwin.btn_modify_onclick = function () {
    var selectedData = dlt_fileGroup.getRowJSON(dlt_fileGroup.getRowPosition());
    var data = {
        data: selectedData,
        mode: 'update',
        callbackFn: 'scwin.modCallback'
    };
    var options = {
        id: 'FilegroupPop',
        popupName: '파일 그룹 설정',
        modal: true,
        width: 600,
        height: 224
    };
    com.win.openPopup($p, '/ui/BM/BM006P01.xml', options, data);
};
scwin.modCallback = function (data) {
    trv_fileGroup.setLabelByValue(data.FILE_GRP_SEQ, data.FILE_GRP_NM);
    scwin.searchFile(1, 'Y');
};
scwin.btn_delete_onclick = function () {
    if (trv_fileGroup.isLeaf() == false) {
        com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00034'));
    } else if (dlt_file.getRowCount() > 0) {
        com.win.alert($p, com.data.getMessage($p, 'MSG_CM_00035'));
    } else {
        com.win.confirm($p, com.data.getMessage($p, 'MSG_CM_00036'), function (res) {
            if (res.clickValue === true) {
                dma_fileGrp.setJSON(dlt_fileGroup.getRowJSON(dlt_fileGroup.getRowPosition()));
                dma_fileGrp.set('mapStatus', 'D');
                com.sbm.execute($p, sbm_saveFileGrp);
            }
            ;
        });
    }
};
scwin.trv_fileGroup_onlabelclick = function (value, nodeElement, index) {
    scwin.searchFile(1, 'Y');
};
scwin.sbm_selectFile_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        var firstYn = dma_search.get('TOTAL_YN');
        if (firstYn == 'Y') {
            var fileTotalCnt = e.responseJSON.TOTAL_CNT.CNT;
            var totalCnt = com.num.ceil($p, fileTotalCnt / scwin.pageItemCnt);
            tbx_fileCount.setValue(fileTotalCnt);
            pgl_file.setCount(totalCnt);
        }
    }
};
scwin.pgl_file_onclick = function (idx) {
    scwin.searchFile(idx, 'N');
};
scwin.sbm_saveFileGrp_submitdone = function (e) {
    if (com.sbm.getResultCode($p, e) == gcm.MESSAGE_CODE.STATUS_SUCCESS) {
        scwin.btn_search_onclick();
    }
};
scwin.displayFileSize = function (value) {
    return com.num.formatByte($p, value);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_header',style:'',src:'../../cm/xml/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox_inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'파일명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'width:100%;',ref:'data:dma_search.ORIGIN_FILE_NM'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th ',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'삭제여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'',selectedIndex:'1',appearance:'full',style:'',cols:'',rows:'',ref:'data:dma_search.IS_DELETE',renderType:'radiogroup'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm sch',disabled:'',id:'btn_search',style:'',type:'button',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',adaptive:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'ly_column col_3'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'dfbox'},E:[{T:1,N:'w2:textbox',A:{style:'',label:'파일그룹',id:'',class:'',tagname:'h3'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_add',type:'button','ev:onclick':'scwin.btn_add_onclick',class:'btn_cm '},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_modify',type:'button','ev:onclick':'scwin.btn_modify_onclick',class:'btn_cm'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_delete',style:'','ev:onclick':'scwin.btn_delete_onclick',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'tvwbox scrollbar',style:'height: 313px;'},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'',id:'trv_fileGroup',class:'wq_tvw','ev:onlabelclick':'scwin.trv_fileGroup_onlabelclick'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_fileGroup'},E:[{T:1,N:'w2:label',A:{ref:'FILE_GRP_NM'}},{T:1,N:'w2:value',A:{ref:'FILE_GRP_SEQ'}},{T:1,N:'w2:depth',A:{ref:'MENU_DEPTH'}},{T:1,N:'w2:folder',A:{ref:''}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'ly_column col_7'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'',class:'w2tb tb',adaptive:'layout',adaptiveThreshold:'1024px',text:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:110px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:90px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{class:'title',id:'',label:'파일 그룹 순번 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{class:'txt',id:'',label:'',style:'',ref:'data:dlt_fileGroup.FILE_GRP_SEQ'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{class:'title',id:'',label:'파일 그룹명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{class:'txt',id:'',label:'',style:'',ref:'data:dlt_fileGroup.FILE_GRP_NM'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:span',A:{class:'title',id:'',label:'파일 수 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:span',A:{class:'txt',id:'tbx_fileCount',label:'01',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{'ev:ontextimageclick':'scwin.grd_menu_ontextimageclick',rowStatusWidth:'',adaptive:'',focusMode:'row',id:'grd_menu',class:'wq_gvw','ev:onrowindexchange':'',useShiftKey:'true','ev:oneditkeyup':'scwin.grd_menu_oneditkeyup',fixedColumnWithHidden:'true',dataList:'data:dlt_file',ignoreCellClick:'false',style:'height:296px;',readOnly:'true',defaultCellHeight:'26',autoFit:'allColumn',scrollByColumn:'true',autoFitMinWidth:'900'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'column5',value:'파일순번',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'column4',value:'데이터순번',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column3',value:'원본파일명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'column2',value:'파일크기',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'column1',value:'파일업로드일시',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'FILE_SEQ',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'DATA_SEQ',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'ORIGIN_FILE_NM',value:'',blockSelect:'false',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',style:'',id:'FILE_SIZE',value:'',blockSelect:'false',displayMode:'label',textAlign:'right',displayFormatter:'scwin.displayFileSize'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',style:'',id:'FILE_UPLOAD_DATE',value:'',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'w2:pageList',A:{class:'wq_pglist',displayButtonType:'display',displayFormat:'#','ev:onclick':'scwin.pgl_file_onclick',id:'pgl_file',pageSize:'5',pagingType:'0',style:'',delimiter:''}}]}]}]}]}]}]}]})