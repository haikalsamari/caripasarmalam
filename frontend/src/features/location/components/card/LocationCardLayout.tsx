import LocationCard from "./LocationCard";

export default function LocationCardLayout() {
    const dummyLocations = [
        {
            locationId: "1",
            locationAddress: {
                locationName: "Pasar Malam Taman Connaught",
                locationDistrict: "Cheras",
                locationState: "Kuala Lumpur",
                locationCouncilName: "DBKL"
            },
            operationalDay: "Friday",
            createdAt: "2025-07-01T10:00:00Z",
            updatedAt: "2025-07-01T10:00:00Z"
        },
        {
            locationId: "2",
            locationAddress: {
                locationName: "Pasar Malam SS2",
                locationDistrict: "Petaling Jaya",
                locationState: "Selangor",
                locationCouncilName: "MBPJ"
            },
            operationalDay: "Saturday",
            createdAt: "2025-07-01T10:00:00Z",
            updatedAt: "2025-07-01T10:00:00Z"
        },
        {
            locationId: "3",
            locationAddress: {
                locationName: "Pasar Malam Kepong",
                locationDistrict: "Kepong",
                locationState: "Kuala Lumpur",
                locationCouncilName: "DBKL"
            },
            operationalDay: "Monday",
            createdAt: "2025-07-01T10:00:00Z",
            updatedAt: "2025-07-01T10:00:00Z"
        },
        {
            locationId: "4",
            locationAddress: {
                locationName: "Pasar Malam Kepong",
                locationDistrict: "Kepong",
                locationState: "Kuala Lumpur",
                locationCouncilName: "DBKL"
            },
            operationalDay: "Wednesday",
            createdAt: "2025-07-01T10:00:00Z",
            updatedAt: "2025-07-01T10:00:00Z"
        }
    ];

    return (
        <>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-8">
            {dummyLocations.map((location) => (
                <LocationCard 
                    key={location.locationId} 
                    location={location}
                />
            ))}
        </div>
        </>
    )
}