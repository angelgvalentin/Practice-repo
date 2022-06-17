package com.javausersapipractice.demo.controller;


import com.javausersapipractice.demo.model.User;
import com.javausersapipractice.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    public UserRepository userRepository;

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public User postNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/{id}")
    public Optional<User> getUserById(@PathVariable long id, User user) {
        return userRepository.findById(id);
    }

    @PutMapping("/{id}")
    public Optional<User> editUser(@PathVariable long id, @RequestBody User userToBeEdited) {
        Optional<User> chosenUser = userRepository.findById(id);
       return chosenUser.map( update -> {
            update.setUsername(userToBeEdited.getUsername());
            update.setAge(userToBeEdited.getAge());
            return userRepository.save(update);
        });
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable long id) {
        userRepository.deleteById(id);
    }


}
