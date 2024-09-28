package com.mono.mapper;

import com.mono.dto.BoardDto;
import com.mono.models.Board;
import com.mono.models.Project;
import com.mono.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class BoardMapper {


    private final ProjectRepository projectRepository;


    @Autowired
    public BoardMapper(ProjectRepository projectRepository){this.projectRepository = projectRepository;}

    public BoardDto toDto(Board board){
        BoardDto boardDto = new BoardDto();
        boardDto.setId(board.getId());
        boardDto.setName(board.getName());
        boardDto.setDescription(board.getDescription());
        boardDto.setProject_id(board.getProject().getId());

        return boardDto;
    }

    public Board toEntity(BoardDto boardDto){
        Board board = new Board();
        board.setId(boardDto.getId());
        board.setName(boardDto.getName());
        board.setDescription(boardDto.getDescription());
        Long projectId = boardDto.getProject_id();
        Project project = projectRepository.findById(projectId).orElseThrow(() -> new RuntimeException("Project not found with id"));
        board.setProject(project);

        return board;
    }
}
