import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BookingService } from '../services/BookingService';
import CinemaHall from '../components/CinemaHall';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
  const { id } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    const seats = BookingService.getSeatsByMovieId(id);
    setBookedSeats(seats);
  }, [id]);

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    const { name, phone, email } = form;

    if (!name || !phone || !email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error('Будь ласка, заповніть всі поля коректно');
      return;
    }

    BookingService.saveBooking(id, selectedSeats, form);
    toast.success('Бронювання успішно збережено!');
    setSelectedSeats([]);
  };

  return (
    <div className="booking-page">
      <h1>Обрати місця</h1>
      <CinemaHall
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        bookedSeats={bookedSeats}
      />
      <div className="form">
        <input name="name" placeholder="Ім'я" value={form.name} onChange={handleInputChange} />
        <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleInputChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleInputChange} />
        <button className="confirm-button" onClick={handleBooking}>Підтвердити бронювання</button>
      </div>
    </div>
  );
};

export default Booking;
