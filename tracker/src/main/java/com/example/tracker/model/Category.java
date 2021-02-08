package com.example.tracker.model;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="category")
public class Category {

    @Id
    private Long id;
    @NotNull
    private String name;


}
