package com.mono.service;

import com.mono.dto.CommentDto;
import com.mono.mapper.CommentMapper;
import com.mono.models.Board;
import com.mono.models.Comment;
import com.mono.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final CommentMapper commentMapper;


    @Autowired
    public CommentService(CommentRepository commentRepository, CommentMapper commentMapper){this.commentRepository = commentRepository; this.commentMapper = commentMapper;}

    public CommentDto createComment(CommentDto dto){
        Comment comment = commentMapper.toEntity(dto);
        return commentMapper.toDto(commentRepository.save(comment));
    }

    public List<CommentDto> getAllComments(){
        return commentRepository.findAll().stream().map(commentMapper::toDto).toList();
    }

    public CommentDto deleteCommentById(Long id){
        Comment findComment = commentRepository.findById(id).orElseThrow(() -> new RuntimeException("По текущему id нет board"));
        if (findComment != null) {
            commentRepository.deleteById(id);
            return commentMapper.toDto(findComment);
        }
        return null;
    }
}
