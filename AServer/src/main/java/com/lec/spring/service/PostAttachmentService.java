package com.lec.spring.service;

import com.lec.spring.domain.PostAttachment;
import com.lec.spring.repository.PostAttachmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PostAttachmentService {

    @Autowired
    private PostAttachmentRepository postAttachmentRepository;

    public PostAttachment findById(Long id) {
        return postAttachmentRepository.findById(id).orElse(null);
    }

}
