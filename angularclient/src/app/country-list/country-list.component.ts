import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
   countryName: string;
   countryId: string;
   cName: string;
   cId: string;

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.findAll().subscribe((data: any) => {
      console.log(data);
      this.countryId = data[0]["id"];
      this.countryName = data[0]["name"];
      this.cId = data[1]["id"];
      this.cName = data[1]["name"];
    });
  }

}
