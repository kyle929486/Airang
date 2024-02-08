package com.lec.spring.repository;

import com.lec.spring.domain.Daycare;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DaycareRepository extends JpaRepository<Daycare, Long> {
}
