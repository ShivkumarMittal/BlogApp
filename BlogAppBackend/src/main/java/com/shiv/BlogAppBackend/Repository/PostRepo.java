package com.shiv.BlogAppBackend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiv.BlogAppBackend.Entities.Category;
import com.shiv.BlogAppBackend.Entities.Post;
import com.shiv.BlogAppBackend.Entities.User;

public interface PostRepo extends JpaRepository<Post,Integer> {

    List<Post> findByUser(User user);

    List<Post> findByCategory(Category category);

    List<Post> findByTitleContaining(String title);


}
