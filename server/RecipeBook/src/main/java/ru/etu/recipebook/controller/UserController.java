package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.service.RecipeService;

import java.security.Principal;

/**
 * Controller of user's local recipe list
 */
@RestController
@RequestMapping(path = "api/me")
public class UserController {
    @Autowired
    private RecipeService recipeService;

    @GetMapping(path = "/recipes")
    public Page<Recipe> getUserRecipes(Principal principal) {
        return recipeService.getAllRecipes(principal);
    }

    @PostMapping(path = "/recipes/{id}")
    public ResponseEntity<Void> addRecipe(@PathVariable int id, Principal principal) {
        //TODO
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping(path = "/recipes/{id}")
    public ResponseEntity<Void> removeRecipe(@PathVariable int id, Principal principal) {
        //TODO
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
