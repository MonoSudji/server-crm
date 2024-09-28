package com.mono.mapper;

import com.mono.dto.TaskDto;
import com.mono.models.Card;
import com.mono.models.Task;
import com.mono.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class TaskMapper {

    private final CardRepository cardRepository;

    @Autowired
    public TaskMapper(CardRepository cardRepository) {this.cardRepository = cardRepository;}

    public TaskDto toDto(Task task) {
        TaskDto dto = new TaskDto();
        dto.setId(task.getId());
        dto.setName(task.getName());
        dto.setDescription(task.getDescription());
        dto.setCard_id(task.getCard().getId());
        return dto;
    }

    public Task toEntity(TaskDto dto) {
        Task task = new Task();
        task.setId(dto.getId());
        task.setName(dto.getName());
        task.setDescription(dto.getDescription());

        Card findCard = cardRepository.findById(dto.getCard_id()).orElseThrow(() -> new RuntimeException("Не удалось получить карточку!"));
        task.setCard(findCard);
        return task;
    }
}
