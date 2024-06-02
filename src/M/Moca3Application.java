package M;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.entity.mime.content.FileBody;
import org.apache.http.impl.client.HttpClients;
import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import websquare.logging.util.LogUtil;

@PropertySource("classpath:application.properties") 
@RestController
@EnableScheduling
@SpringBootApplication
@Service("Moca3Application")
public class Moca3Application {
	public static Environment env;
	
	public static String STATUS = "rowStatus";
	public static String MASTER_MAP = "dma_common_request";public static String MASTER_MAP_RESPONSE = "dma_common_response";
	public static String MASTER_LiST = "dlt_common_master";
	public static String DETAIL_LiST = "dlt_common";
	public static String UPT_HEAD = "M.update__";
	public static String INS_HEAD = "M.insert__";
	public static String DEL_HEAD = "M.delete__";
	
	public static String COMMON_MASTER_DELETEQUERY = "COMMON_MASTER_DELETEQUERY";
	
	public static String COMMON_DETAIL_UPDATEQUERY = "COMMON_DETAIL_UPDATEQUERY";
	public static String COMMON_DETAIL_INSERTQUERY = "COMMON_DETAIL_INSERTQUERY";
	public static String COMMON_DETAIL_DELETEQUERY = "COMMON_DETAIL_DELETEQUERY";	
	public static String COMMON_DETAIL_BEFORE_INSERTQUERY = "COMMON_DETAIL_BEFORE_INSERTQUERY";	
	
	
	public static String COMMON_MASTER_QUERY = "COMMON_MASTER_QUERY";
	public static String COMMON_MASTER_KEY = "COMMON_MASTER_KEY";
	public static String COMMON_DETAIL_KEY = "COMMON_DETAIL_KEY";
	public static String COMMON_MASTER_RESULT = "COMMON_MASTER_RESULT";
	public static String COMMON_DETAIL_RESULT = "COMMON_DETAIL_RESULT";
	public static String COMMON_PARAM_MAP = "COMMON_PARAM_MAP";
	public static String COMMON_PARAM_LIST = "COMMON_PARAM_LIST";
	
	public static String COMMON_RESULT = "COMMON_RESULT";
	
	public static String WeatherCertKey = "1fWGdnl2FFHWCYLc2CRZaNAQJ%2BIcQ6tosYmoy6SATxdxrQohL7u0XgijQNK7rVOnQiecQR4Q9ButFDulM43Xjw%3D%3D";
	@Autowired
	private SqlSession ss;

	public Environment en;
	@CrossOrigin("*") //2023-11-28 @CrossOrigin(origins = "*", allowedHeaders = "*")
	//@CrossOrigin(origins = "*", allowedHeaders  = "*")
	
	/*목록조회*/@RequestMapping("/selectList.do")public Map selectList(@RequestBody Map param) {return u.selectList(param,ss);}
	/*단건조회*/@RequestMapping("/selectMap.do")public Map selectMap(@RequestBody Map param) {return u.selectMap(param,ss);}

	/*사용자가 Google에서 인증을 받은 후 이 경로로 리디렉션됩니다. 이 경로는 뒤에 액세스용 승인 코드가 추가되며 프로토콜이 있어야 합니다. URL 조각, 상대 경로, 와일드 카드는 포함할 수 없으며 공개 IP 주소는 사용할 수 없습니다.*/
	@RequestMapping("/googleapi/response.do")public void  response(HttpServletRequest request, ModelMap model) throws Exception{LogUtil.info("------------------------------> /googleapi/response.do ");}
	
