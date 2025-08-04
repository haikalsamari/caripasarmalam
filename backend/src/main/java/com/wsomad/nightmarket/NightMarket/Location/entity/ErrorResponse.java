package com.wsomad.nightmarket.NightMarket.Location.entity;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

public class ErrorResponse {
    private LocalDateTime timeStamp;
    private int status;
    private String error;
    private String message;
    private String path;

    public ErrorResponse(HttpStatus status, String message, String path) {
        this.timeStamp = LocalDateTime.now();
        this.status = status.value();
        this.error = status.getReasonPhrase();
    }
}
