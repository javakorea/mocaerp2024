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
    public List<Map<String,Object>> selectAnyList(HashMap param);
    public List<Map<String,Object>> selectBoardList(HashMap param);
    public Map<String,Object> selectBoardInfo(HashMap param);
    public List<Map<String,Object>> selectBoardFileList(HashMap param);
    public Map<String,Object> insertBoardInfo(HashMap param);
    public Map<String,Object> updateBoardInfo(HashMap param);
}
