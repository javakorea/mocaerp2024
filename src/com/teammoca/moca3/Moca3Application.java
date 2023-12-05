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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class Moca3Application {
	@Autowired
	private SqlSession sqlSession;
	@CrossOrigin("*") //2023-11-28
	//게시판 목록조회
	@RequestMapping("/selectBoardList.do")
	public Map<String, Object> selectBoardList(@RequestBody Map<String, HashMap<String,Object>> param) {
		Map<String,Object> searchMap = (Map<String,Object>) param.get("dma_search");
		//String boardType = (String) searchMap.get("BOARD_TYPE"); 
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
	
	public static void main(String[] args) {
		SpringApplication.run(Moca3Application.class, args);
	}


   /*
    @RequestMapping(value="/api/v1/oauth2/google")
    public String loginUrlGoogle(){
        String reqUrl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + googleClientId
                + "&redirect_uri=http://localhost:8080/api/v1/oauth2/google&response_type=code&scope=email%20profile%20openid&access_type=offline";
        return reqUrl;
    }
*/
    
    
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
