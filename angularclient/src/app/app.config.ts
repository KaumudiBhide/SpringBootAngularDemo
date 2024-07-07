import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CountryService } from './country-service.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), CountryService, provideHttpClient()]
};
