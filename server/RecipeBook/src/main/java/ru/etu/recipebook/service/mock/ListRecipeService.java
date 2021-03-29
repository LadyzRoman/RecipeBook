package ru.etu.recipebook.service.mock;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.service.RecipeService;

import java.security.Principal;

@Service
public class ListRecipeService implements RecipeService {
    @Override
    public Page<Recipe> getAllRecipes() {
        return null;
    }

    @Override
    public Page<Recipe> getAllRecipes(Principal principal) {
        return null;
    }

    @Override
    public Recipe getRecipe(long id) {
        return null;
    }
}
