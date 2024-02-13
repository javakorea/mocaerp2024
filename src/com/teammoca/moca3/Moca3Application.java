package com.teammoca.moca3;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@EnableScheduling
@SpringBootApplication
@Service("Moca3Application")
public class Moca3Application {
	@Autowired
	private SqlSession sqlSession;
	@CrossOrigin("*") //2023-11-28
	//게시판 목록조회
	@RequestMapping("/selectBoardList.do")
	public Map<String, Object> selectBoardList(@RequestBody Map<String, HashMap<String,Object>> param) {
		Map<String,Object> searchMap = (Map<String,Object>) param.get("dma_search");
		searchMap.put("BOARD_CONT", util.strToArr((String)searchMap.get("BOARD_CONT")," "));
		Map<String, Object> resultMap = new HashMap<String,Object>();
		List<Map<String,Object>> list = sqlSession.selectList("M.selectBoardList", searchMap);
		resultMap.put("dlt_list", list);
		return resultMap;
	}
	
	//게시판 단건조회
	@RequestMapping("/selectBoardInfo.do")
	public Map<String, Object> selectBoardInfo(@RequestBody Map<String, Map<String,Object>> param) {
		Map<String, Object> searchMap = (Map<String, Object>) param.get("dma_search");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String,Object> map = sqlSession.selectOne("M.selectBoardInfo", searchMap);
		resultMap.put("dma_boardInfo", map);
		return resultMap;
	}
	
	//게시판 첨부파일조회
	@RequestMapping("/selectBoardFileList.do")
	public Map<String, Object> selectBoardFileList(@RequestBody Map<String, Map<String,Object>> param) {
		Map<String, Object> searchMap = (Map<String, Object>) param.get("dma_search");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		List<Map<String,Object>> list = sqlSession.selectList("M.selectBoardFileList", searchMap);
		resultMap.put("dlt_boardFile", list);
		return resultMap;
	}
	
	//게시판등록
	@RequestMapping("/insertBoardInfo.do")
	public Map<String,Object> insertBoardInfo(@RequestBody Map<String, Map<String,Object>> param) {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		try {
			Map<String,Object> searchMap = (Map<String,Object>) param.get("dma_search");
			int map = sqlSession.insert("M.insertBoardInfo", searchMap);
			resultMap.put("cnt", map);
			resultMap.put("status", "S");
			resultMap.put("Message", "정상적으로 등록 되었습니다.");
			
			System.out.println("board_idx:"+searchMap.get("BOARD_IDX")+"board_pidx:"+searchMap.get("BOARD_PIDX")+",map:"+map);
			if(searchMap.get("BOARD_PIDX") == null || searchMap.get("BOARD_PIDX") == "" ) {
				searchMap.put("BOARD_PIDX", searchMap.get("BOARD_IDX"));
				sqlSession.update("M.updateBoardInfo", searchMap);
			}
		}catch(Exception e) {
				e.printStackTrace();
				resultMap.put("status", "E");
				resultMap.put("Message",e.getMessage());
		}
		return resultMap;
	}
	
	//게시판 단건 수정
	@RequestMapping("/updateBoardInfo.do")
	public Map<String,Object> updateBoardInfo(@RequestBody Map<String, Map<String,Object>> param) {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		int cnt = 0;
		try {
			Map<String,Object> searchMap = (Map<String,Object>) param.get("dma_search");
			String status = (String) searchMap.get("STATUS");
			if (status.equals("U")) {
				cnt = sqlSession.update("M.updateBoardInfo", searchMap);
			}else if(status.equals("D")) {
				cnt = sqlSession.delete("M.deleteBoard", searchMap);
			}
			resultMap.put("cnt", cnt);
			resultMap.put("status", "S");
			resultMap.put("Message", "정상적으로 처리 되었습니다.");
		}catch(Exception e) {
				e.printStackTrace();
				resultMap.put("status", "E");
				resultMap.put("Message",e.getMessage());
		}
		return resultMap;
	};
	
