package com.lec.spring.service;


import com.lec.spring.domain.Post;
import com.lec.spring.repository.PostRepository;
import com.lec.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private PostRepository postRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public Post write(Post post) {

//        User user = SecurityUtil.getLoggedUser();
//        user = userRepository.findById(user.getId()).orElse(null);
//        post.setUser(user);

        return postRepository.save(post);
    }

    @Transactional
    public Post detail(Long id) {
        Post postEntity = postRepository.findById(id).orElse(null);

        if (postEntity != null) {
            postEntity.setViewCnt(postEntity.getViewCnt() + 1);
            postRepository.save(postEntity);
        }

        return postEntity;
    }

    @Transactional(readOnly = true)
    public List<Post> list() {
        return postRepository.findAll();
    }

    @Transactional
    public Post update(Post post) {
        Post postEntity = postRepository.findById(post.getId()).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 게시글입니다"));

        postEntity.setSubject(post.getSubject());
        postEntity.setContent(post.getContent());

        postRepository.save(postEntity);

        return postEntity;
    }

    @Transactional
    public int delete(Long id) {
        boolean exists = postRepository.existsById(id);
        if (!exists) return 0;

        postRepository.deleteById(id);
        return 1;
    }

}
