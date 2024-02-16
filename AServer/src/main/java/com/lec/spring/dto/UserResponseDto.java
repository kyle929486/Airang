package com.lec.spring.dto;

import com.lec.spring.domain.Authority;
import com.lec.spring.domain.User;
import lombok.*;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponseDto {

    private String username;
    private String email;
    private Authority authority;

    public static UserResponseDto of(User user) {
        return UserResponseDto.builder()
                .username(user.getUsername())
                .email(user.getEmail())
                .authority(user.getAuthority())
                .build();
    }

}
