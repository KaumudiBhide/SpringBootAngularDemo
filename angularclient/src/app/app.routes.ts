import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { InfoComponent } from './info/info.component';
import { CoinTableComponent } from './coin-table/coin-table.component';

export const routes: Routes = [
  { path: 'country-list', component: CountryListComponent },
  { path: 'countries', component: CountryListComponent },
  { path: 'info', component: InfoComponent },
  { path: 'coins', component: CoinTableComponent }
];


