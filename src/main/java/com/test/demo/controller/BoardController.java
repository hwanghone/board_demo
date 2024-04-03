package com.test.demo.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.*;

@Slf4j
@Controller
@RequestMapping("board")
public class BoardController {

  @GetMapping("/firstpage")
  public String boardText(){

//        List<Integer> list = new ArrayList<>();
//        list.add(0);
//        list.add(1);
//        list.add(2);

      //TODO: list를 100개를 담고 출력 하시오.
      List<Integer> list = new ArrayList<>();
      for (int i = 0; i <= 100; i++){
        list.add(i);
      }

      log.info("{}", list);






//      Map<String, Integer> map = new HashMap<>();
//      map.put("key1", 1);
//      map.put("key2", 2);
//      map.put("key3", 3);

    //TODO: Map을 100개를 담고 출력 하시오.
    Map<String, Integer> map = new LinkedHashMap<>();
    for (int i = 0; i <= 100; i++ ){
      map.put("key" + i, i);
    }

    log.info("{}", map);



    return "/board";
  }

}
