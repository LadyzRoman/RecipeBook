package ru.etu.recipebook.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.etu.recipebook.entity.Recipe;
import ru.etu.recipebook.entity.RecipeBook;
import ru.etu.recipebook.entity.User;

@Repository
public interface RecipeBookRepository extends CrudRepository<RecipeBook, Long> {
    void deleteByUserAndRecipe(User user, Recipe recipe);
}
