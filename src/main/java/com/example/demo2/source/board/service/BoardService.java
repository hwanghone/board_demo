package com.example.demo2.source.board.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo2.source.board.repository.BoardRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Slf4j
@Service
@Transactional
public class BoardService {

    @Autowired
    public BoardRepository boardRp;


    public List<Map<String, Object>> boardList(Map<String, Object> paramMap){
        List<Map<String, Object>> rtn = boardRp.menuList(paramMap);

        log.info(" d: " + rtn.get(0).get("TITLE"));


        return rtn;
    }

}
