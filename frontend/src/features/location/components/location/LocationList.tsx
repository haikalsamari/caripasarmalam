import { useEffect, useState } from 'react'
import useLocation from '../../hooks/useLocation';
import type { Location } from '../../types/location';
import LocationListView from './LocationListView';

interface LocationListProps {
    onLocationSelect?: (location: Location) => void;
}

const LocationList = ({onLocationSelect}: LocationListProps) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [limit] = useState(10);
  const {getLocations} = useLocation();

  useEffect(() => {
    const fetchData = async () => {
        const data = await getLocations(limit);
        setLocations(data);
    };
    fetchData();
  }, []);  
  
  return (
    <div className='relative text-black w-[350px] bg-white rounded-md'>
        <LocationListView 
            locations={locations} 
            onLocationClick={onLocationSelect}
        />
    </div>  
  )
}

export default LocationList