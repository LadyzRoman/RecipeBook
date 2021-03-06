package ru.etu.recipebook.entity;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
public class Ingredient {
    @Id
    @GeneratedValue
    private long id;

    private String name;
}
