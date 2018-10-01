package nl.maastro.beslissamenbackend.web.controller;

import org.apache.logging.log4j.LogManager;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javassist.NotFoundException;

@ControllerAdvice
public class Advice extends ResponseEntityExceptionHandler {
    
    private static final org.apache.logging.log4j.Logger logger = LogManager.getLogger(Advice.class);
    
    @ExceptionHandler(value = {IllegalStateException.class})
    protected ResponseEntity<Object> handleIllegalStateException(IllegalStateException e, WebRequest request) {
        logger.error(e);
        String responseBody = e.getMessage();
        return handleExceptionInternal(e, responseBody, 
                new HttpHeaders(), HttpStatus.BAD_REQUEST, request);
    }
    
    @ExceptionHandler(value = {NotFoundException.class})
    protected ResponseEntity<Object> handleNotFoundException(NotFoundException e, WebRequest request) {
        logger.error(e);
        String responseBody = e.getMessage();
        return handleExceptionInternal(e, responseBody, 
                new HttpHeaders(), HttpStatus.NOT_FOUND, request);
    }
    
}