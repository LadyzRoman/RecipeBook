package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.etu.recipebook.model.Category;
import ru.etu.recipebook.service.CategoryService;

import java.util.List;

@RestController
@RequestMapping(path="api/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping(path="")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @GetMapping(path="{id}")
    public Category getCategory(@PathVariable String id) {
        return categoryService.getCategory(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    @PostMapping(path="")
    public Category addCategory(@RequestBody Category category) {
        return categoryService.addCategory(category);
    }
}
