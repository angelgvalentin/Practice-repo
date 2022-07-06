package com.groceryredo.groceryredo.Grocery.controller;


import com.groceryredo.groceryredo.Grocery.model.Grocery;
import com.groceryredo.groceryredo.Grocery.repository.GroceryRepository;
import com.groceryredo.groceryredo.Grocery.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/grocery")

public class GroceryController {

    private final GroceryService groceryService;

    @Autowired
    public GroceryController(GroceryService groceryService) {
        this.groceryService = groceryService;
    }

    @GetMapping
    public List<Grocery> getAllGrocery() {
        return groceryService.getAllGrocery();
    }

    @GetMapping("/{id}")
    public Optional<Grocery> getSpecificGrocery(@PathVariable long id) {
        return groceryService.getSpecificGrocery(id);
    }

    @PostMapping
    public Grocery postGrocery(@RequestBody Grocery grocery) {
        return groceryService.postGrocery(grocery);
    }

    @PutMapping("/{id}")
    public Optional<Grocery> updateGrocery (@RequestBody Grocery grocery, @PathVariable long id) {
     return  groceryService.updateGrocery(grocery, id);



    }

    @DeleteMapping("/{id}")
    public void deleteGrocery(@PathVariable long id) {
        groceryService.deleteGrocery(id);
    }


}
