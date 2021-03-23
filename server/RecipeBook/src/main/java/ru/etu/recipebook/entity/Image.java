package ru.etu.recipebook.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Image {
    @Id
    @GeneratedValue
    private long id;

    private String fileName;

    public Image(String fileName) {
        this.fileName = fileName;
    }
}
