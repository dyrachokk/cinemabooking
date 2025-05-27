import { useState } from 'react';

const CinemaHall = () => {
  const rows = 5;
  const seatsPerRow = 6;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, seat) => {
    const seatId = `${row}-${seat}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((s) => s !== seatId)
        : [...prev, seatId]
    );
  };

  return (
    <div>
      <div className="hall">
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="row-block">
            <div className="row-label">Ряд {rowIndex + 1}:</div>
            <div className="row-seats">
              {[...Array(seatsPerRow)].map((_, seatIndex) => {
                const row = rowIndex + 1;
                const seat = seatIndex + 1;
                const seatId = `${row}-${seat}`;
                const selected = selectedSeats.includes(seatId);

                return (
                  <div
                    key={seatId}
                    className={`seat ${selected ? 'selected' : ''}`}
                    onClick={() => toggleSeat(row, seat)}
                  >
                    {seat}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="selected-seats-label">
        Обрані місця:
        <span>
          {selectedSeats.length > 0
            ? selectedSeats.map(s => `Ряд ${s.split('-')[0]}, Місце ${s.split('-')[1]}`).join(', ')
            : 'немає'}
        </span>
      </div>
    </div>
  );
};

export default CinemaHall;
