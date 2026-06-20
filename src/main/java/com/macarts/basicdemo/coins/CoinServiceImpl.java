package com.macarts.basicdemo.coins;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
public class CoinServiceImpl implements CoinService{

    final static int[] COINS = {1, 20, 5, 10, 20, 100, 50, 50, 200, 100};
    /* Size - 1, 2, 5 -> 1, 10, 20, 50 -> 2, 100, 200 -> 3 */
    final static int[] COIN_SIZE = {1, 2, 1, 2, 2, 3, 2, 2, 3, 3};
    /* Color - 1, 10, 100 -> Yellow, 2, 20, 200 -> Orange, 5, 50 -> Brown */
    final static String[] COIN_COLOR
            = {"yellow", "orange", "brown", "yellow", "orange", "yellow",
                "brown", "brown", "orange", "yellow"};

    private List<Coin> wallet;

    @Override
    public List<Coin> fetch() {
        if(wallet == null)
            initWallet();

        return wallet;
    }

    @Override
    public long count() {
        if(wallet == null)
            initWallet();

        return wallet
                .stream()
                .filter(coin -> coin.getValue() == 100)
                .count();
    }

    @Override
    public List<Coin> removeDupes() {
        if(wallet == null)
            initWallet();

        return wallet.stream().distinct().collect(Collectors.toList());
    }

    @Override
    public List<Coin> sortValues() {
        if(wallet == null)
            initWallet();

        return wallet.stream()
                .sorted(Comparator.comparingInt(Coin::getValue))
                .collect(Collectors.toList());
    }

    /**
     * This method is designed to address the following problem statement:
     * Write a program to find the sum of all elements in a list using Java Stream API
     *
     * @return long - Total of all coins
     */
    @Override
    public long totalValue() {
        // Safe to ensure wallet is not null
        if(wallet == null)
            initWallet();

        return wallet.stream().mapToInt(Coin::getValue).sum();
    }

    /**
     * This method is designed to address the following problem statement:
     * Given a list of integers,
     * write a program to find and print the maximum element using Java Stream API
     *
     * @return long - Maximum of all coins
     */
    @Override
    public long maxValue() {
        if(wallet == null)
            initWallet();

        return wallet.stream().mapToInt(Coin::getValue).max().orElseThrow();
    }

    /**
     * This method is designed to address the following problem statement:
     * Given a list of integers,
     * write a program to find and print the second-largest number using Java Stream API
     *
     * @return long - Second maximum of all coins
     */
    @Override
    public long nextMaxValue() {
        if(wallet == null)
            initWallet();

        return wallet.stream()
                .sorted(Comparator.comparingInt(Coin::getValue).reversed())
                .skip(1) // skip the max coin
                .findFirst() // get the next max
                .map(Coin::getValue)
                .orElse(0);
    }

    private Coin getCoin(int i) {
        return new Coin(COINS[i], COIN_SIZE[i], COIN_COLOR[i]);
    }

    private void initWallet() {
        wallet = new ArrayList<>();
        for (int i = 0; i < 10; i++) {
            Coin dto = getCoin(i);
            wallet.add(dto);
        }
    }
}
