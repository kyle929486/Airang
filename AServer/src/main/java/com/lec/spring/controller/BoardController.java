package com.lec.spring.controller;

import com.lec.spring.domain.Post;
import com.lec.spring.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @CrossOrigin
    @GetMapping("/list")
    public ResponseEntity<?> list() {
        return new ResponseEntity<>(boardService.list(), HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/write")
    public ResponseEntity<?> write(@RequestBody Post post) {
        return new ResponseEntity<>(boardService.write(post), HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> detail(@PathVariable Long id) {
        return new ResponseEntity<>(boardService.detail(id), HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Post post) {
        return new ResponseEntity<>(boardService.update(post), HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return new ResponseEntity<>(boardService.delete(id), HttpStatus.OK);
    }

}

