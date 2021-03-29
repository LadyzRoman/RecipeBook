package ru.etu.recipebook.model;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Category {
    private String id;
    private String title;
}
