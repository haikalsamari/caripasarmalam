package com.wsomad.nightmarket.NightMarket.Location.service;

import com.wsomad.nightmarket.NightMarket.Location.entity.Address;
import com.wsomad.nightmarket.NightMarket.Location.entity.Coordinates;
import org.springframework.stereotype.Service;

@Service
public interface GeoCodingService {
    Coordinates getGeoCodeAddress(Address address);
}
