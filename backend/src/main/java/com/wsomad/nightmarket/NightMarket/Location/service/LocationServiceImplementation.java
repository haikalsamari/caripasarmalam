package com.wsomad.nightmarket.NightMarket.Location.service;

import com.wsomad.nightmarket.NightMarket.Location.dto.LocationDto;
import com.wsomad.nightmarket.NightMarket.Location.entity.Coordinates;
import com.wsomad.nightmarket.NightMarket.Location.entity.CouncilList;
import com.wsomad.nightmarket.NightMarket.Location.entity.Location;
import com.wsomad.nightmarket.NightMarket.Location.mapper.LocationMapper;
import com.wsomad.nightmarket.NightMarket.Location.repository.LocationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LocationServiceImplementation implements LocationService {
    @Autowired
    private LocationRepository locationRepository;

    @Autowired
    private GeoCodingService geoCodingService;

    @Override
    public void createLocation(LocationDto locationDto) {
        Location location = LocationMapper.mapToLocation(locationDto, new Location());

        String council = CouncilList.councilList.get(locationDto.getLocationAddress().getLocationDistrict());
        if (council == null) {
            throw new IllegalArgumentException("Invalid location name: " + locationDto.getLocationAddress().getLocationDistrict());
        }

        location.getLocationAddress().setLocationCouncilName(council);

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
    public List<LocationDto> getAllLocations(int limit) {
        Pageable pageable = PageRequest.of(0, limit);
        List<Location> locationPage = locationRepository.findAll(pageable).getContent();

        return locationPage.stream()
                .map(location -> LocationMapper.mapToLocationDto(location, new LocationDto()))
                .toList();
    }

    @Override
    public List<LocationDto> findLocationsByName(String locationName) {
        List<Location> locations = locationRepository.findByLocationAddress_LocationNameContainingIgnoreCase(locationName);

        return locations.stream()
                .map(location -> LocationMapper.mapToLocationDto(location, new LocationDto()))
                .toList();
    }

    @Override
    @Transactional
    public void updateLocationGeoCoordinates() {
        List<Location> locations = locationRepository.findAll();

        for (Location location : locations) {
            Coordinates coordinates = geoCodingService.getGeoCodeAddress(location.getLocationAddress());
            if (coordinates != null) {
                location.getLocationAddress().setLatitude(coordinates.getLatitude());
                location.getLocationAddress().setLongitude(coordinates.getLongitude());
                location.getLocationAddress().setDisplayName(coordinates.getDisplayName());
                locationRepository.save(location);

                try {
                    Thread.sleep(1000); // respect API rate limit
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        }
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
