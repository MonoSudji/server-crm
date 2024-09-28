package com.mono.dto;

import lombok.Data;

@Data
public class ProjectDto {
    private Long id;
    private String name;
    private String description;
    private int priority;
    private Long user_id;
}