package com.macarts.basicdemo.coins;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

import java.util.Objects;

@Slf4j
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Coin {

    int value;
    int size;
    String color;

    @Override
    public String toString() {
        return "Value: " + getValue();
    }

    @Override public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Coin coin)) return false;
        return this.value == coin.value;
    }

    @Override public int hashCode() {
        return Objects.hash(value);
    }
}
