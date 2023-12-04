package com.teammoca.moca3;

import org.w3c.dom.Document;
import websquare.http.controller.grid.excel.write.IExternalSplitProvider;
 
//그리드뷰 컬럼이 40개인 경우, 12만 row 엑셀파일을 생성하는 예제
public class SplitProvider implements IExternalSplitProvider {
    int cnt = 0;
    int limtcnt = 1200;
    boolean isEnd = false;
     
    // getData에서 데이터 생성시 OutOfMemory 가 발생하지 않도록 적정선의 데이터를 생성하여 리턴
    public String[] getData(Document requestObj) throws Exception {
        String[] arr = new String[4000];
        for(int i=0; i<arr.length; i++) {
            arr[i] = "데이터" +  Integer.toString(this.cnt);
        }
        this.cnt++;
        if( this.cnt >= this.limtcnt ){
            this.isEnd = true;
        }
         
        return arr;// 100개 row씩 리턴
    }
 
    // sendCompleted 가 true를 리턴하면 getData() 를 더 호출하지 않고 종료된다
    public boolean sendCompleted() throws Exception {
        //System.out.println(Integer.toString(this.cnt*100) + "row 생성 ");
        return isEnd;
    }
}