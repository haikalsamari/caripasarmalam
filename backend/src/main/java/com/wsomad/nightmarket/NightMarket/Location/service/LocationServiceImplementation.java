package com.wsomad.nightmarket.NightMarket.Location.service;

import com.wsomad.nightmarket.NightMarket.Location.dto.LocationDto;
import com.wsomad.nightmarket.NightMarket.Location.entity.Location;
import com.wsomad.nightmarket.NightMarket.Location.mapper.LocationMapper;
import com.wsomad.nightmarket.NightMarket.Location.repository.LocationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LocationServiceImplementation implements LocationService {
    @Autowired
    private LocationRepository locationRepository;

    @Override
    public void createLocation(LocationDto locationDto) {
        Location location = LocationMapper.mapToLocation(locationDto, new Location());
        locationRepository.save(location);
    }

    @Override
    public LocationDto getLocationById(Long locationId) {
        Location location = locationRepository.findById(locationId).orElse(null);

        if (location == null) {
            return null;
        }

        return LocationMapper.mapToLocationDto(location, new LocationDto());
    }

    @Override
    public Page<LocationDto> getLocationsByPage(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Location> locationPage = locationRepository.findAll(pageable);

        return locationPage.map(location ->
                LocationMapper.mapToLocationDto(location, new LocationDto())
        );
    }

    @Override
    public List<LocationDto> getAllLocations() {
        List<Location> locationList = locationRepository.findAll();

        return locationList.stream()
                .map(location -> LocationMapper.mapToLocationDto(location, new LocationDto()))
                .toList();
    }

    @Override
    public boolean updateLocationById(Long locationId, LocationDto updatedLocation) {
        Location location = locationRepository.findById(locationId).orElse(null);

        if (location != null) {
            LocationMapper.mapToLocation(updatedLocation, location);
            locationRepository.save(location);
            return true;
        }
        return false;
    }

    @Override
    public boolean deleteLocationById(Long locationId) {
        if (locationRepository.existsById(locationId)) {
            locationRepository.deleteById(locationId);
            return true;
        }
        return false;
    }
}
