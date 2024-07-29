package com.shiv.BlogAppBackend.Services;


import com.shiv.BlogAppBackend.Payloads.CategoryDto;
import java.util.List;

public interface CategoryService {

    //create
    public CategoryDto createCategory(CategoryDto categoryDto);

    //update
    public CategoryDto updateCategory(CategoryDto categoryDto,Integer categoryId);
    
    //delete
    public void deleteCategory(Integer categoryId);

    //get by id
    public CategoryDto getCategoryById(Integer categoryId);

    //get all category by id
    public List<CategoryDto> getAllCategories();


}
