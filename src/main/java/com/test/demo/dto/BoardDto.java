package com.test.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardDto {
  private String userId;
  private int userPw;
  private String userName;

  public BoardDto(String userId, int userPw, String userName){
      this.userId = userId;
      this.userPw = userPw;
      this.userName = userName;
  }
}