	/* 단건-다건 입력수정*/
	@RequestMapping("/commonTran.do")
	public Map commonTran(@RequestBody Map param) throws Exception{
		Map dma_common = (Map) param.get(this.MASTER_MAP);
		
		String COMMON_MASTER_QUERY 					= String.valueOf(dma_common.get(this.COMMON_MASTER_QUERY));
		String MASTER_KEY_NM 						= String.valueOf(dma_common.get(this.COMMON_MASTER_KEY));
		String DETAIL_KEY_NM 						= String.valueOf(dma_common.get(this.COMMON_DETAIL_KEY));
		String COMMON_MASTER_DELETEQUERY 			= String.valueOf(dma_common.get(this.COMMON_MASTER_DELETEQUERY));
		String COMMON_DETAIL_INSERTQUERY 			= String.valueOf(dma_common.get(this.COMMON_DETAIL_INSERTQUERY));
		String COMMON_DETAIL_UPDATEQUERY 			= String.valueOf(dma_common.get(this.COMMON_DETAIL_UPDATEQUERY));
		String COMMON_DETAIL_DELETEQUERY 			= String.valueOf(dma_common.get(this.COMMON_DETAIL_DELETEQUERY));
		String COMMON_DETAIL_BEFORE_INSERTQUERY 	= String.valueOf(dma_common.get(this.COMMON_DETAIL_BEFORE_INSERTQUERY));
		
		
		Map COMMON_RESULT_MAP = new HashMap(); 
			Map resultAfterMap = null;
			Map resultMap = new HashMap();
			if(!"".equals(COMMON_MASTER_QUERY)) {
				String querys = COMMON_MASTER_QUERY;
				String[] queryArr = querys.split(",");
				List list = new ArrayList();
				for(int i=0; i < queryArr.length; i++) {
					String query = queryArr[i];
					int re1 = ss.insert(query, dma_common);
					list.add(re1);
				}
				resultMap.put(this.COMMON_MASTER_RESULT, list.toString());
				
				
				
				
				////////////insert후 selectKey로 가져온컬럼들이 있다면 따로 담아서 리턴함!(예) 회원가입insert후 session정보select
				Set s = dma_common.keySet();
				Map resultRow = new HashMap();
				if(s != null) {
					Iterator it = s.iterator();
					while(it.hasNext()) {
						String key = (String)it.next();
						if(key.startsWith("R_")) {
							resultRow.put(key, dma_common.get(key));
						}
					}
				}
				resultAfterMap = resultRow;		
				/////////////////////////////////////////////////////////////////////////////////////////////////
			}
			Map result = new HashMap();
			
			
			
			if(!"null".equalsIgnoreCase(COMMON_DETAIL_BEFORE_INSERTQUERY)  && !"".equals(COMMON_DETAIL_BEFORE_INSERTQUERY.trim())) {
				int delCnt = ss.insert(COMMON_DETAIL_BEFORE_INSERTQUERY,dma_common);
			}
			
			
			List dlt_common = (List) param.get(this.DETAIL_LiST);
			LogUtil.info(this.DETAIL_LiST);
			if(dlt_common != null) {
				int sz = dlt_common.size();
				for(int i=0; i < sz; i++) {
					Map row = (Map)dlt_common.get(i);
					if(MASTER_KEY_NM != null) {
						String[] arr = DETAIL_KEY_NM.split(",");
						String[] arr2 = MASTER_KEY_NM.split(",");
						if(arr != null && arr2 != null) {
							for(int k=0; k < arr.length; k++) {
								String dKey = arr[k];
								String mKey = arr2[k];
								row.put(dKey,	String.valueOf(dma_common.get(mKey)));
							}
						}
					}
					String s = (String)row.get(this.STATUS);
					int re = 0;
					if("C".equals(s) ) {
						re = ss.insert(COMMON_DETAIL_INSERTQUERY,row);
						result.put(i+"", re);
					}else if("U".equals(s) ) {
						re = ss.insert(COMMON_DETAIL_UPDATEQUERY,row);
						result.put(i+"", re);
					}else if("D".equals(s) ) {
						if(!"null".equalsIgnoreCase(COMMON_MASTER_DELETEQUERY) && !"".equalsIgnoreCase(COMMON_MASTER_DELETEQUERY) ) {
							re = ss.delete(COMMON_MASTER_DELETEQUERY,row);
							result.put(i+"_m", re);
						}
						if(!"null".equalsIgnoreCase(COMMON_DETAIL_DELETEQUERY) && !"".equalsIgnoreCase(COMMON_DETAIL_DELETEQUERY)) {
							re = ss.delete(COMMON_DETAIL_DELETEQUERY,row);
							result.put(i+"_d", re);
						}
					}
				}
				resultMap.put(this.COMMON_PARAM_LIST, dlt_common);
			}
			
			
			resultMap.put("COMMON_RESULT_ROW", resultAfterMap);//회원가입후 회원세션정보가져오기
			resultMap.put(this.COMMON_DETAIL_RESULT, result);
			resultMap.put(this.COMMON_PARAM_MAP, dma_common);
		COMMON_RESULT_MAP.put(this.COMMON_RESULT, resultMap);
		u.setSuccessMsg(COMMON_RESULT_MAP);
		return COMMON_RESULT_MAP;
	};
	
	
	

	
	
