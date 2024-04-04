package com.test.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class BoardDto {
  private String str;
  private int num;
  private boolean bool;

  public BoardDto (String str, int num, boolean bool){
    this.str = str;
    this.num = num;
    this.bool = bool;
  }

  @Override
  public String toString(){
//    return "str=\"" + str + "\", num=" + num + ", bool=" + bool;
      return "\"" + str + "\"" + ", num=" + num + ", bool=" + bool;
  }
}
