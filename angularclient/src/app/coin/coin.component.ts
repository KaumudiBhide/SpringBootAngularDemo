import { Component, Input, numberAttribute } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
// Import FormsModule if using standalone component
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coin',
  standalone: true,
  imports: [MatCardModule, FormsModule],
  templateUrl: './coin.component.html',
  styleUrl: './coin.component.css'
})
export class CoinComponent {
  @Input({ transform: numberAttribute }) value!: number;
}
