import { useState } from 'react';

const CinemaHall = () => {
  const totalSeats = 30;
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
      <div className="selected-seats-label">
        Обрані місця:
        <span>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'немає'}</span>
      </div>
    </div>
  );
};

export default CinemaHall;
