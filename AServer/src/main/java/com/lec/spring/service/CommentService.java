package com.lec.spring.service;

import com.lec.spring.domain.Comment;
import com.lec.spring.domain.QryCommentList;
import com.lec.spring.domain.QryResult;
import com.lec.spring.domain.User;
import com.lec.spring.repository.CommentRepository;
import com.lec.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private UserRepository userRepository;

    // 특정 글(id) 의 댓글 목록

    public QryCommentList list(Long id) {
        QryCommentList list = new QryCommentList();

        List<Comment> comments = commentRepository.findByPost(id, Sort.by(Sort.Order.desc("id")));

        list.setCount(comments.size());   // 댓글의 개수
        list.setList(comments);
        list.setStatus("OK");

        return list;
    }

    // 특정 글 (postId) 에 특정 사용자(userId) 가 댓글 작성

    public QryResult write(Long postId, Long userId, String content) {

        User user = userRepository.findById(userId).orElse(null);

        Comment comment = Comment.builder()
                .user(user)
                .content(content)
                .post(postId)
                .build();

        commentRepository.saveAndFlush(comment); // INSERT

        QryResult result = QryResult.builder()
                .count(1)
                .status("OK")
                .build();

        return result;
    }

    // 특정 댓글(id) 삭제

    public QryResult delete(Long id) {
        Comment comment = commentRepository.findById(id).orElse(null);
        int count = 0;  // 존재하는지 여부 확인하고 삭제
        String status = "FAIL";

        if (comment != null) {
            commentRepository.delete(comment); // DELETE
            count = 1;
            if (count > 0) status = "OK";
        }

        QryResult result = QryResult.builder()
                .count(count)
                .status(status)
                .build();

        return result;
    }

}
