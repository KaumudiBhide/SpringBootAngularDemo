import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgFor } from '@angular/common';
import { Coin } from '../model/data-models';
import { CoinComponent } from '../coin/coin.component';

@Component({
  selector: 'app-wallet',
  standalone: true,
  imports: [MatIconModule, MatGridListModule, CoinComponent, NgFor],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css'
})
export class WalletComponent {
  @Input() coins: Coin[] = [];
}
