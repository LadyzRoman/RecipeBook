package ru.etu.recipebook.service;

import org.springframework.core.io.FileSystemResource;
import ru.etu.recipebook.entity.ImageInfo;

public interface FileLocationService<ID> {

    ImageInfo save(byte[] bytes, String imageName);

    FileSystemResource find(ID id);
}
