package ru.etu.recipebook.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
public class RecipeIngredient {
    @Id
    @GeneratedValue
    private long id;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    private int count;

    @Enumerated(EnumType.STRING)
    private Unit unit;
}
