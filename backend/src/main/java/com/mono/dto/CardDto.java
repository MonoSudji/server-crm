package com.mono.dto;

import lombok.Data;

@Data
public class CardDto {
    private Long id;
    private String name;
    private String background;

    private Long board_id;
}
