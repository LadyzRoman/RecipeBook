package ru.etu.recipebook.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.etu.recipebook.model.Category;
import ru.etu.recipebook.repository.CategoryRepository;
import ru.etu.recipebook.service.CategoryService;
import ru.etu.recipebook.service.TransliterationService;

import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository repository;
    @Autowired
    private TransliterationService transliterationService;

    @Override
    public Iterable<Category> getCategories() {
        return repository.findAll();
    }

    @Override
    public Optional<Category> getCategory(String id) {
        return repository.findById(id);
    }

    @Override
    public Category addCategory(Category category) {
        Category cat = new Category(transliterationService.transliterate(category.getTitle()), category.getTitle());
        return repository.save(cat);
    }
}
