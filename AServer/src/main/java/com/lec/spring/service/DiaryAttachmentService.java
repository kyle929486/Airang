package com.lec.spring.service;

import com.lec.spring.domain.DiaryAttachment;
import com.lec.spring.repository.DiaryAttachmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DiaryAttachmentService {

    @Autowired
    private DiaryAttachmentRepository diaryAttachmentRepository;

    public DiaryAttachment findById(Long id) {
        return diaryAttachmentRepository.findById(id).orElse(null);
    }

}
