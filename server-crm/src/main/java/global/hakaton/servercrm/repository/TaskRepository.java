package global.hakaton.servercrm.repository;

import global.hakaton.servercrm.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}