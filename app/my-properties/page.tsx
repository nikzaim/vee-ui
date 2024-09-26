import PageContainer from '@/components/layout/page-container';
import ReservationCard from '@/components/reservations/reservation-card';

const MyPropertiesPage = () => {
  return (
    <PageContainer>
      <h1>My Properties</h1>
      <ReservationCard />
    </PageContainer>
  );
};

export default MyPropertiesPage;
