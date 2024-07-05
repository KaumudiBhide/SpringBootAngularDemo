import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Country } from '../country';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
    countries: Country[];
    countryService: CountryService;

// private
  constructor(countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.findAll().subscribe((data: any) => {
      this.countries = data;
    });
  }

}
