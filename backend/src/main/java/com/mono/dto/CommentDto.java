package com.mono.dto;


import lombok.Data;

@Data
public class CommentDto {
    private Long id;
    private String content;
    private Long author_id;
    private Long task_id;
}