	public static final int BUFF_SIZE = 2048;
	@RequestMapping("/googleDownload.do")
	public void googleDownload(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String googleFileId = request.getParameter("googleFileId");
		String sz = request.getParameter("sz");
		String url = "https://drive.google.com/thumbnail?sz="+sz+"&id="+googleFileId;
		String OUTPUT_FILE_PATH = "c:\\Temp\\a.jpg";
		String FILE_URL = url;
		BufferedInputStream in = null;
		BufferedOutputStream outs = null;
		try  {
			in = new BufferedInputStream(new URL(FILE_URL).openStream());
		    //String fName = (new String(orgFileName.getBytes(), "UTF-8")).replaceAll("\r\n","");
			String fName = "a.jpg";
			response.setContentType("application/octet-stream; charset=utf-8");
			//response.setContentLength((int) file.length());
			String browser = getBrowser(request);
			String disposition = getDisposition(fName, browser);
			response.setHeader("Content-Disposition", disposition);
			
			
			
			//response.setHeader("Content-Disposition:", "attachment; filename=" + fName);
			response.setHeader("Content-Transfer-Encoding", "binary");
			response.setHeader("Pragma", "no-cache");
			response.setHeader("Expires", "0");
		
			outs = new BufferedOutputStream(response.getOutputStream());
		    byte dataBuffer[] = new byte[1024];
		    int bytesRead;
		    while ((bytesRead = in.read(dataBuffer, 0, 1024)) != -1) {
		    	outs.write(dataBuffer, 0, bytesRead);
		    }
		} catch (Exception e) {
			//e.printStackTrace();
		}finally {
			if(in != null) {
				in.close();
			}
			if(outs != null) {
				outs.flush();
				outs.close();		
			}
		}
	};
	public static String getBrowser(HttpServletRequest request) {
		String header = request.getHeader("User-Agent");
		if (header.indexOf("MSIE") > -1 || header.indexOf("Trident") > -1)
			return "MSIE";
		else if (header.indexOf("Chrome") > -1)
			return "Chrome";
		else if (header.indexOf("Opera") > -1)
			return "Opera";
		return "Firefox";
	}
	private String getDisposition(String filename, String browser)
			throws UnsupportedEncodingException {
		String dispositionPrefix = "attachment;filename=";
		String encodedFilename = null;
		if (browser.equals("MSIE")) {
			encodedFilename = URLEncoder.encode(filename, "UTF-8").replaceAll(
					"\\+", "%20");
		} else if (browser.equals("Firefox")) {
			encodedFilename = "\""
					+ new String(filename.getBytes("UTF-8"), "8859_1") + "\"";
		} else if (browser.equals("Opera")) {
			encodedFilename = "\""
					+ new String(filename.getBytes("UTF-8"), "8859_1") + "\"";
		} else if (browser.equals("Chrome")) {
			StringBuffer sb = new StringBuffer();
			for (int i = 0; i < filename.length(); i++) {
				char c = filename.charAt(i);
				if (c > '~') {
					sb.append(URLEncoder.encode("" + c, "UTF-8"));
				} else {
					sb.append(c);
				}
			}
			encodedFilename = sb.toString();
		}
		return dispositionPrefix + encodedFilename;
	}
	
	
	
	

