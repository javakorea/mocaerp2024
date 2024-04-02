package M;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
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
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import websquare.logging.util.LogUtil;

@RestController
@EnableScheduling
@SpringBootApplication
@Service("Moca3Application")
public class Moca3Application {
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
	
	
	public static String COMMON_MASTER_QUERY = "COMMON_MASTER_QUERY";
	public static String COMMON_MASTER_KEY = "COMMON_MASTER_KEY";
	public static String COMMON_DETAIL_KEY = "COMMON_DETAIL_KEY";
	public static String COMMON_MASTER_RESULT = "COMMON_MASTER_RESULT";
	public static String COMMON_DETAIL_RESULT = "COMMON_DETAIL_RESULT";
	public static String COMMON_PARAM_MAP = "COMMON_PARAM_MAP";
	public static String COMMON_PARAM_LIST = "COMMON_PARAM_LIST";
	
	public static String COMMON_RESULT = "COMMON_RESULT";
	
	
	
	@Autowired
	private SqlSession ss;

	
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
		
		String COMMON_MASTER_QUERY 			= String.valueOf(dma_common.get(this.COMMON_MASTER_QUERY));
		String MASTER_KEY_NM 				= String.valueOf(dma_common.get(this.COMMON_MASTER_KEY));
		String DETAIL_KEY_NM 				= String.valueOf(dma_common.get(this.COMMON_DETAIL_KEY));
		String COMMON_MASTER_DELETEQUERY 	= String.valueOf(dma_common.get(this.COMMON_MASTER_DELETEQUERY));
		String COMMON_DETAIL_INSERTQUERY 	= String.valueOf(dma_common.get(this.COMMON_DETAIL_INSERTQUERY));
		String COMMON_DETAIL_UPDATEQUERY 	= String.valueOf(dma_common.get(this.COMMON_DETAIL_UPDATEQUERY));
		String COMMON_DETAIL_DELETEQUERY 	= String.valueOf(dma_common.get(this.COMMON_DETAIL_DELETEQUERY));
		Map COMMON_RESULT_MAP = new HashMap(); 
			Map resultMap = new HashMap();
			if(!"".equals(COMMON_MASTER_QUERY)) {
				int re1 = ss.insert(COMMON_MASTER_QUERY, dma_common);
				resultMap.put(this.COMMON_MASTER_RESULT, re1);
			}
			Map result = new HashMap();
			
			
			List dlt_common = (List) param.get(this.DETAIL_LiST);
			if(dlt_common != null) {
				int sz = dlt_common.size();
				for(int i=0; i < sz; i++) {
					Map row = (Map)dlt_common.get(i);
					if(MASTER_KEY_NM != null) {
						row.put(DETAIL_KEY_NM,	String.valueOf(dma_common.get(MASTER_KEY_NM)));
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
			resultMap.put(this.COMMON_DETAIL_RESULT, result);
			resultMap.put(this.COMMON_PARAM_MAP, dma_common);
		COMMON_RESULT_MAP.put(this.COMMON_RESULT, resultMap);
		u.setSuccessMsg(COMMON_RESULT_MAP);
		return COMMON_RESULT_MAP;
	};
	
	
	
	//스케줄러 목록조회
	@RequestMapping("/selectScheduleList.do")
	public Map selectScheduleList(@RequestBody Map param) {Map searchMap = (Map) param.get("dma_search");Map resultMap = new HashMap();List list = ss.selectList("M.selectScheduleList", searchMap);resultMap.put("dlt_list", list);return resultMap;}
	//스케줄러 단건조회
	@RequestMapping("/selectScheduleInfo.do")
	public Map selectScheduleInfo(@RequestBody Map param) {Map searchMap = (Map) param.get("dma_schdInfo");Map resultMap = new HashMap();Map map = ss.selectOne("M.selectScheduleInfo", searchMap);resultMap.put("dma_schdInfo", map);return resultMap;}
	

	
	
	
	
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
			e.printStackTrace();
		}finally {
			if(in != null) {
				in.close();
			}
			if(outs != null) {
				outs.flush();
				outs.close();		
			}
		}
			
		/*	
		File file = new File( (String)fileInfoMap.get("PATH"));
		response.setContentType("application/octet-stream; charset=utf-8");
		response.setContentLength((int) file.length());
		String browser = getBrowser(request);
		String disposition = getDisposition((String)fileInfoMap.get("FILE_NM"), browser);
		response.setHeader("Content-Disposition", disposition);
		response.setHeader("Content-Transfer-Encoding", "binary");
		OutputStream out = response.getOutputStream();
		FileInputStream fis = null;
		fis = new FileInputStream(file);
		FileCopyUtils.copy(fis, out);
		mocaEFLService.insertList_EFL_CAFL_DOWN_H(map);
		if (fis != null)
			fis.close();
		out.flush();
		out.close();
		*/
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
	
	
	
	

	//메인 티스토리 조회  
	@RequestMapping(value = "/main/selectTistroyList.do")
	public List selectTistroyList(@RequestParam Map mocaMap) throws Exception {
		String s = u.getWebPageString("https://teammoca.tistory.com");
		
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

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//매일 아침 7시 조회 (당일 일정 조회)
	@Scheduled(cron="0 0 7 * * ?")public void _0_0_7_A_A_Q() throws Exception{u.exeBatch("M.selectTodaySchedule","당일",ss);}
	//매일 아침 9시 조회 (내일,3일전,7일전 일정 조회)
	@Scheduled(cron="0 0 9 * * ?")public void _0_0_9_A_A_Q() throws Exception{u.exeBatch("M.selectTomorrowSchedule","1일전",ss);u.exeBatch("M.selectThreeDaysSchedule","3일전",ss);u.exeBatch("M.selectAWeekSchedule","7일전",ss);u.exeBatch("M.selectNotSuccessSchedule","미처리",ss);}
	//월~금 아침 9시 (고정알림)
	//
	@Scheduled(cron = "0 0 9 ? * MON-FRI")public void _0_0_9_Q_A_MON_FRI() throws Exception{u.exeSms("안녕하세요! 오전9시 주식개장시간입니다",u.getSmsDefaultNumbers(null),"",null,ss,null);}
	//[테스트용] 매시30분 (고정알림) 
	//@Scheduled(cron = "0 30 * * * *")public void _0_30_A_A_A_A() throws Exception{u.exeSms("30분주기알림 테스트중입니다.",u.getSmsDefaultNumbers(null),"",null,ss);}	
	
		
	public static void main(String[] args) {
		SpringApplication.run(Moca3Application.class, args);
	}
	
}


























































class u {
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
	
	public static String getWebPageString(String _url) throws MalformedURLException, IOException, UnsupportedEncodingException {
		URL url = new URL(_url);
		URLConnection conn = url.openConnection();
		InputStream is = conn.getInputStream();
		InputStreamReader in = new InputStreamReader(is, "UTF-8");
		BufferedReader br = new BufferedReader(in);
		StringBuffer sb = new StringBuffer();
		String rLine = null;
		while((rLine = br.readLine()) != null)
		{
			sb.append(rLine);
		}
        return sb.toString();
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
		List list = ss.selectList((String)searchMap.get("COMMON_QUERY"), searchMap);
		resultMap.put("dlt_list", list);
		return resultMap;
	};
}
