package com.lec.spring.dto;

import com.lec.spring.domain.Authority;
import com.lec.spring.domain.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRequestDto {

    private String username;
    private String email;
    private String password;

    public User toMember(PasswordEncoder passwordEncoder) {
        return User.builder()
                .username(username)
                .password(passwordEncoder.encode(password))
                .email(email)
                .authority(Authority.ROLE_MEMBER)
                .build();
    }

    // username + password 를 기반으로 Authentication 객체 생성
    // 이때 authentication 은 인증 여부를 확인하는 authenticated 값이 false
    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(username, password);
    }


}
