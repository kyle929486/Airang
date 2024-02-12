package com.lec.spring.service;

import com.lec.spring.domain.Post;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

public interface BoardService {

    int write(Post post, Map<String, MultipartFile> files);

}
