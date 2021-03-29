package ru.etu.recipebook.service.images;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import ru.etu.recipebook.entity.ImageInfo;
import ru.etu.recipebook.repository.FileSystemRepository;
import ru.etu.recipebook.repository.ImageRepository;

@Service
public class FileLocationServiceImpl implements FileLocationService<String> {
    @Autowired
    private FileSystemRepository fileSystemRepository;
    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private IdService<String> idService;

    @Override
    public ImageInfo save(byte[] bytes, String imageName) {
        String location = fileSystemRepository.save(bytes, imageName);
        String id = idService.getId();
        return imageRepository.save(new ImageInfo(id ,location));
    }

    @Override
    public FileSystemResource find(String id) {
        ImageInfo image = imageRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        return fileSystemRepository.findInFileSystem(image.getFileName());
    }
}
