/*amd /cm/template/page/18_grid_tree_table/grid_tree_table.xml 15957 698671c996bae2cbd9efd1ee8c046fe1d523986e22e1b7197a8aa2237f4e3399 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/base.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/base.css" type="text/css"'},{T:7,N:'xml-stylesheet',instruction:'href="/cm/css/base.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    $('.btn_fav').click(function () {
        $('.btn_fav').toggleClass('on');
    });
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'화면타이틀',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'',label:'3Depth Menu',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox',style:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'ly_column col_7'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'서브타이틀',class:''}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',rowNumVisible:'true',rowStatusWidth:'50',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',scrollByColumn:'false',defaultCellHeight:'26',rowStatusHeaderValue:'상태',checkReadOnlyOnPasteEnable:'',focusMode:'row',rowStatusVisible:'true',rowNumWidth:'50',dataList:'data:dataList1',style:'height: 100px;',autoFit:'allColumn',id:'',visibleRowNum:'10',class:'gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column8',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column7',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column6',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column5',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column4',value:'타이틀',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col5',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col6',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col7',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col8',blockSelect:'false',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'ly_column col_3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'gvw',dataList:'data:dataList2',defaultCellHeight:'26',focusMode:'row',id:'',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 100px;',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column7',value:'타이틀',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col9',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'ly_column col_7'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'서브타이틀',class:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tvwbox '},E:[{T:1,N:'w2:treeview',A:{tooltipGroupClass:'false',dataType:'listed',style:'height:311px;',id:'',class:'tvw'},E:[{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'}]}]}]},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'}]}]}]},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'},{T:1,N:'w2:node',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'New'}]},{T:1,N:'w2:value'},{T:1,N:'w2:folder'},{T:1,N:'w2:checkbox'},{T:1,N:'w2:checkboxDisabled'},{T:1,N:'w2:image'},{T:1,N:'w2:iconImage'},{T:1,N:'w2:selectedImage'},{T:1,N:'w2:expandedImage'},{T:1,N:'w2:leafImage'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'ly_column col_3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'titbox'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'서브타이틀',class:''}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tblbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tbl'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'테이블헤더',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'테이블헤더',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'테이블헤더',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'테이블헤더',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'w2:textbox',A:{class:'bar_btndiv',id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]})