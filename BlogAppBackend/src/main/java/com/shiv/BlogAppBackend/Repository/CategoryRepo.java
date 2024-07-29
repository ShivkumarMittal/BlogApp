package com.shiv.BlogAppBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shiv.BlogAppBackend.Entities.Category;

public interface CategoryRepo extends JpaRepository<Category,Integer>{

}
