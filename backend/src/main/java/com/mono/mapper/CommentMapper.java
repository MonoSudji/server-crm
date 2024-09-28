package com.mono.mapper;

import com.mono.dto.CommentDto;
import com.mono.models.Comment;
import com.mono.models.Task;
import com.mono.models.User;
import com.mono.repository.CommentRepository;
import com.mono.repository.TaskRepository;
import com.mono.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class CommentMapper {

    private final TaskRepository taskRepository;
    private final UserRepo userRepository;

    @Autowired
    public CommentMapper(TaskRepository taskRepository, UserRepo userRepository){this.taskRepository = taskRepository; this.userRepository = userRepository;}

    public CommentDto toDto(Comment comment){
        CommentDto commentDto = new CommentDto();
        commentDto.setId(comment.getId());
        commentDto.setContent(comment.getContent());
        commentDto.setAuthor_id(comment.getUser().getId());
        commentDto.setTask_id(comment.getTask().getId());
        return commentDto;
    }

    public Comment toEntity(CommentDto commentDto){
        Comment comment = new Comment();
        comment.setId(commentDto.getId());
        comment.setContent(commentDto.getContent());

        User findUser = userRepository.findById(commentDto.getAuthor_id()).orElseThrow(() -> new RuntimeException("Не удалось получить автора!"));

        Task findTask = taskRepository.findById(commentDto.getTask_id()).orElseThrow(() -> new RuntimeException("Не удалось получить задачи!"));

        comment.setUser(findUser);
        comment.setTask(findTask);

        return comment;

    }


}
