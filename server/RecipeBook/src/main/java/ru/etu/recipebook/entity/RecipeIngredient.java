package ru.etu.recipebook.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.etu.recipebook.entity.serializer.RecipeIngredientSerializer;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@JsonSerialize(using = RecipeIngredientSerializer.class)
public class RecipeIngredient {
    @Id
    @GeneratedValue
    @JsonIgnore
    private long id;

    @ManyToOne
    @JoinColumn(name = "ingredient_id")
    private Ingredient ingredient;

    private int count;

    @Enumerated(EnumType.STRING)
    private Unit unit;
}
