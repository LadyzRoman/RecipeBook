package ru.etu.recipebook.service;

import ru.etu.recipebook.entity.Ingredient;


public interface IngredientService {
    Ingredient addIngredient(Ingredient ingredient);

    Iterable<Ingredient> getIngredients();
}
