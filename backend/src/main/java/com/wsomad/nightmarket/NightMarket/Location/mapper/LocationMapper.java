package com.wsomad.nightmarket.NightMarket.Location.mapper;

import com.wsomad.nightmarket.NightMarket.Location.dto.AddressDto;
import com.wsomad.nightmarket.NightMarket.Location.dto.LocationDto;
import com.wsomad.nightmarket.NightMarket.Location.entity.Address;
import com.wsomad.nightmarket.NightMarket.Location.entity.Location;

public class LocationMapper {
    public static Address mapToAddress(AddressDto addressDto) {
        Address address = new Address();
        address.setLocationName(addressDto.getLocationName());
        address.setLocationDistrict(addressDto.getLocationDistrict());
        address.setLocationState(addressDto.getLocationState());
        address.setLocationCouncilName(addressDto.getLocationCouncilName());
        return address;
    }

    public static AddressDto mapToAddressDto(Address address) {
        AddressDto addressDto = new AddressDto();
        addressDto.setLocationName(address.getLocationName());
        addressDto.setLocationDistrict(address.getLocationDistrict());
        addressDto.setLocationState(address.getLocationState());
        addressDto.setLocationCouncilName(address.getLocationCouncilName());
        return addressDto;
    }

    public static Location mapToLocation(LocationDto locationDto, Location location) {
        if (location.getLocationId() == null) {

        } else {
            if (!location.getLocationId().equals(locationDto.getLocationId())) {
                throw new IllegalArgumentException("Mismatched location ID between DTO and entity.");
            }
        }
        location.setLocationAddress(mapToAddress(locationDto.getLocationAddress()));
        return location;
    }

    public static LocationDto mapToLocationDto(Location location, LocationDto locationDto) {
        locationDto.setLocationId(location.getLocationId());
        locationDto.setLocationAddress(mapToAddressDto(location.getLocationAddress()));
        locationDto.setCreatedAt(location.getCreatedAt());
        locationDto.setUpdatedAt(location.getUpdatedAt());
        return locationDto;
    }

}
