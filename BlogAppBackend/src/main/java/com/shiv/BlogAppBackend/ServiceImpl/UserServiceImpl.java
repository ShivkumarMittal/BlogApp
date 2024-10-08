package com.shiv.BlogAppBackend.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.shiv.BlogAppBackend.Exception.*;
import com.shiv.BlogAppBackend.Entities.User;
import com.shiv.BlogAppBackend.Payloads.UserDto;
import com.shiv.BlogAppBackend.Repository.UserRepo;
import com.shiv.BlogAppBackend.Services.UserService;


@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDto createUser(UserDto userDto) {
        User user = this.dtoToUser(userDto);
        user.setPassword(passwordEncoder.encode(userDto.getPassword()));
        User savedUser = this.userRepo.save(user);
        return this.userToDto(savedUser);
        
    }

    @Override
    public UserDto updateUser(UserDto userDto, Integer userId) {
        User user = this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundException("User","userId",userId));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        user.setAbout(userDto.getAbout());
        user.setPassword(userDto.getPassword());

        User updatedUser = this.userRepo.save(user);
        return this.userToDto(updatedUser);
        
    }

    @Override
    public UserDto getUserById(Integer userId) {
        User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "Id", userId));
        return this.userToDto(user);
        
    }

    @Override
    public List<UserDto> getAlluser() {
        List<User> users= this.userRepo.findAll();
        List<UserDto> userDto = users.stream().map(user->this.userToDto(user)).collect(Collectors.toList());
        return userDto;
        
    }

    @Override
    public void deleteUser(Integer userId) {
        User user = this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User", "Id", userId));
        this.userRepo.delete(user);
        
    }

    private User dtoToUser(UserDto userDto)
    {
        // User user = new User();
        // user.setId(userDto.getId());
        // user.setName(userDto.getName());
        // user.setEmail(userDto.getEmail());
        // user.setAbout(userDto.getAbout());
        // user.setPassword(userDto.getPassword());
        // return user;

        User user = this.modelMapper.map(userDto,User.class);
        return user;
    }

    private UserDto userToDto(User user)
    {
        // UserDto userDto = new UserDto();
        // userDto.setId(user.getId());
        // userDto.setEmail(user.getEmail());
        // userDto.setName(user.getName());
        // userDto.setPassword(user.getPassword());
        // userDto.setAbout(user.getAbout());

        // return userDto;

        return this.modelMapper.map(user,UserDto.class);
    }

}
