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
@Entity(name = "facility_review")
@DynamicInsert
@DynamicUpdate
public class FacilityReview {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @ToString.Exclude
    private User user;

    @Column(name = "facility_id", nullable = false)
    private Long facility;

    @ColumnDefault(value = "0")
    private boolean isLike;

    @Column
    private String reviewContent;

}
