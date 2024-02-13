package com.lec.spring.repository;

import com.lec.spring.domain.Comment;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {

    // 특정 글의 댓글 조회
    List<Comment> findByPost(Long post, Sort sort);

}
