package com.lec.spring.controller;

import com.lec.spring.domain.Post;
import com.lec.spring.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

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
    public ResponseEntity<?> write(@RequestBody Post post, Map<String, MultipartFile> files) {
        return new ResponseEntity<>(boardService.write(post, files), HttpStatus.CREATED);
    }

    @CrossOrigin
    @GetMapping("/detail/{id}")
    public ResponseEntity<?> detail(@PathVariable Long id) {
        return new ResponseEntity<>(boardService.detail(id), HttpStatus.OK);
    }

    @CrossOrigin
    @PutMapping("/update")
    public ResponseEntity<?> update(@RequestBody Post post, Map<String, MultipartFile> files, Long[] delfile) {
        return new ResponseEntity<>(boardService.update(post, files, delfile), HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return new ResponseEntity<>(boardService.delete(id), HttpStatus.OK);
    }

}

