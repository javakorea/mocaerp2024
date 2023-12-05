/*amd /ui/schedule.xml 7182 a7a59dd03ff0691911d4a789d9d0a5cbc4bad59f7785209695ac58950c4517ca */
define({E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dlt_list',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'groupId',name:'groupId'}},{T:1,N:'w2:column',A:{dataType:'text',id:'SCH_CATEGORY',name:'SCH_CATEGORY'}},{T:1,N:'w2:column',A:{dataType:'text',id:'SCH_TITLE',name:'SCH_TITLE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'SCH_CONT',name:'SCH_CONT'}},{T:1,N:'w2:column',A:{dataType:'text',id:'SCH_WRITER',name:'SCH_WRITER'}},{T:1,N:'w2:column',A:{id:'SCH_CREATE_DTTM',name:'SCH_CREATE_DTTM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCH_CURRENTMONTH',name:'SCH_CURRENTMONTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCH_START',name:'SCH_START',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCH_END',name:'SCH_END',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCH_COLOR',name:'SCH_COLOR',dataType:'text',importFormatter:'scwin.fn_format'}},{T:1,N:'w2:column',A:{id:'SCH_DELYN',name:'SCH_DELYN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'SCH_SENDYN',name:'SCH_SENDYN',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'SCH_CURRENTMONTH',name:'SCH_CURRENTMONTH',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_schdList',ref:'data:json,dma_search',target:'data:json,dlt_list',action:'/selectScheduleList.do',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'조회중','ev:submit':'','ev:submitdone':'scwin.sbm_schdList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scvar = {};
scwin.onpageload = function () {
    $('.btn_fav').click(function () {
        $('.btn_fav').toggleClass('on');
    });
    scwin.fn_search();
};
scwin.fn_search = function () {
    let _yyyymm = sch_cal1.getView().title.replace(/년|월|\s/g, '');
    if (_yyyymm == '') {
        _yyyymm = WebSquare.date.getCurrentServerDate('YYYYMM');
    }
    dma_search.set('SCH_CURRENTMONTH', _yyyymm);
    com.sbm.execute($p, sbm_schdList);
    scwin.sbm_schdList_submitdone = function (e) {
    };
};
scwin.scheduleCalendar1_onheaderbtnclick = function (buttonType) {
    scwin.fn_search();
};
scwin.fn_format = function (rowJson, row, col) {
    let _valJson = { 'color': rowJson.SCH_COLOR };
    return _valJson;
};
scwin.sch_cal1_onclick = function (retObj, b) {
    let _param = {};
    let _popupName = '';
    let _height = '';
    retObj.start.setHours(retObj.start.getHours() - 9);
    retObj.end.setHours(retObj.end.getHours() - 9);
    retObj.end.setSeconds(retObj.end.getSeconds() - 1);
    _param.schInfo = {
        'START': scwin.dateToString(retObj.start).full,
        'END': scwin.dateToString(retObj.end).full
    };
    if (retObj.id) {
        _param.schInfo.SCH_IDX = retObj.id;
        _popupName = '일정상세';
        _height = 520;
        _param.mode = 'read';
    } else {
        _height = 428;
        _popupName = '일정등록';
        _param.mode = 'write';
        _param.writer = JSON.parse(sessionStorage.getItem('loginInfo')).name;
    }
    var data = {
        data: _param,
        callbackFn: 'scwin.schedulePop_callback'
    };
    var options = {
        id: 'schedulePop',
        popupName: _popupName,
        modal: true,
        frameModal: 'frame',
        width: 500,
        height: _height,
        className: 'h100'
    };
    com.win.openPopup($p, '/ui/schedulePop.xml', options, data);
};
scwin.schedulePop_callback = function (e) {
    com.win.alert($p, e.message);
    scwin.fn_search();
};
scwin.dateToString = function (date) {
    ['yyyyMMddhhmmss, 월:MM,일:dd 시분:hh:mm'];
    var year = date.getFullYear().toString();
    var month = date.getMonth() + 1;
    month = month < 10 ? '0' + month.toString() : month.toString();
    var day = date.getDate();
    day = day < 10 ? '0' + day.toString() : day.toString();
    var hour = date.getHours();
    hour = hour < 10 ? '0' + hour.toString() : hour.toString();
    var minites = date.getMinutes();
    minites = minites < 10 ? '0' + minites.toString() : minites.toString();
    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds.toString() : seconds.toString();
    var returnObj = {};
    returnObj['year'] = year;
    returnObj['month'] = month;
    returnObj['day'] = day;
    returnObj['hour'] = hour;
    returnObj['minites'] = minites;
    returnObj['seconds'] = seconds;
    returnObj['seconds'] = seconds;
    returnObj['full'] = year + month + day + hour + minites + seconds;
    returnObj['fullFormat'] = year + '-' + month + '-' + day + ' ' + hour + ':' + minites + ':' + seconds;
    returnObj['년'] = year;
    returnObj['월'] = month;
    returnObj['일'] = day;
    returnObj['시'] = hour;
    returnObj['분'] = minites;
    returnObj['초'] = seconds;
    returnObj['시:분'] = hour + ':' + minites;
    return returnObj;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents flex_gvw',id:'',style:'position:relative;'},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'pgt_tit',label:'스케줄러',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무관리'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'',label:'스케줄러',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'calendarbox flex',id:'',style:'height:100%;'},E:[{T:1,N:'w2:scheduleCalendar',A:{dataList:'data:dlt_list',defaultDate:'',editable:'true',endColumn:'SCH_END',eventLimit:'true',eventOrderColumn:'',headerLeftBtn:'true',headerRightBtn:'false',headerTitle:'true',id:'sch_cal1',idColumn:'groupId',includeScheduleEnd:'false',ioFormat:'yyyyMMdd',lang:'ko',locale:'ko',nextDayThreshold:'00:00:00',selectable:'false',startColumn:'SCH_START',style:'width: 100%;',timeFormat:'',titleColumn:'SCH_TITLE',tooltipDisplay:'',version:'3.6','ev:onheaderbtnclick':'scwin.scheduleCalendar1_onheaderbtnclick',themeColumn:'SCH_COLOR',class:'fullcalendar','ev:onclick':'scwin.sch_cal1_onclick'}}]}]}]}]}]})