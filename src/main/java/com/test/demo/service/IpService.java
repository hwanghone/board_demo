package com.test.demo.service;

import com.test.demo.dto.IpDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class IpService {

//  public ResponseEntity<?> pageservice(BoardDto boardDto){
//    return ResponseEntity.ok().body(boardDto);
//  }

    public IpDto pageservice(IpDto ipDto){
      return ipDto;
    }
}
