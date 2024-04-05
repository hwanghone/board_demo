package com.test.demo.controller;

import com.test.demo.dto.BoardDto;
import com.test.demo.service.BoardService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
//@RestController
@Controller
@RequiredArgsConstructor
@RequestMapping
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/page1")
    public String board(){
      return "/page1";
    }

    @PostMapping("/page2")
    public ResponseEntity<?> boardlist (BoardDto boardDto){
        return ResponseEntity.ok().body(boardService.pageservice(boardDto));
    }

}
