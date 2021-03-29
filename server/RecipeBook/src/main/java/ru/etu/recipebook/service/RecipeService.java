package ru.etu.recipebook.service;

import org.springframework.data.domain.Page;
import ru.etu.recipebook.model.Recipe;

import java.security.Principal;


public interface RecipeService {
    Page<Recipe> getAllRecipes();

    Page<Recipe> getAllRecipes(Principal principal);

    Recipe getRecipe(long id);

}
