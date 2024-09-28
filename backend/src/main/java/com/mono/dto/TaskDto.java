package com.mono.dto;

import lombok.Data;

@Data
public class TaskDto {
    private Long id;
    private String name;
    private String description;

    private Long card_id;
}