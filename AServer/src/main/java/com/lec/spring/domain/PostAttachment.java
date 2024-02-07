package com.lec.spring.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "post_attachment")
public class PostAttachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postAttachmentID;

    @Column(name = "postID")
    private Long post;

    @Column(nullable = false)
    private String sourceName;

    @Column(nullable = false)
    private String fileName;

    @Transient
    private boolean isImage;

}
