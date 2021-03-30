package ru.etu.recipebook.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.etu.recipebook.model.Category;

@Repository
public interface CategoryRepository extends CrudRepository<Category, String> {
}