	//메인 티스토리 크롤링  
	@RequestMapping(value = "/main/selectTistroyList.do")
	public List selectTistroyList(@RequestParam Map mocaMap) throws Exception {
		Map reMap = u.getWebPageString("https://teammoca.tistory.com","UTF-8");
		String s = (String)reMap.get("STRING");
		s = s.replaceAll("<a href=\"/", "<a target=\"_blank\" href=\"https://teammoca.tistory.com/");
		String ptnStr = "<div\\s+class=\"post-item\">.*?</div>";
		Pattern p = Pattern.compile(ptnStr,Pattern.CASE_INSENSITIVE | Pattern.DOTALL );
		Matcher m = p.matcher(s);
		List list = new ArrayList();
		while(m.find()) {
			list.add(m.group());
		}
		return list;
	};
	//로그아웃  
	@RequestMapping(value = "/FRM/LOGOUT.do")
	public List LOGOUT(@RequestParam Map mocaMap,HttpServletRequest request) throws Exception {
		LogUtil.info("----------------- /FRM/LOGOUT.do");
		List list = new ArrayList();
		try {
			request.getSession().invalidate();
			StringBuffer sb = new StringBuffer();
			Enumeration enus = request.getSession().getAttributeNames();
			while(enus.hasMoreElements()) {
				String key = String.valueOf(enus.nextElement());
				sb.append(key);
				sb.append(",");
			}
			String resultValue = sb.toString();
			list.add(resultValue);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return list;
	};
	//로그인 
	@RequestMapping(value = "/FRM/LOGIN.do")
	@Transactional(rollbackFor = Exception.class)
	public Map LOGIN(@RequestBody Map param,HttpServletRequest request) throws Exception {
		Map member = u.selectMap(param,ss);
		Map session = (Map)member.get("dma_map");
		Map parameter = (Map)param.get("dma_search");
		boolean isExeUpdate = false;
		if(parameter.get("U_EMAIL") !=null && !"".equals(parameter.get("U_EMAIL")) &&(!parameter.get("U_EMAIL").equals(session.get("R_EMAIL")))) {	
			isExeUpdate = true;
		}else if(parameter.get("U_NAME") !=null && !"".equals(parameter.get("U_NAME")) &&(!parameter.get("U_NAME").equals(session.get("R_NAME")))) {			
			isExeUpdate = true;
		}else if(parameter.get("U_PHONE") !=null && !"".equals(parameter.get("U_PHONE")) &&(!parameter.get("U_PHONE").equals(session.get("R_PHONE")))) {
			isExeUpdate = true;
		}else if(parameter.get("U_LEVEL") !=null && !"".equals(parameter.get("U_LEVEL")) &&(!parameter.get("U_LEVEL").equals(session.get("R_LEVEL")))) {
			isExeUpdate = true;
		}else if(parameter.get("U_ADDR") !=null && !"".equals(parameter.get("U_ADDR")) &&(!parameter.get("U_ADDR").equals(session.get("R_ADDR")))) {
			isExeUpdate = true;
		}else if(parameter.get("U_SOCIAL") !=null && !"".equals(parameter.get("U_SOCIAL")) &&(!parameter.get("U_SOCIAL").equals(session.get("R_SOCIAL")))) {	
			isExeUpdate = true;
		}else if(parameter.get("U_S_NAME") !=null && !"".equals(parameter.get("U_S_NAME")) &&(!parameter.get("U_S_NAME").equals(session.get("R_S_NAME")))) {			
			isExeUpdate = true;
		}else if(parameter.get("U_PUSH_TOKEN") !=null && !"".equals(parameter.get("U_PUSH_TOKEN")) &&(!parameter.get("U_PUSH_TOKEN").equals(session.get("R_PUSH_TOKEN")))) {
			isExeUpdate = true;
		}else if(parameter.get("U_BIRTH_DT") !=null && !"".equals(parameter.get("U_BIRTH_DT")) &&(!parameter.get("U_BIRTH_DT").equals(session.get("R_BIRTH_DT")))) {
			isExeUpdate = true;
		}
		String upt_data = u.getNow();
		if(isExeUpdate) {
			ss.update("M.UPT_MEMBER", parameter);
			member = u.selectMap(param,ss);
			upt_data += "UPDATED:"+member.toString();
		}
		Map adminInfo = u.selectMap(u.getParamMap("M.SEL_ADMIN"),ss);
		Map m = (Map)adminInfo.get("dma_map");
		String title_data = "";
		if(parameter.get("U_PUSH_TOKEN") == null) {
			title_data = "[WEB]로그인알림";
		}else {
			title_data = "[APP]로그인알림";
		}
		u.sendMessage("PUSH",title_data,parameter.get("U_EMAIL")+":"+session.get("R_NAME")+upt_data,String.valueOf(m.get("R_PUSH_TOKEN")) );
		return member;
	};	
	
	
	
	//TOBE 매일 아침 3시 조회 (당일 일정 조회)
	//@Scheduled(cron="0 0 3 * * ?")
	@Transactional(rollbackFor = Exception.class)
	public void _0_0_3_A_A_Q_TOBE() throws Exception{
		List wList = u.getW("MEDM_REG");
		ss.delete("DEL_APIHUBKMA_FCT_MEDM_REG", new HashMap());
		for(int j=0; j < wList.size(); j++) {
			Map row = (Map)wList.get(j);
			ss.insert("INS_APIHUBKMA_FCT_MEDM_REG",row);
		}
		List wList2 = u.getW("AFS_WL");
		ss.delete("DEL_APIHUBKMA_FCT_AFS_WL", new HashMap());
		for(int j=0; j < wList2.size(); j++) {
			Map row = (Map)wList2.get(j);
			ss.insert("INS_APIHUBKMA_FCT_AFS_WL",row);
		}
		
		List wList3 = u.getW("AFS_DL");
		ss.delete("DEL_APIHUBKMA_FCT_AFS_DL", new HashMap());
		for(int j=0; j < wList3.size(); j++) {
			Map row = (Map)wList3.get(j);
			ss.insert("INS_APIHUBKMA_FCT_AFS_DL",row);
		}		
		Map adminInfo = u.selectMap(u.getParamMap("M.SEL_ADMIN"),ss);
		Map m = (Map)adminInfo.get("dma_map");
		String title_data = "";
		title_data = "배치수행완료";
		u.sendMessage("PUSH",title_data,"일기예보데이터 3시배치수행완료:"+"지역코드/"+wList.size()+","+"도별중기/"+wList2.size()+","+"시별단기/"+wList3.size(),String.valueOf(m.get("R_PUSH_TOKEN")) );
	};
	//TOBE 매일 아침 6시 조회 (당일 일정 조회)
	//@Scheduled(cron="0 0 6 * * ?")
	public void _0_0_6_A_A_Q_TOBE() throws Exception{
		//u.exeBatch("M.selectTodaySchedule","당일",ss);
		List l = ss.selectList("M.SEL_CRON_MY_TODAY_SCH_LIST", new HashMap());
		if(l != null){
			for(int i=0;i < l.size() ;i++) {
				Map row = (Map)l.get(i);
				u.sendMessage("PUSH","[당일]" ,String.valueOf(row.get("SCH_CONT")),String.valueOf(row.get("U_PUSH_TOKEN")) );
			}
		}		
	};
	//TOBE 매일 아침 9시 조회 (당일 일정 조회)
	//@Scheduled(cron="0 0 9 * * ?")
	public void _0_0_9_A_A_Q_TOBE() throws Exception{
		//u.exeBatch("M.selectTodaySchedule","당일",ss);
		List l = ss.selectList("M.SEL_CRON_MY_TODAY_SCH_LIST", new HashMap());
		if(l != null){
			for(int i=0;i < l.size() ;i++) {
				Map row = (Map)l.get(i);
				u.sendMessage("PUSH","[당일]",String.valueOf(row.get("SCH_CONT")),String.valueOf(row.get("U_PUSH_TOKEN")) );
			}
		}		
	};
	
	
	
	
	
	
	
	
	
	
	//매일 아침 7시 조회 (당일 일정 조회)
	//@Scheduled(cron="0 0 7 * * ?")public void _0_0_7_A_A_Q() throws Exception{u.exeBatch("M.selectTodaySchedule","당일",ss);}
	//매일 아침 9시 조회 (내일,3일전,7일전,미처리)
	//@Scheduled(cron="0 0 9 * * ?")public void _0_0_9_A_A_Q() throws Exception{u.exeBatch("M.selectTomorrowSchedule","1일전",ss);u.exeBatch("M.selectThreeDaysSchedule","3일전",ss);u.exeBatch("M.selectAWeekSchedule","7일전",ss);u.exeBatch("M.selectNotSuccessSchedule","미처리",ss);}
	//월~금 아침 9시 (고정알림)
	//@Scheduled(cron = "0 0 9 ? * MON-FRI")public void _0_0_9_Q_A_MON_FRI() throws Exception{u.exeSms("안녕하세요! 오전9시 주식개장시간입니다",u.getSmsDefaultNumbers(null),"",null,ss,null);}
	//[테스트용] 매시30분 (고정알림) 
	//@Scheduled(cron = "0 30 * * * *")public void _0_30_A_A_A_A() throws Exception{u.exeSms("30분주기알림 테스트중입니다.",u.getSmsDefaultNumbers(null),"",null,ss);}	
	
		
	public static void main(String[] args) {
		SpringApplication.run(Moca3Application.class, args);
	}
	
}

























































class u {
	
