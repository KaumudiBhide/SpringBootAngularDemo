package com.macarts.basicdemo.coins;

import java.util.List;

public interface CoinService {

    public List<Coin> fetch();

    public long countValue(int value);

    public List<Coin> removeDupes();

    public List<Coin> sortValues();

    public long totalValue();

    public long maxValue();

    public long nextMaxValue();
}
