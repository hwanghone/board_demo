package com.example.demo2.repository;

import com.example.demo2.dto.BoardListResponseDto;
import com.example.demo2.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Board, Long> {
  List<BoardListResponseDto> findAllByOrderByModifiedAtDesc();
}