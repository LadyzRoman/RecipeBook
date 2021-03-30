package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.etu.recipebook.entity.Ingredient;
import ru.etu.recipebook.service.IngredientService;

@RestController
@RequestMapping("api/ingredients")
public class IngredientController {
    @Autowired
    private IngredientService ingredientService;

    @GetMapping()
    public Iterable<Ingredient> getIngredients() {
        return ingredientService.getIngredients();
    }

    @PostMapping()
    public Ingredient addIngredient(@RequestBody Ingredient ingredient) {
        return ingredientService.addIngredient(ingredient);
    }
}
