package com.lec.spring.repository;

import com.lec.spring.domain.Daycare;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DaycareRepository extends JpaRepository<Daycare, Long> {

    Optional<Daycare> findByCode(String code);
    boolean existsByCode(String code);

}
