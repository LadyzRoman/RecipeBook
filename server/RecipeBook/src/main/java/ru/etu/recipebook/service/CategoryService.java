package ru.etu.recipebook.service;

import ru.etu.recipebook.model.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> getCategories();
    Optional<Category> getCategory(String id);
    Category addCategory(Category category);
}
