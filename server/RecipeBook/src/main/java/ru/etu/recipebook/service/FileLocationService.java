package ru.etu.recipebook.service;

import org.springframework.core.io.FileSystemResource;

public interface FileLocationService<ID> {

    ID save(byte[] bytes, String imageName);

    FileSystemResource find(ID id);
}
