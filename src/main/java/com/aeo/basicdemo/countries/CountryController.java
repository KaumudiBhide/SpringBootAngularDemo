package com.aeo.basicdemo.countries;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Tag(name = "Country Controller", description = "This service controls country operations")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class CountryController {

    @Autowired
    private CountryService countryService;

    // Save operation
    @PostMapping("/countries")
    public Country saveCountry(@Valid @RequestBody Country country)
    {
        return countryService.saveCountry(country);
    }

    // Read operation
    @GetMapping("/countries")
    public List<Country> fetchCountryList()
    {
        return countryService.fetchCountryList();
    }

    // Update operation
    @PutMapping("/countries/{id}")
    public Country
    updateDepartment(@RequestBody Country country,
                     @PathVariable("id") Long id)
    {
        return countryService.updateCountry(country, id);
    }

    // Delete operation
    @DeleteMapping("/countries/{id}")
    public String deleteCountryById(@PathVariable("id") Long id)
    {
        countryService.deleteCountryById(id);
        return "Deleted Successfully";
    }

}
