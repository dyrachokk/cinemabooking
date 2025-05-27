import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <Link to={`/booking/${movie.id}`}>
          <button className="book-button">Забронювати</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
