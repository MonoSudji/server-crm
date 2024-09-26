package global.hakaton.servercrm.mapper;

import global.hakaton.servercrm.dto.ProjectDto;
import global.hakaton.servercrm.models.Project;
import global.hakaton.servercrm.models.User;
import org.springframework.stereotype.Component;

@Component
public class ProjectMapper {

    public ProjectDto toDto(Project project) {
      ProjectDto projectDto = new ProjectDto();
      projectDto.setId(project.getId());
      projectDto.setName(project.getName());
      projectDto.setDescription(project.getDescription());
      projectDto.setPriority(project.getPriority());
    //  projectDto.setUser_id(project.getUser() != null ? project.getUser().getId() : null);
      return projectDto;
    };

    public Project toEntity(ProjectDto projectDto){
        Project project = new Project();
        project.setId(projectDto.getId());
        project.setName(projectDto.getName());
        project.setDescription(projectDto.getDescription());
        project.setPriority(projectDto.getPriority());
        // project.setUser(user);
        return project;
    }
}
