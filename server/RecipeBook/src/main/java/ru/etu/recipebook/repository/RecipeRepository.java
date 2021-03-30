package ru.etu.recipebook.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.etu.recipebook.model.Category;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.model.User;

import java.util.List;

@Repository
public interface RecipeRepository extends PagingAndSortingRepository<Recipe, Long> {
    @Query(value = "SELECT r.recipe FROM RecipeBook r WHERE r.user = :user",
    countQuery = "SELECT count(r.id) FROM RecipeBook r WHERE r.user = :user")
    Page<Recipe> findRecipesByUser(@Param("user") User user, Pageable pageable);

    @Query(value = "SELECT r.recipe FROM RecipeBook r WHERE r.user = :user")
    List<Recipe> findRecipesByUser(@Param("user") User user);

    List<Recipe> findByCategory(Category category);

    Page<Recipe> findByCategory(Category category, Pageable pageable);
}
