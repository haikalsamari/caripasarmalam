import { LocationServiceImpl } from "../services/LocationServiceImpl";

export default function useLocation() {
    const locationService = new LocationServiceImpl();

    const getLocations = async (limit: number) => {
        try {
            return await locationService.getLocations(limit);
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    return {getLocations};
}