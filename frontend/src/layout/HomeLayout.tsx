import MapView from "@/features/location/components/map/MapView";
import useUserGeoLocation from "@/features/location/hooks/useUserGeoLocation";

export default function HomeLayout() {
    const location = useUserGeoLocation();

    if (!location) {
        return <div>Loading location...</div>;
    }

    return (
        <div className="min-h-screen">
            <MapView userLocation={location} />
        </div>
    )
}