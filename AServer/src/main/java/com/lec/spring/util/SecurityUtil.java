package com.lec.spring.util;

import com.lec.spring.domain.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

// SecurityContext에 유저 정보가 저장되는 시점을 다루는 클래스
// Request가 들어오면 JwtFilter의 doFilter에서 저장되는데 거기에 있는 인증정보를 꺼내서 반환
public class SecurityUtil {

    public static String getCurrentUsername() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication.getName() == null) {
            throw new RuntimeException("Security Context에 인증 정보가 없습니다.");
        }
        return authentication.getName();
    }

//    public static User getLoggedUser() {
//        return (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//    }

}
