package com.shiv.BlogAppBackend.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shiv.BlogAppBackend.Exception.APIException;
import com.shiv.BlogAppBackend.Payloads.JwtAuthRequest;
import com.shiv.BlogAppBackend.Payloads.JwtAuthResponse;
import com.shiv.BlogAppBackend.Security.JwtHelper;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    private JwtHelper jwtHelper;

    

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<JwtAuthResponse> createToken(
        @RequestBody JwtAuthRequest request
    )throws Exception
    {
        System.out.println(request.getUserName()+"*************"+"////////////////////////");
        System.out.println(request.getPassword()+"*************"+"////////////////////////");
        this.authenticate(request.getUserName(),request.getPassword());
        System.out.println(request.getUserName()+"*************"+"------------------------");
        // UserDetails userDetail = this.userDetailsService.loadUserByUsername(request.getUserName());
        String generatedToken = this.jwtHelper.generateToken(request.getUserName());
        System.out.println(generatedToken+"*************"+"+++++++++++++++++++++++");
        JwtAuthResponse response = new JwtAuthResponse();
        response.setToken(generatedToken);
        return new ResponseEntity<JwtAuthResponse>(response,HttpStatus.OK);

        
    }

    private void authenticate(String username,String password) throws Exception{

        System.out.println("all running");
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(username, password);
        try {
            this.authenticationManager.authenticate(authenticationToken);
        } catch (BadCredentialsException e) {
            System.out.println("invalid details");
            throw new APIException("Invalid details");
            
        }
        System.out.println("all done");
    }
}
