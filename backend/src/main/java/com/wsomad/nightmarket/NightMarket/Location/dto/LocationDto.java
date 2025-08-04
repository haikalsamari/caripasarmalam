package com.wsomad.nightmarket.NightMarket.Location.dto;

import com.wsomad.nightmarket.NightMarket.Location.entity.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LocationDto {
    private Long locationId;
    private AddressDto locationAddress;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
