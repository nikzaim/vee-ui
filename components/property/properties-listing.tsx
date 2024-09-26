import { cn } from '@/lib/utils';
import PropertyCard from './property-card';

interface PropertiesListingProps {
  className?: string | undefined;
}

const PropertiesListing = ({ className }: PropertiesListingProps) => {
  return (
    <div className="flex justify-center">
      <div
        className={cn(
          'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4',
          className
        )}
      >
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default PropertiesListing;
