package com.groceryredo.groceryredo.Grocery.repository;

import com.groceryredo.groceryredo.Grocery.model.Grocery;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroceryRepository extends JpaRepository<Grocery, Long> {
}
