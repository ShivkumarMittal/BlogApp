package com.shiv.BlogAppBackend.Services;

import java.util.List;

import com.shiv.BlogAppBackend.Payloads.UserDto;

public interface UserService {

    UserDto createUser(UserDto user);
    UserDto updateUser(UserDto user,Integer userId);
    UserDto getUserById(Integer userId);
    List<UserDto> getAlluser();
    void deleteUser(Integer userId);

}
