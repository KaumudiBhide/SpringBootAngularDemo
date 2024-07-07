import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './country';
import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
  countryUrl: string;
  http: HttpClient;
  constructor() {
      this.countryUrl = 'http://localhost:6140/countries';
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }

  public save(country: Country) {
    return this.http.post<Country>(this.countryUrl, Country);
  }

}
