package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.etu.recipebook.entity.Recipe;
import ru.etu.recipebook.service.RecipeService;

@RestController
@RequestMapping(path="api/recipes")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;

    @GetMapping(path="")
    public Page<Recipe> getRecipes(@RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "12") int pageSize) {
        Pageable pageable = PageRequest.of(page, pageSize);
        return recipeService.getAllRecipes(pageable);
    }

    @GetMapping(path="{id}")
    public Recipe getRecipe(@PathVariable long id) {
        return recipeService.getRecipe(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }
}
