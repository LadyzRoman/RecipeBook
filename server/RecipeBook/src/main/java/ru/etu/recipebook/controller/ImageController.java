package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.etu.recipebook.service.FileLocationService;

@Controller
@RequestMapping(path = "/images")
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {

    @Autowired
    private FileLocationService<Long> fileLocationService;

    @GetMapping(path = "/{id}", produces = MediaType.IMAGE_JPEG_VALUE)
    @ResponseBody
    public FileSystemResource downloadImage(@PathVariable Long id) {
        return fileLocationService.find(id);
    }

    @PostMapping(path = "/")
    @ResponseBody
    public Long uploadImage(@RequestParam MultipartFile image) throws Exception {
        return fileLocationService.save(image.getBytes(), image.getOriginalFilename());
    }
}