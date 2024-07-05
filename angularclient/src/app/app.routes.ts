import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';

export const routes: Routes = [
  { path: 'country-list', component: CountryListComponent },
  { path: 'countries', component: CountryListComponent },
];


