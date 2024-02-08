package com.lec.spring.repository;

import com.lec.spring.domain.DiaryAttachment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DiaryAttachmentRepository extends JpaRepository<DiaryAttachment, Long> {
}