	public static void sendMessage(String _kind,String _title, String _body, String _ADMIN_PUSH_TOKEN) throws IOException {
		//_kind : sms or push
		if("PUSH".equalsIgnoreCase(_kind)) {
			LogUtil.info("PUSH START=================================================================================");
			Messaging.sendCommonMessage(_title, _body,String.valueOf(_ADMIN_PUSH_TOKEN) );
			LogUtil.info("PUSH END=================================================================================");
		}
	};
	  
	  
	  

	public static Map getParamMap(String _COMMON_QUERY) {
		Map p = new HashMap();	
		Map p_sub = new HashMap();	
		p_sub.put("COMMON_QUERY", _COMMON_QUERY);
		p.put("dma_search", p_sub);
		return p;
	};
	
	public static String getSmsSchTime(Map sendMap) {
    	String _cont = sendMap.get("SCH_START").toString().substring(0, 16);
    	return _cont;
	};
	public static String getSmsDefaultNumbers(Map sendMap) {
    	return "01091168072,01090789322";
	};	
	public static String getSmsTitle(Map sendMap) {
    	String _cont = sendMap.get("SCH_TITLE").toString();
    	if(_cont.length() > 20) {
    		_cont = _cont.substring(0,20)+"...";
    	};
    	return _cont;
	};
	public static String[] strToArr(String str,String sepa) {
		if(str == null || "".equals(str.trim())) {
			return null;
		}else {
			String strIssuer = str.trim();
			String[] arrIssuer = strIssuer.split(sepa);
			return arrIssuer;	
		}
	};
	public static void exeBatch(String sqlId , String head , SqlSession ss) throws Exception {
		List l = ss.selectList(sqlId, new HashMap());
		if(l != null){for(int i=0;i < l.size() ;i++) {u.sendSms(head,(Map)l.get(i),ss);}}
	}
	public static String sendSms(String head,Map d,SqlSession sqlSession) throws Exception{
		String _msg = "["+head+"] "+ getSmsSchTime(d)+" "+getSmsTitle(d)+" 일정";
		String _receiver = getSmsDefaultNumbers(d);
		String _receiverNm = d.get("SCH_WRITER").toString();
		return exeSms(_msg, _receiver, _receiverNm, d, sqlSession, head);
	}
	public static String exeSms(String _msg, String _receiver, String _receiverNm,Map d, SqlSession ss, String _head)
			throws Exception {
		final String encodingType = "utf-8";
		final String boundary = "____boundary____";
		/**************** 문자전송하기 예제 ******************/
		/* "result_code":결과코드,"message":결과문구, */
		/* "msg_id":메세지ID,"error_cnt":에러갯수,"success_cnt":성공갯수 */
		/* 동일내용 > 전송용 입니다.  
		/******************** 인증정보 ********************/
		String sms_url = "https://apis.aligo.in/send/"; // 전송요청 URL
		Map<String, String> sms = new HashMap<String, String>();
		sms.put("user_id", "teammoca"); // SMS 아이디
		sms.put("key", "eue471wfrhjgj9ajn4cdrjeabmlu6nyp"); //인증키
		/******************** 전송정보 ********************/
		sms.put("msg", _msg); // 메세지 내용
		sms.put("receiver", _receiver); // 수신번호
		sms.put("destination", _receiver+"|"+_receiverNm); // 수신인 %고객명% 치환 
		sms.put("sender", "01090789322"); // 발신번호
		sms.put("rdate", ""); // 예약일자 - 20161004 : 2016-10-04일기준
		sms.put("rtime", ""); // 예약시간 - 1930 : 오후 7시30분
		sms.put("testmode_yn", "N"); // Y 인경우 실제문자 전송X , 자동취소(환불) 처리
		//sms.put("title", "제목입력"); //  LMS, MMS 제목 (미입력시 본문중 44Byte 또는 엔터 구분자 첫라인)
		sms.put("msg_type", "SMS"); //  sms
		String image = "";
		//image = "/tmp/pic_57f358af08cf7_sms_.jpg"; // MMS 이미지 파일 위치
		/******************** 전송정보 ********************/
		MultipartEntityBuilder builder = MultipartEntityBuilder.create();
		builder.setBoundary(boundary);
		builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
		builder.setCharset(Charset.forName(encodingType));
		for(Iterator<String> i = sms.keySet().iterator(); i.hasNext();){
			String key = i.next();
			builder.addTextBody(key, sms.get(key)
					, ContentType.create("Multipart/related", encodingType));
		}
		File imageFile = new File(image);
		if(image!=null && image.length()>0 && imageFile.exists()){
	
			builder.addPart("image",
					new FileBody(imageFile, ContentType.create("application/octet-stream"),
							URLEncoder.encode(imageFile.getName(), encodingType)));
		}
		HttpEntity entity = builder.build();
		HttpClient client = HttpClients.createDefault();
		HttpPost post = new HttpPost(sms_url);
		post.setEntity(entity);
		HttpResponse res = client.execute(post);
		String result = "";
		if(res != null){
			BufferedReader in = new BufferedReader(new InputStreamReader(res.getEntity().getContent(), encodingType));
			String buffer = null;
			while((buffer = in.readLine())!=null){
				result += buffer;
			}
			in.close();
		}
		if(d != null) {
	    	JSONParser parser = new JSONParser();
	    	Object obj = parser.parse( result );
	    	JSONObject jsonObj = (JSONObject) obj;
	    	String code = jsonObj.get("result_code").toString();
	    	String name = (String) jsonObj.get("message");
	    	if(code.equals("1") && _head.equals("당일")){
	    		Map uMap = new HashMap();
				uMap.put("SCH_IDX", d.get("SCH_IDX"));
				ss.update("M.updateScheduleSendSmsYn", uMap);
	    	}
		}
		return result;
	};
	
