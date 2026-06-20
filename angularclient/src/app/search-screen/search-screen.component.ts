import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { SearchPanelCardComponent } from '../search-panel-card/search-panel-card.component';
import { Country } from '../model/data-models';

@Component({
  selector: 'app-search-screen',
  standalone: true,
  imports: [
    CommonModule,
    SearchPanelCardComponent
  ],
  templateUrl: './search-screen.component.html',
  styleUrl: './search-screen.component.css'
})
export class SearchScreenComponent {
  protected filteredCountries: Country[];

  onFilter(eventData: any) {
    this.filteredCountries = eventData;
    console.log("Filter Applied: ");
    console.log(this.filteredCountries);
  }
}
