package com.shiv.BlogAppBackend.Security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtHelper jwtHelper;


    // call when api hit
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException{
    

    // 1. get token
    String requestToken = request.getHeader("Authorization");

    System.out.println(requestToken+"***************************************************");

    String username = null;
    String token = null;
    if(requestToken!=null && requestToken.startsWith("Bearer")){
        token = requestToken.substring(7);

        try {
            username = this.jwtHelper.extractUsername(token);
        } catch (IllegalArgumentException e) {
            System.out.println("Unable to get jwt token");
        }
        catch(ExpiredJwtException e){
            System.out.println("Jwt token has expired");
        }
        catch(MalformedJwtException e){
            System.out.println("Invalid jwt");

        }

        // once we get token we validate now
        if (username != null) {
            System.out.println("************************************"+username+"*********************");
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (this.jwtHelper.validateToken(token)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(auth);
            }
        }


    }
    else{
        System.out.println("Jwt token not start with Bearer");
    }

    filterChain.doFilter(request, response);


}

}
