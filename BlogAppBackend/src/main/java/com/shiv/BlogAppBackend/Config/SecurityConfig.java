package com.shiv.BlogAppBackend.Config;

import java.io.IOException;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
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
import org.springframework.stereotype.Component;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.shiv.BlogAppBackend.Security.CustomUserDetailService;
import com.shiv.BlogAppBackend.Security.JwtAuthenticationEntryPoint;
import com.shiv.BlogAppBackend.Security.JwtAuthenticationFilter;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletResponse;


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
            .requestMatchers(HttpMethod.GET).permitAll()
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


    

@Component
	public class CORSFilter implements Filter {

	    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
	        HttpServletResponse response = (HttpServletResponse) res;
	        response.setHeader("Access-Control-Allow-Origin", "*");
	        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
	        response.setHeader("Access-Control-Max-Age", "3600");
	        response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	        chain.doFilter(req, res);
	    }

	    public void init(FilterConfig filterConfig) {}

	    public void destroy() {}

	}


    // @Bean
    // public FilterRegistrationBean coresFilter(){
    //     UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

    //     CorsConfiguration corsConfiguration = new CorsConfiguration();
    //     corsConfiguration.setAllowCredentials(true);
    //     corsConfiguration.addAllowedOriginPattern("*");
    //     corsConfiguration.addAllowedHeader("Authorization");
    //     corsConfiguration.addAllowedHeader("Content-Type");
    //     corsConfiguration.addAllowedHeader("Accept");
    //     corsConfiguration.addAllowedMethod("POST");
    //     corsConfiguration.addAllowedMethod("GET");
    //     corsConfiguration.addAllowedMethod("DELETE");
    //     corsConfiguration.addAllowedMethod("PUT");
    //     corsConfiguration.addAllowedMethod("OPTIONS");
    //     corsConfiguration.setMaxAge(3600L);

    //     source.registerCorsConfiguration("/**", corsConfiguration);

    //     FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
    //     return bean;
    // }


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
