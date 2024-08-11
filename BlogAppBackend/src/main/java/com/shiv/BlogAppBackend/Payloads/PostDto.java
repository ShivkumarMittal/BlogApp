package com.shiv.BlogAppBackend.Payloads;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import com.shiv.BlogAppBackend.Entities.Comment;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class PostDto {
    private Integer postId;

    @NotBlank(message = "enter title")
    private String title;
    @NotBlank(message = "enter content")
    private String content;

    private String imageName;
    private Date date;

    private CategoryDto category;
    private UserDto user;

    private Set<CommentResponse> comments = new HashSet<>();
    
    
}
