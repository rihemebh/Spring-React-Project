package com.example.tracker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="users")
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String email;
    @OneToMany //one user has one or many category
    private Set<Category> category;
}
