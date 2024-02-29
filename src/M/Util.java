package M;

import java.awt.Font;
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;

import org.json.simple.parser.JSONParser;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.xml.sax.SAXException;

import net.coobird.thumbnailator.Thumbnails;
import websquare.logging.util.LogUtil;
import websquare.util.XMLUtil;


public class Util {
	public static int ROWS_PER_PAGE = 1000;
	//public static int MAX_ROW_COUNT = 65536;
	public static int MAX_ROW_COUNT = 1000000;
	
	

	public static Boolean empty(Object obj) {
		if( obj instanceof String ) {
			if( obj == null ||  "".equals(obj.toString().trim())  ) {
				return true;
			}else {
				return false;
			}
		}else {
			if( obj == null  ) {
				return true;
			}else {
				return false;
			}
		}
	};
	
	public static Boolean notEmpty(Object obj) {
		return !empty(obj);
	};
	
	//엑셀전용
	public static Map commonParamSetter(Document requestObj, HttpServletRequest request) throws Exception{
		String COMMON_SERVICE_NAME = XMLUtil.getText(requestObj, "COMMON_SERVICE_NAME");
		String COMMON_METHOD_NAME = XMLUtil.getText(requestObj, "COMMON_METHOD_NAME");
		String queryId = XMLUtil.getText(requestObj, "COMMON_QUERY_ID");
		String keyMap = XMLUtil.getText(requestObj, "COMMON_KEYMAP");
		Map wsreq = new HashMap();
		Map ParamVO = new HashMap();
		JSONParser parser = new JSONParser();
		Map COMMON_PARAM = (Map) parser.parse(XMLUtil.getText(requestObj, "COMMON_PARAM"));
		ParamVO.putAll(COMMON_PARAM);
		ParamVO.put("COMMON_KEYMAP", keyMap);
		
		setCommonParam(request, COMMON_SERVICE_NAME, COMMON_METHOD_NAME, ParamVO);
		
		wsreq.put("ParamVO",ParamVO);
		
		return wsreq;
	}
	
	public static Map commonParamSetter(Map<String, Object> wsreq, HttpServletRequest request) throws Exception{
		Map ParamVO = (Map) wsreq.get("ParamVO");
		String COMMON_SERVICE_NAME = (String)ParamVO.get("COMMON_SERVICE_NAME");
		String COMMON_METHOD_NAME = (String)ParamVO.get("COMMON_METHOD_NAME");
		
		LogUtil.info("serviceName: " + COMMON_SERVICE_NAME);
		LogUtil.info("methodName: " + COMMON_METHOD_NAME);
		//LogUtil.info("wsreq: " + wsreq);
		
		
		if(COMMON_SERVICE_NAME == null || COMMON_SERVICE_NAME.equals(""))
		{
			throw new Exception("필수 파라메터 serviceName이 존재하지 않습니다.\n잘못된 요청입니다.");
		}

		if(COMMON_METHOD_NAME == null || COMMON_METHOD_NAME.equals(""))
		{
			throw new Exception("필수 파라메터 methodName이 존재하지 않습니다.\n잘못된 요청입니다.");
		}
		
		
		setCommonParam(request, COMMON_SERVICE_NAME, COMMON_METHOD_NAME, ParamVO);
		
		
		String common_start = "";
		if(ParamVO.get("COMMON_START") == null  || "".equals(ParamVO.get("COMMON_START").toString().trim()) ) {
			common_start = "1";
		}else {
			common_start = ParamVO.get("COMMON_START").toString();
		}
		ParamVO.put("COMMON_START", Integer.parseInt(common_start));
		
		String start = "";
		if(ParamVO.get("START") != null) {
			start = ParamVO.get("START").toString();
		}
		if(start == null || "".equals(start.trim())) {
			start = "1";
			ParamVO.put("START", Integer.parseInt(start));
		}
		
		String _ROWS_PER_PAGE = "";
		if(ParamVO.get("COMMON_ROWS_PER_PAGE") == null  || "".equals(ParamVO.get("COMMON_ROWS_PER_PAGE").toString().trim()) ) {
			_ROWS_PER_PAGE = ROWS_PER_PAGE+"";
		}else {
			_ROWS_PER_PAGE = ParamVO.get("COMMON_ROWS_PER_PAGE").toString();
		}
		String end = (Integer.parseInt(start) + Integer.parseInt(_ROWS_PER_PAGE))+"";
		String commmon_end = (Integer.parseInt(common_start) + Integer.parseInt(_ROWS_PER_PAGE))+"";
		ParamVO.put("END", Integer.parseInt(end));
		ParamVO.put("COMMON_END",Integer.parseInt(commmon_end));
		
		wsreq.put("ParamVO",ParamVO);
		//LogUtil.info("ParamVO::"+ParamVO);
		return wsreq;
	};
	