	@RequestMapping("/updateBoardList.do")
	public @ResponseBody Map<String, Object> updateBoardList(@RequestBody Map<String, Object> param) {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		try {
			List<Map<String,Object>> dltList = (List<Map<String,Object>>) param.get("dlt_list");
			Map<String,Object> searchMap = (Map<String, Object>) param.get("dma_search");
			int uCnt = 0;
			int dCnt = 0;
			for (int i = 0; i < dltList.size(); i++) {
				Map<String,Object> data = (Map<String,Object>) dltList.get(i);
				String rowStatus = (String) data.get("rowStatus");
				if (rowStatus.equals("U")) {
					data.put("BOARD_TABLE",searchMap.get("BOARD_TABLE"));
					uCnt += sqlSession.update("M.updateBoardInfo", data);
					resultMap.put("UCNT", String.valueOf(uCnt));
				}else if(rowStatus.equals("D")) {
					data.put("BOARD_TABLE",searchMap.get("BOARD_TABLE"));
					dCnt += sqlSession.delete("M.deleteBoard", data);
					resultMap.put("DCNT", String.valueOf(dCnt));
				}
			}
			resultMap.put("status", "S");
			resultMap.put("Message", "정상적으로 처리 되었습니다.");
			
		}catch(Exception e) {
				e.printStackTrace();
				resultMap.put("status", "E");
				resultMap.put("Message",e.getMessage());
		}
		return resultMap;
	}
	
	//스케줄러 목록조회
	@RequestMapping("/selectScheduleList.do")
	public Map<String, Object> selectScheduleList(@RequestBody Map<String, HashMap<String,Object>> param) {
		Map<String,Object> searchMap = (Map<String,Object>) param.get("dma_search");
		Map<String, Object> resultMap = new HashMap<String,Object>();
		List<Map<String,Object>> list = sqlSession.selectList("M.selectScheduleList", searchMap);
		resultMap.put("dlt_list", list);
		return resultMap;
	}
	

		
	//스케줄러 단건조회
	@RequestMapping("/selectScheduleInfo.do")
	public Map<String, Object> selectScheduleInfo(@RequestBody Map<String, Map<String,Object>> param) {
		Map<String, Object> searchMap = (Map<String, Object>) param.get("dma_schdInfo");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String,Object> map = sqlSession.selectOne("M.selectScheduleInfo", searchMap);
		resultMap.put("dma_schdInfo", map);
		return resultMap;
	}
	
	//스케줄러 등록
	@RequestMapping("/insertSchedule.do")
	public Map<String,Object> insertSchedule(@RequestBody Map<String, Map<String,Object>> param) {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		try {
			Map<String,Object> searchMap = (Map<String,Object>) param.get("dma_schdInfo");
			int map = sqlSession.insert("M.insertSchedule", searchMap);
			resultMap.put("cnt", map);
			resultMap.put("status", "S");
			resultMap.put("Message", "정상적으로 등록 되었습니다.");
		}catch(Exception e) {
				e.printStackTrace();
				resultMap.put("status", "E");
				resultMap.put("Message",e.getMessage());
		}
		return resultMap;
	}
		
	//스케줄러 수정
	@RequestMapping("/updateSchedule.do")
	public Map<String,Object> updateSchedule(@RequestBody Map<String, Map<String,Object>> param) {
		Map<String,Object> resultMap = new HashMap<String,Object>();
		int cnt = 0;
		try {
			Map<String,Object> searchMap = (Map<String,Object>) param.get("dma_schdInfo");
			String status = (String) searchMap.get("STATUS");
			if (status.equals("U")) {
				cnt = sqlSession.update("M.updateSchedule", searchMap);
			}else if(status.equals("D")) {
				cnt = sqlSession.delete("M.deleteSchedule", searchMap);
			}
			resultMap.put("cnt", cnt);
			resultMap.put("status", "S");
			resultMap.put("Message", "정상적으로 처리 되었습니다.");
		}catch(Exception e) {
				e.printStackTrace();
				resultMap.put("status", "E");
				resultMap.put("Message",e.getMessage());
		}
		return resultMap;
	};
	
	
	

