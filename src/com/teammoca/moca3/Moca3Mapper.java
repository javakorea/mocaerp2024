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
}
