package com.mono.controllers;

import com.mono.dto.BoardDto;
import com.mono.models.Board;
import com.mono.service.BoardService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/board")
public class BoardController {
    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService){this.boardService = boardService;}

    @PostMapping
    public ResponseEntity<?> createBoard(@RequestBody BoardDto dto){
        try {
          BoardDto boardDto = boardService.createBoard(dto);
            return new ResponseEntity<>(boardDto, HttpStatus.CREATED);
        } catch (Exception err) {
            return ResponseEntity.badRequest().body("Не удалось создать проект!");
        }
    }


    @GetMapping
    public ResponseEntity<?> getAllBoards(){
        try {
            List<BoardDto> boards = boardService.getAllBoards();
            return new ResponseEntity<>(boards, HttpStatus.OK);
        } catch (Exception error){
            return ResponseEntity.badRequest().body("Не удалось получить проекты!");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBoardById(@PathVariable Long id){
        try {
            BoardDto board = boardService.getBoardById(id);
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception err){
            return ResponseEntity.badRequest().body("Id не найден!");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteBoardById(@PathVariable Long id){
        try {
            BoardDto board = boardService.deleteBoard(id);
            return new ResponseEntity<>(board, HttpStatus.OK);
        } catch (Exception err){
            return ResponseEntity.badRequest().body("Не удалось удалить board!");
        }
    }
}
