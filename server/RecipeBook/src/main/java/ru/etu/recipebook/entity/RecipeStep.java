package ru.etu.recipebook.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class RecipeStep {
    @Id
    @GeneratedValue
    private long id;

    private String text;

    private String imgId;
}
