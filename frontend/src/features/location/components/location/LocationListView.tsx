import type { Location } from '../../types/location';

interface LocationListViewProps {
  locations: Location[];
  onLocationClick?: (location: Location) => void;
}

const LocationListView = ({locations, onLocationClick}: LocationListViewProps) => {  
  return (
    <div className='relative text-black w-[350px] bg-white rounded-xl'>
      {locations.map((location, index) => (
        <div 
          key={location.locationId} 
          className={`py-2 px-4 hover:bg-gray-100 cursor-pointer transition-colors ${index !== locations.length - 1 ? 'border-b border-gray-200' : ''}`}
          onClick={() => onLocationClick?.(location)}
        >
          {location.locationAddress.locationName}
        </div>      
      ))}
    </div>
  )
}

export default LocationListView