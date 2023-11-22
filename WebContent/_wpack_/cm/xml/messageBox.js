/*amd /cm/xml/messageBox.xml 2776 12e4ccd14077a1b2f707602e3e34ea478be4e9eff235774a87b00050b525bbc9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
    try {
        var messageType = scwin.getMessageType();
        var message = com.data.getParameter($p, 'message') || '메시지 없음';
        tbx_message.setValue(message);
        if (messageType === 'alert') {
            btn_cancel.hide();
            btn_yes.hide();
        } else if (messageType === 'confirm') {
            btn_confirm.hide('');
            btn_yes.show('');
            btn_cancel.show('');
        }
    } catch (ex) {
        console.error(ex);
    }
};
scwin.btn_confirm_onclick = function (e) {
    try {
        scwin.callBackParam = com.data.getParameter($p, 'callBackParam');
        if (scwin.getMessageType() == 'confirm') {
            scwin.callBackParam.clickValue = true;
        }
        com.win.closePopup($p, scwin.callBackParam);
    } catch (ex) {
        console.error(ex);
    }
};
scwin.btn_cancel_onclick = function (e) {
    try {
        scwin.callBackParam = com.data.getParameter($p, 'callBackParam');
        if (scwin.getMessageType() == 'confirm') {
            scwin.callBackParam.clickValue = false;
        }
        com.win.closePopup($p, scwin.callBackParam);
    } catch (ex) {
        console.error(ex);
    }
};
scwin.getMessageType = function () {
    var messageType = com.data.getParameter($p, 'messageType') || 'alert';
    return messageType;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'pop_contents'},E:[{T:1,N:'xf:group',A:{id:'',class:'msbox'},E:[{T:1,N:'xf:textarea',A:{style:'width:100%; height: 84px; padding-top: 20px; padding-bottom: 10px; border: 0px;',readOnly:'true',id:'tbx_message',displaymessage:'',class:''}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:'margin:0px'},E:[{T:1,N:'xf:group',A:{class:'fr',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_yes',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니요'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'btn_confirm',style:'',type:'button','ev:onclick':'scwin.btn_confirm_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]}]}]}]}]})