import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookingService from '../services/BookingService';
import { toast } from 'react-toastify';

const ROWS = 5;
const COLS = 8;

function CinemaHall() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const { id } = useParams();
  const movieId = parseInt(id);

  useEffect(() => {
    const booked = BookingService.getBookedSeats(movieId);
    setBookedSeats(booked);
  }, [movieId]);

  const toggleSeat = (index) => {
    if (bookedSeats.includes(index)) return;
    setSelectedSeats(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      toast.error('Заповніть усі поля');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Некоректний email');
      return;
    }

    BookingService.saveBooking(movieId, selectedSeats);

    toast.success('Бронювання збережено!');
    setBookedSeats(prev => [...prev, ...selectedSeats]);
    setSelectedSeats([]);
    setShowForm(false);
    setName('');
    setPhone('');
    setEmail('');
  };

 return (
  <div className="cinema-container">
    <div className="hall">
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div key={rowIndex} className="row">
          <div className="row-label">Ряд {rowIndex + 1}</div>
          {Array.from({ length: COLS }).map((_, colIndex) => {
            const index = rowIndex * COLS + colIndex;
            const isSelected = selectedSeats.includes(index);
            const isBooked = bookedSeats.includes(index);
            return (
              <div
                key={index}
                className={`seat ${
                  isBooked ? 'booked' : isSelected ? 'selected' : 'available'
                }`}
                onClick={() => toggleSeat(index)}
              >
                {colIndex + 1}
              </div>
            );
          })}
        </div>
      ))}
    </div>

    <p style={{ marginTop: '1rem' }}>
      {selectedSeats.length > 0
        ? Object.entries(
            selectedSeats.reduce((acc, index) => {
              const row = Math.floor(index / COLS) + 1;
              const seat = (index % COLS) + 1;
              if (!acc[row]) acc[row] = [];
              acc[row].push(seat);
              return acc;
            }, {})
          )
            .map(
              ([row, seats]) =>
                `Ряд ${row}: місця ${seats.sort((a, b) => a - b).join(', ')}`
            )
            .join(' | ')
        : 'Вибрані місця: немає'}
    </p>

    {selectedSeats.length > 0 && (
      <>
        <button
          onClick={() => setShowForm(true)}
          className="book-button"
           style={{ marginTop: '1rem' }}
        >
          Забронювати
        </button>


        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ім'я"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Телефон"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="booking-button">
              Підтвердити бронювання
            </button>
          </form>
        )}
      </>
    )}
  </div>
);

}

export default CinemaHall;
