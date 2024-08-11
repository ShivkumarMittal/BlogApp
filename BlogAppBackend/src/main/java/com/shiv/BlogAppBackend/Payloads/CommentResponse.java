package com.shiv.BlogAppBackend.Payloads;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CommentResponse {

    private int id;

    private String comment;

    private int userId;

    private String userName;


}
