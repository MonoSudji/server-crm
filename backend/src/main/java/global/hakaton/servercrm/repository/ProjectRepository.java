package global.hakaton.servercrm.repository;

import global.hakaton.servercrm.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