	private static void setCommonParam(HttpServletRequest request, String COMMON_SERVICE_NAME,
			String COMMON_METHOD_NAME, Map ParamVO) {
		String logUserId = (String)request.getSession().getAttribute("USER_ID");
		
		Enumeration en = request.getSession().getAttributeNames();
		while(en.hasMoreElements()) {
			String key = (String)en.nextElement();
			Object val = request.getSession().getAttribute(key);
			ParamVO.put("GB_"+key.toUpperCase(), val.toString());
		}
		Object GLOBALUSERINFOLIST = request.getSession().getAttribute("globalUserInfoList");
		int size = 0;
		Map userRow = new HashMap();
		if(GLOBALUSERINFOLIST != null) {
			List list = (List)GLOBALUSERINFOLIST;
			if(list.size() > 0) {
				userRow = (Map)list.get(0);
			}
		}
		Set st = userRow.keySet();
		Iterator it = st.iterator();
		while(it.hasNext()) {
			String key = (String)it.next();
			Object val = userRow.get(key);
			if(val == null) {
				ParamVO.put("SS_"+key, "");
			}else {
				ParamVO.put("SS_"+key, val.toString());
			}
		}
		
		
		
		String  REQUEST_IP = request.getHeader("x-forwarded-for");
		String  remoteAddr = request.getRemoteAddr();
		LogUtil.info("remoteAddr::::::::::"+remoteAddr);
		LogUtil.info("REQUEST_IP::::::::::"+REQUEST_IP);
		if(REQUEST_IP == null || "".equals(REQUEST_IP)) {
			REQUEST_IP = "";
			if(remoteAddr != null) {
				REQUEST_IP = remoteAddr;
			}				
		}
	
		LogUtil.info("REQUEST_IP3::::::::::"+REQUEST_IP);
		ParamVO.put("REQUEST_IP", REQUEST_IP);
		//ParamVO.put("USER_ID", logUserId);
		ParamVO.put("SESSION_USER_ID", logUserId);
		//ParamVO.put("SAYONGJA_ID", logUserId);
		ParamVO.put("CLASS_NM", COMMON_SERVICE_NAME);
		ParamVO.put("METHOD_NM", COMMON_METHOD_NAME);
		ParamVO.put("COMMON_SERVICE_NAME", COMMON_SERVICE_NAME);
		ParamVO.put("COMMON_METHOD_NAME", COMMON_METHOD_NAME);
		
		
		request.setAttribute("REQUEST_IP", REQUEST_IP);
		request.setAttribute("CLASS_NM", COMMON_SERVICE_NAME);
		request.setAttribute("METHOD_NM", COMMON_METHOD_NAME);
		request.setAttribute("LOGIN_ID", logUserId);
		request.setAttribute("COMMON_REQUEST_MENU_CODE", ParamVO.get("COMMON_REQUEST_MENU_CODE"));
		
		
		//SERVER_IP
		String SERVER_IP = null;
		try {
			SERVER_IP = InetAddress.getLocalHost().getHostAddress();
		} catch (UnknownHostException e) {
			SERVER_IP = "";
		}
		ParamVO.put("SERVER_IP", SERVER_IP);
	};	
	
	
	public static Map websquareToDongwonFileInfo (Map data) throws Exception{
		String fileUploadPath = Util.getWsConfig("upload/baseDir");
		String maxUploadSize = Util.getWsConfig("upload/maxUploadSize");
        
        LogUtil.info("websquareToDongwonFileInfo data:"+data);
        LogUtil.info("websquareToDongwonFileInfo fileUploadPath:"+fileUploadPath);
        LogUtil.info("websquareToDongwonFileInfo maxUploadSize:"+maxUploadSize);
		Map websquareToDongwon = new HashMap();
		websquareToDongwon.put("fileUploadPath", fileUploadPath);
		
		String fileGroupSeq = null;
		if(data.get("FILE_GRP_SEQ") != null) {
			fileGroupSeq = data.get("FILE_GRP_SEQ").toString();
			LogUtil.info("websquareToDongwonFileInfo fileGroupSeq:"+fileGroupSeq);
			websquareToDongwon.put("fileGroupSeq", fileGroupSeq);	
		}

		LogUtil.info("websquareToDongwonFileInfo FILE_STORED_PATH:"+data.get("FILE_STORED_PATH"));
		String savePath = File.separator + data.get("FILE_STORED_PATH").toString();
		LogUtil.info("websquareToDongwonFileInfo savePath:"+savePath);
		websquareToDongwon.put("savePath", savePath);
		
		String saveName = data.get("STORED_FILE_NM").toString();
		LogUtil.info("websquareToDongwonFileInfo saveName:"+saveName);
		websquareToDongwon.put("saveName", saveName);
		
		String fileName = data.get("ORIGIN_FILE_NM").toString();
		LogUtil.info("websquareToDongwonFileInfo fileName:"+fileName);
		websquareToDongwon.put("fileName", fileName);
		
		int lidx = fileName.lastIndexOf(".");
		String fileExt = fileName.substring(lidx+1);
		LogUtil.info("websquareToDongwonFileInfo fileExt:"+fileExt);
		websquareToDongwon.put("fileExt", fileExt);
		
		
		String fileSize = data.get("FILE_SIZE").toString();
		LogUtil.info("websquareToDongwonFileInfo fileSize:"+fileSize);
		websquareToDongwon.put("fileSize", fileSize);	
		LogUtil.info("websquareToDongwonFileInfo savePath:"+savePath);
		
		String fileFullPath = fileUploadPath+File.separator+ savePath+File.separator+saveName;
		websquareToDongwon.put("fileFullPath", fileFullPath);
		LogUtil.info("websquareToDongwonFileInfo fileFullPath:"+fileFullPath);
		Path source = Paths.get(fileFullPath);
		String fileContentType = Files.probeContentType(source);
		LogUtil.info("websquareToDongwonFileInfo fileContentType:"+fileContentType);
		
		websquareToDongwon.put("fileContentType", fileContentType);
		
		
		String rowStatus = (String) data.get("rowStatus");
		websquareToDongwon.put("rowStatus", rowStatus);
		return websquareToDongwon;
	}

