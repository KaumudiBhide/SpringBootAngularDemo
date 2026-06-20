package com.macarts.basicdemo.countries;

import java.util.List;

public interface CountryRepositoryCustom {
    List<Country> searchCountries(
            String name,
            String code
    );
}
