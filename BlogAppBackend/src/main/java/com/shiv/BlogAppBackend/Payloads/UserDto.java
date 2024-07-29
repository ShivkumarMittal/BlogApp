package com.shiv.BlogAppBackend.Payloads;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class UserDto {

    private Integer id;
    @NotBlank
    @Size(min = 3,message="Username must be minimun of 3 characters")
    private String name;
    @Email
    @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",message="Email is not valid")
    private String email;
    @NotBlank
    @Size(min=3, message="Password no less than 3 character")
    
    private String password;
    @NotBlank(message = "about not blank")
    private String about;

}
