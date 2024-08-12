package com.shiv.BlogAppBackend.Payloads;

import java.util.Date;

import lombok.Data;

@Data
public class JwtAuthResponse {

    private String token;
    private UserDto user;
    private Date expirationTime;

}
