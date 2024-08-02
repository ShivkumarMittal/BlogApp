package com.shiv.BlogAppBackend.Security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.shiv.BlogAppBackend.Entities.User;
import com.shiv.BlogAppBackend.Exception.ResourceNotFoundException;
import com.shiv.BlogAppBackend.Repository.UserRepo;

@Service
public class CustomUserDetailService implements UserDetailsService{

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        
        // loading user from database by username
        System.out.println(username+"*******************************");
        User user = this.userRepo.findByEmail(username).orElseThrow(()-> new ResourceNotFoundException("User", "email:"+username, 0));
        return user;



    }

}
