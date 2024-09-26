package global.hakaton.servercrm.service;

import global.hakaton.servercrm.dto.ProjectDto;
import global.hakaton.servercrm.mapper.ProjectMapper;
import global.hakaton.servercrm.models.Project;
import global.hakaton.servercrm.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

     private final ProjectRepository projectRepository;
     private final ProjectMapper projectMapper;
     @Autowired
     public ProjectService(ProjectRepository projectRepository, ProjectMapper projectMapper){
         this.projectRepository = projectRepository;
         this.projectMapper = projectMapper;
     }

    public ProjectDto createProject(ProjectDto dto){
         Project project = projectMapper.toEntity(dto);
         Project savedProject = projectRepository.save(project);
        return projectMapper.toDto(savedProject);
    }

   public List<ProjectDto> getAllProject(){
         return projectRepository.findAll().stream().map(projectMapper::toDto).toList();
   };

     public Optional<ProjectDto> deleteProject(Long id){
            if(projectRepository.existsById(id)){
                Optional<Project> optionalProject = projectRepository.findById(id);

                Project project = optionalProject.orElseThrow(() -> new RuntimeException("Project not found"));

                projectRepository.deleteById(id);

                ProjectDto projectDto = projectMapper.toDto(project);

                if (projectDto == null) {
                    throw new RuntimeException("Failed to map Project to ProjectDto");
                }

                return Optional.of(projectDto);
            } else {
                return Optional.empty();
            }
     }


     public Optional<ProjectDto> getProjectById(Long id){
         if(projectRepository.existsById(id)){
             Optional<Project> projects = projectRepository.findById(id);
             Project project = projects.orElseThrow(() -> new RuntimeException("Project not found"));
             ProjectDto projectDto = projectMapper.toDto(project);
             if (projectDto == null) {
                 throw new RuntimeException("Failed to map Project to ProjectDto");
             }
             return Optional.of(projectDto);
         }else {
             return Optional.empty();
         }
     }
}
