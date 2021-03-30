package ru.etu.recipebook.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Recipe {
    @Id
    @GeneratedValue
    private long id;

    @NotBlank
    private String title;

    @Lob
    private String description;

    @Min(0)
    private int cookingTime;

    private LocalDateTime createdAt;

    @OneToOne
    @JoinColumn(name = "img_id")
    private ImageInfo image;

    @ElementCollection
    private List<String> tags;

    @OneToMany
    @JoinColumn(name = "recipe_id")
    private List<RecipeStep> steps;

    @OneToMany
    @JoinColumn(name = "recipe_id")
    private List<RecipeIngredient> ingredients;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User createdBy;
}