	public static String getWsConfig(String _path) throws ParserConfigurationException, SAXException, IOException, XPathExpressionException {
		return getWsConfig(_path,null);
	}
	public static String getWsConfig(String _path,String _type)
			throws ParserConfigurationException, SAXException, IOException, XPathExpressionException {
		String websquareXmlPath = System.getProperty("WEBSQUARE_HOME")+File.separator+"config"+File.separator+"websquare.xml";
		//C:\_dongwon\workspace\HffgWebApp\websquare_home\config\websquare.xml
		LogUtil.config("websquareToDongwonFileInfo websquareXmlPath:"+websquareXmlPath);
		File file = new File(websquareXmlPath);
        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        DocumentBuilder db = dbf.newDocumentBuilder();
        Document document = db.parse(file);
        document.getDocumentElement().normalize();
        
        XPath xpath = XPathFactory.newInstance().newXPath();
        Node fileUploadNODE = (Node)xpath.evaluate("//websquare/"+_path, document, XPathConstants.NODE);
        if(_type == null) {
        	return fileUploadNODE.getAttributes().getNamedItem("value").getTextContent();
        }else {
        	return fileUploadNODE.getFirstChild().getNodeValue().replaceAll("^\\s+|\\s+$", "");
        }
	}
	
	
	
		
	public static File carateThumbNail(String uploadPath, String uploadFileNm, String thumbnailFileNm, int width, int height) {
		File thumbnailFile = new File(uploadPath, thumbnailFileNm);
		File saveFile = new File(uploadPath, uploadFileNm);
		try {
			//BufferedImage bo_img = ImageIO.read(saveFile);
			//double ratio = 3;
			//int width = (int) (bo_img.getWidth() / ratio);
			//int height = (int) (bo_img.getHeight() / ratio);
			Thumbnails.of(saveFile).size(width, height).toFile(thumbnailFile);
		} catch(IOException e) {
			System.out.println(e.getMessage());
		}
		return thumbnailFile;
	};

	public static String getServerGubun() {
		String gbn = System.getProperty("SERVER_GUBUN");
		if(gbn == null) {
			gbn = "L";//로컬을 디폴트
		}
		return gbn;
	};
	
	

}
