package com.project.rookies.entity;

import lombok.Getter;

import javax.persistence.*;

@Entity

public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "admin_id", nullable = false)
    private Long admin_id;
    @Column(name = "admin_name")
    private String adminName;
    private String password;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id", referencedColumnName = "role_id")
    private Role role;
}