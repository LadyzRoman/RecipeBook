package ru.etu.recipebook.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class RecipeBook {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public RecipeBook(Recipe recipe, User user) {
        this.recipe = recipe;
        this.user = user;
    }
}
