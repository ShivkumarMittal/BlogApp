package com.shiv.BlogAppBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiv.BlogAppBackend.Entities.Comment;

public interface CommentRepo extends JpaRepository<Comment,Integer> {

}
