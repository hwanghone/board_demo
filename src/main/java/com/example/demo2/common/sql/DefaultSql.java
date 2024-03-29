package com.example.demo2.common.sql;

import jakarta.annotation.Resource;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class DefaultSql {

    @Resource
    private SqlSessionTemplate sqlSessionTemplate;

    //@Resource
    //private EntityManager em;

    private String nm = "com.example.source.";

    public List<Map<String, Object>> selectList(String name, Map<String, Object> param){
        return sqlSessionTemplate.selectList(nm+name , param);
    }

    public Map<String, Object> selectOne(String name, Map<String, Object> param){
        return sqlSessionTemplate.selectOne(nm+name , param);
    }

    public int delete(String name, Map<String, Object> param){
        return sqlSessionTemplate.delete(nm+name, param);
    }
    public int update(String name, Map<String, Object> param){
        return sqlSessionTemplate.update(nm+name, param);
    }
    public int insert(String name, Map<String, Object> param){
        return sqlSessionTemplate.insert(nm+name, param);
    }

}
