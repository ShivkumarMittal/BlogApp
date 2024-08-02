package com.shiv.BlogAppBackend.Exception;

import lombok.NoArgsConstructor;


public class APIException extends RuntimeException{

    public APIException(String message){
        super(message);

    }

    public APIException(){
        
    }




}
