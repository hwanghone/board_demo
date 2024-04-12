package com.test.demo.controller;

import com.test.demo.service.IpService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Slf4j
@Controller
@RequestMapping("/order")
@RequiredArgsConstructor
public class OrderController {

    private final IpService boardService;

    @GetMapping("/vpn-history")
    public String vpnHistory() {
      return "order/vpn-history";
    }

    @GetMapping("/ticket-history")
    public String ticketHistory() {
        return "order/ticket-history";
    }

    @GetMapping("/fail")
    public String fail() {
        return "order/fail";
    }

    @GetMapping("/cancel")
    public String cancel() {
        return "order/cancel";
    }


}
