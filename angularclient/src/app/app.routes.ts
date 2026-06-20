import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { InfoComponent } from './info/info.component';
import { CoinTableComponent } from './coin-table/coin-table.component';
import { SearchScreenComponent } from './search-screen/search-screen.component';

export const routes: Routes = [
  { path: 'countries', component: CountryListComponent },
  { path: 'info', component: InfoComponent },
  { path: 'coins', component: CoinTableComponent },
  { path: 'search', component: SearchScreenComponent },
];


