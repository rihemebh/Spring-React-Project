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

@RestController
@RequestMapping("/api")
public class ExpenseController {

    @Autowired
    private ExpenseRepository repo;

    public ExpenseController (ExpenseRepository repo){
        super();
        this.repo=repo;
    }

    @RequestMapping(value="/expenses",method= RequestMethod.GET)
    Collection<Expense> categories(){
        return repo.findAll();
    }


    @DeleteMapping("/expense/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/expenses")
    ResponseEntity<Expense> createCategory(@RequestBody Expense exp)
            throws URISyntaxException {
        Expense result= repo.save(exp);
        return ResponseEntity.created(new URI("/api/expense" + result.getId())).body(result);

    }
}
