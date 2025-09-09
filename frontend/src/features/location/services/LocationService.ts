import type { Location } from "../types/location";

export interface LocationService {
    // createLocation(location: Location): Promise<Location>;
    getLocations(limit: number): Promise<Location[]>;
    // getLocationById(locationId: number): Promise<Location>;
    // updateLocatonById(locationId: number, location: Location): Promise<Location>;
}