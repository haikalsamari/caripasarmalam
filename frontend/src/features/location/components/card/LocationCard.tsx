import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Icons } from "@/utils/icons";

interface LocationCardProps {
    location: {
        locationId: string;
        locationAddress: {
            locationName: string;
            locationDistrict: string;
            locationState: string;
            locationCouncilName: string;
        };
        operationalDay: string;
    };
}

export default function LocationCard({location}: LocationCardProps) {
    return (
        <Card className="h-[280px] sm:h-[320px] md:h-[340px] lg:h-[360px]">
            <CardContent className="flex justify-center items-center bg-gray-100 h-1/2">
                <Icons.NightMarketStore 
                    className="text-gray-400 transition-all duration-300" 
                    size={50} 
                    
                />
            </CardContent>
            <CardFooter className="flex flex-col h-2/5 w-full p-3 sm:p-3 md:p-5">
                <div className="flex flex-col mb-2">
                    <CardTitle className="text-sm sm:text-sm md:text-lg truncate">
                        {location.locationAddress.locationName}
                    </CardTitle>
                    <p className="text-xs sm:text-sm text-gray-400 truncate">
                        {location.locationAddress.locationDistrict}, {location.locationAddress.locationState}
                    </p>
                    <div className="flex flex-row items-center gap-2">
                        <Icons.TagDay className="text-gray-400"></Icons.TagDay>
                        <p className="text-sm text-gray-400 my-1 sm:my-2">
                            {location.operationalDay}
                        </p>
                    </div>
                </div>
                <CardAction className="w-full mt-auto">
                    <Button className="w-full rounded-md text-xs sm:text-sm md:text-base bg-gradient-to-r from-blue-700 to-blue-900" variant="default">
                        See Details
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    )
}