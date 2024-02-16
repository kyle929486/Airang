package com.lec.spring.service;


import com.lec.spring.domain.Post;
import com.lec.spring.domain.PostAttachment;
import com.lec.spring.domain.User;
import com.lec.spring.repository.PostAttachmentRepository;
import com.lec.spring.repository.PostRepository;
import com.lec.spring.repository.UserRepository;
import com.lec.spring.util.SecurityUtil;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Map;

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
