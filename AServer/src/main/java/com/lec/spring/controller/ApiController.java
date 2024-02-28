package com.lec.spring.controller;

import com.lec.spring.service.ApiService;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {


    @Autowired
    private final ApiService apiService;

    @CrossOrigin
    @GetMapping("/daycare/{startPage}/{endPage}")
    public ResponseEntity<?> daycareLoad(@PathVariable String startPage, @PathVariable String endPage) throws IOException, ParseException {
        return new ResponseEntity<>(apiService.daycareLoad(startPage, endPage), HttpStatus.OK);
    }





}
