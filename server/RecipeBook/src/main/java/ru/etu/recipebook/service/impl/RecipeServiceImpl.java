package ru.etu.recipebook.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import ru.etu.recipebook.model.Category;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.model.User;
import ru.etu.recipebook.repository.RecipeRepository;
import ru.etu.recipebook.service.RecipeService;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeServiceImpl implements RecipeService {
    @Autowired
    private RecipeRepository repository;

    @Override
    public Iterable<Recipe> getAllRecipes() {
        return repository.findAll();
    }

    @Override
    public Page<Recipe> getAllRecipes(Pageable pageable) {
        return repository.findAll(pageable);
    }

    @Override
    public Optional<Recipe> getRecipe(long id) {
        return repository.findById(id);
    }

    @Override
    public List<Recipe> getRecipesByCategory(Category category) {
        return repository.findByCategory(category);
    }

    @Override
    public Page<Recipe> getRecipesByCategory(Category category, Pageable pageable) {
        return repository.findByCategory(category, pageable);
    }

    @Override
    public List<Recipe> getRecipesByUser(User user) {
        return repository.findRecipesByUser(user);
    }

    @Override
    public Page<Recipe> getRecipesByUser(User user, Pageable pageable) {
        return repository.findRecipesByUser(user, pageable);
    }

    @Override
    public Recipe addRecipe(Recipe recipe) {
        return repository.save(recipe);
    }
}
