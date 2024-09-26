package global.hakaton.servercrm.controllers;


import global.hakaton.servercrm.dto.ProjectDto;
import global.hakaton.servercrm.models.Project;
import global.hakaton.servercrm.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    private final ProjectService projectService;
    @Autowired
    public ProjectController(ProjectService projectService){this.projectService = projectService;}

    @PostMapping
    public ResponseEntity<?> createProject(@RequestBody ProjectDto dto){
        try {
            ProjectDto projectDto = projectService.createProject(dto);
            return new ResponseEntity<>(projectDto, HttpStatus.CREATED);
        } catch (Exception error) {
          return ResponseEntity.badRequest().body("Не удалось добавить проект!");
        }
    };

    @GetMapping
    public ResponseEntity<?> getAllProject(){
        try {
            List<ProjectDto> projectDtoList = projectService.getAllProject();
            return new ResponseEntity<>(projectDtoList, HttpStatus.OK);
        } catch (Exception error){
            return ResponseEntity.badRequest().body("Не удалось получить все проекты!");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getProjectById(@PathVariable Long id){
        try {
            return new ResponseEntity<>(projectService.getProjectById(id), HttpStatus.OK);
        } catch (Exception error) {
            return ResponseEntity.badRequest().body("Не удалось удалить проект!");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id){
        try {
            return new ResponseEntity<>(projectService.deleteProject(id), HttpStatus.OK);
        } catch (Exception error) {
            return ResponseEntity.badRequest().body("Не удалось удалить проект!");
        }
    }
}
