package com.macarts.basicdemo.countries;

import java.util.List;

public interface CountryService {

    // Save operation
    Country saveCountry(Country country);

    // Read operation
    List<Country> fetchCountryList();

    // Update operation
    Country updateCountry(Country country,
                                long id);

    // Delete operation
    void deleteCountryById(Long id);

}
