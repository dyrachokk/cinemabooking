import { useState } from 'react';

const CinemaHall = () => {
  const totalSeats = 30;
  const seatsPerRow = 6;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  return (
    <div>
      <div className="hall">
        {[...Array(totalSeats)].map((_, i) => {
          const seat = i + 1;
          const selected = selectedSeats.includes(seat);
          return (
            <div
              key={seat}
              className={`seat ${selected ? 'selected' : ''}`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>
      <p>Обрані місця: {selectedSeats.join(', ')}</p>
    </div>
  );
};

export default CinemaHall;
