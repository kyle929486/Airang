package com.lec.spring.domain;

import jakarta.persistence.*;

import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode(callSuper = true)
@Entity(name = "post")
@DynamicInsert
@DynamicUpdate
public class Post extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false, columnDefinition = "LONGTEXT")
    private String content;

    @ColumnDefault(value = "0")
    private long viewCnt;

    @ManyToOne(optional = false) // Post 입장에서 user는 반드시 존재하므로 outer join 할 필요 없음
    @ToString.Exclude
    private User user;  // 글 작성자 (FK)


    // 첨부파일
    @OneToMany(cascade = CascadeType.ALL) // cascade = CascadeType.ALL 삭제 등의 동작 발생 시 child 자동 삭제
    @JoinColumn(name = "post_id")
    @ToString.Exclude
    @Builder.Default
    private List<PostAttachment> fileList = new ArrayList<>();


    // 댓글
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "post_id")
    @ToString.Exclude
    @Builder.Default
    private List<Comment> comments = new ArrayList<>();

}
