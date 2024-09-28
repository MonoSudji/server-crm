package com.mono.dto;


import lombok.Data;

@Data
public class BoardDto {
    private Long id;
    private String description;
    private String name;
    private Long project_id;
}
