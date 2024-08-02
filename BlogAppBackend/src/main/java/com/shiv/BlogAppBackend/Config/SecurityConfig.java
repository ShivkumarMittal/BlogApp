package com.shiv.BlogAppBackend.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.shiv.BlogAppBackend.Security.CustomUserDetailService;
import com.shiv.BlogAppBackend.Security.JwtAuthenticationEntryPoint;
import com.shiv.BlogAppBackend.Security.JwtAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Autowired
    private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    @Autowired
    private JwtAuthenticationFilter jwtFilter;

    @Autowired
    private PasswordEncoder passwordEncoder;

   @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
             http.csrf(csrf -> csrf.disable())
            .cors(cors -> cors.disable())
            .authorizeHttpRequests(auth ->
            auth.requestMatchers("/api/users/").permitAll()
            .requestMatchers("/api/v1/auth/login").permitAll()
            .anyRequest().authenticated())
            .exceptionHandling(ex ->ex.authenticationEntryPoint(jwtAuthenticationEntryPoint))
            .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

            http.addFilterBefore(jwtFilter,UsernamePasswordAuthenticationFilter.class);
            http.authenticationProvider(daoAuthenticationProvidero());
            return http.build();

            
    }

    


    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvidero(){
        DaoAuthenticationProvider Provider =  new DaoAuthenticationProvider();
        Provider.setUserDetailsService(customUserDetailService);
        Provider.setPasswordEncoder(passwordEncoder);
        return Provider;

    }


    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration auth) throws Exception {
        return auth.getAuthenticationManager();
    }


    // @Bean
    // public PasswordEncoder passwordEncoder() {
    //     return new BCryptPasswordEncoder();
    // }


    


    // @Bean
    // public AuthenticationManagerBuilder authenticationManagerBuilder(AuthenticationManagerBuilder auth) throws Exception {
    //     auth.userDetailsService(this.customUserDetailService).passwordEncoder(passwordEncoder());
    //     return auth;
    // }

}
