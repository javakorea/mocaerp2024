"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[49],{7049:(e,t,n)=>{n.r(t),n.d(t,{wUnit:()=>l});var r=n(2981),i=n(2085),a=n(1656),c=n(7275),o=n(3082),l={commandList:[],testFrame:null,currentTestCount:-1,totalTestCount:-1,lock:!1,options:{interval:0,showSuccess:!0,showLog:!1},start:function(){try{this.testFrame=parent.document.getElementById("testFrame"),this.testSuiteFrame=parent.document.getElementById("testSuiteFrame"),this.selenium_myiframe=parent.document.getElementById("selenium_myiframe"),this.commandList=[],this.currentTestCount=-1,this.totalTestCount=-1,this.totalTestCount=-1,this.lock=!1}catch(e){i.w.printStackTrace(e)}},stop:function(){},log:function(){try{for(var e=!0,t=[],n=0;n<this.commandList.length;n++)0==this.commandList[n].success&&(t.push(n),c.k.printLog("--fail.."+n),e=!1);""!=c.k.getErrorLog()&&(e=!1);var r=c.k.getObjectStr(0,this.commandList,{log:!0,includeFunction:!1,maxDepth:2,include:null,exclude:"event parentComponent defaultOptions"});r="\n\n--------------object log----------------\n\n"+r,c.k.printLog(r),c.k.printLog("  wUnit TEST : "+e),1==this.options.showSuccess&&(e?alert("wUnit Test SUCCESS"):alert("wUnit Test FAIL "+t.length+"\n see : "+t));var o=a.v.getConfiguration("/WebSquare/wUnit/showLogPopup/@value");o="string"!=typeof o||"false"!=o.toLowerCase(),0!=e&&1!=this.options.showLog||!o||c.k.showLog()}catch(e){i.w.printStackTrace(e)}},runTimeout:function(){try{var e=this,t=e.options.interval;this.currentTestCount<this.commandList.length&&"pause"==this.commandList[this.currentTestCount].command&&(t+=parseInt(this.commandList[this.currentTestCount].target)),setTimeout((function(){e.executeCommand(e.currentTestCount)?(e.currentTestCount++,e.runTimeout()):e.log()}),t)}catch(e){i.w.printStackTrace(e)}},run:function(){try{1==o.D.getBoolean(WebSquare.net.getParameter("bySelenium"))?this.options.showSuccess=!1:(this.currentTestCount=0,this.totalTestCount=this.commandList.length,this.runTimeout())}catch(e){i.w.printStackTrace(e)}},executeCommand:function(e){try{if(e>this.commandList.length||!this.commandList[e])return!1;var t=this.commandList[e].command,n="";switch(null!=r.x.strictModeFrame&&(n=r.x.strictModeFrame.id),t){case"set":new Function(o.D.scopingFuncBody(this.commandList[e].target,n))(),this.commandList[e].success="pass";break;case"assert":void 0!==(a=new Function(o.D.scopingFuncBody(this.commandList[e].target,n))())&&null!=a&&(a=a.toString()),a==this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is different from the actual value '"+a+"'");break;case"assertNot":void 0!==(a=new Function(o.D.scopingFuncBody(this.commandList[e].target,n))())&&null!=a&&(a=a.toString()),a!=this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is same with the actual value '"+a+"'");break;case"object":break;case"exec":var a=new Function(o.D.scopingFuncBody("WebSquare.wUnit."+this.commandList[e].target,n))();this.commandList[e].success="pass";break;case"assertExec":void 0!==(a=new Function(o.D.scopingFuncBody("WebSquare.wUnit."+this.commandList[e].target,n))())&&null!=a&&(a=a.toString()),a==this.commandList[e].value?(this.commandList[e].success=!0,this.commandList[e].message=""):(this.commandList[e].success=!1,this.commandList[e].message="value '"+this.commandList[e].value+"' is different from the actual value '"+a+"'");break;case"robot":this.commandList[e].success=!0}}catch(t){return c.k.printLog("[wUnit] error to execute command.  idx:"+e),this.commandList[e].success=!1,this.commandList[e].message=t.toString(),i.w.printStackTrace(t),!1}return!0},setOptions:function(e){r.x.extend(this.options,e)},addCommand:function(e,t,n){try{e=e||"",t=t||"",n=n||"",this.commandList.push({command:e,target:t,value:n,success:null,
message:""})}catch(e){i.w.printStackTrace(e)}},click:function(e){try{var t=document.getElementById(e);t&&t.click()}catch(e){i.w.printStackTrace(e,null,this)}},editGridCell:function(e,t,n){try{var r=document.getElementById(e+"_cell_"+t+"_"+n);r&&r.click()}catch(e){i.w.printStackTrace(e,null,this)}},getGridScrollX:function(e){try{var t=document.getElementById(e+"_scrollX_right");return t?t.scrollLeft:null}catch(e){i.w.printStackTrace(e,null,this)}},getGridScrollXRange:function(e,t,n){try{var r=document.getElementById(e+"_scrollX_right");return r?t<=r.scrollLeft&&r.scrollLeft<=n:null}catch(e){i.w.printStackTrace(e,null,this)}},checkCell:function(e){try{var t=this.getEditCellDom(e),n=WebSquare.text.getSelection(t);return n.start!=n.end}catch(e){i.w.printStackTrace(e,null,this)}},getEditCellInfo:function(e){try{var t=o.D.getComponentById(e);if(t){var n=t.getFocusedColumnIndex(),r=t.getFocusedRowIndex(),a=document.getElementById(e+"_cell_"+r+"_"+n);if(a)return t.getCellInfo(a)}return null}catch(e){i.w.printStackTrace(e,null,this)}},getEditCellDom:function(e){try{var t=this.getEditCellInfo(e);return document.getElementById(t.mainGridId+t.id)}catch(e){i.w.printStackTrace(e,null,this)}},openGridCalendar:function(e){try{var t=this.getEditCellDom(e);t&&this.openCalendar(t.id)}catch(e){i.w.printStackTrace(e,null,this)}},openCalendar:function(e){try{var t=document.getElementById(e+"_img");t&&t.click()}catch(e){i.w.printStackTrace(e,null,this)}},openSelectbox:function(e){try{var t=document.getElementById(e+"_button");t&&t.click()}catch(e){i.w.printStackTrace(e,null,this)}},checkInputCalendarPos:function(e){try{return!0}catch(e){i.w.printStackTrace(e,null,this)}},checkGridSelectboxPos:function(e){try{var t=this.getEditCellDom(e);return t?this.checkSelectboxPos(t.id):null}catch(e){i.w.printStackTrace(e,null,this)}},checkSelectboxPos:function(e){try{var t=document.getElementById(e),n=WebSquare.style.getAbsoluteLeft(t),r=WebSquare.style.getAbsoluteTop(t),a=(r=WebSquare.style.getAbsoluteTop(t),t.offsetHeight),c=document.getElementById(e+"_itemTable"),o=WebSquare.style.getAbsoluteLeft(c),l=WebSquare.style.getAbsoluteTop(c),s=c.offsetHeight;return Math.abs(n-o)<3&&(Math.abs(r+a-l)<3||Math.abs(l+s-r)<3)}catch(e){i.w.printStackTrace(e,null,this)}},keyinInput:function(e,t,n){try{var r=a.v.getComponentById(n)||o.D.getComponentById(e),c=document.getElementById(e);if(r&&c){r.focus&&r.focus();for(var l=0;l<t.length;l++){var s=t.charCodeAt(l),u={charCode:s,keyCode:s,target:c};r.handleKeydownEvent&&(r.handleKeydownEvent(u),WebSquare.event.fireEvent(r,"onkeydown","")),r.handleKeypressEvent&&(r.validator.validateKeyPress(r.render,r.getValue(),u)&&(c.value=c.value+String.fromCharCode(s)),WebSquare.event.fireEvent(r,"onkeypress","")),r.handleKeyupEvent&&(r.handleKeyupEvent(u),WebSquare.event.fireEvent(r,"onkeyup",""))}r.blur&&r.blur()}}catch(e){i.w.printStackTrace(e,null,this)}},keyinInputCalendar:function(e,t){try{var n=o.D.getComponentById(e),r=document.getElementById(e+"_input");if(n&&r){n.focus&&n.focus();for(var a=0;a<t.length;a++){var c=t.charCodeAt(a),l={charCode:c,keyCode:c};n.handleKeydownEvent&&n.handleKeydownEvent(l),n.handleKeypressEvent&&n.validator.validateKeyPress(n.render,n.getValue(),l)&&(r.value=r.value+String.fromCharCode(c)),n.handleKeyupEvent&&n.handleKeyupEvent(l)}n.blur&&n.blur()}}catch(e){i.w.printStackTrace(e,null,this)}},keyinGridCell:function(e,t,n){try{var r=o.D.getComponentById(n||"grid1"),a=document.getElementById(e),c=r.getCellInfo(a),l=r.dom[c.mainGridId+c.id],s=document.getElementById(l.id);if(l&&s){l.focus&&l.focus();for(var u=0;u<t.length;u++){var d=t.charCodeAt(u),m={charCode:d,keyCode:d,target:s};l.handleKeydownEvent&&l.handleKeydownEvent(m),l.handleKeypressEvent&&l.validator.validateKeyPress(l.render,l.getValue(),m)&&(s.value=s.value+String.fromCharCode(d)),l.handleKeyupEvent&&l.handleKeyupEvent(m)}l.blur&&l.blur()}}catch(e){i.w.printStackTrace(e,null,this)}},getGridCellDisplayData:function(e,t){try{
var n=document.getElementById(e),r=n?n.innerHTML:"";return r=r.replace(/<[^<|>]*>/g,"")}catch(e){i.w.printStackTrace(e,null,this)}},getInnerHTML:function(e,t){try{var n=document.getElementById(e);return n?n.innerHTML:null}catch(e){i.w.printStackTrace(e,null,this)}},getProperty:function(e,t){try{var n=document.getElementById(e);return n?n[t]:null}catch(e){i.w.printStackTrace(e,null,this)}},getStyle:function(e,t){try{var n=document.getElementById(e);return n?o.D.getStyleProperty(n,t):null}catch(e){i.w.printStackTrace(e,null,this)}},doesExist:function(e){try{return!!document.getElementById(e)}catch(e){i.w.printStackTrace(e,null,this)}},isVisible:function(e){try{var t=document.getElementById(e);return t?"none"!=o.D.getStyleProperty(t,"display")&&("hidden"!=o.D.getStyleProperty(t,"visibility")&&(0!=t.offsetWidth&&0!=t.offsetHeight)):null}catch(e){i.w.printStackTrace(e,null,this)}},clickSelectboxIndex:function(e,t){var n=o.D.getComponentById(e);if("native"==n.options.renderType)n.setSelectedIndex(t);else{l.click(e+"_button");var r=document.getElementById(e+"_itemTable").firstChild.firstChild.childNodes;setTimeout((function(){r[t].firstChild.click()}),20)}},getTextNode:function(e){return document.getElementById(e).firstChild.data},compareXML:function(e,t,n,r){var i=e.documentElement,a=t.documentElement,o=l.compareNode(i,a,n,r);return o||(c.k.printLog("원본 XML "+WebSquare.xml.indent(e)),c.k.printLog("비교대상 XML "+WebSquare.xml.indent(t))),o},compareNode:function(e,t,n,r){if(null==e)return c.k.printLog("src node is null"),!1;if(null==t)return c.k.printLog("dest node is null"),!1;if(e.nodeName!=t.nodeName)return c.k.printLog("노드의 이름이 다릅니다. 원본["+e.nodeName+"] 비교대상["+t.nodeName+"]"),!1;if(void 0!==r)for(var i=0;i<r.length;i++)e.removeAttribute(r[i]),t.removeAttribute(r[i]);if(n){var a=e.attributes;for(i=0;null!=a&&i<a.length;i++){var o=a[i];if(WebSquare.nodeValueDeprecated){if(t.getAttribute(o.name)!=o.value)return c.k.printLog("속성 ["+o.name+"] 이전값["+o.value+"] 변경된값["+t.getAttribute(o.name)+"]"),!1}else if(t.getAttribute(o.nodeName)!=o.nodeValue)return c.k.printLog("속성 ["+o.nodeName+"] 이전값["+o.nodeValue+"] 변경된값["+t.getAttribute(o.nodeName)+"]"),!1}}for(var s=e.firstChild,u=t.firstChild;null!=s;){if(null==u)return c.k.printLog(e.nodeName+" 하위노드의 개수가 다릅니다. 원본노드수["+e.childNodes.length+"] 비교대상노드수["+t.childNodes.length+"]"),!1;for(;null!=s&&(3==s.nodeType||4==s.nodeType||8==s.nodeType);)s=s.nextSibling;for(;null!=u&&(3==u.nodeType||4==u.nodeType||8==u.nodeType);)u=u.nextSibling;if(null==s||null==u)break;if(s.nodeType!=u.nodeType)return c.k.printLog(e.nodeName+" 하위노드의 종류가 다릅니다. 원본["+s.nodeType+"] 비교대상["+u.nodeType+"]"),!1;if(1==s.nodeType){if(!l.compareNode(s,u,n,r))return!1}else if(3==s.nodeType){if(s.nodeValue!=u.nodeValue)return c.k.printLog(e.nodeName+" 하위노드의 TextNode 값이 다릅니다. 원본["+s.nodeType+"] 비교대상["+u.nodeType+"]"),!1}else if(4==s.nodeType&&s.nodeValue!=u.nodeValue)return c.k.printLog(e.nodeName+" 하위노드의 CData 값이 다릅니다. 원본["+s.nodeType+"] 비교대상["+u.nodeType+"]"),!1;s=s.nextSibling,u=u.nextSibling}if(null!=s){for(;null!=s&&(8==s.nodeType||3==s.nodeType||4==s.nodeType);)s=s.nextSibling;if(null!=s)return c.k.printLog(e.nodeName+" 하위노드의 개수가 다릅니다. 원본노드수["+e.childNodes.length+"] 비교대상노드수["+t.childNodes.length+"]"),!1}if(null!=u){for(;null!=u&&(8==u.nodeType||3==u.nodeType||4==u.nodeType);)u=u.nextSibling;if(null!=u)return c.k.printLog(e.nodeName+" 하위노드의 개수가 다릅니다. 원본노드수["+e.childNodes.length+"] 비교대상노드수["+t.childNodes.length+"]"),!1}return!0},getObjById:function(e){try{if("string"!=typeof e){var t=e;try{t=new Function("param","return param")(e)}catch(n){t=e}return t}if(WebSquare.idCache[WebSquare.idToUUID[e]])return WebSquare.idCache[WebSquare.idToUUID[e]];try{t=new Function("return "+e)()}catch(e){i.w.printStackTrace(e)}if(null==t&&WebSquare.strictMode){var n=e,r=WebSquare.strictModeFrame.id+"_";"G_"===e.slice(0,2)?n="G_"+r+e.slice(2):e.slice(0,r.length)!==r&&(n=r+e),n=n.replace(new RegExp("("+WebSquare.strictModeFrame.id+"\\_){2,}","g"),r)
;var a=WebSquare.idCache[WebSquare.idToUUID[n]];if(a)t=a;else try{t=new Function("return "+n)()}catch(n){t=e}}return null==t&&(t=e),t}catch(t){return e}},getDomById:function(e){try{if("string"!=typeof e){var t=e;try{t=new Function("param","return param")(e)}catch(n){t=e}return t}if(null==(t=document.getElementById(e))&&WebSquare.strictMode){var n=WebSquare.strictModeFrame.id+"_",r=new RegExp("("+WebSquare.strictModeFrame.id+"\\_){2,}","g"),i=(n+e).replace(r,n);if(null==(t=document.getElementById(i))){var a=i.indexOf("G_");a>=0&&(i=(i=i.slice(0,a+2)+n+i.slice(a+2)).replace(r,n),null==(t=document.getElementById(i))&&(i=(n+i).replace(r,n),t=document.getElementById(i))),null==t&&(t=document.getElementById(i.replace(n,"")))}}return t}catch(e){return null}},getJq:function(e){try{var t=$(e);if(0===t.length){var n=e.wq_trim(),r=n.slice(1),a=WebSquare.strictModeFrame.id+"_";"G_"===r.slice(0,2)?r="G_"+a+r.slice(2):r.slice(0,a.length)!==a&&(r=a+r),t=$(n.slice(0,1)+r)}return t}catch(e){i.w.printStackTrace(e,null,this)}}}}}]);