package com.wsomad.nightmarket.NightMarket.Location.entity;

import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class Address {
    private String locationName;
    private String locationDistrict;
    private String locationState;
    private String locationCouncilName;
}
