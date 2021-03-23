package ru.etu.recipebook.service;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UUIDService implements IdService<String> {
    @Override
    public String getId() {
        return UUID.randomUUID().toString();
    }
}
