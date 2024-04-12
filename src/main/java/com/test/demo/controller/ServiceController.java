package com.test.demo.controller;

import com.test.demo.service.IpService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@Controller
@RequestMapping("/service")
@RequiredArgsConstructor
public class ServiceController {

    @GetMapping("/manage")
    public String manage() {
      return "service/manage";
    }

    @GetMapping("/history")
    public String history() {
        return "service/history";
    }

}
