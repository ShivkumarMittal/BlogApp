package com.shiv.BlogAppBackend.ServiceImpl;

import java.util.Date;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shiv.BlogAppBackend.Entities.Category;
import com.shiv.BlogAppBackend.Entities.Post;
import com.shiv.BlogAppBackend.Entities.User;
import com.shiv.BlogAppBackend.Exception.ResourceNotFoundException;
import com.shiv.BlogAppBackend.Payloads.PostDto;
import com.shiv.BlogAppBackend.Repository.CategoryRepo;
import com.shiv.BlogAppBackend.Repository.PostRepo;
import com.shiv.BlogAppBackend.Repository.UserRepo;
import com.shiv.BlogAppBackend.Services.PostService;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private PostRepo postRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Override
    public PostDto createPost(PostDto postDto, Integer userId , Integer categoryId) {

        User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "userId", userId));
        Category category = this.categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("Category", "categoryId", categoryId));
        Post post = this.modelMapper.map(postDto,Post.class);
        post.setImageName("default.png");
        post.setDate(new Date());
        post.setUser(user);
        post.setCategory(category);

        Post newPost = this.postRepo.save(post);

        return this.modelMapper.map(newPost,PostDto.class);
        
        
    }

    @Override
    public Post updaePost(PostDto postDto, Integer postId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deletePost'");

    }

    @Override
    public void deletePost(Integer postId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deletePost'");
    }

    @Override
    public List<Post> getAllPost() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllPost'");
    }

    @Override
    public Post getPsotById(Integer postId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPsotById'");
    }

    @Override
    public List<Post> getPostByCategory(Integer categoryId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPostByCategory'");
    }

    @Override
    public List<Post> getPostByUser(Integer userId) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getPostByUser'");
    }

    @Override
    public List<Post> searchPosts(String keyword) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'searchPosts'");
    }

}
