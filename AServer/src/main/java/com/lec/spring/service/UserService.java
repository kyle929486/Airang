package com.lec.spring.service;

import com.lec.spring.domain.Authority;
import com.lec.spring.domain.User;
import com.lec.spring.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    // username(회원 아이디) 로 User 정보 읽어오기
    public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    // 특정 username(회원 아이디) 의 회원이 존재하는지 확인
    public boolean isExist(String username) {
        User user = findByUsername(username);
        return (user != null) ? true : false;
    }

    // 신규회원 등록
    public int register(User user) {
        // DB 에는 회원 username 을 대문자로 저장
        user.setUsername(user.getUsername().toUpperCase());

        // password 는 암호화 해서 저장.  PasswordEncoder 객체 사용
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        // 신규회원은 ROLE_MEMBER 권한을 부여하기
        user.setAuthority(Authority.ROLE_MEMBER);


        // 새로운 회원 (User) 저장.  id 값 받아옴.
        userRepository.saveAndFlush(user); // INSERT (User 테이블)

        return 1;
    }


}
