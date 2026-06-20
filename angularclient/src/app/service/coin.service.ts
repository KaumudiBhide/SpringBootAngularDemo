import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../model/data-models';

@Injectable({
  providedIn: 'root'
})
export class CoinService {
    coinUrl: string;
    coinSortUrl: string;
    coinDistUrl: string;
    coinTotalUrl: string;
    coinMaxUrl: string;
    coinNextMaxUrl: string;
    coinCountUrl: string;

  constructor(private http: HttpClient) {
      this.coinUrl = 'http://localhost:6600/coins';
      this.coinSortUrl = 'http://localhost:6600/sorted';
      this.coinDistUrl = 'http://localhost:6600/distinct';
      this.coinTotalUrl = 'http://localhost:6600/sum';
      this.coinMaxUrl = 'http://localhost:6600/maxValue';
      this.coinNextMaxUrl = 'http://localhost:6600/nextMax'
      this.coinCountUrl = 'http://localhost:6600/count'
  }

  public getCoins(): Observable<Coin[]> {
        return this.http.get<Coin[]>(this.coinUrl);
  }

  public getSortedCoins(): Observable<Coin[]> {
    return this.http.get<Coin[]>(this.coinSortUrl);
  }

  public getDistinctCoins(): Observable<Coin[]> {
        return this.http.get<Coin[]>(this.coinDistUrl);
  }

  public getTotal(): Observable<number> {
    return this.http.get<number>(this.coinTotalUrl);
  }

  public getMaxCoin(): Observable<number> {
        return this.http.get<number>(this.coinMaxUrl);
  }

  public getNextMaxCoin(): Observable<number> {
        return this.http.get<number>(this.coinNextMaxUrl);
  }

  public getCount(): Observable<number> {
        return this.http.get<number>(this.coinCountUrl);
  }
}
