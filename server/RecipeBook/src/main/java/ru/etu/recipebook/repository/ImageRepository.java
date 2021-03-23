package ru.etu.recipebook.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.etu.recipebook.entity.Image;

@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {

}
