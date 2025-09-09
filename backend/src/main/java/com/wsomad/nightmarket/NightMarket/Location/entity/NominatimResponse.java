package com.wsomad.nightmarket.NightMarket.Location.entity;

import lombok.Data;

@Data
public class NominatimResponse {
    private String lat;
    private String lon;
    private String display_name;
}
