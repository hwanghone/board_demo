package com.test.demo.controller;

import com.test.demo.dto.IpDto;
import com.test.demo.service.IpService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Controller
@RequestMapping
@RequiredArgsConstructor
public class IpController {

    private final IpService boardService;

    @GetMapping("/ipInfo")
    public String ipInfo() {
      return "ipInfo";
    }

    @GetMapping("/ipInfo2")
    public String ipInfo2() {
        return "ipInfo2";
    }

    @PostMapping("/ipRead")
    public ResponseEntity<?> ipList (IpDto ipDto) {
        log.info("IpDto: {}", ipDto);
        return ResponseEntity.ok().body(boardService.pageservice(ipDto));
    }

}
