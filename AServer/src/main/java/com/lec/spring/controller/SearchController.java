package com.lec.spring.controller;

import com.lec.spring.service.DaycareService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/search")
public class SearchController {

    @Autowired
    private DaycareService daycareService;

    @CrossOrigin
    @PostMapping("/list")
    public ResponseEntity<?> list(@RequestBody String sigun) {
        return new ResponseEntity<>(daycareService.list(sigun), HttpStatus.OK);
    }

}
