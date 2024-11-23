import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../model/country';
import { Observable } from 'rxjs';

const httpHeaders: HttpHeaders = new HttpHeaders({
    'Accept': '*/*',
    'Content-Type': 'application/json',
    responseType: 'json'
});

@Injectable()
export class CountryService {
  countryUrl: string;
  springUrl: string;

  constructor(private http: HttpClient) {
      this.countryUrl = 'http://localhost:6600/countries';
      this.springUrl = 'http://localhost:6600/json';
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }

  public getInfo(): Observable<any[]> {
     return this.http.get<any[]>(this.springUrl);
  }

  public save(country: Country) {
    return this.http.post<Country>(this.countryUrl, Country);
  }

}
