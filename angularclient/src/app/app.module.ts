import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    FormsModule],
})
export class AppModule { }
