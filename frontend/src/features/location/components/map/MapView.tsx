import { useEffect, useState } from 'react'
import type { Location } from '../../types/location'
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { LocationServiceImpl } from '../../services/LocationServiceImpl';

interface MapViewProps {
    userLocation: {
        latitude: number;
        longitude: number;
    }
}

const isValidCoordinate = (value: any): value is number => {
    return typeof value === 'number' && !isNaN(value);
};

const MapView = ({userLocation}: MapViewProps) => {
    const locationService = new LocationServiceImpl();
    const [locations, setLocations] = useState<Location[]>([]);
    const [limit] = useState(70);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await locationService.getLocations(limit);
                setLocations(response);
            } catch (error) {
                console.error('Failed to fetch locations:', error);
            }
        };
        fetchLocations();
    }, []);


    // useEffect(() => {
    //     if (locations) {
    //         console.log('Locations updated:', locations.map(loc => ({
    //             id: loc.locationId,
    //             name: loc.locationAddress.locationName,
    //             lat: loc.locationAddress.latitude,
    //             lng: loc.locationAddress.longitude
    //         })));
    //     }
    // }, [locations]);

    return (
        <div className="relative w-full h-screen">
            {/* <div className="absolute left-0 top-0 h-full w-[400px] z-[1000] p-5 overflow-y-auto">
                <LocationListView></LocationListView>
            </div> */}
            <MapContainer center={[userLocation.latitude, userLocation.longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='© OpenStreetMap contributors'/>
                <Marker position={[userLocation.latitude, userLocation.longitude]}>
                    <Popup>You are here</Popup>
                </Marker>

                {locations?.map((location) => {
                    const lat = Number(location.locationAddress.latitude);
                    const lng = Number(location.locationAddress.longitude);


                    // Skip invalid coordinates
                    if (!isValidCoordinate(lat) || !isValidCoordinate(lng)) {
                        console.warn(`Invalid coordinates for location ${location.locationId}`);
                        return null;
                    }

                    return (
                        <Marker
                            key={location.locationId}
                            position={[lat, lng]}
                            icon={L.icon({
                                iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
                                iconSize: [32, 32],
                            })}
                        >
                        <Popup>{location.locationAddress.locationName}</Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    )
}

export default MapView