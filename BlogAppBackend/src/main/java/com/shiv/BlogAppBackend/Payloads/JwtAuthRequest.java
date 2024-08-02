package com.shiv.BlogAppBackend.Payloads;

import lombok.Data;

@Data
public class JwtAuthRequest {

    // username is email here
    private String userName;
    private String password;

}
