package com.example.demo2.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class BoardRequestDto {

  private String title;

  private String content;

  private String password;
}