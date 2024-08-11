package com.shiv.BlogAppBackend.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import com.shiv.BlogAppBackend.Entities.Comment;
import com.shiv.BlogAppBackend.Entities.Post;
import com.shiv.BlogAppBackend.Entities.User;
import com.shiv.BlogAppBackend.Exception.ResourceNotFoundException;
import com.shiv.BlogAppBackend.Payloads.CommentDto;
import com.shiv.BlogAppBackend.Payloads.CommentResponse;
import com.shiv.BlogAppBackend.Repository.CommentRepo;
import com.shiv.BlogAppBackend.Repository.PostRepo;
import com.shiv.BlogAppBackend.Repository.UserRepo;
import com.shiv.BlogAppBackend.Services.CommentService;

@Service
public class commentServiceImpl implements CommentService{

    @Autowired
    private PostRepo postRepo;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private CommentRepo commentRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public CommentResponse createComment(CommentDto commentDto, Integer postId) {
        Post post = this.postRepo.findById(postId).orElseThrow(()-> new ResourceNotFoundException("Post", "postId", postId));
        User user = this.userRepo.findById(commentDto.getUserId()).orElseThrow(()->new ResourceNotFoundException("User", "UserId", commentDto.getUserId()));
        Comment comment = this.modelMapper.map(commentDto,Comment.class);
        

        comment.setPost(post);
        comment.setUser(user);
        Comment savedComment = this.commentRepo.save(comment);
        return this.modelMapper.map(savedComment,CommentResponse.class);

    }

    @Override
    public void deleteComment(Integer commentId) {
        Comment comment = this.commentRepo.findById(commentId).orElseThrow(()-> new ResourceNotFoundException("comment", "CommentId", commentId));
        this.commentRepo.delete(comment);
    }

}
