package com.wsomad.nightmarket.NightMarket.Location.entity;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class Coordinates {
    private BigDecimal latitude;
    private BigDecimal longitude;
    private String displayName;
}
