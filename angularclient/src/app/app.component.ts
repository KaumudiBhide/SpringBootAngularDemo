import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { CountryService } from './service/country-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  version: string;
  readonly alertPopup = inject(MatDialog);

  constructor(private countryService: CountryService) {
    this.title = 'Spring Boot - Angular Application';
  }

  ngOnInit() {
    this.countryService.getInfo().subscribe((data: any) => {
      console.log(data);
      this.version = data["version"];
    });
  }

  openAboutDialog() {
    // show the message
    this.alertPopup.open(AlertPopupComponent, {
      data: {
        title: 'SpringBootAngularDemo',
        message: [
          this.version,
          '\u00A9 2026 MacArts Inc. ',
          'Licensed under the MIT License.'
        ],
        type: 'About',
      }
    });
  }
}
