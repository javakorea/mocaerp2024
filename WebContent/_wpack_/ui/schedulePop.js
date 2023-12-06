/*amd /ui/schedulePop.xml 9401 e4fb8b321296994dcf5060946085d050490698d41afbd03143756f5295348ecc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_schdInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'SCH_IDX',name:'SCH_IDX',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_TITLE',name:'SCH_TITLE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_CONT',name:'SCH_CONT',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_WRITER',name:'SCH_WRITER',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_CREATE_DTTM',name:'SCH_CREATE_DTTM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_CURRENTMONTH',name:'SCH_CURRENTMONTH',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_START',name:'SCH_CURRENTMONTH',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_END',name:'SCH_START',dataType:'text'}},{T:1,N:'w2:key',A:{id:'STATUS',name:'SCH_END',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_COLOR',name:'SCH_COLOR',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_DELYN',name:'SCH_DELYN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'SCH_SENDYN',name:'SCH_SENDYN',dataType:'text'}},{T:1,N:'w2:key',A:{id:'STATUS',name:'STATUS',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_schdInfo',ref:'data:json,dma_schdInfo',target:'data:json,dma_schdInfo',action:'/selectScheduleInfo.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_schdInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_insertSchedule',ref:'data:json,dma_schdInfo',target:'data:json,dma_schdInfo',action:'/insertSchedule.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_insertSchedule_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateSchedule',ref:'data:json,dma_schdInfo',target:'data:json,dma_schdInfo',action:'/updateSchedule.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updateSchedule_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    scwin.param = com.data.getParameter($p);
    dma_schdInfo.set('SCH_START', scwin.param.data.schInfo.START);
    dma_schdInfo.set('SCH_END', scwin.param.data.schInfo.END);
    if (scwin.param.data.mode == 'read') {
        dfbox.show('');
        btn_update.show('');
        btn_del.show('');
        btn_adminDel.show('');
        btn_confirm.hide();
        scwin.fn_searchScheduleInfo();
    } else {
        dma_schdInfo.set('SCH_WRITER', scwin.param.data.writer);
    }
};
scwin.fn_searchScheduleInfo = function () {
    dma_schdInfo.set('SCH_IDX', scwin.param.data.schInfo.SCH_IDX);
    com.sbm.execute($p, sbm_schdInfo);
    scwin.sbm_schdInfo_submitdone = function (e) {
        ipt_color.setValue(dma_schdInfo.get('SCH_COLOR'));
        edi_1.setHTML(dma_schdInfo.get('SCH_CONT'));
    };
};
scwin.btn_confirm_onclick = function (e) {
    com.win.confirm($p, '일정을 등록하시겠습니까?', function (e) {
        if (e.clickValue) {
            let _current = dma_schdInfo.getJSON().SCH_START.substr(0, 6);
            dma_schdInfo.set('SCH_CONT', edi_1.getHTML());
            dma_schdInfo.set('SCH_TITLE', dma_schdInfo.get('SCH_CONT'));
            dma_schdInfo.set('SCH_CURRENTMONTH', _current);
            dma_schdInfo.set('SCH_COLOR', ipt_color.getValue());
            com.sbm.execute($p, sbm_insertSchedule);
        }
    });
    scwin.sbm_insertSchedule_submitdone = function (e) {
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
            dma_schdInfo.set('STATUS', 'U');
            dma_schdInfo.set('SCH_DELYN', 'Y');
            com.sbm.execute($p, sbm_updateSchedule);
        }
    });
};
scwin.btn_adminDel_onclick = function (e) {
    com.win.confirm($p, '삭제하시면 데이터를 더이상 복구하실 수 없습니다.\n 해당 일정을 삭제하시겠습니까?', function (e) {
        if (e.clickValue) {
            dma_schdInfo.set('STATUS', 'D');
            com.sbm.execute($p, sbm_updateSchedule);
        }
    });
};
scwin.btn_update_onclick = function (e) {
    com.win.confirm($p, '해당 게시물을 수정하시겠습니까?', function (e) {
        if (e.clickValue) {
            dma_schdInfo.set('STATUS', 'U');
            dma_schdInfo.set('SCH_CONT', edi_1.getHTML());
            dma_schdInfo.set('SCH_COLOR', ipt_color.getValue());
            dma_schdInfo.set('SCH_TITLE', dma_schdInfo.get('SCH_CONT'));
            com.sbm.execute($p, sbm_updateSchedule);
        }
    });
};
scwin.sbm_updateSchedule_submitdone = function (e) {
    if (e.responseJSON.status == 'S') {
        if (dma_schdInfo.get('STATUS') == 'D' || dma_schdInfo.get('SCH_DELYN') == 'Y') {
            var param = { 'message': '삭제가 완료되었습니다.' };
            com.win.closePopup($p, param);
        } else {
            var param = { 'message': '수정이 완료되었습니다.' };
            com.win.closePopup($p, param);
        }
    }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents flex_gvw flex_m'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'dfbox',class:'dfbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'fr'},E:[{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_del',type:'button',class:'btn_cm','ev:onclick':'scwin.btn_del_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_adminDel',type:'button',class:'btn_cm red','ev:onclick':'scwin.btn_adminDel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'폐기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_confirm_onclick',id:'btn_confirm',nextTabID:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_update',nextTabID:'',style:'display:none;',type:'button','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_cancel_onclick',id:'btn_cancel',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'768',class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr',id:'tr_read'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',style:'padding: 4px; border:1px solid  #ced4da;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTimeSec',focusOnDateSelect:'false',footerDiv:'true',id:'',ref:'data:dma_schdInfo.SCH_START',renderDiv:'true',rightAlign:'false',style:'width:calc(50% - 5px);width:calc(50% - 2.5px);',class:'multi',mandatory:'true'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTimeSec',focusOnDateSelect:'false',footerDiv:'true',id:'',ref:'data:dma_schdInfo.SCH_END',renderDiv:'true',rightAlign:'false',style:'width:calc(50% - 2.5px);margin-right:0;',class:'multi',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'tr_createDt',style:'display:none;'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_schdDate',placeholder:'',readOnly:'true',ref:'data:dma_schdInfo.SCH_CREATE_DTTM',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display:none;',id:'tr_writer'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ibx_schdWriter',placeholder:'',readOnly:'true',ref:'data:dma_schdInfo.SCH_WRITER',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'display:none;',id:'tr_title'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'req',id:'ibx_boardTitle',placeholder:'',ref:'data:dma_schdInfo.SCH_TITLE',style:'width:100%;'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'edbox'},E:[{T:1,N:'w2:editor',A:{style:'height:200px;',id:'edi_1',menubar:'board'}},{T:1,N:'xf:input',A:{id:'ipt_color',style:'',type:'color',class:'ipt_color',initValue:'#3788d8'}}]}]}]}]}]})