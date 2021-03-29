package ru.etu.recipebook.service.mock;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.etu.recipebook.model.Category;
import ru.etu.recipebook.service.CategoryService;
import ru.etu.recipebook.service.TransliterationService;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ListCategoryService implements CategoryService {

    private List<Category> categories = new ArrayList<>();

    @Autowired
    private TransliterationService transliterationService;

    @PostConstruct
    public void initCategories() {
        categories.addAll(List.of(
           new Category("breakfast", "На завтрак"),
           new Category("lunch", "На обед"),
           new Category("dinner", "На ужин"),
           new Category("second", "Вторые блюда"),
           new Category("soup", "Супы"),
           new Category("salad", "Салаты"),
           new Category("beverages", "Напитки")
        ));
    }

    @Override
    public List<Category> getCategories() {
        return categories;
    }

    @Override
    public Optional<Category> getCategory(String id) {
        return categories.stream()
                .filter(c -> c.getId().equals(id))
                .findFirst();
    }

    @Override
    public Category addCategory(Category category) {
        Category cat = new Category(transliterationService.transliterate(category.getTitle()), category.getTitle());
        categories.add(cat);
        return cat;
    }
}
