package com.test.demo.service;

import com.test.demo.dto.BoardDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BoardService {

//  public ResponseEntity<?> pageservice(BoardDto boardDto){
//    return ResponseEntity.ok().body(boardDto);
//  }

    public BoardDto pageservice(BoardDto boardDto){
      return boardDto;
    }
}
