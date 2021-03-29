package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.service.RecipeService;

@RestController
@RequestMapping(path="api/recipes")
public class RecipeController {
    @Autowired
    private RecipeService recipeService;

    @GetMapping(path="")
    public Page<Recipe> getRecipes() {
        return recipeService.getAllRecipes();
    }


    @GetMapping(path="{id}")
    public Recipe getRecipe(@PathVariable long id) {
        return recipeService.getRecipe(id);
    }
}
