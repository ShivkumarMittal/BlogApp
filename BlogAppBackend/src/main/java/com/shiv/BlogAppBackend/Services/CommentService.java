package com.shiv.BlogAppBackend.Services;

import org.springframework.stereotype.Service;

import com.shiv.BlogAppBackend.Payloads.CommentDto;

public interface CommentService {

    public CommentDto createComment(CommentDto commentDto,Integer postId , Integer userId);
    void deleteComment(Integer commentId);

}
