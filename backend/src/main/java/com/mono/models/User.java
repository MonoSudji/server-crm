package com.mono.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String password;
    private String username;
    private String email;
    @Column(nullable = true)
    private String resetToken;

    @Column(nullable = true)
    private Long resetTokenExpiry;

    @OneToMany(mappedBy = "user")
    private List<Project> activity;

    @OneToMany(mappedBy = "user")
    private List<TeamMembers> teams;
}