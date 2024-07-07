import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
