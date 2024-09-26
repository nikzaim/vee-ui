import Categories from '@/components/main/categories';
import PropertiesListing from '@/components/property/properties-listing';

export default function Dashboard() {
  return (
    <div className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <Categories />
      <PropertiesListing />
    </div>
  );
}
