package com.teammoca.moca3;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Repository
@Mapper
public interface Moca3Mapper {
    /**
     * @return
     */
    public List<Map<String,Object>> selectAnyList(HashMap<String,String> param);
    public List<Map<String,Object>> selectBoardList(HashMap<String,String> param);
    public Map<String,Object> selectBoardInfo(HashMap<String,String> param);
    public List<Map<String,Object>> selectBoardFileList(HashMap<String,String> param);
    public Map<String,Object> insertBoardInfo(HashMap<String,String> param);
    public Map<String,Object> updateBoardInfo(HashMap<String,String> param);
}
