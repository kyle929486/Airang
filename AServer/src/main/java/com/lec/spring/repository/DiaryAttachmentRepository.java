package com.lec.spring.repository;

import com.lec.spring.domain.DiaryAttachment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiaryAttachmentRepository extends JpaRepository<DiaryAttachment, Long> {

    // 특정 일기의 첨부파일들
    List<DiaryAttachment> findByDiary(Long id);

}
