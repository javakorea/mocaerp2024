"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[2252],{2252:function(t,e,i){i.r(e),i.d(e,{group:function(){return p}});var o=i(9122),r=i(7827),a=i(1160),n=i(5841),s=i(8754),l=i(6079),d=i(5316),h=i(9296),p=function(t,e,i){d.s.call(this,t,e,i)};o.x.extend(p.prototype,d.s.prototype),o.x.extend(p.prototype,h.g.prototype),p.prototype.defaultOptions={pluginType:"uiplugin.group",pluginName:"group",userEvents:["ondragstart","ondrag","ondragend","ondragenter","ondragover","ondragleave","ondrop","ontooltipshow","ontooltiphide"],systemEvents:["onblur","onclick","ondblclick","onfocus","onmousedown","onmouseout","onmouseover","onmouseup","onmousemove","onmouseleave","onmouseenter"],parseChild:!0,parseAttributes:!0,tagname:"div",text:"",lazyDraw:!1,role:"",initStyle:!1,keepDisabled:!1,tooltipDisplay:!1,tooltipClass:"",tooltipTime:1,tooltipPositionX:"",tooltipPositionY:"",ignoreDisabled:!1},p.prototype.initialize=function(t){this.bindDrag=!1,this.bindDrop=!1,this.tooltipPositionParse=!1,this.isTableLayout=!1},p.html5={article:"div",aside:"div",bdi:"div",details:"div",dialog:"div",figcaption:"div",figure:"div",footer:"div",header:"div",main:"div",mark:"div",menuitem:"div",meter:"div",nav:"div",progress:"div",rp:"div",rt:"div",ruby:"div",section:"div",summary:"div",time:"div",wbr:"div"},p.prototype.toHTML=function(){try{var t=[],e=""!=this.options.role?"role='"+this.options.role+"'":"",i=""==this.options.style?"":"style='"+this.options.style+"'",o=""==this.options.tabIndex?"":" tabIndex='"+this.options.tabIndex+"'",n=this.options.tagname,l=this.options.headers?" headers='"+this.options.headers+"'":"";if(r.v.browserCheck.ie){var d=r.v.browserVersion();"6"!=d&&"7"!=d&&"8"!=d||WebSquare.uiplugin.group.html5[n]&&(n=WebSquare.uiplugin.group.html5[n])}if(l&&s.D.getBoolean(r.v.getConfiguration("/WebSquare/group/applyScopeHeaders/@value")))l=" headers='"+(this.scope_id?this.scope_id+"_":"")+this.options.headers+"'";if(t.push("<"+n+" id='"+this.id+"' "+i+" class='w2group "+this.options.className+"' "+e+" "+l+" "+this.getAttributesString()+o+">"),!this.options.lazyDraw){var h=!1,p=this.getChildren();if(p.length<=1)("th"===n||"td"===n)&&this.options.useLocale&&this.options.localeRef?(t.push(this.getLocaleValue(this.options.localeRef)),h=!0):1===p.length&&(t.push(p[0].toHTML()),p[0].element&&3==p[0].element.nodeType&&(h=!0));else for(var u=0;u<p.length;u++)t.push(p[u].toHTML()),p[u].element&&3==p[u].element.nodeType&&(h=!0);h||t.push(this.options.text)}return t.push("</"+n+">"),t.join("")}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setAction=function(){if(this.setDragDrop(),this.options.initStyle){var t=document.getElementById(this.id).style.cssText,e=document.getElementById(this.id).getAttribute("class");WebSquare.initStyle[this.id]={style:t,className:e}}var i,o=WebSquare.BootLoader.fullViewed||!1,l=s.D.fullViewed||!1;if(this.isTableLayout=!("table"!=this.options.tagname||!this.hasClass("w2tb")),this.element&&!this.element.getAttribute("adaptive")&&this.isTableLayout&&r.v.getConfiguration("/WebSquare/tableLayout/adaptive/@value")&&(i=r.v.getConfiguration("/WebSquare/tableLayout/adaptive/@value")),!(o||l||"table"!=this.options.tagname||"crosstab"!=this.options.adaptive&&"layout"!=this.options.adaptive&&"crosstab"!=i&&"layout"!=i)){for(var d=this.getElementById(this.id).getElementsByTagName("tr"),h=0;h<d.length;h++){var p=d[h].className;p.indexOf("w2group")>-1&&-1==p.indexOf("w2tb_tr")&&(d[h].className=p+" w2tb_tr")}this.setAdaptive(),this.event.addListener(window,"onresize",this.event.bindAsEventListener(this,this.setAdaptive)),this.invoke("setSetting","")}if("td"==this.options.tagname&&!(s.D.isIE()&&parseInt(r.v.browserVersion(),10)<10)){var u,g=this.element&&null!=this.element.previousElementSibling&&"w2:attributes"!=this.element.previousElementSibling.tagName,c=null!=this.render.previousSibling
;if(g&&"TH"===this.render.previousElementSibling.tagName||c&&"TH"===this.render.previousSibling.tagName)u=g?null!=this.render.previousElementSibling.textContent?this.render.previousElementSibling.textContent:this.render.previousElementSibling.innerText||"":null!=this.render.previousSibling.textContent?this.render.previousSibling.textContent:this.render.previousSibling.innerText||"",s.D.getBoolean(r.v.getConfiguration("/WebSquare/group/adaptive/trimText/@value"))?this.render.setAttribute("data-title",u.wq_trim()):this.render.setAttribute("data-title",u);else this.addClass("w2tb_noTH")}if("a"==this.options.tagname){var v=this.uuid;if(!s.D.isIEAllVersion()){var b=this.getAttributeNode("disabled");"true"!==b&&"disabled"!==b||this.addClass(this.render,"w2anchor_disabled")}s.D.isIE()&&s.D.browserVersion()<10&&this.event.addListener(this.render,"onclick",this.event.bindAsEventListener(this,(function(t){var e=WebSquare.idCache[v];e.getDisabled()&&n.B.preventDefault(t);try{e.render&&null!=e.render.getAttribute("href").toString().toLowerCase().match(/javascript[\s]*:[\s]*void/)&&n.B.preventDefault(t)}catch(t){a.w.printStackTrace(t,null,this)}})))}this.options.tooltipDisplay&&!this.options.tooltipFormatter&&(this.event.addListener(this.render,"onmouseover",this.event.bindAsEventListener(this,this.handleMouseoverEvent)),this.event.addListener(this.render,"onmouseout",this.event.bindAsEventListener(this,this.handleMouseoutEvent)));var y=s.D.getBoolean(r.v.getConfiguration("/WebSquare/group/captionAuto/@value"))||"table"==this.options.tagname&&this.hasClass("w2tb")&&s.D.getBoolean(r.v.getConfiguration("/WebSquare/tableLayout/captionAuto/@value")),m=s.D.getBoolean(this.options.captionAuto),f=s.D.getBoolean(r.v.getConfiguration("/WebSquare/group/summaryOnlyAuto/@value"))||"table"==this.options.tagname&&this.hasClass("w2tb")&&s.D.getBoolean(r.v.getConfiguration("/WebSquare/tableLayout/summaryOnlyAuto/@value")),S=s.D.getBoolean(this.options.summaryOnlyAuto),T="table"==this.options.tagname&&(y&&m||y&&null==this.options.captionAuto||1==m),w="table"==this.options.tagname&&(f&&S||f&&null==this.options.summaryOnlyAuto||1==S);if(T){var C=this._getHeaderTitleList(this.render);this.options.captionTitle?this._setCaption(this.render,this.options.captionTitle+WebSquare.language.getMessage("Grid_caption2")+C+WebSquare.language.getMessage("Grid_caption"),this.options.captionTitle):this._setCaption(this.render,C+WebSquare.language.getMessage("Grid_caption"),this.options.captionTitle)}if(w){C=this._getHeaderTitleList(this.render);this._setSummary(this.render,C)}"table"!=this.options.tagname||this.render.getAttribute("summary")||this.render.removeAttribute("summary")},p.prototype.draw=function(){try{var t=[],e=this.getChildren();if(e.length>0&&e[0].render)return;for(var i=0;i<e.length;i++)t.push(e[i].toHTML());this.render.innerHTML=t.join("");for(i=0;i<e.length;i++)e[i].activate(),e[i].onComplete()}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setInitValue=function(t){try{this.init(t)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.init=function(t){try{t=o.x.extend({excludePlugin:"",excludeId:"",fireEvent:!1,recursive:!1},t||{});for(var e=this.getChildren().slice(0).reverse();e.length>0;){var i=e.pop();if(i.setInitValue&&-1==(" "+t.excludePlugin+" ").indexOf(" "+i.options.pluginName+" ")&&-1==(" "+t.excludeId+" ").indexOf(" "+i.id+" ")&&i.setInitValue(t),t.recursive)for(var r=0;r<i.childControlList.length;r++)e.push(i.childControlList[r])}}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.invoke=function(t,e,i,o){try{return d.s.prototype.invoke.call(this,t,e,i,o)}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setDisabled=function(t,e){try{if(t=s.D.getBoolean(t),!0!==this.options.ignoreDisabled&&!0!==s.D.getBoolean(r.v.getConfiguration("/WebSquare/group/ignoreDisabled/@value"))&&(d.s.prototype.setDisabled.call(this,t),
"a"==this.options.tagname&&(t?this.addClass(this.render,"w2anchor_disabled"):this.removeClass(this.render,"w2anchor_disabled"))),this.options.keepDisabled){if(t){this.disabledComps=[];l=0;for(var i=this.childControlList.length;l<i;l++){(h=this.childControlList[l]).getDisabled&&!0===h.getDisabled()&&this.disabledComps.push(h)}}for(l=0;l<this.childControlList.length;l++){h=this.childControlList[l];for(var o=!1,n=0;n<this.disabledComps.length;n++)if(h===this.disabledComps[n]){o=!0;break}o||h.setDisabled(t,e)}}else for(var l=0;l<this.childControlList.length;l++){var h;(h=this.childControlList[l]).setDisabled&&"stop"!=h.activeStatus&&h.setDisabled(t,e)}}catch(t){a.w.printStackTrace(t)}return t},p.prototype.getDisabled=function(){try{return this.options&&this.options.disabled}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.getAttributeNode=function(t){try{return d.s.attributes.getAttributeNode.call(this,t)}catch(t){a.w.printStackTrace(t)}},p.prototype.setAttributeNode=function(t,e){try{d.s.attributes.setAttributeNode.call(this,t,e)}catch(t){a.w.printStackTrace(t)}},p.prototype.removeAttributeNode=function(t){try{d.s.attributes.removeAttributeNode.call(this,t)}catch(t){a.w.printStackTrace(t)}},p.prototype.setAdaptive=function(){try{var t=parseInt(this.options.adaptiveThreshold)||480;this.element&&!this.element.getAttribute("adaptiveThreshold")&&this.isTableLayout&&r.v.getConfiguration("/WebSquare/tableLayout/adaptiveThreshold/@value")&&(t=r.v.getConfiguration("/WebSquare/tableLayout/adaptiveThreshold/@value"),t=parseInt(t)||480),s.D.isIE()&&parseInt(r.v.browserVersion(),10)<10||(parseInt(top.document.documentElement.clientWidth||top.document.body.clientWidth)<=t?this.addAdaptive():this.removeAdaptive())}catch(t){a.w.printStackTrace(t)}},p.prototype.addAdaptive=function(){try{if(!(s.D.isIE()&&parseInt(r.v.browserVersion(),10)<10)){var t,e=this.options.adaptive;if(this.element&&!this.element.getAttribute("adaptive")&&this.isTableLayout&&r.v.getConfiguration("/WebSquare/tableLayout/adaptive/@value")&&(e=r.v.getConfiguration("/WebSquare/tableLayout/adaptive/@value")),"layout"==e?t="w2tb_adaptive_layout":"crosstab"==e&&(t="w2tb_adaptive_crosstab"),!this.checkAdaptiveValid(e))return;this.setAdaptiveText(),this.hasClass(t)||this.addClass(t),this.removeAdaptiveHeight(e),this.setAdaptiveHeight(e)}}catch(t){a.w.printStackTrace(t)}},p.prototype.removeAdaptive=function(){try{if(!(s.D.isIE()&&parseInt(r.v.browserVersion(),10)<10)){var t,e=this.options.adaptive;this.element&&!this.element.getAttribute("adaptive")&&this.isTableLayout&&r.v.getConfiguration("/WebSquare/tableLayout/adaptive/@value")&&(e=r.v.getConfiguration("/WebSquare/tableLayout/adaptive/@value")),"layout"==e?t="w2tb_adaptive_layout":"crosstab"==e&&(t="w2tb_adaptive_crosstab"),this.hasClass(t)&&this.removeClass(t),this.removeAdaptiveHeight(e)}}catch(t){a.w.printStackTrace(t)}},p.prototype.setAdaptiveHeight=function(t){try{if("crosstab"==t){var e,i=document.getElementById(this.id).getElementsByTagName("tbody")[0].getElementsByClassName("w2tb_tr");document.getElementById(this.id).getElementsByTagName("thead")[0]&&(e=document.getElementById(this.id).getElementsByTagName("thead")[0].getElementsByClassName("w2tb_tr"));for(var o=0,r=0;r<i.length;r++)for(var n=i[r].getElementsByClassName("w2tb_td"),l=0;l<n.length;l++){var d=n[l].offsetHeight;o=o>=d?o:d}for(r=0;r<i.length;r++){var h;n=i[r].getElementsByClassName("w2tb_td");h=e?e.length<=r?e[e.length-1].getElementsByClassName("w2tb_th"):e[r].getElementsByClassName("w2tb_th"):i[r].getElementsByClassName("w2tb_th");var p=parseInt(s.D.getComponentById(h[0].id).getStyle("padding-top")),u=parseInt(s.D.getComponentById(h[0].id).getStyle("padding-bottom"));for(l=0;l<h.length;l++){var g=n[l],c=h[l],v=c.offsetHeight,b=parseInt(s.D.getComponentById(g.id).getStyle("padding-top")),y=parseInt(s.D.getComponentById(g.id).getStyle("padding-bottom"))
;v>o?s.D.getComponentById(g.id).setSize("height",v-(b+y+1)):v<o&&(s.D.getComponentById(c.id).setSize("height",o-(p+u+1)),s.D.getComponentById(g.id).setSize("height",o-(p+u+1)))}}this.render.setAttribute("data-oldwidth",this.render.style.width),this.options.adaptiveWidth?this.render.style.width=this.options.adaptiveWidth:this.render.style.width=e?"100%":i.length*g.offsetWidth+"px"}else if("layout"==t)for(n=document.getElementById(this.id).getElementsByClassName("w2tb_td"),r=0;r<n.length;r++){var m=n[r].getAttribute("data-title");if(m){var f=s.D.getRulerSpan();f.style.padding=window.getComputedStyle(n[r],":before").getPropertyValue("padding"),f.style["padding-top"]=window.getComputedStyle(n[r],":before").getPropertyValue("padding-top"),f.style["padding-right"]=window.getComputedStyle(n[r],":before").getPropertyValue("padding-right"),f.style["padding-bottom"]=window.getComputedStyle(n[r],":before").getPropertyValue("padding-bottom"),f.style["padding-left"]=window.getComputedStyle(n[r],":before").getPropertyValue("padding-left"),f.style.width=window.getComputedStyle(n[r],":before").getPropertyValue("width"),f.style["border-width"]=window.getComputedStyle(n[r],":before").getPropertyValue("border-width"),f.style["line-height"]=window.getComputedStyle(n[r],":before").getPropertyValue("line-height"),f.style["white-space"]=window.getComputedStyle(n[r],":before").getPropertyValue("white-space"),f.style["word-wrap"]=window.getComputedStyle(n[r],":before").getPropertyValue("word-wrap"),f.style["word-break"]=window.getComputedStyle(n[r],":before").getPropertyValue("word-break"),f.style["font-weight"]=window.getComputedStyle(n[r],":before").getPropertyValue("font-weight"),f.innerHTML=m,f.offsetHeight>n[r].offsetHeight&&(n[r].style.height=parseInt(window.getComputedStyle(f).getPropertyValue("height"),10)+"px"),f.style.top="-10000px",f.style.left="-10000px",f.style.visibility="hidden"}}}catch(t){a.w.printStackTrace(t)}},p.prototype.removeAdaptiveHeight=function(t){try{if("crosstab"==t){for(var e=document.getElementById(this.id).getElementsByClassName("w2tb_th"),i=document.getElementById(this.id).getElementsByClassName("w2tb_td"),o=0;o<e.length;o++)e[o].style.removeProperty("height");for(var r=0;r<i.length;r++)i[r].style.removeProperty("height");var n=this.render.getAttribute("data-oldwidth");n&&(this.render.style.width=n)}else if("layout"==t)for(i=document.getElementById(this.id).getElementsByClassName("w2tb_td"),o=0;o<i.length;o++)i[o].style.removeProperty("height")}catch(t){a.w.printStackTrace(t)}},p.prototype.setAdaptiveLabel=function(t){try{if(!(s.D.isIE()&&parseInt(r.v.browserVersion(),10)<10)){var e=this.render.nextSibling||this.render.nextElementSibling;null!=e&&"TD"==e.tagName&&null!=e.getAttribute("data-title")&&(e.setAttribute("data-title",t),this.render.innerHTML=t)}}catch(t){a.w.printStackTrace(t)}},p.prototype.checkAdaptiveValid=function(t){try{var e=!0;if("crosstab"===t){var i,o=document.getElementById(this.id).getElementsByTagName("tbody")[0].getElementsByClassName("w2tb_tr");document.getElementById(this.id).getElementsByTagName("thead")[0]&&(i=document.getElementById(this.id).getElementsByTagName("thead")[0].getElementsByClassName("w2tb_tr"));for(var r=0;r<o.length;r++){var n=o[r].getElementsByClassName("w2tb_td"),s=o[r].getElementsByClassName("w2tb_th");if(n.length!==s.length){e=!1;break}}if(!e&&i){e=!0;for(r=0;r<o.length;r++){n=o[r].getElementsByClassName("w2tb_td");if(s=i.length<=r?i[i.length-1].getElementsByClassName("w2tb_th"):i[r].getElementsByClassName("w2tb_th"),n.length!==s.length){e=!1;break}}}}return e||l.k.printLog("warning : tableLayout이 crosstab을 지원할 수 없는 구조입니다.["+this.getOriginalID()+"]"),e}catch(t){a.w.printStackTrace(t)}},p.prototype.setReadOnly=function(t){try{this.options.readOnly=t,this.invoke("setReadOnly",t)}catch(t){a.w.printStackTrace(t)}},p.prototype._setCaption=function(t,e,i){try{var o=t.getElementsByTagName("caption")[0];if(o&&o.parentNode==t)o.innerHTML=e;else{
(o=document.createElement("caption")).innerHTML=e;var r=t.getElementsByTagName("colgroup")[0];r.parentNode.insertBefore(o,r)}if(i){var n=s.D.getDataPrefix("captiontitle");o.setAttribute(n,i)}var l=o.className;l&&""!=l?this.addClass(o,"setcaption"):o.className="setcaption"}catch(t){a.w.printStackTrace(t)}},p.prototype.setCaptionAuto=function(t){try{for(var e=this.render.getElementsByTagName("TABLE"),i=[],o=e.length,r=0;r<o;r++)i[r]=e[r];i[o]=this.render;var n=s.D.getDataPrefix("captiontitle");for(r=0;r<o+1;r++){var l=this._getHeaderTitleList(i[r]),d="";t?d=t:i[r].caption&&(d=i[r].caption.getAttribute(n)),d?this._setCaption(i[r],d+WebSquare.language.getMessage("Grid_caption2")+l+WebSquare.language.getMessage("Grid_caption"),d):this._setCaption(i[r],l+WebSquare.language.getMessage("Grid_caption"))}}catch(t){a.w.printStackTrace(t)}},p.prototype._getHeaderTitleList=function(t){try{var e=[],i="",o=[],r=[],n=[],s="",l=t.getElementsByTagName("tbody"),d=t.getElementsByTagName("thead"),h=0,p=0;if(l.length>1){for(var u=0;u<l.length;u++)if(l[u].parentNode==t)for(var g=l[u].getElementsByTagName("th"),c=0;c<g.length;c++)g[c].parentNode.parentNode==l[u]&&(r[h++]=g[c])}else l[0]&&(r=l[0].getElementsByTagName("th"));if(d.length>1){for(u=0;u<d.length;u++)if(d[u].parentNode==t)for(g=d[u].getElementsByTagName("th"),c=0;c<g.length;c++)g[c].parentNode.parentNode==d[u]&&(n[p++]=g[c])}else d[0]&&(n=d[0].getElementsByTagName("th"));o=n;for(var v=0;v<o.length;v++){e.length>0&&(s=","),null!=(b=o[v]).innerText&&""!=b.innerText?e[v]=b.innerText:null!=b.textContent&&""!=b.textContent?e[v]=b.textContent:e[v]=b.innerHTML,e[v]=e[v].replace(/(<([^>]+)>)/gi,"").trim(),""!=e[v]&&(i=i+s+e[v])}o=r;for(v=0;v<o.length;v++){var b;e.length>0&&(s=","),null!=(b=o[v]).innerText&&""!=b.innerText?e[v]=b.innerText:null!=b.textContent&&""!=b.textContent?e[v]=b.textContent:e[v]=b.innerHTML,e[v]=e[v].replace(/(<([^>]+)>)/gi,"").trim(),""!=e[v]&&(i=i+s+e[v])}return i}catch(t){a.w.printStackTrace(t)}},p.prototype._setSummary=function(t,e){try{t.setAttribute("summary",e)}catch(t){a.w.printStackTrace(t)}},p.prototype.setSummaryOnlyAuto=function(){try{for(var t=[],e=this.render.getElementsByTagName("TABLE"),i=e.length,o=0;o<i;o++)t[o]=e[o];t[i]=this.render;for(o=0;o<i+1;o++){var r=this._getHeaderTitleList(t[o]);this._setSummary(t[o],r)}}catch(t){a.w.printStackTrace(t)}},p.prototype.hideTooltip=function(){try{s.D.setTimeout((function(){this.tooltip&&this.tooltip.setStyle("display","none")}),{key:this.id+"_timeShowTooltip",delay:1e3*this.options.tooltipTime,caller:this})}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.showTooltip=function(t,e,i){try{s.D.clearTimeout(this.id+"_timeShowTooltip"),s.D.clearTimeout(this.id+"_timeHideTooltip"),s.D.setTimeout(this._showTooltip,{key:this.id+"_timeShowTooltip",delay:1e3*this.options.tooltipTime,caller:this,args:[t,e,i]})}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.bind=function(t,e){try{d.s.prototype.bind.call(this,t,e),this.setDragDrop()}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setDragDrop=function(){var t=!1,e=!1;if(null!=this.options.xmlEvents){for(var i=0;i<this.userEventList.length;i++){switch(this.userEventList[i].name){case"ondragstart":case"ondrag":case"ondragend":t=!0;break;case"ondragenter":case"ondragover":case"ondragleave":case"ondrop":e=!0}}t&&!this.bindDrag&&(s.D.isMobile()?(this.event.addListener(this.render,"ontouchstart",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(this.render,"ontouchmove",this.event.bindAsEventListener(this,this.handleTouchMove)),this.event.addListener(this.render,"ontouchend",this.event.bindAsEventListener(this,this.handleTouchEnd))):(this.event.addListener(this.render,"onmousedown",this.event.bindAsEventListener(this,this.handleTouchStart)),this.event.addListener(document.documentElement,"onmousemove",this.event.bindAsEventListener(this,this.handleTouchMove)),
this.event.addListener(document.documentElement,"onmouseup",this.event.bindAsEventListener(this,this.handleTouchEnd))),this.bindDrag=!0),e&&!this.bindDrop&&(WebSquare.dragdrop2.droppable[this.uuid]={over:!1},this.bindDrop=!0)}},p.prototype.finalize=function(){this.bindDrag=!1,this.bindDrop=!1,WebSquare.dragdrop2.droppable[this.uuid]=null,delete WebSquare.dragdrop2.droppable[this.uuid],this.options&&this.options.udcName&&n.B.fireEvent(this,"ondestroyed")},p.prototype.handleTouchStart=function(t){t.touches&&1!=t.touches.length||(this.setUserData("dragStatus","stop"),WebSquare.getBody().addClass("w2noselect"),s.D.emptySelection())},p.prototype.handleTouchMove=function(t){if(!t.touches||1==t.touches.length){var e=this.getUserData("dragStatus");if("stop"!=e&&"move"!=e||!this.getUserData("draggable"))return;r.v.setTimer(this._handleTouchMove,{key:this.id+"_handleTouchMove",caller:this,args:[{clientX:t.touches?t.touches[0].pageX:t.clientX,clientY:t.touches?t.touches[0].pageY:t.clientY}],delay:30,max:30}),n.B.preventDefault(t)}},p.prototype._handleTouchMove=function(t){var e=this.getUserData("dragStatus");if(("stop"==e||"move"==e)&&this.getUserData("draggable")){var i=t.touches?t.touches[0].pageX:t.clientX,o=t.touches?t.touches[0].pageY:t.clientY;if(i+=document.body.scrollLeft,o+=document.body.scrollTop,"stop"==e){var a=function(t){for(var e in t)if(null!=WebSquare.idCache[e]){var i=WebSquare.idCache[e].render,o=WebSquare.style.getAbsoluteTop(i),r=WebSquare.style.getAbsoluteLeft(i);t[e].position={top:o,left:r,bottom:o+i.offsetHeight,right:r+i.offsetWidth}}};a(WebSquare.dragdrop2.droppable),a(WebSquare.dragdrop2.scrollable),this.setUserData("dragStatus","move"),n.B.fireEvent(this,"ondragstart",i,o)}for(var s in n.B.fireEvent(this,"ondrag",i,o),WebSquare.dragdrop2.scrollable){var l=WebSquare.dragdrop2.scrollable[s],d=WebSquare.idCache[s];if(null!=d){var h,p,u=l.position,g=d.options.dragScrollSize;if(u.left<=i&&i<=u.right&&(u.top<=o&&o<=u.top+g?(h="up",p=d.render.clientHeight*(g-(o-u.top))/g+WebSquare.dragdrop2.scrollByDragSpeed):u.bottom-g<=o&&o<=u.bottom&&(h="down",p=d.render.clientHeight*(g-(u.bottom-o))/g+WebSquare.dragdrop2.scrollByDragSpeed)),null==h)l.scroll=!1,r.v.clearTimer(d.id+"_setSlideByDrag"),r.v.clearTimer(d.id+"_slideByDrag");else{var c=l.scroll?50:WebSquare.dragdrop2.scrollByDragDelay;r.v.setTimer((function(t,e,r){var a=WebSquare.idCache[r],s=a.getScrollTop(),l="up"==t?0:a.getMaxScrollTop();s!=l&&(a.scroll=!0,WebSquare.style.animate(a,(function(t){var e=parseInt(s+t*(l-s),10),r=e-this.getScrollTop();for(var a in this._scrollTo(null,e),WebSquare.dragdrop2.droppable){for(var d=WebSquare.idCache[a],h=!1;d=d.parentControl;)if(d==this){h=!0;break}h&&(WebSquare.dragdrop2.droppable[a].position.top-=r,WebSquare.dragdrop2.droppable[a].position.bottom-=r)}for(var p in WebSquare.dragdrop2.droppable){var u=WebSquare.dragdrop2.droppable[p],g=u.position;null!=WebSquare.idCache[p]&&(g.left<=i&&i<=g.right&&g.top<=o&&o<=g.bottom?(u.over||(u.over=!0,n.B.fireEvent(WebSquare.idCache[p],"ondragenter")),u.drop=!1===n.B.fireEvent(WebSquare.idCache[p],"ondragover")):u.over&&(u.over=!1,u.drop=!1,n.B.fireEvent(WebSquare.idCache[p],"ondragleave")))}}),{key:a.id+"_slideByDrag",easing:"linear",duration:1e3/e*Math.abs(l-s)}))}),{key:d.id+"_setSlideByDrag",delay:c,args:[h,p,s]})}}}for(var v in WebSquare.dragdrop2.droppable){var b=WebSquare.dragdrop2.droppable[v];u=b.position;null!=WebSquare.idCache[v]&&(u.left<=i&&i<=u.right&&u.top<=o&&o<=u.bottom?(b.over||(b.over=!0,n.B.fireEvent(WebSquare.idCache[v],"ondragenter")),b.drop=!1===n.B.fireEvent(WebSquare.idCache[v],"ondragover")):b.over&&(b.over=!1,b.drop=!1,n.B.fireEvent(WebSquare.idCache[v],"ondragleave")))}}},p.prototype.handleTouchEnd=function(t){var e=this.getUserData("dragStatus","move");WebSquare.getBody().removeClass("w2noselect");var i=!1;if(s.D.isChrome()||s.D.isOpera()){var o=this.event.getTargetIterator(t,this.render)
;o.next()&&("INPUT"==o.getElement().tagName||o.match("w2input_focus"))&&(i=!0)}if(i||s.D.emptySelection(),"pass"!=e){for(var a in WebSquare.dragdrop2.droppable)WebSquare.dragdrop2.droppable[a].over&&WebSquare.dragdrop2.droppable[a].drop&&null!=WebSquare.idCache[a]&&n.B.fireEvent(WebSquare.idCache[a],"ondrop",this),WebSquare.dragdrop2.droppable[a].over=!1,WebSquare.dragdrop2.droppable[a].drop=!1;for(var l in n.B.fireEvent(this,"ondragend"),this.render&&this.setUserData("dragStatus","pass"),WebSquare.dragdrop2.scrollable)WebSquare.dragdrop2.scrollable[l].scroll=!1,r.v.clearTimer(WebSquare.idCache[l].id+"_setSlideByDrag"),r.v.clearTimer(WebSquare.idCache[l].id+"_slideByDrag")}},p.prototype.handleMouseoverEvent=function(t){try{var e=n.B.getTarget(t);if(e){var i=e,o=WebSquare.style.getStyle(e,"text-overflow"),r=e.offsetWidth,s=e.offsetHeight,d=20,h=s;try{this.options.tooltipPositionX&&(d=new Function("cellWidth","cellHeight","return "+this.options.tooltipPositionX)(r,s)),this.options.tooltipPositionY&&(h=new Function("cellWidth","cellHeight","return "+this.options.tooltipPositionY)(r,s))}catch(t){l.k.printLog("tooltipPosistion 옵션 적용 중 오류 발생. 옵션 무시하고 기본값 적용.["+this.id+"]"),a.w.printStackTrace(t,null,this)}if("ellipsis"==o){this.toolTipRuler||(this.toolTipRuler=document.createElement("span"),this.toolTipRuler.style.position="absolute",this.toolTipRuler.style.visibility="hidden",this.toolTipRuler.style.left="0px",this.toolTipRuler.style.top="0px"),document.body.appendChild(this.toolTipRuler),this.toolTipRuler.className=i.className,this.toolTipRuler.innerHTML=i.innerHTML,this.toolTipRuler.style.fontSize=WebSquare.style.getStyle(i,"font-size"),this.toolTipRuler.style.fontFamily=WebSquare.style.getStyle(i,"font-family"),this.toolTipRuler.style.fontWeight=WebSquare.style.getStyle(i,"font-weight");var p=this.toolTipRuler.offsetWidth,u=e.clientWidth;if(3!=i.nodeType){var g=WebSquare.style.getStyle(this.toolTipRuler,"padding-left"),c=WebSquare.style.getStyle(this.toolTipRuler,"padding-right");p-=parseInt(g||"0",10),p-=parseInt(c||"0",10),u-=parseInt(WebSquare.style.getStyle(e,"padding-left"),10),u-=parseInt(WebSquare.style.getStyle(e,"padding-right"),10)}if(u<p){var v=WebSquare.style.getAbsoluteLeft(e)+d,b=WebSquare.style.getAbsoluteTop(e)+h,y=i.innerText.wq_trim();document.body.removeChild(this.toolTipRuler),this.options.tooltipItemLabel&&(y=this.options.tooltipItemLabel),this.showTooltip(v,b,y)}else document.body.removeChild(this.toolTipRuler)}}}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.handleMouseoutEvent=function(t){try{n.B.stopEvent(t),this.hideTooltip()}catch(t){a.w.printStackTrace(t,null,this)}},p.prototype.setAdaptiveText=function(t){try{if("table"!==this.options.tagname)return;for(var e=this.render.getElementsByTagName("td"),i=0;i<e.length;i++){var o=e[i];if(o.previousSibling&&"TH"===o.previousSibling.tagName){var n=null!=o.previousSibling.textContent?o.previousSibling.textContent:o.previousSibling.innerText||"";s.D.getBoolean(r.v.getConfiguration("/WebSquare/group/adaptive/trimText/@value"))?o.setAttribute("data-title",n.wq_trim()):o.setAttribute("data-title",n)}}}catch(t){a.w.printStackTrace(t,null,this)}}}}]);