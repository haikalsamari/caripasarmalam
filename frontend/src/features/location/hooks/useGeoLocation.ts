import { useEffect, useState } from "react";

type Coordinates = {
    latitude: number;
    longitude: number;
}

export default function useGeoLocation() {
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) return;

        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            });
        },
            (error) => {
                console.error("Geolocation error:", error);
            }
        )
    }, []);

    return coordinates;
}