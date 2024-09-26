package global.hakaton.servercrm.dto;


import lombok.Data;

@Data
public class ProjectDto {
    private Long id;
    private String name;
    private String description;
    private int priority;
    private Long user_id;
}
