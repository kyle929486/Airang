package com.lec.spring.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "facility")
@DynamicInsert
@DynamicUpdate
public class Facility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String code;

    @Column
    private String name;

    @Column
    private String serviceType;

    @Column
    private String sigun;

    @Column
    private String age;

    @Column
    private String facilityType;

    @Column
    private String address;

//    @Column
//    private long price;

    @Column
    private boolean isFree;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    private String url;

    @Column
    private String placeName;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "facility_id")
    @ToString.Exclude
    @Builder.Default
    private List<FacilityReview> facilityReviews = new ArrayList<>();

}
