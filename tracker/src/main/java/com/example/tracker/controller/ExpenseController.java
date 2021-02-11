package com.example.tracker.controller;

import com.example.tracker.model.Category;
import com.example.tracker.model.Expense;
import com.example.tracker.repository.CategoryRepository;
import com.example.tracker.repository.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    private ExpenseRepository repo;

    public ExpenseController (ExpenseRepository repo){
        super();
        this.repo=repo;
    }

    @GetMapping("/expenses")
    List<Expense> getExpenses(){
        return repo.findAll();
    }

    @DeleteMapping("/expenses/{id}")
    ResponseEntity<?>  deleteExpense(@PathVariable Long id){
       repo.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/expenses")
    ResponseEntity<Expense> createExpense(@RequestBody Expense expense) throws URISyntaxException{
        Expense result= repo.save(expense);
        return ResponseEntity.created(new URI("/api/expenses" + result.getId())).body(result);
    }
}
