package com.fsb.apionlinestore.business.exceptions;


import java.time.Instant;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

import jakarta.persistence.EntityNotFoundException;

@RestControllerAdvice
public class ExceptionHandlerController {

    @ExceptionHandler(DuplicateCodeException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<ErrorResponse> handleDuplicateContactException(DuplicateCodeException e, WebRequest request){
        final ErrorResponse errorResponse = ErrorResponse.builder()
        .timestamp(Instant.now())
        .error("Duplicated email Contact")
        .status(HttpStatus.BAD_REQUEST.value())
        .message(e.getMessage())
        .path(request.getDescription(false))
        .build();

     return new ResponseEntity<>(errorResponse,HttpStatus.BAD_REQUEST);
    }
 
    @ExceptionHandler(EntityNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<ErrorResponse> handleEntityNotFoundException(EntityNotFoundException e, WebRequest request){
        final ErrorResponse errorResponse = ErrorResponse.builder()
        .timestamp(Instant.now())
        .error("Invalid ID")
        .status(HttpStatus.NOT_FOUND.value())
        .message(e.getMessage())
        .path(request.getDescription(false))
        .build();
     return new ResponseEntity<>(errorResponse,HttpStatus.NOT_FOUND);
    } 
//Any Other exception
    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<ErrorResponse> handleException(Exception e, WebRequest request)    {
        final ErrorResponse errorResponse = ErrorResponse.builder()
                .timestamp(Instant.now())
                .error("Internal Server Error")
                .status(HttpStatus.INTERNAL_SERVER_ERROR.value())
                .message(e.getMessage())
                .path(request.getDescription(false))
                .build();
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}