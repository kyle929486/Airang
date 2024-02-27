package com.lec.spring.controller;

import com.lec.spring.service.ApiService;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ApiController {


    @Autowired
    private final ApiService apiService;


    @GetMapping("/daycare")
    public void loadAndSave(@RequestParam String startPage, @RequestParam String endPage) throws IOException, ParseException {
        apiService.daycareLoad(startPage, endPage);
    }





}