	public static Map getWebPageString(String _url,String charset) throws MalformedURLException, IOException, UnsupportedEncodingException {
		String _charset = "UTF-8";
		if(charset != null) {
			_charset = "EUC-KR";
		}
		URL url = new URL(_url);
		URLConnection conn = url.openConnection();
		InputStream is = conn.getInputStream();
		InputStreamReader in = new InputStreamReader(is, _charset);
		BufferedReader br = new BufferedReader(in);
		StringBuffer sb = new StringBuffer();
		String rLine = null;
		List reList = new ArrayList();
		while((rLine = br.readLine()) != null)
		{
			reList.add(rLine);
			sb.append(rLine);
		}
		Map returnMap = new HashMap();
		returnMap.put("LIST", reList);
		returnMap.put("STRING", sb.toString());
        return returnMap;
	}	
	
	public static void setSuccessMsg(Map resultMap) {
		resultMap.put("status", "S");
		resultMap.put("Message", "정상적으로 처리 되었습니다.");
	};
	
	public static Map selectListEdit(Map searchMap,String selectQuery,SqlSession ss) {
		Map resultMap = new HashMap();
		List list = ss.selectList(selectQuery, searchMap);
		resultMap.put("dlt_list", list);
		return resultMap;
	};
	public static Map selectMap(Map param,SqlSession ss) {
		Map searchMap = (Map) param.get("dma_search");
		Map resultMap = new HashMap();
		Map map = ss.selectOne((String)searchMap.get("COMMON_QUERY"), searchMap);
		resultMap.put("dma_map", map);
		return resultMap;
	};
	public static Map selectList(Map param,SqlSession ss) {
		Map searchMap = (Map) param.get("dma_search");
		Map resultMap = new HashMap();
		
		String querys = (String)searchMap.get("COMMON_QUERY");
		String[] queryArr = querys.split(",");
		for(int i=0; i < queryArr.length; i++) {
			String query = queryArr[i];
			List list = ss.selectList(query, searchMap);
			if(i == 0) {
				resultMap.put("dlt_list", list);
			}else {
				resultMap.put("dlt_list"+i, list);
			}
		}
		return resultMap;
	};
	
	
	
	
	
