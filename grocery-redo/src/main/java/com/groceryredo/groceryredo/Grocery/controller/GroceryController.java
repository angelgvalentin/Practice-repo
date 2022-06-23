package com.groceryredo.groceryredo.Grocery.controller;


import com.groceryredo.groceryredo.Grocery.model.Grocery;
import com.groceryredo.groceryredo.Grocery.repository.GroceryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.*;

@RestController
@CrossOrigin
@RequestMapping(path = "/grocery")

public class GroceryController {

    @Autowired
    public GroceryRepository groceryRepository;

    @GetMapping()
    public List<Grocery> getAllGrocery() {
        return groceryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Grocery> getSpecificGrocery(@PathVariable long id) {
        return groceryRepository.findById(id);
    }

    @PostMapping
    public Grocery postGrocery(@RequestBody Grocery grocery) {
        return groceryRepository.save(grocery);
    }

    @PutMapping("/{id}")
    public Optional<Grocery> updateGrocery (@RequestBody Grocery grocery, @PathVariable long id) {
     Optional<Grocery> oldGrocery = groceryRepository.findById(id);

        return oldGrocery.map(updateInfo -> {
            updateInfo.setName(grocery.getName());
            updateInfo.setImage(grocery.getImage());
            updateInfo.setQuantity(grocery.getQuantity());
           return  groceryRepository.save(updateInfo);
        });

    }

    @DeleteMapping("/{id}")
    public void deleteGrocery(@PathVariable long id) {
        groceryRepository.deleteById(id);
    }


}
