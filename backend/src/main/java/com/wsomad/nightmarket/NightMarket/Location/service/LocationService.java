package com.wsomad.nightmarket.NightMarket.Location.service;

import com.wsomad.nightmarket.NightMarket.Location.dto.LocationDto;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LocationService {
    void createLocation(LocationDto locationDto);
    LocationDto getLocationById(Long locationId);
    Page<LocationDto> getLocationsByPage(int page, int size);
    List<LocationDto> getAllLocations();
    boolean updateLocationById(Long locationId, LocationDto updatedLocation);
    boolean deleteLocationById(Long locationId);
}
