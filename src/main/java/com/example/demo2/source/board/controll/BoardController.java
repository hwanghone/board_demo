package com.example.demo2.source.board.controll;

import com.example.demo2.source.board.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Map;

@Slf4j
@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    public BoardService boardService;

    @GetMapping("")
    public String meneList(@RequestParam Map<String, Object> param, Model model) {
        log.debug("board 리스트 조회");
        List<Map<String, Object>> board = boardService.boardList(param);
        model.addAttribute("board", board);
        return "board";
    }
}
