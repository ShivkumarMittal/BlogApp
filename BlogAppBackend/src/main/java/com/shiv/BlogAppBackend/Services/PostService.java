package com.shiv.BlogAppBackend.Services;

import java.util.List;

import com.shiv.BlogAppBackend.Entities.Post;
import com.shiv.BlogAppBackend.Payloads.PostDto;
import com.shiv.BlogAppBackend.Payloads.PostResponse;

public interface PostService {

    // create
    PostDto createPost(PostDto postDto , Integer userId , Integer categoryId);

    // update
    PostDto updaePost(PostDto postDto,Integer postId);

    // delete
    void deletePost(Integer postId);

    // get all post
    PostResponse getAllPost(Integer pageNumber,Integer pageSize,String sortBy,String sortDirection);

    // get single post
    PostDto getPostById(Integer postId);

    // get all post by category
    List<PostDto> getPostByCategory(Integer categoryId);

    // get all post by user

    List<PostDto> getPostByUser(Integer userId);

    // search posts
    List<PostDto> searchPosts(String keyword);

}
