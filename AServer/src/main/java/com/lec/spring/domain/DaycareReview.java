package com.lec.spring.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "daycare_review")
@DynamicInsert
@DynamicUpdate
public class DaycareReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @ToString.Exclude
    private User user;

    @Column(name = "daycare_id", nullable = false)
    private Long daycare;

    @ColumnDefault(value = "0")
    private boolean isLike;

    @Column
    private String reviewContent;



}
