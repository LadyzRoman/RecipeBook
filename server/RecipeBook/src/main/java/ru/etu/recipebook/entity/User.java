package ru.etu.recipebook.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    private String firstName;

    @NotBlank
    private String lastName;

    @NotBlank
    @Email
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String email;

    @NotBlank
    @Pattern(regexp = "^\\+?\\d*$")
    @Size(max = 15)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String phoneNumber;

    @Size(min = 5)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;
}
