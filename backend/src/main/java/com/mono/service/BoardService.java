package com.mono.service;

import com.mono.dto.BoardDto;
import com.mono.mapper.BoardMapper;
import com.mono.models.Board;
import com.mono.models.Project;
import com.mono.repository.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BoardService {

    private final BoardRepository boardRepository;
    private final BoardMapper boardMapper;


    @Autowired
    public BoardService(BoardRepository boardRepository, BoardMapper boardMapper){this.boardRepository = boardRepository; this.boardMapper = boardMapper;}

    public BoardDto createBoard(BoardDto dto){
         Board board = boardMapper.toEntity(dto);
         return boardMapper.toDto(boardRepository.save(board));
    }

    public List<BoardDto> getAllBoards(){
        return boardRepository.findAll().stream()
                .map(boardMapper::toDto)
                .toList();
    }

    public BoardDto getBoardById(Long id){
        Board findBoard = boardRepository.findById(id).orElseThrow(() -> new RuntimeException("Не удалось получить board"));
        return boardMapper.toDto(findBoard);
    }

    public BoardDto deleteBoard(Long id){
        Board findBoard = boardRepository.findById(id).orElseThrow(() -> new RuntimeException("По текущему id нет board"));
        if (findBoard != null) {
            boardRepository.deleteById(id);
            return boardMapper.toDto(findBoard);
        }
        return null;
    }

}
