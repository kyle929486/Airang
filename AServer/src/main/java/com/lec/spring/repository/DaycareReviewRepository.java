package com.lec.spring.repository;

import com.lec.spring.domain.DaycareReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DaycareReviewRepository extends JpaRepository<DaycareReview, Long> {
}
