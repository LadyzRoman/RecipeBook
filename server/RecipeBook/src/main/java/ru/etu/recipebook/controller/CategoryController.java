package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.etu.recipebook.entity.Category;
import ru.etu.recipebook.entity.Recipe;
import ru.etu.recipebook.service.CategoryService;
import ru.etu.recipebook.service.RecipeService;

@RestController
@RequestMapping(path = "api/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @Autowired
    private RecipeService recipeService;

    @GetMapping(path = "")
    public Iterable<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping(path = "")
    public Category addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }

    @GetMapping(path = "{id}")
    public Category getCategory(@PathVariable String id) {
        return categoryService.getCategory(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @GetMapping(path = "{id}/recipes")
    public Iterable<Recipe> getRecipes(@PathVariable String id,
                                   @RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "12") int pageSize) {
        Category category = categoryService.getCategory(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        Pageable pageable = PageRequest.of(page, pageSize);
        return recipeService.getRecipesByCategory(category, pageable);
    }
}
