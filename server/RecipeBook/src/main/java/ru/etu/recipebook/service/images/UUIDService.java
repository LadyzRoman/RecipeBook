package ru.etu.recipebook.service.images;

import org.springframework.stereotype.Service;
import ru.etu.recipebook.service.images.IdService;

import java.util.UUID;

@Service
public class UUIDService implements IdService<String> {
    @Override
    public String getId() {
        return UUID.randomUUID().toString();
    }
}
