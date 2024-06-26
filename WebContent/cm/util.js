var _ss;
function getU_ID(){
	if(!_ss){
		_ss = JSON.parse(sessionStorage.getItem('session'));
	}
	return _ss.R_ID;
};
function getU_EMAIL(){
	if(!_ss){
		_ss = JSON.parse(sessionStorage.getItem('session'));
	}	
	return _ss.R_EMAIL;
};
function getU_NAME(){
	if(!_ss){
		_ss = JSON.parse(sessionStorage.getItem('session'));
	}	
	return _ss.R_NAME;
};
function getU_SOCIAL(){
	if(!_ss){
		_ss = JSON.parse(sessionStorage.getItem('session'));
	}	
	return _ss.R_SOCIAL;
};
function logout(){
	sessionStorage.removeItem("loginInfo");
	sessionStorage.removeItem("session");
	top.window.location.href = "/";
};



function getLocationSignUpUrl(){
	return '/websquare/websquare.html?w2xPath=/ui/FRM_SIGNUP.xml&p='+new Date().getTime();
};
function getLocationMainUrl(){
	return '/websquare/websquare.html?w2xPath=/ui/index_windowContainer.xml&p='+new Date().getTime();
};				
function isMobile (_type) {
	if(_type){
		if(navigator.userAgent.indexOf(_type) > -1){//'Ios'는 아직작업안됨
			return true;
		}else{
			return false;
		}
	}else{
		if(navigator.userAgent.indexOf('Android') > -1){
			return true;
		}else{
			return WebSquare.util.isMobile();
		}
	}
};	

function go (_obj) {	
	var newUser = {U_SOCIAL:'google'};
	newUser.U_EMAIL = _obj.email;
	newUser.U_S_NAME = _obj.displayName;
	if(_obj.name){
		newUser.U_S_NAME = _obj.name;
	}
	newUser.U_ID = _obj.id;
	if(_obj.sub){
		newUser.U_ID = _obj.sub;
	}		
	sessionStorage.setItem("loginInfo", JSON.stringify(newUser));
	
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/FRM/LOGIN.do');
    xhr.setRequestHeader("Content-Type", 'application/json; charset=utf-8');
    xhr.responseType = 'json';
    xhr.onload = () => {
    	let result = xhr.response;
		if(result.dma_map){
			sessionStorage.setItem("session", JSON.stringify(result.dma_map));
			location.href = getLocationMainUrl();//메인화면
		}else{
			location.href = getLocationSignUpUrl();//회원가입
		}
    };
    newUser['COMMON_QUERY'] = 'M.SEL_MEMBER';
    xhr.send(JSON.stringify({dma_search:newUser}));
};
function isAdmin () {
	let adminYn = false;
	
	let em = getU_EMAIL();
	if(em == 'javakoreaboss@gmail.com' || em == 'shj9321@gmail.com' || em == 'teammocaboss@gmail.com'){
		adminYn = true;
	}
	return adminYn;
};	








/* 구글로그인 start --------------------------------------------------------------------*/
function parseJwt (_token) {
    const base64Url = _token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};
function handleCredentialResponse(response) {
	//var gauth = gapi.auth2.getAuthInstance();
	//gauth.signIn().then(function(){
		
    	const responsePayload = parseJwt(response.credential);
    	//if( responsePayload.email == "shj9321@gmail.com" || responsePayload.email ==  "javakoreaboss@gmail.com"){
    		 go (responsePayload);
    	//}else{
    	//	alert('접근할 수 없는 계정입니다.')
    	//}
/*            console.log("ID: " + responsePayload.sub);
        console.log('Full Name: ' + responsePayload.name);
        console.log('Given Name: ' + responsePayload.given_name);
        console.log('Family Name: ' + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);  */
       
   // });
};
function signOut() {
	if (isMobile('Android') != -1 && window['webViewTeammoca']) {
		//app
		webViewTeammoca.postMessage('signOut');
	}else{
		//web
	    var auth2 = gapi.auth2.getAuthInstance();
	    auth2.signOut().then(function () {
	      logout();
	    });
	}
  }
/* 구글로그인 end --------------------------------------------------------------------*/





/* 구글 드라이버 start */
const CLIENT_ID = '191058282154-kmn71d0j1fqnstu9joe2od2rvbhm7hot.apps.googleusercontent.com';
const API_KEY = 'AIzaSyBj3llqgZdqRN9zKVvMr1kyxfnslmqxEJY';
	const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const SCOPES = 'https://www.googleapis.com/auth/contacts.readonly https://www.googleapis.com/auth/contacts https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.readonly https://www.googleapis.com/auth/drive.appdata https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/drive.metadata.readonly';

	let tokenClient;
	let gapiInited = false;
	let gisInited = false;

	function gapiLoaded() {
	console.log('################################################## api.js, gapiLoaded');
	gapi.load('client', initializeGapiClient);
	}
	async function initializeGapiClient() {
	    await gapi.client.init({
	      apiKey: API_KEY,
	      discoveryDocs: [DISCOVERY_DOC],
	    });
	    await gapi.auth2.init({
	        clientId: CLIENT_ID,
	        scope: SCOPES
	    });	    
	    console.log('API_KEY:'+API_KEY);
	    console.log('initializeGapiClient()-'+'API_KEY를 초기화하였습니다.');
	    gapiInited = true;
	    maybeEnableButtons();
	}
	function gisLoaded() {
    console.log('################################################## Google Identity Services ,gisLoaded');
    tokenClient = google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: '', // defined later
    });
    
    console.log('CLIENT_ID:'+CLIENT_ID);
    console.log('SCOPES:'+SCOPES);
    console.log('gisLoaded()-'+'tokenClient를 생성하였습니다');
    gisInited = true;
    maybeEnableButtons();
	}

	function maybeEnableButtons() {
  
    if (gapiInited && gisInited) {
      //document.getElementById('authorize_button').style.visibility = 'visible';
      handleAuthClickForUpload();
    }
  
	}
	function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token);
      gapi.client.setToken('');
      //document.getElementById('content').innerText = '';
      //document.getElementById('authorize_button').innerText = 'Authorize';
      //document.getElementById('signout_button').style.visibility = 'hidden';
    }
	}






	
