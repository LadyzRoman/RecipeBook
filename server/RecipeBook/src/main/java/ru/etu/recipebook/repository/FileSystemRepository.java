package ru.etu.recipebook.repository;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Repository;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.LocalTime;

@Repository
public class FileSystemRepository {

    @Value("${filesystem.images}")
    private String imagesDir;

    @SneakyThrows
    public String save(byte [] content, String imageName) {
        Path newFile = Paths.get(imagesDir + LocalDate.now().toEpochDay() + "/" + LocalTime.now().toSecondOfDay() + "-" + imageName);
        Files.createDirectories(newFile.getParent());

        Files.write(newFile, content);

        return newFile.toAbsolutePath().toString();
    }

    public FileSystemResource findInFileSystem(String location) {
        return new FileSystemResource(Paths.get(location));
    }
}
