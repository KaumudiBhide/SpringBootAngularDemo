import {
  Component, inject,
  Input, Output, EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Country } from '../model/data-models';
import { CountryService } from '../service/country-service.service';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MaterialModule } from '../material.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AlertPopupComponent } from '../alert-popup/alert-popup.component';
const DATA_LIMIT: number = 10;
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-search-panel-card',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './search-panel-card.component.html',
  styleUrl: './search-panel-card.component.css'
})
export class SearchPanelCardComponent {
  // Define an output event for Filter
  @Output() filterApplied = new EventEmitter<Country[]>();

  protected filteredCountries: Country[];

  protected code: string;
  protected name: string;

  protected count: number = 0;

  readonly infoAlert = inject(MatDialog);

  constructor(protected countryService: CountryService) {
  }

  ngOnInit() {

    this.countryService.findAll().subscribe((data: Country[]) => {
      console.log(data);
      this.filteredCountries = data;
    });
  }

  onFilter(): void {
    let filterCode = this.code ? this.code : '';
    let filterName = this.name ? this.name : '';

    this.countryService.search(filterCode, filterName)
        .subscribe((data: any) => {
          // process the retrieved data
          this.processData(data);
    });
  }

  processData(data: any) {
    console.log("Filtered: ");
    console.log(data);
    this.filteredCountries = data;
    // find the count
    this.count = data.length;
    if(this.count === 0) {
      this.showAlert('No Data!', 'Count is Zero!, Re-work filter');
    }
    else if(this.count <= DATA_LIMIT) {
      this.filterApplied.emit(this.filteredCountries);
    }
    else {
      this.showAlert('Large Data!', `Count too high - (${this.count}), Re-work filter`);
    }
  }

  showAlert(title: string, message: string) {
    // show the message
    this.infoAlert.open(AlertPopupComponent, {
      data: { title: title, message: [message], type: 'Info' }
    });
  }

  clearFilter() {
    // Reset all field values
    this.code = '';
    this.name = '';

    // Reset analytics
    this.count = 0;

    // Reset data
    this.filteredCountries = [];
    this.filterApplied.emit(this.filteredCountries);
  }
}
