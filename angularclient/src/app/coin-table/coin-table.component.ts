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

  /* Stream API name */
  streamAPIName: string;

  constructor(private coinService: CoinService) {}

  ngOnInit() {
        this.coinService.getCoins().subscribe((data: Coin[]) => {
         console.log(data);
         this.coins = data;
         this.streamAPIName = ''
     });
  }

   onSort() {
         this.coinService.getSortedCoins().subscribe((data: Coin[]) => {
           console.log(data);
           this.coins = data;
         });
       this.streamAPIName = 'sorted()'
   }

    onDistinct() {
         this.coinService.getDistinctCoins().subscribe((data: Coin[]) => {
           console.log(data);
           this.coins = data;
         });
         this.streamAPIName = 'distinct()'
    }

    onReFill() {
          this.coinService.getCoins().subscribe((data: Coin[]) => {
            console.log(data);
            this.coins = [];
            this.coins = data;
            this.streamAPIName = ''
          });
       }

    onTotal() {
           this.coinService.getTotal().subscribe((data: number) => {
             console.log(data);
             this.spCoin[0].value = data
             console.log(this.spCoin);
             this.coins = this.spCoin;
           });
         this.streamAPIName = 'sum()'
    }

    onMax() {
           this.coinService.getMaxCoin().subscribe((data: number) => {
             console.log(data);
             this.spCoin[0].value = data
              console.log(this.spCoin);
              this.coins = this.spCoin;
           });
         this.streamAPIName = 'max()'
    }

    onNextMax() {
           this.coinService.getNextMaxCoin().subscribe((data: number) => {
             console.log(data);
             this.spCoin[0].value = data
              console.log(this.spCoin);
              this.coins = this.spCoin;
           });
         this.streamAPIName = 'sorted(), skip(1), findFirst()'
    }

    onCount() {
           this.coinService.getCount().subscribe((data: number) => {
             console.log(data);
             this.spCoin[0].value = data
              console.log(this.spCoin);
              this.coins = this.spCoin;
           });
         this.streamAPIName = 'filter(), count()'
    }
}
