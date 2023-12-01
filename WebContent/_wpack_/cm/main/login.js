/*amd /cm/main/login.xml 2902 0c3e7b517df50e6f4801080f6fcee1b8f380a78e0b285a90ef9223694956a537 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_googleLogin',ref:'data:json,dma_search',target:'',action:'/api/v1/oauth2/google',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'style'},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    g_id_onload.render.setAttribute('id', 'g_id_onload');
    g_id_onload.render.setAttribute('data-client_id', '191058282154-kmn71d0j1fqnstu9joe2od2rvbhm7hot.apps.googleusercontent.com');
    g_id_onload.render.setAttribute('data-callback', 'handleCredentialResponse');
    g_id_signin2.render.setAttribute('data-type', 'standard');
    g_id_signin2.render.setAttribute('data-shape', 'rectangular');
    g_id_signin2.render.setAttribute('data-theme', 'filled_blue');
    g_id_signin2.render.setAttribute('data-size', 'large');
    g_id_signin2.render.setAttribute('data-width', '');
    g_id_signin2.render.setAttribute('data-logo_alignment', 'left');
    var googleLoginURL = 'https://accounts.google.com/gsi/client';
    var googleLoginScript = document.createElement('script');
    googleLoginScript.setAttribute('src', googleLoginURL);
    googleLoginScript.onload = function (e) {
    };
    document.body.insertBefore(googleLoginScript, document.body.firstChild);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'login_wrap type2',id:'',style:'background: url(/cm/images/base/bg_w.png) no-repeat #2D4874;'},E:[{T:1,N:'xf:group',A:{class:'login_container',id:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'h1',style:'text-align:center;'},E:[{T:1,N:'xf:image',A:{alt:'모카ERP2024',id:'',src:'/cm/images/erp/ci_merp_w.png',style:''}}]},{T:1,N:'xf:group',A:{class:'login_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'ul',style:'width:220px;margin:0 auto;'},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'xf:group',A:{id:'g_id_onload',style:'',tagname:'div'}},{T:1,N:'xf:group',A:{id:'g_id_signin2',style:'',tagname:'div',class:'g_id_signin',text:''}}]}]}]}]}]}]}]}]})