package ru.etu.recipebook.service;

import ru.etu.recipebook.entity.Category;

import java.util.Optional;

public interface CategoryService {
    Iterable<Category> getCategories();
    Optional<Category> getCategory(String id);
    Category addCategory(Category category);
}
