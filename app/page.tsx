import PageContainer from '@/components/layout/page-container';
import Categories from '@/components/main/categories';
import PropertiesListing from '@/components/property/properties-listing';

export default function Dashboard() {
  return (
    <PageContainer>
      <Categories />
      <PropertiesListing />
    </PageContainer>
  );
}
