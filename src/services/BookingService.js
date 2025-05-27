const STORAGE_KEY = 'movie-bookings';

const BookingService = {
  getBookings() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  },

  getBookedSeats(movieId) {
    const bookings = this.getBookings();
    return bookings[movieId] || [];
  },

  saveBooking(movieId, seats) {
    const bookings = this.getBookings();
    if (!bookings[movieId]) {
      bookings[movieId] = [];
    }
    bookings[movieId] = Array.from(new Set([...bookings[movieId], ...seats]));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
  }
};

export default BookingService;
