package com.wsomad.nightmarket.NightMarket.Location.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Data;

import java.math.BigDecimal;

@Data
@Embeddable
public class Address {
    private String locationName;
    private String locationDistrict;
    private String locationState;
    private String operationalDay;
    private String locationCouncilName;
    @Column(precision = 10, scale = 8)
    private BigDecimal latitude;
    @Column(precision = 11, scale = 8)
    private BigDecimal longitude;
    private String displayName;
}
