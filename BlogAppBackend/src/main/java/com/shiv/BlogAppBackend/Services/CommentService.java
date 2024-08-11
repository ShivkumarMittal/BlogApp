package com.shiv.BlogAppBackend.Services;

import org.springframework.stereotype.Service;

import com.shiv.BlogAppBackend.Payloads.CommentDto;
import com.shiv.BlogAppBackend.Payloads.CommentResponse;

public interface CommentService {

    public CommentResponse createComment(CommentDto commentDto,Integer postId);
    void deleteComment(Integer commentId);

}
