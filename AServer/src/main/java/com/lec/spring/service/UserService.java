package com.lec.spring.service;

import com.lec.spring.domain.User;
import com.lec.spring.dto.JwtTokenDto;
import com.lec.spring.dto.UserRequestDto;
import com.lec.spring.dto.UserResponseDto;
import com.lec.spring.jwt.JwtTokenProvider;
import com.lec.spring.repository.UserRepository;
import com.lec.spring.util.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserService {

    private final AuthenticationManagerBuilder managerBuilder;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider tokenProvider;

    public UserResponseDto register(UserRequestDto requestDto) {
        if (userRepository.existsByEmail(requestDto.getEmail())) {
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        User user = requestDto.toMember(passwordEncoder);
        return UserResponseDto.of(userRepository.save(user));

    }

    // login 메소드는 UserRequestDto에 있는 메소드 toAuthentication를 통해 생긴 UsernamePasswordAuthenticationToken 타입의 데이터를 가지게 된다.
    // 주입받은 Builder를 통해 AuthenticationManager를 구현한 ProviderManager를 생성한다.
    // 이후 ProviderManager는 데이터를 AbstractUserDetailsAuthenticationProvider 의 자식 클래스인 DaoAuthenticationProvider를 주입받아서 호출한다.
    // DaoAuthenticationProvider 내부에 있는 authenticate에서 retrieveUser을 통해 DB에서의 User의 비밀번호가 실제 비밀번호가 맞는지 비교한다.
    // retrieveUser에서는 DB에서의 User를 꺼내기 위해, CustomUserDetailService에 있는 loadUserByUsername을 가져와 사용한다.
    public JwtTokenDto login(UserRequestDto requestDto) {

        UsernamePasswordAuthenticationToken authenticationToken = requestDto.toAuthentication();

        Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);

        return tokenProvider.generateToken(authentication);

    }

    // 헤더에 있는 token 값을 토대로 Member의 data를 건내주는 메소드
    public UserResponseDto getMyInfoBySecurity() {
        return userRepository.findByUsername(SecurityUtil.getCurrentUsername())
                .map(UserResponseDto::of)
                .orElseThrow(() -> new RuntimeException("로그인 정보가 없습니다"));
    }


}