function handleAuthClick(_id) {
	console.log('gapi.client.getToken',gapi.client.getToken());
	tokenClient.callback = (resp) => {
		googleDownload2(_id);
	};
	if (gapi.client.getToken() === null) {
		tokenClient.requestAccessToken({prompt: 'consent'});
		//Cross-Origin-Opener-Policy policy would block the window.closed call.
	} else {
		tokenClient.requestAccessToken({prompt: ''});
	}
};
function handleAuthClickForUpload() {
	console.log('_uploadFuction gapi.client.getToken',gapi.client.getToken());
	tokenClient.callback = (resp) => {
	};
	if (gapi.client.getToken() === null) {
		tokenClient.requestAccessToken({prompt: 'consent'});
	} else {
		tokenClient.requestAccessToken({prompt: ''});
	}
	if(top.fileUploadGrp){
		top.fileUploadGrp.show('');
	}
};




var googleDownload = async function(_id){
  try {
  	  await gapi.client.load('drive','v3');
      const request = gapi.client.drive.files.get({fileId: _id,fields: 'webContentLink,id,name'});
      request.execute(function (resp) {
	      if (resp.webContentLink) {
	        
	        //let paramo = {param:{id:'12FUqsZIPNjBO6s_wx5WX337uWgXPsvkZ',authuser:'0'}};
	        //fileDownloadAjax(paramo);
	        
	        var _imgUrlHead = "https://drive.google.com/thumbnail?sz=s1000&id=";
	        testImage.src = _imgUrlHead+resp.id;
	        //convertImageBase64('https://drive.usercontent.google.com/download?id=12FUqsZIPNjBO6s_wx5WX337uWgXPsvkZ&export=download&authuser=0',console.log);
	      	//window.location.assign(resp.webContentLink);
	      } else {
	      	var formattedJson = JSON.stringify(resp.result, null, 2);
	      	console.log('googleDownload formattedJson',formattedJson);
	      	alert(formattedJson);
	      }
      });
  } catch (e) {
  	console.log('googleDownload Error', e);
  }
};
var googleDownload2 = async function(_id){
  try {
  	  await gapi.client.load('drive','v3');
      const request = gapi.client.drive.files.get({fileId: _id,fields: 'webContentLink,id,name'});
      request.execute(function (resp) {
	      if (resp.webContentLink) {
	      	window.open(resp.webContentLink);
	      } else {
	      	var formattedJson = JSON.stringify(resp.result, null, 2);
	      	console.log('googleDownload formattedJson',formattedJson);
	      	alert(formattedJson);
	      }
      });
  } catch (e) {
  	console.log('googleDownload Error', e);
  }
};


var fileDownloadAjax = function(_id) {
['Ajax버전의 파일다운로드 함수'];
var downloadUrl;
if(downloadUrl == null){
downloadUrl = "https://drive.google.com/uc?id="+_id+"&export=download";
}
var xhttp = new XMLHttpRequest();
xhttp.withCredentials = true;

xhttp.onreadystatechange = function(){

if(xhttp.readyState == 4 && xhttp.status == 200){

    
    var cd = xhttp.getResponseHeader('content-disposition');
    var ar = cd.split(';');
    var fNameParam = ar[1];
    var ar2 = fNameParam.split('=');
    var fileName = ar2[1];
    var _fileName = decodeURIComponent(fileName);
    fileName = _fileName.replace(/\"/g,'');
    var a = document.createElement('a');
    a.id = 'tmpDownload';
    a.href = window.URL.createObjectURL(xhttp.response);
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();

}else if(xhttp.readyState == 4 && xhttp.status == 500){
    
}
};
xhttp.onerror = function(){

};
xhttp.open("GET",downloadUrl);
xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhttp.responseType = 'blob';
xhttp.send({});

};
/* 구글 드라이버 end */








/*CK editor 컨텐츠속에 이미지로딩중이미지가 먼저표시되고 로딩이 끝나는시점에 호출됨 */var aaa = function(){}
















function go_mobile (_objStr) {	
	sessionStorage.setItem("loginInfo", JSON.stringify(_objStr));
    var xhr = new XMLHttpRequest();
    xhr.open('post', '/FRM/LOGIN.do');
    xhr.setRequestHeader("Content-Type", 'application/json; charset=utf-8');
    xhr.responseType = 'json';
    xhr.onload = () => {
    	let result = xhr.response;
		if(result.dma_map){
			sessionStorage.setItem("session", JSON.stringify(result.dma_map));
			location.href = getLocationMainUrl();//메인화면
		}else{
			location.href = getLocationSignUpUrl();//회원가입
		}
    };

    let newUser = _objStr;
    newUser['COMMON_QUERY'] = 'M.SEL_MEMBER';
    xhr.send(JSON.stringify({dma_search:newUser}));
};
function appToWeb(data){
	if(data){
		let arr = data.replace(/\s/g,'').replace(/\{|\}/g,'').split(',');
		let userObj = {};
		for(let i=0; i < arr.length; i++){
			let arr2 = arr[i].split(':');
			let value = arr[i].substring(arr2[0].length+1);
			userObj[arr2[0]]=value;
		}
		go_mobile (userObj);
	}
}


