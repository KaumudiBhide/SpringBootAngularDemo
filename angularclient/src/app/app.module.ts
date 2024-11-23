import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { CountryService } from './service/country-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { AppRoutingModule } from './approuting.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({

  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule],

  providers: [CountryService],
})
export class AppModule { }
