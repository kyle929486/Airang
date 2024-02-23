package com.lec.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class JwtTokenDto {
    private String grantType;
    private String accessToken;
    private String refreshToken;
    private Long accessTokenExpiresIn;
    // grantType은 JWT에 대한 인증 타입. "Bearer" 인증방식 사용.
    // AccessToken을 HTTP 요청의 Authorization 헤더에 포함하여 전송.
    // ex) Authorization: Bearer <access_token>
}