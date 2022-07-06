package com.groceryredo.groceryredo.Grocery.service;


import com.groceryredo.groceryredo.Grocery.model.Grocery;
import com.groceryredo.groceryredo.Grocery.repository.GroceryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Service
public class GroceryService {

    @Autowired
    public GroceryRepository groceryRepository;


    public List<Grocery> getAllGrocery() {
        return groceryRepository.findAll();
    }


    public Optional<Grocery> getSpecificGrocery(@PathVariable long id) {
        return groceryRepository.findById(id);
    }


    public Grocery postGrocery(@RequestBody Grocery grocery) {
        return groceryRepository.save(grocery);
    }


    public Optional<Grocery> updateGrocery ( Grocery grocery,  long id) {
        Optional<Grocery> oldGrocery = groceryRepository.findById(id);

        return oldGrocery.map(updateInfo -> {
            updateInfo.setName(grocery.getName());
            updateInfo.setImage(grocery.getImage());
            updateInfo.setQuantity(grocery.getQuantity());
            return  groceryRepository.save(updateInfo);
        });

    }


    public void deleteGrocery(@PathVariable long id) {
        groceryRepository.deleteById(id);
    }

}
