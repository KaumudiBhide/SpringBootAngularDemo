package com.macarts.basicdemo.countries;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Slf4j
@Service
public class CountryServiceImpl implements CountryService {
    @Autowired
    CountryRepository repository;

    @Override
    public Country saveCountry(Country country) {
        return repository.save(country);
    }

    @Override
    public List<Country> fetchCountryList() {
        return (List<Country>)repository.findAll();
    }

    @Override
    public Country updateCountry(Country country, long id) {
        Country countryDB
                = repository.findById(id).get();

        if (Objects.nonNull(country.getName())
                && !"".equalsIgnoreCase(country.getName())) {
            countryDB.setName(country.getName());
        }

        return repository.save(countryDB);
    }

    @Override
    public void deleteCountryById(Long id) {
        repository.deleteById(id);
    }

    @Override
    public List<Country> searchCountries(String code, String name) {

        List<Country> searched
                = repository.searchCountries(code, name);

        log.debug("filtered countries: {}", searched);

        return searched;
    }
}
