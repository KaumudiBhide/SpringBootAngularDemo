import { Component } from '@angular/core';
import { CountryService } from '../country-service.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  name: string;
  spring: any;

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getInfo().subscribe((data: any) => {
      console.log(data);
      this.spring = data;
    });
  }
}