	public static String getNow() {
		Date today = new Date();
		SimpleDateFormat format2;
		format2 = new SimpleDateFormat("(yyyy년MM월dd일 F번째E HH:mm:ss:SSS )");
		return format2.format(today);
	};

	
	/**
	 * 날씨 DATA를 조회한다.
	 * https://www.data.go.kr/
	 * REST방식 호출
	 * 라이센스 키 2년에 한번씩 갱신해야함
	 * 위치정보를 받아서  현재시간으로 호출한다.
	 * @param list
	 * @param param
	 * @return
	 * @throws Exception
	 */
	public static HashMap getWeatherData(Map param)throws Exception{

		System.out.println("■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ 날씨테스트.");

		HashMap hm = new HashMap();

		try{

			Calendar calender = Calendar.getInstance();
			Date toDate = calender.getTime();

			SimpleDateFormat fm = new SimpleDateFormat("yyyyMMdd");
			String sDate = fm.format(toDate);

			fm = new SimpleDateFormat("HHMM");
			String sTime = fm.format(toDate);
			// Base_time  : 0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300 (1일 8회)
			//API 제공 시간(~이후) : 02:10, 05:10, 08:10, 11:10, 14:10, 20:10, 23:10
			int iTime = Integer.parseInt(sTime);
			if( iTime <= 210){
				sTime = "2300";
			}else if( iTime > 210 && iTime <= 510 ){
				sTime = "0200";
			}else if( iTime > 510 && iTime <= 810 ){
				sTime = "0500";
			}else if( iTime > 810 && iTime <= 1110 ){
				sTime = "0800";
			}else if( iTime > 1110 && iTime <= 1410 ){
				sTime = "1100";
			}else if( iTime > 1410 && iTime <= 1710 ){
				sTime = "1400";
			}else if( iTime > 1710 && iTime <= 2010 ){
				sTime = "1700";
			}else if( iTime > 2010 && iTime <= 2310 ){
				sTime = "2000";
			}
			//

			String sPosX = (String)param.get("posX");
			String sPosY = (String)param.get("posY");

			StringBuffer  sTargetUrl = new StringBuffer("http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData?");
			LogUtil.info("========Moca3Application.WeatherCertKey=================================================================================="+Moca3Application.WeatherCertKey);
			sTargetUrl.append("ServiceKey=" + Moca3Application.WeatherCertKey);
			sTargetUrl.append("&base_date=" + sDate);
			sTargetUrl.append("&base_time=" + sTime);
			sTargetUrl.append("&nx=" + sPosX);
			sTargetUrl.append("&ny=" + sPosY);
			sTargetUrl.append("&_type=json");

			System.out.println("sTargetUrl:" + sTargetUrl.toString());

			URL wUrl = new URL(sTargetUrl.toString());
			HttpURLConnection con = (HttpURLConnection) wUrl.openConnection();
			con.setRequestMethod("GET"); // optional default is GET con.setRequestProperty("User-Agent", USER_AGENT); // add request header
			int responseCode = con.getResponseCode();
			BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));

			String inputLine;
			StringBuffer response = new StringBuffer();
			while ((inputLine = in.readLine()) != null)
			{
				response.append(inputLine);
			} in.close();

			//{"response":{"header":{"resultCode":"0000","resultMsg":"OK"},"body":{"items":{"item":[{"baseDate"
			//aseDate":20190426,"baseTime":"0500","category":"POP","fcstDate":20190426,"fcstTime":"0900","fcstValue":60,"nx":60,"ny":127},{
			JSONParser parser = new JSONParser();
			JSONObject json = (JSONObject)parser.parse( response.toString() );
			JSONArray lstJson = (JSONArray)( (JSONObject)( (JSONObject)( (JSONObject)json.get("response") ).get("body") ).get("items")).get("item");

			List <Map<String,Object>> resultList = new ArrayList();

			long sT3H = 0;
			long sREH = 0;
			long sPTY = 0;
			long sSKY = 0;

			//
			for( int i = 0; i < lstJson.size();i ++){

				JSONObject jobj= (JSONObject)lstJson.get(i);
				HashMap map = new HashMap();
				Set set = jobj.keySet();

				String category = (String)jobj.get("category");
				//기온 category  T3H  fcstValue
				if(  "T3H".equals(category)  ){
					sT3H = (long)jobj.get("fcstValue");
				//습도 category  REH  fcstValue
				}else if(  "REH".equals(category)  ){
					sREH = (long)jobj.get("fcstValue");

				//강수형태 category  PTY  fcstValue
			    //강수형태  : 없음(0), 비(1), 비/눈(2), 눈(3)
				}else if(  "PTY".equals(category)  ){
					sPTY = (long)jobj.get("fcstValue");

			    //하늘상태 category  SKY  fcstValue
				//하늘상태  : 맑음(1), 구름조금(2), 구름많음(3), 흐림(4)
				}else if(  "SKY".equals(category)  ){
					sSKY = (long)jobj.get("fcstValue");
				}

				Iterator it = set.iterator();
				while( it.hasNext()){
					String id  = (String)it.next();

					Object val = (Object)jobj.get(id);
	//				System.out.println("id===========>>" + id+ "  val:" + val);
					map.put(id, val);

				}

				resultList.add(map);
			}


