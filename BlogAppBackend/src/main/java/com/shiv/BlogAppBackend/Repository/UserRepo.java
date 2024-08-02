package com.shiv.BlogAppBackend.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiv.BlogAppBackend.Entities.User;

public interface UserRepo extends JpaRepository<User,Integer> {

    Optional<User> findByEmail(String email);

}
