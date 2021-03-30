package ru.etu.recipebook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import ru.etu.recipebook.model.Recipe;
import ru.etu.recipebook.model.User;
import ru.etu.recipebook.service.RecipeService;
import ru.etu.recipebook.service.UserService;

import javax.validation.Valid;
import java.security.Principal;
import java.util.Optional;

/**
 * Controller of user's local recipe list
 */
@RestController
@RequestMapping(path = "api/me")
public class UserController {
    @Autowired
    private RecipeService recipeService;
    @Autowired
    private UserService userService;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping(path = "")
    public User getUserData(Principal principal) {
        return userService.getByPrincipal(principal)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.FORBIDDEN));
    }

    @GetMapping(path = "/register")
    public User register(@Valid @RequestBody User user) {
        if (userService.isPresent(user)) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email is already taken!");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userService.addUser(user);
    }

    @GetMapping(path = "/recipes")
    public Page<Recipe> getUserRecipes(@RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "12") int pageSize,
                                       Principal principal) {
        User user = userService.getByPrincipal(principal)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.FORBIDDEN));
        Pageable pageable = PageRequest.of(page, pageSize);
        return recipeService.getRecipesByUser(user, pageable);
    }

    @PostMapping(path = "/recipes/{recipeId}")
    public ResponseEntity<Void> addRecipe(@PathVariable int recipeId, Principal principal) {
        Recipe recipe = recipeService.getRecipe(recipeId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        userService.addRecipe(recipe, principal);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping(path = "/recipes/{recipeId}")
    public ResponseEntity<Void> removeRecipe(@PathVariable int recipeId, Principal principal) {
        Recipe recipe = recipeService.getRecipe(recipeId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        userService.deleteRecipe(recipe, principal);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
