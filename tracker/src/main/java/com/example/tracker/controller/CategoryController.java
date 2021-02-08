package com.example.tracker.controller;

import com.example.tracker.model.Category;
import com.example.tracker.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryRepository repo;

    public CategoryController(CategoryRepository repo){
        super();
        this.repo=repo;
    }

    @RequestMapping(value="/categories",method= RequestMethod.GET)
    Collection<Category> categories(){
        return repo.findAll();
    }
//    @RequestMapping(value="/categories/{id}",method= RequestMethod.GET)
//    ResponseEntity<?> getCategory(@PathVariable Long id){
//        Optional<Category> category =repo.findById(id);
//        return category.map(response -> ResponseEntity.ok().body(response))
//                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
//    }
    @RequestMapping(value="/categories/{id}",method= RequestMethod.GET)
    Category getCategory(@PathVariable Long id){
    return repo.findById(id).orElse(null);

    }
//@RequestMapping(value="/category",method= RequestMethod.GET)
//    public Category create(@RequestBody Category cat){
//    return repo.save(cat);
//    }

    @PostMapping("/category")
    ResponseEntity<Category> createCategory(@RequestBody Category category)
            throws URISyntaxException {
        Category result= repo.save(category);
        return ResponseEntity.created(new URI("/api/category" + result.getId())).body(result);

    }



    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@RequestBody Category category){
        Category result= repo.save(category);
        return ResponseEntity.ok().body(result);
    }



    @DeleteMapping("/category/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable Long id) {
        repo.deleteById(id);
        return ResponseEntity.ok().build();
    }
}