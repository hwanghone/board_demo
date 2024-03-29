package com.example.demo2.service;

import com.example.demo2.dto.BoardListResponseDto;
import com.example.demo2.dto.BoardRequestDto;
import com.example.demo2.dto.BoardResponseDto;
import com.example.demo2.entity.Board;
import com.example.demo2.repository.BoardRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BoardService {
  private final BoardRepository boardRepository;
  // 글 생성
  public BoardResponseDto createBoard(BoardRequestDto requestDto) {
    Board board = new Board(requestDto);
    boardRepository.save(board);
    return new BoardResponseDto(board);
  }

  // 모든 글 가져오기
  public List<BoardListResponseDto> findAllBoard() {
    try{
      List<Board> boardList = boardRepository.findAll();

      List<BoardListResponseDto> responseDtoList = new ArrayList<>();

      for (Board board : boardList) {
        responseDtoList.add(
            new BoardListResponseDto(board)
        );
      }
      return responseDtoList;
    } catch (Exception e) {
//            throw new DBEmptyDataException("a");
    }
    return null;
  }

  // 글 하나 가져오기
  public BoardResponseDto findOneBoard(Long id) {
    Board board = boardRepository.findById(id).orElseThrow(
        () -> new IllegalArgumentException("조회 실패")
    );
    return new BoardResponseDto(board);
  }

  // 글 수정
  @Transactional
  public Long updateBoard(Long id, BoardRequestDto requestDto) {
    Board board = boardRepository.findById(id).orElseThrow(
        () -> new IllegalArgumentException("해당 아이디가 존재하지 않습니다.")
    );
    board.update(requestDto);
    return board.getId();
  }

  // 삭제
  @Transactional
  public Long deleteBoard(Long id) {
    boardRepository.deleteById(id);
    return id;
  }

  // 비밀번호 체크
  public boolean checkPassword(Long id, String inputPassword) {
    // 게시물 ID로 게시물을 조회합니다.
    Optional<Board> optionalBoard = boardRepository.findById(id);

    // 조회된 게시물이 존재하는지 확인합니다.
    if (optionalBoard.isPresent()) {
      Board board = optionalBoard.get();
      // 입력된 비밀번호와 게시물의 비밀번호를 비교하여 일치 여부를 반환합니다.
      return board.getPassword().equals(inputPassword);
    } else {
      // 조회된 게시물이 없을 경우 비밀번호가 일치하지 않는 것으로 처리합니다.
      return false;
    }
  }
}