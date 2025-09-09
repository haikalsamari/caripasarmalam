import MapView from "@/features/location/components/map/MapView";
import useGeoLocation from "@/features/location/hooks/useGeoLocation";

export default function HomeLayout() {
    const location = useGeoLocation();

    if (!location) {
        return <div>Loading location...</div>;
    }

    return (
        <div className="min-h-screen">
            <MapView userLocation={location} />
        </div>
    )
}