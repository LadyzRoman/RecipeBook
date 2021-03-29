package ru.etu.recipebook.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.etu.recipebook.model.Recipe;

public interface RecipeRepository extends PagingAndSortingRepository<Recipe, Long> {

}
