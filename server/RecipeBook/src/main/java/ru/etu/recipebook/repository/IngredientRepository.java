package ru.etu.recipebook.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.etu.recipebook.entity.Ingredient;

@Repository
public interface IngredientRepository extends CrudRepository<Ingredient, Long> {

}
