package com.lec.spring.repository;

import com.lec.spring.domain.PostAttachment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostAttachmentRepository extends JpaRepository<PostAttachment, Long> {

    // 특정 글의 첨부파일들
    List<PostAttachment> findByPost(Long id);

}
