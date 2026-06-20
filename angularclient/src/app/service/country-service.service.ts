import { Injectable, inject } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpParams, HttpClient,
  HttpHandler, HttpRequest, HttpErrorResponse, HttpHeaders
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Country } from '../model/data-models';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';

const httpHeaders: HttpHeaders = new HttpHeaders({
    'Accept': '*/*',
    'Content-Type': 'application/json',
    responseType: 'json'
});

@Injectable()
export class CountryService {
  countryUrl: string;
  springUrl: string;
  mainUrl: string = 'http://localhost:6600';
  readonly infoAlert = inject(MatDialog);

  constructor(private http: HttpClient) {
      this.countryUrl = this.mainUrl + '/countries';
      this.springUrl = this.mainUrl + '/json';
  }

private handleError(error: HttpErrorResponse) {
    let message = 'An unexpected error occurred.';
    if (error.error instanceof ErrorEvent) {
      message = `Client-side error: ${error.error.message}`;
    } else {
      message = `Server returned code ${error.status}, message: ${error.message}`;
    }

    // Log to console
    console.error('HTTP Error:', error);
    this.showAlert();
    return throwError(() => new Error(message));
  }

  private showAlert() {
  // Open dialog directly
      this.infoAlert.open(AlertPopupComponent, {
        data: {
          title: 'DB Server Error!',
          message: [
            'Unable to fetch data!',
            'Is DB server running?',
            'Check logs for details...'
          ],
          type: 'DBError',
        }
      });
  }

  public findAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl);
  }

  public search(code: string, name: string): Observable<Country[]> {
    let params = new HttpParams();

    // Add parameters only if they are non-empty
    if (code) params = params.set('code', code);
    if (name) params = params.set('name', name);

    const url = `${this.mainUrl}/search`;
    console.log('Request URL:', url, 'Params:', params.toString());

    return this.http.get<any[]>(url, { params: params, headers: httpHeaders }).pipe(
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  public getInfo(): Observable<any[]> {
     return this.http.get<any[]>(this.springUrl);
  }

  public save(country: Country) {
    return this.http.post<Country>(this.countryUrl, Country);
  }

}
