const STORAGE_KEY = 'bookings';

export const BookingService = {
  getBookings() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  },

  getSeatsByMovieId(movieId) {
    const data = this.getBookings();
    return data[movieId] || [];
  },

  saveBooking(movieId, seats, userData) {
    const data = this.getBookings();
    data[movieId] = [...(data[movieId] || []), ...seats];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    console.log('Дані користувача:', userData);
  }
};
