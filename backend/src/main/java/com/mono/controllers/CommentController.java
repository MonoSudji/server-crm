package com.mono.controllers;


import com.mono.dto.CommentDto;
import com.mono.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/comment")
public class CommentController {
    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {this.commentService = commentService;}


    @PostMapping
    public ResponseEntity<?> createComment(@RequestBody CommentDto dto){
        try{
            CommentDto commentDto = commentService.createComment(dto);
            return new ResponseEntity<>(commentDto, HttpStatus.CREATED);
        } catch (Exception err ) {
            return ResponseEntity.badRequest().body("Не удалось написать комментарий!");
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllComment(){
        try{
            List<CommentDto> commentDto = commentService.getAllComments();
            return new ResponseEntity<>(commentDto, HttpStatus.OK);
        } catch (Exception err ) {
            return ResponseEntity.badRequest().body("Не удалось получить комментарии");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCommentById(@PathVariable Long id){
        try{
           CommentDto commentDto = commentService.deleteCommentById(id);
            return new ResponseEntity<>(commentDto, HttpStatus.OK);
        } catch (Exception err ) {
            return ResponseEntity.badRequest().body("Не удалось получить комментарии");
        }
    }

}
