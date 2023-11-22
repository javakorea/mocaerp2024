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
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

 

@RestController
@SpringBootApplication
public class Moca3Application {
	
	@Autowired
	private SqlSession sqlSession;
	
	@RequestMapping("/data")
	public Map index(){
		Map resultMap = new HashMap();
		List<Map<String,Object>> list = sqlSession.selectList("M.selectAnyList", new HashMap());
		System.out.println("리스트"+list);
		
		resultMap.put("dataList1", list);
		return resultMap;
	}
	
	public static String[] strToArr(String str,String sepa) {
		if(str == null || "".equals(str.trim())) {
			return null;
		}else {
			String strIssuer = str.trim();
			String[] arrIssuer = strIssuer.split(sepa);
			return arrIssuer;	
		}
	} 
	
	@RequestMapping("/selectBoardList.do")
	public Map selectBoardList(@RequestBody Map<String, Object> param) {
		
		Map searchMap = (Map) param.get("dma_search");
		//String boardType = (String) searchMap.get("BOARD_TYPE"); 
		System.out.println("searchMap"+searchMap);
		searchMap.put("BOARD_CONT", strToArr((String)searchMap.get("BOARD_CONT")," "));
		
		Map resultMap = new HashMap();
		List<Map<String,Object>> list = sqlSession.selectList("M.selectBoardList", searchMap);
		
		System.out.println("리스트222"+list);
		
		resultMap.put("dataList1", list);
		return resultMap;
	}
	
	//게시판 첨부파일조회
	@RequestMapping("/selectBoardFileList.do")
	public Map selectBoardFileList(@RequestBody Map<String, Object> param) {
		Map searchMap = (Map) param.get("dma_search");
		Map resultMap = new HashMap();
		List<Map<String,Object>> list = sqlSession.selectList("M.selectBoardFileList", searchMap);
		resultMap.put("dlt_boardFile", list);
		return resultMap;
	}
	
		
	//메인 티스토리 조회  
	@RequestMapping(value = "/main/selectTistroyList.do")
	public List selectTistroyList(@RequestParam Map<String, Object> mocaMap) throws Exception {
		List list = new ArrayList();
		try {
			//Map<String, Object> paramMap = Map(mocaMap)
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
			int i=0;
			while(m.find()) {
				list.add(m.group());
				i++;
			}
			System.out.println("list.size:"+list.size());
			//System.out.println("list:"+list);
		}catch(Exception e) {
			e.printStackTrace();
		}
        return list;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(Moca3Application.class, args);
	}

	@Bean
	public ServletRegistrationBean websquareDispatcher() {
		  ServletRegistrationBean reg = new ServletRegistrationBean();
		  reg.setServlet(new websquare.http.DefaultRequestDispatcher());
		  reg.addUrlMappings("*.wq"); 
		  reg.addInitParameter("WEBSQUARE_HOME","C:\\A_teammoca_repository\\eclipse_20231025\\mocaerp2024\\websquare_home");
		  return reg;
	}
	
}




