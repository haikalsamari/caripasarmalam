package com.wsomad.nightmarket.NightMarket.Location.controller;

import com.wsomad.nightmarket.NightMarket.Location.dto.LocationDto;
import com.wsomad.nightmarket.NightMarket.Location.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/locations")
public class LocationController {
    @Autowired
    private LocationService locationService;

    @PostMapping()
    public ResponseEntity<String> createLocation(@RequestBody LocationDto locationDto) {
        locationService.createLocation(locationDto);
        return new ResponseEntity<>("Successfully create new location", HttpStatus.CREATED);
    }

    @GetMapping("/{locationId}")
    public ResponseEntity<LocationDto> getLocationById(@PathVariable Long locationId) {
        LocationDto location = locationService.getLocationById(locationId);

        if (location != null) {
            return new ResponseEntity<>(location, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping()
    public ResponseEntity<List<LocationDto>> getAllLocations(@RequestParam(defaultValue = "5") int limit) {
        List<LocationDto> locationList = locationService.getAllLocations(limit);
        if (!locationList.isEmpty()) {
            return new ResponseEntity<>(locationList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/search")
    public ResponseEntity<List<LocationDto>> findLocationsByName(@RequestParam String locationName) {
        List<LocationDto> locations = locationService.findLocationsByName(locationName);

        if (!locations.isEmpty()) {
            return new ResponseEntity<>(locations, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/update-coordinates")
    public ResponseEntity<String> updateMissingCoordinates() {
        locationService.updateLocationGeoCoordinates();
        return new ResponseEntity<>("Successfully update coordinates", HttpStatus.OK);
    }

    @PutMapping("/{locationId}")
    public ResponseEntity<String> updateLocationById(@PathVariable Long locationId, @RequestBody LocationDto updatedLocation) {
        boolean isUpdated = locationService.updateLocationById(locationId, updatedLocation);
        if (isUpdated) {
            return new ResponseEntity<>("Successfully updated location", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{locationId}")
    public ResponseEntity<String> deleteLocationById(@PathVariable Long locationId) {
        boolean isDeleted = locationService.deleteLocationById(locationId);
        if (isDeleted) {
            return new ResponseEntity<>("Successfully deleted location", HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
