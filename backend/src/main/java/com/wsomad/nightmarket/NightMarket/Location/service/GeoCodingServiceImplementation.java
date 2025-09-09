package com.wsomad.nightmarket.NightMarket.Location.service;

import com.wsomad.nightmarket.NightMarket.Location.entity.Address;
import com.wsomad.nightmarket.NightMarket.Location.entity.Coordinates;
import com.wsomad.nightmarket.NightMarket.Location.entity.NominatimResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.math.BigDecimal;
import java.util.List;

@Service
public class GeoCodingServiceImplementation implements GeoCodingService {
    private final WebClient webClient;

    public GeoCodingServiceImplementation(WebClient webClient) {
        this.webClient = webClient;
    }

    public Coordinates getGeoCodeAddress(Address address) {
        // 1. Build query string from address object
        String query = String
                .format("%s, %s, %s",
                        address.getLocationName(),
                        address.getLocationDistrict(),
                        address.getLocationState());

        // 2. Call Nominatim API
        List<NominatimResponse> responseList = webClient.get().uri(
                        uriBuilder -> uriBuilder
                                .path("/search")
                                .queryParam("q", query)
                                .queryParam("format", "json")
                                .queryParam("limit", 1)
                                .build())
                .retrieve()
                .bodyToFlux(NominatimResponse.class)
                .collectList()
                .block();

        // 3. Get first result
        if (responseList != null && !responseList.isEmpty()) {
            NominatimResponse response = responseList.get(0);
            System.out.println("Response: " + response);
            return new Coordinates(
                    BigDecimal.valueOf(Double.parseDouble(response.getLat())),
                    BigDecimal.valueOf(Double.parseDouble(response.getLon())),
                    response.getDisplay_name()
            );
        }

        System.out.println("No coordinates found for: " + query);
        return null;
    }
}
