import React from 'react';
import { useParams } from 'react-router-dom';
import CinemaHall from '../components/CinemaHall';
import moviesData from '../data/movies';

function Booking() {
  const { id } = useParams();
  const movieId = parseInt(id);
  const movie = moviesData.find(m => m.id === movieId);

  return (
    <div className="booking-container">
      <h2 className="booking-title">
        Бронювання для фільму: {movie ? movie.title : `#${id}`}
      </h2>
      <p className="booking-subtitle">Оберіть місця в кінозалі нижче</p>

      <CinemaHall movieId={movieId} />
    </div>
  );
}


export default Booking;
