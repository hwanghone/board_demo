package com.test.demo.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@Controller
@RequestMapping("board")
public class BoardController {

  //  페이지 나타내기
  @GetMapping("/firstpage")
  public String boardText(){

    boardVoid();

    return "/board";
  }

  public void boardVoid(){
    System.out.println("DB insert");
  }


  //  페이지 이동 및 값 출력
  @GetMapping("/secondpage")
  public ModelAndView boardText2(ModelAndView mav, @RequestParam String testText){
    System.out.println("입력한 내용 :" + testText);
    log.info("입력한 내용 :" + testText);
    mav.setViewName("secondpage");

    return mav;
  }


//  @PostMapping(value = "/secondpage")
//  public ModelAndView boardText(ModelAndView mav, @RequestParam String testText){
//    System.out.println("입력한 내용 :" + testText);
//    mav.setViewName("secondpage");
//    return mav;
//  }



}
