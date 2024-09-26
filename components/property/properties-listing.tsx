import PropertyCard from './property-card';

const PropertiesListing = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default PropertiesListing;
