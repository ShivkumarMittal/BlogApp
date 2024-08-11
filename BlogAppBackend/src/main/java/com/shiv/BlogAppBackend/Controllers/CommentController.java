package com.shiv.BlogAppBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shiv.BlogAppBackend.Payloads.ApiResponse;
import com.shiv.BlogAppBackend.Payloads.CommentDto;
import com.shiv.BlogAppBackend.Services.CommentService;

@RestController
@RequestMapping("/api")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping("/post/{postId}/user/{userId}/comments")
    public ResponseEntity<CommentDto> createComment(@RequestBody CommentDto comment,@PathVariable Integer postId ,@PathVariable Integer userId)
    {
        CommentDto createdComment = this.commentService.createComment(comment, postId, userId);
        return new ResponseEntity<CommentDto>(createdComment,HttpStatus.CREATED);

    }

    @DeleteMapping("/comments/{commentId}")
    public ResponseEntity<ApiResponse> deleteComment(@PathVariable Integer commentId)
    {
        this.commentService.deleteComment(commentId);
        return new ResponseEntity<ApiResponse>(new ApiResponse("Deleted comment", true),HttpStatus.OK);

    }



}
