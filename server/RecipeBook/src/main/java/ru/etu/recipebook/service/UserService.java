package ru.etu.recipebook.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.model.RecipeBook;
import ru.etu.recipebook.model.User;
import ru.etu.recipebook.repository.RecipeBookRepository;
import ru.etu.recipebook.repository.UserRepository;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RecipeBookRepository recipeBookRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.getByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("Email '%s' doesn't exits", username)));

        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), new ArrayList<>());
    }

    public Optional<User> getByPrincipal(Principal principal) {
        return userRepository.getByEmail(principal.getName());
    }

    public boolean isPresent(User user) {
        return userRepository.existsByEmail(user.getEmail());
    }

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public RecipeBook addRecipe(Recipe recipe, Principal principal) {
        User user = getByPrincipal(principal).orElseThrow();
        return recipeBookRepository.save(new RecipeBook(recipe, user));
    }

    public void deleteRecipe(Recipe recipe, Principal principal) {
        User user = getByPrincipal(principal).orElseThrow();
        recipeBookRepository.deleteByUserAndRecipe(user, recipe);
    }
}
