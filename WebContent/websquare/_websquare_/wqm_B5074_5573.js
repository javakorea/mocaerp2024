"use strict";(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[5573],{5573:(t,i,e)=>{e.r(i),e.d(i,{udcFrame:()=>c});var a=e(2981),o=e(1656),r=e(2085),n=(e(1960),e(3082),e(227)),s=(e(7275),e(6615)),p=e(453),c=function(t,i,e){s.s.call(this,t,i,e)};a.x.extend(c.prototype,p.wframe.prototype),c.prototype.defaultOptions=n.h.cloneNode(p.wframe.prototype.defaultOptions,!0,[],[],0,!0),c.prototype.defaultOptions.pluginType="uiplugin.udcFrame",c.prototype.defaultOptions.pluginName="udcFrame",c.prototype.defaultOptions.userEvents=["onudcframeload","onbeforeudcframeunload","onudcframeunload"],c.prototype.initialize=function(t){try{this._initializeOptions(),p.wframe.prototype.initialize.call(this,t),this._udcFuncList=[]}catch(t){r.w.printStackTrace(t,null,this)}},c.prototype._initializeOptions=function(){try{this.options.tagname="div",this.options.mode="async",this.options.scope=!0,this.options.preload=!0}catch(t){r.w.printStackTrace(t,null,this)}},c.prototype.makeFrame=async function(t,i){try{await p.wframe.prototype.makeFrame.call(this,t,i),this._udcFrameMapping()}catch(t){r.w.printStackTrace(t,null,this)}},c.prototype._udcFrameMapping=async function(){try{for(var t=this.options.cloneVariable.split(","),i={},e=0;e<t.length;e++)i[t[e]]=!0;var a,n=WebSquare.Elem.api.getElementsByTagName(this.frameDoc.getPageInfo(),"publicInfo",o.v._XML_NAMESPACE.W2)[0];if(n){var s=WebSquare.Parser.parseAttribute(n);for(var p in a={method:{},submission:{},component:{}},s){var c=s[p].split(",");for(e=0;e<c.length;e++)a[p][c[e].wq_trim()]=!0}}for(var p in this.scopeVariable)if(!0!==i[p]){var u=this.scopeVariable[p];for(var l in u)l!==this.options.scopeFunction&&void 0===this[l]&&(a&&!0!==a.method[p+"."+l]||(this[l]=u[l],this._udcFuncList.push(l)))}for(var p in this.scope){var h=this.scope[p];null!=h&&(a?(!0===a.component[p]&&h.uuid&&WebSquare.idCache[h.uuid]===h&&h.id!==h.uuid&&h.org_id!==h.uuid||!0===a.submission[p]&&"submission"===h._pluginName)&&(this[p]=h):this[p]=h)}}catch(t){r.w.printStackTrace(t,null,this)}},c.prototype.setSrc=async function(t,i){try{await p.wframe.prototype.setSrc.call(this,t,i),this._udcFrameMapping()}catch(t){return r.w.printStackTrace(t,null,this),!1}},c.prototype.finalize=function(t,i){try{p.wframe.prototype.finalize.call(this,t,i);for(var e=0;e<this._udcFuncList.length;e++){var a=this._udcFuncList[e];try{delete this[a]}catch(t){this[a]=void 0}}this._udcFuncList=[]}catch(t){return r.w.printStackTrace(t,null,this),!1}}}}]);