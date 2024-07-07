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
  springDesc: string;
  springName: string;
  springUpdated: string;

  constructor(private countryService: CountryService) {
  }

  ngOnInit() {
    this.countryService.getInfo().subscribe((data: any) => {
      console.log(data);
      this.springName = data["name"];
      this.springDesc = data["description"];
      this.springUpdated = data["updated"];
    });
  }
}
