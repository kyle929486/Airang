package com.lec.spring.repository;

import com.lec.spring.domain.FacilityReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacilityReviewRepository extends JpaRepository<FacilityReview, Long> {
}
