package ru.etu.recipebook.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.etu.recipebook.entity.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    Optional<User> getByEmail(String email);

    boolean existsByEmail(String email);

    Optional<User> getByPhoneNumber(String phoneNumber);

    boolean existsByPhoneNumber(String phoneNumber);
}