			//http://www.weather.go.kr/HELP/basic/help_01_03_01.jsp
			//(습도-65)/14 * 1.054 ^ 온도
			double  fRet = new Double( (sREH-65) ) / 14 * Math.pow( 1.054 , new Double( sT3H )) ;
			double  lRet = Math.round(fRet*100) / 100.0;

			String sRet = "";
			if( lRet < 3 ){
				sRet = "낮음";
			}else if( lRet >= 3  && lRet < 7){
				sRet = "보통";
			}else if( lRet > 7){
				sRet = "높음";
			}

			if( responseCode == 200 ){
	//			hm.put("weatherData", response.toString() );
				hm.put("ErrorCode", "0" );
				hm.put("weatherData", resultList );
				hm.put("foodData", lRet+"("+sRet+")" );
			}else{
				hm.put("ErrorCode", "-1" );
			}

		}catch(Exception e){
			e.printStackTrace();
			hm.put("ErrorCode", "-1" );
		}

		return hm;
	}
	
	 
	
	public static List getW(String gubun) {
		List reList = new ArrayList();
		try {		
			if("AFS_WL".equalsIgnoreCase(gubun)) {
				Map reMap = u.getWebPageString("https://apihub.kma.go.kr/api/typ01/url/fct_afs_wl.php?mode=0&disp=0&help=1&authKey=CxU6NEKFRnWVOjRChYZ1iA","EUC-KR");
				List list = (List)reMap.get("LIST");
				
				for(int i=0; i < list.size(); i++) {
					String rLine = (String)list.get(i);
					String[] strs = rLine.split(" ");
					if(strs.length > 10 && strs.length < 13) {
						if(strs[2].length() == 12) {
							Map row = new HashMap();
							row.put("REG_ID", strs[0]);
							row.put("TM_FC", strs[1]);
							row.put("TM_EF", strs[2]);
							row.put("MOD_KEY", strs[3]);
							row.put("STN", strs[4]);
							row.put("C", strs[5]);
							row.put("SKY", strs[6]);
							row.put("PRE", strs[7]);
							row.put("CONF", "");//깨진문자인지 특수문자라 DB입력실패함
							if(strs.length > 11) {
								row.put("WF", (strs[9]+strs[10]).replaceAll("\"", ""));
								row.put("RN_ST", strs[11]);
							}else {
								row.put("WF", strs[9].replaceAll("\"", ""));
								row.put("RN_ST", strs[10]);
							}
							reList.add(row);
						}
					}
				}
			}else if("MEDM_REG".equalsIgnoreCase(gubun)) {
				Map reMap = u.getWebPageString("https://apihub.kma.go.kr/api/typ01/url/fct_medm_reg.php?tmfc=0&authKey=CxU6NEKFRnWVOjRChYZ1iA","EUC-KR");
				List list = (List)reMap.get("LIST");
				for(int i=0; i < list.size(); i++) {
					String rLine = (String)list.get(i);
					String[] strs = rLine.split("\\s+");
					if(strs.length > 4 && strs[2].length() == 12) {
						Map row = new HashMap();
						row.put("REG_ID", strs[0]);
						row.put("TM_ST", strs[1]);
						row.put("TM_ED", strs[2]);
						row.put("REG_SP", strs[3]);
						row.put("REG_NAME", strs[4]);
						reList.add(row);
					}
				}
			}else if("AFS_DL".equalsIgnoreCase(gubun)) {
				Map reMap = u.getWebPageString("https://apihub.kma.go.kr/api/typ01/url/fct_afs_dl.php?disp=1&help=1&authKey=CxU6NEKFRnWVOjRChYZ1iA","EUC-KR");
				List list = (List)reMap.get("LIST");
				for(int i=0; i < list.size(); i++) {
					String rLine = (String)list.get(i);
					String[] strs = rLine.split(",");
					if(strs.length > 16) {
						Map row = new HashMap();
						row.put("REG_ID", 	strs[0]);
						row.put("TM_FC", 	strs[1]);
						row.put("TM_EF", 	strs[2]);
						row.put("MOD_KEY", 	strs[3]);
						row.put("NE", 		strs[4]);
						row.put("STN", 		strs[5]);
						row.put("C", 		strs[6]);
						row.put("MAN_ID", 	strs[7]);
						row.put("MAN_FC", 	strs[8]);
						row.put("W1", 		strs[9]);
						row.put("T", 		strs[10]);
						row.put("W2", 		strs[11]);
						row.put("TA", 		strs[12]);
						row.put("ST", 		strs[13]);
						row.put("SKY", 		strs[14]);
						row.put("PREP", 	strs[15]);
						row.put("WF", 		strs[16]);
						reList.add(row);
					}
				}
			}
			
			
			
			
		}catch(Exception e) {
			e.printStackTrace();
		}
		return reList;
	}
}
