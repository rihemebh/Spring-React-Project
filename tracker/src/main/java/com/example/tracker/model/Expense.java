package com.example.tracker.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.time.Instant;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="expense")
public class Expense {
    @Id
    private long id;


    private Instant expensedate;


    private String description;

    private String location;

    @ManyToOne
    private Category category;

    @JsonIgnore
    @ManyToOne
    private User user;

}
