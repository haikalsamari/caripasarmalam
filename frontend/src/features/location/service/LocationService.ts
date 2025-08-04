import type { Location, PaginatedLocationResponse } from "../types/location";

export interface LocationService {
    createLocation(location: Location): Promise<Location>;
    getLocations(page: number, size: number): Promise<PaginatedLocationResponse>;
    getLocationById(locationId: number): Promise<Location>;
    updateLocatonById(locationId: number, location: Location): Prom
}