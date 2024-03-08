package com.lec.spring.repository;

import com.lec.spring.domain.Facility;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FacilityRepository extends JpaRepository<Facility, Long> {

    Optional<Facility> findByCode(String code);
    boolean existsByCode(String code);
    List<Facility> findAllBySigun(String sigun);

}
