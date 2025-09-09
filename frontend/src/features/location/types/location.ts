export interface Location {
    locationId: string;
    locationAddress: Address;
    createdAt?: Date;
    updatedAt?: Date;
}

interface Address {
    locationName: string;
    locationDistrict: string;
    locationState: string;
    locationCouncilName: string;
    latitude: number;
    longitude: number;
    displayName: string;
}

// export interface LocationResponse {
//     content: Location[];
// }

// export interface PaginatedLocationResponse {
//     content: Location[];
//     totalElements: number;
//     totalPages: number;
//     number: number;
//     size: number;
//     first: boolean;
//     last: boolean;
//     numberOfElements: number;
//     empty: boolean;
// }