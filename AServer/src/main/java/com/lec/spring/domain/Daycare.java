package com.lec.spring.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "daycare")
@DynamicInsert
@DynamicUpdate
public class Daycare {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String sigun;

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private String status;

    @Column
    private String address;

    @Column
    private String phoneNum;

    @Column
    private String homepage;

    @Column
    private long playgroundCnt;

    @Column
    private long cctvCnt;

    @Column
    private String schoolBus;

    @Column
    private String service;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "daycare_id")
    @ToString.Exclude
    @Builder.Default
    private List<DaycareReview> daycareReviews = new ArrayList<>();

}
