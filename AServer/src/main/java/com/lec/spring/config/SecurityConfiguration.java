package com.lec.spring.config;


import com.lec.spring.jwt.JwtAccessDeniedHandler;
import com.lec.spring.jwt.JwtAuthenticationEntryPoint;
import com.lec.spring.jwt.JwtAuthenticationFilter;
import com.lec.spring.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity // 기본 웹 보안 활성화
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final JwtTokenProvider jwtTokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity

                // REST API이므로 basic auth 및 csrf 보안을 사용하지 않음
                .httpBasic(HttpBasicConfigurer::disable)
                .csrf(CsrfConfigurer::disable)

                // JWT를 사용하기 때문에 세션을 사용하지 않음
                .sessionManagement(configurer -> configurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))

                // 예외 핸들링
                .exceptionHandling(exceptionHandling -> exceptionHandling
                        .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                        .accessDeniedHandler(jwtAccessDeniedHandler))

                // 해당 API에 대해서는 모든 요청을 허가
                .authorizeHttpRequests(authorize -> authorize

                        // URL 과 접근권한 세팅(들)
                        // ↓ 해당 URL로 들어오는 요청은 '인증'만 필요.
                        .requestMatchers("/board/detail/**").authenticated()
                        // ↓ 해당 URL로 들어오는 요청은 '인증' 뿐 아니라 ROLE_MEMBER 나 ROLE_ADMIN 권한을 갖고 있어야 한다. ('인가')
                        .requestMatchers("/search/**", "/board/write/**", "/board/update/**", "/board/delete/**", "/diary/**").hasAnyRole("MEMBER", "ADMIN")
                        // ↓ 그 밖의 다른 요청은 모두 permit!
                        .anyRequest().permitAll())

                // JWT 인증을 위하여 직접 구현한 필터를 UsernamePasswordAuthenticationFilter 전에 실행
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class)

                .build();
    }


    // PasswordEncoder 를 bean 으로 IoC 에 등록
    // IoC 에 등록된다, IoC 내에선 '어디서든' 가져다가 사용할수 있다.

    // encode (암호화)
    // decode (복호화)
    @Bean
    public PasswordEncoder encoder(){
        System.out.println("PasswordEncoder bean 생성");
        return new BCryptPasswordEncoder();
    }

}
