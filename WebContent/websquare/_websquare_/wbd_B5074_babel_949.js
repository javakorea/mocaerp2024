"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[949],{3949:function(t,e,i){i.r(e),i.d(e,{fwGaugeChart:function(){return p}});var a=i(5861),r=i(4687),o=i.n(r),s=i(9122),n=i(7827),l=i(1160),h=i(8754),c=i(6079),u=i(5316),p=function(t,e,i){u.s.call(this,t,e,i)};s.x.extend(p.prototype,u.s.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.fwGaugeChart",pluginName:"fwGaugeChart",useConfig:!0,chartType:"",realtime:!1,refreshInterval:0,dataStreamUrl:"",version:"3.7",accessibility:!1,displayData:!1,title:""},p.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.attributeObj=null,this.colorrange=null,this.dials=null,this.pointers=null,this.annotations=null,this.trendpoints=null,this.value=null,this.streamFlag=0,this.intervals=null,this.updateDataFunc=null,!t.getAttribute("version")&&n.v.getConfiguration("/WebSquare/fusionchart/version/@value")&&(this.options.version=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))},p.prototype.initAsync=(0,a.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"!=typeof FusionCharts){t.next=27;break}if("3.19"!==this.options.version&&(this.options.version||"3.19"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=7;break}return this.options.version="3.19",t.next=5,inquires("externalJS/FusionCharts3.19/FusionCharts_all.js");case 5:case 11:case 17:case 23:t.next=27;break;case 7:if("3.15"!==this.options.version&&(this.options.version||"3.15"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=13;break}return this.options.version="3.15",t.next=11,inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js");case 13:if("3.13"!==this.options.version&&(this.options.version||"3.13"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=19;break}return this.options.version="3.13",t.next=17,inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js");case 19:if("3.11"!=this.options.version&&(this.options.version||"3.11"!=n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))){t.next=25;break}return this.options.version="3.11",t.next=23,inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js");case 25:return t.next=27,inquires("externalJS/FusionCharts3.7/FusionCharts_all.js");case 27:case"end":return t.stop()}}),t,this)}))),p.prototype.toHTML=function(){var t=[],e=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+e+" class='w2fwGaugeChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},p.prototype.setAction=function(){try{"3.19"==this.options.version&&"function"==typeof FusionCharts.options._setActivate&&FusionCharts.options._setActivate(),this.setDefaultOption();var t=this;if(this.modelControl.isDataCollectionRefBinded)var e=this.modelControl.dataCollectionRefInfo.dataComp;if(this.options.realtime)e?(this.fcObj=new FusionCharts({id:"fw_gauge_"+t.id,type:t.options.chartType,renderAt:t.id,width:"100%",height:t.render.offsetHeight||"100%",events:{drawComplete:function(){t._feedData()}}}),this.draw()):(this.fcObj=new FusionCharts({id:"fw_gauge_"+t.id,type:t.options.chartType,renderAt:t.id,width:"100%",height:t.render.offsetHeight||"100%"}),this.options.dataStreamUrl&&this.options.refreshInterval&&(this.attributeObj.datastreamurl=this.options.dataStreamUrl,this.attributeObj.refreshInterval=this.options.refreshInterval),this.draw());else if(this.fcObj=new FusionCharts({id:"fw_gauge_"+t.id,type:t.options.chartType,renderAt:t.id,width:"100%",height:t.render.offsetHeight||"100%"}),this.modelControl.isDataCollectionRefBinded)if("dataMap"==e.initializeType){var i=e.get(this.options.valueNode);this.setValue(i)}else{var a=e.getRowPosition();a=a||0;var r=this.options.valueNode;this.setValue(e.getCellData(a,r))}else this.draw()}catch(t){l.w.printStackTrace(t)}},p.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded&&!this.options.realtime){
var t=this.modelControl.dataCollectionRefInfo.dataComp;if("dataMap"==t.initializeType){var e=t.get(this.options.valueNode);this.setValue(e)}else{var i=t.getRowPosition();i=i||0;var a=this.options.valueNode;this.setValue(t.getCellData(i,a))}}}catch(t){l.w.printStackTrace(t)}},p.prototype._feedData=function(){try{var t=this;h.D.setInterval((function(){var e=t.modelControl.dataCollectionRefInfo.dataComp.getAllData();if(t.streamFlag>=e.length){var i=WebSquare.ModelUtil.getSubmission(this.options.submissionId,null,{scope_id:this.scope_id});WebSquare.ModelUtil.executeSubmission(i),t.streamFlag=0}var a=FusionCharts("fw_gauge_"+t.id),r="value="+e[t.streamFlag];t.streamFlag++,a.feedData(r)}),{caller:this,delay:1e3*this.options.refreshInterval,key:this.id+"_interval"})}catch(t){l.w.printStackTrace(t)}},p.prototype.setJSONData=function(t){try{this.chartObj=t,this.draw()}catch(t){l.w.printStackTrace(t)}},p.prototype.getJSONData=function(){try{return this.fcObj.getJSONData()}catch(t){l.w.printStackTrace(t)}},p.prototype.fc=function(){try{return FusionCharts.items["fw_gauge_"+this.id]}catch(t){l.w.printStackTrace(t)}},p.prototype.draw=function(){try{null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),null!=this.colorrange&&(this.chartObj.colorrange=this.colorrange),null!=this.annotations&&(this.chartObj.annotations=this.annotations),null!=this.dials&&(this.chartObj.dials=this.dials),null!=this.value&&(this.chartObj.value=this.value);var t=this.fc();if(t.setJSONData(this.chartObj),t.isActive()||t.render(this.id),1==this.options.accessibility){var e=document.getElementById("fw_gauge_"+this.id);e&&e.setAttribute("aria-hidden",!0),this.setAccessibility(!0)}}catch(t){l.w.printStackTrace(t)}},p.prototype.setAccessibility=function(t){try{var e=document.getElementById("accessibility_"+this.id);if(0==t)return void(e&&e.remove());if(null==e){var i=document.createElement("table");i.id="accessibility_"+this.id,WebSquare.style.addClass(i,"w2fusionchart_accessibility"),1==this.options.displayData&&(WebSquare.style.removeClass(i,"w2fusionchart_accessibility"),WebSquare.style.addClass(i,"w2tb"),WebSquare.style.addClass(i,"w2fusionchart_accessibility_table")),this.render.appendChild(i,this.render.lastChild),e=document.getElementById("accessibility_"+this.id)}e.innerHTML="";var a="",r=(this.chartObj,this.attributeObj.caption);r&&(a="<caption>"+r+"</caption>"),a+="<thead><tr>",a+="<th scope='col' class='w2tb_th'>"+r+"</th>",a+="</tr></thead>",a+="<tbody>",a+="<tr>",a+="<td class='w2tb_td'>"+this.getValue()+"</td>",a+="</tr>",a+="</tbody>",e.innerHTML=a}catch(t){WebSquare.exception.printStackTrace(t)}},p.prototype.setDefaultOption=function(){try{switch(this._angulargauge=function(){this.attributeObj={manageresize:"1",origw:"350",origh:"200",bgalpha:"0",bgcolor:"FFFFFF",lowerlimit:"0",upperlimit:"100",showborder:"0",basefontcolor:"000000",tooltipbgcolor:"ffffff",pivotradius:"8",gaugeouterradius:"120",gaugeinnerradius:"70%",gaugeoriginx:"175",gaugeoriginy:"170",trendvaluedistance:"5",tickvaluedistance:"3",managevalueoverlapping:"1",autoaligntickvalues:"1",caption:this.options.title},this.colorrange={color:[{minvalue:"0",maxvalue:"45",code:"#fe5d55"},{minvalue:"45",maxvalue:"80",code:"#f4c74e"},{minvalue:"80",maxvalue:"100",code:"#00ba84"}]},null==this.dials&&(this.dials={dial:[{value:"0"}]})},this._bulb=function(){this.attributeObj={manageresize:"1",decimals:"0",placevaluesinside:"1",is3d:"0",bordercolor:"638400",bgcolor:"FFFFFF",usecolornameasvalue:"1",showborder:"0"},this.colorrange={color:[{minvalue:"0",maxvalue:"50",name:"Normal",code:"99CC00"},{minvalue:"50",maxvalue:"75",name:"Warning",code:"FFFF00"},{minvalue:"75",maxvalue:"100",name:"Danger",code:"FF0000"}]},null==this.value&&(this.value=0)},this._cylinder=function(){this.attributeObj={manageresize:"1",bgcolor:"FFFFFF",bgalpha:"0",showborder:"0",lowerlimit:"0",upperlimit:"100",showtickmarks:"0",showtickvalues:"0",showlimits:"0",numbersuffix:"%",decmials:"0",cylfillcolor:"CC0000",
basefontcolor:"CC0000",chartleftmargin:"15",chartrightmargin:"15",charttopmargin:"15"},this.annotations={groups:[{showbelow:"1",items:[{type:"rectangle",x:"$chartStartX+1",y:"$chartStartY+1",tox:"$chartEndX-1",toy:"$chartEndY-1",color:"FFFFFF",alpha:"100",showborder:"0",bordercolor:"CC0000",borderthickness:"2",radius:"10"}]}]},null==this.value&&(this.value=0)},this._hled=function(){this.attributeObj={manageresize:"1",chartbottommargin:"5",lowerlimit:"0",upperlimit:"100",lowerlimitdisplay:"Low",upperlimitdisplay:"High",numbersuffix:"%",showtickmarks:"1",tickvaluedistance:"0",majortmnumber:"5",majortmheight:"4",minortmnumber:"0",showtickvalues:"1",decimals:"0",ledgap:"1",ledsize:"1",ledboxbgcolor:"333333",ledbordercolor:"666666",borderthickness:"2",chartrightmargin:"20",showborder:"0"},this.colorrange={color:[{minvalue:"0",maxvalue:"30",code:"FF0000"},{minvalue:"30",maxvalue:"50",code:"FFFF00"},{minvalue:"50",maxvalue:"100",code:"00FF00"}]},null==this.value&&(this.value=0)},this._hlineargauge=function(){this.attributeObj={bgColor:"#ffffff",showBorder:"0",lowerLimit:"0",upperLimit:"100",valueAbovePointer:"0",showShadow:"0",gaugeFillMix:"{light}",valueBgColor:"#ffffff",valueBgAlpha:"60",valueFontColor:"#000000",pointerBgColor:"#ffffff",pointerBgAlpha:"50",baseFontColor:"#ffffff"},this.colorrange={color:[{minValue:"0",maxValue:"35",label:"Low",code:"#1aaf5d"},{minValue:"35",maxValue:"70",label:"Moderate",code:"#f2c500"},{minValue:"70",maxValue:"100",label:"High",code:"#c02d00"}]},null==this.pointers&&(this.pointers={pointer:[{value:"0"}]}),null==this.value&&(this.value=0)},this._thermometer=function(){this.attributeObj={manageresize:"1",palette:"3",bgcolor:"FFFFFF",bgalpha:"0",showborder:"0",lowerlimit:"0",upperlimit:"100",lowerlimitdisplay:"Low",upperlimitdisplay:"High",numbersuffix:"%",majortmheight:"4",minortmnumber:"5",usesamefillcolor:"0",showtickvalues:"1",decmials:"0",charttopmargin:"25",chartleftmargin:"20",chartbottommargin:"20",thmbulbradius:"20",datastreamurl:"",refreshinterval:"4",gaugeoriginx:"40"},this.annotations={groups:[{id:"Grp1",showbelow:"1",items:[{type:"rectangle",x:"$chartStartX+8",y:"$chartStartY",tox:"$chartEndX",toy:"$chartEndY",radius:"10",fillcolor:"AEC0CA, 333333, AEC0CA",fillangle:"90"},{type:"rectangle",x:"$chartStartX+13",y:"$chartStartY+5",tox:"$chartEndX-5",toy:"$chartEndY-5",radius:"10",fillcolor:"333333, C3D0D8, 333333",fillangle:"90"},{type:"rectangle",x:"$chartStartX+18",y:"$chartStartY+10",tox:"$chartEndX-10",toy:"$chartEndY-10",radius:"10",fillcolor:"C4D5DC, A3A5A4",fillangle:"180"}]}]},null==this.value&&(this.value=0)},this._vled=function(){this.attributeObj={lowerLimit:"0",upperLimit:"100",showValue:"0",showBorder:"0",showShadow:"0",tickMarkDistance:"5",alignCaptionWithCanvas:"1",captionAlignment:"center",bgcolor:"#ffffff"},this.colorrange={color:[{minValue:"0",maxValue:"45",code:"#8e0000"},{minValue:"45",maxValue:"75",code:"#f2c500"},{minValue:"75",maxValue:"100",code:"#1aaf5d"}]},null==this.value&&(this.value=0)},this.options.chartType.toLowerCase()){case"angulargauge":default:this._angulargauge();break;case"bulb":this._bulb();break;case"cylinder":this._cylinder();break;case"hled":this._hled();break;case"hlineargauge":this._hlineargauge();break;case"thermometer":this._thermometer();break;case"vled":this._vled()}}catch(t){l.w.printStackTrace(t)}},p.prototype.setChartAttribute=function(t){try{for(var e in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(e)&&(this.attributeObj[e.toLowerCase()]=t[e])}catch(t){l.w.printStackTrace(t)}},p.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){l.w.printStackTrace(t)}},p.prototype.getChartAttribute=function(t){try{return FusionCharts.items["fw_gauge_"+this.id].getChartAttribute(t)}catch(t){l.w.printStackTrace(t)}},p.prototype.changeType=function(t){try{this.fcObj.chartType(t),this.options.chartType=t,this.options.realtime&&(this.streamFlag=0),"angulargauge"==t?this.chartObj.value&&(this.dials={dial:[{
value:this.chartObj.value}]}):this.chartObj.dials.dial[0].value&&(this.value=this.chartObj.dials.dial[0].value),this.draw()}catch(t){l.w.printStackTrace(t)}},p.prototype.exportJSChart=function(t){try{t||(t="jpg");var e=this.options.id||"fusionChart",i=this.getSVGString();if(i){var a=encodeURI(i+"ExportType="+t+"ExportFileName="+e),r=s.x._resourceURI+"engine/servlet/exportFusionChart.jsp";n.v.download(r,a,"post")}}catch(t){l.w.printStackTrace(t)}},p.prototype.getSVGString=function(){try{var t=this.fc().getSVGString();if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');c.k.printLog("not found svg object")}catch(t){l.w.printStackTrace(t)}},p.prototype.getValue=function(){try{return this.options.realtime?this.fcObj.getData():"angulargauge"==this.options.chartType?this.chartObj.dials.dial[0].value||this.value:this.chartObj.value||this.value}catch(t){l.w.printStackTrace(t)}},p.prototype.setValue=function(t){null!=t&&""!=t||(t=0),"angulargauge"==this.options.chartType.toLowerCase()?this.dials.dial.length>0&&(this.dials.dial[0].value=t):this.value=t,this.draw()},p.prototype.setRef=function(t,e){try{this.modelControl.isBinded()||(this.modelControl.useRef=!0),this.options.ref=t,this.options.valueNode=e,this.modelControl.setRef(t),this.refresh()}catch(t){l.w.printStackTrace(t)}},p.prototype.unbindRef=function(){try{this.modelControl.isBinded()&&(this.options.ref="",this.modelControl.unbindRef(),this.refresh())}catch(t){l.w.printStackTrace(t)}},p.prototype.setDataStreamInfo=function(t){try{if(!t&&!t.dataStreamURL)return;this.attributeObj.dataStreamURL=t.dataStreamURL,this.attributeObj.refreshInterval=t.refreshInterval,this.attributeObj.dataStamp=t.dataStamp||"",this.attributeObj.showRTMenuItem=t.showRTMenuItem||0,this.draw()}catch(t){l.w.printStackTrace(t)}},p.prototype.stopUpdate=function(){try{this.modelControl.dataCollectionRefInfo.dataComp?h.D.clearInterval(this.id+"_interval"):this.fcObj.stopUpdate()}catch(t){l.w.printStackTrace(t)}},p.prototype.restartUpdate=function(){try{if(this.modelControl.dataCollectionRefInfo.dataComp){var t=this;this.intervals=setInterval((function(){t.updateDataFunc()}),1e3*this.options.refreshInterval)}else this.fcObj.restartUpdate()}catch(t){l.w.printStackTrace(t)}},p.prototype.clearChart=function(){try{this.fcObj.clearChart()}catch(t){l.w.printStackTrace(t)}},p.prototype.isUpdateActive=function(){try{var t,e=this.modelControl.dataCollectionRefInfo.dataComp;if(e&&this.options.realtime){var i=e.getAllData();t=!(this.streamFlag>=i.length)}else t=this.fcObj.isUpdateActive();return t}catch(t){l.w.printStackTrace(t)}},p.prototype.getDataListInfo=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t={};return t.ref=this.options.ref,t.id=t.ref.wq_replaceAll("data:",""),t.valueNode=this.options.valueNode,t}return null}catch(t){l.w.printStackTrace(t)}},p.prototype.finalize=function(){try{h.D.clearInterval(this.id+"_interval"),clearInterval(this.intervals),this.fcObj.dispose()}catch(t){l.w.printStackTrace(t)}}}}]);