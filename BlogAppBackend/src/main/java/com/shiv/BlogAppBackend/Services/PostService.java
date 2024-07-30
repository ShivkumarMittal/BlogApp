package com.shiv.BlogAppBackend.Services;

import java.util.List;

import com.shiv.BlogAppBackend.Entities.Post;
import com.shiv.BlogAppBackend.Payloads.PostDto;

public interface PostService {

    // create
    PostDto createPost(PostDto postDto , Integer userId , Integer categoryId);

    // update
    Post updaePost(PostDto postDto,Integer postId);

    // delete
    void deletePost(Integer postId);

    // get all post
    List<Post> getAllPost();

    // get single post
    Post getPsotById(Integer postId);

    // get all post by category
    List<Post> getPostByCategory(Integer categoryId);

    // get all post by user

    List<Post> getPostByUser(Integer userId);

    // search posts
    List<Post> searchPosts(String keyword);

}
