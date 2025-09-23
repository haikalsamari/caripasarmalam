import { useEffect, useState } from 'react'
import type { Location } from '../../types/location'
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import useLocation from '../../hooks/useLocation';
import LocationList from '../location/LocationList';

interface MapViewProps {
    userLocation: {
        latitude: number;
        longitude: number;
    }
}

const MapController = ({ selectedLocation }: { selectedLocation: Location | null }) => {
    const map = useMap();
    
    useEffect(() => {
      if (selectedLocation && map) {
        map.setView(
          [
            Number(selectedLocation.locationAddress.latitude),
            Number(selectedLocation.locationAddress.longitude)
          ],
          15 // zoom level
        );
      }
    }, [selectedLocation, map]);
  
    return null;
  };

const MapView = ({userLocation}: MapViewProps) => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    // const [mapRef, setMapRef] = useState(null);
    const [limit] = useState(10);
    const {getLocations} = useLocation();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLocations(limit);
            setLocations(data);
        };
    
        fetchData();
    }, []);

    const handleSelectedLocation = (location: Location) => {
        setSelectedLocation(location);
    }

    // const handleSelectedLocation = (location: Location) => {
    //     setSelectedLocation(location);
    //     if (mapRef) {
    //         // @ts-ignore - mapRef type issues with react-leaflet
    //         mapRef.setView(
    //             [
    //                 Number(location.locationAddress.latitude),
    //                 Number(location.locationAddress.longitude)
    //             ],
    //         )
    //     }
    // }

    return (
        <div className="relative w-full h-screen">
            <div className="absolute left-0 bottom-0 h-full w-[400px] z-[1000] px-3 py-20 overflow-y-auto">
                <LocationList onLocationSelect={handleSelectedLocation}></LocationList>
            </div>
            <MapContainer center={[userLocation.latitude, userLocation.longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
                <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='© OpenStreetMap contributors'/>
                <Marker 
                    position={[userLocation.latitude, userLocation.longitude]}
                    icon={L.divIcon({
                        className:"relative w-5 h-5 bg-blue-500/70 rounded-full before:content-[''] before:absolute before:w-5 before:h-5 before:rounded-full before:bg-blue-500/50 before:animate-ping",
                        iconSize: [20, 20],
                    })}
                >
                    <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent={false}>
                        You are here
                    </Tooltip>
                </Marker>

                {locations?.map((location) => {
                    const lat = Number(location.locationAddress.latitude);
                    const lng = Number(location.locationAddress.longitude);

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

{/* {selectedLocation && (
                    <Marker
                        position={[
                            Number(selectedLocation.locationAddress.latitude),
                            Number(selectedLocation.locationAddress.longitude)
                        ]}
                        icon={L.icon({
                            iconUrl: "https://cdn-icons-png.flaticon.com/512/3177/3177361.png",
                            iconSize: [32, 32],
                        })}
                    >
                        <Popup>{selectedLocation.locationAddress.locationName}</Popup>
                    </Marker>
                )} */}
                                <MapController selectedLocation={selectedLocation} />

            </MapContainer>
        </div>
    )
}

export default MapView