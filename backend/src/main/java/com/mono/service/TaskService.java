package com.mono.service;

import com.mono.dto.TaskDto;
import com.mono.mapper.TaskMapper;
import com.mono.models.Task;
import com.mono.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
class TaskService {

    final TaskRepository taskRepository;
    final TaskMapper taskMapper;

    @Autowired
    TaskService(TaskRepository taskRepository, TaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
    }

    List<TaskDto> getAllTasks() {
        return taskRepository.findAll().stream()
                .map(taskMapper::toDto)
                .toList();
    }

    TaskDto createTask(TaskDto taskDto) {
        Task task = taskMapper.toEntity(taskDto);
        Task savedTask = taskRepository.save(task);
        return taskMapper.toDto(savedTask);
    }

    Optional<TaskDto> getTaskById(Long id) {
        return taskRepository.findById(id).map(taskMapper::toDto);
    }

    void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }
}