	//메인 티스토리 조회  
	@RequestMapping(value = "/main/selectTistroyList.do")
	public List<String> selectTistroyList(@RequestParam Map<String, Object> mocaMap) throws Exception {
		List<String> list = new ArrayList<String>();
		try {
			// 서비스 테스트용 구문 추가
			URL url = new URL("https://teammoca.tistory.com");
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
			String s = sb.toString();
			s = s.replaceAll("<a href=\"/", "<a target=\"_blank\" href=\"https://teammoca.tistory.com/");
			String ptnStr = "<div\\s+class=\"post-item\">.*?</div>";
			Pattern p = Pattern.compile(ptnStr,Pattern.CASE_INSENSITIVE | Pattern.DOTALL );
			Matcher m = p.matcher(s);
			while(m.find()) {
				list.add(m.group());
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
        return list;
	}
	
	// @Scheduled(cron = "0 15 10 15 * ?", zone = "Europe/Paris") // timezone 설정
    // 초(0-59) 분(0-59) 시간(0-23) 일(1-31) 월(1-12) 요일(0-7)
	// 매일 아침 7시마다 조회 (당일 일정 조회)
	@Scheduled(cron = "0 0 7 * * ?")
	public void scheduleTaskUsingCronExpression() throws Exception{
		Map<String, Object> resultMap = new HashMap<String,Object>();
		List<Map<String,Object>> scheduleList = sqlSession.selectList("M.selectTodaySchedule", new HashMap());
		try {
	    	if(scheduleList != null && scheduleList.size() > 0){
	    		for(int i=0;i < scheduleList.size() ;i++) {
	    			Map sendMap = (Map)scheduleList.get(i);
	    			System.out.println(sendMap);
			    	String _cont = sendMap.get("SCH_TITLE").toString();
			    	if(_cont.length() > 20) {
			    		_cont = _cont.substring(0,20)+"...";
			    	};
			    	String sendPhoneNum = "01091168072,01090789322";
			    	String _resultCode = API.sendSms(
			    			"[당일] "+
			    					sendMap.get("SCH_START").toString().substring(0, 16)+" "+
	    				_cont+" 일정",
	    				sendPhoneNum,
	    				sendMap.get("SCH_WRITER").toString()
			    	);
			    	
			    	System.out.println(_resultCode);
			    	JSONParser parser = new JSONParser();
			    	Object obj = parser.parse( _resultCode );
			    	JSONObject jsonObj = (JSONObject) obj;

			    	String code = jsonObj.get("result_code").toString();
			    	String name = (String) jsonObj.get("message");
			    	//System.out.println("code:"+code);
			    	//System.out.println("name:"+name);
			    	
			    	if(code.equals("1")){
			    		Map<String, Object> uMap = new HashMap<String, Object>();
						uMap.put("SCH_IDX", sendMap.get("SCH_IDX"));
						sqlSession.update("M.updateScheduleSendSmsYn", uMap);
			    	}
	    		}
	    	}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

	// 매일 아침 9시마다 조회 (내일 일정 조회)
	@Scheduled(cron = "0 0 9 * * ?")
	public void batchTomorrowScheduleAlarmSms() throws Exception{
		Map<String, Object> resultMap = new HashMap<String,Object>();
		List<Map<String,Object>> scheduleList = sqlSession.selectList("M.selectTomorrowSchedule", new HashMap());
		try {
			if(scheduleList != null && scheduleList.size() > 0){
	    		for(int i=0;i < scheduleList.size() ;i++) {
	    			Map sendMap = (Map)scheduleList.get(i);
	    			System.out.println(sendMap);
			    	String _cont = sendMap.get("SCH_TITLE").toString();
			    	if(_cont.length() > 20) {
			    		_cont = _cont.substring(0,20)+"...";
			    	};
			    	String sendPhoneNum = "01091168072,01090789322";
			    	String _resultCode = API.sendSms(
			    			"[1일전]\n"+
			    					sendMap.get("SCH_START").toString().substring(0, 16)+" "+
	    				_cont+" 일정",
	    				sendPhoneNum,
	    				sendMap.get("SCH_WRITER").toString()
			    	);
			    	System.out.println(_resultCode);
			    	JSONParser parser = new JSONParser();
			    	Object obj = parser.parse( _resultCode );
			    	JSONObject jsonObj = (JSONObject) obj;
			    	String code = jsonObj.get("result_code").toString();
			    	String name = (String) jsonObj.get("message");
			    	//System.out.println("code:"+code);
			    	//System.out.println("name:"+name);
	    		}
	    	}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	// 매일 아침 9시마다 조회 (3일전 일정 조회)
	@Scheduled(cron = "0 0 9 * * ?")
	public void batchThreeDaysScheduleAlarmSms() throws Exception{
		Map<String, Object> resultMap = new HashMap<String,Object>();
		List<Map<String,Object>> scheduleList = sqlSession.selectList("M.selectThreeDaysSchedule", new HashMap());
		try {
			if(scheduleList != null && scheduleList.size() > 0){
	    		for(int i=0;i < scheduleList.size() ;i++) {
	    			Map sendMap = (Map)scheduleList.get(i);
	    			System.out.println(sendMap);
			    	String _cont = sendMap.get("SCH_TITLE").toString();
			    	if(_cont.length() > 20) {
			    		_cont = _cont.substring(0,20)+"...";
			    	};
			    	String sendPhoneNum = "01091168072,01090789322";
			    	String _resultCode = API.sendSms(
			    			"[3일전]\n"+
			    					sendMap.get("SCH_START").toString().substring(0, 16)+" "+
	    				_cont+" 일정",
	    				sendPhoneNum,
	    				sendMap.get("SCH_WRITER").toString()
			    	);
			    	System.out.println(_resultCode);
			    	JSONParser parser = new JSONParser();
			    	Object obj = parser.parse( _resultCode );
			    	JSONObject jsonObj = (JSONObject) obj;
			    	String code = jsonObj.get("result_code").toString();
			    	String name = (String) jsonObj.get("message");
			    	//System.out.println("code:"+code);
			    	//System.out.println("name:"+name);
	    		}
	    	}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	// 매일 아침 9시마다 조회 (7일전 일정 조회)
	@Scheduled(cron = "0 0 9 * * ?")
	public void batchAWeekScheduleAlarmSms() throws Exception{
		Map<String, Object> resultMap = new HashMap<String,Object>();
		List<Map<String,Object>> scheduleList = sqlSession.selectList("M.selectAWeekSchedule", new HashMap());
		try {
			if(scheduleList != null && scheduleList.size() > 0){
	    		for(int i=0;i < scheduleList.size() ;i++) {
	    			Map sendMap = (Map)scheduleList.get(i);
	    			System.out.println(sendMap);
			    	String _cont = sendMap.get("SCH_TITLE").toString();
			    	if(_cont.length() > 20) {
			    		_cont = _cont.substring(0,20)+"...";
			    	};
			    	String sendPhoneNum = "01091168072,01090789322";
			    	String _resultCode = API.sendSms(
			    			"[7일전]\n"+
			    					sendMap.get("SCH_START").toString().substring(0, 16)+" "+
	    				_cont+" 일정",
	    				sendPhoneNum,
	    				sendMap.get("SCH_WRITER").toString()
			    	);
			    	System.out.println(_resultCode);
			    	JSONParser parser = new JSONParser();
			    	Object obj = parser.parse( _resultCode );
			    	JSONObject jsonObj = (JSONObject) obj;
			    	String code = jsonObj.get("result_code").toString();
			    	String name = (String) jsonObj.get("message");
			    	//System.out.println("code:"+code);
			    	//System.out.println("name:"+name);
	    		}
	    	}
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
	
	// 평일 아침 9시마다 주식개장알림
	@Scheduled(cron = "0 0 9 ? * MON-FRI")
	public void batchStockAlarmSms() throws Exception{
		//batchStockAlarmSms
		try {
	    	String _resultCode = API.sendSms(
	    			"안녕하세요!"+ "오전 9시 주식 개장시간입니다",
				"01090789322,01091168072",
				"superadmin"
	    	);
	    	//System.out.println(_resultCode);
		}catch(Exception e) {
			e.printStackTrace();
		}
	}
		
	public static void main(String[] args) {
		SpringApplication.run(Moca3Application.class, args);
	}
	
}


class util {
	public static String[] strToArr(String str,String sepa) {
		if(str == null || "".equals(str.trim())) {
			return null;
		}else {
			String strIssuer = str.trim();
			String[] arrIssuer = strIssuer.split(sepa);
			return arrIssuer;	
		}
	};
}
