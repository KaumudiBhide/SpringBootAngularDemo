package com.macarts.basicdemo.coins;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Tag(name = "Coin Controller", description = "For Stream API numeric functions")
@Slf4j
@CrossOrigin(origins = "http://localhost:4200")
public class CoinController {

    @Autowired
    CoinService coinService;

    @GetMapping("/coins")
    public List<Coin> getAllCoins() {
        return coinService.fetch();
    }

    @GetMapping("/countValue")
    public long getAllCoinsForValue(@RequestParam int value) {
        return coinService.countValue(value);
    }

    @GetMapping("/distinct")
    public List<Coin> getAllDistinctCoins() {
        return coinService.removeDupes();
    }

    @GetMapping("/sorted")
    public List<Coin> getAllSortedCoins() {
        return coinService.sortValues();
    }

    /**
     * This service is added to address the following problem statement:
     * Write a program to find the sum of all elements in a list using Java Stream API
     *
     * @return long - Total of all coins
     */
    @GetMapping("/sum")
    public long getTotalValue() {
        return coinService.totalValue();
    }

    /**
     * This service is added to address the following problem statement:
     * Given a list of integers,
     * write a program to find and print the maximum element using Java Stream API
     *
     * @return long - Maximum of all coins
     */
    @GetMapping("/maxValue")
    public long getMaxValue() {
        return coinService.maxValue();
    }

    /**
     * This service is added to address the following problem statement:
     * Given a list of integers,
     * write a program to find and print the second-largest number using Java Stream API
     *
     * @return long - Second maximum of all coins
     */
    @GetMapping("/nextMax")
    public long getNextMaxValue() {
        return coinService.nextMaxValue();
    }
}
