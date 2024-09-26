import PageContainer from '@/components/layout/page-container';
import ReservationCard from '@/components/reservations/reservation-card';

const MyReservationsPage = () => {
  return (
    <PageContainer>
      <h1>My Reservations</h1>
      <ReservationCard />
    </PageContainer>
  );
};

export default MyReservationsPage;
