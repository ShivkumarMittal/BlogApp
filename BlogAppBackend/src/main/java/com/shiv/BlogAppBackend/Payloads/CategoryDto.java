package com.shiv.BlogAppBackend.Payloads;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CategoryDto {
    private Integer categoryId;
    @NotBlank
    @Size(min=4,message = "Min size of title should be 4")
    private String categoryTitle;
    @NotBlank
    @Size(min=5,message ="Min size of description should be 5")
    private String categoryDescription;

}
