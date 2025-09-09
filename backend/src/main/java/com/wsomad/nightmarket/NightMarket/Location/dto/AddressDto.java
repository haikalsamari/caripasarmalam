package com.wsomad.nightmarket.NightMarket.Location.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AddressDto {
    private String locationName;
    private String locationDistrict;
    private String locationState;
    private String operationalDay;
    private String locationCouncilName;
    private BigDecimal latitude;
    private BigDecimal longitude;
    private String displayName;
}
