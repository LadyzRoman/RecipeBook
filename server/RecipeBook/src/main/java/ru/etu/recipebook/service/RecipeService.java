package ru.etu.recipebook.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import ru.etu.recipebook.model.Category;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.model.User;

import java.util.List;
import java.util.Optional;


public interface RecipeService {

    Iterable<Recipe> getAllRecipes();

    Page<Recipe> getAllRecipes(Pageable pageable);

    Optional<Recipe> getRecipe(long id);

    List<Recipe> getRecipesByCategory(Category category);

    Page<Recipe> getRecipesByCategory(Category category, Pageable pageable);

    List<Recipe> getRecipesByUser(User user);

    Page<Recipe> getRecipesByUser(User user, Pageable pageable);

    Recipe addRecipe(Recipe recipe);
}
