package ru.etu.recipebook.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.etu.recipebook.entity.Ingredient;
import ru.etu.recipebook.repository.IngredientRepository;
import ru.etu.recipebook.service.IngredientService;

@Service
public class IngredientServiceImpl implements IngredientService {
    @Autowired
    private IngredientRepository repository;
    @Override
    public Ingredient addIngredient(Ingredient ingredient) {
        return repository.save(ingredient);
    }

    @Override
    public Iterable<Ingredient> getIngredients() {
        return repository.findAll();
    }
}
