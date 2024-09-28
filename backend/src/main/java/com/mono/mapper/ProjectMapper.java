package com.mono.mapper;

import com.mono.dto.ProjectDto;
import com.mono.models.Project;
import com.mono.models.User;
import com.mono.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

   private final UserRepo userRepo;
   @Autowired
   public ProjectMapper(UserRepo userRepo){this.userRepo = userRepo;}


    public ProjectDto toDto(Project project) {
        ProjectDto projectDto = new ProjectDto();
        projectDto.setId(project.getId());
        projectDto.setName(project.getName());
        projectDto.setDescription(project.getDescription());
        projectDto.setPriority(project.getPriority());
        projectDto.setUser_id(project.getUser() != null ? project.getUser().getId() : null);
        return projectDto;
    }

    public Project toEntity(ProjectDto projectDto) {
        Project project = new Project();
        project.setId(projectDto.getId());
        project.setName(projectDto.getName());
        project.setDescription(projectDto.getDescription());
        project.setPriority(projectDto.getPriority());

        Long userId = projectDto.getUser_id();
        User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("Project not found with id"));
        project.setUser(user);
        return project;
    }
}
