package com.lec.spring.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Entity(name = "user")
@DynamicInsert // INSERT 시 null인 필드 제외
@DynamicUpdate // UPDATE 시 null인 필드 제외
public class User extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    @JsonIgnore
    private String password;

    @Transient // DB에 반영 안 함 (영속화 하지 않음)
    @ToString.Exclude  // toString() 결과에서 뺌.
    @JsonIgnore
    private String re_password;  // 비밀번호 확인 입력

//    @Column(unique = true, nullable = false)
//    private String email;

    @Column
    @ToString.Exclude
    @JsonIgnore
    private String authority;

    private String providerId;

}
