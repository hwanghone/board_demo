package com.example.demo2.source.board.repository;

import com.example.demo2.common.sql.DefaultSql;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class BoardRepository extends DefaultSql {

    private String sqlNm = "BoardRepository.";

    /**
     * 곻지사항 리스트
     * @param paramMap
     * @return
     */
    public List<Map<String, Object>> menuList(Map<String, Object> paramMap){
        return selectList(this.sqlNm+"findBoard",paramMap);
    }


}
