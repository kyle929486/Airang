package com.lec.spring.service;

import com.lec.spring.domain.Daycare;
import com.lec.spring.repository.DaycareRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DaycareService {

    @Autowired
    private DaycareRepository daycareRepository;

    @Transactional(readOnly = true)
    public List<Daycare> list(String sigun) {
        return daycareRepository.findAllBySigun(sigun);
    }

}
