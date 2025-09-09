import axios from "axios";
import type { Location } from "../types/location";
import type { LocationService } from "./LocationService";
import { API_BASE_URL } from "@/config/api";

export class LocationServiceImpl implements LocationService {
    async getLocations(limit: number): Promise<Location[]> {
        try {
            const response = await axios.get<Location[]>(
                `${API_BASE_URL}`,
                {
                    params: {
                        limit
                    }
                }
            );
            console.log('API Response:', JSON.stringify(response.data, null, 2));

            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch locations");
        }
    }
}