import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';

const Booking = () => {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Booking for movie ID: {id}</h1>
      <CinemaHall />
    </div>
  );
};

export default Booking;
