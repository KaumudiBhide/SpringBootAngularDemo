import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { CoinService } from '../service/coin.service';
import { Coin } from '../model/data-models';
import { WalletComponent } from '../wallet/wallet.component';

@Component({
  selector: 'app-coin-table',
  standalone: true,
  imports: [MatGridListModule, WalletComponent],
  templateUrl: './coin-table.component.html',
  styleUrl: './coin-table.component.css'
})
export class CoinTableComponent {
  /* Array of coins */
  coins: Coin[];

  /* To Display only one coin */
  spCoin: Coin[] = [{"value": 88, "size": 3, "color": "orange"}];

  constructor(private coinService: CoinService) {}

  ngOnInit() {
        this.coinService.getCoins().subscribe((data: Coin[]) => {
         console.log(data);
         this.coins = data;
     });
  }

   onSort() {
         this.coinService.getSortedCoins().subscribe((data: Coin[]) => {
           console.log(data);
           this.coins = data;
         });
   }

    onDistinct() {
         this.coinService.getDistinctCoins().subscribe((data: Coin[]) => {
           console.log(data);
           this.coins = data;
         });
    }

    onReFill() {
          this.coinService.getCoins().subscribe((data: Coin[]) => {
            console.log(data);
            this.coins = [];
            this.coins = data;
          });
       }

    onTotal() {
           this.coinService.getTotal().subscribe((data: number) => {
             console.log(data);
             this.spCoin[0].value = data
             console.log(this.spCoin);
             this.coins = this.spCoin;
           });
    }

    onMax() {
           this.coinService.getMaxCoin().subscribe((data: number) => {
             console.log(data);
             this.spCoin[0].value = data
              console.log(this.spCoin);
              this.coins = this.spCoin;
           });
    }
}
