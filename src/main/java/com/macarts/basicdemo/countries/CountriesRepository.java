package com.macarts.basicdemo.countries;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountriesRepository extends CrudRepository<Country, Long> { }
